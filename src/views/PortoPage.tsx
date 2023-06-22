import { motion } from "framer-motion";
import MAA from "../assets/maa.png";

const PortoPage = () => (
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
                <h1 className="text-2xl font-bold">Portfolio</h1>
                <div className="grid grid-cols-4 gap-4">
                    <div
                        style={{
                            backgroundImage: `url(${MAA})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain'
                        }}
                        className="block rounded-lg shadow-md shadow-white hover:blur-sm w-24 h-24"
                    >
                        <div className="w-full h-full bg-gray-800">
                            <button type="button" className="border-white rounded-lg">
                                Links
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div>
)

export default PortoPage;
