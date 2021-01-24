const Button = ({color, text,onToggle}) => {
    return <button style={{backgroundColor: color}} className='btn' onClick={onToggle}>{text}</button>
}

export default Button
