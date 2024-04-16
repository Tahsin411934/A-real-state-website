import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
const SocialLogin = () => {
    const {googleLogin,githubLogin} = UseAuth()
    return (
        <div>
            <div className="w-[70%] mx-auto"><p>---------- Login with  ---------</p></div>
            <div className="form-control mt-6">
          <button onClick={()=> googleLogin()} type="submit" className="btn text-xl bg-slate-300"><FcGoogle />Google </button>
          <button onClick={()=>githubLogin()} type="submit" className="btn text-xl mt-5 bg-slate-300"><FaGithub />Github </button>
        </div>
        </div>
    );
};

export default SocialLogin;