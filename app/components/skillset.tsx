
import { motion } from "framer-motion";
import { slideRight } from "@/motion/variants/slideRight";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { slideStaggered } from "@/motion/variants/slideStaggered";

interface SkillsetProp {
    icon: IconType;
    tech: string;
    description: string;
    delay: number;
}

export const Skillset = ({ icon: Icon, tech, description, delay = 0}: SkillsetProp) => {
    return (
        <motion.div
                    variants={slideStaggered(delay)}
                    initial='initial'
                    whileInView="animate"
                    exit="exit"
            className="flex flex-col gap-4 w-full p-8 py-12 hover:pt-20 sm:w-[390px] lg:w-full h-[320px] bg-secondary hover:bg-gradient-to-t from-primary rounded-lg transition-all duration-500 ease-in-out"
        >
            <span className="w-12 h-12 mb-2 flex items-center justify-center text-4xl">
                <Icon className="text-primary" />
            </span>
            <h3 className="text-[28px] font-bold">{tech}</h3>
            <p>{description}</p>
        </motion.div>
    );
};