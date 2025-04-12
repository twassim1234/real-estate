import { useState } from 'react'
import { Link } from 'react-router-dom'

const Rent = [
  {
    id: 1,
    location: 'Downtown, Carthage',
    price: '$1,200/month',
    size: '120 m²',
    imageSrc: 'https://images.unsplash.com/photo-1572120360610-d971b9b78847',
    imageAlt: 'Modern apartment in downtown Carthage',
    description: 'Beautiful modern apartment in the heart of Carthage with a great view and access to all amenities.',
  },
  {
    id: 2,
    location: 'La Marsa, Tunis',
    price: '$1,500/month',
    size: '150 m²',
    imageSrc: 'https://images.unsplash.com/photo-1599422314077-f4dfdaa4cded',
    imageAlt: 'Cozy house with garden in La Marsa',
    description: 'Spacious and cozy house with a private garden and parking.',
  },
  // Add more houses as needed...
]

export default function ListSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4

  const totalPages = Math.ceil(Rent.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = Rent.slice(indexOfFirstProduct, indexOfLastProduct)

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Houses for Rent</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((house) => (
            <Link to={`/house/${house.id}`} key={house.id} className="group block">
              <img
                alt={house.imageAlt}
                src={house.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
              />
              <h3 className="mt-4 text-sm text-gray-700">{house.location}</h3>
              <p className="text-sm text-gray-500">Size: {house.size}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">{house.price}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-between items-center mt-10">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
