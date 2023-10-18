import Navbar from "../Common_Pages/Navbar/Navbar";

const AddProduct = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-amber-700 p-24">
            <h2 className="text-2xl text-white text-center font-bold">Add a Product</h2>
            <form >
                {/* row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Product name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="coffee name"
                                name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text text-white">Brand Name</span>
                        </label>
                        {/* <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label> */}
                        <select className="h-[46px]" name="brand" id="brand">
                            <option value="adidas">Adidas</option>
                            <option value="nike">Nike</option>
                            <option value="lotto">Lotto</option>
                            <option value="h&m">H&M</option>
                            <option value="gucci">Gucci</option>
                            <option value="ck">ck</option>
                        </select>
                    </div>
                </div>
                {/* row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Type</span>
                        </label>


                        <select className="h-[46px]" name="type" id="type">
                            <option value="snickers">Snickers</option>
                            <option value="t-shirt">T-shirt</option>
                            <option value="joggers">Joggers</option>
                        </select>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* row */}
                <div className="md:flex">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white"> Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text text-white"> Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="">

                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text text-white"> Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add product" className="btn btn-block bg-gray-700 text-white mt-5 " />

            </form>
        </div>
        </div>
    );
};

export default AddProduct;