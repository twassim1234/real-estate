
import { useState } from 'react'
import { MapPinIcon, BuildingStorefrontIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
const house = {
  title: 'Modern Family Home',
  price: '$3500',
  location: 'Carthage, Tunisia',
  maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31284.037345059054!2d10.3076825!3d36.8581614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029ef1e8cc6f29%3A0xf4343a66c2e4d347!2sCarthage%2C%20Tunisia!5e0!3m2!1sen!2stn!4v1682368999264!5m2!1sen!2stn",

  description:
    'A beautiful 4-bedroom family home located in the peaceful hills of Carthage. Featuring a large garden, private pool, and modern interior design.',
  attributes: {
    bedrooms: 4,
    flor: 2,
    area: '250 sqm',
    type: 'Villa',
  },
  images: [
    'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    'https://source.unsplash.com/featured/?bedroom',
  ],
}

export default function House() {
  const [mainImage, setMainImage] = useState(house.images[0])

  return (
    <div className="bg-white min-h-screen mt-40">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Title + Price */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{house.title}</h1>
          <p className="text-2xl text-indigo-600 font-semibold">{house.price}/Month</p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-8">
          <div className="sm:col-span-3 ">
            <img
              src={mainImage}
              alt="Main"
              className="rounded-lg w-full h-[400px] object-cover shadow"
            />
          </div>
          <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-1 gap-4">
            {house.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`House ${idx}`}
                onClick={() => setMainImage(img)}
                className={`rounded-lg cursor-pointer h-40 w-60 object-cover border-2 ${
                  mainImage === img ? 'border-indigo-500' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Description & Attributes */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
            <p className="text-gray-700 mb-6">{house.description}</p>

            <h3 className="text-lg font-medium text-gray-800 mb-2">Property Details</h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-600">
              <li><strong>Type:</strong> {house.attributes.type}</li>
              <li><strong>Area:</strong> {house.attributes.area}</li>
              <li><strong>Bedrooms:</strong> {house.attributes.bedrooms}</li>
              <li><strong>Fllor:</strong> {house.attributes.flor}</li>
            </ul>
            <div className="rounded-lg overflow-hidden mt-4">
  <iframe
    src={house.maps}
    width="100%"
    height="250"
    allowFullScreen=""
    loading="lazy"
    className="border-0 w-3/4 h-96 rounded-lg "
  ></iframe>
</div>

          </div>

          {/* Contact & Location */}
          <div className="bg-gray-50 rounded-xl shadow p-6 space-y-4">
            <div className="flex items-center gap-2 text-gray-700 mb-8">
              <MapPinIcon className="h-5 w-5 text-indigo-600 " />
              <span>{house.location}</span>
            </div>
            <button  className="w-full bg-indigo-600 text-white rounded-md py-3 hover:bg-indigo-700 transition font-medium flex items-center justify-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              +216 9999999999
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
