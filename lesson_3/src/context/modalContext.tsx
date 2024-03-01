import React from "react";

type TModalContext = {
  isOpen: boolean,
  closeModal: () => void,
  openModal: () => void
}

export const ModalContext = React.createContext<TModalContext | undefined>(undefined);