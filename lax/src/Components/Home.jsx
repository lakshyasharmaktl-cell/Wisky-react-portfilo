import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function WhiskeySwiper() {
  const whiskeyBrands = [
    {
      id: 1,
      name: "Jack Daniel's",
      type: "Tennessee Whiskey",
      image: "https://i.pinimg.com/originals/aa/9a/cc/aa9acce922c444876a93b5e8d5fac694.jpg",
      color: "from-amber-800 to-blue-900"
    },
    {
      id: 2,
      name: "Johnnie Walker",
      type: "Blended Scotch",
      image: "https://images.unsplash.com/photo-1572383672419-ab35444a6934?w=500&h=700&fit=crop",
      color: "from-blue-900 to-black"
    },
    {
      id: 3,
      name: "Jameson",
      type: "Irish Whiskey",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&h=700&fit=crop",
      color: "from-green-800 to-amber-700"
    },
    {
      id: 4,
      name: "Macallan",
      type: "Single Malt Scotch",
      image: "https://unsobered.com/_next/image?url=https://media.unsobered.com/Macallan%20Whisky%20Price%20in%20India.webp&w=3840&q=75",
      color: "from-amber-600 to-amber-800"
    },
    {
      id: 5,
      name: "Jim Beam",
      type: "Bourbon Whiskey",
      image: "https://media.gettyimages.com/id/462501025/photo/clermont-ky-bottles-of-jim-beam-bourbon-make-their-way-down-a-conveyor-belt-inside-the.jpg?s=612x612&w=0&k=20&c=04s1H9gQQURGuGL8uciJI2bkDFMezzLAeZCEbHMx3J4=",
      color: "from-red-800 to-amber-700"
    },
    {
      id: 6,
      name: "Glenfiddich",
      type: "Single Malt Scotch",
      image: "https://images.unsplash.com/photo-1572383672419-ab35444a6934?w=500&h=700&fit=crop",
      color: "from-green-700 to-amber-600"
    },
    {
      id: 7,
      name: "Chivas Regal",
      type: "Blended Scotch",
      image: "https://images.unsplash.com/photo-1572383672419-ab35444a6934?w=500&h=700&fit=crop",
      color: "from-purple-900 to-blue-900"
    },
    {
      id: 8,
      name: "Crown Royal",
      type: "Canadian Whisky",
      image: "https://woodencork.com/cdn/shop/files/crown-royal-marquis-canadian-whisky-179.webp?v=1746217752&width=1000",
      color: "from-purple-800 to-red-800"
    },
    {
      id: 9,
      name: "Wild Turkey",
      type: "Bourbon Whiskey",
      image: "https://arthurcantina.com/cdn/shop/files/Wild_Turkey_Bourbon_Whiskey_101_50mL_-_Arthur_Cantina_Wine_Liquor_-_-_tag1_-_tag2_-2700749.jpg?v=1724559371&width=480",
      color: "from-amber-700 to-brown-800"
    },
    {
      id: 10,
      name: "Glenfiddich",
      type: "Single Malt Scotch",
      image: "https://media.gettyimages.com/id/2185114134/photo/keith-scotland-october-30-the-glenfiddich-1959-whisky-bottle-crafted-to-celebrate.jpg?s=612x612&w=0&k=20&c=J7wE6XnkQBrmaF7iEHoxucWzhOBzHjjRK0YZSCRkpZM=",
      color: "from-green-700 to-amber-600"
    },
    {
      id: 11,
      name: "RockFord",
      type: "Blended Scotch",
      image: "https://static.livcheers.com/static/content/images/brand-content/rockford/photo-3.webp",
      color: "from-blue-900 to-red"
    },
    {
      id: 12,
      name: "Jameson",
      type: "Irish Whiskey",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&h=700&fit=crop",
      color: "from-green-800 to-amber-700"
    },
    
  ];

  return (
    <div className="flex bg-linear-150 from-bg-viloto to-bg-azul h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 mt-16">
          Premium Whiskey Collection
        </h1>
        <p className="text-amber-700 text-lg max-w-2xl mx-auto">
          Swipe through our exclusive selection of world-class whiskey brands
        </p>
      </div>

      {/* Swiper Container */}
      <div className="max-w-md mx-auto">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="whiskey-swiper"
          style={{
            width: '320px',
            height: '480px'
          }}
        >
          {whiskeyBrands.map((whiskey) => (
            <SwiperSlide key={whiskey.id}>
              <div className={`relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${whiskey.color}`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={whiskey.image} 
                    alt={whiskey.name}
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                      {whiskey.name}
                    </h3>
                    <p className="text-amber-200 font-medium drop-shadow">
                      {whiskey.type}
                    </p>
                  </div>
                  
                  {/* Rating and Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-amber-400">★</span>
                      ))}
                      <span className="text-amber-200 ml-2 text-sm">4.8</span>
                    </div>
                    <div className="text-right">
                      <span className="text-amber-300 font-bold text-lg">
                        $45+
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">★</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Instructions */}
        <div className="text-center mt-8">
          <p className="text-amber-700 font-medium">
            ← Swipe or drag to explore →
          </p>
          <p className="text-amber-600 text-sm mt-2">
            {whiskeyBrands.length} premium brands available
          </p>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .whiskey-swiper {
          width: 320px;
          height: 480px;
        }
        
        .whiskey-swiper .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .whiskey-swiper .swiper-slide-shadow-left,
        .whiskey-swiper .swiper-slide-shadow-right {
          border-radius: 1rem;
        }
      `}</style>
    </div>
  );
}