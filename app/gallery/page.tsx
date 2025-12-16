export default function Gallery() {
  return (
    <>
      <div className="px-6 py-20 bg-[#FEEFEC] text-center text-[#82310e]">
        <h1 className="text-5xl sm:text-6xl font-bold mb-10">
          Gallery
        </h1>
        <h2 className="text-xl sm:text-2xl mb-8">
          Welcome to our gallery!
        </h2>
        <p className="mb-5">
          Take a deep dive into our collection of hens party's and pictures of our hunky models.
        </p>
        <p>
          Follow us on Facebook or Instagram to keep up with all our fun and sexy art classes and check out our hot talent. 
        </p>
      </div>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery items */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gallery coming soon...</p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gallery coming soon...</p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gallery coming soon...</p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gallery coming soon...</p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gallery coming soon...</p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gallery coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
