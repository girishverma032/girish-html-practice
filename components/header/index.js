import React from 'react';
import styles from './Header.module.css';

function Index() {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.mainSection}>
                    <div className={styles.logo}>
                        <h1>START BOOTSTRAP</h1>
                    </div>
                    <div className={styles.navbarItem}>
                        <ul>
                            <li>
                                <a>PORTFOLIO</a>
                            </li>
                            <li>
                                <a>ABOUT</a>
                            </li>
                            <li>
                                <a>CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
