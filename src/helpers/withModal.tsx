import React, { useState } from "react";

interface ModalContentProps {
  onCancel: () => void;
  onAccept: () => void;
}

function withModal<T>(
  WrappedComponent: React.ComponentType<T & ModalContentProps>
) {
  return function ModalWrapper(props: T) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    const handleAccept = () => {
      console.log("Accepted");
      closeModal();
    };

    const handleCancel = () => {
      console.log("Cancelled");
      closeModal();
    };

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <WrappedComponent
                {...props}
                onCancel={handleCancel}
                onAccept={handleAccept}
              />
            </div>
          </div>
        )}
      </div>
    );
  };
}

// Modal content component
function ModalContent({ onCancel, onAccept }: ModalContentProps) {
  return (
    <div>
      <h2>Modal Content</h2>
      <p>This is the modal content.</p>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onAccept}>Accept</button>
    </div>
  );
}

// Wrapped modal content component
const Modal = withModal(ModalContent);

// Usage
function App() {
  return (
    <div>
      <h1>Higher-Order Component Modal Example</h1>
      <Modal />
    </div>
  );
}

export default App;
