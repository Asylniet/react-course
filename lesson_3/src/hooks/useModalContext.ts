import React from "react";
import { ModalContext } from "../context/modalContext";


export const useModalContext = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
}