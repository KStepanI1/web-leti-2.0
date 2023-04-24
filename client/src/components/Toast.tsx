import {
  toast,
  ToastOptions,
  TypeOptions,
  UpdateOptions,
} from "react-toastify";

export interface ToastProps {
  type?: TypeOptions;
  message: string;
  options?: ToastOptions;
}

export interface FileToastProps extends ToastProps {
  id: number | null;
  options?: UpdateOptions & ToastOptions;
}

const defaultOptions: ToastOptions = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 3000,
  closeButton: false,
  hideProgressBar: true,
};

export const ClearToastAll = () => toast.dismiss();
export const ClearToastById = (id: number) => toast.dismiss(id);

export const ToastPromise = ({
  promise,
  success,
  error,
  pending,
  options,
}: {
  promise: Promise<unknown>;
  success: string;
  error: string;
  pending: string;
  options?: ToastOptions;
}) => {
  return toast.promise(
    promise,
    { error, success, pending },
    { ...defaultOptions, ...options }
  );
};

export const Toast = ({ type = "info", message, options }: ToastProps) => {
  return toast(message, { ...defaultOptions, ...options, type });
};
