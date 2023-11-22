import React, { SetStateAction, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Box, List, ListItem, Input, IconButton, InputGroup, InputRightElement } from "@chakra-ui/react";
import { PlusSquareIcon } from '@chakra-ui/icons';
import styles from './Chat.module.css';

const Chat = () => {
  const initMessage = 'Здравствуйте, я ваш ассистент! Помогу с выбором или уточню наличие. Пишите!'
  const [messages, setMessages] = useState<string[]>([initMessage]);
  const [inputValue, setInputValue] = useState<string>('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3002');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('message', (message: string) => {
        setMessages(prevMessages => [...prevMessages, message]);
      });
    }
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault(); // Предотвращаем дефолтное поведение формы (перезагрузку страницы)
    if (socket) {
      socket.emit('message', inputValue);
      setInputValue('');
    }
  };

  return (
    <Box className={styles.ChatFlag} display="flex" flexDirection="column">
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>{message}</ListItem>
        ))}
      </List>
      <form onSubmit={sendMessage}> 
        <InputGroup size='md' background='white' >
          <Input
            type="text"
            value={inputValue}
            placeholder="Написать сообщение..."
            mt='10'
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setInputValue(e.target.value)}
          />
          <InputRightElement width='4.5rem' mt='10'>
            <IconButton h='1.75rem' size='xl' ml='8' background='white' icon={<PlusSquareIcon />} type="submit" aria-label={''}>
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};

export default Chat;
