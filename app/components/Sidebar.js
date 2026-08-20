import Link from "next/link";
import {
  House,
  Library,
  Upload,
  Settings,
} from "lucide-react";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>L</div>
          <span>LEITOR</span>
        </div>

        <nav className={styles.menu}>
          <Link href="/" className={`${styles.menuItem} ${styles.active}`}>
            <House size={20} />
            <span>Início</span>
          </Link>

          <Link href="/" className={styles.menuItem}>
            <Library size={20} />
            <span>Biblioteca</span>
          </Link>

          <button className={styles.menuItem}>
            <Upload size={20} />
            <span>Upload</span>
          </button>
        </nav>
      </div>

      <button className={styles.menuItem}>
        <Settings size={20} />
        <span>Configurações</span>
      </button>
    </aside>
  );
}