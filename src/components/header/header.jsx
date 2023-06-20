import "./header.css"
import { Link, useNavigate } from "react-router-dom"
import toast, {Toaster} from 'react-hot-toast'
import { useEffect } from "react"



const Header = ()=>{

  const goto = useNavigate()
  
  useEffect(()=>{

    if(!localStorage.getItem('token'))
    {
         goto('/login-user')
    }
},[])

    return(
        <>
        <Toaster/>
          <header class="header">
  <nav>
    <div class="logo">
      <Link to="/">Voo<span>sh</span></Link>
    </div>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">

  
      <li>  <Link to="/get-order" style={{textDecoration:"none",color:"white"}}>View orders</Link></li>
       <li style={{textDecoration:"none",color:"white"}}>|</li>
       <li>  <Link 
      onClick={()=>{

     
        localStorage.removeItem('token')
        toast("✅ Logout Successful")
     
        setTimeout(()=>{
          toast.dismiss()
        goto('/login-user')
        },1000)
        
      }}
      
      style={{textDecoration:"none",color:"white"}}>Logout</Link></li>
    
    </ul>
  </nav>
</header>
        </>
    )
}

export default Header