import "./App.css";
import UsersTable from "./Components/UsersTable";
import ChartTime from "./Components/ChartTime";
import { generateUsers } from "./Services/serviceUsers";
import { DummyUser } from "./types";
import { Box } from "@mui/material";

function App() {
    const dummyUsers: DummyUser[] = generateUsers(10);

    return (
        <Box sx={{ display: "flex" }}>
            <UsersTable dummyUsers={dummyUsers} />
            <ChartTime dummyUsers={dummyUsers} />
        </Box>
    );
}

export default App;

