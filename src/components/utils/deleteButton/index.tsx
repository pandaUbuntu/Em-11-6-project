import './style.css'

type DeleteButtonType = {
    handle: (id: string) => void,
    id: string,
 }

function DeleteButton(props:DeleteButtonType) {
  return (
    <>
        <button className='delete-button' onClick={(e) => {props.handle(props.id)}}>x</button>
    </>
  )
}

export default DeleteButton
