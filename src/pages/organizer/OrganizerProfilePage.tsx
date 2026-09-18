import { useState } from 'react';
import styles from './OrganizerProfilePage.module.css';
import { BankIcon } from '../../components/icons';

export function OrganizerProfilePage() {
  const [editingInfo, setEditingInfo] = useState(false);
  const [payoutConnected, setPayoutConnected] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.eyebrow}>Organizer</div>
      <h1 className={styles.title}>Profile</h1>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Contact Information</div>
          {editingInfo ? (
            <div className={styles.buttonRow}>
              <button className={styles.btn} onClick={() => setEditingInfo(false)}>
                Cancel
              </button>
              <button className={styles.btnGold} onClick={() => setEditingInfo(false)}>
                Save
              </button>
            </div>
          ) : (
            <button className={styles.btnOutlineGold} onClick={() => setEditingInfo(true)}>
              Edit
            </button>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <div>
            <div className={styles.fieldLabel}>Organization name</div>
            {editingInfo ? (
              <div className={styles.fieldInput}>Almaty Nights Collective</div>
            ) : (
              <div className={styles.fieldValue}>Almaty Nights Collective</div>
            )}
          </div>
          <div>
            <div className={styles.fieldLabel}>Contact email</div>
            {editingInfo ? (
              <div className={styles.fieldInput}>events@almatynights.kz</div>
            ) : (
              <div className={styles.fieldValue}>events@almatynights.kz</div>
            )}
          </div>
          <div>
            <div className={styles.fieldLabel}>Contact phone</div>
            {editingInfo ? (
              <div className={styles.fieldInput}>+7 727 111 2233</div>
            ) : (
              <div className={styles.fieldValue}>+7 727 111 2233</div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sandboxHeader}>
          <div className={styles.sectionTitle}>Payout Account</div>
          <div className={styles.sandboxTag}>Sandbox mode</div>
        </div>
        <div className={styles.sandboxNote}>
          Demonstration payouts only — no real money moves through this account while the platform runs in sandbox
          mode.
        </div>

        <div className={styles.payoutRow}>
          <div className={styles.payoutIdentity}>
            <BankIcon width={22} height={22} style={{ color: payoutConnected ? 'var(--gold)' : 'var(--ink-faint)' }} />
            <div>
              <div className={styles.payoutLabel}>
                {payoutConnected ? 'Sandbox payout account connected' : 'No payout account connected'}
              </div>
              <div className={styles.payoutSub}>
                {payoutConnected
                  ? 'KZT-XXXX-9042 · demonstration balance only'
                  : 'Required before activating paid ticket sales for an event'}
              </div>
            </div>
          </div>
          <button
            className={styles.payoutButton}
            style={{
              background: payoutConnected ? 'transparent' : 'var(--gold)',
              border: `1px solid ${payoutConnected ? 'var(--line)' : 'var(--gold)'}`,
              color: payoutConnected ? 'var(--ink-soft)' : 'var(--bg)'
            }}
            onClick={() => setPayoutConnected((v) => !v)}
          >
            {payoutConnected ? 'Disconnect' : 'Connect sandbox account'}
          </button>
        </div>
      </div>
    </div>
  );
}
