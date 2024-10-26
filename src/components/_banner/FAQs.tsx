"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function FAQs() {
    return (
        <div id='faqs' className='w-screen h-screen flex justify-center items-center flex-col mt-24'>
            <h1 className='text-3xl text-slate-800 text-center '>FAQs</h1>
            <div className='w-[60%] h-full mt-16'>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is UniPay?</AccordionTrigger>
                    <AccordionContent>
                    UniPay is a cross-chain bounty platform that lets users claim rewards on their preferred blockchain with no gas fees, simplifying reward payouts for organizers and recipients alike..
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How does UniPay enable gas-free bounty claims across blockchains?</AccordionTrigger>
                    <AccordionContent>
                    UniPay uses advanced cross-chain protocols, allowing users to securely claim rewards on any supported network without incurring gas fees.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Which blockchains does UniPay support for reward transfers?</AccordionTrigger>
                    <AccordionContent>
                        We leverage the Aptos blockchain for faster, more secure transactions. Our platform also includes built-in task verification and transparent reward distribution, ensuring efficiency and trust for both project owners and freelancers.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Is UniPay secure for cross-chain transactions?</AccordionTrigger>
                    <AccordionContent>
                    Yes, UniPay employs secure technologies like IBC (Inter-Blockchain Communication) to protect cross-chain transactions.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Can event organizers integrate UniPay directly into their platforms?</AccordionTrigger>
                    <AccordionContent>
                    Yes, organizers can utilize UniPay’s SDK for seamless cross-chain bounty distribution within their platforms.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    )
}