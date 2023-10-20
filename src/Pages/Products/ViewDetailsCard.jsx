/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const ViewDetailsCard = ({ product }) => {

    const {user} = useContext(AuthContext)

    const handleCart = e =>{
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const cartProduct = {user,name,brand,type,price,details,rating,photo}
        console.log(cartProduct)

        // send to server 
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                "content-type": "application/json" 
            },
            body: JSON.stringify(cartProduct)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'product added to cart',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        

    }

    const { name,brand,type,price,details,rating,photo } = product || {}
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
                       <button onClick={handleCart} className="btn bg-amber-700 text-white">Add to cart</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsCard;