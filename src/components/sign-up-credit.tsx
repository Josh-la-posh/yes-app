import { Zap } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SignupCredits() {
  return (
    <Card className="max-w-3xl mx-auto flex flex-col items-center text-[#070F0B]">
      <CardHeader className="text-center">
        <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
        <h2 className="text-2xl font-medium">
          Free Signup Credits:
        </h2>
      </CardHeader>
      <CardContent className="max-w-[609px] text-center space-y-3 pb-8">
        <p className="">
          Users receive 20 YES Credits (N2,000) upon signup, allowing them to
          explore the app without initial investment.
        </p>
        <Button 
          variant="secondary" 
          className="px-8 py-2 text-base bg-[#F2F3F3]"
        //   onClick={() => console.log('I am working')}
        >
          Sign up for free
        </Button>
      </CardContent>
    </Card>
  )
}