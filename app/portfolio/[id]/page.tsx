import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

export default async function PreviewWebsite({ params }) {
  const { id } = await params;

  const object = {
    suvashedu: {
      url: "https://suvashedu.com",
      title: "Suvash Edu",
    },
    greenvoltagebd: {
      url: "https://greenvoltagebd.com",
      title: "Green Voltage",
    },
    ssanimationstudio: {
      url: "https://ssanimationstudio.com",
      title: "SS Animation Studio",
    },
    dunevpn: {
      url: "https://play.google.com/store/apps/details?id=com.dunenetworks.dunevpn&hl=en",
      title: "Dune Vpn backend",
    },
      beautybrand: {
      url: "https://dsalkd",
      title: "Beauty Brand Landing page Design",
    },
         swiplink: {
      url: "https://swiplink.vercel.app/",
      title: "SwipLink",
    },
  };

  const { url, title } = object[id];

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header/Navigation */}
      <header className="bg-gray-900/80 backdrop-blur-sm text-white p-4 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/portfolio" className="flex items-center gap-2">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/20">
              <FiArrowLeft size={16} />
              Go Back
            </button>
          </Link>

          <h1 className="text-xl font-bold text-center flex-1 px-4">
            {title} <span className="text-blue-400">Live Preview</span>
          </h1>

          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            <FiExternalLink size={16} />
            Open Full Site
          </Link>
        </div>
      </header>

      {/* Website Preview Container */}
      <div className="flex-1 relative">
        <div className="absolute inset-0">
          <iframe
            src={url}
            className="w-full h-full"
            style={{ border: "none" }}
            title={`Embedded ${title}`}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm text-gray-400 text-sm p-3 text-center border-t border-gray-800">
        <p>Preview mode - Interactive elements may be limited</p>
      </footer>
    </div>
  );
}
