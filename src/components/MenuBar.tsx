import React from 'react'

function MenuBar() {
  return (
    <div>
        <nav className="bg-gray-800 p-2 ">
       <div className="flex items-center justify-between">
      
      {/* Icon Options */}
      <div className="flex ">
        {/* Icon 1 */}
        <button title='icon1' className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        </button>
        <div className=''>
        {/* Icon 2 */}
        <button title='icon2' className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>

        {/* Icon 3 */}
        <button title='icon' className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.364l1.414 1.414M3 12h2M7.757 7.757L9.17 6.343M12 3v2m4.243 1.757L15.83 9.17M21 12h-2m-1.364 6.121l-1.414 1.414"></path>
          </svg>
        </button>
        </div>
      </div>
      
      {/* Search Bar
      <div className="flex-grow sm:max-w-md mx-4">
        <input type="text" placeholder="Search..." className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div> */}
      
     
    </div>
  </nav>
    </div>
  )
}

export default MenuBar