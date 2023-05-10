import { useLocation } from "react-router-dom";
import { OrderFail } from "./components/OrderFail/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess/OrderSuccess";
import { UseTitle } from "../../hooks/useTitle";

export  const OrderPage = () => {
    const { state } = useLocation()
    UseTitle('Codebook-Order Page')

    return (
        <main>
            { state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
        </main>
    )
}

