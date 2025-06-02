export const redirectToLogin = (navigate) => {
  sessionStorage.clear();
  navigate("/login");
  return;
};
