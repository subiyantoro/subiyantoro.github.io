import {useEffect, useState} from "react";
import Background from "./components/Background";
import {Outlet, useLocation} from "react-router-dom";

const MainLayout = () => {
    const [isLoading ,setIsLoading] = useState(false);
    const route = useLocation();

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div className={`${isLoading ? 'bg-white' : 'bg-gray-800'} min-h-screen transition duration-500 ease-in grid ${route.pathname === '/' && 'content-center'}`}>
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
