import styles from '../styles/specials.module.css';
import buttonStyles from  '../styles/button.module.css';

export default function Specials({ header, children }) {
    return (
        <section className={styles.container}>
            {/* Header */}
            <div className={styles.section}>
                <div className={styles.subsection}>
                    <h1 className={`${'markazi-text'}`}
                        style={{ fontSize: '2.5rem',
                                padding: '0px'
                        }}
                    >
                        { header.title }
                    </h1>
                </div>
                <div className={styles.subsection}
                    style={{ paddingLeft: '50px' }}>
                    <button className={buttonStyles.default}>
                        { header.actionButtonText }
                    </button>
                </div>
            </div>

            {/* Specials */}
            <div className={styles.section}>
                { children}
            </div>
        </section>
    );
}