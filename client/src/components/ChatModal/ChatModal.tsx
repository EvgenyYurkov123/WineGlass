
import React from 'react';
import {
  Box,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons';
import Chat from '../Chat/Chat';
import styles from './ChatModal.module.css';

const ChatModal = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={styles.buttonContainer}>
        <IconButton className={styles.ChatFlagMod} bg='red' isRound={true} icon={<ChatIcon color='white' />} aria-label="Открыть чат" onClick={onOpen} />
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className={styles.ChatModCont} position="fixed"
          bottom="30px"
          right="30px"
          zIndex={999}>
          <ModalHeader>Чат</ModalHeader>
          <ModalCloseButton />
          <ModalBody className={styles.ChatBody} >
            <Box bg="gray.100">
              {<Chat />}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChatModal;

