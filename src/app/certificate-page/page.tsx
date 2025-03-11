'use client';
import React from 'react';
import { User, GraduationCap } from 'lucide-react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import Certificate from '@/components/Certificate';

const CertificateOfCompletion: React.FC = () => {
    const certificateRef = useRef<HTMLDivElement>(null);

    const downloadCertificate = async () => {
        if (certificateRef.current) {
            try {
                console.log('hi');
                const canvas = await html2canvas(certificateRef.current, {
                    scale: 2, // Increases resolution
                    useCORS: true,
                    allowTaint: true
                });

                const link = document.createElement('a');
                link.download = 'Flutter_Beginners_Certificate.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            } catch (error) {
                console.log('Error downloading certificate:', error);
                alert('Failed to download certificate. Please try again.');
            }
        }
    };
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

            <Certificate certificateRef={certificateRef}/>

            <button
                onClick={downloadCertificate}
                className="mt-6 px-6 py-3 bg-[#155dfc] text-white rounded-lg hover:bg-[#1447e6] transition-colors cursor-pointer"
            >
                Download Certificate
            </button>
        </div>
    );
};

export default CertificateOfCompletion;