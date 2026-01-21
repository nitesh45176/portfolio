import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Taskora",
    description: "A MERN-based task execution platform where users post tasks and runners complete them securely.",
    image: "/projects/taskora.png",
    tags: ["Reactjs", "Tailwindcss", "Nodejs", "Expressjs", "mongodb"],
    demoUrl: "https://taskora-ygjk.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/Taskora",
  },
  {
    id: 2,
    title: "Hotel Booking Platform",
    description: "A full-stack hotel booking platform with JWT authentication, room management, and booking system.",
    image: "/projects/HotelBooking.png",
    tags: ["Reactjs", "Tailwindcss", "Nodejs", "Expressjs", "mongodb"],
    demoUrl: "https://hotel-booking-beta-ochre.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/Hotel-booking",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description:
      "A modern expense tracking application that helps users monitor their spending habits and manage their budget effectively...",
    image: "/projects/Expense.png",
    tags: ["Reactjs", "Tailwindcss", "Nodejs", "Expressjs", "mongodb"],
    demoUrl: "https://expense-tracker-sigma-lime-14.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/Expense-Tracker",
  },
  {
    id: 4,
    title: "Virtual R",
    description:
      "A modern, responsive landing page for VR development tools built with React.js and Tailwind CSS. Features sleek dark theme design, smooth animations, and professional layout showcasing VR build tools for developers.",
    image: "/projects/virtual.png",
    tags: ["React", "tailwindcss"],
    demoUrl: "https://virtual-r-beta-seven.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/virtualR",
  },
  {
    id: 5,
    title: "Vastuspaze",
    description:
      "Professional home renovation services landing page built with React.js and Tailwind CSS. Features clean, modern design with elegant typography, responsive layout, and compelling visual elements to showcase expert renovation and interior design services.",
    image: "/projects/Vastu.png",
    tags: ["React", "tailwindcss"],
    demoUrl: "https://vastuspaze-steel.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/vastuspaze",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/nitesh45176"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
