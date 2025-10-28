import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface Video {
    id: string;
    title: string;
    description: string;
    category: string;
}

const videos: Video[] = [
    {
        id: "VYOjWnS4cMY",
        title: "The Science of Motivation",
        description:
            "Discover how dopamine drives your daily decisions and how to use it for success.",
        category: "Science",
    },
    {
        id: "Z1Yd7upQsXY",
        title: "Understanding AI in 10 Minutes",
        description:
            "A simple breakdown of what artificial intelligence really means and why it matters.",
        category: "Technology",
    },
    {
        id: "hTWKbfoikeg",
        title: "The Power of Mindfulness",
        description:
            "Learn how mindfulness reshapes your brain and boosts focus in daily life.",
        category: "Productivity",
    },
    {
        id: "2vjPBrBU-TM",
        title: "The Creative Process Explained",
        description:
            "What creativity really is and how to nurture it every day with simple habits.",
        category: "Creativity",
    },
];

const categories = ["All", "Science", "Technology", "Productivity", "Creativity"];

export default function VideoShowcase() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [search, setSearch] = useState<string>("");
    const [lastPlayed, setLastPlayed] = useState<Video | null>(null);

    useEffect(() => {
        const lastPlayedId = localStorage.getItem("lastPlayedVideo");
        if (lastPlayedId) {
            const found = videos.find((v) => v.id === lastPlayedId);
            if (found) setLastPlayed(found);
        }
    }, []);

    useEffect(() => {
        if (selectedVideo) {
            localStorage.setItem("lastPlayedVideo", selectedVideo);
            const found = videos.find((v) => v.id === selectedVideo);
            if (found) setLastPlayed(found);
        }
    }, [selectedVideo]);

    const filteredVideos = useMemo(() => {
        return videos.filter((v) => {
            const matchesCategory =
                activeCategory === "All" || v.category === activeCategory;
            const matchesSearch =
                v.title.toLowerCase().includes(search.toLowerCase()) ||
                v.description.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as any },
        }),
    };

    const getThumbnail = (id: string) =>
        `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

    return (
        <div className="font-sans text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#16978c] to-[#13bfa9] text-white py-20 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    Learn Something New Every Day
                </h1>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                    Watch short, impactful videos on topics that inspire and educate — all
                    in one place.
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
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10 text-[#16978c]">
                        Featured Videos
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredVideos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden cursor-pointer group"
                                onClick={() => setSelectedVideo(video.id)}
                            >
                                <div className="relative">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                                        }}
                                    />
                                    <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-4xl group-hover:bg-opacity-50 transition">
                                        ▶
                                    </button>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                                    <p className="text-gray-600 text-sm">{video.description}</p>
                                    <span className="inline-block mt-3 text-xs text-[#16978c] font-medium bg-[#a9ece4] px-2 py-1 rounded-full">
                                        {video.category}
                                    </span>
                                </div>
                            </motion.div>
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
                        className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-3 right-4 text-gray-700 hover:text-black text-3xl"
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
                    <a
                        href="https://youtube.com/"
                        target="_blank"
                        className="text-white underline hover:text-[#a9ece4]"
                    >
                        {/* Subscribe on YouTube */}
                    </a>
                </p>
            </footer>
        </div>
    );
}
