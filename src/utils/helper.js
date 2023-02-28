import { useDispatch } from "react-redux"
import { bookDeleted } from "../store/cartSlice"

export const dispatchDeleteAction = (_id)=>{
    const dispatch = useDispatch()
    dispatch(bookDeleted(_id))
}