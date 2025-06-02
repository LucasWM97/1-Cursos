const api = axios.create({
  baseURL: 'https://crud-user-api.vercel.app',
  timeout: 10000,
  headers: { 'Content-Type': 'Application/json', }
});