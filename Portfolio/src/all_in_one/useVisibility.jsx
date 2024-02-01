import { useState, useEffect } from 'react';

const useVisibility = (elementId) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById(elementId);
        if (element) {
            const topPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (!isVisible && topPosition < screenPosition) {
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    return isVisible;
};

export default useVisibility;
