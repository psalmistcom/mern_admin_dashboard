import React, { useState } from "react";
import {
    Box,
    useTheme,
    FormControl,
    MenuItem,
    InputLabel,
    Select
} from "@mui/material";
import OverviewChart from "components/OverviewChart"
import Header from "components/Header";
import { useGetSalesQuery } from "state/api";

const Sales = () => {
    const theme = useTheme()
    const [view, setView] = useState("units")

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Sales Overview" subtitle="List of general Sales overview" />

            <Box height="75vh">
                <FormControl sx={{ mt: "1rem" }} >
                    <InputLabel>View</InputLabel>
                    <Select value={view} label="View" onChange={(e) => setView(e.target.value)}>
                        <MenuItem value="sales">Sales</MenuItem>
                        <MenuItem value="units">Units</MenuItem>
                    </Select>
                </FormControl>
                <OverviewChart view={view} />
            </Box>
        </Box>
    )
}

export default Sales