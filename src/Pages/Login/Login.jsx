import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
        <Navbar></Navbar>
        <div className="mt-16">
            <h2 className="text-4xl my-10 text-center text-[#403F3F] font-semibold ">Login Your Account</h2>
            <form onSubmit={handleLogin}  className=" p-2 md:w-3/4 lg:w-1/2 mx-auto ">
                <div className="form-control mb-6">
                    <label className="label">
                        <span className="text-xl font-semibold text-[#403F3F] ">Email address</span>
                    </label>
                    <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control mb-6">
                    <label className="label">
                        <span  className="text-xl font-semibold text-[#403F3F] ">Password</span>
                    </label>
                    <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white bg-[#403F3F] text-xl font-semibold">Login</button>
                </div>
            </form>
            <p className="text-center mt-4">Don&apos;t have an account ?<Link className="font-bold  bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] inline-block text-transparent bg-clip-text" to="/register"> Register</Link></p>
        </div>

    </div>
    );
};

export default Login;