import { useEffect, useState } from 'react';
import Notification from './Notification';
import data from './userData.json';

const WebSocketClient = () => {
    const [currentNotification, setCurrentNotification] = useState<{ name: string, goal: string } | null>(null);

    const getRandomNotification = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    };

    const handleCloseNotification = () => {
        setCurrentNotification(null);
    };

    useEffect(() => {
        const showNotification = () => {
            const randomNotification = getRandomNotification();
            setCurrentNotification(randomNotification);

            setTimeout(() => {
                setCurrentNotification(null);
            }, 30000);
        };

        showNotification();

        const intervalId = setInterval(() => {
            showNotification();
        }, Math.random() * 20000 + 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {currentNotification && (
                <Notification
                    message={`${currentNotification.name} has just joined with interest "${currentNotification.goal}"`}
                    onClose={handleCloseNotification}
                />
            )}
        </div>
    );
};

export default WebSocketClient;
