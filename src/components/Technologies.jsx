import React, { Component } from "react";
import { motion } from "framer-motion";
import { RiReactjsLine, RiJavaLine, RiNodejsLine } from "react-icons/ri";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { SiSpringboot, SiPostgresql, SiMongodb } from "react-icons/si";

const icons = [
  {
    Icon: RiReactjsLine,
    colorClass: "text-cyan-400",
    label: "ReactJS",
    delay: 2.5,
  },
  {
    Icon: RiJavaLine,
    colorClass: "text-yellow-400",
    label: "Java",
    delay: 4.0,
  },
  {
    Icon: TbBrandJavascript,
    colorClass: "text-yellow-300",
    label: "JavaScript",
    delay: 2.0,
  },
  {
    Icon: RiNodejsLine,
    colorClass: "text-green-500",
    label: "NodeJS",
    delay: 2.8,
  },
  {
    Icon: TbBrandTypescript,
    colorClass: "text-blue-400",
    label: "TypeScript",
    delay: 4.8,
  },
  {
    Icon: SiSpringboot,
    colorClass: "text-green-400",
    label: "Spring Boot",
    delay: 5.2,
  },
  {
    Icon: SiPostgresql,
    colorClass: "text-blue-500",
    label: "PostgreSQL",
    delay: 4.6,
  },
  {
    Icon: SiMongodb,
    colorClass: "text-green-500",
    label: "MongoDB",
    delay: 2.3,
  },
];

const IconWithText = ({ Icon, colorClass, label, delay }) => {
  return (
    <motion.div
      variants={{
        initial: { y: -10 },
        animate: {
          y: [10, -10],
          transition: {
            duration: delay,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      }}
      initial="initial"
      animate="animate"
      className="flex flex-col hover:bg-blue-100 items-center rounded-2xl border-neutral-800 p-4"
    >
      <Icon className={`text-7xl ${colorClass}`} />
      <span className="mt-2 text-lg font-medium text-gray-800">{label}</span>
    </motion.div>
  );
};

export default class Technologies extends Component {
  render() {
    return (
      <div className="border-b border-neutral-900 pb-32">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {icons.map(({ Icon, colorClass, label, delay }) => (
            <IconWithText
              key={label}
              Icon={Icon}
              colorClass={colorClass}
              label={label}
              delay={delay}
            />
          ))}
        </motion.div>
      </div>
    );
  }
}
