import { useState } from 'react';
import styles from './MyTicketsPage.module.css';
import { StatusTabs, type Tab } from '../../components/StatusTabs';
import { TicketCard } from '../../components/TicketCard';
import { tickets, ticketStatusMeta, type TicketStatus } from '../../data/tickets';

const tabDefs: { key: 'all' | TicketStatus; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'valid', label: ticketStatusMeta.valid.label },
  { key: 'checked-in', label: ticketStatusMeta['checked-in'].label },
  { key: 'cancelled', label: ticketStatusMeta.cancelled.label },
  { key: 'refunded', label: ticketStatusMeta.refunded.label }
];

export function MyTicketsPage() {
  const [filter, setFilter] = useState<'all' | TicketStatus>('all');

  const visible = filter === 'all' ? tickets : tickets.filter((t) => t.status === filter);

  const tabs: Tab[] = tabDefs.map((t) => ({
    key: t.key,
    label: t.label,
    count: t.key === 'all' ? tickets.length : tickets.filter((tk) => tk.status === t.key).length
  }));

  return (
    <div className={styles.page}>
      <div className={styles.frame} />
      <div className={styles.eyebrow}>Orders &amp; Tickets</div>
      <h1 className={styles.title}>My Tickets</h1>

      <StatusTabs tabs={tabs} active={filter} onSelect={(key) => setFilter(key as 'all' | TicketStatus)} />

      <div className={styles.list}>
        {visible.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
        {visible.length === 0 && <div className={styles.empty}>No tickets in this filter.</div>}
      </div>
    </div>
  );
}
