export type ModalWindowProps = WithChildren<{
  ariaLabelText: string;
  ariaDescribedByText: string;
  onOpen?: () => void;
  onClose?: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>;
type WithChildren<T = unknown> = T & { children: JSX.Element };
