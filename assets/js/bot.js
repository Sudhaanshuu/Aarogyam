const chatbot = document.getElementById("chatbot");
const closeButton = document.getElementById("close-button");
const sendButton = document.getElementById("send-button");
const userInputElement = document.getElementById("user-input");
const chatContent = document.getElementById("chat-content");

// Function to toggle the chatbot's size
function toggleChatbotSize() {
    chatbot.classList.toggle("small");
}

// Event listener for clicking the close button
closeButton.addEventListener("click", toggleChatbotSize);


// Function to add a user message to the chat
function addUserMessage(message) {
    const userMessage = document.createElement("div");
    userMessage.textContent = message;
    userMessage.classList.add("message", "sent");
    chatContent.appendChild(userMessage);
    userInputElement.value = "";
}

// Function to add a chatbot message to the chat
function addChatbotMessage(message) {
    const chatbotMessage = document.createElement("div");
    chatbotMessage.textContent = message;
    chatbotMessage.classList.add("message", "received");
    chatContent.appendChild(chatbotMessage);

    // Speak the chatbot's message
    const speech = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(speech);
}

// Toggle the chatbot on and off
function toggleChatbot() {
    chatbot.classList.toggle("active");
}

// Close the chatbot
closeButton.addEventListener("click", toggleChatbot);

// Handle user input
sendButton.addEventListener("click", () => {
    const userMessage = userInputElement.value;
    if (userMessage.trim() === "") return;

    addUserMessage(userMessage);

    // Process user input and provide responses
    let response = "Hi, I'm Med Coders, an AI assistant.";

    switch (userMessage.toLowerCase()) {
        case "hello":
            response = "Hello! How can I assist you today?";
            break;
        case "how are you?":
            response = "I'm just a computer program, so I don't have feelings, but I'm here to help!";
            break;
        case "what can you do?":
            response = "I can answer questions, provide information, and assist with various tasks. How can I assist you?";
            break;
        case "goodbye":
            response = "Goodbye! If you have more questions, feel free to come back anytime.";
            break;
        case "tell me about heart disease":
            response = "To maintain a heart-healthy lifestyle, focus on a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Regular exercise is crucial; aim for at least 150 minutes of moderate-intensity aerobic activity per week.Manage stress through relaxation techniques like deep breathing and meditation.Avoid smoking and limit alcohol consumption.Regularly check your blood pressure, cholesterol levels, and maintain a healthy weight.Consult your healthcare provider for personalized advice and monitoring.Option 2: Explore Common Heart Disease Medications";
            break;
        case "mera naam":
            response = "mera naam MEd coders hai";
            break;
            // Add more test cases and responses here
        case "i love you":
            response = "I love you too.";
            break;
        case "hi":
            response = "Hi, I'm Med Coders, an AI assistant for Kiosk";
            break;
        case "नमस्ते":
            response = "मैं अच्छा हूँ,तुम कैसे हो?";
            break;
        case "who is med coders":
            response = "Hi, I'm Med Coders assistant";
            break;
        case "What's the recommended daily intake of water for adults?":
            response = "The recommended daily water intake for adults varies but is typically around 8-10 glasses or 2-2.5 liters.";
            break;
        case "Can you suggest some healthy breakfast options?":
            response = "Sure! Some healthy breakfast options include oatmeal, Greek yogurt with fruit, or whole-grain toast with avocado.";
            break;
        case "How can I improve my sleep quality?":
            response = "To improve sleep quality, try maintaining a regular sleep schedule, creating a comfortable sleep environment, and avoiding caffeine and electronics before bedtime.";
            break;
        case "What are some effective ways to reduce stress?":
            response = "Effective stress-reduction techniques include deep breathing exercises, meditation, regular exercise, and spending time in nature.";
            break;

            // Add more test cases and responses here
        default:
            // If the user's input doesn't match any specific case, use the default response.
            response = "I'm sorry, I didn't understand that. How can I assist you?";
            break;
    }

    addChatbotMessage(response);
});

// Show/hide the chatbot
chatbot.style.display = "block"; // Initially show the chatbot
toggleChatbot(); // Hide the chatbot when the page loads