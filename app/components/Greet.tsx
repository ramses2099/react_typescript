
type GreetProps = {
  name: string
  messageCount: number
  isLoggedIn: boolean
};

const Greet = (props: GreetProps) => {
  return (
    <div className="grid grid-flow-row">
      <h2>
        {props.isLoggedIn
        ?  `Welcome ${props.name}! You have ${props.messageCount} unread message`
        : 'Welcome Guest'}</h2>
    </div>
  )
}

export default Greet

