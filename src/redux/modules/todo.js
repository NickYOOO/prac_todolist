// action value
const CREATE = 'CREATE';
const REMOVE = 'REMOVE';
const UPDATE = 'UPDATE';

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
}

// Action Creators
 export function createlist(id, title, body) {
    return {
        type: CREATE,
        payload: {
            id,   //id:id
            title,
            body,
            isDone: false
        }
    }
}

export function removelist(id) {
    return {
        type: REMOVE,
        payload: {
            id,
        }
    }
}

 export function updatelist(id) {
    return {
        type: UPDATE,
        payload: {
            id,

        }
    }
}

//  Reducer
export default function reducer(state = initialState, { payload, type }) {
    switch (type) {
        case CREATE: 
        console.log(payload)
            return {
                ...state,
                list : state.list.concat({
                    id: payload.id,
                    title: payload.title,
                    body: payload.body,
                    isDone: false    //한번 더 생각해보기
                })


            };
        case REMOVE :

            return {
                ...state,
                list: state.list.filter((todo) => todo.id !== payload.id)
            }

            case UPDATE :

                return {
                    ...state,
                    list: state.list.map((todo)=> ({
                        ...todo,
                        isDone:todo.id  === payload.id ? !todo.isDone : todo.isDone  //한번 더 생각해보기
                    }))
                }

        default: return state;
    }
}