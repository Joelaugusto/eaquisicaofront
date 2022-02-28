const Navbar = () => {

  return (
    <nav className="flex items-center justify-between border-b bg-white px-10 py-6">
      <div className="flex w-96 items-center space-x-3 rounded-md bg-gray-100 px-4 py-2">
        <input
          type="text"
          placeholder="search"
          className="w-full bg-gray-100 outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 cursor-pointer text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="flex items-center space-x-4">
        <img
          className="w-8 rounded-full"
          src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
          alt="Elon Musk"
        />
        <p className="hidden md:block">Joel Augusto</p>
      </div>
    </nav>
  )
}


export default Navbar;