import Modal from "@mui/material/Modal";
import "./style.css";
import UseUser from "../../../hooks/useUser";
import { Button } from "@mui/base";
import { FormModalDefault } from "../../forms/FormModalDefault";
import editIconGreen from "../../../assets/editIconGreen.svg";

export function FormModal({ pageName }) {

  
  const { open, setOpen } = UseUser();
  const handleOpen = () => setOpen(true); 
  const handleClose = () => setOpen(false);
  return (
    <div>
      {pageName === "Clientes" ? (
        <Button className="add-button" onClick={handleOpen}>
          + Adicionar cliente
        </Button>
      ) : pageName === "Editar clientes" ? (
        <img src={editIconGreen} />
      ) : null}

      <Modal
        open={open}
        onClose={handleClose}
        onClick={(e) => e.stopPropagation()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          {pageName === "Clientes" ? (
            <FormModalDefault onClose={handleClose} pageName={"Clientes"} />
          ) : pageName === "Editar clientes" ? (
            <FormModalDefault
              onClose={handleClose}
              pageName={"Editar clientes"}
            />
          ) : null}
        </div>
      </Modal>
    </div>
  );
}
