
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Helmet} from "react-helmet";
import SocialLogin from '../../SocialLogin/SocialLogin';
import UseAuth from '../../Hooks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const location = useLocation();
    console.log(location);

    const {signinUser, setLoading}= UseAuth()
    console.log(setLoading)

    const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    signinUser(data.email, data.password)
    .then((userCredential) => {
        
        const user = userCredential.user;
        
        
      })
      .catch((error) => {
        
        const errorMessage = error.message;
        console.log(errorMessage)
        setLoading(false)
        navigate('/login')
        toast.error("Registration failed! Please try again.");
        return 1;
      });
      navigate(location?.state? location.state: '/');
    console.log(data); 
  };

    return (
        <div className="w-96 mx-auto">
          <Helmet>
      <title>LuxeVillas | Login</title>
    </Helmet>
            <ToastContainer></ToastContainer>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.name && <p className='text-red-500 ml-1'>Email is required.</p>}
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" {...register("password", { 
            required: true,
     
          })} />
          {errors.name && <p className='text-red-500 ml-1'>Password is required.</p>}
         
        
        </div>
        
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
        <div className='flex  items-center '>
        <p>New User?</p>
        <Link to="/signup"><button className='btn text-primary bg-slate-100'>SignUp</button></Link>
        </div>
        <SocialLogin></SocialLogin>
      </form>
      
    </div>
    );
};

export default Login;