function OrderSummary() {
  return (
    <div className="bg-white rounded-[24px] border border-gray-200 p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

      {/* Heading */}
      <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-8 leading-tight">
        Order Summary
      </h2>

      {/* Plan Card */}
      <div className="border border-gray-200 rounded-2xl p-6 mb-6 hover:border-blue-300 transition-all duration-200">

        <h1 className="text-[44px] md:text-[52px] font-bold leading-none">
          ₹4,999
        </h1>

        <p className="text-gray-500 mt-3 text-[18px]">
          Startup Plan
        </p>

        <div className="mt-6 flex items-center justify-between text-[15px]">

          <span className="text-gray-500">
            Billing Cycle
          </span>

          <span className="font-semibold text-black">
            Monthly
          </span>

        </div>

      </div>

      {/* Wallet */}
      <div className="border border-gray-200 rounded-2xl p-5 mb-6 hover:border-green-300 transition-all duration-200">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold text-[18px] text-black">
              Wallet Balance
            </h3>

            <p className="text-gray-500 text-[15px] mt-1">
              Available credits
            </p>

          </div>

          <h4 className="text-[24px] font-bold text-green-600">
            ₹1,200
          </h4>

        </div>

      </div>

      {/* Coupon */}
      <div className="border border-gray-200 rounded-2xl p-5 mb-6 hover:border-black transition-all duration-200">

        <h3 className="font-semibold text-[20px] text-black mb-4">
          Apply Coupon
        </h3>

        <div className="flex flex-col sm:flex-row gap-3">

          <input
            type="text"
            placeholder="Enter coupon code"
            className="
              flex-1
              h-[52px]
              border
              border-gray-300
              rounded-xl
              px-4
              text-[15px]
              outline-none
              transition-all
              duration-200
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
              hover:border-gray-400
            "
          />

          <button
            className="
              h-[52px]
              px-6
              bg-black
              text-white
              rounded-xl
              text-[15px]
              font-medium
              hover:bg-gray-800
              transition-all
              duration-200
            "
          >
            Apply
          </button>

        </div>

      </div>

      {/* Price Details */}
      <div className="border border-gray-200 rounded-2xl p-5 mb-8 space-y-4">

        <div className="flex items-center justify-between">

          <span className="text-gray-500 text-[15px]">
            Subtotal
          </span>

          <span className="font-medium text-[15px]">
            ₹4,999
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-gray-500 text-[15px]">
            Platform Fee
          </span>

          <span className="font-medium text-[15px]">
            ₹199
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-gray-500 text-[15px]">
            Tax
          </span>

          <span className="font-medium text-[15px]">
            ₹540
          </span>

        </div>

        <div className="border-t pt-4 flex items-center justify-between">

          <span className="text-[24px] font-bold text-black">
            Total
          </span>

          <span className="text-[28px] font-bold text-black">
            ₹5,738
          </span>

        </div>

      </div>

      {/* Payment Button */}
      <button
        className="
          w-full
          h-[52px]
          bg-[#2563EB]
          text-white
          rounded-xl
          text-[16px]
          font-medium
          hover:bg-blue-700
          hover:shadow-lg
          transition-all
          duration-200
        "
      >
        Proceed to Payment
      </button>

    </div>
  )
}

export default OrderSummary