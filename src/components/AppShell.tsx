import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppShell.module.css';
import { TicketIcon, SettingsIcon, DashboardIcon, ProfileIcon, InboxIcon } from './icons';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem;

const tabLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.tabItem} ${styles.tabItemActive}` : styles.tabItem;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.wordmark}>BiletFlow</div>
        <div className={styles.roleTag}>Attendee &amp; Organizer</div>

        <div className={styles.navGroup}>
          <NavLink to="/" end className={navLinkClass}>
            <TicketIcon width={16} height={16} />
            My Tickets
          </NavLink>
          <NavLink to="/settings" className={navLinkClass}>
            <SettingsIcon width={16} height={16} />
            Account Settings
          </NavLink>
        </div>

        <div className={styles.divider} />
        <div className={styles.navGroupLabel}>Organizer</div>
        <div className={styles.navGroup}>
          <NavLink to="/organizer" end className={navLinkClass}>
            <DashboardIcon width={16} height={16} />
            Dashboard
          </NavLink>
          <NavLink to="/organizer/profile" className={navLinkClass}>
            <ProfileIcon width={16} height={16} />
            Organizer Profile
          </NavLink>
          <NavLink to="/organizer/inbox" className={navLinkClass}>
            <InboxIcon width={16} height={16} />
            Support Inbox
          </NavLink>
        </div>
      </aside>

      <div className={styles.mobileTopBar}>
        <div className={styles.mobileWordmark}>BiletFlow</div>
        <div className={styles.mobileRoleTag}>Attendee &amp; Organizer</div>
      </div>

      <main className={styles.content}>{children}</main>

      <nav className={styles.mobileTabBar}>
        <NavLink to="/" end className={tabLinkClass}>
          <TicketIcon width={17} height={17} />
          <span className={styles.tabLabel}>Tickets</span>
        </NavLink>
        <NavLink to="/settings" className={tabLinkClass}>
          <SettingsIcon width={17} height={17} />
          <span className={styles.tabLabel}>Settings</span>
        </NavLink>
        <NavLink to="/organizer" end className={tabLinkClass}>
          <DashboardIcon width={17} height={17} />
          <span className={styles.tabLabel}>Dashboard</span>
        </NavLink>
        <NavLink to="/organizer/profile" className={tabLinkClass}>
          <ProfileIcon width={17} height={17} />
          <span className={styles.tabLabel}>Profile</span>
        </NavLink>
        <NavLink to="/organizer/inbox" className={tabLinkClass}>
          <InboxIcon width={17} height={17} />
          <span className={styles.tabLabel}>Inbox</span>
        </NavLink>
      </nav>
    </div>
  );
}
