import React from 'react';

interface ModalProps {
  onClose: () => void;
  setOpenOrderForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessModal: React.FC<ModalProps> = ({ onClose,setOpenOrderForm }) => {

const handelCloseSuccess =()=>{
    onClose()
    setOpenOrderForm(false)
}
    
  return (
    <div className="modal">
      <div className="modal__content">
        <h3>Замовлення успішно виконане!</h3>
        <p>Дякуємо за ваше замовлення. Ми зв'яжемося з вами в найближчий час.</p>
        <button className="modal__close" onClick={handelCloseSuccess}>
          Закрити
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
