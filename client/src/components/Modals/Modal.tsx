import  {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { generateClassName } from "../../helpers/generateClassName";
import CloseButton from "../Buttons/CloseButton";
import Form from "../Form/Form";
import { Button } from "../Buttons/Button";

export interface ModalProps {
  onClose: () => void;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

export interface CreateUpdateModalProps {
  onClose: () => void;
  edit?: boolean
}

interface ModalHeaderProps {
  children?: React.ReactNode;
}

interface ModalFormProps {
  children?: React.ReactNode;
}

interface ModalBodyProps {
  children?: React.ReactNode;
}

interface ModalFooterProps {
  children?: React.ReactNode;
  onConfirm?: VoidFunction;
  confirmBtnName?: string;
  cancelButtonName?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confrimDisabled?: boolean;
  confirmPromise?: Promise<object>;
  confirmPending?: boolean;
}

type ModalCloseFunction = VoidFunction;

type ModalContextType = {
  onClose: ModalCloseFunction;
};

type ModalTitleProps = {
  children?: React.ReactNode;
};

const ModalContext = createContext<ModalContextType>({
  onClose: () => false,
});

const MAIN_CLASSNAME = "modal";

function Modal({ onClose, size = "medium", children }: ModalProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME, size);
  const ContainerClassName = generateClassName(MAIN_CLASSNAME + "-container");
  const mouseDownOutside = useRef(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleClose = () => {
    if (onClose && mouseDownOutside.current) onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, []);

  return createPortal(
    <div
      className={ContainerClassName}
      onClick={handleClose}
      onMouseDown={() => (mouseDownOutside.current = true)}
    >
      <div
        className={ClassName}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={() => (mouseDownOutside.current = false)}
      >
        <ModalContext.Provider value={{ onClose }}>
          {children}
        </ModalContext.Provider>
      </div>
    </div>,
    document.getElementById("root") as Element
  );
}

Modal.Header = function MHeader({ children }: ModalHeaderProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME + "-header");

  const { onClose } = useContext(ModalContext);

  return (
    <div className={ClassName}>
      {children}
      <CloseButton onClick={onClose} iconColor="white" />
    </div>
  );
};

Modal.Form = function MForm({ children }: ModalFormProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME + "-form");

  return <Form className={ClassName}>{children}</Form>;
};

Modal.Body = function MBody({ children }: ModalBodyProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME + "-body");

  return <div className={ClassName}>{children}</div>;
};

Modal.Footer = function MFooter({
  children,
  onConfirm,
  confirmBtnName = "Подтвердить",
  confrimDisabled = false,
  cancelButtonName = "Отмена",
  showCancelButton = true,
  showConfirmButton = true,
  confirmPending = false,
}: ModalFooterProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME + "-footer");
  const { onClose } = useContext(ModalContext);
  const [pending, setPending] = useState(false);

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onClose();
  };

  useEffect(() => {
    setPending(confirmPending);
  }, [confirmPending]);

  return (
    <div className={ClassName}>
      {children}
      {onClose && showCancelButton && (
        <Button onClick={onClose}>{cancelButtonName}</Button>
      )}
      {onConfirm && showConfirmButton && (
        <Button
          showLoader={pending}
          disabled={confrimDisabled}
          onClick={handleConfirm}
        >
          {confirmBtnName}
        </Button>
      )}
    </div>
  );
};

Modal.Title = function MTitle({ children }: ModalTitleProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME + "-title");

  return <div className={ClassName}>{children}</div>;
};

export default Modal;
