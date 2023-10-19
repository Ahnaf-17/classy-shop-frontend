import { Link } from "react-router-dom";

const ViewDetailsCard = ({product}) => {
    const {_id,name,brand,type,price,details,rating,photo} = product || {}
    return (
        <div>
            <div className="card bg-gray-500  rounded-xl  md:rounded-none">
            <figure><img className="w-full lg:h-[700px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white mb-4  lg:text-4xl font-bold">{name}</h2>
                <h2 className="card-title text-white mb-4  lg:text-4xl font-bold">Brand: {brand}</h2>
                <p className="text-white mb-5">{details}</p>
                <h2 className="card-title text-white mb-4  lg:text-xl font-bold">Price : {price}$</h2>
                <Link>
                <button className="btn bg-amber-700 text-white border-none w-40">Add to cart</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default ViewDetailsCard;