function BillingForm() {
  return (
    <div className="bg-white rounded-[24px] border border-gray-200 p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

      {/* Heading */}
      <h1 className="text-[32px] md:text-[40px] font-bold text-black mb-2 leading-tight">
        Review your details
      </h1>

      <h2 className="text-[18px] md:text-[20px] font-semibold text-black mb-10">
        Billing Information
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">

        {/* Company Name */}
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">
            Company Name
          </label>

          <input
            type="text"
            placeholder="Enter company name"
            className="w-full h-[54px] border border-gray-300 rounded-xl px-4 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full h-[54px] border border-gray-300 rounded-xl px-4 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-400"
          />
        </div>

        {/* GST */}
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">
            GST Number
          </label>

          <input
            type="text"
            placeholder="Enter GST number"
            className="w-full h-[54px] border border-gray-300 rounded-xl px-4 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-400"
          />
        </div>

        {/* PAN */}
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">
            PAN Number
          </label>

          <input
            type="text"
            placeholder="Enter PAN number"
            className="w-full h-[54px] border border-gray-300 rounded-xl px-4 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-400"
          />
        </div>

        {/* House */}
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">
            Premise / House No.
          </label>

          <input
            type="text"
            placeholder="Enter house number"
            className="w-full h-[54px] border border-gray-300 rounded-xl px-4 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-400"
          />
        </div>

        {/* Street */}
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">
            Street
          </label>

          <input
            type="text"
            placeholder="Enter street"
            className="w-full h-[54px] border border-gray-300 rounded-xl px-4 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-400"
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">
            State
          </label>

          <select
            className="w-full h-[54px] border border-gray-300 rounded-xl px-4 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-400 bg-white"
          >
            <option>Select state</option>
            <option>Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Karnataka</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">
            City
          </label>

          <select
            className="w-full h-[54px] border border-gray-300 rounded-xl px-4 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-400 bg-white"
          >
            <option>Select city</option>
            <option>Hyderabad</option>
            <option>Vijayawada</option>
            <option>Bangalore</option>
          </select>
        </div>

        {/* Country */}
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">
            Country
          </label>

          <input
            type="text"
            value="India"
            readOnly
            className="w-full h-[54px] border border-gray-300 rounded-xl px-4 text-[15px] bg-gray-50 text-gray-500"
          />
        </div>

        {/* Pincode */}
        <div>
          <label className="block text-[15px] font-medium text-gray-700 mb-2">
            Pin Code
          </label>

          <input
            type="text"
            placeholder="Enter pincode"
            className="w-full h-[54px] border border-gray-300 rounded-xl px-4 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-400"
          />
        </div>

      </div>

      {/* Buttons */}
<div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">

  {/* Cancel Button */}
  <button
    className="
      h-[52px]
      min-w-[140px]
      px-8
      border
      border-gray-300
      rounded-xl
      bg-white
      text-[15px]
      font-medium
      text-gray-700
      hover:bg-gray-100
      hover:border-gray-400
      transition-all
      duration-200
    "
  >
    Cancel
  </button>

  {/* Save Button */}
  <button
    className="
      h-[52px]
      min-w-[160px]
      px-8
      bg-[#2563EB]
      text-white
      rounded-xl
      text-[15px]
      font-medium
      hover:bg-blue-700
      hover:shadow-lg
      transition-all
      duration-200
    "
  >
    Save Details
  </button>

</div>

    </div>
  )
}

export default BillingForm