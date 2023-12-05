import { memo } from "react"

const Button = ({ style = null, onClick = null, type = null, children = null, className = null }) => {
    return (
        <button style={style} onClick={onClick} type={type} className={className}>{children}</button>
    )
}

export default memo(Button)