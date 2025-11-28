

export interface Video {
    id: string;
    title: string;
    description?: string;
    subtitleone?: string;
    subtitletwo?: string;
    subdesc?: { title: string, description?: string }[];
    workingAtHeightData?: { id: number; left: string; right: string }[];
    category: string;
    keyPoints?: string[];
    keyPointsp?: string[];
}

export const videos: Video[] = [
    {
        id: "VYOjWnS4cMY",
        title: "HSE OBJECTIVES & HSE PRINCIPLES",
        subtitleone: "HSE OBJECTIVES:",
        subtitletwo: "HSE PRINCIPLES:",
        // description: "Discover how dopamine drives your daily decisions and how to use it for success",
        category: "Science",
        keyPoints: [
            "Zero reportable incidents through safe operations",
            "Promote occupational Health and wellbeing",
            "Protect the environment",
            "Comply with all HSE & ESG applicable Legislations",

        ],
        keyPointsp: [
            "HSE is non-negotiable",
            "'HSE starts with me' & 'I am responsible for HSE",
            "Commitment to a strong HSE culture is a core value",
            "Develop HSE competency",
            "Consultation and Participation",
            "Completing work in a safe manner, stop unsafe work",
        ]
    },
    {
        id: "Z1Yd7upQsXY",
        title: "WORK PERMIT",
        description:
            "Permit to work system is a part of a safe system of work and an additional safeguard for the safety of employees, visitors and equipment. It consists of an organized and predefined safety procedure.",
        subdesc: [{title: "Type of Activity for taking EPTW", description: "Working at Height, Confined Space, Electrical, Hot work, General Work and any non-routine activity which are performed at WTG/Location, PSS and CMS etc"}],
        subtitleone: "Basic Requirement for EPTW-",
        category: "Technology",
        keyPoints: [
            "E-PTW Issued or Received by authorised person only.",
            "E-PTW Valid for max 8 hrs and to be closed within time limit.",
            "Buddy system -Minimum 2 person must be working on single EPTW.",
            "All person involved in E-PTW Must undergone safety",
            "induction training.",
            "All person having Valid Safety Induction Card.",
            "TBT Need to conduct before starting job activity. Non-Routine job must have JSA signed copy.",
            "Electrical activity performed by EQP Qualified person only.",
            "LOTO where isolation is applicable.",
            "Fulfil requirement/control measures as mentioned in PTW.",
            "Availability of fire extinguisher and first aid box.",
            "Availability of emergency contact numbers with the workers.",
        ]
    },
    {
        id: "hTWKbfoikeg",
        title: "WORKING AT HEIGHT",
        description:
            "Learn how mindfulness reshapes your brain and boosts focus in daily life.",
        category: "Productivity",
        // keyPoints: [
        //     "Scientific benefits of daily meditation",
        //     "Simple 5-minute mindfulness exercises",
        //     "How to stay present in a distracted world",
        //     "Improving focus and reducing stress",
        //     "Building a sustainable mindfulness practice"
        // ],
        workingAtHeightData : [
            {
                id: 1,
                left: "Make use of lifeline and fall arrest system when moving on height.",
                right:
                "Work should not be allowed without safety induction, GWO or work at height training and buddy system."
            },
            {
                id: 2,
                left: "Secure with proper anchoring before opening winch door.",
                right: "Do not use mobile phones while work i.e during ascending/descending."
            },
            {
                id: 3,
                left: "Use tool bag / box to keep small materials / tools.",
                right: "Do not remove fall arrester before anchoring the safety harness."
            }
            ]
    },
    // {
    //     id: "2vjPBrBU-TM",
    //     title: "The Creative Process Explained",
    //     description:
    //         "What creativity really is and how to nurture it every day with simple habits.",
    //     category: "Creativity",
    //     keyPoints: [
    //         "Debunking myths about creative talent",
    //         "Daily habits of highly creative people",
    //         "Overcoming creative blocks effectively",
    //         "The role of constraints in creativity",
    //         "Building an environment for innovation"
    //     ]
    // },
];


export const categories = ["All", "Science", "Technology", "Productivity", "Creativity"];