# Emotional Tone Detector

This project is an **Emotional Tone Detector** built with React.js. It uses the Hugging Face API to analyze the emotional tone of a given text input and provides a visual representation of the detected emotions.


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Creating an API Key](#creating-an-api-key)
  - [Setting Up Environment Variables](#setting-up-environment-variables)
- [Limitations of the API](#limitations-of-api)

## Features

- Analyze emotional tone of text input
- Display detected emotions
- Emotions:
    - Angry
    - Joy
    - Suprised
    - Fear
    - Sad
    - No emotion

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v18 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository
    ```bash
    git clone https://github.com/Joshdg1/EmotionalToneDetector.git

    cd emotional-tone-detector
    ```

2. Install the dependencies once you're in your project in any IDE

    ```
    npm install
    ```

### Creating an API key

To use the Hugging Face API, you need to create an API key:

1. Go to [HuggingFace](https://huggingface.co/)
2. Create an account or log in if you already have one.
3. Once logged in, navigate to your account settings by clicking on your profile picture in the top right corner and selecting `Settings`.
4. In the settings menu, find the `Access Tokens` section.
5. Click on `New token` to create a new API key.
6. Name your token and set the desired permissions (`Read` is fine for this case).
7. Click `Generate` to create your token. Copy the generated token, as you will need it for the next step.

### Setting up environment variables

1. In the root of your project directory, create a new file named `.env` by copying the template:
```bash
    cp .env.example .env
```

2. Open the .env file and put in your API key.
3. Save the .env file.

### Start the server

Run the dev server and test out the project by running the following command:
```bash
npm start
```

### Limitations of API

**You can only do a call after 20 seconds because the API is loading**