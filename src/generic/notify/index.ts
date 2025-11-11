import toast from "react-hot-toast";

type NotifType = "login" | "login_error";
export const notificationApi = () => {
  const notify = (type: NotifType) => {
    switch (type) {
      case "login":
        return toast.success("Welcome to dashboard");
      case "login_error":
        return toast.success("Email or password wrong!!!");
    }
  };
  return notify;
};
