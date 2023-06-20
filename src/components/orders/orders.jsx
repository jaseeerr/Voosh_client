import { useEffect, useState } from "react"
import MyAxiosInstance from '../../utils/axios';
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from "react-router";




const Order = ()=>{
    const axiosInstance = MyAxiosInstance();

    const [orders,setOrders] = useState([])

    const goto = useNavigate()

    useEffect(()=>{


        if(!localStorage.getItem('token'))
        {
             goto('/login-user')
        }

        axiosInstance.get('get-order').then((response)=>{


            console.log(response)

            setOrders(response.data)

        })

    },[])

    return(
        <>
        <Toaster/>

      <div className="bg-gray-50 dark:bg-gray-900 h-screen" >
      <section class="bg-gray-50 dark:bg-gray-900 p-9 flex ">

{
  orders.map((items)=>{

      return (
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-5 ">
<a href="#">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Order Details</h5>
</a>
<p class="mb-3 font-normal text-white ">Date: {items.date.substring(0,10)}</p>
<p class="mb-3 font-normal text-white ">Product: {items.product}</p>
<p class="mb-3 font-normal text-white ">Phone: {items.phone}</p>
<p class="mb-3 font-normal text-white ">Date: {items.subtotal}</p>
<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Read more
<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
</div>
      )
      
  })
}

</section>
      </div>
          
        </>
    )
}

export default Order