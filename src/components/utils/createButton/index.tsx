import './style.css'

type CreateButtonType = {
    handle: React.MouseEventHandler<HTMLButtonElement>,
}

function CreateButton(props: CreateButtonType) {
  return (
    <>
        <button onClick={props.handle}>Create</button>
    </>
  )
}

export default CreateButton
