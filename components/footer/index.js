import React from 'react';
import styles from './Footer.module.css';

function Index() {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.mainSection}>
                    <div className={styles.section1}>
                        <h2>LOCATION</h2>
                        <h3>2215 John Daniel Drive
                            Clark, MO 65243</h3>
                    </div>
                    <div className={styles.section2}>
                        <h2>AROUND THE WEB</h2>
                        <a>F</a>
                        <a>T</a>
                        <a>L</a>
                        <a>G</a>

                    </div>
                    <div className={styles.section3}>
                        <h2>ABOUT FREELANCER</h2>
                        <h3>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</h3>
                    </div>
                </div>
                <div className={styles.Copyright}>
                    <h4>Copyright © Your Website 2022</h4>
                </div>
            </div>

        </div>
    );
}

export default Index;
