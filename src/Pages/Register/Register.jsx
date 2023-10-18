import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
    }
    return (
        <div>
            
            <div className=" min-h-screen bg-white">
                <div className="pt-16 flex flex-col justify-center mb-5 items-center">
                <Link to='/'>
                <img src="https://i.ibb.co/17HxRTd/logo.png" alt="" />
                </Link>
                
                </div>
           
            <form onSubmit={handleRegister} className="card-body  bg-amber-700 md:w-3/4 lg:w-1/2 mx-auto rounded-xl">
                <div>
                <h2 className="text-3xl text-center text-white font-bold ">Please Register</h2>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Your Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" name="name" className="input input-bordered bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Image url</span>
                    </label>
                    <input type="text" placeholder="image_url(optional)" name="image" className="input input-bordered bg-white"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered bg-white" name="password" required />
                 
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-white text-black font-bold hover:bg-inherit hover:text-white hover:border-none">Register</button>
                </div>
            </form>

            <p className="text-center mt-3 text-black">Already have an account,  <Link className="text-blue-600 font-semibold" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;