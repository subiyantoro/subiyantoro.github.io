import {useEffect, useState} from "react";
import Avatar from '../assets/avatar.jpeg'
import Background from "./components/Background";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    const [isLoading ,setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div className={`${isLoading ? 'bg-white' : 'bg-gray-800'} h-screen transition duration-500 ease-in grid content-center`}>
            {!isLoading && (
                <>
                    <div className="w-screen justify-center">
                        <Outlet />
                    </div>
                    <Background />
                </>
            )}
        </div>
    )
}

export default  MainLayout;
