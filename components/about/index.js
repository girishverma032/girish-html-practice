import React from 'react';
import styles from './About.module.css';
import Image from "next/image";
import star from "../../public/images/star.png";

const Index = () => {
    return (
        <div className={styles.about}>
            <div className='container'>
                <div className={styles.headline}>
                    <h1>ABOUT</h1>
                </div>
                <div className={styles.mainLine}>
                    <div className={styles.line1}></div>
                    <div className={styles.star}>
                        <Image src={star} alt={'star'} height={30} weight={30}/>
                    </div>
                    <div className={styles.line1}></div>
                </div>
                <div className={styles.paragraph}>
                    <div>
                        <p>
                            Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the
                            complete source files including HTML, CSS, and JavaScript as well as optional SASS
                            stylesheets for easy customization.
                        </p>
                    </div>
                    <div>
                        <p>
                            You can create your own custom avatar for the masthead, change the icon in the dividers, and
                            add your email address to the contact form to make it fully functional!
                        </p>
                    </div>
                </div>
                <div className={styles.mainButton}>
                    <button >Free Download</button>
                </div>
            </div>
        </div>
    )
}
export default Index;
