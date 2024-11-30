import './style.css'

type CustomInputType = {
    change: (text:string) => void,
    placeholder: string,
}

function CustomInput(props: CustomInputType) {
  return (
    <>
        <input type="text" onChange={(event) => props.change(event.target.value)} placeholder={props.placeholder} />
    </>
  )
}

export default CustomInput
