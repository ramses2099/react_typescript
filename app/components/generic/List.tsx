type ListProps<T> ={
    items:T[]
    onClick:(value:T) => void
}

const List = <T extends string | number>({items, onClick}: ListProps<T>) => {
  return (
    <>
        <div className="flex justify-center p-5">            
            <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <a href="#" aria-current="true" className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
                    List
                </a>                    
                {items.map((item, index)=>
                {
                    return(
                        <a href="#" key={index} onClick={()=> onClick(item)} className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                            {item}
                        </a>
                    )
                })}            
            </div>
        </div>
    </>
  )
}

export default List
