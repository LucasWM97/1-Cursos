import { useState } from "react";

import Modal from "@mui/material/Modal";

import editIcon from "../../../assets/editIcon.svg";

import "./style.css";
import { FormEdit } from "../../forms/FormEdit";

export function FormModalEditUsers() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <img onClick={handleOpen} src={editIcon} />
      <p>Editar</p>

      <Modal
        type="button"
        open={openModal}
        onClose={handleClose}
        onClick={(e) => e.stopPropagation()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="">
          <FormEdit onClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
}
