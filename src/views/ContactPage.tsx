import { motion } from "framer-motion";
import LinkedIn from '../assets/linkedin.png';
import IG from '../assets/instagram.png';
import Github from '../assets/github.png';

const ContactPage = () => (
    <motion.div
        layout
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}
            }}
            className="flex mx-auto w-6/12 flex-col content-center items-center"
        >
            <div className="flex flex-col gap-10 content-center items-center">
                <h1 className="text-2xl font-bold">Contact Me</h1>
                <div className="grid grid-cols-3 gap-10 place-content-center">
                    <a href="https://www.linkedin.com/in/subiyantoro-s-082a36a7/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/comsubiyantoro/" target="_blank" rel="noreferrer">
                        <img src={IG} alt="ig" />
                    </a>
                    <a href="https://www.github.com/subiyantoro" target="_blank" rel="noreferrer">
                        <img src={Github} alt="github" />
                    </a>
                </div>
            </div>
        </motion.div>
    </motion.div>
)

export default ContactPage;