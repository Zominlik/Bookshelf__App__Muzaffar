import { memo } from "react"

const Ul = ({ style = null, children = null, className = null }) => {
    return (
        <ul style={style} className={className}>
            {children}
        </ul>
    )
}

export default memo(Ul)