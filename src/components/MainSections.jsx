import { motion } from 'framer-motion';
import { Rocket, Code2, PenSquare, Brain, Cpu, Image as ImageIcon, Video, LineChart, Users, Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Section = ({ id, title, children, subtitle }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">{title}</span>
        </h2>
        {subtitle && <p className="mt-2 text-gray-400 max-w-3xl">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

export default function MainSections() {
  return (
    <div>
      <Section
        id="about"
        title="About"
        subtitle="A curious mind exploring automation, AI, and business innovation."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <p className="text-gray-200 leading-relaxed">
              I’m a B.Com (Accountancy Honours) student at Balurghat College with a deep curiosity for automation, AI, and business innovation. My goal is to build a next-generation AI education platform that provides students with 24/7 virtual AI-generated teachers. From learning to building, I focus on creating tools that make knowledge accessible and engaging.
            </p>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                <h4 className="text-sm font-semibold text-yellow-300">Core Values</h4>
                <p className="mt-2 text-sm text-gray-300">Curiosity, Consistency, Innovation, and Growth.</p>
              </div>
              <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                <h4 className="text-sm font-semibold text-yellow-300">Languages</h4>
                <p className="mt-2 text-sm text-gray-300">I speak Bengali, English, and Hindi — but I express my ideas best in Bengali and English.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-yellow-500/10 to-amber-500/10 p-6"
          >
            <h4 className="text-sm font-semibold text-yellow-300">Focus</h4>
            <ul className="mt-3 space-y-2 text-gray-200 text-sm">
              <li className="flex items-center gap-2"><Cpu size={16} className="text-yellow-300"/> Automation & AI Integration</li>
              <li className="flex items-center gap-2"><LineChart size={16} className="text-yellow-300"/> Marketing & Strategy</li>
              <li className="flex items-center gap-2"><Brain size={16} className="text-yellow-300"/> Research-driven Learning</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Code2, label: 'Web Development' },
            { icon: LineChart, label: 'Data Analysis' },
            { icon: Users, label: 'Account Management' },
            { icon: LineChart, label: 'Accounting & Trading' },
            { icon: PenSquare, label: 'Content Writing' },
            { icon: Rocket, label: 'Social Media Management' },
            { icon: Cpu, label: 'N8N Automation' },
            { icon: PenSquare, label: 'Script Writing' },
            { icon: Video, label: 'Video Coding' },
            { icon: Rocket, label: 'Marketing & Business Strategy' },
            { icon: Brain, label: 'Research-based Content Creation' },
            { icon: ImageIcon, label: 'AI Video & Image Generation' },
            { icon: Rocket, label: 'Social Media Engagement & Trend Spotting' },
            { icon: Users, label: 'Audience Research' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <s.icon size={18} className="text-yellow-300" />
              <span className="text-sm text-gray-200">{s.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-xs">
          <span className="rounded-full border border-yellow-400/30 bg-yellow-500/10 px-3 py-1 text-yellow-300">Trending: Automation</span>
          <span className="rounded-full border border-yellow-400/30 bg-yellow-500/10 px-3 py-1 text-yellow-300">AI Integration</span>
          <span className="rounded-full border border-yellow-400/30 bg-yellow-500/10 px-3 py-1 text-yellow-300">Marketing Strategy</span>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Premium concepts and builds blending creativity with systems thinking.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'AI Education Platform (Concept)',
              desc: 'An AI-powered learning app offering personalized, 24/7 support via virtual AI teachers.',
              img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Personal Portfolio Website',
              desc: 'A modern portfolio reflecting innovation, premium aesthetics, and smooth interactions.',
              img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'AI Script Writing & Content Automation',
              desc: 'Automation combining AI script generation with voice-driven storytelling pipelines.',
              img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
            },
          ].map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-gray-300">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-semibold">Script Writer</h3>
                <p className="text-sm text-gray-400">Rohan Tyagi</p>
              </div>
              <span className="text-xs text-yellow-300">Mar 2025 – Aug 2025</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>Developed engaging scripts for various digital formats.</li>
              <li>Collaborated with production teams to align creative goals.</li>
              <li>Researched deeply to enhance authenticity and relevance.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-semibold">Content Intern</h3>
                <p className="text-sm text-gray-400">Josh Talks</p>
              </div>
              <span className="text-xs text-yellow-300">Jun 2023 – Feb 2025</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>Assisted in creating short educational scripts for AI voiceover adaptation.</li>
              <li>Proofread and optimized scripts for regional audiences (Bengali & Hindi).</li>
              <li>Collaborated on social media campaigns to improve engagement.</li>
              <li>Contributed to AI-driven content training and development.</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid gap-6 md:grid-cols-3">
          {[{
            title: 'Balurghat College',
            sub: 'Bachelor of Commerce, Accounting & Finance',
            time: '2025–2029',
          }, {
            title: 'WBCHSE – Higher Secondary, Commerce',
            sub: 'GPA: 70%',
            time: '2024',
          }, {
            title: 'WBBSE – Madhyamik',
            sub: 'GPA: 64%',
            time: '2022',
          }].map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-white font-semibold">{e.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{e.sub}</p>
              <span className="text-xs text-yellow-300 mt-2 inline-block">{e.time}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="quote" title="Quote" subtitle="A thought that guides momentum.">
        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-yellow-400/20 bg-gradient-to-tr from-yellow-500/10 to-amber-500/10 p-6 text-center text-lg text-yellow-200"
        >
          “সফলতার পথে অস্থিরতা স্বাভাবিক। কখনও হার মানাবেন না, কারণ আগামী ধাপেও সফলতা অপেক্ষা করছে।”
        </motion.blockquote>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let’s collaborate or just say hi — open to opportunities and conversations.">
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-white font-semibold">Reach me directly</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-200">
              <li className="flex items-center gap-2"><Mail size={16} className="text-yellow-300"/> <a className="hover:underline" href="mailto:myrahamat90@gmail.com">myrahamat90@gmail.com</a></li>
              <li className="flex items-center gap-2"><Instagram size={16} className="text-yellow-300"/> <a className="hover:underline" href="https://instagram.com/i2rahamat" target="_blank" rel="noreferrer">@i2rahamat</a></li>
              <li className="flex items-center gap-2"><Linkedin size={16} className="text-yellow-300"/> <a className="hover:underline" href="#" aria-label="LinkedIn profile">Rahamat Ali</a></li>
              <li className="flex items-center gap-2"><Github size={16} className="text-yellow-300"/> <a className="hover:underline" href="https://github.com/70015" target="_blank" rel="noreferrer">github.com/70015</a></li>
            </ul>
            <div className="mt-6 text-sm text-gray-300">
              <span className="opacity-80">Location:</span> Tapan, Dakshin Dinajpur, West Bengal, India
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 text-right"
            >
              <span className="text-gray-400 text-sm">– </span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500 font-semibold"
              >
                Rahamat Ali
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = data.get('name');
              const email = data.get('email');
              const message = data.get('message');
              window.location.href = `mailto:myrahamat90@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name || '')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-300">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-yellow-400/50" />
              </div>
              <div>
                <label className="text-xs text-gray-300">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-yellow-400/50" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs text-gray-300">Message</label>
              <textarea name="message" rows={6} required className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-yellow-400/50" />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-gray-400">Responses typically within 24–48 hours.</span>
              <button type="submit" className="rounded-lg bg-gradient-to-tr from-yellow-400 to-amber-500 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-yellow-500/30 hover:from-yellow-300 hover:to-amber-400 transition">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </Section>
    </div>
  );
}
