import { Container} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectWorkItemByTask } from "../../features/workItems/workItemsSlice";

const WorkItems = () => {

    
    const columns = [
        {
            field: 'author',
            headerName: 'author',
            width: 250,
            valueGetter: (params) =>
            `${params.row.author.name}`,
        },
        { 
            field: 'duration', 
            headerName: 'duration', 
            width: 150,
            valueGetter: (params) => `${params.row.duration.presentation}`
        },
      ];

    let params = useParams();
    const workItems = useSelector((state) => selectWorkItemByTask(state, params.taskId))

    return (
        <Container maxWidth="xl">
           <DataGrid 
                autoHeight={true} 
                autoWidth={true} 
                rows={workItems} 
                columns={columns} 
                disableColumnFilter={true}
                disableColumnMenu={true}
                disableColumnSelector={true}
                disableSelectionOnClick={true}
                pageSize={30}/>
        </Container>
    )
}

export default WorkItems