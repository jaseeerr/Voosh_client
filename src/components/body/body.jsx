import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import MyAxiosInstance from '../../utils/axios';
import toast, {Toaster} from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom"; 
const Body = ()=>{
    const goto = useNavigate()

    useEffect(()=>{

        if(!localStorage.getItem('token'))
        {
             goto('/login-user')
        }
    },[])


    const axiosInstance = MyAxiosInstance();

 
    
// formik starts
const formik = useFormik({
    initialValues: {
      product:'',
      sub:0,
    
   
   
    
   
    },
  validate: (values) => {
   
  const error = {}


  values.product = values.product.trim()

  if(values.product.length==0)
  {
    error.product = "Field required"
  }

  if(values.sub==0)
  {
    error.sub = "This value can't be zero"
  }

    
  
console.log(values)

 
 
  
 



  return error;
  },
    onSubmit:(values) => {
  
             // Make the POST request
             axiosInstance.post('add-order',values).then((response)=>{

             

              
                if(response.data.success)
                {
                    toast.success("Order Added")
                    document.getElementById('products').value = ""
                    document.getElementById('sub').value = 0
                    setTimeout(()=>{
                 

                    },1000)
                }
                else
                {
                    toast.error("Error Occured")
                    document.getElementById('products').value = ""
                    document.getElementById('sub').value = ""
                    setTimeout(()=>{
                       

                    },1000)
                }
                
              
             })
    },
  
  
  })
// formik ends


    return(
        <>
        <Toaster/>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
           
   
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Add Order
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={formik.handleSubmit}>
             
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product</label>
                      <select

                       {...formik.getFieldProps('product')}
                     
                      id="products" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="" selected>Choose a Product</option>
                      <option value="Mobile">Mobile</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Pc">Pc</option>
                      <option value="Tablet">Tablet</option>
                      </select>
                                      {formik.errors.product ? (
                <div style={{color:"red"}}>{formik.errors.product}</div>
              ) : null}
                  </div>
                 
                  <div>
                      <label for="qty" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub-total</label>
                      <input min={120}
                        {...formik.getFieldProps('sub')}
                      type="number" id='sub'  placeholder="Quantity" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  {formik.errors.password ? (
                <div style={{color:"red"}}>{formik.errors.sub}</div>
              ) : null}
                  </div>
                
                
                  
                  <button type="submit" class="w-full text-white bg-blue-700 p-2 rounded-md ">Add Order</button>
              
                  </form>
          </div>
      </div>
  </div>
</section>
        </>
    )
}

export default Body