import { CartEmpty } from "./components/CartEmpty/CartEmpty";
import { CartList } from "./components/CartList/CartList";
import { useCart } from "../../context/cartContext";
import { UseTitle } from "../../hooks/useTitle";


export const CartPage = () => {
    const { cartList } = useCart()
    UseTitle('Codebook-Cart')

    return (
        <main>
            { cartList.length ? <CartList /> : <CartEmpty /> }
        </main>
    )
}
