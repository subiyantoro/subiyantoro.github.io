import {useEffect, useState} from "react";

export const CheckIsMobile = (condition: string): boolean => {
    const [isMatching, setIsMatching] = useState<boolean>(false);

    useEffect(
        function updateMatchMedia() {
            if (!condition) return setIsMatching(true);

            const updateIsMatching = (event: any) => setIsMatching(event.matches);

            const matcher = window.matchMedia(condition);

            setIsMatching(matcher.matches);

            matcher.addEventListener('change', updateIsMatching);

            return () => {
                matcher.removeEventListener('change', updateIsMatching);
            };
        },
        [condition]
    );

    return isMatching;
}