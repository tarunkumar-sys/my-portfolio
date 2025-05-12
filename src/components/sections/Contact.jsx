import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import {
  FaDribbble,
  FaGithub,
  FaDev,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const SocialIcon = ({ icon: Icon }) => (
  <Icon
    className="social-icon text-white hover:text-lime-400 transition duration-300"
    size={30}
  />
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  const items = [
    {
      type: "icon",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/tarun-kumar-295-scary-crimson",
    },
    {
      type: "icon",
      icon: FaGithub,
      url: "https://github.com/tarunkumar-sys",
    },
    { type: "icon", icon: FaDev, url: "https://dev.to/scary_crimson" },
    {
      type: "icon",
      icon: FaDribbble,
      url: "https://dribbble.com/Scary_crimson",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        {/* bg-gradient-to-br from-black via-black to-lime-400 */}
        <div className="w-full select-none border px-8 md:px-28 py-6 h-full border-t-0 rounded-3xl shadow-2xl">
          <h2 className="text-5xl font-bold p-4 bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent">
            {" "}
            Get In Touch
          </h2>
          <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
            <div className="px-4 w-full min-w-[280px] md:w-[460px] sm:w-1/2 p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  {" "}
                  Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full border border-white/10 rounded px-4 py-2 text-white transition focus:outline-none focus:border-lime-400 focus:bg-lime-400/2"
                    placeholder="Name..."
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  {" "}
                  Email Addresh
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full  border border-white/10 rounded px-4 py-2 text-white transition focus:outline-none focus:border-lime-400 focus:bg-lime-400/2"
                    placeholder="example@gmail.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  {" "}
                  Message
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full  border border-white/10 rounded px-4 py-2 text-white transition focus:outline-none focus:border-lime-400 focus:bg-lime-400/2"
                    placeholder="Your Message..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="bg-white text-black py-2 px-3 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:text-lime-500 hover:shadow-[0_0_15px_rgba(198,255,0,0.4)]
"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* bg-slate-600 backdrop-filter backdrop-blur-lg bg-opacity-30 */}
            <div className="w-full select-none max-w-md min-w-[280px] md:w-[460px] sm:w-1/2 bg-opacity-30 backdrop-blur-lg backdrop-filter bg-gradient-to-br from-white/30 to-black/20 p-6 rounded-xl shadow-xl border text-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-xl bg-gradient-to-r from-lime-400 via-lime-100 to-white bg-clip-text text-transparent">
                  Let's Connect
                </span>
                <div className="space-x-2 flex">
                  <span className="w-3 h-3 rounded-full bg-red-500 block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500 block"></span>
                </div>
              </div>

              <p className="text-white text-sm leading-relaxed">
                {/* Have a question or want to connect? Get in touch — I'm happy to
                help. */}
                Thanks for visiting Let's stay connected and create something amazing together
              </p>

              <div className="pt-5 flex flex-col gap-2 text-white">
                <h6 className="flex items-center gap-2 text-sm select-none">
                  <FaPhoneAlt size={16} />
                  +91 6395941523
                </h6>
                <h6 className="flex items-center gap-2 text-sm select-none">
                  <FaEnvelope size={16} />
                  tarunkumarsingh295@gmail.com
                </h6>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">Follow me</h3>
                <div className="flex gap-2">
                  {items.map((item, index) =>
                    item.type === "icon" ? (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-lime-400 transition duration-300"
                      >
                        <item.icon size={26}/>
                      </a>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
