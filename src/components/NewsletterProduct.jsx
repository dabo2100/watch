

export default function NewsletterProduct() {
  return (
    <div className="flex justify-between items-center w-[1350px] flex-col md:flex-row gap-4 h-full md:h-50 px-6 md:px-20  py-8">
          <div className="text-center md:text-left">
            <h1 className="font-semibold text-xl md:text-2xl">Newsletter & Get Updates</h1>
            <p className="text-sm text-gray-500">Sign up for our newsletter to get up-to-date from us</p>
          </div>

          <div className="flex w-full md:w-auto justify-center md:justify-end">
            <input
              type="email"
              placeholder="Enter Your Mail Here..."
              className="bg-white p-3 w-60 sm:w-72 md:w-80 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700 transition"
            >
              SUBMIT
            </button>
          </div>
        </div>
  )
}
