import assets from "../assets/assets";
import ServicesCard from "./ServicesCard";
import Title from "./Title";
import { motion, stagger } from "motion/react";

const container = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.2) } },
};

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      id: 2,
      title: "Content marketing",
      description: "We help you to execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      id: 3,
      title: "Content writing",
      description:
        "We help you to create a marketing strategy that drives result.",
      icon: assets.content_icon,
    },
    {
      id: 4,
      title: "Content marketing",
      description:
        "We help you to build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="flex flex-col md:grid md:grid-cols-2">
        {servicesData.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
