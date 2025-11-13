import { useEffect, useState } from "react";

// Custom hook for counter animation
export const useCountUp = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!hasAnimated && end > 0) {
            setHasAnimated(true);
            let startTime;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOutQuart * (end - start) + start));

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    setCount(end);
                }
            };
            requestAnimationFrame(step);
        }
    }, [end, duration, start, hasAnimated]);

    return count;
};