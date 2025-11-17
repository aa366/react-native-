import { useEffect, useRef, useState } from 'react';

export default function useScreenTime() {
    const startTimeRef = useRef<number | null>(null);
    const [totalTimeSpent, setTotalTimeSpent] = useState(0);

    useEffect(() => {
        startTimeRef.current = Date.now();
        return () => {
            const endTime = Date.now();
            setTotalTimeSpent(prevTime => prevTime + (endTime - (startTimeRef.current ?? 0)));
            startTimeRef.current = null;
        };
    }, []);

    return totalTimeSpent;
}   