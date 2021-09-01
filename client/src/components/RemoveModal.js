import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
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
