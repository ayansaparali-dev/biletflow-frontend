import { useState } from 'react';
import styles from './OrganizerDashboardPage.module.css';
import { StatusTabs, type Tab } from '../../components/StatusTabs';
import { DuplicateIcon, PlusIcon } from '../../components/icons';
import { events, eventStatusMeta, formatKZT, type EventStatus } from '../../data/events';

const tabDefs: { key: EventStatus; label: string }[] = [
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
  { key: 'draft', label: 'Drafts' },
  { key: 'cancelled', label: 'Cancelled' }
];

export function OrganizerDashboardPage() {
  const [filter, setFilter] = useState<EventStatus>('upcoming');

  const visible = events.filter((e) => e.status === filter);

  const tabs: Tab[] = tabDefs.map((t) => ({
    key: t.key,
    label: t.label,
    count: events.filter((e) => e.status === t.key).length
  }));

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <div className={styles.eyebrow}>Almaty Nights Collective</div>
          <h1 className={styles.title}>Dashboard</h1>
        </div>
        <button className={styles.newEventBtn}>
          <PlusIcon width={13} height={13} />
          New Event
        </button>
      </div>

      <StatusTabs tabs={tabs} active={filter} onSelect={(key) => setFilter(key as EventStatus)} />

      <div className={styles.grid}>
        {visible.map((event) => {
          const meta = eventStatusMeta[event.status];
          const pct = event.capacity > 0 ? Math.round((event.sold / event.capacity) * 100) : 0;
          const cardBorder =
            event.status === 'active' ? 'var(--pink)' : event.status === 'upcoming' ? 'var(--gold)' : 'var(--line)';
          const showDuplicate = event.status === 'completed' || event.status === 'cancelled';

          return (
            <div key={event.id} className={styles.card} style={{ border: `2px solid ${cardBorder}` }}>
              <div className={styles.cardTop}>
                <div className={styles.statusBadge} style={{ color: meta.color }}>
                  {meta.label}
                </div>
                {showDuplicate && (
                  <button className={styles.duplicateBtn}>
                    <DuplicateIcon width={12} height={12} />
                    Duplicate
                  </button>
                )}
              </div>

              <div className={styles.cardTitle}>{event.name}</div>
              <div className={styles.cardSub}>
                {event.date} · {event.venue}
              </div>

              <div>
                <div className={styles.progressLabels}>
                  <span>
                    {event.sold} / {event.capacity} sold
                  </span>
                  <span>{pct}%</span>
                </div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{ width: `${pct}%`, background: meta.color }} />
                </div>
              </div>

              <div className={styles.revenueRow}>
                <div className={styles.revenueLabel}>Net revenue</div>
                <div className={styles.revenueValue}>{formatKZT(event.revenue)}</div>
              </div>
            </div>
          );
        })}
        {visible.length === 0 && <div className={styles.empty}>No events in this tab.</div>}
      </div>
    </div>
  );
}
