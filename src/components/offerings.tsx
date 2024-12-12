import Image from 'next/image'
import Link from 'next/link'

const offerings = [
  {
    miniText: 'Contract Templates',
    title: "Contracts That Safeguard Your Businesses",
    description: "The platform will offer a library of customizable contract templates covering common use cases like business registration, contracts etc.",
    image: "/placeholder.svg?height=300&width=300",
    action: "Start Now",
    href: "#",
    isReverse: false
  },
  {
    miniText: 'Talk to a lawyer Integration',
    title: "Talk To A Lawyer To Settle Business Disputes",
    description: "The platform will provide users with the ability to speak to a lawyer and have contract disputes resolved at a minimal fee.",
    image: "/placeholder.svg?height=300&width=300",
    action: "Start Now",
    href: "#",
    isReverse: true
  },
  {
    miniText: 'e-Signature Integration',
    title: "Easily sign your contracts.",
    description: "Users (contract initiator and contract signee) will be able to sign using a fingerprint, face id, and an uploaded signature. Making the signing process easy.",
    image: "/placeholder.svg?height=300&width=300",
    action: "Start Now",
    href: "#",
    isReverse: false
  },
]

export default function Offerings() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-3xl text-center md:text-left text-[#101720] text-[500] mb-12">
          What we offer?
        </h2>
        
        <div className="">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`p-8 flex flex-col ${offering.isReverse === true ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
                <div className="flex-1 space-y-4">
                  <h5 className="text-md md:text-lg font-[500] text-[#838785] uppercase">
                    {offering.miniText}
                  </h5>
                  <h3 className="text-xl md:text-3xl text-[#101720] text-[500] mb-6">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600">
                    {offering.description}
                  </p>
                  <Link
                    href={offering.href}
                    className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
                  >
                    {offering.action}
                  </Link>
                </div>
                <div className="w-full md:w-1/3 relative">
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

