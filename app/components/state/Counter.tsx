import { useReducer } from 'react'

const initialState = { count: 0,}

type CounterState = { count: number}

type UpdateAction = {type: 'INCREMENT' | 'DECREMENT', payload: number}

type ResetAction = {type: 'RESET' }

type CounterAction = UpdateAction | ResetAction

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
      case 'INCREMENT':
        return {...state, count: state.count + action.payload }
      case 'DECREMENT':
        return {...state, count: state.count - action.payload }
      case 'RESET':
        return initialState
      default:
        return state
    }    
}

const Counter = () => {
 const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <div className="flex justify-center p-5">
        <div>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={()=>dispatch({type:'INCREMENT', payload:10})} >Increment</button>
        </div>
        <div>
        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={()=>dispatch({type:'DECREMENT', payload:10})}>Decrement</button>
        </div> 
        <div>
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={()=>dispatch({type:'RESET'})}>Reset</button>
        </div>      
    </div>
    <div className="flex justify-center">
      Count: {state.count}
    </div>
    </>
  )
}

export default Counter
