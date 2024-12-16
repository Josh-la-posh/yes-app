import Image from 'next/image';

export default function ContractBanner() {
  return (
    <div className="h-[596px] relative flex items-end">
        <div className="h-[425px] max-w-[75%] mx-auto absolute top-0 right-0 left-0">
            <div className="h-full bg-[#5E17EB] rounded-lg p-8 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Left side with illustration */}
                <div className="mb-6 md:mb-0 md:mr-8 absolute bottom-[-30px] md:bottom-[-10px] left-0">
                    <Image
                    src="/banner_img.svg"
                    alt="Person pointing at a contract"
                    width={150}
                    height={150}
                    className="w-32 h-32 md:w-40 md:h-40"
                    />
                </div>

                {/* Center content */}
                <h2 className="max-w-[487px] text-center text-3xl md:text-5xl font-bold text-white mb-8">
                    Say Yes to a contract agreement and avoid losses.
                </h2>
                <button className='bg-white text-[#070F0B] px-10 py-3 rounded-lg'>
                    Sign Up today
                </button>

                {/* Right side with avatars */}
                {/* <div className="hidden md:block absolute top-4 right-4">
                    <div className="flex space-x-2">
                    {[1, 2, 3].map((i) => (
                        <Image
                        key={i}
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={`User avatar ${i}`}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-white"
                        />
                    ))}
                    </div>
                </div> */}

                
                <div className="hidden md:block h-16 w-16 absolute top-[-10px] right-32">
                    <Image
                        src='/trusted_avatar_4.svg'
                        alt='User'
                        width={400}
                        height={500}
                    />
                </div>
                <div className="hidden md:block h-16 w-16 absolute top-8 right-8">
                    <Image
                        src='/trusted_avatar_5.svg'
                        alt='User'
                        width={400}
                        height={500}
                    />
                </div>
                <div className="hidden md:block h-16 w-16 absolute top-32 right-0">
                    <Image
                        src='/trusted_avatar_10.svg'
                        alt='User'
                        width={400}
                        height={500}
                    />
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-500 rounded-tl-full"></div>
            </div>
        </div>
        <div className="h-[465px] w-full bg-black p-4">
        </div>
    </div>
  )
}

