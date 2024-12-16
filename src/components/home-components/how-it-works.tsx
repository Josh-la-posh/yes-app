const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Sign up to gain access to our features.",
    color: 'text-[#101720]',
    background: 'bg-[#E7EBE7]'
  },
  {
    number: "2",
    title: "Create contract",
    description: "Choose from our different contract types and customize it.",
    color: 'text-[#101720]',
    background: 'bg-[#CACBCA]'
  },
  {
    number: "3",
    title: "Sent to Client",
    description: "The link to the contract and send to your client.",
    color: 'text-[#000301]',
    background: 'bg-[#A8ABA9]'
  },
  {
    number: "4",
    title: "Client signs",
    description: "Click the link, sees contract and signs",
    color: 'text-[#E7EBE7]',
    background: 'bg-[#4C4E4D]'
  },
  {
    number: "5",
    title: "Both get Signed copy",
    description: "Both parties get signed copy of agreement",
    color: 'text-[#E7EBE7]',
    background: 'bg-[#000D07]'
  },
]

export default function HowItWorks() {
  return (
    <section className="">
      <div className="max-w-7xl">
        <h2 className="text-xl md:text-3xl text-center md:text-left text-[#101720] text-[500] mb-12">How it works</h2>
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[18%] left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2" />
          
          <div className="relative flex flex-col items-center md:grid md:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center md:items-start relative">
                {/* Number circle */}
                <div className={`w-12 h-12 rounded-full ${step.background} ${step.color} flex items-center justify-center text-xl font-semibold mb-4 relative z-10`}>
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-[20px] text-[#000D07] font-[500] mb-2">{step.title}</h3>
                <p className="text-sm text-[#4C4E4E] text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

