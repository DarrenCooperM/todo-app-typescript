import React, { useReducer } from 'react'
// import { Todo, Actions } from '../model'

// const ReducerExample = () => {

//     const TodoReducer = (state: Todo[], action: Actions) => {
//         switch (action.type) {
//             case "add":
//                 return [
//                     ...state,
//                     { id: Date.now(), todo: action.payload, isDone: false}
//                 ];
                
//                 case "remove":
//                     return state.filter((todo) => todo.id !== action.payload);
                
//                 case "done":
//                         return state.map((todo) => todo.id !== action.payload ? {...todo, isDone: !todo.isDone}: todo)
//         }
//     }

//     const [state, dispatch] = useReducer(TodoReducer, [])

//   return (
//     <div>ReducerExample</div>
//   )
// }

// export default ReducerExample