


const CareersPage = () => {
  return (
    <main>


      <section
        style={{ background: '#F5F0E8' }}
        className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#B8A86A] rounded-full px-5 py-1.5 text-sm text-[#7A6A30] mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8A86A]" />
          Careers
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl md:text-5xl italic text-[#1A1A1A] leading-tight mb-5">
          <span className="not-italic">We're not</span> hiring
          <br />
          <span className="not-italic">just yet.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[#6B6B6B] text-base max-w-md mx-auto leading-relaxed mb-9">
          Big things are coming. We'll be opening roles soon — stay tuned for
          updates on opportunities to join the Social Manch team.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:hello@socialmanch.com"
            className="bg-[#7B5EA7] text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-[#6a4d94] transition-colors"
          >
            Notify me when we're hiring
          </a>

          <a
            href="/"
            className="border border-[#C5BFB0] text-[#1A1A1A] rounded-full px-7 py-3 text-sm font-medium hover:border-[#999] transition-colors"
          >
            Back to home
          </a>
        </div>

        <hr className="w-10 border-t-2 border-[#C5BFB0] my-10" />

        <p className="text-sm text-[#999]">
          Updates will be shared soon. Thank you for your interest!
        </p>
      </section>


    </main>
  )
}

export default CareersPage