import { memo } from "react"

const Div = ({ children = null, className = null, style = null }) => {
    return (
        <div className={className} style={style}>
            {children}
        </div>
    )
}

export default memo(Div)