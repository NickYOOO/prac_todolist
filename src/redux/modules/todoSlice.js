import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [{
        title: "1작성하세요",
        body: "1내용을 입력하세요",
        isDone: true, id: 1
    },

    {
        title: "2작성하세요",
        body: "2내용을 입력하세요",
        isDone: false, id: 2
    }
    ],
};

const todoSlice = createSlice({
    name: "todo", //모듈이름
    initialState, //모듈 초기값
    reducers: {  //모듈 Reducer 로직 + 액션크리에이터 가 됨
        createlist: ( state, action ) => {
            console.log(action)
            // console.log(list)
            state.list = state.list.concat({   //헤맨 부분( list 값을 못받아 옴)
                    id: action.payload.id,
                    title: action.payload.title,
                    body: action.payload.body,
                    isDone: false 
                })
        },
        removelist: ( state, action ) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload.id)
        },
        updatelist: ( state, action ) => {
            state.list = state.list.map((todo)=> ({
                ...todo,
                isDone:todo.id  === action.payload.id ? !todo.isDone : todo.isDone  
            }))
        },
        //extraReducers

    },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export
export const { createlist, removelist, updatelist } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default
export default todoSlice.reducer;