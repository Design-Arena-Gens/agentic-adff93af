'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Sparkles,
  BookOpen,
  Users,
  Target,
  Award,
  ChevronRight,
  Cpu,
  GraduationCap,
  Globe,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold gradient-text">IIFS</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition">Features</a>
              <a href="#programs" className="text-gray-700 hover:text-primary-600 transition">Programs</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
            </div>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Transforming Education with AI</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Indian Institute of
              <br />
              <span className="gradient-text">Future Skills</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Revolutionizing Indian education through AI-powered personalized learning,
              skill development, and career readiness for the digital age.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition flex items-center justify-center space-x-2 group">
                <span>Start Learning</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-50 transition border-2 border-primary-600">
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: "100K+", label: "Students" },
                { number: "500+", label: "Courses" },
                { number: "95%", label: "Success Rate" },
                { number: "50+", label: "Partners" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600">{stat.number}</div>
                  <div className="text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">IIFS</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of education with our AI-driven platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "AI-Powered Learning",
                description: "Personalized curriculum that adapts to your learning pace and style"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Skill-Based Education",
                description: "Focus on practical skills that matter in today's job market"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Expert Mentorship",
                description: "Learn from industry experts and experienced educators"
              },
              {
                icon: <Cpu className="w-12 h-12" />,
                title: "Cutting-Edge Technology",
                description: "Access to latest tools and technologies used in the industry"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Global Recognition",
                description: "Certificates recognized by leading companies worldwide"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Fast-Track Programs",
                description: "Accelerated learning paths for quick career transitions"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition group"
              >
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-primary-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Choose from our diverse range of future-ready programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-10 h-10" />,
                title: "AI & Machine Learning",
                duration: "12 Months",
                level: "Advanced",
                skills: ["Deep Learning", "NLP", "Computer Vision"]
              },
              {
                icon: <Cpu className="w-10 h-10" />,
                title: "Full Stack Development",
                duration: "10 Months",
                level: "Intermediate",
                skills: ["React", "Node.js", "Databases"]
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Data Science",
                duration: "11 Months",
                level: "Advanced",
                skills: ["Python", "Statistics", "ML Algorithms"]
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Cloud Computing",
                duration: "8 Months",
                level: "Intermediate",
                skills: ["AWS", "Azure", "DevOps"]
              },
              {
                icon: <Sparkles className="w-10 h-10" />,
                title: "UI/UX Design",
                duration: "6 Months",
                level: "Beginner",
                skills: ["Figma", "User Research", "Prototyping"]
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Blockchain",
                duration: "9 Months",
                level: "Advanced",
                skills: ["Solidity", "Web3", "Smart Contracts"]
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <div className="flex items-center space-x-4 text-sm mb-4 text-primary-100">
                  <span>⏱️ {program.duration}</span>
                  <span>📊 {program.level}</span>
                </div>
                <div className="space-y-2 mb-4">
                  {program.skills.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-300" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-white text-primary-600 py-2 rounded-lg hover:bg-primary-50 transition font-medium">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming India's <span className="gradient-text">Education Landscape</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                IIFS was founded with a vision to bridge the gap between traditional education
                and the skills demanded by the modern workforce. We leverage AI and cutting-edge
                pedagogy to create personalized learning experiences.
              </p>
              <div className="space-y-4">
                {[
                  "AI-driven personalized learning paths",
                  "Industry-recognized certifications",
                  "Hands-on project-based learning",
                  "Career support and placement assistance",
                  "Community of 100,000+ learners"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
                <GraduationCap className="w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="mb-6">
                  To empower every Indian student with future-ready skills through accessible,
                  affordable, and world-class AI-powered education.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg">
                    <Award className="w-8 h-8 mb-2" />
                    <div className="text-2xl font-bold">Top Rated</div>
                    <div className="text-sm text-primary-100">4.9/5 Rating</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg">
                    <Users className="w-8 h-8 mb-2" />
                    <div className="text-2xl font-bold">100K+</div>
                    <div className="text-sm text-primary-100">Active Students</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Shape Your Future?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of students who are already learning the skills of tomorrow
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-50 transition text-lg font-medium">
              Start Your Journey Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-primary-400" />
                <span className="text-xl font-bold">IIFS</span>
              </div>
              <p className="text-gray-400">
                Indian Institute of Future Skills - Transforming education for tomorrow
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">AI & ML</a></li>
                <li><a href="#" className="hover:text-white transition">Full Stack</a></li>
                <li><a href="#" className="hover:text-white transition">Data Science</a></li>
                <li><a href="#" className="hover:text-white transition">Cloud Computing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IIFS - Indian Institute of Future Skills. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
