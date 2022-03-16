const Checkbox = ({ className, checked, value, onChange, ...props }) => {
    return (
        <input type="checkbox" checked={checked} value={value} onChange={onChange}/>
    )
}

export default Checkbox
