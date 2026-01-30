import React from "react"
import { Mail, Github } from "lucide-react"

import profileImg from "./assets/profile.png"
import appointment from "./assets/appointment.png"
import chatbot from "./assets/chatbot.png"
import cert1 from "./assets/certificateJs.png"
import cert2 from "./assets/certificateNW.png"
import cert3 from "./assets/certificateDS.png"

const Portfolio = () => {
  const projects = [
    {
      title: "Mental-Health-Chatbot-System",
      tech: "Flask, LLM API, RAG, Supabase",
      desc:
        "ระบบแชตบอตด้านสุขภาพจิตที่ใช้ Large Language Model ร่วมกับ Retrieval-Augmented Generation (RAG) เพื่อดึงข้อมูลที่เกี่ยวข้องมาตอบคำถามผู้ใช้ได้อย่างเหมาะสม",
      features: [
        "แชตบอตที่เข้าใจบริบทของผู้ใช้ด้วยเทคนิค Retrieval-Augmented Generation (RAG)",
        "เชื่อมต่อและใช้งาน Large Language Model ผ่าน LLM API",
        "จัดการประวัติการสนทนาแยกตาม session ของผู้ใช้",
        "ค้นหาข้อมูลด้วยระบบ Vector Search เพื่อดึงความรู้ที่เกี่ยวข้อง",
      ],
      learned:
        "เข้าใจการออกแบบระบบ AI chatbot การเชื่อม LLM กับ backend และการจัดการ context ของผู้ใช้",
      image: chatbot,
    },
    {
      title: "Online-Appointment-Booking-System",
      tech: "Next.js, Node.js, REST API, Supabase, JWT",
      desc:
        "ระบบจองนัดหมายออนไลน์ที่รองรับการจัดการผู้ใช้ การยืนยันตัวตน และการจองนัดหมายผ่านเว็บแอปพลิเคชัน",
      features: [
        "ระบบยืนยันตัวตนและกำหนดสิทธิ์การเข้าถึงด้วย JWT",
        "ระบบกำหนดบทบาทผู้ใช้ (User / Mentalhealth / Admin)",
        "ระบบจอง แก้ไข และจัดการนัดหมาย",
        "เชื่อมต่อข้อมูลผ่าน REST API ระหว่าง Frontend และ Backend",
      ],
      learned:
        "เข้าใจการพัฒนาเว็บแบบ Fullstack ตั้งแต่ frontend, backend, authentication จนถึง database",
      image: appointment,
      link: "https://appointment-website-nine.vercel.app/login",
      demo: {
        email: "User@gmail.com",
        password: "User1234",
      },
    },
  ]

  const certificates = [
    {
      title: "FreeCodeCamp JavaScript",
      image: cert1,
    },
    {
      title: "Network Fundamentals",
      image: cert2,
    },
    {
      title: "Data Science",
      image: cert3,
    },
  ]

  const SkillGroup = ({ title, icons }) => (
    <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3 md:gap-4">
        {icons.map((icon, i) => (
          <img
            key={i}
            src={`https://skillicons.dev/icons?i=${icon}`}
            alt={icon}
            className="w-10 h-10 md:w-12 md:h-12"
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* NAV */}
      <nav className="fixed w-full bg-white/80 backdrop-blur z-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <span className="font-bold text-lg">My Portfolio</span>
          <div className="hidden md:flex gap-6 text-slate-600 font-medium">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#certificates" className="hover:text-indigo-600">Certificates</a>
          </div>
        </div>
      </nav>

      {/* ABOUT */}
      <section id="about" className="pt-32 md:pt-40 pb-20 md:pb-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 md:w-36 md:h-36 rounded-full  mx-auto mb-6 object-cover shadow"
          />

          <h2 className="text-xl md:text-2xl font-semibold">Kittigon Thapin</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-1 mb-6">
            Fullstack <span className="text-slate-400">Developer</span> Intern
          </h1>

          <div className="bg-white p-5 md:p-8 rounded-2xl shadow border border-slate-100 text-left space-y-4 text-base md:text-lg">
            <p>
              ผมเป็นนิสิตสาขาวิทยาการคอมพิวเตอร์ที่มีความสนใจด้านการพัฒนา Web Application
              และเทคโนโลยีปัญญาประดิษฐ์ (Artificial Intelligence)
              โดยมุ่งเน้นการสร้างระบบที่สามารถใช้งานได้จริงและตอบโจทย์ผู้ใช้
            </p>

            <p className="text-slate-600">
              มีประสบการณ์จากการพัฒนาโปรเจกต์จริงในด้าน Fullstack Development
              ตั้งแต่การออกแบบส่วนติดต่อผู้ใช้ (Frontend)
              การพัฒนา Backend และ REST API
              ไปจนถึงการจัดการฐานข้อมูลและระบบยืนยันตัวตน
            </p>

            <p className="text-slate-600">
              นอกจากนี้ยังมีความสนใจและได้ทดลองพัฒนาระบบแชตบอต
              โดยใช้ Large Language Model (LLM)
              ร่วมกับเทคนิค Retrieval-Augmented Generation (RAG)
              เพื่อให้ระบบสามารถดึงข้อมูลที่เกี่ยวข้องมาใช้ในการตอบคำถามได้อย่างเหมาะสม
            </p>

            <p className="text-slate-600">
              ปัจจุบันกำลังมองหาโอกาสฝึกงานในตำแหน่ง Fullstack Developer
              เพื่อพัฒนาทักษะด้านการออกแบบระบบ การเขียนโค้ดเชิงโครงสร้าง
              และการทำงานร่วมกับทีมพัฒนาในสภาพแวดล้อมการทำงานจริง
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/Kittigon"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:scale-105 transition"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="mailto:kittigonthapin04@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border hover:text-indigo-600 hover:border-indigo-300 transition"
            >
              <Mail size={20} />
              kittigonthapin04@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillGroup title="Frontend" icons={["react", "nextjs", "tailwind", "html", "css", "js"]} />
            <SkillGroup title="Backend" icons={["nodejs", "python"]} />
            <SkillGroup title="Database" icons={["mysql", "supabase"]} />
            <SkillGroup title="Tools & AI" icons={["git", "github", "postman"]} />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 md:p-6 shadow hover:shadow-xl transition"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-44 sm:h-56 w-full object-contain mb-4"
                />

                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-indigo-600 pb-4">{p.tech}</p>

                <p className="text-slate-600 mb-4">{p.desc}</p>

                <ul className="list-disc list-inside text-sm text-slate-600 mb-4">
                  {p.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>

                <p className="text-sm text-slate-500">
                  <span className="font-medium text-slate-700">What I learned:</span>{" "}
                  {p.learned}
                </p>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-indigo-600 font-medium"
                  >
                    View Website →
                  </a>
                )}

                {p.demo && (
                  <div className="mt-4 rounded-lg bg-slate-100 p-3 text-sm">
                    <p className="font-medium">Demo Account</p>
                    <p>Email: {p.demo.email}</p>
                    <p>Password: {p.demo.password}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Certificates</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {certificates.map((c, i) => (
              <div key={i} className="text-center">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full max-w-xs sm:max-w-md mx-auto object-contain"
                />
                <h3 className="font-semibold mt-4">{c.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 md:py-10 text-center text-xs md:text-sm text-slate-500">
        © 2025 Kittigon Thapin · Fullstack Developer Intern
      </footer>
    </div>
  )
}

export default Portfolio
