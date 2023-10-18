import { useLoaderData } from "react-router-dom";
import Banner from "../Common_Pages/Banner/Banner";
import Navbar from "../Common_Pages/Navbar/Navbar";
import Brands from "./Brands";
import Footer from "../Common_Pages/Footer/Footer";

const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h3 className="text-4xl font-extrabold text-gray-600 italic text-center mt-10 mb-10">Our Brands</h3>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mx-14"  >
                {
                    brands.map(abrand => <Brands key={brands.id}
                        brands={abrand}
                    ></Brands>)
                }
            </div>
            

            {/* extra section 1 */}
            <section className="pt-16">
            <div className=" flex justify-center mt-16">
                <h3 className="border-b-2 w-1/2  border-b-amber-700"></h3>
            </div>
                <div>
                    <h3 className="text-4xl font-extrabold text-gray-600 italic text-center  mt-10 mb-10"></h3>
                </div>
                <div className="hero min-h-screen bg-white">
                    <div className="hero-content flex-col  lg:flex-row-reverse">
                        <img src="https://i.ibb.co/JQLtGqT/jordan.jpg" className="md:max-w-lg rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold text-gray-600">What we do</h1>
                            <p className="py-6">Welcome to ClassyShop, where we specialize in curating high-quality OEM-grade clothing products from renowned brands and make them accessible to you at incredibly reasonable prices. We take pride in our dedication to offering top-tier fashion without the premium price tag, ensuring that you can enjoy the latest trends and timeless classics while staying within your budget. Discover a wide range of stylish, well-crafted clothing items that combine affordability with uncompromising quality. Shop with us and redefine your wardrobe without breaking the bank.</p>

                        </div>
                    </div>
                </div>

            </section>
            {/* extra section 2 */}
            <section>
                <div>
                    <h3 className="text-4xl text-center font-extrabold text-gray-600 italic  mt-10 mb-10">Products we have</h3>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Home;