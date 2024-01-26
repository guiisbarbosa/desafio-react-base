import './button.css'

const Button = ({label}) => {
    return (
        <button label={label} onClick={() => alert(label)}>Baixar CV</button>
    )
}

export default Button