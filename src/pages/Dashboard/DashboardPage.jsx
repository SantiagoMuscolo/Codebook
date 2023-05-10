import { useEffect, useState } from "react"
import { DashboardCard } from "./components/DashboardCard/DashboardCard"
import { DashboardEmpty } from "./components/DashboardEmpty/DashboardEmpty"
import { getUserOrders } from "../../services"
import { UseTitle } from "../../hooks/useTitle"
import { toast } from "react-toastify"

export const DashboardPage = () => {
    const [orders, setOrders] = useState([])
    UseTitle('Codebook-Dashboard')

    useEffect(() => {
        async function fetchOrders(){

            try{
                const data = await getUserOrders()
                setOrders(data)
            }catch(error){
                toast.error(error.message, { closeButton: true, position: 'bottom-center' })
            }
            
        }
        fetchOrders()
    }, [])

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
            </section>

            <section>
                { orders.length && orders.map((order => (
                    <DashboardCard key={order.id} order={order}/>
                )))}
            </section>

            <section>
                {!orders.length && <DashboardEmpty />}
            </section>
        </main>
    )
}