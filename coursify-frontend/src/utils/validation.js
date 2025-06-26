export const validation = (name, value, errors) => {
  switch (name) {
    case "name":
      errors.name =
        value.length < 3 ? "Name must be at least 3 characters" : "";
      break;
    case "email":
      errors.email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? ""
        : "Invalid email address";
      break;
    case "password":
      errors.password =
        value.length < 3 ? "Password must be at least 3 characters" : "";
      break;
    default:
      break;
  }
  return errors;
};
