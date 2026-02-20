import { useState, useEffect } from 'react';
import {
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Rocket,
  Award,
  TrendingUp,
  Mail,
  Linkedin,
  Phone,
  Download,
  ExternalLink,
  
  Menu,
  X,
  ChevronRight,
  Briefcase,
  GraduationCap,
  CheckCircle2
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'achievements', 'experience', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Inter',sans-serif]">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Achievements', 'Experience', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors ${activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-cyan-400'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-cyan-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {['Home', 'About', 'Skills', 'Achievements', 'Experience', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-6 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-5xl font-bold text-cyan-400">
                MA
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Blending <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Innovation</span>
            <br />with Full-Stack Engineering
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up-delay">
            Sr. AI Full-Stack Engineer with <span className="text-cyan-400 font-semibold">6+ years</span> of experience building cloud-native applications with AI/LLMs, automation, and scalable full-stack systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up-delay-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-delay">
            {[
              { icon: Brain, text: 'LLMs & RAG Systems' },
              { icon: Cloud, text: 'Cloud-Native Deployment' },
              { icon: Code2, text: 'Full Stack (React + Python + Node)' },
              { icon: GitBranch, text: 'DevOps (Docker/Kubernetes/CI-CD)' }
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm"
              >
                <badge.icon size={16} className="text-cyan-400" />
                <span className="text-gray-300">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="bg-[#111111] border border-cyan-500/10 rounded-2xl p-8 md:p-12 hover:border-cyan-500/30 transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm <span className="text-cyan-400 font-semibold">Muneeb Ahmad</span>, a Sr. Full-Stack AI Developer with <span className="text-cyan-400 font-semibold">6+ years of experience</span> building scalable, cloud-native applications that combine AI/LLMs, automation, and full-stack development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I've delivered <span className="text-cyan-400 font-semibold">production-grade AI solutions</span> across healthcare, legal, hospitality, automobile, and IT industries. My expertise lies in taking projects from wireframes to deployment while ensuring speed, security, and scalability.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about leveraging cutting-edge AI technologies and modern full-stack frameworks to build intelligent systems that solve real-world problems and drive business value.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Programming Languages', icon: Code2, skills: ['Python', 'Node.js', 'JavaScript', 'TypeScript'] },
              { title: 'AI Frameworks', icon: Brain, skills: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'CamelAI', 'AgnoAI'] },
              { title: 'AI Integrations', icon: Cloud, skills: ['OpenAI Assistants API', 'Claude API', 'Gemini API', 'IBM Watson', 'Azure AI'] },
              { title: 'API Development & Integrations', icon: Database, skills: ['REST & GraphQL APIs', 'Stripe', 'Twilio', 'Google Maps', 'Google Drive', 'Snowflake', 'Binance', 'MailChimp', 'TensorFlow Serving', 'Custom APIs'] },
              { title: 'Web (Backend)', icon: Briefcase, skills: ['Django', 'DRF', 'Flask', 'FastAPI', 'Streamlit', 'Celery', 'AI Suite', 'Semantic Kernel'] },
              { title: 'Databases', icon: Database, skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis'] },
              { title: 'Web (Frontend)', icon: Code2, skills: ['React.js', 'Next.js', 'Vue.js', 'Angular (MEAN)', 'MERN', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'jQuery'] },
              {title: 'DevOps & Cloud / Testing', icon: GitBranch, skills: ['AWS (Lambda, S3, EC2)', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI/CD', 'Pytest', 'Unittest', 'Locust', 'JMeter', 'Selenium Testing']},
              { title: 'Web Scraping', icon: Rocket, skills: ['Selenium', 'Playwright', 'Scrapy', 'BeautifulSoup4', 'ScraperGraph AI'] },
              
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-[#111111] border border-cyan-500/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <category.icon size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="text-gray-400 text-sm flex items-start gap-2">
                      <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Key <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: '40% Efficiency Improvement',
                description: 'Improved client efficiency by up to 40% by deploying AI assistants, RAG pipelines, and intelligent agents.'
              },
              {
                icon: Rocket,
                title: 'LLM-Powered Platforms',
                description: 'Built and scaled LLM-powered platforms using LangChain, CrewAI, LangGraph, Hugging Face, deployed on AWS with Docker/Kubernetes + CI/CD.'
              },
              {
                icon: Code2,
                title: 'Full-Stack Applications',
                description: 'Engineered end-to-end full-stack applications using FastAPI/Django + React/Next/Vue with complex API integrations (Stripe, Twilio, PayPal, Binance, SendGrid).'
              },
              {
                icon: Award,
                title: 'ETL & Automation',
                description: 'Developed ETL workflows and automation systems using Selenium, Playwright, and Scrapy to reduce manual workloads.'
              }
            ].map((achievement, idx) => (
              <div
                key={idx}
                className="bg-[#111111] border border-cyan-500/10 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4">
                  <achievement.icon size={28} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{achievement.title}</h3>
                <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                company: 'Hashlogics',
                location: 'Remote',
                position: 'Sr. AI Fullstack Engineer | Integration Specialist',
                period: 'May 2023 – Present',
                responsibilities: [
                  'Led end-to-end AI-powered applications focusing on LLMs, RAG, and intelligent agents',
                  'Designed production-grade LLM systems with LangChain, CrewAI, LangGraph, Composio',
                  'Built cloud-native platforms using FastAPI/Django/Flask + React/Next',
                  'Deployed on AWS using Docker/Kubernetes with CI/CD',
                  'Implemented enterprise security guardrails (token-level filters, privacy-by-design)'
                ]
              },
              {
                company: 'Devno Sol',
                location: 'Lahore, Pakistan',
                position: 'Full-Stack Engineer',
                period: 'Aug 2020 – Apr 2023',
                responsibilities: [
                  'Built scalable web apps using Django/Flask + React/Vue',
                  'Developed REST & GraphQL APIs and integrated Stripe, PayPal, Twilio, SendGrid, Binance',
                  'Optimized PostgreSQL/MySQL/MongoDB for performance and scalability',
                  'Built ETL pipelines and analytics dashboards',
                  'Implemented CI/CD, automated testing, and mono-repo architecture'
                ]
              },
              {
                company: 'Cubic Solutions',
                location: 'Lahore, Pakistan',
                position: 'Web Developer',
                period: 'Jan 2019 – Mar 2020',
                responsibilities: [
                  'Built web scraping and automation workflows with Scrapy, Selenium, Playwright',
                  'Extracted large-scale datasets for e-commerce, finance, real estate',
                  'Automated emails, web forms, and workflows',
                  'Built responsive websites with HTML/CSS/JS/Bootstrap/jQuery',
                  'Ensured reliability via testing and monitoring'
                ]
              }
            ].map((job, idx) => (
              <div
                key={idx}
                className="bg-[#111111] border border-cyan-500/10 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Briefcase size={24} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-1">{job.company}</h3>
                    <p className="text-lg text-gray-300 mb-1">{job.position}</p>
                    <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-gray-500">
                      <span>{job.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="text-gray-400 flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111111] border border-cyan-500/10 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4">
                <GraduationCap size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Education</h3>
              <p className="text-lg text-gray-300 mb-2">Bachelor's in Computer Science</p>
              <p className="text-gray-400 mb-1">Minhaj University Lahore</p>
              <p className="text-sm text-gray-500">Jul 2014 – Aug 2018</p>
            </div>

            <div className="bg-[#111111] border border-cyan-500/10 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4">
                <Award size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Certification</h3>
              <p className="text-lg text-gray-300 mb-2">AI Development Certification</p>
              <p className="text-gray-400 mb-3">Pro-5 • April 2024</p>
              <p className="text-sm text-gray-500">
                Focus: LLM-powered apps, RAG pipelines, LangChain, Hugging Face, FastAPI, cloud deployment, security, DevOps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}



      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 text-center">Building systems that solve real problems</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Schole.Ai',
                description: 'Schole is a personalized learning platform rooted in EPFL’s Machine Learning for Education Lab, translating cutting-edge research in LLMs and knowledge tracing into scalable AI-driven education. Led the design and deployment of production-grade AI systems enabling intelligent, adaptive learning experiences.',
                tags: ['Django', 'Next.js', 'OpenAI', 'LangChain', 'Pinecone', 'PostgreSQL', 'AWS', 'Terraform'],
                caseStudyLink: 'https://schole.ai',
                
              },
              {
                title: 'Waltz.Ai',
                description: 'AI-powered campaign production platform enabling teams to generate, and manage web-based marketing experiences using AI. Built end-to-end AI-driven workflows for campaign creation, content generation, and interactive web pages, integrating scalable full-stack and AI components for production use.',
                tags: ['NestJS', 'FastAPI', 'Next.js', 'Anthropic AI', 'PostgreSQL', 'Supabase', 'AWS'],
                caseStudyLink: 'https://app.waltz-ai.com',
                
              },
              {
                title: 'Metro Cash n Carry',
                description: 'Led backend and DevOps development for Metro’s multi-city e-commerce platform, building scalable B2B and B2C systems managing multiple stores, inventory, and orders. Designed robust APIs, AI-assisted workflows, data pipelines, and cloud infrastructure ensuring high-performance operations.',
                tags: ['NestJS', 'React', 'Next.js', 'OpenAI', 'MySQL', 'Redis', 'AWS', 'Twilio'],
                caseStudyLink: 'https://www.metro-online.pk',
                
              },
              {
                title: 'TAAPI.IO',
                description: 'Developed scalable backend systems for TAAPI.IO, a REST API delivering real-time technical analysis indicators for US stocks and cryptocurrencies. Built microservices architecture, optimized high-frequency data pipelines, and ensured reliable low-latency market data access.',
                tags: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Valkey', 'BullMQ', 'DigitalOcean', 'CI/CD'],
                caseStudyLink: 'https://taapi.io',
                
              },
              {
                title: 'Dalmore Group',
                description: 'Built secure backend and full-stack systems for a FINRA-registered broker-dealer supporting Reg A+, Reg CF, and Reg D offerings. Developed scalable APIs and investor platforms for onboarding, deal management, and regulatory-compliant financial workflows.',
                tags: ['NestJS', 'FastAPI', 'React', 'PostgreSQL', 'Render', 'Persona', 'Twilio', 'BullMQ', 'CI/CD'],
                caseStudyLink: 'https://dalmoregroup.com',
                
              },
              {
                title: 'OODA Technologies',
                description: 'Designed and developed customized applications focused on data analysis, visualization, and scientific consulting. Built scalable microservices and interactive dashboards delivering actionable insights for business, organizations and research applications.',
                tags: ['Node.js', 'Express', 'Django', 'React', 'MongoDB', 'PostgreSQL', 'Elasticsearch', 'DigitalOcean', 'CI/CD'],
                caseStudyLink: 'https://www.ooda.ca',
                
              }

            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-[#111111] border border-cyan-500/10 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.caseStudyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Case Study
                  </a>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'RAG Knowledge Assistant Platform',
                description: 'Built an intelligent knowledge retrieval system using RAG architecture with LangChain and vector databases to provide accurate, context-aware responses.',
                tags: ['LangChain', 'RAG', 'FastAPI', 'React', 'PostgreSQL']
                
              },
              {
                title: 'Agentic Workflow Automation System',
                description: 'Developed a multi-agent system using CrewAI and LangGraph for complex workflow orchestration and task automation.',
                tags: ['CrewAI', 'LangGraph', 'Python', 'AWS', 'Docker']
              },
        

              {
                title: 'Cloud-Native AI SaaS Dashboard',
                description: 'Engineered a scalable SaaS platform with real-time analytics, user management, and AI-powered insights deployed on AWS.',
                tags: ['Next.js', 'Django', 'AWS', 'Kubernetes', 'PostgreSQL']
              },
              {
                title: 'LLM-Based Legal AI Assistant',
                description: 'Created an AI assistant for legal document analysis and generation using fine-tuned LLMs with enterprise security guardrails.',
                tags: ['OpenAI', 'FastAPI', 'Vue.js', 'Redis', 'CI/CD']
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-[#111111] border border-cyan-500/10 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                { <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={16} />
                    View Case Study
                  </button>
                  <button className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Github size={16} />
                    GitHub
                  </button>
                </div> }
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>

          <p className="text-xl text-gray-400 text-center mb-12">
            Open to AI/full-stack roles, collaborations, and consulting opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:muneebdev3@gmail.com"
              className="flex items-center gap-3 p-4 bg-[#111111] border border-cyan-500/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Mail size={24} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-300 text-sm">muneebdev3@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/muneebdev3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[#111111] border border-cyan-500/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Linkedin size={24} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="text-gray-300 text-sm">muneebdev3</p>
              </div>
            </a>

            <a
              href="tel:+923119877645"
              className="flex items-center gap-3 p-4 bg-[#111111] border border-cyan-500/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Phone size={24} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-300 text-sm">+92 311 987 7645</p>
              </div>
            </a>
          </div>

          {/* <div className="bg-[#111111] border border-cyan-500/10 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div> */}

          <div className="mt-8 text-center">
            <div className="flex justify-center gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Download size={20} />
                Download Resume
              </a>

              <a
                href="https://calendly.com/muneebdev3/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                <ExternalLink size={20} />
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-gray-500">
            © 2024 Muneeb Ahmad. Built with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
