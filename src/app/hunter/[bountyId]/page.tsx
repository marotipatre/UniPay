"use client"

import Image from "next/image";
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     useDisclosure,
//     Button,
//     FormControl,
//     FormLabel,
//     Input,
//     useToast,
// } from '@chakra-ui/react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useEffect, useRef, useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { formatDateToDDMMYYYYHM } from "@/components/formatDateToDDMMYYYYHM/formatDateToDDMMYYYYHM";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"


export default function Bounty({ params }: any) {

    const { account } = useWallet()
    const [bounty, setBounty] = useState<any>([])
    const [isSubmitted, setIsSubmitted] = useState<Boolean>(false)
    const router = useRouter()
    const btnRef = useRef(null)
    const { bountyId } = params
    const { toast } = useToast()

    const [formData, setFormData] = useState<any>({
        title: '',
        submissionLink: '',
        twitterLink: '',
        anythingElse: ''
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (account === null) {
            toast({
                title: 'Wallet connection required.',
                description: "You need to connect aptos wallet",
                variant:"default"
            })
            return
        }

        try {
            formData.walletAddress = account?.address
            const response = await fetch(`https://gigster-backend-ztso.onrender.com/api/create_bounty_submission/${bountyId}/${account?.address}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {

                toast({
                    title: 'You have submiite project!'
                })
                router.push('/dashboard')
            } else {
                alert('Failed to create sponsor profile');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form');
        }
    };

    const fetchBounty = async () => {

        if (account === null) router.push('/')

        try {
            const response = await fetch(`https://gigster-backend-ztso.onrender.com/api/get_bounty_by_id/${bountyId}`);
            if (response.ok) {
                const data: any = await response.json()
                setBounty(data)
            } else {
                alert('Failed to create sponsor profile');
            }

            const response2 = await fetch(`https://gigster-backend-ztso.onrender.com/api/checkBountySubmitted/${bountyId}/${account?.address}`);
            if (response2.ok) {
                const data: any = await response2.json()
                console.log("is submitted", data?.isSubmitted);

                setIsSubmitted(data?.isSubmitted)
            } else {
                alert('Failed to create sponsor profile');
            }

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        fetchBounty()
    }, [bountyId, account])

    return (
        <>
            <div className="flex mt-24 justify-start items-center flex-col w-screen min-h-screen">
                <div className="w-[80%]">
                    <div className="w-full flex justify-start items-start flex-row p-4 rounded-lg shadow-md m-1">
                        <Image src={"https://tse1.mm.bing.net/th?id=OIP.bHrShAEKhWrUzdP3v8a5CQHaHb&pid=Api&P=0&h=180"} className="rounded-full" width={50} height={50} alt="" />
                        <div className="flex justify-center items-start flex-col ml-4">
                            <h1 className="text-slate-800 font-bold text-lg">{bounty?.title}</h1>
                            <div className="flex mt-1 ml-4 text-base text-gray-600 font-light">
                                <div className="flex -ml-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24"><path fill="#4b5563" d="M12 11q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11m-3.615 9v-1H11.5v-3.754q-1.321-.236-2.312-1.105T7.823 11.99q-1.586-.187-2.705-1.301T4 8V7q0-.402.299-.701T5 6h2.654V4h8.692v2H19q.402 0 .701.299T20 7v1q0 1.573-1.118 2.688t-2.705 1.3q-.373 1.285-1.364 2.153T12.5 15.246V19h3.115v1zm-.731-9.084V7H5v1q0 1.142.762 1.963t1.892.953M12 14.269q1.385 0 2.346-.961q.962-.962.962-2.347V5H8.692v5.962q0 1.384.962 2.346q.961.961 2.346.961m4.346-3.354q1.131-.132 1.892-.952T19 8V7h-2.654zM12 9.636" /></svg>
                                    <span className="ml-1">{bounty?.category}</span>
                                </div>
                                <div className="ml-2">|</div>
                                <div className="flex ml-2 mt-[2px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#4b5563" d="M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 7h1v5.42l4.7 2.71l-.5.87l-5.2-3z" /></svg>
                                    <span className="ml-1">Submissions open</span>
                                </div>
                                <div className="ml-2">|</div>
                                <div className="flex ml-3 mt-[2px] justify-start items-center">
                                    <div className="bg-green-500 w-2 h-2 rounded-full pulse-green"></div>
                                    <span className="ml-2">Live</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end flex-row items-center flex-grow ">
                            <Image src={"https://tse1.mm.bing.net/th?id=OIP.bHrShAEKhWrUzdP3v8a5CQHaHb&pid=Api&P=0&h=180"} className="rounded-full" width={20} height={20} alt="" />
                            <span className="text-lg text-slate-800 ml-4 mr-2">{bounty?.budget}</span>
                            <span className="text-slate-400 text-base"> APT</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-start flex-row mt-2">
                        <div className="w-[30%]">
                            <p className="p-4 text-slate-500 border-[1px] border-transparent border-b-slate-300">Prizes</p>
                            <div className="w-full p-2 border-[1px] border-transparent border-r-slate-300">
                                <div className="flex justify-start items-center gap-2 p-2">
                                    <Image src={"https://tse1.mm.bing.net/th?id=OIP.bHrShAEKhWrUzdP3v8a5CQHaHb&pid=Api&P=0&h=180"} className="rounded-full" width={30} height={30} alt="" />
                                    <div>
                                        <span className="text-lg font-bold text-slate-800">{bounty.budget}</span>
                                        <span className="ml-2">APT</span>
                                        <span className="text-slate-500 ml-4">Total Prizes</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start flex-row mt-4">
                                    <div className="flex justify-start p-4 items-ceenter flex-col w-[49%] bg-[#f3f6fd] rounded-lg">
                                        <span className="text-sm text-slate-600">Total Submissions</span>
                                        <span className="text-slate-800 text-sm font-bold text-center mt-1">61</span>
                                    </div>
                                    <div className="flex justify-start p-4 items-center flex-col w-[49%] bg-[#f3f6fd] rounded-lg">
                                        <span className="text-sm text-slate-600">Deadline</span>
                                        <span className="text-slate-800 text-sm font-bold text-center mt-1">{formatDateToDDMMYYYYHM(bounty?.endAt)}</span>
                                    </div>
                                </div>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" style={{ width: "100%", padding: '4px', marginTop:"10px" }}>
                                            {isSubmitted ? <button disabled className="w-full bg-slate-600 text-white p-2 rounded-lg">Submitted</button> : <button className="w-full bg-slate-800 text-white p-2 rounded-lg" ref={btnRef}>Submit Now</button>}
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Bounty Submission</DialogTitle>
                                            <DialogDescription>

                                            </DialogDescription>
                                        </DialogHeader>
                                        <div>
                                            <div className="flex flex-col w-full mr-2 mt-4">
                                                <label className="text-base text-slate-700 mb-2 ml-1">Your Gig Title <span className="text-red-500">*</span></label>
                                                <input placeholder='Your Gig Title' name="title" value={formData.title} onChange={handleChange} type="text" className="text-[14px] w-full p-[6px] rounded-lg transition-all border-[2px] border-slate-300 outline-none focus:border-sky-500 focus:border-[3px]" required />
                                            </div>
                                            <div className="flex flex-col w-full mr-2 mt-4">
                                                <label className="text-base text-slate-700 ml-1">Link To Your Submission <span className="text-red-500">*</span></label>
                                                <span className="text-slate-400 text-sm ml-1">Make sure this link is accessible by everyone!</span>
                                                <input placeholder='Link to your submission' name="submissionLink" value={formData.submissionLink} onChange={handleChange} type="text" className="text-[14px] w-full p-[6px] rounded-lg transition-all border-[2px] border-slate-300 outline-none focus:border-sky-500 focus:border-[3px]" required />
                                            </div>
                                            <div className="flex flex-col w-full mr-2 mt-4">
                                                <label className="text-base text-slate-700 ml-1">Tweet Link <span className="text-red-500">*</span></label>
                                                <span className="text-slate-400 text-sm ml-1">This helps sponsors discover (and maybe repost) your work on Twitter! If this submission is for a Twitter thread bounty, you can ignore this field.</span>
                                                <input placeholder='Add a tweet link' name="twitterLink" value={formData.twitterLink} onChange={handleChange} type="text" className="text-[14px] w-full p-[6px] rounded-lg transition-all border-[2px] border-slate-300 outline-none focus:border-sky-500 focus:border-[3px]" required />
                                            </div>
                                            <div className="flex flex-col w-full mr-2 mt-4">
                                                <label className="text-base text-slate-700 ml-1">Anything Else? <span className="text-red-500">*</span></label>
                                                <span className="text-slate-400 text-sm ml-1">If you have any other links or information you would like to share with us, please add them here!</span>
                                                <input placeholder='Add info or link' name="anythingElse" value={formData.anythingElse} onChange={handleChange} type="text" className="text-[14px] w-full p-[6px] rounded-lg transition-all border-[2px] border-slate-300 outline-none focus:border-sky-500 focus:border-[3px]" required />
                                            </div>

                                        </div>
                                        <DialogFooter>
                                            <Button type="submit" onClick={handleSubmit}>Submit</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                            </div>
                        </div>
                        <div className="w-[70%] flex justify-start items-start flex-col">
                            <p className="p-4 text-slate-500 border-[1px] border-transparent border-b-slate-300 w-full">Details</p>
                            <div className="flex justify-center items-start flex-col w-full p-6">
                                <p className="font-bold text-xl text-slate-700">About Gig</p>
                                <p className="mt-4 mb-6 text-slate-500">{bounty?.about}</p>
                                <p className="font-bold text-xl text-slate-700">Developer Instuctions</p>
                                <p className="mt-4 mb-6 text-slate-500">{bounty?.devInstructions}</p>
                                <p className="font-bold text-xl text-slate-700">Judging Criteria</p>
                                <p className="mt-4 mb-6 text-slate-500">{bounty?.judgingCriteria}</p>
                                <p className="font-bold text-xl text-slate-700">Rewards</p>
                                <p className="mt-4 mb-6 text-slate-500">{bounty?.rewardDistribution}</p>
                                <p className="font-bold text-xl text-slate-700">Submission Requirements</p>
                                <p className="mt-4 mb-6 text-slate-500">{bounty?.submissionRequirement}</p>
                                <p className="font-bold text-xl text-slate-700">Resources</p>
                                <p className="mt-4 mb-6 text-slate-500">{bounty?.resources}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}