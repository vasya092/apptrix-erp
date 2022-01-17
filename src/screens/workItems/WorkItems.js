import React from "react";
import WorkItemsTable from "../../components/workItems/WorkItemsTable";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectWorkItemByTask } from "../../features/workItems/workItemsSlice";

const WorkItems = () => {

    let params = useParams();
    const workItems = useSelector((state) => selectWorkItemByTask(state, params.taskId))
    return (
        <WorkItemsTable workItems={workItems}/>
    )
}

export default WorkItems