import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Notification from './Notification';

const WebSocketClient = () => {
    const [newUser, setNewUser] = useState<string | null>(null);
    const handleCloseNotification = () => {
        setNewUser(null);
    };

    useEffect(() => {
        const socket = io('https://kuky-backend.fly.dev');

        socket.on('new-user', (data) => {
            setNewUser(data.message);

            setTimeout(() => {
                setNewUser(null);
            }, 30000);
        });

        return () => {
            socket.off('new-user');
        };
    }, []);

    return (
        <div>
            {newUser && <Notification message={newUser} onClose={handleCloseNotification} />}
        </div>
    );
};

export default WebSocketClient;
