import Image from "next/image"

export default function TrustedBy() {
    const avatars = [
      "/trusted_avatar_1.svg",
      "/trusted_avatar_2.svg",
      "/trusted_avatar_3.svg",
      "/trusted_avatar_4.svg",
      "/trusted_avatar_5.svg",
      "/trusted_avatar_6.svg",
      "/trusted_avatar_7.svg",
      "/trusted_avatar_8.svg",
      "/trusted_avatar_9.svg",
      "/trusted_avatar_10.svg",
    ]
  
    return (
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg md:text-2xl sm:text-4xl font-[500] text-[#626865] mb-2 md:mb-4">
              Trusted by 10k+
            </h2>
            <h3 className="text-xl md:text-3xl text-center text-[#101720] text-[500] mb-2 md:mb-4">
              SMEs
            </h3>
            <p className="max-w-2xl mx-auto text-md md:text-lg text-[#5D615F] mb-8 md:mb-12">
              Everyday you and I engage in activities that need to be backed by legal agreements
              and contracts. In the absence of this, there are bound to be arguments,
              disagreements, accusations, legal <br /> troubles, court cases, all because there was no legal documentation. We have
              created this web app for you to quickly create any type of contract within 3
              minutes for any type of business transaction.
            </p>
            
            <div className="grid grid-cols-5 gap-14 max-w-3xl mx-auto mb-8 md:mb-12">
              {avatars.slice(0, 5).map((avatar, index) => (
                <div
                  key={`avatar-top-${index}`}
                  className="w-20 md:w-24 h-20 md:h-24 rounded-full overflow-hidden flex items-center justify-center"
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
                  <Image
                    src={avatar}
                    alt={`Trusted user ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-5 gap-14 max-w-3xl mx-auto">
              {avatars.slice(5).map((avatar, index) => (
                <div
                  key={`avatar-bottom-${index}`}
                  className="w-20 md:w-24 h-20 md:h-24 rounded-full overflow-hidden flex items-center justify-center"
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
                  <Image
                    src={avatar}
                    alt={`Trusted user ${index + 6}`}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  