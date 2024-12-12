const Newsletter = () => {
    return (
      <section className="bg-indigo-600 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-indigo-200 mb-8">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-md hover:bg-indigo-50 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
  
  export default Newsletter  