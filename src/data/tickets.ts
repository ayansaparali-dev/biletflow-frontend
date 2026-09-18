export type TicketStatus = 'valid' | 'checked-in' | 'cancelled' | 'refunded';

export type Ticket = {
  id: string;
  event: string;
  date: string;
  venue: string;
  seat: string;
  status: TicketStatus;
  code: string;
};

export const ticketStatusMeta: Record<TicketStatus, { label: string; color: string }> = {
  valid: { label: 'Valid', color: 'var(--gold)' },
  'checked-in': { label: 'Checked in', color: 'var(--ink-soft)' },
  cancelled: { label: 'Cancelled', color: 'var(--ink-faint)' },
  refunded: { label: 'Refunded', color: 'var(--pink)' }
};

export const tickets: Ticket[] = [
  {
    id: 'BF-2A9F-71K3',
    event: 'Almaty Jazz Festival',
    date: 'Sat 14 Nov 2026 · 19:00',
    venue: 'Almaty Central Concert Hall',
    seat: 'Sector B · Seat 14',
    status: 'valid',
    code: 'BF-2A9F-71K3'
  },
  {
    id: 'BF-91C2-04M7',
    event: 'Qazaq Post-Rock Night',
    date: 'Fri 2 Oct 2026 · 20:30',
    venue: 'ARTBAT Loft, Astana',
    seat: 'Standing · General',
    status: 'checked-in',
    code: 'BF-91C2-04M7'
  },
  {
    id: 'BF-6D41-88Q2',
    event: 'Silk Road Music Fest',
    date: 'Sun 30 Aug 2026 · 17:00',
    venue: 'Astana Expo Grounds',
    seat: 'Standing · General',
    status: 'cancelled',
    code: 'BF-6D41-88Q2'
  },
  {
    id: 'BF-33F0-19Z6',
    event: 'Dimash Live: Arnau Tour',
    date: 'Fri 5 Dec 2026 · 19:30',
    venue: 'Almaty Arena',
    seat: 'Sector A · Seat 3',
    status: 'refunded',
    code: 'BF-33F0-19Z6'
  }
];
