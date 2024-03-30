import React, { useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { DummyUser, WeekFreeTime } from "../../types";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Typography,
} from "@mui/material";

interface Props {
    dummyUsers: DummyUser[];
}

const ChartTime = ({ dummyUsers }: Props) => {
    const [day, setDay] = useState<keyof WeekFreeTime>("Sunday");

    interface Hour {
        hourName: number;
        freeHours: number;
    }

    // Only for Sunday first
    let hours: Hour[] = [];
    for (let currentHour = 0; currentHour <= 23; currentHour++) {
        let SundayDayFreeHours = 0;
        dummyUsers.forEach((user) => {
            const freeTimePeriod = user.freeTime[day].freeTimePeriods[0];

            if (
                currentHour >= freeTimePeriod.startTime &&
                currentHour <= freeTimePeriod.endTime
            ) {
                SundayDayFreeHours++;
            }
        });
        hours = hours.concat({
            hourName: currentHour,
            freeHours: SundayDayFreeHours,
        });
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%" }}>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ justifyContent: "space-between" }}
                >
                    <Box>
                        <Typography
                            sx={{ flex: "1 1 100%", textAlign: "left", p: 2 }}
                            variant="h6"
                            id="tableTitle"
                            component="div"
                        >
                            Availability
                        </Typography>
                    </Box>
                    <Box>
                        <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">
                                Day
                            </InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={day}
                                label="Day"
                                onChange={(event) =>
                                    setDay(
                                        event.target.value as keyof WeekFreeTime
                                    )
                                }
                            >
                                <MenuItem value={"Sunday"}>Sunday</MenuItem>
                                <MenuItem value={"Monday"}>Monday</MenuItem>
                                <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                                <MenuItem value={"Wednesday"}>
                                    Wednesday
                                </MenuItem>
                                <MenuItem value={"Thursday"}>Thursday</MenuItem>
                                <MenuItem value={"Friday"}>Friday</MenuItem>
                                <MenuItem value={"Saturday"}>Saturday</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>

                <BarChart
                    layout="vertical"
                    width={400}
                    height={500}
                    data={hours}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <XAxis
                        label={{
                            value: "Free hours",
                            position: "bottom",
                        }}
                    />
                    <YAxis
                        dataKey="hourName"
                        stroke="#8884d8"
                        type="category"
                        interval="preserveStartEnd"
                        label={{
                            value: "Time of day",
                            angle: -90,
                            position: "insideLeft",
                        }}
                    />
                    <Tooltip
                        wrapperStyle={{ width: 100, backgroundColor: "#ccc" }}
                    />
                    <Legend
                        width={100}
                        wrapperStyle={{
                            top: 40,
                            right: 40,
                            backgroundColor: "#f5f5f5",
                            border: "1px solid #d5d5d5",
                            borderRadius: 3,
                            lineHeight: "10px",
                        }}
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
                    <Bar dataKey="freeHours" fill="#8884d8" barSize={10} />
                </BarChart>
            </Paper>
        </Box>
    );
};

export default ChartTime;
