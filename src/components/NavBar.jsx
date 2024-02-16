import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from "./";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-gray-900 text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[60px] w-[130px] m-2"
              src={"../images/mylogo.png"}
              alt="SnapCart logo"
            />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Store Location:</div>
            <div className="text-sm xl:text-base font-bold">SRM, Chennai</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, Affaan Kidwai</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <Link to={"./ObjectDetection"}>
            <div className="pr-4 pl-4">
              <div className="text-sm xl:text-base font-bold">Scan</div>
              <div className="text-sm xl:text-base font-bold">the object</div>
            </div>
          </Link>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              {/* <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div> */}
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div> */}
    </header>
  );
};

export default NavBar;
