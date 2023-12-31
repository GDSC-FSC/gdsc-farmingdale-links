import { useEffect, useState } from 'react';

export default function useHasMounted({ loading, time }: { loading?: boolean } & { time: number }) {
    const [hasMounted, setHasMounted] = useState(false);
    
    useEffect(() => {
        const originalTitle = document.title;

        const handleContentLoaded = () => {
            setTimeout(() => {
                setHasMounted(true)
            }, time);
        }

        if (loading) {
        } else {
            setHasMounted(true)
        }
    }, []);
    return hasMounted;
}