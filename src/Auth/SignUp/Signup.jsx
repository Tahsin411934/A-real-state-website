
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAuth from '../../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Signup = () => {
    const {createUser, updateUserProfile,setUser }= UseAuth()
    const navigate = useNavigate()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
  
        .then((userCredential) => {
            const user = userCredential.user;
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
              setUser({ ...user, displayName: data.name, photoURL: data.photoURL });
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
            toast.success("Registration successful!"); // Display success toast
            reset();
            navigate("/");
        })
        .catch((error) => {
            console.error("Error occurred:", error);
            toast.error("Registration failed! Please try again."); // Display error toast
        });
};


  return (
    <div className="w-96 mx-auto">
        
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
          {errors.name && <p className='text-red-500 ml-1'>Name is required.</p>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.name && <p className='text-red-500 ml-1'>Email is required.</p>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" className="input input-bordered" {...register("photoURL", { required: true })} />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" {...register("password", { 
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ 
          })} />
          {errors.name && <p className='text-red-500 ml-1'>Password is required.</p>}
          {errors.password && <span className="text-red-500">Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.</span>}
        
        </div>
        
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
        <div className='flex gap-5 items-center '>
        <p>Already have an account?</p>
        <Link to="/login"><button className='btn text-primary bg-slate-100'>Login</button></Link>
        </div>
        
      </form>
    </div>
  );
};

export default Signup;
