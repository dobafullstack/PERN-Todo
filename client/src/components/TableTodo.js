import React, { useEffect, useState } from "react";
import { Table, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodo } from "../redux/actions/todo.action";
import RemoveModal from "./RemoveModal";
import UpdateModal from "./UpdateModal";
import { updateTodo } from "../redux/actions/todo.action";
import ReactLoading from "react-loading";

export default function TableTodo() {
    const [updateModal, setUpdateModal] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);
    const [description, setDescription] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const [itemId, setItemId] = useState(null);
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todo);

    const onHandleClickIsCompleted = (id, description, isCompleted) => {
        dispatch(updateTodo(id, description, !isCompleted));
    };

    useEffect(() => {
        dispatch(getAllTodo());
    }, [dispatch]);

    return (
        <Container>
            {todo.isLoading ? (
                <div className='mt-5 d-flex justify-content-center'>
                    <ReactLoading type='spin' color='#0d6efd' />
                </div>
            ) : (
                <Table borderless className='w-100 text-center mt-5'>
                    <tbody>
                        {todo.todoList.map((item, index) => (
                            <tr>
                                <th scope='row'>{index + 1}</th>
                                <td>{item.description}</td>
                                <td
                                    onClick={() => {
                                        onHandleClickIsCompleted(
                                            item.id,
                                            item.description,
                                            item.iscompleted
                                        );
                                    }}>
                                    {item.iscompleted ? (
                                        <span
                                            className='text-success'
                                            style={{ cursor: "pointer" }}>
                                            Đã hoàn thành
                                        </span>
                                    ) : (
                                        <span
                                            className='text-danger'
                                            style={{ cursor: "pointer" }}>
                                            Chưa hoàn thành
                                        </span>
                                    )}
                                </td>
                                <td
                                    onClick={() => {
                                        setDescription(item.description);
                                        setIsCompleted(item.iscompleted);
                                        setItemId(item.id);
                                        setUpdateModal(true);
                                    }}>
                                    <i
                                        class='fal fa-edit text-success'
                                        style={{ cursor: "pointer" }}
                                    />
                                </td>
                                <td
                                    onClick={() => {
                                        setItemId(item.id);
                                        setRemoveModal(true);
                                    }}>
                                    <i
                                        class='fal fa-trash-alt text-danger'
                                        style={{ cursor: "pointer" }}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            <UpdateModal
                updateModal={updateModal}
                setUpdateModal={setUpdateModal}
                description={description}
                setDescription={setDescription}
                isCompleted={isCompleted}
                setIsCompleted={setIsCompleted}
                itemId={itemId}
            />
            <RemoveModal
                removeModal={removeModal}
                setRemoveModal={setRemoveModal}
                itemId={itemId}
            />
        </Container>
    );
}
