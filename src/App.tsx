import { useState } from "react";
import "./App.css";
import UsersTable from "./Components/UsersTable";
import ChartTime from "./Components/ChartTime";
import { DummyUser } from "./types";
import { Stack } from "@mui/material";

interface Props {
    generatedUsers: DummyUser[];
}

function App({ generatedUsers }: Props) {
    const [selectedUsers, setSelectedUsers] = useState<DummyUser[]>([]);
    const [showAvailability, setShowAvailability] = useState<boolean>(false);

    return (
        <Stack
            direction={{ xs: "column", lg: "row" }}
            sx={{ width: { xs: "90%", lg: "100%" }, mx: "auto" }}
        >
            <UsersTable
                dummyUsers={generatedUsers}
                setSelectedUsers={setSelectedUsers}
                showAvailability={showAvailability}
                setShowAvailability={setShowAvailability}
            />
            {showAvailability && <ChartTime dummyUsers={selectedUsers} />}
        </Stack>
    );
}

export default App;

