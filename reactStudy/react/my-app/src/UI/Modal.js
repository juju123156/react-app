import React from "react";

import styles from "./Modal.module.css";

function Modal({ setModalOpen }) {
  // 모달창 닫기
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.modalHeader}></div>
        <div className={styles.modalBody}></div>
        <div className={styles.modalFooter}>
          <button className={styles.modalButton} onClick={closeModal}>닫기</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
