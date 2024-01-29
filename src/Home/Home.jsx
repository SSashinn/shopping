import Nav from "../Nav/Nav";
import propTypes from 'prop-types'
import ImgCarousel from "./ImgCarousel";

export default function Home({grandOrder}){

    const images = ['carousel/formal.jpg?url','carousel/white.jpg?url','carousel/jewelery.jpg?url',]
    return (
        <>
        <Nav grandOrder={grandOrder}/>
        <ImgCarousel images={images} />
        </>
    )
}   

Home.propTypes = {
    grandOrder: propTypes.number,
}
