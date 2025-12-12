import React, { useState, useEffect } from "react";
import SendBtn from "../../img/icons/Send.svg";
import icons from "../../img/icons/icons";
import emailjs from "@emailjs/browser";

function Footer({ textClr = "black", bgClr = "#f9fafb" }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  // const email =  import.meta.env.VITE_EMAIL;
  // Prefer environment variables, but fall back to known values if not set.
  const serviceID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_q3urcqq";
  const templateID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY || "template_1nxl4rk";
  const publicKey =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "jLfbXMLWy6Li85iTe";

  // Initialize EmailJS (safe to call even if publicKey is the fallback)
  useEffect(() => {
    if (publicKey && emailjs.init) emailjs.init(publicKey);
  }, [publicKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          to_email: email, // REQUIRED for recipient
          name: "Prospective Client", // your template uses {{name}}
          title: "Eye-Dentity Service Contact Request", // your template uses {{title}}
        },
        publicKey
      );

      console.log("EmailJ response:", response);

      setMessage("Thank you! We'll be in touch soon.");
      setEmail("");

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer
      className="flex-1 flex flex-col min-h-[28rem] md:h-[35rem] lg:h-[44rem] justify-between pt-20 px-3 md:px-6 pb-6"
      style={{ background: bgClr, color: textClr }}
    >
      <div className="space-y-5 md:mt-2 lg:mt-28">
        <div className="text-2xl md:text-4xl">
          Ready to get <br /> eye-dentified?, <br /> Let talk then.
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="md:w-2/3 lg:max-w-[45rem] bg-white shadow-md h-10 md:h-12 lg:h-16 rounded-full flex relative">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none w-full text-black px-7 placeholder:text-gray-800 md:text-xl"
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="grid place-content-center absolute right-1 top-1 bg-black w-8 md:w-10 lg:w-14 aspect-square rounded-full hover:bg-gray-800 transition disabled:opacity-60"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              ) : (
                <img src={SendBtn} alt="Send" className="lg:w-10 lg:h-10" />
              )}
            </button>
          </div>

          {message && (
            <p
              className={`text-sm md:text-base ${
                message.includes("Thank you")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div
          className="text-2xl sm:text-3xl lg:text-7xl font-bold"
          style={{ lineHeight: ".95" }}
        >
          human <br /> identity studio
        </div>

        <img
          src={icons.HandIdentity}
          alt=""
          className="w-16 h-16 md:w-28 md:h-28 -mx-6"
        />
      </div>
    </footer>
  );
}

export default Footer;
