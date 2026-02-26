/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Users, 
  Award, 
  ChevronRight, 
  Scale,
  Heart,
  BookOpen,
  Briefcase,
  Menu,
  X,
  Gavel,
  BalanceBeam
} from "lucide-react";
import { useState } from "react";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-32 ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`card-dark ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const studentData = {
    name: "Josua Hardi Putra Nababan",
    major: "Ilmu Hukum",
    semester: 6,
    gpa: "3.77",
    email: "josuahardiputranababan01@gmail.com",
    phone: "082382533144",
    address: "Jl. Sri Indra 2, Pekanbaru",
    motto: "Hidup Sederhana itu Indah",
    motivation: "Mengasah kemampuan kepemimpinan, bekerja sama dengan orang lain untuk mencapai suatu tujuan bersama, menambah pengalaman, bisa mendapatkan banyak wawasan dan pengetahuan.",
    education: [
      { school: "SMA Negeri 13 Pekanbaru", period: "2019 - 2022" },
      { school: "SMP Daniel Pekanbaru", period: "2016 - 2019" },
      { school: "SD Negeri 93 Pekanbaru", period: "2010 - 2016" }
    ],
    experience: [
      {
        role: "Anggota Divisi SDM",
        org: "Badan Eksekutif Mahasiswa (BEM)",
        desc: "Bertanggung jawab dalam pengembangan sumber daya mahasiswa, koordinasi internal, dan pelaksanaan program kerja organisasi."
      }
    ]
  };

  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Pendidikan", href: "#education" },
    { name: "Organisasi", href: "#experience" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <div className="min-h-screen font-sans bg-[#050505] text-zinc-400">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark py-5 px-6 md:px-12 flex justify-between items-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-serif italic text-2xl text-white tracking-widest"
        >
          JHPN
        </motion.span>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-zinc-500 hover:text-white transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-serif italic text-white">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <Section className="pt-48 pb-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.3em] font-bold mb-10 text-zinc-500">
              <Scale size={12} className="text-white" /> Jurisprudence & Leadership
            </div>
            <h1 className="text-6xl md:text-8xl font-serif italic text-white leading-[0.9] mb-10 tracking-tight">
              {studentData.name}
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed font-light">
              Mahasiswa Hukum Semester {studentData.semester} yang berfokus pada integritas, keadilan, dan pengembangan sumber daya manusia yang unggul.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#contact" 
                className="bg-white text-black px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-zinc-200 transition-all"
              >
                Connect
              </a>
              <div className="flex items-center gap-4 px-6 py-4 border border-white/10 rounded-full">
                <div className="text-[10px] uppercase tracking-widest text-zinc-500">GPA</div>
                <div className="text-xl font-serif italic text-white">{studentData.gpa}</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/justice-law/1200/1600" 
                alt="Law and Justice" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </Section>

      {/* Motto - Minimalist Editorial */}
      <Section id="about" className="border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 block mb-12">Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-16 leading-tight">
              "{studentData.motto}"
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-zinc-500 leading-relaxed font-light text-lg">
                {studentData.motivation}
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Core Values / Stats */}
      <Section className="bg-[#080808]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          <div className="p-12 bg-[#050505] flex flex-col items-center text-center">
            <Gavel className="text-zinc-700 mb-8" size={32} />
            <h3 className="text-white font-serif italic text-xl mb-4">Integritas</h3>
            <p className="text-xs uppercase tracking-widest text-zinc-600">Legal Foundation</p>
          </div>
          <div className="p-12 bg-[#050505] flex flex-col items-center text-center">
            <Users className="text-zinc-700 mb-8" size={32} />
            <h3 className="text-white font-serif italic text-xl mb-4">Kepemimpinan</h3>
            <p className="text-xs uppercase tracking-widest text-zinc-600">BEM SDM Member</p>
          </div>
          <div className="p-12 bg-[#050505] flex flex-col items-center text-center">
            <Award className="text-zinc-700 mb-8" size={32} />
            <h3 className="text-white font-serif italic text-xl mb-4">Akademik</h3>
            <p className="text-xs uppercase tracking-widest text-zinc-600">GPA {studentData.gpa}</p>
          </div>
        </div>
      </Section>

      {/* Education & Experience - Split Layout */}
      <Section id="education" className="bg-[#050505]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <div className="mb-16">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 block mb-4">Academic Journey</span>
              <h2 className="text-4xl font-serif italic text-white">Pendidikan</h2>
            </div>
            <div className="space-y-12">
              {studentData.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="text-[10px] font-bold text-zinc-600 mb-2 tracking-widest uppercase">{edu.period}</div>
                  <h3 className="text-xl text-white font-medium group-hover:text-zinc-400 transition-colors duration-300">{edu.school}</h3>
                  <div className="h-px w-0 group-hover:w-full bg-white/20 transition-all duration-500 mt-4"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <div id="experience">
            <div className="mb-16">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 block mb-4">Leadership</span>
              <h2 className="text-4xl font-serif italic text-white">Organisasi</h2>
            </div>
            <div className="space-y-12">
              {studentData.experience.map((exp, idx) => (
                <Card key={idx} className="bg-transparent border-white/10 hover:bg-white/[0.02]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl text-white font-serif italic mb-1">{exp.role}</h3>
                      <div className="text-xs uppercase tracking-widest text-zinc-500">{exp.org}</div>
                    </div>
                    <div className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-zinc-500">Active</div>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {exp.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact - Dark Luxury */}
      <Section id="contact" className="bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-12 leading-tight">
                Let's start a <br />conversation.
              </h2>
              <div className="space-y-10">
                <a href={`mailto:${studentData.email}`} className="block group">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-2">Email</div>
                  <div className="text-xl text-zinc-400 group-hover:text-white transition-colors">{studentData.email}</div>
                </a>
                <a href={`tel:${studentData.phone}`} className="block group">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-2">Phone</div>
                  <div className="text-xl text-zinc-400 group-hover:text-white transition-colors">{studentData.phone}</div>
                </a>
                <div className="block">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-2">Office</div>
                  <div className="text-xl text-zinc-400">{studentData.address}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <input placeholder="Full Name" type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-white placeholder:text-zinc-700" />
                </div>
                <div className="space-y-2">
                  <input placeholder="Email Address" type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-white placeholder:text-zinc-700" />
                </div>
                <div className="space-y-2">
                  <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-white placeholder:text-zinc-700 resize-none"></textarea>
                </div>
                <button className="group flex items-center gap-4 text-white uppercase tracking-[0.3em] text-xs font-bold pt-4">
                  Send Message <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
          
          <footer className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            <p>© 2024 {studentData.name}</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Legal Portfolio</a>
            </div>
          </footer>
        </div>
      </Section>
    </div>
  );
}
