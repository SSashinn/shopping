import { Link, useParams } from "react-router-dom";
import useItems from "../Shop/useItems";
import Nav from "../Nav/Nav";
import styles from './Items.module.css'
import { useEffect, useState } from "react";
import propTypes from 'prop-types'

function Items({ cart, addToCart, grandOrder}) {
    const { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`
    const { data, error, loading } = useItems(url);
    const [dis, setDis] = useState('none');

    const [order, setOrder] = useState(1);

    function increment(){
        if (order < 9)
        setOrder((o) =>o+1)}

    function decrement(){
        if (order !==1)
        setOrder((o) => o-1);
    }

    useEffect(() => {
        if (cart.length === 0)
            setDis('none');
        else
            setDis('block');

    }, [cart])

    if (error) return (<><Nav grandOrder={grandOrder}/><p className="btwn">A network error was encountered</p></>);
    if (loading) return (<><Nav grandOrder={grandOrder}/><p className="btwn">Loading...</p></>);

    return (
        <>

            <Nav grandOrder={grandOrder}/>
            <div className={styles.item}>
                <img src={data.image} height={400} width={300} />
                <div className={styles.description}>

                    <div style={{ borderBottom: '1px solid rgb(128, 128, 128)', paddingBottom: '30px' }}>
                        <h2>{data.title}</h2>
                        <div className={styles.rating}>
                            <p>{data.rating.rate}
                                <img src="items/star.png?url" height={20} width={20} />
                                | {data.rating.count} Ratings
                            </p>
                        </div>
                    </div>

                    <h2 className={styles.price}>$ {data.price}/-</h2>
                    <p style={{ margin: '0', color: 'blue' }}>inclusive of all taxes</p>
                    <div className={styles.order}>
                        <button type="button" style={{ backgroundColor: 'red', }} onClick={() => decrement()}>
                            <img src="items/minus.png?url" height={20} width={20} />
                        </button>
                        <p>{order}</p>
                        <button type="button" style={{ backgroundColor: 'green' }} onClick={() => increment()}>
                            <img src="items/add.png?url" height={20} width={20} />
                        </button>

                    </div>
                    <div style={{ display: 'flex' }}>
                        <button type="button" className={styles.cart} onClick={() => addToCart({ title: `${data.title}`, price: `${data.price}`, order: `${order}`, image: `${data.image}`, id: `${id}` })}>ADD TO CART</button>
                        <Link to={'/cart'} style={{ textDecoration: 'none' }}> <button type="button" className={styles.goToCart} style={{ display: `${dis}` }}> GO TO CART </button></Link>
                    </div>

                    <p style={{ fontSize: '1.1em' }}>{data.description}</p>

                </div>
            </div>
        </>
    )

}

export default Items;

Items.propTypes = {
    addToCart: propTypes.func,
    cart: propTypes.array,
    grandOrder: propTypes.number,

}