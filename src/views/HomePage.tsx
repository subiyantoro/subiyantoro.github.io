import Avatar from "../assets/avatar.jpeg";
import {navHomeButtons} from "../configs/contents";
import {Link} from "react-router-dom";
import content from '../data/content.json';

const HomePage = () => (
    <div className="flex mx-auto w-6/12 flex-col content-center items-center">
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
                <h1 className="font-bold text-lg">Hei, Subi Here</h1>
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
    </div>
)

export default HomePage;
