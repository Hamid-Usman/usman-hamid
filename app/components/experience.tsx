import { slideUp } from "@/motion/variants/slideUp";
import { motion } from "framer-motion";

interface ExperienceProp {
    title: string;
    organization: string;
    start: string;
    end: string;
    remarks: string[]
}
export const Experience = ({title, organization, start, end, remarks}: ExperienceProp) => {
    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            exit="exit"
            className="flex gap-3">
            <div className="h-fit w-fit flex flex-col items-center">
                <div className={` border-primary border-4 rounded-full p-2 w-fit ${end === "Present" ? "animate-ping" : ""} `}></div>
                <div className="min-h-full w-[2px] bg-primary"></div>
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-xl flex flex-col items-start">{title}</h4>
                <p className="italic font-bold">{organization} <span className="font-normal">{start} - {end}</span></p>
                <ul className="ml-7">
                    {remarks.map((remark, index) => (
                        
                    <li key={index} className=" decoration-dashed decoration-white list-disc" >{remark}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )

}