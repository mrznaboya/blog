# blog

Hey, my dudes! I'm still learning how to create an app. This is a blog app.

I have ignored jsonServer.js in my api folder for security purposes so please supply your own ngrok link.

create src/api folder and then jsonServer.js

```
import axios from "axios";

export default axios.create({
  baseURL: "<your ngrok link>",
});
```
