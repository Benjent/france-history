import '../../styles/modules/input.scss'

const Input = ({ className, type, min, max, value, onChange, ...props }) => {
    return (
        <input className="input" type={type} min={min} max={max} value={value} onChange={onChange}/>
    )
}

export default Input
