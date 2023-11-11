# blog

Hey, my dudes! I'm still learning how to create an app. This is a blog app.

Please supply your own ngrok forwarding address in src/api/jsonServer.js

```
import axios from "axios";

export default axios.create({
  baseURL: "<your ngrok address>",
});
```
