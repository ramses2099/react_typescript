
type HorizontalPosition = "left" | "right" | "center" 
type VerticalPosition = "top" | "center" | "bottom"

type ToastProps ={
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'> | "center" 
};


const Toast = ({ position }: ToastProps) => {
  return (
    <div className="flex justify-center">
      Toast position: {position}      
    </div>
  )
}

export default Toast
