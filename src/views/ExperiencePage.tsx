import content from '../data/content.json';
import { motion } from "framer-motion";
import {CheckIsMobile} from "../utils/helper";

const ExperiencePage = () => {
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
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}
                }}
                className={`flex mx-auto ${isMobile ? 'w-10/12' : 'w-6/12'} flex-row content-center`}
            >
                <div className="basis-1/3 pt-10 pb-10">
                    <div>
                        <h1 className="text-3xl">Subiyantoro</h1>
                        <p>Frontend Engineer</p>
                    </div>
                    <hr className="border-dashed mt-5 mb-5" />
                    <div>
                        <h1 className="font-bold mb-2">Summary</h1>
                        <p className="text-[12px]">Construct and maintain features in web applications, primarily using the ReactJS framework and JavaScript language. I am interested in the frontend field, whether it is web or mobile applications. I have accumulated 7 years of experience in the technology industry, with 2 years focused on frontend programming, 1 year in full-stack development, and 4 years in technical support assistance. Additionally, I am pursuing projects based on web audio and organizational management</p>
                    </div>
                    <hr className="border-dashed mt-5 mb-5" />
                    <div>
                        <h1 className="font-bold mb-2">Education</h1>
                        {content.education.map(edu => (
                            <>
                                <p className="text-bold text-[14px]">{edu.school}</p>
                                <p className="text-gray-300 text-[12px]">{edu.date}</p>
                                <p className="text-[12px]">{edu.desc}</p>
                            </>
                        ))}
                    </div>
                    <hr className="border-dashed mt-5 mb-5" />
                    <div>
                        <h1 className="font-bold mb-2">Training</h1>
                        {content.training.map(train => (
                            <>
                                <p className="text-bold text-[14px]">{train.school}</p>
                                <p className="text-gray-300 text-[12px]">{train.date}</p>
                                <p className="text-[12px]">{train.desc}</p>
                            </>
                        ))}
                    </div>
                </div>
                <div className="basis-2/3 p-10">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[#e3f5ff] font-bold">Work Experience</h1>
                        <div>
                            {content.experience.map(exp => (
                                <div className="mt-2 mb-2">
                                    <h1 className="font-bold">{`${exp.position} - ${exp.company}`}</h1>
                                    <p className="text-[12px] text-gray-400">{exp.date}</p>
                                    <p className="text-[14px] whitespace-pre-line">{exp.desc}</p>
                                    {exp.content.length !== 0 && (
                                        <ul className="ml-3">
                                            {exp.content.map(list => (
                                                <li className="text-[14px] list-disc">{list}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ExperiencePage;
