import {  Link } from "react-router-dom";
import styles from "./Nav.module.css"
import '../index.css'
import propTypes from 'prop-types'

export default function Nav({grandOrder}){
    const linkStyle = {
      textDecoration: 'none',
    }
    return (
        <nav className={styles.navbar}>
                <ul className={styles.nav1}>
                    <li><Link to={"/"} >
                      <img src="/nav/FUKU+LOGO.png?url" height={75} width={180} className={styles.logo}/>
                    </Link></li>
                    <Link to={"/mens-clothing"} style={linkStyle}><li className={styles.link}>MEN&apos;S APPAREL</li></Link>
                    <Link to={"/womens-clothing"} style={linkStyle}><li className={styles.link}>WOMEN&apos;S APPAREL</li></Link>
                    <Link to={"/jewelery"} style={linkStyle}><li className={styles.link}>JEWELLERY</li></Link>


                </ul>
                <ul className={styles.nav}>
                  <li> <input type="text" placeholder="Search..." /></li> 
                  <li>  <img src="/nav/dp.png?url" className={styles.navImg}/></li> 
                  <div>
                    <li><Link to={"/cart"}>  <img src="/nav/cart.png?url" className={styles.navImg} style={{marginBottom: '-20px'}}/> </Link></li> 
                    <div className={styles.order}>{grandOrder}</div>
                  </div>
                </ul>
        </nav>      
    )
}

Nav.propTypes = {
  grandOrder: propTypes.number,
}