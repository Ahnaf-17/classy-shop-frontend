
const Advertisement = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full  h-[600px]">
                <img src="https://i.ibb.co/tZssDzc/ultraboost-banner.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full  h-[600px]">
                <img src="https://i.ibb.co/Bn02XsX/Gucci-Blog-Banner-1024x536.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full  h-[600px]">
                <img src="https://i.ibb.co/tbm0rk6/pngtree-taobao-activity-men-s-sneakers-dark-banner-template-image-1071796.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;