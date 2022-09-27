import { toast } from "react-toastify";
export const notify = (type) => {
  if (type === "success") {
    toast.success("Signed up successfully!");
  } else {
    toast.error("Invalid data !");
  }
};
