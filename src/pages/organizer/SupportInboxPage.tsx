import { useState } from 'react';
import styles from './SupportInboxPage.module.css';
import { supportCases, caseStatusColor } from '../../data/supportCases';

export function SupportInboxPage() {
  const [selected, setSelected] = useState(0);
  const active = supportCases[selected];

  return (
    <div className={styles.layout}>
      <div className={styles.listColumn}>
        <div className={styles.listHeader}>
          <div className={styles.eyebrow}>Organizer</div>
          <h1 className={styles.title}>Support Inbox</h1>
        </div>

        <div className={styles.caseList}>
          {supportCases.map((c, i) => {
            const isActive = i === selected;
            return (
              <div key={c.id}>
                <button
                  className={isActive ? `${styles.caseRow} ${styles.caseRowActive}` : styles.caseRow}
                  onClick={() => setSelected(i)}
                >
                  <div className={styles.caseTop}>
                    <div className={styles.requester}>{c.requester}</div>
                    <div className={styles.timestamp}>{c.timestamp}</div>
                  </div>
                  <div className={styles.categoryLine}>
                    {c.category} · {c.eventContext}
                  </div>
                  <div className={styles.statusLabel} style={{ color: caseStatusColor[c.status] }}>
                    {c.status}
                  </div>
                </button>

                {/* Mobile-only inline thread (desktop uses the detail column instead) */}
                {isActive && (
                  <div className={styles.mobileThread}>
                    {c.messages.map((m, mi) => (
                      <div
                        key={mi}
                        className={`${styles.bubble} ${m.from === 'staff' ? styles.bubbleStaff : styles.bubbleAttendee}`}
                      >
                        {m.text}
                      </div>
                    ))}
                    <div className={styles.mobileComposer}>
                      <div className={styles.composerInput}>Reply…</div>
                      <button className={styles.sendButton}>Send</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.detailColumn}>
        <div className={styles.detailHeader}>
          <div>
            <div className={styles.detailTitle}>{active.requester}</div>
            <div className={styles.detailSub}>
              {active.category} · {active.eventContext}
            </div>
          </div>
          <div className={styles.detailStatus} style={{ color: caseStatusColor[active.status] }}>
            {active.status}
          </div>
        </div>

        <div className={styles.thread}>
          {active.messages.map((m, i) => (
            <div key={i} className={`${styles.bubble} ${m.from === 'staff' ? styles.bubbleStaff : styles.bubbleAttendee}`}>
              {m.text}
            </div>
          ))}
        </div>

        <div className={styles.composer}>
          <div className={styles.composerInput}>Reply to {active.requester}…</div>
          <button className={styles.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
}
