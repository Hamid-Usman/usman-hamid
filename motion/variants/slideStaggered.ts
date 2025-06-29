export const slideStaggered = (delay: number = 0) => ({
    initial: {x: -200, opacity: 0},
    animate: {x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay }},
    exit: {x: -200, opacity: 0, transition: { duration: 0.5, ease: "easeIn" }} 
});