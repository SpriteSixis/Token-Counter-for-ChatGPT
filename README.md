# Token-Counter-for-ChatGPT
A simple Tampermonkey Script that counts tokens in ChatGPT's interface.

## Token Counter

This is a simple coding exercise that I wanted to try because I was getting tired of guessing how many tokens I had in my prompt textbox when I pasted large amounts of text or code in **[ChatGPT](https://chat.openai.com/)**. 

## Quick Start

Make sure you have **[Tampermonkey](https://www.tampermonkey.net)** installed in your browser, open `Token Counter.user.js` in [RAW](link) view and **Tampermonkey** should recognize it and give you the option of installing it, then just click the extension so that you make sure that the script is enabled, and finally refresh your browser. 

## Basic Explanation

This script adds a **Token Counter** element that appears in the bottom part of the text input field and updates the count in real-time as the user types. It uses a simplified token counting approach, treating spaces, punctuation, and common contractions as separate tokens *(I know, more on that below.)* The **Token Counter's** color changes as you approach the token limit, which as you know is 4097 tokens, so I made the counter turn **Yellow** when you're close, **Red** when you're on the edge *(more on that below)* and **DarkGray** when you are probably over the limit.

## Installation

**Quickest**

1) Install **Tampermonkey** on your browser. *(I haven't tried other browser or extensions, I will do more testing on this and update it.)*
2) Open `Token Counter.user.js` in [RAW](link) view and **Tampermonkey** should recognize it, click **"Install"**.
3) Make sure the script is activated on the **Tampermonkey** extension.

**Alternatives**

1) In the **"Utilites"** tab of the **Tampermonkey** dashboard, just paste this link in the **"Install from URL"** textbox.
2) Download the  `Token Counter.user.js` script from above and select the **"Import from file"** option in the **Tampermonkey "Utilites"** tab.
3) Alternatively you can just click on the `+` sign in the **Tampermonkey Dashboard** to create a **New File**, then open `Token Counter.user.js` script on this repo and copy all of its contents and paste them into the **New File** you created and **Save** it. 

## Detailed Explanation

Ok, so as you know, Token Counting is complex and there is not a single method of counting that is reliable, and even **ChatGPT** uses different methods for their **GPT 3.5** and **GPT 4** models. But let us take into account this words from [OpenAi](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) themselves.

<pre>
Tokens can be thought of as pieces of words. Before the API processes the prompts, 
the input is broken down into tokens. These tokens are not cut up exactly where the words
start or end - tokens can include trailing spaces and even sub-words. Here are some helpful
rules of thumb for understanding tokens in terms of lengths:

- 1 token ~= 4 chars in English
- 1 token ~= ¾ words
- 100 tokens ~= 75 words

Or 

- 1-2 sentence ~= 30 tokens
- 1 paragraph ~= 100 tokens
- 1,500 words ~= 2048 tokens

To get additional context on how tokens stack up, consider this:

- Wayne Gretzky’s quote "You miss 100% of the shots you don't take" contains 11 tokens.
- The phrase in spanish "Cómo estás" contains 5 tokens.
- The transcript of the US Declaration of Independence contains 1,695 tokens.
</pre>

So with this in mind, my goal was to create a really simple **Token Counter** script that would let you have an approximation with an acceptable margin of error.

## Variations

Follow the same steps as the instructions above if you want to try these out.

1) **Tiktoken Counter V1.** Here is the [RAW](link) code.
2) **Merged Counters V1.** If you want to have fun comparing them both at the same time. [RAW](link).

## Browser Compatibility

Tested only on Windows with the latest version of **Chrome** and **Tampermonkey**. *(Will update this as I keep testing other platforms and devices.)*

## Credits

This project makes use of:

- [Tampermonkey](https://www.tampermonkey.net) by Jan Biniok
- [tiktoken](https://github.com/openai/tiktoken/tree/main) by OpenAI
- [GPT-3-Encoder](https://github.com/latitudegames/GPT-3-Encoder) by Latitude Games

## Contributing

Open for whatever.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you want to support more projects like this here's a link: [Sprite6](https://ko-fi.com/sprite6). 
