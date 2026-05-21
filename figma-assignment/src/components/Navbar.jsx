import { FiSearch } from "react-icons/fi"

function Navbar() {
  return (
    <div className="bg-white h-[72px] rounded-[24px] border border-gray-200 px-6 flex items-center justify-between shadow-sm">

      {/* Search */}
      <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 h-[46px] w-[320px]">

        <FiSearch className="text-gray-500 text-lg" />

        <input
          type="text"
          placeholder="Find influencers to collaborate with"
          className="w-full outline-none text-sm"
        />

      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">

        <button className="bg-[#F4B740] text-white px-5 h-[46px] rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-200">
          Upgrade
        </button>

        <button className="bg-[#2563EB] text-white px-5 h-[46px] rounded-xl text-sm font-medium hover:bg-blue-700 transition-all duration-200">
          Create Campaign
        </button>

      </div>

    </div>
  )
}

export default Navbar