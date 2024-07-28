import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const socket = useRef(null);

  useEffect(() => {
    if (isConnected) {
      socket.current = new WebSocket(`ws://localhost:8000/ws/${username}`);
      socket.current.onmessage = (event) => {
        setMessages((prevMessages) => [...prevMessages, event.data]);
      };
      return () => {
        socket.current.close();
      };
    }
  }, [isConnected, username]);

  const connect = (e) => {
    e.preventDefault();
    if (username) {
      setIsConnected(true);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message && socket.current) {
      socket.current.send(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      {!isConnected ? (
        <form className="username-form" onSubmit={connect}>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
          <button type="submit">Join Chat</button>
        </form>
      ) : (
        <div className="chat-box">
          <h1>RealTime Chat App with FastAPI</h1>
          <ul className="messages">
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
          <form className="message-form" onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
