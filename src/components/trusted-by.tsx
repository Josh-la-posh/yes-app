export default function TrustedBy() {
    const avatars = [
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
    ]
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg md:text-2xl sm:text-4xl font-[500] text-[#626865] mb-4">
              Trusted by 10k+
            </h2>
            <h3 className="text-xl md:text-3xl text-center text-[#101720] text-[500] mb-6">
              SMEs
            </h3>
            <p className="max-w-3xl mx-auto text-lg text-[#5D615F] mb-12">
              Everyday you and I engage in activities that need to be backed by legal agreements
              and contracts. In the absence of this, there are bound to be arguments,
              disagreements, accusations, legal troubles, court cases, all because there was no legal documentation. We have
              created this web app for you to quickly create any type of contract within 3
              minutes for any type of business transaction.
            </p>
            
            <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto">
              {avatars.slice(0, 5).map((avatar, index) => (
                <div
                  key={`avatar-top-${index}`}
                  className="w-20 h-20 mx-auto rounded-full overflow-hidden"
                  style={{
                    backgroundColor: [
                      'rgb(230, 230, 250)', // Lavender
                      'rgb(255, 218, 224)', // Pink
                      'rgb(200, 240, 200)', // Mint
                      'rgb(255, 222, 173)', // Peach
                      'rgb(255, 228, 196)', // Bisque
                    ][index],
                  }}
                >
                  <img
                    src={avatar}
                    alt={`Trusted user ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto mt-4">
              {avatars.slice(5).map((avatar, index) => (
                <div
                  key={`avatar-bottom-${index}`}
                  className="w-20 h-20 mx-auto rounded-full overflow-hidden"
                  style={{
                    backgroundColor: [
                      'rgb(200, 240, 200)', // Mint
                      'rgb(200, 240, 200)', // Mint
                      'rgb(255, 222, 173)', // Peach
                      'rgb(255, 222, 173)', // Peach
                      'rgb(255, 218, 224)', // Pink
                    ][index],
                  }}
                >
                  <img
                    src={avatar}
                    alt={`Trusted user ${index + 6}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  