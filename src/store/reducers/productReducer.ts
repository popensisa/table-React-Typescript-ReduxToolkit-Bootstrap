import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ProductsState {
    products: any[],
    isGot: boolean,
    isLoading: boolean,
    error: string
}

const initialState: ProductsState = {
    products: [],
    isGot: false,
    isLoading: false,
    error: ''
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsFetchingLoading(state) {
            state.isLoading = true
        },
        productsFetchingSuccess(state, action: PayloadAction<ProductsState[]>) {
            state.products = action.payload
            state.isGot = true
            state.isLoading = false
        },
        productFetchingError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isGot = false
            state.isLoading = false
        },
        productDeleteOne(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        productCompleted(state, action) {
            const foundProduct = state.products.find(item => item.id == action.payload.id)
            foundProduct.completed = !foundProduct.completed
        },
        productAsc(state) {
            state.products = state.products.sort((a, b) => a.id - b.id)
        },
        productDesc(state) {
            state.products = state.products.sort((a, b) => b.id - a.id)
        },
        productSortLetters(state) {
            const SortArray = (x: any, y: any) => {
                return x.title.localeCompare(y.title)
            }
            state.products = state.products.sort(SortArray)
        }
    }
})

export default productSlice.reducer