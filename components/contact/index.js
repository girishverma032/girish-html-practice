import React from 'react';
import styles from './Contact.module.css';
import Image from "next/image";
import star from "../../public/images/blackStar.png";

const Index = () => {
    return (
        <div className={styles.contact}>
            <div className='container'>
                <div className={styles.headline}>
                    <h1>CONTACT</h1>
                </div>
                <div className={styles.mainLine}>
                    <div className={styles.line1}></div>
                    <div className={styles.star}>
                        <Image src={star} alt={'star'} height={30} weight={30}/>
                    </div>
                    <div className={styles.line1}></div>
                </div>
                <div className={styles.formSection}>
                    <form>
                        <label>Full name</label>
                        <input/>
                        <label>Email</label>
                        <input/>
                        <label>Phone number</label>
                        <input/>
                        <label>Message</label>
                        <input/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
)}

export default Index;
