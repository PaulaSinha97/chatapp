import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:3001',{
  transports: ['websocket'], // Optional, forces WebSocket
});

export const Chat = () => {
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState('');
  const [userData,setUserData] = useState({name:''});

  useEffect(() => {
    // Load existing messages
    axios.get('http://localhost:3001/chat').then((res:any) => {
     res?.data?.length ?  setMessages(res.data?.[0]?.messages) : setMessages([]);
    });
    // Listen for real-time messages
    socket.on('newMessage', (msg:any) => {
      setMessages((prev:any) => [...prev, msg.messages[(msg?.messages?.length)-1]]);
    });

    const userId = sessionStorage.getItem("id")
    axios.get(`http://localhost:3001/users/${userId}`).then((res:any) => {
      setUserData(res.data);
    });
    return () => {
      socket.off('newMessage');
    };
  }, []);

  useEffect(() => {
  if (socket) {
    socket.emit('join_room','Pullar');
  }
}, [socket]);

// socket.addEventListener('open', function (event) {
//     console.log('connected');
// });


  const sendMessage = () => {
    if (!input) return;
    socket.emit('sendMessage', {
      roomId: 'Tushar',
      username: userData?.name,
      message: input,
    });
    setInput('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chat App (Real-Time)</h2>
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid gray', padding: 10 }}>
        {messages.map((msg:any, idx:any) => (
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
