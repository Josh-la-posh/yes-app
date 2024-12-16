import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What is The Yes App?",
      answer: "The Yes App is a platform that helps you create and manage legal documents and contracts efficiently."
    },
    {
      question: "How does The Yes App work?",
      answer: "The Yes App allows you to create legal documents using templates, customize them according to your needs, and share them with other parties for signing."
    },
    {
      question: "Who can use The Yes App?",
      answer: "Anyone who needs to create, manage, or sign legal documents can use The Yes App, including individuals, businesses, and organizations."
    },
    {
      question: "What features does The Yes App offer?",
      answer: "The Yes App offers document creation, template customization, digital signatures, document sharing, and collaboration features."
    },
    {
      question: "Can multiple people collaborate on a single document?",
      answer: "Yes, multiple users can collaborate on a single document, making it easy to review, edit, and sign documents together."
    },
    {
      question: "Is The Yes App only for Nigerians?",
      answer: "While The Yes App is designed with Nigerian legal requirements in mind, it can be used by anyone who needs to create legal documents."
    }
  ]
  
  export default function FAQ() {
    return (
      <section className="">
        <div className="px-4 sm:px-6 lg:px-8 text-[#101720]">
            <h2 className="text-xl md:text-3xl text-center md:text-left text-[500] mb-12">
                Frequently Asked Questions (FAQs)
            </h2>

            <div className="md:flex mb-12">
                <div className="mb-8 flex-1">
                    <h3 className="text-md md:text-xl text-left text-[500]">General</h3>
                    <p className="text-[#5D6265] text-sm">
                        To Know a general overview of what YES app does
                    </p>
                </div>

                <Accordion type="single" collapsible className="flex-1">
                    {faqs.map((faq, index) => (
                    <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="border-b px-4"
                    >
                        <AccordionTrigger className="text-left hover:no-underline">
                            <span className="text-base font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <div className="md:flex mb-12">
                <div className="mb-8 flex-1">
                    <h3 className="text-md md:text-xl text-left text-[500]">Payment</h3>
                    <p className="text-[#5D6265] text-sm">
                        To Know about the payment side of the Yes app.
                    </p>
                </div>

                <Accordion type="single" collapsible className="flex-1">
                    {faqs.map((faq, index) => (
                    <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="border-b px-4"
                    >
                        <AccordionTrigger className="text-left hover:no-underline">
                            <span className="text-base font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-[#5D6265] text-sm">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <div className="md:flex">
                <div className="mb-8 flex-1">
                    <h3 className="text-md md:text-xl text-left text-[500]">Security</h3>
                    <p className="text-[#5D6265] text-sm">
                    To Know about the payment side of the Yes app.
                    </p>
                </div>

                <Accordion type="single" collapsible className="flex-1">
                    {faqs.map((faq, index) => (
                    <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="border-b px-4"
                    >
                        <AccordionTrigger className="text-left hover:no-underline">
                            <span className="text-base font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
          
        </div>
      </section>
    )
  }
  
  