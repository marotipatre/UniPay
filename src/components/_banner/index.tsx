"use client";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GlobeScene from "../../components/Globe";

import { useState } from "react";
const Banner = () => {
  
  const { account } = useWallet();
  // const { userType, setUserType }: any = useUser();
  const route = useRouter();

  const fetchUserType = async () => {
    if (account === null) return;

    try {
      const response = await fetch(
        `https://gigster-backend-ztso.onrender.com/api/find_usertype/${account?.address}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.userType !== "") {
          localStorage.setItem("userType", data.userType);
          route.push("/dashboard");
        }
      } else {
        alert("Failed to create sponsor profile");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form");
    }
  };

  useEffect(() => {
    fetchUserType();
  }, [account]);

  return (
    <section className="px-2 py-20 bg-white min-h-screen md:px-0 mt-32">
      {/* <div className='w-[400px] h-[400px] absolute top-[150px] -left-[200px] bg-slate-900 rotate-45 flex justify-end items-center flex-row'>
        <Image src={'https://res.cloudinary.com/dm6aa7jlg/image/upload/v1724917106/white_gigster_logo_bg_rm_odpfxf.png'} className='-rotate-45 -mt-[180px] mr-12' alt="" width={140} height={140} />
      </div>
      <div className='w-[400px] h-[400px] absolute top-[150px] -right-[200px] bg-slate-900 rotate-45 flex justify-start items-center flex-row'>
        <Image src={'https://res.cloudinary.com/dm6aa7jlg/image/upload/v1724916905/White_MoveClub_bg_rm_fgm34e.png'} className='-rotate-45 mt-32 ml-12' alt="" width={120} height={120} />
      </div> */}
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap justify-center items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 font sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                <span className="xl:inline flex justify-center items-center flex-col">
                  Claim Your Bounties{" "}
                  <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-700 to-blue-900 lg:inline">
                    Across any chain
                  </span>
                  <span> in Web3 Universe</span>
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md font-mono lg:text-xl md:max-w-3xl">
                {">"}—no gas, no hassle!
              </p>
              <section className="bg-white t">
                <div className="py-4">
                  <div className="flex gap-8 text-gray-500 sm:gap-12 md:grid-cols-3  dark:text-gray-400 place-items-center">
                    <p className="text-base font-bold  tracking-tight leading-tight text-center text-grey">
                      On your favorite eco
                    </p>
                    <a href="#" className="flex justify-center items-center">
                      <Image
                        src={
                          "data:image/png;base64,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"
                        }
                        alt=""
                        width={50}
                        height={50}
                        className="flex-shrink-0 rounded-full"
                      />
                      <p className="px-2 font-bold">COSMOS</p>
                    </a>
                  </div>
                </div>
              </section>

              <div className="relative flex-col sm:space-x-4">
                <div>
                  <Link
                  href="/become-sponser"
                  className="flex w-[40%] items-center px-6 py-3 mb-3 text-lg text-white bg-black  bg-gradient-to-r from-black via-black to-blue-900 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                >
                  Organiser
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link
                  href="/become-hunter"
                  className="flex w-[40%] mt-4 items-center px-6 py-3 mb-3 text-lg text-white bg-black  bg-gradient-to-l from-black via-black to-blue-900 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                >
                  Builder
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                </div>
              
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:px-3">
            <div className="className=relative w-full h-96">
              <GlobeScene />
            </div>
          </div>
        </div>
      </div>
      <div className="announcement bg-yellow-200 text-yellow-800 font-bold p-2 rounded-md my-4">
        Our SDK & Extension going live soon!
      </div>
    </section>
  );
};

export default Banner;
