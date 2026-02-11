import frData from '../data/bot_fr.json';
import enData from '../data/bot_en.json';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    handleResponse = (key) => {
        const lang = localStorage.getItem('i18nextLng') || 'fr';
        const data = lang.includes('fr') ? frData : enData;


        const message = this.createChatBotMessage(data[key] || data['fallback']);

        message.customAuthor = "AMINE EL MEDNAOUI";
        message.customTime = lang.includes('fr') ? "à l'instant" : "just now";

        this.updateChatbotState(message);
    };

    updateChatbotState(message) {
        this.setState((prevState) => {
            const nextState = {
                ...prevState,
                messages: [...prevState.messages, message],
            };
            localStorage.setItem('chat_history', JSON.stringify(nextState.messages));
            return nextState;
        });
    }
}

export default ActionProvider;