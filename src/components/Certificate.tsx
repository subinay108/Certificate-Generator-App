'use client';

interface CertificateProps {
    certificateRef: React.RefObject<HTMLDivElement | null>;
}



const Certificate: React.FC<CertificateProps> = ({ certificateRef }) => {
    return (
        <div ref={certificateRef} className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-8 relative border-4 border-[#2b7fff]">
            {/* Corner decorative elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-8 border-t-8 border-[#00c951]"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-[#ad46ff]"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-[#2b7fff]"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-[#00bba7]"></div>

            {/* Great Learning Logo */}
            <div className="flex justify-center mb-6">
                <svg width="280" height="50" viewBox="0 0 280 50" className="fill-current text-[#155dfc]">
                    <path d="M20.1 10h-10v30h10V10zm20 0h-10v30h10V10zm20 0h-10v30h10V10zm20 0h-10v30h10V10z" />
                    <text x="85" y="35" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">
                        ABC Academy
                    </text>
                </svg>
            </div>

            {/* Certificate Title */}
            <h1 className="text-center text-3xl font-bold text-[#1e2939] mb-6">
                CERTIFICATE OF COMPLETION
            </h1>

            {/* Recipient Details */}
            <div className="text-center mb-6">
                <p className="text-2xl font-semibold text-[#1447e6]">
                    Presented to
                </p>
                <h2 contentEditable={'plaintext-only'} suppressContentEditableWarning={true} className="text-4xl font-bold text-[#101828] mt-2">
                    NANDANA S BINOY
                </h2>
            </div>

            {/* Course Details */}
            <div className="text-center mb-8">
                <p className="text-xl text-[#364153]">
                    For successfully completing a free online course
                </p>
                <p contentEditable='plaintext-only' suppressContentEditableWarning={true} className="text-2xl font-semibold text-[#008236] mt-2">
                    Flutter for Beginners
                </p>
            </div>

            {/* Provider and Date */}
            <div className="text-center">
                <p className="text-lg text-[#4a5565]">
                    Provided by &nbsp;
                    <span 
                        contentEditable='plaintext-only' 
                        suppressContentEditableWarning={true} 
                    >
                        ABC Learning Academy
                    </span>
                </p>
                <p className="text-md text-[#6a7282] mt-1">
                    (On June 2024)
                </p>
            </div>

            {/* Verification */}
            <div className="mt-8 text-center text-sm text-[#6a7282]">
                To verify this certificate visit: myabc.com/HCkWGTG
            </div>
        </div>
    )
}

export default Certificate;