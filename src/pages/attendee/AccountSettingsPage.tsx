import { useState } from 'react';
import styles from './AccountSettingsPage.module.css';

export function AccountSettingsPage() {
  const [editingInfo, setEditingInfo] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.eyebrow}>Account</div>
      <h1 className={styles.title}>Settings</h1>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Personal Information</div>
          {editingInfo ? (
            <div className={styles.buttonRow}>
              <button className={styles.btn} onClick={() => setEditingInfo(false)}>
                Cancel
              </button>
              <button className={styles.btnGold} onClick={() => setEditingInfo(false)}>
                Save
              </button>
            </div>
          ) : (
            <button className={styles.btnOutlineGold} onClick={() => setEditingInfo(true)}>
              Edit
            </button>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <div>
            <div className={styles.fieldLabel}>Full name</div>
            {editingInfo ? (
              <div className={styles.fieldInput}>Aidana Serik</div>
            ) : (
              <div className={styles.fieldValue}>Aidana Serik</div>
            )}
          </div>
          <div>
            <div className={styles.fieldLabel}>Email</div>
            {editingInfo ? (
              <div className={styles.fieldInput}>aidana.serik@example.kz</div>
            ) : (
              <div className={styles.fieldValue}>
                aidana.serik@example.kz
                <span className={styles.verifiedTag}>Verified</span>
              </div>
            )}
          </div>
          <div>
            <div className={styles.fieldLabel}>Phone</div>
            {editingInfo ? (
              <div className={styles.fieldInput}>+7 701 234 5678</div>
            ) : (
              <div className={styles.fieldValue}>+7 701 234 5678</div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionTitle}>Password</div>
            <div className={styles.sectionSub}>Last changed 3 months ago.</div>
          </div>
          {!changingPassword && (
            <button className={styles.btnOutlineGold} onClick={() => setChangingPassword(true)}>
              Change password
            </button>
          )}
        </div>

        {changingPassword && (
          <div className={styles.passwordForm}>
            <div>
              <div className={styles.fieldLabel}>Current password</div>
              <div className={styles.fieldInput}>••••••••</div>
            </div>
            <div>
              <div className={styles.fieldLabel}>New password</div>
              <div className={styles.fieldInput}>&nbsp;</div>
            </div>
            <div>
              <div className={styles.fieldLabel}>Confirm new password</div>
              <div className={styles.fieldInput}>&nbsp;</div>
            </div>
            <div className={styles.buttonRow}>
              <button className={styles.btn} onClick={() => setChangingPassword(false)}>
                Cancel
              </button>
              <button className={styles.btnGold} onClick={() => setChangingPassword(false)}>
                Update password
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
