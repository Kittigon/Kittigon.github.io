import React from 'react'
import { Mail, Github } from 'lucide-react'

import profileImg from './assets/profile.png'
import appointment from './assets/appointment.png'
import chatbot from './assets/chatbot.png'
import cert1 from './assets/certificateJs.png'
import cert2 from './assets/certificateNW.png'
import cert3 from './assets/certificateDS.png'

const Portfolio = () => {

  const projects = [
    {
      title: "Mental-Health-Chatbot-System",
      tech: "Flask, LLM API, RAG, Supabase",
      desc: "โปรเจกต์ฝึกพัฒนาแชตบอทด้านสุขภาพจิต โดยใช้ Large Language Model ร่วมกับเทคนิค Retrieval-Augmented Generation (RAG)",
      image: chatbot,
    },
    {
      title: "Online-Appointment-Booking-System",
      tech: "Next.js, Node.js, REST API, Supabase, JWT",
      desc: "ระบบจองนัดหมายออนไลน์สำหรับทดลองพัฒนาเว็บแอปพลิเคชัน ที่ครอบคลุมการจัดการผู้ใช้ การยืนยันตัวตน และการจองนัดหมายผ่านระบบเว็บ",
      image: appointment,
      link: "https://appointment-website-nine.vercel.app/login",
      demo: {
        email: "User@gmail.com",
        password: "User1234"
      }
    }
  ]

  const certificates = [
    {
      title: "FreeCodeCamp JavaScript",
      provider: "Coursera",
      year: "2025",
      image: cert1
    },
    {
      title: "Network Fundamentals",
      provider: "Coursera",
      year: "2025",
      image: cert2
    },
    {
      title: "Data Structures",
      provider: "Coursera",
      year: "2025",
      image: cert3
    }
  ]

  const AllSkillsCard = ({ icons }) => (
    <div className="p-10 rounded-3xl bg-white border border-slate-100 shadow-sm">
      <div className="flex flex-wrap gap-5 justify-center">
        {icons.map((icon, i) => (
          <img
            key={i}
            src={`https://skillicons.dev/icons?i=${icon}`}
            alt={icon}
            className="w-12 h-12 md:w-14 md:h-14"
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">

      <nav className="fixed w-full bg-white/80 backdrop-blur z-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg">My Portfolio</span>
          <div className="hidden md:flex gap-6 text-slate-600 font-medium">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#certificates" className="hover:text-indigo-600">Certificates</a>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <img
            src={profileImg}
            alt="Profile"
            className="w-36 h-36 rounded-full mx-auto mb-6 object-cover shadow"
          />

          <h2 className="text-2xl font-semibold">Kittigon Thapin</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-1 mb-6">
            Fullstack <span className="text-slate-400">Developer</span> Intern
          </h1>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="text-left space-y-5 text-lg">
                <p>
                  ผมเป็นนิสิตสาขาวิทยาการคอมพิวเตอร์ที่สนใจการพัฒนา Web Application
                  และเทคโนโลยีปัญญาประดิษฐ์ (AI) มีประสบการณ์จากการทำโปรเจกต์จริง
                  ทั้งเว็บแอปพลิเคชันและระบบแชตบอต
                </p>

                <p className="text-slate-600">
                  มีพื้นฐานด้าน Frontend, Backend, Database
                  และเทคนิค Retrieval-Augmented Generation (RAG)
                  พร้อมเรียนรู้และพัฒนาทักษะจากการทำงานจริง
                </p>

                <p className="text-slate-600">
                  สนใจฝึกงานในตำแหน่ง Fullstack Developer
                  เพื่อเข้าใจการพัฒนาระบบแบบครบวงจร
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Kittigon"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:scale-105 transition"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="mailto:kittigonthapin04@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full border hover:text-indigo-600 hover:border-indigo-300 transition"
              >
                <Mail size={20} />
                kittigonthapin04@gmail.com
              </a>
            </div>
          </div>

        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <AllSkillsCard
            icons={[
              'react', 'nextjs', 'tailwind', 'ts', 'js',
              'html', 'css', 'nodejs', 'mysql', 'git', 'github'
            ]}
          />
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target={p.link ? "_blank" : "_self"}
                rel="noreferrer"
                className={`
      block bg-white rounded-2xl p-6
      transition-all duration-300
      hover:shadow-xl hover:-translate-y-1
      ${p.link ? "cursor-pointer" : "cursor-default"}
    `}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-contain mb-4"
                />

                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-indigo-600 mb-2">{p.tech}</p>
                <p className="text-slate-600">{p.desc}</p>

                {p.link && (
                  <p className="mt-4 text-sm font-medium text-indigo-600">
                    View Website →
                  </p>
                )}

                {p.demo && (
                  <div className="mt-4 rounded-lg bg-slate-100 p-3 text-sm text-slate-600">
                    <p className="font-medium text-slate-700">Demo Account</p>
                    <p>Email: {p.demo.email}</p>
                    <p>Password: {p.demo.password}</p>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Certificates</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {certificates.map((c, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={c.image}
                  alt={c.title}
                  className="max-w-md w-full object-contain"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-slate-500">
                    {c.provider} • {c.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Portfolio
