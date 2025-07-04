// import React from 'react'

function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white rounded-3xl shadow-lg mt-8 mx-auto max-w-6xl">
      <section className="flex-1 space-y-6">
        <div className="inline-flex items-center bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-medium mb-2">
          <span role="img" aria-label="grocery">🛒</span> Grocery Deliver Service
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Make healthy life with <span className="text-green-700 underline decoration-green-400">fresh</span> grocery
        </h1>
        <p className="text-gray-600 text-lg max-w-xl">
          Get the best quality and most delicious grocery food in the world, you can get them all use our website.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow transition">Shop Now</button>
        <div className="flex items-center gap-4 mt-6">
          <a href="#" className="block"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" /></a>
          <a href="#" className="block"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12" /></a>
        </div>
      </section>
      <section className="flex-1 flex flex-col items-center mt-10 md:mt-0">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="Fresh groceries" className="rounded-2xl shadow-lg w-full max-w-md" />
        <div className="flex gap-4 mt-6">
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-2">
            <span role="img" aria-label="fresh">🥗</span>
            <span className="font-medium">100% Fresh</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-2">
            <span role="img" aria-label="delivery">🚚</span>
            <span className="font-medium">Fast Delivery</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home 