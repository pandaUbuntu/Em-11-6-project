import './style.css'

type SelectProps<T> = {
  options: T[],
  getOptionName: (option: T) => string,
  getOptionId: (option: T) => string,
  onChange: (value: string) => void
}

function CustomSelect<T>(props: SelectProps<T>) {
  return (
    <>
        <select onChange={(e) => props.onChange(e.target.value)}>
        <option value="0">--Please choose an option--</option>
        {
          props.options.map((option) => (
            <option key={props.getOptionId(option)} value={props.getOptionId(option)}>
              {props.getOptionName(option)}
            </option>
          ))
        }
      </select>
    </>
  )
}

export default CustomSelect
