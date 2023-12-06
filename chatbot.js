// Define the chatbot's responses
const responses = {
    "hi": ["Hello!", "Hey there!", "Hi, how can I help you today?"],
    "goodbye": ["Goodbye!", "See you later!", "Take care!"]
    // Add more responses for different inputs
};

// Main function to handle user input and provide responses
document.getElementById("send-button").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatWindow = document.getElementById("chat-window");
    let botResponse;
    if (userInput in responses) {
        botResponse = responses[userInput][Math.floor(Math.random() * responses[userInput].length)];
    } else {
        botResponse = "I'm still learning. Can you ask me something else?";
    }
    chatWindow.innerHTML += "<strong>You:</strong> " + userInput + "<br>";
    chatWindow.innerHTML += "<strong>Chatbot:</strong> " + botResponse + "<br>";
    document.getElementById("user-input").value = ""; // Clear the input field
});
