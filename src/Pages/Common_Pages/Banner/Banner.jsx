
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item  relative w-full lg:h-[800px]">
                <img src="https://i.ibb.co/M6Fv9ry/b-2.jpg
" className="w-full " />
                {/* <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-center text-2xl font-bold text-white">Body Building</h2>
                <h3 className="text-yellow-500 md:text-6xl text-2xl text-center font-bold">Heavy Weight Lifting</h3>
                </div> */}

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                

            </div>
            <div id="slide2" className="carousel-item relative w-full lg:h-[800px]">
                <img src="https://i.ibb.co/KqggW5D/b-1.webp
" className="w-full" />
                {/* <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-center text-2xl font-bold text-white">Fitness , Yoga</h2>
                <h3 className="text-yellow-500 md:text-6xl text-2xl text-center font-bold">Yoga For Beginner</h3>
                </div> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full lg:h-[800px]">
                <img src="https://i.ibb.co/qdmVZ4k/b-3.webp
" className="w-full" />
                {/* <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-center text-2xl font-bold text-white">Track and running</h2>
                <h3 className="text-yellow-500 md:text-6xl text-center text-2xl font-bold">Run For Life</h3>
                </div> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;