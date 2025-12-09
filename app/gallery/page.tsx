export default function Gallery() {
  return (
    <>
      <section 
        className="px-6 py-20 text-center min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }} id="hero"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10">
          <h2 className="text-7xl font-bold mb-4 text-white">
            Gallery
          </h2>
          <p className="text-2xl mb-12 text-white">
            Check out our past events
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#82310e]">
            Hens Party Memories
          </h2>
          
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
