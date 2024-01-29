import Nav from "../Nav/Nav"
import styles from './Shop.module.css'
import propTypes from 'prop-types'
import useItems from "./useItems"
import { Link } from "react-router-dom"

export default function Shop({ link, grandOrder }) {

    const { data, error, loading } = useItems(link)

    if (error) return (<><Nav /><p className="btwn">A network error was encountered</p></>);
    if (loading) return (<><Nav /><p className="btwn">Loading...</p></>);

    return (
        <>
            <Nav grandOrder={grandOrder} />
            <div className={styles.items}>
                {data.map((element) => {
                    return (
                        <Link to={`/${element.id}`} key={element.id} style={{ textDecoration: 'none' }}>
                            <div className={styles.card} >
                                <img src={element.image} height={200} width={150}></img>
                                <h2>{element.title}</h2>
                                <p>$ {element.price}</p>
                            </div>
                        </Link>
                    )
                })
                }
            </div>
        </>
    )
}

Shop.propTypes = {
    link: propTypes.string,
    grandOrder: propTypes.number,
}
