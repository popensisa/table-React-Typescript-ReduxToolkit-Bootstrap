import axios from "axios"
import { AppDispatch } from "../store"
import { productSlice } from "./productReducer"


export const fetchProducts = () => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.productsFetchingLoading())
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // setTimeout(() => {
            dispatch(productSlice.actions.productsFetchingSuccess(response.data))
        // }, 1000)
    } catch (e) {
        dispatch(productSlice.actions.productFetchingError('Не удалось получить данные'))
    }
}