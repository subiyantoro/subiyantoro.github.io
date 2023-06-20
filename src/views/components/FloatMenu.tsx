import { motion } from "framer-motion";
import {navHomeButtons} from "../../configs/contents";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import {Link} from "react-router-dom";
import {CheckIsMobile} from "../../utils/helper";

const routeList = [
    ...navHomeButtons,
    {
        key: 'back',
        label: 'Back To Home',
        url: '/',
        icon: <ArrowLeftIcon className="fill-white w-7 h-7" />,
    }
];

const FloatMenu = () => {
    const isMobile = CheckIsMobile('(max-width: 900px)');

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, ...(isMobile ? { y: 10 } : { x: -10 }) },
                    visible: { opacity: 1, ...(isMobile ? { y: 0 } : { y: 0 }), transition: { duration: 0.7 }}
                }}
                className={`fixed ${isMobile ? 'w-1/4 h-12 bottom-[12%] start-[30%] bg-gray-800' : 'w-12 h-1/4 top-[30%] start-5'} shadow-inner shadow-cyan-600 rounded-md`}
            >
                <div className={`flex ${isMobile ? 'flex-row m-2 mx-8 gap-5' : 'flex-col m-6 gap-4'} content-center items-center`}>
                    {routeList.map(item => (
                        <Link to={item.url} key={item.key}>
                            <button type="button">
                                {item.icon}
                            </button>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default FloatMenu;
