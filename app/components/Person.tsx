type PersonProps ={
    name:{
        first: string
        last: string 
    }
}

const Person = (props: PersonProps) => {
  return (
    <div className="grid grid-cols-1">
      {props.name.first} {props.name.last}
    </div>
  )

}

export default Person
