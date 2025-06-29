import photo from '../public/pgng.png'
import { Project } from "./components/projects";

export default function Home() {
    return (
        <>
            <section
                className="bg-gradient-to-b to-background2 flex flex-col justify-center min-h-screen py-8 px-2 pb-20 gap-2 sm:p-20"
            >
                <p className="text-xl font-semibold">Hello, I&apos;m Hamid</p>
                <h1 className="text-4xl font-extrabold">A <span className="text-primary">Fullstack</span> Developer</h1>
                <p className=" text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias vel autem mollitia fugit dolores praesentium similique corporis odit, sunt quaerat soluta ipsam, facilis aliquam error aperiam sequi voluptates natus!</p>
                <a href="/files/Usman Abdulhamid.docx" download className="w-fit hover:bg-gradient-to-r hover:to-background2 transition duration-500 ease-in-out px-6 py-[10px] rounded-sm bg-primary">Download CV</a>
            </section>
            
            <section className=" bg-background2 flex flex-col  py-8 px-2 pb-20 gap-5 sm:p-20">
                <h3 className="text-2xl font-bold">Projects</h3>
                <div className="flex justify-center flex-wrap gap-4 px-2">
                    <Project 
                        photo={photo}
                        project="Project Genius"
                        description= "To foster a generation of problem solvers who address local challenges with sustainable and innovative solutions"
                        site="https://www.projectgenius.com.ng/"
                    />
                    <Project 
                        photo={photo}
                        project="Project Genius"
                        description= "To foster a generation of problem solvers who address local challenges with sustainable and innovative solutions"
                        site="https://www.projectgenius.com.ng/"
                    />
                    <Project 
                        photo={photo}
                        project="Project Genius"
                        description= "To foster a generation of problem solvers who address local challenges with sustainable and innovative solutions"
                        site="https://www.projectgenius.com.ng/"
                    />
                    <Project 
                        photo={photo}
                        project="Project Genius"
                        description= "To foster a generation of problem solvers who address local challenges with sustainable and innovative solutions"
                        site="https://www.projectgenius.com.ng/"
                    />
                </div>

            </section>

            <section className="flex flex-col min-h-fit py-8 px-2 pb-20 gap-5 sm:p-20">
                <h3 className="text-2xl font-bold">Work Experience</h3>
                <div className="h-full flex flex-col gap-5 justify-start">
                    <div className="flex gap-3">
                        <div className="h-fit w-fit flex flex-col items-center">
                            <div className="animate-pulse border-primary border-4 rounded-full p-2 w-fit "></div>
                            <div className="min-h-full w-[2px] bg-primary"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-xl flex flex-col items-start">Backend Developer</h4>
                            <p className="italic font-bold">Pistis TechHub <span className="font-normal">Nov 2023 - April 2024</span></p>
                            <ul className="ml-7">
                                <li className=" decoration-dashed decoration-white list-disc" >Developed the the endpont projects</li>
                                <li className=" decoration-dashed decoration-white list-disc" >Worked on the user dashboard and managed the stats and included pagination</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="h-fit w-fit flex flex-col items-center">
                            <div className="animate-pulse border-primary border-4 rounded-full p-2 w-fit "></div>
                            <div className="min-h-full w-[2px] bg-primary"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-xl flex flex-col items-start">Frontend Developer</h4>
                            <p className="italic font-bold">ProjectGenius <span className="font-normal">Nov 2023 - April 2024</span></p>
                            <ul className="ml-7">
                                <li className="decoration-white list-disc" >Designed the frontend page from the ground up</li>
                                <li className="decoration-white list-disc" >Handled all API integration</li>
                                <li className="decoration-white list-disc" >Worked with zustand and react-query, Optizing the site performance by 40%</li>
                            </ul>
                        </div>
                    </div>

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
