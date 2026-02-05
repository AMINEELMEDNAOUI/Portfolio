import React, { useState, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';
import { useTranslation } from 'react-i18next';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { AiOutlineRobot } from 'react-icons/ai';
import robotIcon from '../Assets/robottt.png';

function MyBot() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const currentLang = i18n.language.split('-')[0];
    const [showAutoTooltip, setShowAutoTooltip] = useState(false);
    const tooltipText = currentLang === 'fr'
        ? "Je suis le chatbot d'Amine, pose-moi une question..."
        : "I'm Amine's chatbot, ask me a question...";

    useEffect(() => {
        // Affiche le message 1.5s après l'ouverture de la page
        const timer = setTimeout(() => {
            setShowAutoTooltip(true);
        }, 1500);

        // Optionnel : Cache le message après 8 secondes pour ne pas encombrer
        const hideTimer = setTimeout(() => {
            setShowAutoTooltip(false);
        }, 8000);

        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <div className="chatbot-container" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
            {/* Style CSS injecté pour forcer le placeholder en Français */}
            <style>
                {`
                    .chatbot-container-fr .react-chatbot-kit-chat-input::placeholder {
                        color: transparent !important;
                    }
                    .chatbot-container-fr .react-chatbot-kit-chat-input::before {
                        content: "Écrivez votre message ici...";
                        position: absolute;
                        left: 20px;
                        color: #919191;
                        pointer-events: none;
                        font-family: inherit;
                        font-size: 0.9rem;
                    }
                        .react-chatbot-kit-chat-bot-message, 
.react-chatbot-kit-chat-user-message {
    max-width: 85% !important; /* Évite que la bulle colle au bord */
    word-break: break-word !important; /* Coupe les mots trop longs */
    overflow-wrap: break-word !important;
    white-space: pre-line !important; /* Respecte tes retours à la ligne \n */
    line-height: 1.4 !important;
}

/* Fix spécifique pour le conteneur de texte interne */
.react-chatbot-kit-chat-bot-message-container {
    display: flex;
    width: 100%;
}
                   
                    .chatbot-container-fr .react-chatbot-kit-chat-input:not(:placeholder-shown)::before {
                        display: none;
                    }
                        .bot-button-wrapper {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                    }

                    
                   /* --- STYLE PC (Inchangé) --- */
.custom-tooltip {
    position: absolute;
    right: 80px; 
    background-color: rgba(0, 0, 0, 0.85);
    color: #c770f0; 
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 8px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 13px;
    white-space: nowrap;
    
    /* État initial : Invisible mais à sa place réelle */
    opacity: 0;
    /* On utilise une transition lente pour l'opacité uniquement */
    transition: opacity 1.2s ease-in-out; 
    
    border: 1px solid #30275a;
    box-shadow: 0 4px 15px rgba(199, 112, 240, 0.4);
    pointer-events: none;
}

/* État actif déclenché par le JS : Apparition douce */
.custom-tooltip.active {
    opacity: 1;
}

/* --- FORCE 2 LIGNES SUR MOBILE SEULEMENT --- */
@media (max-width: 768px) {
    .custom-tooltip {
        white-space: normal;    /* Autorise le retour à la ligne */
        display: block;         /* S'assure que le bloc prend la largeur imposée */
        width: max-content;           /* Largeur précise pour forcer la coupure en 2 lignes */
        max-width: 200px;       
        text-align: center;     /* Optionnel : centre le texte pour un meilleur look */
        font-size: 11px;
        right: 75px;            /* Ajuste la position pour ne pas toucher le bouton */
    }
}

                    
                    .bot-button-wrapper:hover .custom-tooltip {
                        visibility: visible;
                        opacity: 1;
                    }

                    
                    .custom-tooltip::after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 100%;
                        margin-top: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent transparent transparent rgba(0, 0, 0, 0.8);
                    }
                        
                `}
            </style>

            {isOpen && (
                <div className="chatbot-popup"
                    style={{
                        marginBottom: '15px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                        // AJOUTE CES DEUX LIGNES ICI :
                        borderRadius: '10px',
                        overflow: 'hidden',
                        backgroundColor: 'transparent'
                    }}>
                    <Chatbot
                        // On passe bien currentLang à la config
                        config={config(currentLang)}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        // La clé force le bot à se reconstruire avec les bons messages initiaux
                        key={currentLang}
                        // Optionnel : placeholder direct si ta version le supporte
                        placeholderText={currentLang === 'fr' ? "Écrivez votre message ici..." : "Write your message here..."}
                    />
                </div>
            )}
            <div className="bot-button-wrapper">
                {!isOpen && <div className={`custom-tooltip ${showAutoTooltip ? 'active' : ''}`}>
                    {tooltipText}
                </div>}
                <button

                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        backgroundColor: '#c084f5',
                        color: 'white',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '28px',
                        boxShadow: '0 4px 15px #c770f0',
                        transition: 'transform 0.3s ease',
                        float: 'right'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px #c770f0';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px #c770f0';
                    }}
                >
                    {isOpen ? (
                        <IoClose size={35} color="white" />
                    ) : (
                        <img
                            src={robotIcon}
                            alt="Robot Amine"
                            style={{
                                width: '60%',
                                height: '60%',
                                objectFit: 'cover',
                                filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))'
                            }}
                        />
                    )}
                </button>
            </div>
        </div>
    );
}

export default MyBot;