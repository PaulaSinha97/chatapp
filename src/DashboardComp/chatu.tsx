import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:3001');

export const Chat = () => {
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('User' + Math.floor(Math.random() * 1000));

  useEffect(() => {
    // Load existing messages
    axios.get('http://localhost:3001/chat').then((res:any) => {
      setMessages(res.data?.[0]?.messages);
    });

    // Listen for real-time messages
    socket.on('newMessage', (msg:any) => {
      setMessages((prev:any) => [...prev, msg]);
    });

    return () => {
      socket.off('newMessage');
    };
  }, []);

  const sendMessage = () => {
    if (!input) return;
    socket.emit('sendMessage', {
      username,
      message: input,
    });
    setInput('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chat App (Real-Time)</h2>
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid gray', padding: 10 }}>
        {messages?.map((msg:any, idx:any) => (
          <div key={idx}><strong>{msg.username}:</strong> {msg.message}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type a message"
        style={{ width: '80%', marginTop: 10 }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
