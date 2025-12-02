export default function ContactForm() {
  return (
    <form className="space-y-1 w-full max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-black ml-4">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full rounded-full border border-gray-300 px-6 py-3 focus:border-[#431800] focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-black ml-4">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-full border border-gray-300 px-6 py-3 focus:border-[#431800] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-black ml-4">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full rounded-full border border-gray-300 px-6 py-3 focus:border-[#431800] focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="address" className="text-sm font-medium text-black ml-4">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full rounded-full border border-gray-300 px-6 py-3 focus:border-[#431800] focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-black ml-4">
          Your Message
        </label>
        <textarea
          id="message"
          rows={6}
          className="w-full rounded-2xl border border-gray-300 px-6 py-3 focus:border-[#431800] focus:outline-none resize-none"
        />
      </div>

      <div className="flex justify-center pt-4">
        <button
          type="submit"
          className="rounded bg-[#2C1810] px-12 py-3 text-sm font-medium text-white hover:bg-[#2C1810]/90 transition-colors uppercase tracking-wide"
        >
          send a message
        </button>
      </div>
    </form>
  );
}
