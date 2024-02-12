import React, { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onCancel: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onAccept,
  onCancel,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
        <button className="accept-button" onClick={onAccept}>
          Accept
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
