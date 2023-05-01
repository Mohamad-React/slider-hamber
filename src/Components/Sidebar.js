import React, { useContext } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { links } from '../Api/data';
import Details from './Details';
import styles from "../styles/Sidebar.module.css";

import { Appcontext } from '../context/Contex';
// import { Globalcontex } from './context/Contex';

const Sidebar = () => {
    
   const {clickandopen,isopen,isclose} = useContext(Appcontext);

  return (
    

    <>
      <div className={styles.container}>
        <div>
          <button onClick={isopen} className={styles.myicon}><GiHamburgerMenu className={styles.hamber}/></button>
        </div>
      </div>

      <div className={clickandopen ?  styles.opneconslider  : styles.conslider }>
        <div className={styles.mainslide}>
          <div className={styles.backicon}>
           <button onClick={isclose}><AiOutlineClose  className={styles.myicon2}/></button> 
          </div>
          <div className={styles.ulli}>
            {links.map((data, index) => <Details id={data.id} url={data.url} text={data.text} icon={data.icon} key={index} />)}
          </div>
        </div>

      </div>


    </>
  );
}

export default Sidebar;
