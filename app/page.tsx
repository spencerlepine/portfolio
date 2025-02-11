import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import StackIcon from 'tech-stack-icons';

const config = {
  name: 'Spencer Lepine',
  headerLogo: '/assets/logo.png',
  landingPhoto: '/assets/profile-picture.webp',
  title: 'Software Engineer',
  location: 'Seattle, WA',
  about:
    "I'm a Software Engineer based in Seattle, currently serving part-time in the Army Reserve. With a primary focus on full-stack development, I'm also passionate about DevOps, open-source, and everything cloud. When I'm not coding, you can find me traveling, hiking scenic trails, or enjoying a classic 90s film.",
  aboutPhoto: '/assets/headshot.webp',
  heroTofuEndpoint: 'https://public.herotofu.com/v1/8a20de80-e812-11ef-91ab-497918027bf8',
  socialLinks: [
    { name: 'GitHub', icon: Github, url: 'https://github.com/spencerlepine.co' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/spencerlepine' },
    { name: 'Email', icon: Mail, url: 'mailto:spencer.sayhello@gmail.com' },
  ],
  skills: [
    { name: 'React', icon: 'reactjs', color: '#61DAFB' },
    { name: 'Node.js', icon: 'nodejs', color: '#339933' },
    { name: 'JavaScript ES6+', icon: 'js', color: '#d6c317' },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
    { name: 'Python', icon: 'python', color: '#d6c317' },
    { name: 'MongoDB', icon: 'mongodb', color: '#4ca53f' },
    { name: 'PostgreSQL', icon: 'postgresql', color: '#31648c' },
    { name: 'Docker', icon: 'docker', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'kubernetes', color: '#2496ED' },
    { name: 'GitHub Actions', icon: 'github', color: '#2496ED' },
    { name: 'AWS', icon: 'aws', color: 'c78100' },
    { name: 'RESTful API', icon: '', color: '#7c7c7c' },
  ],
  experiences: [
    {
      image: '/assets/aws-logo.webp',
      company: 'Amazon Web Services (AWS)',
      position: 'Frontend Engineer',
      period: 'Nov 2022 - Present',
      description: '{ status: "in-progress" }',
    },
    {
      image: '/assets/us-army-reserve-logo.webp',
      company: 'U.S. Army Reserve',
      position: 'IT Specialist',
      period: 'Nov 2021 - Present',
      description:
        'Providing IT support and troubleshooting for division-level command in a fast-paced environment, with a focus on end-user support, junior staff training, technical documentation, IT accounts administration, and team collaboration.',
    },
    {
      image: '/assets/grad-cap.jpg',
      company: 'Hack Reactor',
      position: 'Student | Software Engineering Immersive',
      period: 'Jul 2021 - Oct 2021',
      description:
        'Completed over 900+ hours of coding to master Javascript, Node.js, React, Express, and SQL and NoSQL databases in AGILE environment. This program is one of the top coding bootcamps and features a rigorous admissions process and demanding schedule.',
    },
  ],
  projects: [
    {
      name: 'SwagSticker.com',
      description: 'Full-stack E-commerce store for developer laptop stickers.',
      image: '/assets/swagsticker-thumbnail.webp',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Stripe', 'Printify'],
      link: 'https://github.com/spencerlepine/swagsticker.com',
    },
    {
      name: 'Printify Node.js SDK',
      description: 'Open-source TypeScript SDK for the Printify REST API (npm package)',
      image: '/assets/printify-sdk-js-thumbnail.webp',
      technologies: ['TypeScript', 'Node.js', 'REST API', 'JavaScript'],
      link: 'https://github.com/spencerlepine/printify-sdk-js',
    },
    {
      name: 'QuickCart',
      description: 'Cloud-based grocery shopping list app with product search, barcode scanning, and nutrition tracking.',
      image: '/assets/quickcart-thumbnail.webp',
      technologies: ['React', 'Firebase', 'Firestore NoSQL', 'Material-UI', 'Heroku'],
      link: 'https://github.com/spencerlepine/quickcart',
    },
    {
      name: 'Atelier API',
      description: 'E-commerce REST API scaled for production traffic with K6 load testing and optimized PostgreSQL database.',
      image: '/assets/atelier-api-thumbnail.webp',
      technologies: ['Node.js', 'Docker', 'AWS EC2', 'PostgreSQL', 'NGINX'],
      link: 'https://github.com/spencerlepine/atelier-ecommerce-api',
    },
  ],
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 bg-white z-10 shadow-sm mx-auto max-w-3xl">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <img src={config.headerLogo} alt={config.name} width={50} height={50} className="" />
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Profile Section */}
        <section className="text-center mb-12">
          <Image src={config.landingPhoto} alt={config.name} width={150} height={150} className="rounded-full mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">{config.name}</h1>
          <p className="text-xl mb-2">{config.title}</p>
          <p className="text-gray-600 mb-4">{config.location}</p>
          <div className="flex justify-center space-x-4">
            {config.socialLinks.map(link => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {config.skills.map(skill => (
              <div key={skill.name} className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
                <StackIcon name={skill.icon} className="w-6 h-6" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8">
              <p className="mb-4">{config.about}</p>
            </div>
            <div className="md:w-1/3">
              <Image src={config.aboutPhoto} alt="About Me" width={200} height={200} className="rounded-lg" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="relative space-y-8">
            {config.experiences.map((experience, index) => (
              <div key={index} className="flex items-start relative">
                <div className="flex flex-col items-center mr-4">
                  {index !== config.experiences.length - 1 && <div className="absolute top-[32px] w-px h-full bg-border border-2 -translate-x-1/2" />}

                  <Image src={experience.image} alt={experience.company} width={50} height={50} className="rounded-full z-10 relative bg-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{experience.company}</h3>
                  <p className="text-muted-foreground text-blue-600">{experience.position}</p>
                  <p className="text-sm text-muted-foreground">{experience.period}</p>
                  <p className="mt-2 text-gray-600 max-w-3xl">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Portfolio</h2>
            <div className="space-y-8">
              {config.projects.map((project, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image src={project.image} alt={`${project.name} project thumbnail`} width={600} height={400} className="w-full h-56 object-cover md:h-full" />
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="mb-4">
                          <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                          <p className="text-gray-600">{project.description}</p>
                        </div>
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <form action={config.heroTofuEndpoint} method="post" acceptCharset="UTF-8" className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Full name
              </label>
              <input type="text" id="name" name="name" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Your email
              </label>
              <input type="email" id="email" name="email" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Your message
              </label>
              <textarea id="message" name="message" rows={4} className="w-full border rounded px-3 py-2" required></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            {config.socialLinks.map(link => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.name} social link`}>
                <link.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-600">© 2024 {config.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
