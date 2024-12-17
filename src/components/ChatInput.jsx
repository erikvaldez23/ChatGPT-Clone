import React, { useState } from "react";
import "./ChatInput.css";

// Render input box and sending messages
const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState("");

    // Hanlde submission of message
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="chat-input">
            <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default ChatInput;
