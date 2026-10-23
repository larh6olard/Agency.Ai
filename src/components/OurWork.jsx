import assets from "../assets/assets";
import Title from "./Title";
import { motion, stagger } from "motion/react";

const OurWork = () => {
  const container = {
    hidden: {},
    visible: { transition: { delayChildren: stagger(0.3) } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const workData = [
    {
      id: 1,
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digtal solutions that connect, engage...",
      image: assets.work_mobile_app,
    },
    {
      id: 2,
      title: "Dashboard management",
      description: "We help you execute your plan and deliver results.",
      image: assets.work_dashboard_management,
    },
    {
      id: 3,
      title: "Fitness app promotion",
      description:
        "We help you to create a marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work) => (
          <motion.div
            key={work.id}
            variants={item}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="cursor-pointer"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full rounded-xl"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
