import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();

    return (
        <div className="h-screen w-screen grid content-center text-center">
            <h1 className="font-bold text-2xl m-10">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}