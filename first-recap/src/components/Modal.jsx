import styles from "./Modal.module.css"

const Modal = ({ children, toggleModal }) => {
    return (
        <>
            <div className={styles.backdrop} onClick={toggleModal}>
                <dialog open className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    {children}
                </dialog>
            </div>
        </>
    )
}

export default Modal;