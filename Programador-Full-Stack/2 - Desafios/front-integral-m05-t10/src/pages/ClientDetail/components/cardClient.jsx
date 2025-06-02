import { FormModal } from "../../../components/layout/FormModal";
import UseUser from "../../../hooks/useUser";

export function CardClientData({ client }) {
  const { setOpen } = UseUser();
  const handleOpen = () => setOpen(true);

  return (
    <div className="client-detail-data-card  flex-center-column">
      <header className="heading">
        <h1>Dados do Cliente</h1>
        <button onClick={handleOpen} className="edit-client-button">
          <FormModal pageName={"Editar clientes"} />
          Editar Cliente
        </button>
      </header>

      <div className="client-data">
        <div className="email">
          <h3>E-mail</h3>
          <span style={{ marginRight: "70px" }}>{client.email}</span>
        </div>
        <div className="phone">
          <h3>Telefone</h3>
          <span style={{ marginRight: "75px" }}>{client.phone}</span>
        </div>
        <div className="cpf">
          <h3>CPF</h3>
          <span>{client.cpf}</span>
        </div>
      </div>

      <div className="client-address-data">
        <div className="address">
          <h3>Endereço</h3>
          <span>{client.address || "-"}</span>
        </div>
        <div className="district">
          <h3>Bairro</h3>
          <span>{client.district || "-"}</span>
        </div>
        <div className="complement">
          <h3>Complemento</h3>
          <span>{client.complement || "-"}</span>
        </div>
        <div className="cep-city-uf">
          <div className="cep">
            <h3>CEP</h3>
            <span>{client.cep || "-"}</span>
          </div>
          <div className="city">
            <h3>Cidade</h3>
            <span>{client.city || "-"}</span>
          </div>
          <div className="uf">
            <h3>UF</h3>
            <span>{client.uf || "-"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
