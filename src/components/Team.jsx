import Title from "./Title";
import { motion } from "motion/react";

const Team = () => {
  const teamData = [
    {
      id: 1,
      name: "Haley Carter",
      title: "CEO & founder",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      id: 2,
      name: "James Walker",
      title: "Ads manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      id: 3,
      name: "Jessica Morgan",
      title: "Vice president",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Ashley Bennett",
      title: "Marketing & sales",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 5,
      name: "Emily Parker",
      title: "Content marketer",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 6,
      name: "Ryan Mitchell",
      title: "Content writer",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 7,
      name: "Megan Brooks",
      title: "Performance manager",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 8,
      name: "Amber Foster",
      title: "Senior writer",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
      id="team"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand's success."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((member) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            key={member.id}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
          >
            <img
              src={member.image}
              alt={member.title}
              className="size-12 rounded-full"
            />

            <div className="flex-1">
              <h3 className="font-bold text-sm">{member.name}</h3>
              <p className="text-xs opacity-60">{member.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;
