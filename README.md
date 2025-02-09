﻿# RealTime Chat Application with FastAPI and React

This is a real-time chat application built using FastAPI for the backend and React for the frontend. It allows users to join a chat room with a username, send and receive messages in real-time, and see notifications when users join or leave the chat.

## Features

- Real-time messaging using WebSocket
- User joins with a username and receives a unique ID
- Notifications when users join or leave the chat
- Simple and responsive UI built with React
- Persistent chat messages and username using localStorage (Note: This feature is not implemented yet)
- Button to disconnect from the chat

## Prerequisites

- Python 3.7+
- Node.js 12+

## Backend Setup (FastAPI)

1. Create a virtual environment and activate it:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

2. Install the required packages:

    ```bash
    pip install requirements.txt
    ```

## Frontend Setup (React)

1. Install necessary packages:

    ```bash
    npm install
    ```

## Usage

1. Start the FastAPI backend server:

    ```bash
    uvicorn main:app --reload
    ```

2. Start the React frontend server:

    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

4. Enter your username and join the chat.

5. Send and receive messages in real-time.

## Future Enhancements

- Implement feature to persist chat messages and username using localStorage.
- Add notifications when a user joins or leaves the chat.
- Improve UI design to be more colorful and use the full window size.
- Display additional information like the number of members in the chat room.
- Implement a feature to disconnect from the chat when the window is closed or refreshed.

# Usefull Documentation 
 - https://javascript.info/websocket
 - https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

# Preview 
https://github.com/user-attachments/assets/75340a7a-9215-46ff-a2ca-40eaad14e66d



