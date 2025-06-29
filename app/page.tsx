"use client"
import { slideRight } from '@/motion/variants/slideRight';
import photo from '../public/pgng.png'
import { Experience } from './components/experience';
import { Project } from "./components/projects";
import { motion } from 'framer-motion';
import { Header } from './components/headers';
import { Skillset } from './components/skillset';
import { RiRobot2Fill } from 'react-icons/ri';
import { FaCode, FaGithub, FaLinkedin, FaPhoneFlip, FaServer, FaX } from 'react-icons/fa6';
import { SiPostman, SiScrapy, SiTailwindcss } from 'react-icons/si';
import { IoMailUnreadSharp, IoShareSocial } from 'react-icons/io5';
import Link from 'next/link';
export default function Home() {
    return (
        <>
            <section id='home'
                className="bg-gradient-to-b to-background2 flex flex-col justify-center min-h-screen py-8 px-2 pb-20 gap-2 sm:p-20"
            >
                <motion.div 
                    initial = {slideRight.initial}
                    whileInView = {slideRight.animate}
                    exit = {slideRight.exit}
                    transition={slideRight.transition}
                    
                    className='flex flex-col gap-2'>
                    
                    <p className="text-xl md:text-2xl font-semibold">Hallo, I&apos;m Hamid</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold">A <span className="bg-gradient-to-r from-primary to-primary-fade bg-clip-text text-transparent">Fullstack</span> Developer</h1>
                    <p className=" text-lg">I am a fullstack developer with over 4 years of building and maintaining scalable web applications across both frontend and backend technologies.</p>
                    <a href="/files/Usman Abdulhamid.docx" download className="hover:shadow-md shadow-primary-fade w-fit px-6 py-[10px] rounded-md hover:bg-gradient-to-r active:bg-gradient-to-r active:to-background2 hover:to-background2 transition duration-500 ease-in-outrounded-sm bg-primary">Download CV</a>
                </motion.div>
            </section>
            
            <section id='projects' className="w-full bg-background2 flex flex-col  py-8 px-2 pb-20 gap-5 sm:py-20 sm:px-20 lg:px-20">
                <Header heading={"Recent Projects"}/>
                <div className="flex justify-center flex-wrap gap-2">
                    <Project 
                        photo={photo}
                        project="Project Genius"
                        description= "To foster a generation of problem solvers who address local challenges with sustainable and innovative solutions"
                        site="https://www.projectgenius.com.ng/"
                        delay={0.2 * 0}
                    />
                </div>

            </section>

            <section id='experience' className="bg-radial-[at_20%_25%]  to-50% from-secondary to-background2 flex flex-col min-h-fit py-8 px-2 pb-20 gap-5 sm:p-20">
                <h3 className="text-2xl font-bold">Work Experience</h3>
                <div className="h-full flex flex-col md:flex-row gap-5 justify-start">
                    
                    <Experience 
                        title='Frontend Developer'
                        organization='ProjectGenius '
                        start='Nov 2024'
                        end='Present'
                        remarks={["Designed the frontend page from the ground up", "Handled all API integration", "Worked with zustand and react-query to optimize site performance by 40%"]}
                    />
                    <Experience 
                        title='Backend Developer'
                        organization='Pistis TechHub'
                        start='Nov 2023'
                        end='April 2024'
                        remarks={["Developed the endpont for projects", "Worked on the user dashboard and managed the stats and included pagination"]}
                    />

                </div>
            </section>
            <section id='skillset' className="bg-background2 flex flex-col min-h-fit py-8 px-2 pb-20 gap-5 sm:p-20">
                <Header 
                    heading="Skill Set"
                />
                <div className="h-full grid place-content-center lg:grid-cols-3 gap-5">
                    
                    <Skillset
                        tech='Fullstack Development'
                        description='NextJS | Django REST | TypeScript | Python'
                        // delay={0.2 * 0}
                        icon={FaCode}
                    />
                    <Skillset
                        tech='AI Integration'
                        description='LangChain | Ollama | Mistral'
                        // delay={0.2 *1}
                        icon={RiRobot2Fill}
                    />
                    <Skillset
                        tech='Web Scraping'
                        description='Scrapy | Selenium'
                        // delay={0.2 * 2}
                        icon={SiScrapy}
                    />
                    <Skillset
                        tech='API Documentation'
                        description='Postman'
                        // delay={0.2 * 3}
                        icon={SiPostman}
                    />
                    <Skillset
                        tech='Responsive Design'
                        description='Tailwind | FramerMotion'
                        // delay={0.2 * 4}
                        icon={SiTailwindcss}
                    />
                    <Skillset
                        tech='Hosting Services'
                        description='Supabase | Vercel | Render'
                        // delay={0.2 * 5}
                        icon={FaServer}
                    />

                </div>
            </section>
            <section id='contact' className="bg-background2 flex flex-col min-h-fit py-8 px-2 pb-20 gap-2 sm:p-20">
                <h3 className="text-2xl font-bold">Contact Me</h3>
                <div className="h-full grid md:grid-cols-2 gap-2">
                    <div className="bg-secondary flex gap-3 items-start p-4 w-full">
                        <IoMailUnreadSharp className='text-primary-fade' size={40}/>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold">Email</h4>
                            <a href="" className="">abdulhamidusman218@gmail.com</a>
                        </div>
                    </div>
                    <div className="bg-secondary flex gap-3 items-start p-4 w-full">
                        <FaPhoneFlip className='text-primary-fade' size={40}/>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold">Phone Number</h4>
                            <a href="" className="">+2348160803194</a>
                        </div>
                    </div>
                    <div className="bg-secondary p-4 w-full">
                        <div className="flex gap-4">
                            <IoShareSocial className='text-primary-fade' size={40}/>
                            <div className='flex flex-col gap-4'>
                                
                                <h4 className="text-xl font-bold">Online Handles</h4>
                                <div className="flex gap-3">
                                    <a href="" className=""><FaGithub size={25}/> </a>
                                    <a href="" className=""><FaLinkedin size={25} /></a>
                                    <Link href="mailto:abdulhamidusman218@gmail.com" className=""><FaX size={25} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>

    );
}
