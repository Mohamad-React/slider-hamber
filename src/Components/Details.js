import React from 'react';
import styles from "../styles/Details.module.css";
const Details = ({url,text,icon}) => {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                   <a href={url}>{icon} {text} </a>
                </li>
            </ul>
        </div>
    );
};

export default Details;