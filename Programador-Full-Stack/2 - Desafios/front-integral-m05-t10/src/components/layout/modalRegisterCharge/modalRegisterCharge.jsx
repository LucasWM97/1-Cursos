import Modal from "@mui/material/Modal";
import { FormCharge } from "../../forms/FormCharge/FormCharge";
import "./style.css";

export function ModalRegisterCharge({ open, onClose, clientId }) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div>
          <FormCharge clientId={clientId} onClose={onClose} />
        </div>
      </Modal>
    </div>
  );
}
