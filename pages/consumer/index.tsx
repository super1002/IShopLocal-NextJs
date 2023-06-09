import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./layout/header";
import Footer from "./layout/footer";
import MainSlider from "../../components/MainSlider";
import CategoryBox from "../../components/CategoryBox";
import DressBox from "../../components/DressBox";
import ShoesBox from "../../components/ShoesBox";

const categoryItems = [
  {
    title: "Hand Bags",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "handbag.png",
    bgcolor: "#F6C2AB",
  },
  {
    title: "Shoes",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "shoes.png",
    bgcolor: "#E9D9C8",
  },
  {
    title: "Jewelry ",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "jewelry.png",
    bgcolor: "#CEA67B",
  },
  {
    title: "Dresses",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "dress.png",
    bgcolor: "#4C483D",
  },
];
const dressItems = [
  {
    title: "Dress Name",
    price: "50",
    icon: "wo1.png",
    gridHeight: "2",
  },
  {
    title: "Dress Name",
    price: "50",
    icon: "wo2.png",
    gridHeight: "2",
  },
  {
    title: "Dress Name",
    price: "50",
    icon: "wo3.png",
    gridHeight: "1",
  },
  {
    title: "Dress Name",
    price: "50",
    icon: "wo4.png",
    gridHeight: "2",
  },
  {
    title: "Dress Name",
    price: "50",
    icon: "wo5.png",
    gridHeight: "2",
  },
];
const shoesItems = [
  {
    title: "Shoes",
    price: "50",
    icon: "shoes1.png",
    gridHeight: "2",
  },
  {
    title: "Shoes",
    price: "50",
    icon: "shoes2.png",
    gridHeight: "2",
  },
  {
    title: "Shoes",
    price: "50",
    icon: "shoes3.png",
    gridHeight: "2",
  },
  {
    title: "Shoes",
    price: "50",
    icon: "shoes4.png",
    gridHeight: "2",
  },
  {
    title: "Shoes",
    price: "50",
    icon: "shoes5.png",
    gridHeight: "1",
  },
];

const ConsumerHome: NextPage = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <Head>
        <title>IShopLocal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <MainSlider />
      <CategoryBox/>
      <DressBox/>
      <div className="w-[80%] mt-[123px] self-center bg-cover bg-center bg-[url('/img/fashionsale.png')] h-[547px] rounded-lg"></div>
      <ShoesBox/>
      <Footer />
    </div>
  );
};

export default ConsumerHome;
