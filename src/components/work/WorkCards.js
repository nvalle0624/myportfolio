import BananaDogCard from "./bananadogCard";
import FunReaderCard from "./funreaderCard";
// import bananadogIMG from "./static/bananadog.jpg";
// import funreaderIMG from "./static/funreader.jpg";

export const workCards = [
  <BananaDogCard tags={["Python", "Django", "Bootstrap", "CSS"]} name="bananadog" />,
  <FunReaderCard
    tags={["JavaScript", "React", "Redux", "Node.js", "AJAX", "Express.js", "MongoDB"]}
    name="funreader"
  />,
];

// export const allWork = [
//   {
//     title: "BananaDog",
//     date: "July 2021",
//     href: "https://github.com/nvalle0624/kenzie-q4-capstone",
//     image: bananadogIMG,
//     tags: ["Python", "Django", "Bootstrap", "CSS"],
//     description:
//       "An application for a dog training business where " +
//       "trainers and clients can book sessions, communicate, " +
//       "and access a persistent log of dogs’ info and daily " +
//       "reports. Allows trainers to automatically log times and " +
//       "notes for trainings/activities per dog, per session.",
//     contributions: [
//       "Spearheaded development of custom CRM platform " + "for dog trainer’s business in team of 3",
//       "Planned project’s features, presented ideas " +
//         "through organized and detailed outlines, receiving " +
//         "glowing feedback from team",
//       "Created development " + "roadmap and schedule, delegated tasks, providing clarity " + "for team success",
//       "Led the design and programming of all " + "front-end app functionality and back-end data relationships",
//       "Developed features such as: social media style profiles, " +
//         "photo and video uploads, calendar, scheduling, full profile " +
//         "and report editing, auto-report generation, and private messaging",
//       "Maintained correspondence with team members via detailed daily " +
//         "briefings, collaborated in shared virtual workspaces, keeping team " +
//         "updated and on schedule",
//       "Initiated preparations for checkpoints, " + "created scripts and presentation structure",
//       "Completed capstone " + "well within 2 week deadline",
//       "Selected as a featured project for " +
//         "cohort after surpassing project requirements and course expectations" +
//         "with exemplary app and presentation",
//     ],
//   },

//   {
//     title: "Fun Reader",
//     date: "January 2021",
//     href: "",
//     image: funreaderIMG,
//     tags: ["JavaScript", "React", "Redux", "Node.js", "AJAX", "Express.js"],
//     description: "",
//     contributions: [],
//   },
// ];
