import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <div
          className="bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('../images/hello.png')" }}
        >
          <h1 className="text-8xl font-bold text-gray-400 mb-4">SnapCart</h1>
          <h2 className="text-2xl text-gray-500 mb-8">
            Making Shopping Effortless
          </h2>
          <Link to="/checkout">
            <button className="bg-gray-900 text-white font-bold py-4 px-6 rounded hover:bg-gray-500 transition duration-300">
              VIEW CART
            </button>
          </Link>
        </div>

        {/* <Carousel /> */}
        {/* <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div> */}
        <CarouselProduct />
        <CarouselCategory />
        {/* <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="Banner 1"
          />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
