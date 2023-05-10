import { Link } from 'react-router-dom'
import { Rating } from '../Rating/Rating '
import { useCart } from '../../../context/cartContext'
import { useEffect, useState } from 'react'

export const ProductCard = ({product}) => {
    const { cartList, addToCart, removeFromCart } =  useCart()
    const [InCart, setInCart] = useState(false)

    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id)

        if(productInCart){
            setInCart(true)
        }else{
            setInCart(false)
        }

    }, [cartList, product.id])
    
    return (

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
            <Link to={`/products/${product.id}`}>
                <img className="rounded-t-lg w-full h-64" src={product.image_local} alt="product image" />
                {product.best_seller && <span className="relative top-3 left-4 px-3 bg-orange-500 bg-opacity-100 text-white rounded">best seller</span>}
            </Link>
            <div className="px-5 pb-5">
                <Link to={`/products/${product.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">{product.name}</h5>
                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti maxime inventore neque! Sunt laudantium placeat quis eum adipisci molestias minima.</p>

                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                    <Rating rating={product.rating}/>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    { !InCart && <button onClick={() => addToCart(product)}  className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> }
                    { InCart && <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"} >Remove Item <i className="ml-1 bi bi-trash3"></i></button> }
                </div>
            </div>
        </div>

    )
}
