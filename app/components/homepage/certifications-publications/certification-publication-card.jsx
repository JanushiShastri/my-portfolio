// certification-publication-card.jsx

import Image from 'next/image';
import Link from 'next/link';

function CertificationPublicationCard({ item }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={item.image}
          height={1080}
          width={1920}
          alt={item.title}
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{item.date}</p>
        </div>
        <Link target='_blank' href={item.link}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {item.title}
          </p>
        </Link>
        {item.institution && (
          <p className='text-sm text-[#16f2b3]'>{item.institution}</p>
        )}
        {item.journal && (
          <p className='text-sm text-[#16f2b3]'>{item.journal}</p>
        )}
        {item.description && (
          <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default CertificationPublicationCard;
