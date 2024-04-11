// path : taskList/src/page/Task/index.page.jsx

import Form from "../../component/Form/index.jsx";
import List from "../../component/List/index.jsx";
import Cities from "../../component/Cities/index.jsx";

const TaskPage = () => {

    return <>
            <h1>Task List</h1>
            <Form />
            <List />
            <Cities />
        </>
}

export default TaskPage