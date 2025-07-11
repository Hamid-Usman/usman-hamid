
import { slideStaggered } from "@/motion/variants/slideStaggered";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";

interface ProjectProps {
    photo: string | StaticImageData;
    project: string;
    description: string;
    site: string;
    github?: string;
    delay?: number
} 
export const Project = ({photo, project, description, site, github, delay = 0}: ProjectProps) => {
    return (
        <motion.div 
            variants={slideStaggered(delay)}
            initial='initial'
            whileInView="animate"
            exit="exit"
        className="w-full h-[108vh] sm:w-fit sm:h-[530px] lg:h-[100vh] flex flex-col gap-1">
            <div className="bg-white w-full h-fit">
                <div className="bg-primary w-20 h-1"></div>
            </div>
            <div className="rounded-lg transition duration-500 ease-in-out w-full sm:w-[320px] lg:full overflow-hidden h-full relative group">
                <Image
                    className="w-full h-full hover:scale-125 transition duration-500 ease-in-out"
                    src={photo}
                    alt=""
                />

                <div className="absolute inset-0 flex gap-2 p-2 flex-col justify-end bg-gradient-to-t opacity-0 from-black to-transparent bg-opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                    <div className="flex gap-2">
                        <Link href={site}>View Site</Link>
                        {github && <Link href={github}>GitHub</Link>}
                    </div>
                    <span className="text-white text-2xl font-bold">{project}</span>
                    <span className="text-white text-sm">{description}</span>
                    

                </div>
            </div>
        </motion.div>
    )
}