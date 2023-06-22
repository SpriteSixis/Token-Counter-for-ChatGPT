// ==UserScript==
// @name        Token Counter
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description Count tokens in a text field
// @author      Sprite6
// @match       *://chat.openai.com/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    // Function that sets up the token counter
    function setupTokenCounter() {
        // Use the correct id for your text field
        var input = document.getElementById("prompt-textarea");

        // Only proceed if the input field is found
        if(input) {
            var counterDiv = document.createElement("div");
            counterDiv.id = "tokenCounter";
            counterDiv.style.marginTop = "10px";
            counterDiv.style.fontWeight = "bold";

            input.parentNode.insertBefore(counterDiv, input.nextSibling);

            function countTokens() {
                // This is a simplified token counter that treats spaces, punctuation and some common contractions as separate tokens.
                var tokens = input.value.split(/(\s+|\.{2,}|[.,!?;:'"-]|'s|'t|'re|'ve|'ll|'m|'d)/).filter(function(token) {
                    return token.length > 0 && token !== " ";
                });

                var tokenCounter = document.getElementById("tokenCounter");
                tokenCounter.textContent = "Token count: " + tokens.length;

                // Change color based on token count
                if(tokens.length <= 4000) {
                    tokenCounter.style.color = "white"; // default color
                } else if(tokens.length <= 4100) {
                    tokenCounter.style.color = "yellow";
                } else if(tokens.length <= 4200) {
                    tokenCounter.style.color = "red";
                } else {
                    tokenCounter.style.color = "darkgray";
                }
            }

            input.addEventListener("input", countTokens);

            // Listener for the 'Enter' key
            input.addEventListener("keydown", function(event) {
                // If 'Enter' key is pressed
                if (event.key === 'Enter') {
                    // If 'Shift' key is not held (which would make a new line rather than sending the message)
                    if (!event.shiftKey) {
                        // Reset token count after a brief delay to ensure message is sent
                        setTimeout(countTokens, 50);
                    }
                }
            });

            countTokens(); // Initial count
        }
    }

    // Check for chat interface changes every 500 milliseconds
    setInterval(function() {
        // Look for the chat input field
        var chatInput = document.getElementById("prompt-textarea");

        // If the chat input field is not found or the token counter is not found, set up the token counter
        if(!chatInput || !document.getElementById("tokenCounter")) {
            setupTokenCounter();
        }
    }, 500);
})();
