import { personData } from "../constants/PersonalData";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { socialIcons } from "../constants/SocialMedia";
import { validationForm } from "../constants/validationForm";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [errValidMsg, setValidMsg] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    const message: any = validationForm(mail);
    setValidMsg(message);
    if (message) return null;

    emailjs
      .sendForm("service_jnj", "template_mebf", form.current, {
        publicKey: "YxlJe7M8m6wp0",
      })
      .then(
        () => {
          setAlertMessage("Message sent successfully 🎉");
          setShowAlert(true);
          setShowThankYou(true);
        },
        (error) => {
          setAlertMessage("Failed: " + error.text);
          setShowAlert(true);
        }
      );

    setName("");
    setMail("");
    setMessage("");

    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="md:px-10 bg-[#2D0249] py-8 relative">
      <div className="text-center mb-6">
        <h1 className="inline-block font-bold text-3xl text-white after:content-[''] after:block after:border-b-4 after:border-pink-600 after:mt-1">
          Contact
        </h1>
      </div>

      <div className="md:flex md:justify-center gap-8 px-4">
        {/* Left Section */}
        <div className="md:w-5/12 space-y-6">
          <h1 className="font-bold text-2xl leading-snug tracking-wide text-white">
            Let’s talk about something <span className="text-pink-600">cool</span>
          </h1>

          <div className="space-y-3">
            {personData?.map((p: any, i: number) => (
              <div
                key={i}
                className="flex items-center px-3 py-2 rounded-lg bg-white/10 hover:bg-pink-500 hover:bg-opacity-30 transition"
              >
                <p>{p.svgIcon}</p>
                <p className="ml-3 font-medium text-sm text-white">{p.title}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            {socialIcons?.map((social: any, i: number) => (
              <a
                key={i}
                href={social.path}
                target="_blank"
                className="rounded-full border border-pink-600 p-2 hover:bg-pink-600 hover:text-white transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-5/12 bg-white px-6 py-6 rounded-xl shadow-lg">
          {!showThankYou ? (
            <>
              <h1 className="text-gray-800 font-semibold mb-4 text-lg">
                Have a question or want to work together?
              </h1>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm focus:ring-2 focus:ring-pink-600 outline-none"
                />
                <input
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm focus:ring-2 focus:ring-pink-600 outline-none"
                />
                {errValidMsg && (
                  <span className="text-red-600 text-xs">{errValidMsg}</span>
                )}
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  placeholder="Write a message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm focus:ring-2 focus:ring-pink-600 outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-pink-600 py-3 rounded-md font-semibold text-white text-sm hover:bg-pink-700 transition flex justify-center items-center"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-6">
              <svg
                className="w-10 h-10 text-green-600 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-lg font-bold text-gray-800">
                Thank You for contacting me!
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                I’ll get back to you soon.
              </p>
              <button
                onClick={() => setShowThankYou(false)}
                className="mt-4 px-4 py-2 bg-pink-600 text-white text-sm rounded-md hover:bg-pink-700 transition"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Alert */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <svg
              className="w-8 h-8 mx-auto text-green-600 mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-lg font-bold text-gray-800">Thank You!</h2>
            <p className="text-gray-600 text-sm mt-1">{alertMessage}</p>
            <button
              onClick={() => setShowAlert(false)}
              className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-md text-sm hover:bg-pink-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
