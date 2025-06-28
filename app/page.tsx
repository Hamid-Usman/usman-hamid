import Image from "next/image";
import photo from '../public/WhatsApp Image 2025-05-30 at 19.02.11_e8440328.jpg'
import Link from "next/link";
export default function Home() {
    return (
        <>
            <section
                className="bg-gradient-to-b to-background2 flex flex-col justify-center min-h-screen py-8 px-2 pb-20 gap-2 sm:p-20"
            >
                <p className="text-xl font-semibold">Hello, I&apos;m Hamid</p>
                <h1 className="text-4xl font-extrabold">A <span className="text-primary">Fullstack</span> Developer</h1>
                <p className=" text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias vel autem mollitia fugit dolores praesentium similique corporis odit, sunt quaerat soluta ipsam, facilis aliquam error aperiam sequi voluptates natus!</p>
                <button className="w-fit hover:bg-gradient-to-r hover:to-background2 transition duration-500 ease-in-out px-6 py-[10px] rounded-sm bg-primary">Download CV</button>
            </section>
            
            <section className=" bg-background2 flex flex-col  py-8 px-2 pb-20 gap-2 sm:p-20">
                <h3 className="text-2xl font-bold">Projects</h3>
                <div className="flex justify-center flex-wrap gap-4">
                    <div className="w-fit h-[480px] flex flex-col">
                        <div className="bg-white w-full h-fit">
                            <div className="bg-primary w-20 h-1"></div>
                        </div>
                        <div className="w-full sm:w-[280px] overflow-hidden h-fit">
                            
                            <Image className="w-[330px] h-fit hover:ba hover:scale-125 transition duration-500 ease-in-out" src={photo} alt=""  />
                        </div>
                        {/* <div>
                            <span className="border-primary border-2 text-primary px-3 py-1 rounded-md">NextJS</span>
                        </div> */}
                    </div>
                </div>

            </section>

            <section className="flex flex-col min-h-fit py-8 px-2 pb-20 gap-2 sm:p-20">
                <h3 className="text-2xl font-bold">Work Experience</h3>
                <div className="h-full flex gap-2 justify-start">
                    <div className="h-fit w-fit flex flex-col items-center">
                        <div className="animate-pulse border-primary border-4 rounded-full p-2 w-fit "></div>
                        <div className="min-h-full w-[2px] bg-primary"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-xl flex flex-col items-start">Backend Developer</h4>
                        <p className="italic font-bold">Pistis TechHub <span className="font-normal">Nov 2023 - April 2024</span></p>
                        <ul>
                            <li className=" decoration-dashed decoration-white" >- Developed the the endpont projects</li>
                            <li className=" decoration-dashed decoration-white" >- Worked on the user dashboard and managed the stats and included pagination</li>
                        </ul>
                    </div>
                    <div className="h-fit w-fit flex flex-col items-center">
                        <div className="animate-pulse border-primary border-4 rounded-full p-2 w-fit "></div>
                        <div className="min-h-full w-[2px] bg-primary"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-xl flex flex-col items-start">Frontend Developer</h4>
                        <p className="italic font-bold">ProjectGenius <span className="font-normal">Nov 2023 - April 2024</span></p>
                        <ol>
                            <li className=" decoration-white" >- Designed the frontend page from the ground up</li>
                            <li className=" decoration-white" >- Handled all API integration</li>
                            <li className=" decoration-dashed decoration-white" >- Worked with zustand and react-query, Optizing the site performance by 40%</li>
                        </ol>
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
