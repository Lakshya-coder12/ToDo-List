import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopUp = ({ modal, toggle }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                     <div className = "form-group">
                         <label>Task Name</label>
                        <input type = "text" className = "form-control" value = {taskName}/>
                     </div>
                     <div className ="form-group">
                         <label>Description</label>
                         <textarea rows = "5" className = "form-control" value = {description}></textarea>
                     </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskPopUp;