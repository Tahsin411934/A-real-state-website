import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import UseAuth from "../Hooks/UseAuth";
import { ToastContainer } from "react-toastify";


const Root = () => {
    
    const { loading} = UseAuth();
    if( loading){
       
        return <div className="flex justify-center items-center"><span className=" m-auto loading loading-spinner w-20"></span></div> 
    } 

  
   
    
    return (
        <div>
            <ToastContainer></ToastContainer>
           <Header></Header> 
           <Outlet></Outlet>
           <Footer></Footer>
           
        </div>
    );
};

export default Root;