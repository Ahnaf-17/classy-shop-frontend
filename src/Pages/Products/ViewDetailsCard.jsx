/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ViewDetailsCard = ({ product }) => {
    const {  name, brand, price, details, photo } = product || {}
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content gap-10 flex-col lg:flex-row p-10">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="py-2">Brand : {brand}</p>
                        <p className="py-2">Details : {details}</p>
                        <p className="py-2">Brand : {brand}</p>
                        <p className="py-2">Price : {price}$</p>
                       <Link>
                       <button className="btn bg-amber-700 text-white">Add to cart</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsCard;