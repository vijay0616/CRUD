import React, { FC } from "react";

import Modal from "@mui/material/Modal";
import { ModalWindowProps } from "./types";

export const ModalWindow: FC<ModalWindowProps> = (props) => {
  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
    props.setOpen(false);
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby={props.ariaLabelText}
        aria-describedby={props.ariaDescribedByText}
      >
        {props.children}
      </Modal>
    </div>
  );
};
