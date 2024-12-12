import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">PRICING STRUCTURE</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* Credit Value Information */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Credit Value</h3>
                <p className="text-lg">N100 = 1 YES Credit (1YC)</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Credit Purchase</h3>
                <p className="text-lg">Minimum Purchase: N3,000 (equivalent to 30 YES Credits).</p>
              </div>
            </div>

            {/* Document Creation Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
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
                      <td className="p-4 flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {doc.name}
                      </td>
                      <td className="p-4">{doc.credits}</td>
                      <td className="p-4">{doc.naira}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Premium Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">PREMIUM</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500">N 20,000</div>
                <div className="text-sm text-gray-500 mt-1">per month</div>
              </div>
              
              <div className="flex justify-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm">
                  Premium benefits: Users can create unlimited contracts without using credits.
                </p>
              </div>
              
              <Button className="w-full bg-black hover:bg-gray-800 text-white">
                Sign up
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

