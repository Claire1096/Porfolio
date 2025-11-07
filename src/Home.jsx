import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";

export default function Home() {
  const variants = {
    enter: (dir) => ({
      x: dir === 1 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
    },
    exit: (dir) => ({
      x: dir === 1 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const [activeLink, setActiveLink] = useState("Home");
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // TOOLS
  const [hoveredTool, setHoveredTool] = useState(null);

  const toolInfo = {
    canva: "Graphic design made simple and fun!",
    figma: "Collaborative UI/UX design platform.",
    electron: "Build cross-platform desktop apps.",
    vs: "Lightweight and powerful code editor.",
  };

  const cards = [
    {
      id: 1,
      bg: "bg-[#FDEED1]",
      content: (
        <div className="flex flex-col items-center">
          <a
            href="https://github.com/Claire1096/diary"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <img
              src="myimg/diary.png"
              alt="Claire’s Diary"
              className="w-[700px] rounded-3xl hover:scale-105 transition-transform"
            />
          </a>
        </div>
      ),
      topColor: "bg-[#FFB6C1]",
      leftColor: "bg-[#A5D8F3]",
      rightColor: "bg-[#FFD97A]",
      topText: "Clairey Diary",
      leftText: "Tech Stack~",
      leftParagraph:
        "I used Electron to create a live desktop version, VS Code for development, HTML, CSS, and JavaScript for structure, styling, and interactivity, and Figma for the design.",
      rightText: "Description~",
      rightParagraph:
        "This diary is inspired by pixel games I’ve enjoyed—mainly “Stardew Valley” with a touch of Minecraft. It lets you write, save, and view your entries. Simple yet meaningful, this project reflects the time and care I put into its design, allowing you to capture thoughts, memories, and daily experiences.",
    },
    {
      id: 2,
      bg: "bg-[#FFF4E0]",
      content: (
        <a
          href="https://github.com/Claire1096/tracker-project"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <img
            src="myimg/tracker.png"
            alt="Tracker"
            className="w-[700px] rounded-3xl hover:scale-105 transition-transform"
          />
        </a>
      ),
      topColor: "bg-[#FEB5C0]",
      leftColor: "bg-[#CDE7BE]",
      rightColor: "bg-[#FCE38A]",
      topText: "School Tracker",
      leftText: "Tech Stack~",
      leftParagraph:
        " I created this using HTML, CSS, JavaScript, and PHP with a database on XAMPP, and designed it using Canva.",
      rightText: "Description~",
      rightParagraph:
        "You can monitor your overall academic progress, manage your schedule, keep track of subjects, professors, and academic records, all through your personal account.",
    },
  ];
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const welcomeHeight =
        document.getElementById("Welcome")?.offsetHeight || 0;
      if (window.scrollY > welcomeHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // useState Hook to track current card
  const [current, setCurrent] = useState(0);

  // handle click event
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % cards.length); // loops back to first card
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f7e5bd] pb-20">
      <Navbar />
      <section
        id="Welcome"
        className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-screen w-full"
        style={{
          backgroundImage: "url('myimg/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-15 left-15 z-10">
          <img
            src="myimg/logo.png"
            alt="My Logo"
            className="w-11 h-11 rounded-full shadow-lg "
          />
        </div>

        <div className="absolute top-15 left-290 flex items-center gap-4 z-10">
          <a
            href="https://github.com/Claire1096"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="myimg/github.png"
              alt="GitHub"
              className="w-10 h-10 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/tammy-claire-montemolin-774017294/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="myimg/linkedn.png"
              alt="LinkedIn"
              className="w-10 h-10 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a
            href="https://discord.com/users/974022752098975774"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="myimg/discord.png"
              alt="Discord"
              className="w-10 h-10 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        <div className="absolute bottom-6 flex justify-center w-full z-10">
          <Button
            onClick={() => {
              document
                .getElementById("Home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="transition-transform duration-300 hover:scale-110 bg-transparent p-0 border-none shadow-none"
          >
            <img
              src="myimg/arrow.png"
              alt="Scroll Down"
              className="w-10 h-10 animate-bounce"
            />
          </Button>
        </div>
      </section>

      <section
        id="Home"
        className="relative flex items-center justify-center bg-[#f7e5bd] min-h-screen overflow-hidden"
      >
        {/* Yellow Card */}
        <Card className="relative bg-[#FDD97A] w-[900px] h-[450px] rounded-3xl border border-[#8C6B6B]/20 shadow-sm p-3">
          <CardContent className="p-0">
            <img
              src="/myimg/ribbon.png"
              alt="Ribbon"
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-[250px] z-10"
            />
            <a
              className="absolute top-40 left-90 text-4xl  text-[#CE4735] text-center"
              style={{ fontFamily: "MyFont" }}
            >
              ~ Home ~
            </a>
            <a className=" absolute top-55 text-balance text-center text-[#CE4735] ">
              Hi! I’m Tammy Claire Montemolin, a 3rd year BSCS student from
              Cavite State University – Bacoor Campus. I’m an aspiring web
              developer, graphic designer, and animator who loves bringing my
              ideas to life This is my first-ever portfolio — have fun exploring
              my creations!
            </a>
          </CardContent>
        </Card>

        {/* Stickers Around the Card */}
        <motion.img
          src="/myimg/yellowdog.png"
          alt="Yellow Dog"
          className="absolute bottom-10 left-[150px] w-[110px] z-20 -rotate-12"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.2, 0.9, 1], opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.img
          src="/myimg/bunny.png"
          alt="Bunny"
          className="absolute top-10 right-[200px] w-[130px] z-20 rotate-[8deg]"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.2, 0.9, 1], opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />

        <motion.img
          src="/myimg/bear.png"
          alt="Bear"
          className="absolute bottom-[50px] right-40 w-[110px] z-20 rotate-10"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.3, 0.9, 1], opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        />

        <motion.img
          src="/myimg/star.png"
          alt="Star"
          className="absolute top-[50px] left-40 w-[100px] z-20 -rotate-10"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.3, 0.9, 1], opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        />
      </section>

      {/* About */}
      <section
        id="About"
        className="min-h-screen flex items-center justify-center gap-12 bg-[#f7e5bd] p-10"
      >
        {/* LEFT SIDE - Pink Card with Photo */}
        <div className="bg-[#F3C3CD] w-[480px] h-[530px] rounded-[40px] shadow-md flex items-center justify-center relative">
          <img
            src="myimg/profile.jpg"
            alt="Tammy Claire Montemolin"
            className="w-[400px] h-[400px] rounded-2xl object-cover shadow-lg"
          />

          <div className="absolute top-10 left-4 text-2xl">
            <img
              src="myimg/orange.png"
              alt="orange"
              className="w-14 h-14"
            ></img>
          </div>
          <div className="absolute bottom-9 right-4 text-2xl">
            <img src="myimg/spark.png" alt="spark" className="w-14 h-14" />
          </div>
          <div className="absolute top-10 right-10 text-2xl">
            <img src="myimg/bling.png" alt="bling" className="w-35 h-25" />
          </div>

          <div className="absolute bottom-4 left-4 text-2xl"></div>
          <div className="absolute bottom-4 left-4 text-2xl"></div>
        </div>

        {/* RIGHT SIDE - About Content */}
        <div className="max-w-[520px] text-[#CE4735]">
          <h2 className="text-[33px] mb-3" style={{ fontFamily: "MyFont" }}>
            ~ About ~
          </h2>

          <p className="text-[15px] leading-relaxed mb-6">
            I’m passionate about web development, design, and animation—turning
            ideas into experiences that are both functional and beautiful.
            Whether I’m coding, sketching, or animating, I love the process of
            transforming imagination into something real.
          </p>

          <div className="flex gap-12 mb-6">
            <div className="flex gap-12 mb-6">
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-[16px] mb-2">
                  TECHNICAL SKILLS
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <img src="myimg/box.png" alt="box" className="w-70 h-40" />

                    <img
                      src="myimg/graphic.png"
                      alt="Graphic Design"
                      className="absolute top-[30%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-60 object-contain cursor-pointer hover:scale-110 transition-transform duration-300 -rotate-6"
                    />
                    <img
                      src="myimg/digital.png"
                      alt="Digital Illustration"
                      className="absolute top-[40%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-50 object-contain cursor-pointer hover:scale-110 transition-transform duration-300 rotate-[8deg]"
                    />
                    <img
                      src="myimg/video.png"
                      alt="Video Editing"
                      className="absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-45 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* TOOLS */}
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-[16px] mb-2">TOOLS</h3>
              <div className="flex flex-col items-start">
                <div className="relative w-[200px] h-[200px]">
                  <div
                    className="absolute top-[25%] left-[10]"
                    onMouseEnter={() => setHoveredTool("figma")}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    <img
                      src="myimg/figma.png"
                      alt="Figma"
                      className="w-30 h-30 cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                    {hoveredTool === "figma" && (
                      <div className="absolute top-[70px] left-1/2 -translate-x-1/2 bg-white text-[#CE4735] px-3 py-1 rounded-lg shadow text-xs font-medium">
                        {toolInfo.figma}
                      </div>
                    )}
                  </div>

                  <div
                    className="absolute top-[10] left-[8]"
                    onMouseEnter={() => setHoveredTool("electron")}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    <img
                      src="myimg/electron.png"
                      alt="Electron"
                      className="w-22 h-22 cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                    {hoveredTool === "electron" && (
                      <div className="absolute top-[70px] left-1/2 -translate-x-1/2 bg-white text-[#CE4735] px-3 py-1 rounded-lg shadow text-xs font-medium">
                        {toolInfo.electron}
                      </div>
                    )}
                  </div>

                  <div
                    className="absolute top-[20%] left-[26%]"
                    onMouseEnter={() => setHoveredTool("vs")}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    <img
                      src="myimg/vs.png"
                      alt="VS Code"
                      className="w-[132px] h-[132px] cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                    {hoveredTool === "vs" && (
                      <div className="absolute top-[140px] left-1/2 -translate-x-1/2 bg-white text-[#CE4735] px-3 py-1 rounded-lg shadow text-xs font-medium">
                        {toolInfo.vs}
                      </div>
                    )}
                  </div>

                  <div
                    className="absolute top-[10] left-[40%]"
                    onMouseEnter={() => setHoveredTool("canva")}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    <img
                      src="myimg/canva.png"
                      alt="Canva"
                      className="w-23 h-20 cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                    {hoveredTool === "canva" && (
                      <div className="absolute top-[70px] left-1/2 -translate-x-1/2 bg-white text-[#CE4735] px-3 py-1 rounded-lg shadow text-xs font-medium">
                        {toolInfo.canva}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="-mt-5">
            <h3 className="font-semibold text-[16px] mb-2">LANGUAGES I USE</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "MySQL",
                "Bootstrap",
                "React",
              ].map((lang) => (
                <span
                  key={lang}
                  className="border-2 border-[#CE4735] text-[#CE4735] px-4 py-1 rounded-full text-sm font-medium hover:bg-[#CE4735] hover:text-white transition-all"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="Projects"
        className="min-h-screen flex items-center justify-center overflow-visible relative"
      >
        <div className="flex justify-center items-center min-h-screen ">
          <AnimatePresence mode="wait">
            <motion.div
              key={cards[current].id}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                className={`${cards[current].bg}/80 border-2 border-[#CE4735] rounded-3xl shadow-md p-8 backdrop-blur-sm w-[900px] h-[650px] flex flex-col justify-between`}
              >
                <h2
                  className="text-[33px] mb-3 text-[#CE4735]"
                  style={{ fontFamily: "MyFont" }}
                >
                  Project~
                </h2>

                <CardContent className="p-0 flex flex-col justify-between h-full">
                  {/* Main content area */}
                  <div className="w-full h-[300px] bg-[#FFF7EE] rounded-3xl border border-[#CE4735]/20 flex items-center justify-center text-lg font-semibold text-[#6B4C4C] text-center px-6">
                    {cards[current].content}
                  </div>

                  <div className="w-full flex gap-4 mt-6">
                    <div className="flex-1 flex flex-col items-center">
                      <div
                        className={`w-full h-10 rounded-full ${cards[current].topColor} flex items-center justify-center text-black mb-2`}
                        style={{ fontFamily: "MyFont" }}
                      >
                        {cards[current].topText}
                      </div>

                      <div
                        className={`w-full h-[140px] rounded-3xl ${cards[current].leftColor} flex flex-col items-center justify-center text-black px-3 text-left`}
                      >
                        <span
                          style={{ fontFamily: "MyFont", fontSize: "20px" }}
                        >
                          {cards[current].leftText}
                        </span>
                        <p className="text-sm mt-1">
                          {cards[current].leftParagraph}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex-1 h-[180px] rounded-3xl ${cards[current].rightColor} flex flex-col items-center justify-center text-black px-3 text-center`}
                    >
                      <span style={{ fontFamily: "MyFont", fontSize: "20px" }}>
                        {cards[current].rightText}
                      </span>
                      <p className="text-sm mt-1">
                        {cards[current].rightParagraph}
                      </p>
                    </div>
                  </div>

                  <div className="flex md:justify-end justify-center mt-4 md:mt-0 md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2">
                    <button
                      onClick={handleNext}
                      className="w-12 h-12 bg-[#CE4735] hover:bg-[#b63d2f] text-white rounded-full 
               flex items-center justify-center shadow-md transition-transform hover:scale-110"
                    >
                      <span className="text-xl font-bold">→</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contacts */}
      <section id="Contacts" className="flex justify-center items-center py-16">
        <Card className="relative bg-[#FFB4B4] w-[950px] rounded-3xl border border-[#8C6B6B]/20 shadow-lg p-10">
          <CardContent className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 space-y-5">
              <h2
                className="text-3xl font-semibold text-[#CE4735]"
                style={{ fontFamily: "MyFont" }}
              >
                Get in touch
              </h2>

              <div className="text-[#5c4747] space-y-3">
                <p>
                  <span className="font-semibold text-[#CE4735]">Email:</span>{" "}
                  tammymontemolin@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-[#CE4735]">Phone:</span>{" "}
                  +63 99 740 4934
                </p>
                <p>
                  <span className="font-semibold text-[#CE4735]">Address:</span>{" "}
                  Metro Manila, Las Piñas, Philippines
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#CE4735] mb-3">Socials</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Claire1096"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="myimg/github.png"
                      alt="GitHub"
                      className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tammy-claire-montemolin-774017294/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="myimg/linkedn.png"
                      alt="LinkedIn"
                      className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a
                    href="https://discord.com/users/974022752098975774"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="myimg/discord.png"
                      alt="Discord"
                      className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a href="mailto:tammymontemolin@gmail.com">
                    <img
                      src="myimg/email.png"
                      alt="Email"
                      className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/strrwmmy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="myimg/instagram.png"
                      alt="Instagram"
                      className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
            <Card className="bg-[#FAF6ED] border border-[#CE4735]/20 rounded-3xl shadow-md p-8 backdrop-blur-sm">
              <div className="flex-1">
                <form
                  action="https://formspree.io/f/xdkpqvey"
                  method="POST"
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="p-3 rounded-xl border border-[#CE4735]/50 outline-none focus:ring-2 focus:ring-[#CE4735]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      required
                      className="p-3 rounded-xl border border-[#CE4735]/50 outline-none focus:ring-2 focus:ring-[#CE4735]"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Write something..."
                    rows="5"
                    required
                    className="w-full p-3 rounded-xl border border-[#CE4735]/50 outline-none focus:ring-2 focus:ring-[#CE4735]"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-[#CE4735] text-white py-3 rounded-xl hover:bg-[#b93d2d] transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Card>
          </CardContent>
        </Card>

        {/* Back to Top Button */}
        {showTopBtn && (
          <div className="fixed bottom-6 right-6 z-50">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className=" px-3 py-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
            >
              <img
                src="myimg/down.png" // replace with your arrow image path
                alt="Back to Top"
                className="w-10 h-10"
              />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
