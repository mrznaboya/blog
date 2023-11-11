import axios from "axios";

export default axios.create({
  baseURL: "<Your ngrok forwarding address>",
});
