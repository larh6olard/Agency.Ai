import toast from "react-hot-toast";
import assets from "../assets/assets";
import Title from "./Title";
import { motion, stagger } from "motion/react";

const container = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.2) } },
};

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", `${name} reached out to you`);

    toast.loading("Loading...", { id: "message" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission", {
          id: "message",
        });
        event.target.reset();
      } else {
        toast.error(data.message, { id: "message" });
      }
    } catch (error) {
      toast.error(error.message, { id: "message" });
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
      id="contact-us"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move youe business forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p className="mb-2 text-sm font-medium">Your name</motion.p>

          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="person icon" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              id=""
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-sm font-medium">Email</p>

          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="email icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id=""
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </motion.div>

        <motion.div
          className="sm:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 resize-none"
            required
          />
        </motion.div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit{" "}
          <img src={assets.arrow_icon} alt="arrow icon" className="w-4" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
