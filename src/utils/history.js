import { createBrowserHistory } from "history";
const baseUrl = process.env.NODE_ENV === "production" ? "/ping-pong" : "/";
const history = createBrowserHistory({ basename: baseUrl });
export default history;
