import { ModalPropsInterface } from "./interfaces";

const Modal: React.FC<ModalPropsInterface> = ({
  width,
  height,
  children,
  onClose,
}) => {
  return (
    <div
      className="absolute top-[50%] left-[50%] inset-0 z-50 flex items-center justify-center w-[90%] h-[85%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      onClick={onClose}
    >
      <div
        className={` inset-0 transition-opacity${
          !!onClose ? " cursor-pointer" : ""
        }`}
        onClick={onClose}
      />

      <div
        className={`bg-white rounded-3xl overflow-x-hidden overflow-y-auto shadow-lg ${
          width ? `w-${width}` : ""
        } ${height ? `h-${height}` : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
