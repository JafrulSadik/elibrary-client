import toast from "react-hot-toast";

type Props = {
  message: string;
};

export const notify = (props: Props) => {
  const { message } = props;

  return toast.success(message, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      width: "600px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
};
