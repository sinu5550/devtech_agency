const ServiceLayout = () => {
  return (
    <div id="#services " className="p-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">
          Explore Our Expert Design <br />
          Services
        </h1>

        <p className="font-semibold text-slate-600 my-6">
          Transform challenges into success <br /> with proven strategies.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="rounded-3xl p-6 border shadow-sm bg-gradient-to-b from-emerald-100 to-white ">
          <div className="bg-white rounded-full p-2 w-max text-xl ">💻</div>
          <div className="text-3xl font-semibold mb-2 mt-6">Web Design</div>
          <div className="text-sm font-semibold text-gray-500 mt-32">
            Offer an unforgettable user experience.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              Responsive
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              E-Commerce
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              Landing Page
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              WordPress
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              CMS
            </span>
          </div>
        </div>

        <div className="rounded-3xl p-6 border shadow-sm bg-gradient-to-b from-rose-100 to-white">
          <div className="bg-white rounded-full p-2 w-max text-xl ">✨</div>
          <div className="text-3xl font-semibold mb-2 mt-6">Branding</div>
          <div className="text-sm font-semibold text-gray-500 mt-32">
            Brand recognition for your company.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              Logo & Visual Identity
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              Marketing Materials
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              Brand Strategy
            </span>
          </div>
        </div>

        <div className="rounded-3xl p-6 border shadow-sm bg-gradient-to-b from-gray-100 to-white">
          <div className="bg-white rounded-full p-2 w-max text-xl ">🎬</div>
          <div className="text-3xl font-semibold mb-2 mt-6">Animations</div>
          <div className="text-sm font-semibold text-gray-500 mt-32">
            Boost visibility and online presence.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              UI/UX Animations
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              Explainer Videos
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              Interactive Elements
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-3xl p-6 border shadow-sm bg-gray-800 text-white md:col-span-2">
          <div className="bg-gray-700 rounded-full p-2 w-max text-xl ">📈</div>
          <div className="text-3xl font-semibold mb-2 mt-6">SEO & SEA</div>

          <div className="text-sm font-semibold text-gray-300 mt-32">
            Boost visibility and online presence.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm bg-gray-700 rounded-full px-3 py-1 drop-shadow-sm font-medium ">
              Technical SEO Optimization
            </span>
            <span className="text-sm bg-gray-700 rounded-full px-3 py-1 drop-shadow-sm font-medium ">
              Keyword Strategy
            </span>
            <span className="text-sm bg-gray-700 rounded-full px-3 py-1 drop-shadow-sm font-medium ">
              Backlink Build
            </span>
            <span className="text-sm bg-gray-700 rounded-full px-3 py-1 drop-shadow-sm font-medium ">
              Performance Tracing & Analytics
            </span>
            <span className="text-sm bg-gray-700 rounded-full px-3 py-1 drop-shadow-sm font-medium ">
              Local & Global SEO
            </span>
          </div>
        </div>

        <div className="rounded-3xl p-6 border shadow-sm bg-gradient-to-b from-gray-200 to-white">
          <div className="bg-white rounded-full p-2 w-max text-xl ">🔧</div>
          <div className="text-3xl font-semibold mb-2 mt-6">Maintenance</div>

          <div className="text-sm font-semibold text-gray-500 mt-32">
            Keep your website running smoothly.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              Responsive
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              E-Commerce
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              Landing Page
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              WordPress
            </span>
            <span className="text-sm bg-white rounded-full px-3 py-1 drop-shadow-sm font-semibold border">
              CMS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceLayout;
