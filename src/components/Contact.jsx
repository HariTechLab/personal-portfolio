import { useState, useRef } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "user_name") {
      setUserName(value);
    } else if (name === "user_email") {
      setUserEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_79jzl2d",
        "template_cbdp0wv",
        formRef.current,
        "QmjntDer4qhi5FZMH"
      )
      .then(
        () => {
          setUserName("");
          setUserEmail("");
          setMessage("");
          setNotification("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contactSection" className="border-b border-neutral-900 pb-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in <span className="text-neutral-500">Touch</span>
      </motion.h1>
      <div className="text-center tracking-wider">
        <div className="max-w-[850px] mx-auto">
          <div className="mt-6 bg-[#161616] rounded-xl">
            <div className="p-10">
              {notification && (
                <div className="mb-4 text-green-500">{notification}</div>
              )}
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 sm:grid-flow-col-2 gap-x-5 gap-y-4">
                  <div>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="user_name"
                        value={userName}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        name="user_email"
                        value={userEmail}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mt-2.5 relative">
                      <textarea
                        name="message"
                        value={message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                        rows={4}
                      ></textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="text-xl w-full p-4 mt-2 font-semibold hover:bg-blue-100 text-black bg-white rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
