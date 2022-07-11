import { Button, Form, Modal } from "react-bootstrap"
import { useAppDispatch } from "../../hooks/redux"
import { productSlice } from "../../store/reducers/productReducer"

interface AddTodoProps {
    show: boolean
    newProduct: string
    setNewProduct: any
    onHide: any
    setModalShow: any
}

const AddTodo: React.FC<AddTodoProps> = ({show, newProduct, setNewProduct, onHide, setModalShow}) => {
    const dispatch = useAppDispatch()
    const {productAddOne} = productSlice.actions
    const addProduct = () => {
        if (newProduct){
            dispatch(productAddOne(newProduct))
            setModalShow(false)
            setNewProduct('')
        } else {
            setNewProduct('')
        }
    }

    return(
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={onHide}
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
                    value={newProduct}
                    onChange={e => setNewProduct(e.target.value)}
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Write your todo.
                </Form.Text>
            </Modal.Body>
            <Modal.Footer>
            <Button variant='danger' onClick={onHide}>Close</Button>
            <Button onClick={() => addProduct()}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddTodo

function newProduct(newProduct: any): { payload: string; type: string } {
    throw new Error("Function not implemented.")
}
