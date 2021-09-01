import React, { useState, useEffect } from "react";
import {
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../redux/actions/todo.action";

export default function UpdateModal({
    updateModal,
    setUpdateModal,
    isCompleted,
    setIsCompleted,
    description,
    setDescription,
    itemId,
}) {
    const dispatch = useDispatch();
    const toggle = () => {
        setUpdateModal(!updateModal);
    };

    const onHandleUpdate = () => {
        dispatch(updateTodo(itemId, description, isCompleted));
        toggle();
    };

    return (
        <Modal isOpen={updateModal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update todo</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Description:</Label>
                        <Input
                            placeholder='Description'
                            className='mt-3'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className='mt-3'>
                        <Label>Is Completed:</Label>
                        <Input
                            className='mt-3'
                            type='select'
                            value={isCompleted}
                            onChange={(e) => setIsCompleted(e.target.value)}>
                            <option value={true}>Đã hoàn thành</option>
                            <option value={false}>Chưa hoàn thành</option>
                        </Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={() => onHandleUpdate()}>
                    Update
                </Button>{" "}
                <Button color='danger' onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}
