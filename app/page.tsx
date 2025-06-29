"use client"
import { slideRight } from '@/motion/variants/slideRight';
import photo from '../public/pgng.png'
import { Experience } from './components/experience';
import { Project } from "./components/projects";
import { motion } from 'framer-motion';
export default function Home() {
    return (
        <>
            <div
                className="bg-gradient-to-b to-background2 flex flex-col justify-center min-h-screen py-8 px-2 pb-20 gap-2 sm:p-20"
            >
                <motion.div 
                    initial = {slideRight.initial}
                    whileInView = {slideRight.animate}
                    exit = {slideRight.exit}
                    transition={slideRight.transition}
                    
                    className='flex flex-col gap-2'>
                    
                    <p className="text-xl font-semibold">Hello, I&apos;m Hamid</p>
                    <h1 className="text-4xl font-extrabold">A <span className="text-primary">Fullstack</span> Developer</h1>
                    <p className=" text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias vel autem mollitia fugit dolores praesentium similique corporis odit, sunt quaerat soluta ipsam, facilis aliquam error aperiam sequi voluptates natus!</p>
                    <a href="/files/Usman Abdulhamid.docx" download className="w-fit hover:bg-gradient-to-r hover:to-background2 transition duration-500 ease-in-out px-6 py-[10px] rounded-sm bg-primary">Download CV</a>
                </motion.div>
            </div>
            
            <section className=" bg-background2 flex flex-col  py-8 px-2 pb-20 gap-5 sm:p-20">
                <h3 className="text-2xl font-bold">Projects</h3>
                <div className="flex justify-center flex-wrap gap-4 px-2">
                    <Project 
                        photo={photo}
                        project="Project Genius"
                        description= "To foster a generation of problem solvers who address local challenges with sustainable and innovative solutions"
                        site="https://www.projectgenius.com.ng/"
                        delay={0.2 * 0}
                    />
                    <Project 
                        photo={photo}
                        project="Project Genius"
                        description= "To foster a generation of problem solvers who address local challenges with sustainable and innovative solutions"
                        site="https://www.projectgenius.com.ng/"
                        delay={0.2 * 1}/>
                    <Project 
                        photo={photo}
                        project="Project Genius"
                        description= "To foster a generation of problem solvers who address local challenges with sustainable and innovative solutions"
                        site="https://www.projectgenius.com.ng/"
                        delay={0.2 * 2}/>
                    <Project 
                        photo={photo}
                        project="Project Genius"
                        description= "To foster a generation of problem solvers who address local challenges with sustainable and innovative solutions"
                        site="https://www.projectgenius.com.ng/"
                        delay={0.2 * 3}
                    />
                </div>

            </section>

            <section className="flex flex-col min-h-fit py-8 px-2 pb-20 gap-5 sm:p-20">
                <h3 className="text-2xl font-bold">Work Experience</h3>
                <div className="h-full flex flex-col md:flex-row gap-5 justify-start">
                    <Experience 
                        title='Backend Developer'
                        organization='Pistis TechHub'
                        start='Nov 2023'
                        end='April 2024'
                        remarks={["Developed the endpont for projects", "Worked on the user dashboard and managed the stats and included pagination"]}
                    />
                    <Experience 
                        title='Frontend Developer'
                        organization='ProjectGenius '
                        start='Nov 2024'
                        end='Present'
                        remarks={["Designed the frontend page from the ground up", "Handled all API integration", "Worked with zustand and react-query, Optizing the site performance by 40%"]}
                    />

                </div>
            </section>
            <section className="bg-background2 flex flex-col min-h-fit py-8 px-2 pb-20 gap-2 sm:p-20">
                <h3 className="text-2xl font-bold">Contact Me</h3>
                <div className="h-full grid md:grid-cols-2 gap-2">
                    <div className="bg-secondary p-4 w-full">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold">Email</h4>
                            <a href="" className="">abdulhamidusman218@gmail.com</a>
                        </div>
                    </div>
                    <div className="bg-secondary p-4 w-full">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold">Phone Number</h4>
                            <a href="" className="">+2348160803194</a>
                        </div>
                    </div>
                    <div className="bg-secondary p-4 w-full">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold">Online Handles</h4>
                            <div className="flex gap-2">
                                <a href="" className="">Github</a>
                                <a href="" className="">X</a>
                                <a href="" className="">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>

    );
}
