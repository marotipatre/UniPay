import React from 'react';
import Image from 'next/image';

interface HackathonCardProps {
    title: string;
    organizer: string;
    date: string;
    imageUrl: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ title, organizer, date, imageUrl }) => {
    return (
        <div className="w-[400px] rounded-xl bg-slate-100 h-auto p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
            <div className="relative w-full h-48 overflow-hidden rounded-lg">
                <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="mt-4">
                <h1 className="text-slate-800 text-xl font-semibold">{title}</h1>
                <h2 className="text-slate-600 text-base my-2">by - {organizer}</h2>
                <p className="text-slate-600 text-sm">{date}</p>
            </div>
        </div>
    );
};

export default HackathonCard;