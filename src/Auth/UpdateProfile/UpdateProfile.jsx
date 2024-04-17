import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import UseAuth from '../../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";


const UpdateProfile = () => {
    const { user, updateUserProfile } = UseAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        }
    });

  const onSubmit = (data) => {
        updateUserProfile(data.name, data.photoURL)
            .then(() => {
                toast.success("Profile updated successfully!");
                reset();
                
            })
            .catch((error) => {
                console.error("Error occurred:", error);
                toast.error("Failed to update profile. Please try again.");
            });
    };

    return (
        
        <div className='w-[60%] mx-auto text-center'>
            <Helmet>
                <title>LuxeVillas | UpdateProfile</title>
            </Helmet>
             <h1 className="mb-5 text-4xl font-bold text-[#010313]">Update Your Profile</h1>
                <p className="mb-5 ] font-semibold">
                Explore Our Exquisite Collection of Residential Estates: Where Dreams Meet Reality
                </p>
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
                    <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} disabled />
                   
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL" className="input input-bordered" {...register("photoURL", { required: true })} />
                    {errors.photoURL && <p className='text-red-500 ml-1'>Photo URL is required.</p>}
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Update Profile</button>
                </div>
            </form>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;
