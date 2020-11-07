import { toast } from "react-toastify";

const options = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }
export const dispError = (err)=>{
    toast.error(err.response.data.msg, options);
}
export const dispSuccess = (msg)=>{
    toast.success(msg, options)
}
