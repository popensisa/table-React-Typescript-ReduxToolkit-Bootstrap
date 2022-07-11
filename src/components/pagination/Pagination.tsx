
type PaginationState = {
    currentPage: number
    todoPerPage: number
    product: any[]
}
const Pagination: React.FC<PaginationState> = ({currentPage, todoPerPage, product}) => {
    
    const indexOfLastTodo = currentPage * todoPerPage
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage
    const currentTodo = product.slice(indexOfFirstTodo, indexOfLastTodo)

    return(
        <div>

        </div>
    )
}

export default Pagination