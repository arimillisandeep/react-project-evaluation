import Navbar from './components/Navbar'
import BillingForm from './components/BillingForm'
import OrderSummary from './components/OrderSummary'

function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] px-4 sm:px-6 lg:px-8 py-6">

      <div className="max-w-[1440px] mx-auto">

        {/* Navbar */}
        <Navbar />

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">

          {/* Billing Form */}
          <div className="lg:col-span-8">
            <BillingForm />
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <OrderSummary />
          </div>

        </div>

      </div>
    </div>
  )
}

export default App