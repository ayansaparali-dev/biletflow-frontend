export type EventStatus = 'upcoming' | 'active' | 'completed' | 'draft' | 'cancelled';

export type OrganizerEvent = {
  id: string;
  name: string;
  date: string;
  venue: string;
  status: EventStatus;
  sold: number;
  capacity: number;
  revenue: number;
};

export const eventStatusMeta: Record<EventStatus, { label: string; color: string }> = {
  upcoming: { label: 'Upcoming', color: 'var(--gold)' },
  active: { label: 'Active', color: 'var(--pink)' },
  completed: { label: 'Completed', color: 'var(--ink-soft)' },
  draft: { label: 'Draft', color: 'var(--ink-faint)' },
  cancelled: { label: 'Cancelled', color: 'var(--ink-faint)' }
};

export const events: OrganizerEvent[] = [
  {
    id: 'evt-jazz',
    name: 'Almaty Jazz Festival',
    date: '14 Nov 2026',
    venue: 'Almaty Central Concert Hall',
    status: 'upcoming',
    sold: 340,
    capacity: 500,
    revenue: 4250000
  },
  {
    id: 'evt-postrock',
    name: 'Qazaq Post-Rock Night',
    date: '2 Oct 2026',
    venue: 'ARTBAT Loft, Astana',
    status: 'active',
    sold: 210,
    capacity: 300,
    revenue: 2100000
  },
  {
    id: 'evt-silkroad',
    name: 'Silk Road Music Fest',
    date: '30 Aug 2026',
    venue: 'Astana Expo Grounds',
    status: 'completed',
    sold: 980,
    capacity: 1000,
    revenue: 12400000
  },
  {
    id: 'evt-poetry',
    name: 'Spring Poetry Slam',
    date: 'TBD',
    venue: 'Not yet published',
    status: 'draft',
    sold: 0,
    capacity: 150,
    revenue: 0
  },
  {
    id: 'evt-bazaar',
    name: 'Winter Bazaar Concert',
    date: '22 Jan 2026',
    venue: 'Karagandy Palace of Culture',
    status: 'cancelled',
    sold: 45,
    capacity: 400,
    revenue: 560000
  }
];

export function formatKZT(amount: number): string {
  return amount.toLocaleString('en-US').replace(/,/g, ' ') + ' ₸';
}
