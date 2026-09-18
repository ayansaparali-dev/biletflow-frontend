import { Link } from 'react-router-dom';
import styles from './TicketCard.module.css';
import { QrGlyph } from './QrGlyph';
import { ticketStatusMeta, type Ticket } from '../data/tickets';

export function TicketCard({ ticket }: { ticket: Ticket }) {
  const meta = ticketStatusMeta[ticket.status];
  const cardBorder = ticket.status === 'valid' ? 'var(--gold)' : 'var(--line)';
  const titleColor = ticket.status === 'cancelled' ? 'var(--ink-faint)' : 'var(--ink)';
  const qrColor =
    ticket.status === 'valid' ? 'var(--gold)' : ticket.status === 'checked-in' ? 'var(--ink-soft)' : 'var(--ink-faint)';

  return (
    <Link to={`/tickets/${ticket.id}`} className={styles.card} style={{ borderColor: cardBorder }}>
      <div className={styles.info}>
        <div className={styles.metaRow}>
          <div className={styles.statusBadge} style={{ color: meta.color }}>
            {meta.label}
          </div>
          <div className={styles.code}>{ticket.code}</div>
        </div>
        <div className={styles.title} style={{ color: titleColor }}>
          {ticket.event}
        </div>
        <div className={styles.subline}>
          {ticket.date} · {ticket.venue}
        </div>
        <div className={styles.seat}>{ticket.seat}</div>
        <div className={styles.actions}>
          <span>Download PDF</span>
          <span style={{ color: 'var(--line)' }}>/</span>
          <span>Email</span>
          <span style={{ color: 'var(--line)' }}>/</span>
          <span>Support</span>
        </div>
      </div>
      <div className={styles.qrColumn}>
        <QrGlyph size={60} color={qrColor} />
      </div>
    </Link>
  );
}
