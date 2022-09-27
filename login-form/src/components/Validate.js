export const validate = (data) => {
  const errors = {};
  if (!data.username.trim()) {
    errors.username = "Username is required";
  } else {
    delete errors.username;
  }
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is not valid";
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password should be 6 characters or more";
  } else {
    delete errors.password;
  }
  if (!data.confirmPass) {
    errors.confirmPass = "Confirm password !";
  } else if (data.confirmPass !== data.password) {
    errors.confirmPass = "password is incorrect";
  } else {
    delete errors.confirmPass;
  }
  if (!data.IsAccepted) {
    errors.IsAccepted = "Please accept our conditions";
  } else {
    delete errors.IsAccepted;
  }
  return errors;
};
