import '@/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from '@/components/Banner.jsx'
import { NavBar } from '@/components/NavBar.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
// import Lanyard from './components/Lanyard.jsx';

import LogoLoop from './components/SkillLoop.jsx';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import ChromaGrid from '@/components/Project.jsx';
import ProfileCard from '@/components/ProfileCard.jsx';
import ShinyText  from '@/components/ShinyText.jsx';
import ElectricBorder from '@/components/ElectrcBorder.jsx';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  // { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  // Laravel
  //Go
  //Bootstrap
  //wireshark
  //Ubuntu
  //Kali Linux
  //robotik
];

const items = [
  {
    id: 1,
    // image: Proyek1,
    title: "Digital Forensics for Post-Incident Investigation",
    subtitle: "Platform and web cybersecurity analysis at PT Analis Forensik Digital",
    fullDescription: "A digital forensics project focused on post-incident investigation of platform and web-based cyber security cases at PT Analis Forensik Digital. This project involves analyzing digital evidence, system logs, and security artifacts to identify attack vectors and incident timelines. It demonstrates practical experience in forensic investigation workflows, evidence preservation, and cyber security analysis in a professional industry environment.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/diananisa",
    dad: "100",
  },
  {
    id: 2,
    // image: Proyek2,
    title: "Implementation Communication Security",
    subtitle: "Secure robot communication using AES-256 GCM encryption",
    fullDescription: "A secure communication system designed for robot-to-system data exchange using AES-256 GCM encryption. This project ensures data confidentiality, integrity, and authentication during real-time communication between robotic devices and control systems. It demonstrates the application of modern cryptographic techniques to protect critical robotic communication from unauthorized access and cyber threats.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/diananisa",
    dad: "200",
  },
  {
    id: 3,
    // image: Proyek2,
    title: "Pharmacy Management Website",
    subtitle: "A web-based system for pharmacy operations and inventory",
    fullDescription: "A web-based pharmacy management system designed to handle inventory control, transactions, and administrative operations. The website streamlines daily pharmacy activities through a centralized dashboard, improving efficiency, data management, and accuracy in managing pharmaceutical services.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/diananisa",
    dad: "200",
  },
  {
    id: 4,
    // image: Proyek2,
    title: "Cinema Mobile Application",
    subtitle: "A mobile application for cinema information and booking",
    fullDescription: "A mobile application developed to provide cinema information, schedules, and booking features in an intuitive user interface. This project focuses on application workflow, user experience, and mobile system integration, offering users a convenient way to access entertainment-related services.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/diananisa",
    dad: "200",
  },
];

// export default Image;

import Tools1 from "/Tools/vscode.png";
import Tools2 from "/Tools/reactjs.png";
import Tools3 from "/Tools/nextjs.png";
import Tools4 from "/Tools/tailwind.png";
import Tools5 from "/Tools/bootstrap.png";
import Tools6 from "/Tools/js.png";
import Tools7 from "/Tools/nodejs.png";
import Tools8 from "/Tools/github.png";
import Tools9 from "/Tools/ai.png";
import Tools10 from "/Tools/canva.png";
import Tools11 from "/Tools/figma.png";
import Tools12 from "/Tools/kotlin.png";
import Tools13 from "/Tools/firebase.png";
import Tools14 from "/Tools/html.png";
import Tools15 from "/Tools/css.png";
import Tools16 from "/Tools/ts.png";
import Tools17 from "/Tools/php.png";
import Tools18 from "/Tools/vite.png";
import Tools19 from "/Tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];


// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

function App() {
  return (
    <Router>
      <div className='App'>
    <NavBar />

    <div className="d-flex align-items-center justify-content-between px-5" style={{ marginTop: "100px" }}>
      <div style={{ flex: 6 }}>
        <Banner />
      </div>
      <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src="/Dian1.png" className="w-10 rounded-md" />
      </div>

      <div
        className="animate__animated animate__fadeInUp animate__delay-2s"
        style={{ flex: 1, display: "flex", justifyContent: "center", marginBottom: "430px", marginRight: "100px" }}
      >
        <ProfileCard
          name="Dian Anisa Putri"
          title="Cyber Security & Digital Forensics"
          handle="dyyansptr"
          status="Online"
          contactText="Contact Me"
          avatarUrl= "/Dian1.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </div>

            {/* <NavBar />
        <Banner /> */}
        {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
        {/* <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}> */}
          {/* Basic horizontal loop */}
          {/* <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            // fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          /> */}
          
          {/* Vertical loop with deceleration on hover */}
          {/* <LogoLoop
            logos={techLogos}
            speed={80}
            direction="up"
            logoHeight={48}
            gap={40}
            hoverSpeed={20}
            fadeOut
            /> */}
        {/* </div> */}
        {/* <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
          <ProfileCard
            name="Dian Anisa Putri"
            title="Robotika"
            handle="dyyansptr"
            status="Online"
            contactText="Contact Me"
            avatarUrl="../assets/img/myFoto.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div> */}

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='Project mt-32'>
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >My Project</h1>

          <div style={{ height: 'auto', position: 'relative', marginTop: "50px" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid 
              items={items}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>

        </div>
        <div className='ElectricBorder mt-32'>
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <div>
              <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
                A glowing, animated border wrapper.
              </p>
            </div>
          </ElectricBorder>

        </div>

        </div>
    </Router>
    
  )
}

export default App






