import { Button, Container} from "@mui/material";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { exportPdfTable } from "../../services/exportPdfTable";
const WorkItemsTable = (props) => {
    
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


    function CustomToolbar() {
        return (
          <GridToolbarContainer>
            <Button onClick={() => exportPdfTable(props.workItems)}>Export</Button> 
          </GridToolbarContainer>
        );  
      }

    return (
        <Container maxWidth="xl">
           <DataGrid 
                autoHeight={true} 
                autoWidth={true} 
                rows={props.workItems} 
                columns={columns} 
                disableColumnFilter={true}
                disableColumnMenu={true}
                disableColumnSelector={true}
                disableSelectionOnClick={true}
                components={{
                    Toolbar: CustomToolbar,
                }}
                pageSize={30}/>
        </Container>
    )
}

export default WorkItemsTable