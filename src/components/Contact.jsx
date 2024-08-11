import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1300px] w-full flex flex-col gap-0 pt-12"
    >
      <h2 className="text-5xl mb-8 text-center text-[#333333] font-bold">
        My Contact
      </h2>
      <div className="flex max-[800px]:flex-col max-[800px]:justify-center max-[800px]:items-center">
        <div className="left w-[45%]  max-[800px]:w-[60%] max-[500px]:w-[90%] p-6">
          <form className="form space-y-6 border border-black p-6 rounded-2xl bg-[#F5F3F0]">
            <div className="space-y-4">
              <div className="relative">
                <input
                  required
                  placeholder="Name"
                  type="text"
                  className="block w-full px-4 py-2 text-lg bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#FEAE6F]"
                />
              </div>

              <div className="relative">
                <input
                  required
                  placeholder="Email"
                  type="email"
                  className="block w-full px-4 py-2 text-lg bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#FEAE6F]"
                />
              </div>

              <div className="relative">
                <input
                  required
                  placeholder="Phone Number"
                  type="tel"
                  className="block w-full px-4 py-2 text-lg bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#FEAE6F]"
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                required
                placeholder="Message"
                className="block w-full h-16 px-4 py-2 text-lg bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#FEAE6F]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-lg text-white bg-[#FEAE6F] rounded-md hover:bg-[#e49863] focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="right w-[55%] max-[800px]:w-auto p-6 flex flex-col justify-center items-center gap-4 text-[#4d4d4d]">
          <h3 className="text-4xl font-serif text-[#333333]">Adarsh Tiwari</h3>
          <span className="myPhoneNo flex justify-center items-center gap-3">
            <a
              href="tel:+919555350284"
              className="text-2xl max-[500px]:text-xl"
            >
              +91 95553-50284
            </a>
          </span>
          <span className="myEmail flex justify-center items-center  gap-3">
            <a
              href="mailto:at.wrath9616@gmail.com"
              className="text-2xl  max-[500px]:text-xl"
            >
              at.wrath9616@gmail.com
            </a>
          </span>
          <span className="flex gap-2">
            <a href="https://www.instagram.com/___w.r.a.t.h___/?igsh=MTZucXdyZTljcmI5Yg%3D%3D">
              <InstagramLogo size={32} />
            </a>
            <a href="https://www.linkedin.com/in/adarsh-tiwari-ab0470286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <LinkedinLogo size={32} />
            </a>
            <a href="https://github.com/Awarth">
              <GithubLogo size={32} />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
