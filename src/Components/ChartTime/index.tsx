import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { DummyUser } from "../../types";
import { Box, Paper } from "@mui/material";

interface Props {
    dummyUsers: DummyUser[];
}

const ChartTime = ({ dummyUsers }: Props) => {
    // const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
    // const data = [{ name: "0", freeHours: 400 }, { name: "1", freeHours: 400 }, ...];

    interface Hour {
        hourName: number;
        freeHours: number;
    }

    // Only for Sunday first
    let hours: Hour[] = [];
    for (let currentHour = 0; currentHour <= 23; currentHour++) {
        let SundayDayFreeHours = 0;
        dummyUsers.forEach((user) => {
            const freeTimePeriod = user.freeTime.Sunday.freeTimePeriods[0];

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
            <Paper sx={{ width: "100%", mb: 2 }}>
                <BarChart width={600} height={300} data={hours}>
                    <XAxis dataKey="hourName" stroke="#8884d8" label="Hour" />
                    <YAxis />
                    <Tooltip
                        wrapperStyle={{ width: 100, backgroundColor: "#ccc" }}
                    />
                    <Legend
                        width={100}
                        wrapperStyle={{
                            top: 40,
                            right: 20,
                            backgroundColor: "#f5f5f5",
                            border: "1px solid #d5d5d5",
                            borderRadius: 3,
                            lineHeight: "40px",
                        }}
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="freeHours" fill="#8884d8" barSize={30} />
                </BarChart>
            </Paper>
        </Box>
    );
};

export default ChartTime;
