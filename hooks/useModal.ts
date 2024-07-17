import { useState, useCallback } from 'react';

const useModal = () => {
    const [modals, setModals] = useState<{ [key: string]: boolean }>({});

    const openModal = useCallback((id: string) => {
        setModals(prevModals => ({ ...prevModals, [id]: true }));
    }, []);

    const closeModal = useCallback((id: string) => {
        setModals(prevModals => ({ ...prevModals, [id]: false }));
    }, []);

    const toggleModal = useCallback((id: string) => {
        setModals(prevModals => ({ ...prevModals, [id]: !prevModals[id] }));
    }, []);

    const isOpen = useCallback((id: string) => !!modals[id], [modals]);

    return { openModal, closeModal, toggleModal, isOpen };
};

export default useModal;