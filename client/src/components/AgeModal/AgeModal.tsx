import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';
import styles from './AgeModal.module.css';
import { Link } from 'react-router-dom'; 

export default function AgeVerificationModal({ isOpen, onClose, onConfirm }) {
    const [isOver18, setIsOver18] = useState(false);

    const handleConfirm = () => {
        setIsOver18(true);
        onConfirm();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay className={styles.ModalS} />
            <ModalContent className={styles.ModalHeaderCentered} style={{ marginTop: '250px', width: '800px', height: '300px' }} >
                <h2 style={{ fontSize: '30px', marginTop: '30px' }}>Вам есть 18 лет?</h2>
                <ModalHeader className={styles.ModalHeaderCentered}>Для доступа на сайт необходимо подтвердить возраст</ModalHeader>
                <ModalBody className={styles.ModalHeaderCentered}>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="green" mr={5} onClick={handleConfirm}>
                        Да, мне есть 18 лет
                    </Button>
                    <Link to="/limitation">
                        <Button colorScheme="blue" mr={3}>
                            Нет, я младше
                        </Button>
                    </Link>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
