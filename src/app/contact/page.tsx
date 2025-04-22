"use client";

import React, { useState, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Head from 'next/head'; // Import Head for SEO

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result,setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    result;
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f6ce326c-76ff-4820-8f84-23b8bcd6d71b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setSubmitted(true);
      setRedirecting(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  useEffect(() => {
    if (redirecting) {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [redirecting]);

  return (
    <>
      <Head>
        <title>Contact Me | Shinkhal Sinha&apos;s Portfolio</title>
        <meta name="description" content="Get in touch with Shinkhal Sinha for collaborations, inquiries, or just to say hello. Fill out the contact form to reach out." />
        <meta name="keywords" content="Contact, Shinkhal Sinha, Portfolio, Collaborate, Inquiries" />
        <meta property="og:title" content="Contact Me | Shinkhal Sinha's Portfolio" />
        <meta property="og:description" content="Connect with Shinkhal Sinha for opportunities and collaborations. Fill out the form to send a message." />
        <meta property="og:url" content="https://shinkhal-sinha.online/contact" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <main className="container mx-auto max-w-screen-lg pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.5} inView>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-red-400 font-bold mb-5">Get in Touch</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium mb-8 text-center">
              I am always open to new opportunities and collaborations. Whether you have a question or just want to say hello, feel free to reach out!
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md border backdrop-blur-lg border-gray-300 shadow-xl rounded-lg p-8 bg-opacity-40 mb-10"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-medium text-light-heading">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 bg-black text-white bg-opacity-20 backdrop-blur-md py-3 px-4 border border-gray-400"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-medium text-light-heading">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 bg-black text-white bg-opacity-20 backdrop-blur-md py-3 px-4 border border-gray-400"
                    required
                  />
                </div>
                <div className="mb-6 relative">
                  <label htmlFor="message" className="block text-lg font-medium text-light-heading">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={4}
                    className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 bg-black text-white bg-opacity-20 backdrop-blur-md resize-none py-3 px-4 border border-gray-400"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    className="w-6/12 max-w-xs bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-300 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            ) : (
              <div className={`text-center transition-all duration-500 ${redirecting ? 'opacity-100' : 'opacity-0'} mt-10`}>
                <p className="text-[2.5rem] font-semibold text-green-400 animate-fade-in">Thank You!</p>
                {redirecting && (
                  <>
                    <p className="text-xl font-semibold text-gray-200">Your message has been sent successfully. Redirecting to the home page in 5 seconds...</p>
                  </>
                )}
              </div>
            )}
          </div>
        </BlurFade>

        <ShootingStars />
        <StarsBackground />
      </main>
    </>
    );
  }
