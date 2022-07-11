import { Button, Form, Modal } from "react-bootstrap"

interface AddTodoProps {
    show: boolean
    newProduct: string
    setNewProduct: any
    onHide: any
    addProduct: any
}

const AddTodo: React.FC<AddTodoProps> = (props) => {

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add your ToDo
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label htmlFor="inputPassword5">ToDo</Form.Label>
                <Form.Control
                    type="text"
                    value={props.newProduct}
                    onChange={e => props.setNewProduct(e.target.value)}
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Write your todo.
                </Form.Text>
            </Modal.Body>
            <Modal.Footer>
            <Button variant='danger' onClick={props.onHide}>Close</Button>
            <Button onClick={props.addProduct}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddTodo