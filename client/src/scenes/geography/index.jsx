import React from "react";
import {
    Box,
    useTheme,
} from "@mui/material";
import Header from "components/Header";
import { useGetGeographyQuery } from "state/api";


const Geography = () => {
    const theme = useTheme()
    const { data, isLoading } = useGetGeographyQuery()
    console.log("Data", data)

    return (
        <Box m="1.5rem 2rem">
            <Header title="GEOGRAPHY" subtitle="Map of the Geography" />
        </Box>
    )
}

export default Geography
