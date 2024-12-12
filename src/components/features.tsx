import { CheckCircle, Clock, Shield } from 'lucide-react'

const features = [
  {
    name: 'Easy to Use',
    description: 'Our intuitive interface makes it simple for anyone to get started.',
    icon: CheckCircle,
  },
  {
    name: 'Time-Saving',
    description: 'Automate your workflow and save hours every week.',
    icon: Clock,
  },
  {
    name: 'Secure',
    description: 'Your data is protected with industry-leading security measures.',
    icon: Shield,
  },
]

const Features = () => {
  return (
    <section id="features" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover what makes our product stand out.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

