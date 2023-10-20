import { useLoaderData } from "react-router-dom";
import Navbar from "../Common_Pages/Navbar/Navbar";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {

    const cartProducts = useLoaderData()
    // const { _id, name, brand, type, price, details, rating, photo } = aCart || {}
    const [products,setProducts] = useState(cartProducts)
    const handleCartDelete = id => {
        fetch(`http://localhost:5000/cart/${id}`,{
            method: "DELETE" 
        }).then(res=> res.json())
        .then(data => {
            if(data.deletedCount>0){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your product has been removed.',
                        'success'
                      )
                    }
                  })
                const remainingProduct = products.filter(product => product._id !== id)
                setProducts(remainingProduct)
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2>cart : {cartProducts.length}</h2>
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
        products.map(product =><tr key={product._id}>
            <th>#</th>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
            <td><button onClick={()=>handleCartDelete(product._id)} className="text-red-500 underline font-semibold">Remove</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>


        </div>
    );
};

export default MyCart;