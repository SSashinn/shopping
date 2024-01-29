import Nav from "../Nav/Nav"
import propTypes from 'prop-types'
import styles from './Cart.module.css'
import { useEffect,useState } from "react";

export default function Cart({cart, deleteItem,grandOrder}){
    let grandTotal=0;
    const [dis, setDis] = useState('none');

    useEffect(() => {
        if (cart.length === 0)
            setDis('none');
        else
            setDis('flex');

    }, [cart])
    return(
        <>
        <Nav grandOrder = {grandOrder}/>
            <h1 className={styles.head}>Your Cart</h1>
            {cart.map((element, index) => {
                let total = element.price*element.order;
                grandTotal += total;
                return(
                    <div className={styles.cart} key={element.id}>
                        <img src={element.image} height={400} width={300}/>
                        <div className={styles.description}>  
                            <h2>{element.title}</h2>
                            <p className={styles.p}>Price:</p>
                            <p className={styles.p}>${element.price}/-</p>
                            <p className={styles.p}>Qty: {element.order}</p>
                            <h2>Total: $ {total}</h2>
                            <button type="button" className={styles.btn} onClick={()=>deleteItem(index)}>Remove From Cart</button>
                        </div>
                </div>
                )
            })} 
        <div className={styles.checkDiv} style={{display: `${dis}`}}>
            <h1>Grand Total: $ {grandTotal}/-</h1>
             <button type="button" className={styles.checkOut}>Checkout</button>
        </div>

        </>
    )
}

Cart.propTypes = {
    cart: propTypes.arrayOf(Object),
    deleteItem: propTypes.func,
    order: propTypes.number,
    updateGrandOrder: propTypes.func,
    grandOrder: propTypes.number,
}


