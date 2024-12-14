import React from "react";

import { getImageUrl } from "../../utils"
import styles from "./Home.module.css"

export const Home = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Iris!</h1>
            <p className = {styles.description}> 
                I'm an MIT undergrad studying CS & Math.
            </p>
            <a href="mailto:irisxu@mit.edu" className = {styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Headshot" className={styles.headshotImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
};