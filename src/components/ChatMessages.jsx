import React from "react";
import "./ChatMessages.css";

// Displays chat messages
const ChatMessages = ({ messages }) => {
    return (
        <div className="chat-messages">
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.role}`}>
                    {msg.content}
                </div>
            ))}
        </div>
    );
};

export default ChatMessages;
