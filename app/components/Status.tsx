type StatusProps ={
    status: 'loading' | 'success' | 'error'
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status ==='loading'){
    message = 'Loading...';
  } else if (props.status === 'success'){
    message = 'Data fetch successfully!';
  } else if (props.status === 'error'){
    message = 'An error occurred while fetching data.';
  } 
    
  return (
    <div className="flex justify-center">
      Status - {message}
    </div>
  )
}

export default Status
