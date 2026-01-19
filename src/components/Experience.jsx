import React, { Component } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSuitcase } from "react-icons/fa6";

export default class Experience extends Component {
  render() {
    return (
      <div className="border-b border-neutral-900 pb-12">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Experience
        </motion.h1>
        <div className="text-gray-900">
          <VerticalTimeline lineColor="#E0E0E0">
            {EXPERIENCES.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#4CAF50", color: "#FFF" }}
                icon={<FaSuitcase />}
                date={experience.year}
                dateClassName="text-gray-600"
              >
                <h6 className="text-lg font-semibold text-gray-800">
                  {experience.role}
                </h6>
                <p className="text-base text-gray-600">{experience.company}</p>
                <p className="mt-2 text-justify text-gray-700">
                  {experience.description}
                </p>
                <div className="mt-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-1 inline-block rounded bg-gray-200 px-2 py-1 text-sm font-medium text-green-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}
