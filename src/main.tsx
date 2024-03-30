import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { generateUsers } from "./Services/serviceUsers";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { DummyUser } from "./types.ts";

const generatedUsers: DummyUser[] = generateUsers(40);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App generatedUsers={generatedUsers} />
    </React.StrictMode>
);

