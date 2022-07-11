
interface PaginationProps {
    currentPage: number
    todoPerPage: number
    indexOfFirstTodo: number
    totalTodo: number
    setPag: any
}
const Pagination: React.FC<PaginationProps> = ({
    currentPage, 
    todoPerPage, 
    indexOfFirstTodo, 
    totalTodo, 
    setPag}) => {
    
    const pageCount = []

    for( let i = 1; i <= Math.ceil(totalTodo / todoPerPage); i++){
        pageCount.push(i)
    }

    const endPag = currentPage != pageCount.length
    const startPag = currentPage != indexOfFirstTodo + 1

    const handleNextPage = () => {
        if (endPag) setPag((prev: object) => ({...prev, currentPage: currentPage + 1}))
    }
    const handlePrevPage = () => {
        if (startPag) setPag((prev: object) => ({...prev, currentPage: currentPage - 1}))
    }
    const handleChoosePage = (page: number) => {
        setPag((prev: object) => ({...prev, currentPage: page}))
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
                <li 
                    className={startPag ? 'page-item' : "page-item disabled"} 
                    style={{cursor: 'pointer'}}
                    onClick={() => handlePrevPage()}
                    >
                    <span className="page-link">Previous</span>
                </li>
                {pageCount.map(num => 
                    <li 
                        className={currentPage == num ? 'page-item active' : 'page-item'} 
                        key={num}
                        style={{cursor: 'pointer'}}
                        onClick={() => handleChoosePage(num)}
                        >
                        <span className='page-link'>{num}</span>
                    </li>    
                )}
                    <li className={endPag ? 'page-item' : 'page-item disabled'} style={{cursor: 'pointer'}}>
                        <span className="page-link pe-auto" onClick={() => handleNextPage()}>Next</span>
                    </li>
            </ul>
        </nav>
    )
}

export default Pagination