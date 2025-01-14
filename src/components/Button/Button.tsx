
import "./Button.css"

interface Props {
  label: string
  parentMethod: () => void
}

export const Button = ( { label, parentMethod }: Props) => {
  return (
    <button onClick={parentMethod} className="custom-button"> 
      {label}
    </button>
  );
}