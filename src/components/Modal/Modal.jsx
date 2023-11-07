import React from "react";
import modalStyle from "./Modal.module.css";

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? modalStyle.modal + " " + modalStyle.active : modalStyle.modal}
             onClick={() => setActive(false)}>
            <div className={active ? modalStyle.modal__content + " " + modalStyle.active : modalStyle.modal__content}
                 onClick={event => event.stopPropagation()}>

                {children}

            </div>
        </div>
    )
}
export default Modal