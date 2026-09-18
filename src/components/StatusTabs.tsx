import styles from './StatusTabs.module.css';

export type Tab = {
  key: string;
  label: string;
  count?: number;
};

type Props = {
  tabs: Tab[];
  active: string;
  onSelect: (key: string) => void;
};

export function StatusTabs({ tabs, active, onSelect }: Props) {
  return (
    <div className={styles.row}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onSelect(tab.key)}
          className={tab.key === active ? `${styles.tab} ${styles.tabActive}` : styles.tab}
        >
          {tab.label}
          {tab.count !== undefined ? ` · ${tab.count}` : ''}
        </button>
      ))}
    </div>
  );
}
