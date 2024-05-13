import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai"

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-items-center z-40 absolute top-0 backdrop-blur h-screen w-screen ">
            <div className="m-auto relative z-50 bg-white min-h-[200px] min-w-[80%] p-4 rounded">
                <div className="flex justify-end">
                    <AiOutlineClose onClick={onClose} className="text-2xl cursor-pointer"/>
                </div>
                {children}
            </div>
        </div>
    )}
    </>
  ,document.getElementById("modal-root")
);
}

export default Modal
