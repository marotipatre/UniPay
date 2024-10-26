"use client"

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatDateToDDMMYYYYHM } from "../formatDateToDDMMYYYYHM/formatDateToDDMMYYYYHM";

export default function Bounty({ bounties, userType }: any) {

    const { account } = useWallet()
    console.log(bounties);

    return (
        <div className="w-full flex justify-start items-center flex-col h-[calc(100%_-100px)] overflow-x-hidden p-1 overflow-y-auto container2">
            {
                bounties.length != 0 && bounties?.map((item: any, index: any) => (
                    <Link key={index} href={userType === 'hunter' ? `/hunter/${item._id}` : `/sponser/my-bounty/${item._id}`} className="bg-[#ffffff] w-full flex justify-start items-start flex-row p-4 rounded-lg shadow-md m-1">
                        <Image src={"https://tse1.mm.bing.net/th?id=OIP.bHrShAEKhWrUzdP3v8a5CQHaHb&pid=Api&P=0&h=180"} className="rounded-full" width={50} height={50} alt="" />

                        <div className="flex justify-center items-start flex-col ml-4">

                            <h1 className="text-slate-800 text-lg">{item.title}</h1>
                            <div className="flex mt-1 ml-4 text-base text-gray-600 font-light">
                                <div className="text-slate-400 text-sm flex -ml-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24"><path fill="#94A3B8" d="M12 11q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11m-3.615 9v-1H11.5v-3.754q-1.321-.236-2.312-1.105T7.823 11.99q-1.586-.187-2.705-1.301T4 8V7q0-.402.299-.701T5 6h2.654V4h8.692v2H19q.402 0 .701.299T20 7v1q0 1.573-1.118 2.688t-2.705 1.3q-.373 1.285-1.364 2.153T12.5 15.246V19h3.115v1zm-.731-9.084V7H5v1q0 1.142.762 1.963t1.892.953M12 14.269q1.385 0 2.346-.961q.962-.962.962-2.347V5H8.692v5.962q0 1.384.962 2.346q.961.961 2.346.961m4.346-3.354q1.131-.132 1.892-.952T19 8V7h-2.654zM12 9.636" /></svg>
                                    <span className="ml-1">{item.category}</span>
                                </div>
                                <div className="text-slate-400 ml-2">|</div>
                                <div className="text-slate-400 text-sm flex ml-2 mt-[2px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#94A3B8" d="M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 7h1v5.42l4.7 2.71l-.5.87l-5.2-3z" /></svg>
                                    <span className="ml-1">Deadline {formatDateToDDMMYYYYHM(item?.endAt)}</span>
                                </div>
                                <div className="text-slate-400 ml-2">|</div>
                                <div className="text-slate-400 text-sm flex ml-3 mt-[2px] justify-start items-center">
                                    <div className="bg-green-500 w-2 h-2 rounded-full pulse-green"></div>
                                    <span className="ml-2">Live</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end flex-row items-center flex-grow ">
                            <Image src={"https://tse1.mm.bing.net/th?id=OIP.bHrShAEKhWrUzdP3v8a5CQHaHb&pid=Api&P=0&h=180"} className="rounded-full" width={20} height={20} alt="" />
                            <span className="text-lg text-slate-800 ml-4 mr-2">{item.budget}</span>
                            <span className="text-slate-400 text-base"> APT</span>
                        </div>
                    </Link>

                ))
            }

        </div>
    )
}