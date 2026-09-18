import { Routes, Route } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { MyTicketsPage } from './pages/attendee/MyTicketsPage';
import { TicketDetailPage } from './pages/attendee/TicketDetailPage';
import { AccountSettingsPage } from './pages/attendee/AccountSettingsPage';
import { OrganizerProfilePage } from './pages/organizer/OrganizerProfilePage';
import { OrganizerDashboardPage } from './pages/organizer/OrganizerDashboardPage';
import { SupportInboxPage } from './pages/organizer/SupportInboxPage';

export function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<MyTicketsPage />} />
        <Route path="/tickets/:id" element={<TicketDetailPage />} />
        <Route path="/settings" element={<AccountSettingsPage />} />
        <Route path="/organizer" element={<OrganizerDashboardPage />} />
        <Route path="/organizer/profile" element={<OrganizerProfilePage />} />
        <Route path="/organizer/inbox" element={<SupportInboxPage />} />
      </Routes>
    </AppShell>
  );
}
