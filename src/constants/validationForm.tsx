export const validationForm = (email: any) => {
  const isNameValid =
    /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
  const isEmailValid =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email
    );

  if (!isNameValid) return "Email ID is not valid";
  if (!isEmailValid) return "Email ID is not valid";

  return null;
};
