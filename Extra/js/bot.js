const chatbot = document.getElementById("chatbot");
const closeButton = document.getElementById("close-button");
const sendButton = document.getElementById("send-button");
const micButton = document.getElementById("mic-button");
const userInputElement = document.getElementById("user-input");
const chatContent = document.getElementById("chat-content");

let recognition;

function toggleChatbotSize() {
    chatbot.classList.toggle("small");
}

function addUserMessage(message) {
    const userMessage = document.createElement("div");
    userMessage.textContent = message;
    userMessage.classList.add("message", "sent");
    chatContent.appendChild(userMessage);
    userInputElement.value = "";
}

function addChatbotMessage(message) {
    const chatbotMessage = document.createElement("div");
    chatbotMessage.textContent = message;
    chatbotMessage.classList.add("message", "received");
    chatContent.appendChild(chatbotMessage);

    const speech = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(speech);
}

function toggleChatbot() {
    chatbot.classList.toggle("active");
}

function startSpeechRecognition() {
    recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        addUserMessage(spokenText);

        // Process the spoken text and generate a response
        let response = "Hi, I'm Green Coders, an AI assistant.";

        switch (spokenText.toLowerCase()) {
            case "hello.":
                response = "Hello! How can I assist you today?";
                break;
            case "How are you?":
                response = "I'm just a computer program, so I don't have feelings, but I'm here to help!";
                break;
                // Add more cases and responses as needed
            default:
                response = "I'm sorry, I didn't understand that. How can I assist you?";
                break;
        }

        addChatbotMessage(response);
    };

    recognition.start();
}

closeButton.addEventListener("click", toggleChatbot);
micButton.addEventListener("click", startSpeechRecognition);

sendButton.addEventListener("click", () => {
    const userMessage = userInputElement.value;
    if (userMessage.trim() === "") return;

    addUserMessage(userMessage);

    let response = "Hi, I'm Green Coders, an AI assistant.";

    switch (userMessage.toLowerCase()) {
        case "hello.":
            response = "Hello! How can I assist you today?";
            break;
        case "how are you":
            response = "I'm just a computer program, so I don't have feelings, but I'm here to help!";
            break;
            // Add more cases and responses as needed
        default:
            response = "I'm sorry, I didn't understand that. How can I assist you?";
            break;
    }

    addChatbotMessage(response);
});

chatbot.style.display = "block";
toggleChatbot();