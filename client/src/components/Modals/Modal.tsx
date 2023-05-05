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
  onSubmit?: React.FormEventHandler
}

interface ModalBodyProps {
  children?: React.ReactNode;
}

interface ModalFooterProps {
  children?: React.ReactNode;
  onConfirm?: () => Promise<unknown>;
  confirmBtnName?: string;
  cancelButtonName?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confrimDisabled?: boolean;
  confirmPromise?: Promise<object>;
  confirmPending?: boolean;
  type?: 'submit' | 'default'
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleClose = () => {
    if (onClose && mouseDownOutside.current) onClose();
  };

  return createPortal(
    <div
      className={ContainerClassName}
      onClick={handleClose}
      onMouseDown={() => (mouseDownOutside.current = true)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
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

Modal.Form = function MForm({ children, onSubmit }: ModalFormProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME + "-form");

  return <Form onSubmit={onSubmit} className={ClassName}>{children}</Form>;
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
  type = 'default',
}: ModalFooterProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME + "-footer");
  const { onClose } = useContext(ModalContext);
  const [pending, setPending] = useState(false);

  const handleConfirm = async () => {
    if (onConfirm) await onConfirm();
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
      {(onConfirm || type === 'submit') && showConfirmButton  && (
        <Button
          type="submit"
          showLoader={pending}
          disabled={confrimDisabled}
          onClick={type === 'default' ? handleConfirm : undefined}
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
