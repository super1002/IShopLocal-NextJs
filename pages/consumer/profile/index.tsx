import { useContext, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "rc-slider/assets/index.css";
import Header from "../layout/header";
import Footer from "../layout/footer";
import ProfileSideBar from "../../../components/ProfileSidbar";

const ProfileDetails: NextPage = () => {
  const [payChange, setPayChange] = useState(false);
  const [address, setAddress] = useState("");
  return (
    <div className="flex flex-col justify-center w-full">
      <Head>
        <title>IShopLocal | Profile/Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div className="grid grid-cols-12 gap-4 px-[100px] justify-center items-center w-full pt-16 font-sfui">
        <div className=" grid flex-col col-span-12 md:col-span-4 lg:col-span-3 gap-2 h-[100%] pt-8">
          <ProfileSideBar pageNumber={1} />
        </div>
        <div className="grid w-full flex-col gap-8 col-span-12 md:col-span-8 lg:col-span-9 mb-32">
          <div className="w-full justify-between place-content-end flex ">
            <p className=" font-bold text-[32px] text-iB leading-none">
              My Details
            </p>
            <p className="flex font-medium text-[12px] text-iB items-end">
              Profile / My Details
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-[20px] font-semibold font-sfui leading-none">
              Personal Information
            </p>
            <div className="border-b border-cB w-full"></div>
            <div className="grid grid-cols-12 gap-5 pt-2">
              <div className=" col-span-12 md:col-span-4 lg:col-span-4">
                <p className=" font-medium text-[14px]">
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                  }
                </p>
              </div>
              <div className=" flex gap-5 flex-col col-span-12 md:col-span-8 lg:col-span-8">
                <div className="grid grid-cols-12 gap-7">
                  <div className="grid flex-col col-span-6 md:col-span-6 lg:col-span-6 gap-2">
                    <p className="text-dark text-[15px] font-medium">
                      First Name
                    </p>
                    <div className="w-full rounded-lg border-[1px] border-cB p-3 bg-white">
                      <input
                        className="w-full text-[14px] font-medium leading-5 outline-0"
                        type="text"
                        style={{ color: "#000" }}
                        placeholder="Jhon"
                      />
                    </div>
                  </div>
                  <div className="grid flex-col col-span-12 md:col-span-6 lg:col-span-6 gap-2">
                    <p className="text-dark text-[15px] font-medium">
                      Last Name
                    </p>
                    <div className="w-full rounded-lg border-[1px] border-cB p-3  bg-white">
                      <input
                        className="w-full text-[14px] font-medium leading-5 outline-0"
                        type="text"
                        style={{ color: "#000" }}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7">
                  <div className="grid flex-col col-span-6 md:col-span-6 lg:col-span-6 gap-2">
                    <p className="text-dark text-[15px] font-medium">
                      Contact Number
                    </p>
                    <div className="w-full rounded-lg border-[1px] border-cB p-3 bg-white">
                      <input
                        className="w-full text-[14px] font-medium leading-5 outline-0"
                        type="text"
                        style={{ color: "#000" }}
                        placeholder="12345678"
                      />
                    </div>
                  </div>
                  <div className="grid flex-col col-span-12 md:col-span-6 lg:col-span-6 gap-2">
                    <p className="text-dark text-[15px] font-medium">
                      Birth Date
                    </p>
                    <div className="w-full rounded-lg border-[1px] border-cB p-3  bg-white">
                      <input
                        className="w-full text-[14px] font-medium leading-5 outline-0"
                        type="text"
                        style={{ color: "#000" }}
                        placeholder="DD/MM/YYYY"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center py-[10px] px-[20px] border-2 border-cB rounded-lg transition duration-0 cursor-pointer bg-[hsl(191,100%,44%)]  hover:bg-[hsl(191,100%,44%)] hover:text-white hover:duration-150 gap-3 text-white w-[150px]">
                  <p className="font-sfui font-medium text-[14px]">
                    Save Changes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-[20px] font-semibold font-sfui leading-none">
              Email Address
            </p>
            <div className="border-b border-cB w-full"></div>
            <div className="grid grid-cols-12 gap-5 pt-2">
              <div className=" col-span-12 md:col-span-4 lg:col-span-4">
                <p className=" font-medium text-[14px]">
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                  }
                </p>
              </div>
              <div className=" flex gap-5 flex-col col-span-12 md:col-span-8 lg:col-span-8">
                <div className="grid grid-cols-12 gap-7">
                  <div className="grid flex-col col-span-6 md:col-span-6 lg:col-span-6 gap-2">
                    <p className="text-dark text-[15px] font-medium">Email</p>
                    <div className="w-full rounded-lg border-[1px] border-cB p-3 bg-white">
                      <input
                        className="w-full text-[14px] font-medium leading-5 outline-0"
                        type="email"
                        style={{ color: "#000" }}
                        placeholder="JohnDOe78@gmail.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center py-[10px] px-[20px] border-2 border-cB rounded-lg transition duration-0 cursor-pointer bg-[hsl(191,100%,44%)]  hover:bg-[hsl(191,100%,44%)] hover:text-white hover:duration-150 gap-3 text-white w-[150px]">
                  <p className="font-sfui font-medium text-[14px]">
                    Save Changes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-[20px] font-semibold font-sfui leading-none">
              Personal Information
            </p>
            <div className="border-b border-cB w-full"></div>
            <div className="grid grid-cols-12 gap-5 pt-2">
              <div className=" col-span-12 md:col-span-4 lg:col-span-4">
                <p className=" font-medium text-[14px]">
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                  }
                </p>
              </div>
              <div className=" flex gap-5 flex-col col-span-12 md:col-span-8 lg:col-span-8">
                <div className="grid grid-cols-12 gap-7">
                  <div className="grid flex-col col-span-6 md:col-span-6 lg:col-span-6 gap-2">
                    <p className="text-dark text-[15px] font-medium">
                      Current Password
                    </p>
                    <div className="w-full rounded-lg border-[1px] border-cB p-3 bg-white">
                      <input
                        className="w-full text-[14px] font-medium leading-5 outline-0"
                        type="password"
                        style={{ color: "#000" }}
                        placeholder="**************"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7">
                  <div className="grid flex-col col-span-6 md:col-span-6 lg:col-span-6 gap-2">
                    <p className="text-dark text-[15px] font-medium">
                      New Password
                    </p>
                    <div className="w-full rounded-lg border-[1px] border-cB p-3 bg-white">
                      <input
                        className="w-full text-[14px] font-medium leading-5 outline-0"
                        type="password"
                        style={{ color: "#000" }}
                        placeholder="**************"
                      />
                    </div>
                    <p className="text-dark text-[12px] font-medium">
                      Make sure your password in 8 character long and contain
                      letters and numbers
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-7">
                  <div className="grid flex-col col-span-6 md:col-span-6 lg:col-span-6 gap-2">
                    <p className="text-dark text-[15px] font-medium">
                      Confirm Password
                    </p>
                    <div className="w-full rounded-lg border-[1px] border-cB p-3 bg-white">
                      <input
                        className="w-full text-[14px] font-medium leading-5 outline-0"
                        type="password"
                        style={{ color: "#000" }}
                        placeholder="**************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center py-[10px] px-[20px] border-2 border-cB rounded-lg transition duration-0 cursor-pointer bg-[hsl(191,100%,44%)]  hover:bg-[hsl(191,100%,44%)] hover:text-white hover:duration-150 gap-3 text-white w-[150px]">
                  <p className="font-sfui font-medium text-[14px]">
                    Save Changes
                  </p>
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

export default ProfileDetails;