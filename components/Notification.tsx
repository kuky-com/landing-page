interface NotificationProps {
    message: string;
    onClose: () => void;  // Close button functionality
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
    return (
        <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg border border-gray-300 p-4 max-w-md flex items-center justify-between z-50">
            <div className="flex items-center">
                {/* Icon */}
                <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                {/* Message Content */}
                <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">New user added</p>
                    <p className="text-sm text-gray-500">{message}</p>
                </div>
            </div>
            {/* Close Button */}
            <div className="ml-4">
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Notification;
