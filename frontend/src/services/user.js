import axios from "axios";
import { UserAPI } from "./routes";
import { refresh_token } from "./auth";
import { handle_response, handle_retry_response } from "./utils";


export const get_user = async () => 
  handle_retry_response(refresh_token,
    () => axios.get(UserAPI.user, { withCredentials: true })
  );

export const get_users = async () => 
  handle_response(()=>axios.get(UserAPI.users, { withCredentials: true }));
