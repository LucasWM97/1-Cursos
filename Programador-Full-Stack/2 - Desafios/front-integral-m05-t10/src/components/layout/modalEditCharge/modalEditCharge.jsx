import Modal from "@mui/material/Modal";
import { FormEditCharge } from "../../forms/formEditCharge/FormEditCharge";
import "./style.css";

export function ModalEditCharge({ open, onClose, chargeId, getCharges }) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div>
          <FormEditCharge
            chargeId={chargeId}
            onClose={onClose}
            getCharges={getCharges}
          />
        </div>
      </Modal>
    </div>
  );
}
