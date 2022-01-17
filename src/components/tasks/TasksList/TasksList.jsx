import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { selectAllProjects } from '../../../features/projects/projectsSlice';
import { Autocomplete, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import styles from './TasksList.module.sass'
import { selectAllTasks, selectTasksByProject, selectTasksByProjectName } from '../../../features/tasks/tasksSlice';
import { Link } from 'react-router-dom';


  const TasksList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'summary', headerName: 'summarry', width: 150 },
        {
            field: 'project',
            headerName: 'Project',
            width: 150,
            valueGetter: (params) =>
            `${params.row.project.name}`,
        },
        { field: 'Link', headerName: 'Link', width: 150,
            renderCell: (params) => (
                
                <Link className={styles.menuLink} to={`/workitem/${params.id}`}>
                    WorkItems
                </Link>
            )
        },
      ];
    
    const projects = useSelector(selectAllProjects)

    const [selectedProject, setSelectedProject] = useState(0)
    const [autocompleteProject, setAutocompleteProject] = useState('')
    const [open, setOpen] = useState(false)
    
    let selector = (state) => {
        if(autocompleteProject.length > 0) {
            return selectTasksByProjectName(state.tasks, autocompleteProject)
        }
        else 
        if(selectedProject === 0) {
            return selectAllTasks(state)
        }
        else {
            return selectTasksByProject(state, selectedProject)
        }
    }

    const tasks = useSelector((state) => selector(state) )
    

    const handleAutocompleteOpen = () => {
        if (autocompleteProject.length >= 3) {
          setOpen(true);
        }
      };
      
    const onChangeProject = (event) => setSelectedProject(event.target.value)
    const onAutocompleteChange = (event, newInputValue) => {
        setAutocompleteProject(newInputValue)
        setSelectedProject(0)
        if (newInputValue.length >= 3) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      };
      
    const renderedProjectsSelect = projects.map((item) => (
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
            
        ))
    return (
            <div className={styles.tasksList}>
                <div className={styles.tasksFilter}>
                    <div>
                        <InputLabel id="select-project-label">Select Project</InputLabel>
                        <Select value={selectedProject} labelId="select-project-label" onChange={onChangeProject} style={{width: '300px', marginBottom: '20px'}}>   
                            <MenuItem value={0}>All</MenuItem>
                            {renderedProjectsSelect}
                        </Select>
                    </div>
                    <div className={styles.autocomplete}>
                        <InputLabel id="input-project-label">Search</InputLabel>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={projects}
                            inputValue={autocompleteProject}
                            onOpen={handleAutocompleteOpen}
                            onClose={() => setOpen(false)}
                            onInputChange={onAutocompleteChange}
                            open={open}
                            getOptionLabel={(option) => option.name}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} placeholder='start writing...g'/>}
                        />
                    </div>
                </div>
              <DataGrid 
                autoHeight={true} 
                autoWidth={true} 
                rows={tasks} 
                columns={columns} 
                disableColumnFilter={true}
                disableColumnMenu={true}
                disableColumnSelector={true}
                disableSelectionOnClick={true}
                pageSize={30}/>
          </div>
      )
  }

  export default TasksList