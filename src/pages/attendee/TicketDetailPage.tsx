import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './TicketDetailPage.module.css';
import { QrGlyph } from '../../components/QrGlyph';
import {
  BackIcon,
  CalendarIcon,
  ChatIcon,
  ChevronDownIcon,
  CloseIcon,
  DownloadIcon,
  MailIcon
} from '../../components/icons';
import { tickets } from '../../data/tickets';

export function TicketDetailPage() {
  const { id } = useParams();
  const ticket = tickets.find((t) => t.id === id) ?? tickets[0];
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        <BackIcon width={14} height={14} />
        Back to My Tickets
      </Link>

      <div>
        <div className={styles.eyebrow}>Ticket Detail</div>
        <h1 className={styles.title}>{ticket.event}</h1>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelInfo}>
          <div className={styles.statusRow}>
            <div className={styles.statusBadge}>Valid</div>
            <div className={styles.code}>{ticket.code}</div>
          </div>
          <div className={styles.details}>
            {ticket.date}
            <br />
            {ticket.venue}
            <br />
            <span className={styles.seat}>{ticket.seat}</span>
          </div>
          <div className={styles.attendeeLine}>Attendee · Aidana Serik</div>
        </div>
        <div className={styles.qrColumn}>
          <QrGlyph size={94} color="var(--gold)" />
        </div>
      </div>

      <div className={styles.actions}>
        <button className={`${styles.actionButton} ${styles.actionPrimary}`}>
          <DownloadIcon width={14} height={14} />
          Download PDF
        </button>
        <button className={styles.actionButton}>
          <MailIcon width={14} height={14} />
          Email ticket
        </button>

        <div className={styles.calendarWrap}>
          <button className={styles.actionButton} onClick={() => setCalendarOpen((v) => !v)}>
            <CalendarIcon width={14} height={14} />
            Add to calendar
            <ChevronDownIcon width={12} height={12} style={{ transform: calendarOpen ? 'rotate(180deg)' : 'none' }} />
          </button>
          {calendarOpen && (
            <div className={styles.calendarMenu}>
              <a href="#">Google Calendar</a>
              <a href="#">Apple Calendar</a>
              <a href="#">Download .ics file</a>
            </div>
          )}
        </div>

        <button
          className={`${styles.actionButton} ${styles.actionSupport}`}
          onClick={() => {
            setSupportOpen(true);
            setCalendarOpen(false);
          }}
        >
          <ChatIcon width={14} height={14} />
          Support for this ticket
        </button>
      </div>

      <div className={styles.footnote}>
        Printed copies keep this ticket's QR code readable in grayscale on A4 paper. Digital and printed copies share
        one ticket identifier — only one admits at check-in.
      </div>

      {supportOpen && (
        <div className={styles.drawer}>
          <div className={styles.drawerHeader}>
            <div>
              <div className={styles.drawerEyebrow}>Support · This ticket</div>
              <div className={styles.drawerTitle}>{ticket.event}</div>
            </div>
            <button className={styles.drawerClose} onClick={() => setSupportOpen(false)}>
              <CloseIcon width={18} height={18} />
            </button>
          </div>
          <div className={styles.messages}>
            <div className={`${styles.bubble} ${styles.bubbleAttendee}`}>
              Hi! My QR code isn't scanning at the venue app preview — can you resend the ticket?
            </div>
            <div className={`${styles.bubble} ${styles.bubbleStaff}`}>
              We've re-issued the QR and emailed a fresh PDF. Let us know if it still fails at the door.
            </div>
          </div>
          <div className={styles.composer}>
            <div className={styles.composerInput}>Write a message…</div>
            <button className={styles.sendButton}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
