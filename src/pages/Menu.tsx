import React from 'react'

const menuItems = [
  {
    name: 'Fresh Apples',
    price: '$2.99 / lb',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80',
    description: 'Crisp, sweet, and locally sourced apples.'
  },
  {
    name: 'Organic Bananas',
    price: '$1.49 / lb',
    image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e8f8?auto=format&fit=crop&w=400&q=80',
    description: 'Perfectly ripe, organic bananas.'
  },
  {
    name: 'Fresh Broccoli',
    price: '$1.99 / lb',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    description: 'Green, healthy, and full of vitamins.'
  },
  {
    name: 'Whole Wheat Bread',
    price: '$3.49',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    description: 'Freshly baked, soft, and nutritious.'
  },
]

function Menu() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Menu</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.description}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-green-600">{item.price}</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow transition">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu 