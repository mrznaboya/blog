import axios from "axios";

export default axios.create({
  baseURL: "<Your ngrok forwrarding address>",
});
