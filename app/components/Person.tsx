import { PersonProps } from "./Person.types"

const Person = (props: PersonProps) => {
  return (
    <div className="grid grid-cols-1">
      {props.name.first_name} {props.name.last_name}
    </div>
  )

}

export default Person
