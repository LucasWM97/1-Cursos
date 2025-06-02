import viacep from "../lib/viacep";

export async function handleZipCodeBlur(setFormData, cep) {
  const zipCode = cep.toString().replace(/\D/g, "");

  if (zipCode) {
    const response = await viacep.get(`/${zipCode}/json/`);
    const data = response.data;

    setFormData((prevFormData) => ({
      ...prevFormData,
      cep: data.cep || "",
      address: data.logradouro || "",
      district: data.bairro || "",
      complement: data.complemento || "",
      city: data.localidade || "",
      uf: data.uf || "",
    }));
  }
}
