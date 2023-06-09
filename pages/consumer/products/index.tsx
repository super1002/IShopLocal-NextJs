import { useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ProductContext from "../../../context/ProductContext";
import Header from "../layout/header";
import Footer from "../layout/footer";
import ProductsBox from "../../../components/ProductsBox";
import TooltipSlider, { handleRender } from "../../../components/TooltipSlider";

const searchResult = {
  total: 786,
  countAreas: 7,
  distance: 2.32323,
};

const productList = [
  {
    id: "19029",
    icons: "nike-shoes-1.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19030",
    icons: "nike-shoes-2.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19031",
    icons: "nike-shoes-3.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19032",
    icons: "nike-shoes-4.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19033",
    icons: "nike-shoes-1.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19034",
    icons: "nike-shoes-2.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19035",
    icons: "nike-shoes-3.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19026",
    icons: "nike-shoes-4.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
];

const ConsumerProducts: NextPage = () => {
  const { distanceValue } = useContext(ProductContext);

  return (
    <div className="flex flex-col justify-center w-full">
      <Head>
        <title>IShopLocal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div className="grid gap-4 w-full grid-cols-12 px-7">
        <div className="flex flex-col col-span-3 font-sfui py-4 gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold">Price</p>
            <div className="flex border-2 border-[#F8F8F8] flex-col p-3 rounded-lg pt-7">
              <TooltipSlider
                range
                min={0}
                max={100}
                defaultValue={[20, 60]}
                tipFormatter={(value) => `$${value}`}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold">Type</p>
            <div className=" font-medium text-[16px] flex">
              {" "}
              &gt;<p className="ml-5">Dress Shoes</p>{" "}
            </div>
            <div className=" font-medium text-[16px] flex">
              {" "}
              &gt;<p className="ml-5">Formal</p>
            </div>
            <div className=" font-medium text-[16px] flex">
              {" "}
              &gt;<p className="ml-5">Sports</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold">Distance</p>
            <div className="flex border-2 border-[#F8F8F8] flex-col p-3 rounded-lg">
              <p className="text-[16px] font-medium"> {`${distanceValue}km`}</p>
              <Slider
                min={0}
                max={10}
                defaultValue={3}
                handleRender={handleRender}
              />
            </div>
            {/* <Slider /> */}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold">Brand</p>
            <div className="flex gap-5">
              <input type="checkbox" className="w-[15px]" />
              <Image
                src="/icons/adidas.svg"
                alt="Nike"
                className=""
                width={42}
                height={30}
              />
            </div>
            <div className="flex gap-5">
              <input type="checkbox" className="w-[15px]" />
              <Image
                src="/icons/nike-logo.svg"
                alt="Nike"
                className=""
                width={42}
                height={30}
              />
            </div>
            <div className="flex gap-5">
              <input type="checkbox" className="w-[15px]" />
              <Image
                src="/icons/adidas.svg"
                alt="Nike"
                className=""
                width={42}
                height={30}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[20px] font-semibold">Stores</p>
            <div className="flex gap-5">
              <input type="checkbox" className="w-[15px]" />
              <p className=" font-medium text-[16px]">Hermans</p>
            </div>
            <div className="flex gap-5">
              <input type="checkbox" className="w-[15px]" />
              <p className=" font-medium text-[16px]">Scapino</p>
            </div>
            <div className="flex gap-5">
              <input type="checkbox" className="w-[15px]" />
              <p className=" font-medium text-[16px]">Hermans</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full self-center py-6 mb-32 gap-5 col-span-9 ">
          <div className="text-[14px] font-sfui font-light flex gap-1">
            {" "}
            <p className=" font-semibold">{`${searchResult.total}results`}</p>{" "}
            in{" "}
            <p className="font-semibold">{`${searchResult.countAreas}Areas `}</p>{" "}
            within{" "}
            <p className="text-[#00B5DE] font-semibold">{`${searchResult.distance}km`}</p>
            distance <p className="text-[#00B5DE] font-semibold">navigate</p>{" "}
          </div>
          <div className=" grid w-full gap-3 justify-between grid-cols-12">
            {productList.map((item, index) => (
              <ProductsBox
                key={index}
                id={item.id}
                icons={item.icons}
                brand={item.brand}
                pricing={item.pricing}
                rating={item.rating}
                comment={item.comment}
                likes={item.likes}
                local={item.local}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConsumerProducts;
