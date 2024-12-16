import Image from 'next/image'
import Link from 'next/link'

const offerings = [
  {
    miniText: 'Contract Templates',
    title: "Contracts That Safeguard Your Businesses",
    description: "The platform will offer a library of customizable contract templates covering common use cases like business registration, contracts etc.",
    image: "/offer_img_1.svg",
    action: "Start Now",
    href: "#",
    isReverse: false
  },
  {
    miniText: 'Talk to a lawyer Integration',
    title: "Talk To A Lawyer To Settle Business Disputes",
    description: "The platform will provide users with the ability to speak to a lawyer and have contract disputes resolved at a minimal fee.",
    image: "/offer_img_2.svg",
    action: "Start Now",
    href: "#",
    isReverse: true
  },
  {
    miniText: 'e-Signature Integration',
    title: "Easily sign your contracts.",
    description: "Users (contract initiator and contract signee) will be able to sign using a fingerprint, face id, and an uploaded signature. Making the signing process easy.",
    image: "/offer_img_3.svg",
    action: "Start Now",
    href: "#",
    isReverse: false
  },
]

export default function Offerings() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-3xl text-center md:text-left text-[#101720] text-[500]">
          What we offer?
        </h2>
        
        <div className="">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="overflow-hidden"
            >
              <div className={`md:flex ${offering.isReverse === true ? 'flex-row-reverse' : 'flex-row'} items-center gap-24 mt-16`}>
                <div className="max-w-lg flex-1 mb-10 md:mb-[unset]">
                  <h5 className="text-sm md:text-lg font-[500] text-[#838785] uppercase">
                    {offering.miniText}
                  </h5>
                  <h3 className="text-2xl md:text-4xl text-[#101720] text-[500] my-2 md:my-4">
                    {offering.title}
                  </h3>
                  <p className="text-md md:text-xl text-gray-600 mb-8">
                    {offering.description}
                  </p>
                  <Link
                    href={offering.href}
                    className="text-xs inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
                  >
                    {offering.action}
                  </Link>
                </div>
                <div className="w-full md:w-[500px] h-[300px] md:h-[500px] flex-1 flex justify-center mt-10 md:mt-[unset]">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

