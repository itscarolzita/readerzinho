import Link from "next/link";

import {
  House,
  Library,
  Settings,
  Search,
  Plus,
  FolderPlus,
  FileUp,
  FolderUp,
  Clock3,
  Heart,
  Trash2,
} from "lucide-react";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className={styles.sidebar}>
        <div>
          {/* LOGO */}

          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              L
            </div>

            <span>LEITOR</span>
          </div>

          {/* =========================
              NEW
          ========================= */}

          <details className={styles.newMenu}>
            <summary className={styles.newButton}>
              <Plus size={20} />

              <span>NOVO</span>
            </summary>

            <div className={styles.newDropdown}>
              <button type="button">
                <FolderPlus size={18} />
                <span>Nova pasta</span>
              </button>

              <button type="button">
                <FileUp size={18} />
                <span>Enviar arquivo</span>
              </button>

              <button type="button">
                <FolderUp size={18} />
                <span>Enviar pasta</span>
              </button>
            </div>
          </details>

          {/* =========================
              NAVIGATION
          ========================= */}

          <nav className={styles.menu}>
            <Link
              href="/"
              className={styles.menuItem}
            >
              <House size={20} />
              <span>Início</span>
            </Link>

            <Link
              href="/"
              className={`${styles.menuItem} ${styles.active}`}
            >
              <Library size={20} />
              <span>Biblioteca</span>
            </Link>

            <button
              type="button"
              className={styles.menuItem}
            >
              <Clock3 size={20} />
              <span>Recentes</span>
            </button>

            <button
              type="button"
              className={styles.menuItem}
            >
              <Heart size={20} />
              <span>Favoritos</span>
            </button>
          </nav>
        </div>

        {/* =========================
            SIDEBAR BOTTOM
        ========================= */}

        <div className={styles.sidebarBottom}>
          <button
            type="button"
            className={styles.menuItem}
          >
            <Trash2 size={20} />
            <span>Lixeira</span>
          </button>

          <button
            type="button"
            className={styles.menuItem}
          >
            <Settings size={20} />
            <span>Configurações</span>
          </button>
        </div>
      </aside>

      {/* =========================
          CONTENT
      ========================= */}

      <section className={styles.content}>
        {/* HEADER */}

        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              Biblioteca
            </p>

            <h1>Minha biblioteca</h1>
          </div>

          <div className={styles.headerActions}>
            <button
              type="button"
              className={styles.searchButton}
              aria-label="Pesquisar"
            >
              <Search size={20} />
            </button>
          </div>
        </header>

        {/* =========================
            LIBRARY
        ========================= */}

        <section className={styles.librarySection}>
          <div className={styles.sectionTitle}>
            <h2>Continue lendo</h2>

            <button type="button">
              Ver todos
            </button>
          </div>

          <div className={styles.booksGrid}>
            {/* CBZ */}

            <Link
              href="/reader"
              className={styles.book}
            >
              <div className={styles.cover}>
                <span>CBZ</span>
              </div>

              <div className={styles.bookInfo}>
                <strong>
                  Quadrinho de teste
                </strong>

                <span>
                  Página 14 de 32
                </span>
              </div>

              <div className={styles.progress}>
                <div
                  style={{
                    width: "44%",
                  }}
                />
              </div>
            </Link>

            {/* CBR */}

            <article className={styles.book}>
              <div className={styles.cover}>
                <span>CBR</span>
              </div>

              <div className={styles.bookInfo}>
                <strong>
                  Arquivo de exemplo
                </strong>

                <span>
                  Página 7 de 24
                </span>
              </div>

              <div className={styles.progress}>
                <div
                  style={{
                    width: "29%",
                  }}
                />
              </div>
            </article>

            {/* PDF */}

            <article className={styles.book}>
              <div className={styles.cover}>
                <span>PDF</span>
              </div>

              <div className={styles.bookInfo}>
                <strong>
                  Outro arquivo
                </strong>

                <span>
                  Não iniciado
                </span>
              </div>

              <div className={styles.progress}>
                <div
                  style={{
                    width: "0%",
                  }}
                />
              </div>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}