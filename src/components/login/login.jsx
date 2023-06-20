import React from "react"
import { useFormik } from "formik"
import MyAxiosInstance from '../../utils/axios';
import toast, {Toaster} from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
const Login = ()=>{



    const goto = useNavigate()

    const axiosInstance = MyAxiosInstance();


// formik starts
const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
   
    
   
    },
  validate: (values) => {
   
    values.email = values.email.trim()
  
    values.password = values.password.trim()
  const error = {};


 
 
  
 



  return error;
  },
    onSubmit:(values) => {
  
             // Make the POST request
             axiosInstance.post('login-user',values).then((response)=>{

                console.log(response)

                if(response.data.success)
                {
                    toast.success("Login Successful")
                   localStorage.setItem('token',JSON.stringify(response.data.data))
                   setTimeout(()=>{
                    toast.dismiss()
                    goto("/")

                   },1000)
                  
                }
                else if(response.data.badpass)
                {
                    toast.error("Invalid Password")
                }
                else if(response.data.baduser)
                {
                    toast.error("Invalid Email")
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
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-16 h-8 mr-2" src="https://voosh.ai/static/media/VooshLogo.c64bcebd40a2d49cc591.webp" alt="logo"/>
           
      </a>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={formik.handleSubmit}>
             
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input
                         {...formik.getFieldProps('email')}
                      type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                  {formik.errors.email ? (
                <div style={{color:"red"}}>{formik.errors.email}</div>
              ) : null}
                  </div>
                 
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                        {...formik.getFieldProps('password')}
                      type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  {formik.errors.password ? (
                <div style={{color:"red"}}>{formik.errors.password}</div>
              ) : null}
                  </div>
                
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  
                  <button type="submit" class="w-full text-white bg-blue-700 p-2 rounded-md ">Login</button>
                  <button type="button" class="w-full flex items-center justify-center gap-2 text-white bg-blue-700 p-2 rounded-md">
  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" class="w-4 h-4" />
  <span>Login with Google</span>
</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account? <Link to="/add-user" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup Here</Link>
                  </p>
                  </form>
          </div>
      </div>
  </div>
</section>
        </>
    )
}

export default Login