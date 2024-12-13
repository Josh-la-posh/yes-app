import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function ContractBanner() {
  return (
    <div className="h-[596px] relative flex items-end">
        <div className="h-[395px] max-w-[75%] mx-auto absolute top-0 right-0 left-0">
            <div className="h-full bg-[#5E17EB] rounded-lg p-8 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Left side with illustration */}
                <div className="mb-6 md:mb-0 md:mr-8 absolute bottom-0 left-0">
                    <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Person pointing at a contract"
                    width={150}
                    height={150}
                    className="w-32 h-32 md:w-40 md:h-40"
                    />
                </div>

                {/* Center content */}
                <h2 className="max-w-[487px] text-center text-2xl md:text-5xl font-bold text-white mb-4">
                    Say Yes to a contract agreement and avoid losses.
                </h2>
                <Button variant="secondary" size="lg">
                    Sign Up today
                </Button>

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

                
                <div className="hidden md:block h-16 w-16 rounded-full bg-[#F4CE9B] absolute top-[-10px] right-32">
                </div>
                <div className="hidden md:block h-16 w-16 rounded-full bg-black absolute top-8 right-8">
                </div>
                <div className="hidden md:block h-16 w-16 rounded-full bg-yellow-400 absolute top-32 right-0">
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-500 rounded-tl-full"></div>
            </div>
        </div>
        <div className="h-[412px] w-full bg-black p-4">
        </div>
    </div>
  )
}

