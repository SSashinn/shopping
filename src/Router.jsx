import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home/Home";
import Error from "./Error";
import Shop from "./Shop/Shop";
import Items from "./Items/Items";
import Cart from "./Cart/Cart";
import { useState } from "react";
import { useEffect } from "react";

export default function Router() {

    const [cart, setCart] = useState([]);
    const [grandOrder, setGrandOrder] = useState(0);


    useEffect(() => {
        setGrandOrder(cart.length);
    }, [cart])

    function addToCart(data) {
        setCart((c) => [...c, data]);
    }

    function deleteItem(index) {
        setCart(l => l.filter((_, i) =>
            i !== index
        ))
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home grandOrder={grandOrder} />,
            errorElement: <Error />
        },
        {
            path: "/mens-clothing",
            element: <Shop link="https://fakestoreapi.com/products/category/men's clothing?limit=15" grandOrder={grandOrder} />
        },
        {
            path: "/womens-clothing",
            element: <Shop link="https://fakestoreapi.com/products/category/women's clothing?limit=15" grandOrder={grandOrder} />
        },
        {
            path: "/jewelery",
            element: <Shop link="https://fakestoreapi.com/products/category/jewelery?limit=15" grandOrder={grandOrder} />
        },
        {
            path: "/:id",
            element: <Items cart={cart} addToCart={addToCart} grandOrder={grandOrder} />
        },
        {
            path: "/cart",
            element: <Cart cart={cart} deleteItem={deleteItem} grandOrder={grandOrder} />
        }

    ]);
    return <RouterProvider router={router} />;
}

