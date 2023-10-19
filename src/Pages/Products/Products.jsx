import { useLoaderData, useParams } from "react-router-dom";
import Advertisement from "../Common_Pages/Advertisement/Advertisement";
import Navbar from "../Common_Pages/Navbar/Navbar";
import ProductCard from "./ProductCard";
import Footer from "../Common_Pages/Footer/Footer";
import { useEffect, useState } from "react";

const Products = () => {
    const [aBrand,setAbrand] = useState([]);
    const {brand} = useParams();
    const allProducts = useLoaderData();
    useEffect(()=>{
        const findABrand = allProducts.filter(aBrand => aBrand.brand.toLowerCase() == brand.toLowerCase() )
        setAbrand(findABrand)
    },[allProducts, brand])
    return (
        <div>
            <Navbar></Navbar>
            <Advertisement></Advertisement>
            {/* <h2>products : {allProducts.length}</h2> */}

            {
                allProducts.length>0
            }
            
            <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 grid-cols-1">
            {
                aBrand.map(product => <ProductCard key={product._id} aBrand={product}></ProductCard>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;