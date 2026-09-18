export type CaseStatus = 'Open' | 'In Progress' | 'Waiting for Customer' | 'Resolved';

export type SupportMessage = {
  from: 'attendee' | 'staff';
  text: string;
};

export type SupportCase = {
  id: string;
  requester: string;
  category: string;
  eventContext: string;
  status: CaseStatus;
  timestamp: string;
  messages: SupportMessage[];
};

export const caseStatusColor: Record<CaseStatus, string> = {
  Open: 'var(--pink)',
  'In Progress': 'var(--gold)',
  'Waiting for Customer': 'var(--ink-soft)',
  Resolved: 'var(--ink-faint)'
};

export const supportCases: SupportCase[] = [
  {
    id: 'case-1',
    requester: 'Aidana Serik',
    category: 'Ticket delivery',
    eventContext: 'Almaty Jazz Festival',
    status: 'Open',
    timestamp: '2h ago',
    messages: [
      {
        from: 'attendee',
        text: "Hi! My QR code isn't scanning at the venue app preview — can you resend the ticket?"
      }
    ]
  },
  {
    id: 'case-2',
    requester: 'Marat Zhaksybekov',
    category: 'Refund',
    eventContext: 'Silk Road Music Fest',
    status: 'In Progress',
    timestamp: '1d ago',
    messages: [
      { from: 'attendee', text: 'The event was cancelled — when will my refund show up?' },
      {
        from: 'staff',
        text: "We've submitted the refund to the sandbox payment provider. It should post within 2 demonstration cycles."
      }
    ]
  },
  {
    id: 'case-3',
    requester: 'Dana Yerlanova',
    category: 'Seating',
    eventContext: 'Almaty Jazz Festival',
    status: 'Waiting for Customer',
    timestamp: '2d ago',
    messages: [
      {
        from: 'staff',
        text: 'Sector B, Seat 14 and 15 are both available if you want to move together — let us know which you prefer.'
      }
    ]
  },
  {
    id: 'case-4',
    requester: 'Nurlan Bekov',
    category: 'Payment',
    eventContext: 'Qazaq Post-Rock Night',
    status: 'Resolved',
    timestamp: '5d ago',
    messages: [
      { from: 'attendee', text: 'My card was charged twice for one ticket.' },
      { from: 'staff', text: 'Confirmed a duplicate sandbox charge and reversed it. Sorry for the trouble!' }
    ]
  }
];
