import Avatar from "../assets/avatar.jpeg";
import {navHomeButtons} from "../configs/contents";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import content from '../data/content.json';

const HomePage = () => (
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
            <img src={Avatar} className="rounded-full w-24 h-24" alt="avatar" />
            <div className="h-10 border-l-2" />
            <div
                className="
                w-full
                border-t-2
                border-b-2
                border-white
                p-10
                transition
                delay-500
                duration-1000
                ease-in
                text-white
            "
            >
                <div className="font-mono text-center">
                    <h1 className="font-bold text-lg">Hai, Subiyantoro Here</h1>
                    <p>{content.greeting}</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-5 m-10">
                {navHomeButtons.map(btn => (
                    <Link to={btn.url} key={btn.key}>
                        <button
                            type="button"
                            className="border-white border-2 p-2 min-w-150 text-white rounded-md hover:bg-white hover:text-gray-800 font-mono"
                        >
                            {btn.label}
                        </button>
                    </Link>
                ))}
            </div>
        </motion.div>
    </motion.div>
)

export default HomePage;
