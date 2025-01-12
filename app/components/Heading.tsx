type HeadingProps={
    children: string
};
const Heading = (props: HeadingProps) => {
  return (
    <div className="flex justify-center">
      {props.children}
    </div>
  )
}

export default Heading
