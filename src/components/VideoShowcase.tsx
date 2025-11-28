import { useMemo, useState } from "react";
import { videos, type Video } from "./videos";

// use effect removed



const categories = ["Introduction", "HSE POLICY", "Safety Pladge", "HSE Objective", "Creativity"];

export default function VideoShowcase() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [search, setSearch] = useState<string>("");
    const [lastPlayed, setLastPlayed] = useState<Video | null>(null);

    const filteredVideos = useMemo(() => {
        return videos.filter((v) => {
            const matchesCategory =
                activeCategory === "All" || v.category === activeCategory;
            const matchesSearch =
                v.title.toLowerCase().includes(search.toLowerCase()) ||
                (v.description && v.description.toLowerCase().includes(search.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    function getThumbnail(id: string): string {
        return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    }

    return (
        <div className="font-sans text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#16978c] to-[#13bfa9] text-white py-20 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    A Safety Transformation Initiative
                </h1>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                   IB Operations & Maintenance Services
                </p>
                <a
                    href="#videos"
                    className="bg-white text-[#16978c] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
                >
                    Explore Videos
                </a>
            </section>

            {/* Resume Last Watched */}
            {lastPlayed && (
                <section className="bg-[#a9ece4] border-b border-[#d0f4ee] py-6">
                    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-6 px-6">
                        <img
                            src={getThumbnail(lastPlayed.id)}
                            alt={lastPlayed.title}
                            className="w-40 h-24 rounded-lg object-cover shadow-md"
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-800 mb-1">
                                Continue Watching:
                            </h3>
                            <p className="font-medium text-[#16978c]">{lastPlayed.title}</p>
                            <button
                                onClick={() => setSelectedVideo(lastPlayed.id)}
                                className="mt-3 bg-[#16978c] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0e6b62] transition"
                            >
                                ▶ Continue
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {/* Video Gallery */}
            <section id="videos" className="py-16 bg-[#f5f7f7]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10 text-[#16978c]">
                       Health Safety and Environment Training Videos
                    </h2>

                    {/* Search + Filter */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                        <div className="relative w-full md:w-1/3">
                            <input
                                type="text"
                                placeholder="Search videos..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#16978c]"
                            />
                            <span className="absolute right-4 top-2.5 text-gray-400">🔍</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full border text-sm font-medium transition ${activeCategory === cat
                                        ? "bg-[#16978c] text-white border-[#16978c] shadow-md"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-[#a9ece4]"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="space-y-6">
                        {filteredVideos.map((video, index) => (
                            <div
                                key={video.id}
                                style={{
                                    opacity: 0,
                                    animation: `fadeInUp 0.4s ease-out ${index * 0.1}s forwards`
                                }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden cursor-pointer group"
                                onClick={() => {
                                    setSelectedVideo(video.id);
                                    setLastPlayed(video);
                                }}
                            >
                                <div className="flex flex-col lg:flex-row">
                                    {/* Left side - Title and Bullet points */}
                                    <div className="lg:w-2/5 p-4 flex flex-col justify-between bg-gradient-to-br from-white to-[#f0faf8]">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="inline-block text-xs text-white font-semibold bg-[#16978c] px-1 py-1 rounded-full">
                                                    {video.category}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-2xl mb-1 text-gray-900 leading-tight text-left">
                                                {video.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-1 leading-relaxed text-left">
                                                {video.description}
                                            </p>
                                            {video.subdesc && video.subdesc.length > 0 && (
                                                <div className="mb-2">
                                                    {video.subdesc.map((sub, idx) => (
                                                        <div key={idx} className="mb-1">
                                                            <h4 className="font-semibold text-sm text-[#16978c] uppercase tracking-wide text-left">
                                                                {sub.title}
                                                            </h4>
                                                            {sub.description && (
                                                                <p className="text-gray-600 text-sm leading-relaxed text-left">
                                                                    {sub.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            
                                            <div className="space-y-3">
                                            {video.keyPoints && video.keyPoints.length > 0 && (
                                                <div>
                                                    {video.subtitleone && <h4 className="font-semibold text-sm text-[#16978c] uppercase tracking-wide mb-1 text-left">
                                                        {video.subtitleone}
                                                    </h4>}
                                                    <ul className="space-y-2.5">
                                                        {video.keyPoints.map((point, idx) => (
                                                            <li key={idx} className="flex items-center justify-start m-0 leading-0.5">
                                                                <span className="text-[#16978c] mr-3 mt-0 text-lg flex-shrink-0 leading-0.5">●</span>
                                                                <span className="leading-0.5 text-gray-700 text-sm leading-relaxed text-left">
                                                                    {point}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    </div>
                                            )}
                                            {video.keyPointsp && video.keyPointsp.length > 0 && (
                                                <div>
                                                        {video.subtitletwo && <h4 className="font-semibold text-sm text-[#16978c] uppercase tracking-wide mb-1 text-left">
                                                                {video.subtitletwo}
                                                            </h4>}
                                                    <ul className="space-y-2.5">
                                                        {video.keyPointsp.map((point, idx) => (
                                                            <li key={idx} className="flex items-center justify-start m-0 leading-0.5">
                                                                <span className="text-[#16978c] mr-3 mt-0 text-lg flex-shrink-0 leading-0.5">●</span>
                                                                <span className="leading-0.5 text-gray-700 text-sm leading-relaxed text-left">
                                                                    {point}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    </div>
                                            )}
                                            {
                                                video.workingAtHeightData && video.workingAtHeightData.length > 0 && (
                                                    <div className="mt-4">
                                                      <table className="w-full border border-gray-300">
                                                        <thead>
                                                        <tr className="bg-gray-100 text-left">
                                                            <th className="border border-gray-300 p-2 w-12">#</th>
                                                            <th className="border border-gray-300 p-2">Instruction</th>
                                                            <th className="border border-gray-300 p-2">Guideline</th>
                                                        </tr>
                                                        </thead>

                                                        <tbody>
                                                        {video.workingAtHeightData.map((row) => (
                                                            <tr key={row.id} className="odd:bg-white even:bg-gray-50">
                                                            <td className="border border-gray-300 p-2 font-semibold">
                                                                {row.id}
                                                            </td>
                                                            <td className="border border-gray-300 p-2">{row.left}</td>
                                                            <td className="border border-gray-300 p-2">{row.right}</td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            ) }
                                        </div>
                                        </div>
                                        
                                        <div className="mt-6 pt-4 border-t border-gray-200">
                                            <button className="flex items-center gap-2 text-[#16978c] font-semibold text-sm group-hover:gap-3 transition-all">
                                                <span>Watch Now</span>
                                                <span className="text-lg">▶</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right side - Video thumbnail */}
                                    <div className="lg:w-3/5 relative overflow-hidden bg-gradient-to-br from-[#16978c] to-[#0f6b63] min-h-[300px] lg:min-h-[400px]">
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.onerror = null;
                                                target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300">
                                            <div className="w-20 h-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                                <span className="text-[#16978c] text-3xl ml-1">▶</span>
                                            </div>
                                        </div>
                                        
                                        <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-xs font-medium">
                                            10:24
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredVideos.length === 0 && (
                        <p className="text-center text-gray-500 mt-8">
                            No videos found matching your search or filter.
                        </p>
                    )}
                </div>
            </section>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-3 right-4 text-gray-700 hover:text-black text-3xl z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center"
                        >
                            &times;
                        </button>
                        <iframe
                            className="w-full aspect-video"
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            allowFullScreen
                            title="Video Player"
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#0e6b62] to-[#16978c] text-gray-100 text-center py-6 mt-12">
                <p>
                    © {new Date().getFullYear()} Suzlon
                </p>
            </footer>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}