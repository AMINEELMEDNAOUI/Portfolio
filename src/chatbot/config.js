import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import myAvatarImage from '../Assets/aminebott.webp';

const config = (language) => {
    let savedMessages = null;
    try {
        const history = localStorage.getItem('chat_history');
        if (history) savedMessages = JSON.parse(history);
    } catch (e) { console.error(e); }

    return {
        botName: "AmineBot",

        placeholderText: language === 'fr' ? "Écrivez votre message ici..." : "Write your message here...",

        initialMessages: savedMessages && savedMessages.length > 0
            ? savedMessages
            : [
                createChatBotMessage(
                    language === 'fr'
                        ? "Bonjour ! Je suis l'IA d'Amine. Posez-moi une question sur son parcours ou ses projets."
                        : "Hello! I'm Amine's AI. Ask me about my background or my projects."
                ),
            ],
        customStyles: {
            botMessageBox: { backgroundColor: "#c084f5" },
            chatButton: { backgroundColor: "#c084f5" },
        },
        customComponents: {
            botAvatar: (props) => (
                <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    border: "2px solid #c084f5", overflow: "hidden",
                    display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff"
                }}>
                    <img
                        src={myAvatarImage}
                        alt="Amine"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Amine+El&background=c084f5&color=fff"; }}
                    />
                </div>
            ),
            header: () => (
                <div style={{
                    backgroundColor: '#1a1a1a', color: "white", padding: "15px",
                    display: "flex", alignItems: "center", gap: "10px",
                    borderTopLeftRadius: "10px", borderTopRightRadius: "10px",
                    fontSize: "14px", fontWeight: "600"
                }}>
                    <div style={{ width: "8px", height: "8px", backgroundColor: "#00ff00", borderRadius: "50%" }}></div>
                    AMINE EL MEDNAOUI
                </div>
            ),
        },
    };
};

export default config;