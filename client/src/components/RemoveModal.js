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
import { deleteTodo } from "../redux/actions/todo.action";

export default function RemoveModal({ removeModal, setRemoveModal, itemId }) {
    const dispatch = useDispatch();

    const toggle = () => {
        setRemoveModal(!removeModal);
    };

    const handleRemove = () => {
        dispatch(deleteTodo(itemId));
        toggle();
    };
    return (
        <Modal isOpen={removeModal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
            <ModalFooter>
                <Button color='danger' onClick={() => handleRemove()}>
                    Delete
                </Button>{" "}
                <Button color='success' onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}
