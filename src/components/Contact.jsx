import React, { Component, createRef } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.formRef = createRef();
    this.state = {
      userName: "",
      userEmail: "",
      message: "",
      notification: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    // Map the input name to the state property
    const stateName = {
      user_name: "userName",
      user_email: "userEmail",
      message: "message"
    }[name];

    if (stateName) {
      this.setState({ [stateName]: value });
    }
  };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_79jzl2d",
        "template_cbdp0wv",
        this.formRef.current,
        "QmjntDer4qhi5FZMH"
      )
      .then(
        () => {
          this.setState({
            userName: "",
            userEmail: "",
            message: "",
            notification: "Message sent successfully!",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  render() {
    const { userName, userEmail, message, notification } = this.state;

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
                <form ref={this.formRef} onSubmit={this.sendEmail}>
                  <div className="grid grid-cols-1 sm:grid-flow-col-2 gap-x-5 gap-y-4">
                    <div>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="user_name"
                          value={userName}
                          onChange={this.handleInputChange}
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
                          onChange={this.handleInputChange}
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
                          onChange={this.handleInputChange}
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
  }
}
