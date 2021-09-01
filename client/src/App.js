import "bootstrap/dist/css/bootstrap.min.css";

import InputTodo from "./components/InputTodo";
import TableTodo from "./components/TableTodo";

import axios from 'axios';

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.headers.post["Content-Type"] =
    "application/json";

function App() {
    return (
        <div>
          <h1 className="text-center my-5">Todo App</h1>
          <InputTodo />
          <TableTodo />
        </div>
    );
}

export default App;
