
import "./Button.css"

interface Props {
  label: string
  parentMethod: () => void
}

export const Button = ( { label, parentMethod }: Props) => {
  return (
    <button onClick={parentMethod}>
      {label}
    </button>
  );
}