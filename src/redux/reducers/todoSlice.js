import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        data:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            const todoData={
                id:state.data?.length+1,
                title:action.payload.title,
                desc:action.payload.desc,
            }
            state.data=[todoData,...state?.data]
        },
        deleteTodo:(state,action)=>{
            state.data=state.data.filter(item=>item?.id!==action.payload.id)
            },
        updateTodo:(state,action)=>{
            state.data=state.data.map(item=>{
                if(item?.id===action.payload.id){
                    item.title=action.payload.title;
                    item.desc=action.payload.desc;
                }
                return item;
            })
            },
        },
});
export const {addTodo,deleteTodo,updateTodo}=todoSlice.actions;
export default todoSlice.reducer;