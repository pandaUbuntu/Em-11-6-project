import './style.css'

type HeaderDataType = {
  username: string,
  budget: number,
}

function Header(props:HeaderDataType) {

  return (
    <div className='header-wrapper'>
      <p>Hello <span>{props.username}</span></p>
      <p>Budget: <span>{props.budget}</span></p>
    </div>
  )
}

export default Header