import { useState } from 'react';
import { StarIcon, FireIcon } from '@heroicons/react/24/solid';

// Image imports
import img1 from '../assets/corosal-img13.jpg';
import img2 from '../assets/corosal-img14.jpg';
import img3 from '../assets/corosal-img16.jpg';
import img4 from '../assets/corosal-img12.jpg';

function Properties() {
  const [filter, setFilter] = useState('all');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const properties = [
    {
      id: 1,
      title: "Mountain Fireplace Suites",
      desc: "Rustic luxury surrounded by alpine beauty, with indoor fireplaces and scenic balconies.",
      img: img1,
      type: "mountain",
      price: 275,
      rating: 4.9,
      amenities: ["Fireplace", "Wi-Fi", "Private Balcony"],
      trending: true,
    },
    {
      id: 2,
      title: "Tropical Resort Escape",
      desc: "Step out to palm-shaded pools and a breeze of paradise. Family-friendly and relaxing.",
      img: img4,
      type: "resort",
      price: 300,
      rating: 4.8,
      amenities: ["Pool", "Spa", "Restaurant"],
      trending: false,
    },
    {
      id: 3,
      title: "Oceanfront Retreat Villas",
      desc: "Premium beachfront condos with direct ocean views, hot tubs, and open decks.",
      img: img3,
      type: "beach",
      price: 350,
      rating: 5,
      amenities: ["Ocean View", "Hot Tub", "Smart TV"],
      trending: true,
    },
    {
      id: 4,
      title: "Wine Country Stay",
      desc: "Modern comfort near vineyards. Enjoy tranquil mornings and tasting tours nearby.",
      img: img2,
      type: "wine",
      price: 220,
      rating: 4.7,
      amenities: ["Gourmet Kitchen", "Wine Fridge", "Wi-Fi"],
      trending: false,
    },
  ];

  const filtered = filter === 'all' ? properties : properties.filter(p => p.type === filter);

  return (
    <section className="py-20 bg-[#fdfaf6] text-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">Explore Our Properties</h1>

        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="p-3 border rounded-md w-full"
            />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="p-3 border rounded-md w-full"
            />
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500 transition">
              Check Availability
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {['all', 'mountain', 'beach', 'resort', 'wine'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full border font-semibold ${
                filter === type ? 'bg-yellow-400 text-black' : 'bg-white text-gray-700 border-gray-300'
              } hover:bg-yellow-300 transition`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform relative"
            >
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
              {p.trending && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1">
                  <FireIcon className="h-4 w-4" /> Trending
                </span>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-1">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
                <div className="mt-3">
                  <span className="font-bold text-lg text-yellow-600">${p.price}</span> <span>/night</span>
                </div>
                <div className="flex items-center mt-2 text-yellow-500">
                  {[...Array(Math.round(p.rating))].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                  <span className="ml-2 text-sm text-gray-700">({p.rating})</span>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  {p.amenities.map((a, i) => (
                    <li key={i}>• {a}</li>
                  ))}
                </ul>
                <button className="mt-4 w-full bg-yellow-400 py-2 rounded-lg hover:bg-yellow-500 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Teaser */}
        <div className="mt-16 text-center text-gray-600">
          <p>Can’t find what you're looking for? Contact us or explore more destinations soon to be added.</p>
        </div>
      </div>
    </section>
  );
}

export default Properties;
