import React from 'react';
import { 
    HiOutlineMail, 
    HiOutlinePhone, 
    HiOutlineDownload, 
    HiOutlineCalendar, 
    HiOutlineBadgeCheck 
} from 'react-icons/hi';

const ApplicationCard = ({ application, index }) => {
    const { fullName, email, phoneNumber, status, createdAt, resumeOrPortfolioUrl, coverLetter } = application;

    // Colorful Status Logic
    const statusConfig = {
        pending: "bg-warning/20 text-warning border-warning/50",
        accepted: "bg-success/20 text-success border-success/50",
        rejected: "bg-error/20 text-error border-error/50",
    };

    const dateFormatted = new Date(createdAt.$date).toLocaleDateString();

    return (
        <div className="group relative bg-base-100 border border-base-300 rounded-2xl p-6 transition-all duration-300 hover:border-primary hover:shadow-xl flex flex-col lg:flex-row items-start lg:items-center gap-6">
            
            {/* Index Number - Styled Circle */}
            <div className="flex-none">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-base-content">{fullName}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusConfig[status] || 'bg-gray-100'}`}>
                        {status.toUpperCase()}
                    </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
                    <span className="flex items-center gap-1">
                        <HiOutlineMail className="text-primary" /> {email}
                    </span>
                    <span className="flex items-center gap-1">
                        <HiOutlinePhone className="text-primary" /> {phoneNumber}
                    </span>
                    <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-primary" /> {dateFormatted}
                    </span>
                </div>

                <p className="text-sm text-base-content/60 mt-2 italic line-clamp-2 max-w-2xl">
                    "{coverLetter}"
                </p>
            </div>

            {/* Action Section */}
            <div className="flex-none w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-base-200">
                <a 
                    href={resumeOrPortfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-outline btn-block lg:btn-md gap-2 rounded-xl group-hover:bg-primary group-hover:text-white"
                >
                    <HiOutlineDownload className="text-lg" />
                    Download CV
                </a>
            </div>
            
            {/* Subtle decorative background icon */}
            <HiOutlineBadgeCheck className="absolute right-4 bottom-4 text-6xl opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity" />
        </div>
    );
};

export default ApplicationCard;