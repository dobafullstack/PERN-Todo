import React, { useState, useEffect } from "react";
import {
    Input,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
} from "reactstrap";

import { useDispatch } from "react-redux";
import { addTodo, searchTodo } from "../redux/actions/todo.action";

export default function InputTodo() {
    const [value, setValue] = useState("");
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    const toggle = () => setModal(!modal);

    const handleSubmit = () => {
        if (value === "") return;
        dispatch(addTodo(value));
        setValue("");
        toggle();
    };

    const handleSearch = (textSearch) => {
        dispatch(searchTodo(textSearch));
    };

    return (
        <Container className='d-flex '>
            <Button color='primary' onClick={() => toggle()}>
                <i class='fal fa-plus'></i>
            </Button>
            <Input
                placeholder='Search Item'
                className='ms-4'
                onChange={(e) => handleSearch(e.target.value)}
            />

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add todo</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Description:</Label>
                            <Input
                                placeholder='Description'
                                className='mt-3'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={() => handleSubmit()}>
                        Add
                    </Button>{" "}
                    <Button color='secondary' onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}
