interface Video {
    id: string;
    title: string;
    description: string;
    category: string;
    keyPoints?: string[];
}

export const videos: Video[] = [
    {
        id: "VYOjWnS4cMY",
        title: "The Science of Motivation",
        description:
            "Discover how dopamine drives your daily decisions and how to use it for success.",
        category: "Science",
        keyPoints: [
            "Understanding the role of dopamine in motivation",
            "How to leverage reward systems for better habits",
            "The neuroscience behind procrastination",
            "Practical techniques to boost daily motivation",
            "Building sustainable motivation patterns"
        ]
    },
    {
        id: "Z1Yd7upQsXY",
        title: "Understanding AI in 10 Minutes",
        description:
            "A simple breakdown of what artificial intelligence really means and why it matters.",
        category: "Technology",
        keyPoints: [
            "Basic concepts of machine learning explained",
            "Real-world applications of AI today",
            "How neural networks actually work",
            "The difference between AI, ML, and Deep Learning",
            "Future implications and ethical considerations"
        ]
    },
    {
        id: "hTWKbfoikeg",
        title: "The Power of Mindfulness",
        description:
            "Learn how mindfulness reshapes your brain and boosts focus in daily life.",
        category: "Productivity",
        keyPoints: [
            "Scientific benefits of daily meditation",
            "Simple 5-minute mindfulness exercises",
            "How to stay present in a distracted world",
            "Improving focus and reducing stress",
            "Building a sustainable mindfulness practice"
        ]
    },
    {
        id: "2vjPBrBU-TM",
        title: "The Creative Process Explained",
        description:
            "What creativity really is and how to nurture it every day with simple habits.",
        category: "Creativity",
        keyPoints: [
            "Debunking myths about creative talent",
            "Daily habits of highly creative people",
            "Overcoming creative blocks effectively",
            "The role of constraints in creativity",
            "Building an environment for innovation"
        ]
    },
];

export const categories = ["All", "Science", "Technology", "Productivity", "Creativity"];