import React from 'react';
import styles from './Portfolio.module.css';
import Image from "next/image";
import cabin from '../../public/images/cabin.png';
import cake from '../../public/images/cake.png';
import game from '../../public/images/game.png';
import circus from '../../public/images/circus.png';
import safe from '../../public/images/safe.png';
import submarine from '../../public/images/submarine.png';
import star from "../../public/images/blackStar.png";

const Index = () => {
    return (
        <div className={styles.portfolio}>
            <div className='container'>
                <din className={styles.mainContainer}>
                    <div className={styles.portfolioText}>
                        <h1>PORTFOLIO</h1>
                    </div>
                    <div className={styles.mainLine}>
                        <div className={styles.line1}></div>
                        <div className={styles.star}>
                            <Image src={star} alt={'star'} height={30} weight={30}/>
                        </div>
                        <div className={styles.line1}></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.gridArea}>
                        <div className={styles.gridOne}>
                            <Image src={cabin} alt={'first'} width={385} height={288}/>
                            <Image src={cake} alt={'first'} width={385} height={288}/>
                            <Image src={game} alt={'first'} width={385} height={288}/>
                        </div>
                        <div className={styles.gridTwo}>
                            <Image src={circus} alt={'first'} width={385} height={288}/>
                            <Image src={safe} alt={'first'} width={385} height={288}/>
                            <Image src={submarine} alt={'first'} width={385} height={288}/>
                        </div>
                    </div>
                </din>
            </div>

        </div>
    )

}

export default Index;
