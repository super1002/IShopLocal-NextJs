import { useContext, useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProductContext from "../../../context/ProductContext";
import Header from "../layout/header";
import Footer from "../layout/footer";
import ProfileSideBar from "../../../components/ProfileSidbar";
import ProfileOrderBox from "../../../components/ProfileOrderBox";
import ProfileProductBox from "../../../components/ProfileProductBox";
import { GiCheckMark } from "react-icons/gi";
import {
  AiOutlineDollarCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { TfiPackage } from "react-icons/tfi";
import { TbBus } from "react-icons/tb";
import { BsBoxArrowDownLeft } from "react-icons/bs";
import { TfiDownload } from "react-icons/tfi";
import "rc-slider/assets/index.css";

const orderList = [
  {
    id: "1233451",
    price: 400,
    items: 4,
    state: 3,
    dDateTime: "",
  },
  {
    id: "1233452",
    price: 400,
    items: 4,
    state: 2,
    dDateTime: "",
  },
  {
    id: "1233453",
    price: 400,
    items: 4,
    state: 5,
    dDateTime: "April 10 at 4:10 PM",
  },
  {
    id: "1233454",
    price: 400,
    items: 4,
    state: 5,
    dDateTime: "April 13 at 4:10 PM",
  },
  {
    id: "1233455",
    price: 400,
    items: 4,
    state: 5,
    dDateTime: "April 11 at 4:10 PM",
  },
];

const ProductOrderList = [
  {
    id: "19026",
    icons: "nike-shoes-1.png",
    pricing: "90.89",
    size: "43",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    numbers: 2,
  },
  {
    id: "19027",
    icons: "nike-shoes-4.png",
    pricing: "80.89",
    size: "46",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    numbers: 1,
  },
  {
    id: "19026",
    icons: "nike-shoes-3.png",
    pricing: "90.89",
    size: "43",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    numbers: 2,
  },
  {
    id: "19027",
    icons: "nike-shoes-2.png",
    pricing: "80.89",
    size: "46",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    numbers: 1,
  },
];

const ProfileAddresses: NextPage = () => {
  const countArray = Array(5).fill(0);
  const { orderNum, setOrderNum } = useContext(ProductContext);
  const newArray = orderNum.split(",");
  const currentState = Number(newArray[1]);

  return (
    <div className="flex flex-col justify-center w-full">
      <Head>
        <title>IShopLocal | Profile/My Orders</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div className="grid grid-cols-12 gap-4 px-[100px] justify-center items-center w-full pt-16 font-sfui">
        <div className=" grid flex-col col-span-12 md:col-span-4 lg:col-span-3 gap-2 h-[100%] pt-8">
          <ProfileSideBar pageNumber={2} />
        </div>
        <div className="grid w-full flex-col gap-8 col-span-12 md:col-span-8 lg:col-span-9 mb-32">
          <div className="w-full justify-between place-content-end flex ">
            <div className=" flex gap-2">
              <p className=" font-bold text-[32px] text-iB leading-none">
                My Orders
              </p>
              <p className=" font-bold text-[32px] text-[#A7A9AC] leading-none">
                {`(2)`}
              </p>
            </div>
            <p className="flex font-medium text-[12px] text-iB items-end">
              Profile / My Orders
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <p className=" text-[20px] font-semibold font-sfui leading-none">
                Online Orders
              </p>
              <p className=" text-[20px] font-semibold font-sfui leading-none">
                Pickup Orders
              </p>
            </div>
            <div className="border-b border-cB w-full"></div>
            <div className="grid grid-cols-12 gap-5 pt-2">
              <div className=" flex flex-col col-span-12 md:col-span-4 lg:col-span-4 bg-[#F8F8F8] rounded-lg py-2 px-5 divide-y gap-3 h-fit pb-5">
                {orderList.map((item, index) => (
                  <ProfileOrderBox
                    key={index}
                    id={item.id}
                    price={item.price}
                    items={item.items}
                    state={item.state}
                    dDateTime={item.dDateTime}
                  />
                ))}
              </div>
              <div className=" flex gap-5 flex-col col-span-12 md:col-span-8 lg:col-span-8">
                {currentState < 5 ? (
                  <div className=" flex flex-col rounded-lg bg-[#F8F8F8] p-5 gap-5 relative">
                    <div className=" flex gap-2">
                      <p className=" font-semibold text-[20px] text-iB leading-none">
                        {`Order #${newArray[0]}`}
                      </p>
                      <p className=" font-semibold text-[20px] text-[#A7A9AC] leading-none">
                        {`(2)`}
                      </p>
                    </div>
                    <div className=" flex gap-3 justify-between">
                      <div className=" flex flex-col gap-1">
                        <p className=" font-medium text-[14px] text-[#A7A9AC]">
                          Order
                        </p>
                        <div className="flex gap-3">
                          <GiCheckMark fontSize={18} className="text-greyB" />
                          <p className="text-greyB font-medium text-[16px]">
                            Paid
                          </p>
                        </div>
                      </div>
                      <div className=" flex flex-col gap-1">
                        <p className=" font-medium text-[14px] text-[#A7A9AC]">
                          Amount
                        </p>
                        <p className="text-iB font-semibold text-[14px]">
                          $5876.00
                        </p>
                      </div>
                      <div className=" flex flex-col gap-1">
                        <p className=" font-medium text-[14px] text-[#A7A9AC]">
                          Estimated Delivery
                        </p>
                        <p className="text-iB font-semibold text-[14px]">
                          April 15, 2023
                        </p>
                      </div>
                      <div className="flex justify-center items-center  py-[10px] px-[20px] border-2 border-[#00B5DE] rounded-lg transition duration-0 cursor-pointer text-white bg-[#00B5DE]  hover:bg-[hsl(191,100%,44%)] hover:text-white hover:duration-150 gap-3 h-[40px] self-center">
                        <p className="font-sfui font-medium text-[14px]">
                          In Progress
                        </p>
                      </div>
                    </div>
                    <div className="w-[90%] h-[2px] z-1 bg-[#D9D9D9] absolute left-[30px] top-[153px]">
                      {" "}
                    </div>
                    <div
                      className={` ${
                        currentState == 1
                          ? "w-[0%]"
                          : currentState == 2
                          ? "w-[20%]"
                          : currentState == 3
                          ? "w-[45%]"
                          : currentState == 4
                          ? "w-[70%]"
                          : "w-[90%]"
                      } h-[2px] z-2 bg-iB absolute left-[30px] top-[153px]`}>
                      {" "}
                    </div>
                    <div className="flex justify-between">
                      {countArray.map((_, index) => (
                        <div className="relative" key={index}>
                          <div className="flex flex-col gap-1 items-center z-50">
                            <div
                              className={`p-3 rounded-[50%] ${
                                index + 1 <= currentState
                                  ? "bg-[#00B5DE] text-white"
                                  : "bg-[#D9D9D9] text-[#2A353D]"
                              }  flex items-center justify-center`}>
                              {index + 1 == 1 ? (
                                <AiOutlineDollarCircle fontSize={25} />
                              ) : index + 1 == 2 ? (
                                <TfiPackage fontSize={25} />
                              ) : index + 1 == 3 ? (
                                <TbBus fontSize={25} />
                              ) : index + 1 == 4 ? (
                                <BsBoxArrowDownLeft fontSize={25} />
                              ) : (
                                <AiOutlineStar fontSize={25} />
                              )}
                            </div>
                            <p
                              className={`text-[14px] font-medium ${
                                index + 1 == currentState
                                  ? "text-[#00B5DE]"
                                  : "text-iB"
                              } `}>
                              {index + 1 == 1
                                ? "Paid"
                                : index + 1 == 2
                                ? "Packed"
                                : index + 1 == 3
                                ? "Shipping"
                                : index + 1 == 4
                                ? "Received"
                                : "Review"}
                            </p>
                          </div>
                          {index + 1 < currentState ? (
                            <Image
                            src="/icons/Checkmark.svg"
                            alt="Check"
                            className=""
                            width={20}
                            height={20}
                            style={{position:"absolute", top:"-3px", left:"-3px"}}/>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div className="flex flex-col rounded-lg bg-[#F8F8F8] p-5 gap-5 divide-y">
                  {currentState < 5 ? null : (
                    <div className=" flex w-full justify-between">
                      <div className="flex gap-2">
                        <p className=" font-semibold text-[20px] text-iB leading-none">
                          {`Order #${newArray[0]}`}
                        </p>
                        <p className=" font-semibold text-[20px] text-[#A7A9AC] leading-none">
                          {`(2)`}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {countArray.map((_, index) => (
                          <Image
                            src="/icons/Star.svg"
                            alt="Star"
                            className=""
                            width={20}
                            height={20}
                            key={index}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  {ProductOrderList.map((item, index) => (
                    <ProfileProductBox
                      key={index}
                      id={item.id}
                      icons={item.icons}
                      pricing={item.pricing}
                      size={item.size}
                      comment={item.comment}
                      numbers={item.numbers}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-3 w-full px-5 py-5 bg-[#F8F8F8] font-sfui rounded-lg">
                  <div className="w-full flex justify-between text-[14px]">
                    <p className="text-[#696C74]">Phone Number</p>
                    <p className="font-medium">+123456789</p>
                  </div>
                  <div className="w-full flex justify-between text-[14px]">
                    <p className="text-[#696C74]">Delivery Address</p>
                    <p className="font-medium">
                      127 E 21st, New York, NY 10010
                    </p>
                  </div>
                  <div className="w-full flex justify-between text-[14px]">
                    <p className="text-[#696C74]">Invoice</p>
                    <a
                      href="#"
                      className="flex gap-2 text-[#00B5DE] cursor-pointer">
                      <TfiDownload fontSize={16} />
                      <p className="font-medium">Invoice.pdf</p>
                    </a>
                  </div>
                  <div className="border-b border-cB w-full"></div>
                  <div className="w-full flex justify-between text-[14px]">
                    <p className=" font-medium">Total</p>
                    <p className="text-[#00B5DE] font-medium text-[16px]">{`USD $${"5,654.00"}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileAddresses;
