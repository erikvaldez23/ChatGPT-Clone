import React, { useState, useEffect, useRef } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { getChatResponse } from "../api/openai";
import "./ChatApp.css";

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const chatEndRef = useRef(null); // Auto-scrolling 

    // Scrolling to latest message
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Sednding Messages
    const handleSend = async (message) => {
        const userMessage = { role: "user", content: message };
        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        try {
            // Fetching resposne 
            const botResponse = await getChatResponse(message);
            const botMessage = { role: "assistant", content: botResponse };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error fetching response:", error);
            const errorMessage = { role: "assistant", content: "Oops! Something went wrong. Please try again." };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">ChatGPT Clone</div>

            <div className="chat-body">
                <ChatMessages messages={messages} />
                {isLoading && <div className="message assistant">Thinking...</div>}
                <div ref={chatEndRef} />
            </div>

            <div className="chat-footer">
                <ChatInput onSend={handleSend} />
            </div>
        </div>
    );
};

export default ChatApp;
