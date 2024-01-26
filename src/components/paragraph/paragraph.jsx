const Paragraph = ({text, color}) => {
    
    return (
        <div>
            <p style={{ color: color }}>{text.toUpperCase()}</p>
        </div>
    )
    
}


export default Paragraph