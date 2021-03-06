import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import { fetchProducts } from './store/reducers/ActionCreators';
import { productSlice } from './store/reducers/productReducer';
import Pagination from './components/pagination/Pagination';
import AddTodo from './components/modal/AddTodo';

function App() {
  const {products, isGot, isLoading, error} = useAppSelector(state => state.productReducer)
  const {productDeleteOne, productAsc, productDesc, productSortLetters, productCompleted, productAddOne} = productSlice.actions
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const [newProduct, setNewProduct] = useState('')

  const [modalShow, setModalShow] = useState(false);


  const [pag, setPag] = useState({
    currentPage: 1,
    todoPerPage: 10,
  })
  const indexOfLastTodo = pag.currentPage * pag.todoPerPage
  const indexOfFirstTodo = indexOfLastTodo - pag.todoPerPage
  const totalTodo = products.length
  const currentTodos = products.filter(val => {
    if(value == '') return val
    return val.title.toLowerCase().includes(value.toLowerCase())
  }).slice(indexOfFirstTodo, indexOfLastTodo) 

  return (
    <div className="App container">
      <Button className='m-5' size='lg' onClick={() => dispatch(fetchProducts())}>GET USERS</Button>
      {isLoading && <h1>Loading...</h1>}
      {isGot ?
          <>
            <div className='d-flex justify-content-evenly m-4'>
              <div>
                <Button variant='secondary' className='m-1' onClick={() => dispatch(productAsc())}>asc</Button>
                <Button variant='secondary' className='m-1' onClick={() => dispatch(productDesc())}>desc</Button>
                <Button variant='secondary' className='m-1' onClick={() => dispatch(productSortLetters())}>Letter</Button>
              </div>
              <input type="text" placeholder='Search' onChange={(e) => setValue(e.target.value)} value={value}/>
              <div>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Add todo
                </Button>
                <AddTodo newProduct={newProduct} setNewProduct={setNewProduct} show={modalShow} setModalShow={setModalShow} onHide={() => setModalShow(false)}/>
              </div>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {currentTodos
                    .map(item => 
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><Button onClick={() => dispatch(productCompleted(item))} variant={item.completed ? 'success' : 'danger'}></Button></td>
                    <td><Button onClick={() => dispatch(productDeleteOne(item.id))} variant='danger'>Delete</Button></td>
                  </tr>  
                )}
              </tbody>
            </Table>
            <Pagination 
              currentPage={pag.currentPage} 
              todoPerPage={pag.todoPerPage} 
              indexOfFirstTodo={indexOfFirstTodo}
              totalTodo={totalTodo}
              setPag={setPag}
            />
          </>
            :
            <h1>{error}</h1>
      }
    </div>
  );
}

export default App;
