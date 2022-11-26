import React from 'react';
import styles from './Main.module.css'
import Image from "next/image";
import avatataars from '../../public/images/avataaars.svg';
import star from '../../public/images/star.png';

function Index(props) {
    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.mainSection}>
                    <div className={styles.mainImage}>
                        <Image src={avatataars} alt={'main'}/>
                    </div>
                    <div className={styles.mainText}>
                        <h1>START BOOTSTRAP</h1>
                    </div>
                    <div className={styles.mainLine}>
                        <div className={styles.line1}></div>
                        <div className={styles.star}>
                            <Image src={star} alt={'star'} height={30} weight={30}/>
                        </div>
                        <div className={styles.line1}></div>
                    </div>
                    <div className={styles.smallText}>
                        <h3>Graphic Artist - Web Designer - Illustrator</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Index;
