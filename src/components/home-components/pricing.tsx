import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SignupCredits from './sign-up-credit'

const documents = [
  { name: "Receipts", credits: "2 YC", naira: "N 200" },
  { name: "Invoice", credits: "2 YC", naira: "N 200" },
  { name: "Sexual consent", credits: "20 YC", naira: "N 2000" },
  { name: "Quotation", credits: "5 YC", naira: "N 500" },
  { name: "I Agree", credits: "15 YC", naira: "N 1,500" },
  { name: "Rental", credits: "25 YC", naira: "N 2,500" },
  { name: "Confidentiality", credits: "45 YC", naira: "N 4,500" },
  { name: "Affidavits", credits: "45 YC", naira: "N 4,500" },
  { name: "Tenancy", credits: "55 YC", naira: "N 5,500" },
]

export default function PricingStructure() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
        <h2 className="text-xl md:text-3xl text-center md:text-left text-[#101720] text-[500] mb-12">PRICING STRUCTURE</h2>
        
        {/* Credit Value Information */}
        <div className="md:flex justify-between items-center gap-8 mb-8 space-y-6">
          <div className='flex-1'>
            <h3 className="text-sm md:text-base font-medium text-[#070F0B] mb-2">Credit Value</h3>
            <p className="text-lg md:text-2xl text-[#4E5563]">N100 = 1 YES Credit (1YC)</p>
          </div>
          <div className='flex-1'>
            <h3 className="text-sm md:text-base font-medium text-[#070F0B] mb-2">Credit Purchase</h3>
            <p className="text-lg md:text-2xl text-[#4E5563]">Minimum Purchase: N3,000 (equivalent to 30 YES Credits).</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">

            {/* Document Creation Table */}
            <div className="overflow-x-auto rounded-t-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#263238] text-[#F2F3F3] text-sm">
                    <th className="text-left p-4">Document Creation</th>
                    <th className="text-left p-4">Yes Credit (YC)</th>
                    <th className="text-left p-4">Naira Equivalent (N)</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, index) => (
                    <tr 
                      key={doc.name}
                      className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                    >
                      <td className="p-4 flex items-center text-[#4E5563]">
                        <div className="h-3 w-3 rounded-full bg-[#34A853] flex items-center justify-center mr-2">
                          <Check className="h-2 w-2 text-white" />
                        </div>
                        {doc.name}
                      </td>
                      <td className="p-4 text-[#070F0B]">{doc.credits}</td>
                      <td className="p-4 text-[#070F0B]">{doc.naira}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Premium Card */}
          <div className="h-h-full flex justify-center">
            <Card className="bg-[#00AC47] h-full w-1/2 md:w-full pt-3">
              <div className="bg-white h-full rounded-t-lg flex flex-col py-3">
                <CardHeader className="text-center pb-4">
                  <h6 className="text-xl md:text-2xl text-center text-[#101720] text-[400] mb-8 md:mb-12">PREMIUM</h6>
                </CardHeader>
                <CardContent className="h-[calc(100% - 100px)] flex-grow flex flex-col justify-between items-center">
                  <div className="mb-12 md:mb-[unset]">
                    <div className="text-center">
                      <div className="text-4xl font-medium text-[#00AC47]">N20,000</div>
                      <div className="text-sm text-[#74777D] mt-1">per month</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="h-12 w-12 rounded-full bg-[#34A853] flex items-center justify-center">
                        <Check className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-xs md:text-sm">
                        Premium benefits: Users can create unlimited contracts without using credits.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <Button className="md:w-[242px]">
                        Sign up
                      </Button>
                    </div>
                  </div>
                  
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <SignupCredits />
    </section>
  )
}

