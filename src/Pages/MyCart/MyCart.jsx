/* eslint-disable no-unused-vars */
import Navbar from "../Common_Pages/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const MyCart = () => {
    const {user} = useContext(AuthContext)

    // const cartProducts = useLoaderData()
    const [cartProducts,setCartProducts] = useState([])
    const [products, setProducts] = useState(cartProducts)
    // const { email } = useParams()
    // const [userEmail, setUserEmail] = useState([]);


    useEffect(() => {
        fetch(`https://classy-shop-server-atu86hzmb-ahnaf-ahmeds-projects.vercel.app/cart/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log("this is data",data)
            setCartProducts(data)
        })
        // const findUser = cartProducts.find(userEmail => userEmail.email == user.email );
        // setUserEmail(findUser)
    }, [ user.email])



    // console.log("userEmail :", user.email);
    // console.log("loggedin User :", email);

    const handleCartDelete = id => {
        fetch(`https://classy-shop-server-atu86hzmb-ahnaf-ahmeds-projects.vercel.app/cart/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your product has been removed.',
                        'success'
                    )
                    .then((result) => {
                        console.log(result)
                    })
                    const remainingProduct = cartProducts.filter(product => product._id !== id)
                    setCartProducts(remainingProduct)
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>      
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cartProducts.map(product => <tr key={product._id}>
                                <th>#</th>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleCartDelete(product._id)} className="text-red-500 underline font-semibold">Remove</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div> 





        </div>
    );
};

export default MyCart;