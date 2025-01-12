import { Name } from "./Person.types";

type PersonListProps ={
    names: Name[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>      
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Person List:</h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
           {props.names.map(name =>{
            return(<li key={name.first_name}>
                {name.last_name} {name.last_name} 
            </li>);
            })}
        </ul>
    </div>
  )
}

export default PersonList
