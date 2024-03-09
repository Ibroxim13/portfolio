import { toast, Bounce } from "react-toastify";
export const Message = (text = "Message received! I'll be in touch soon.") => {
    toast.success(text, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}