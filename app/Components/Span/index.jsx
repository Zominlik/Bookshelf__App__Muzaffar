import { memo } from "react"

const Span = ({ style = null, children = null, className = null }) => {
    return (
        <span style={style} className={className}>
            {children}
        </span>
    )
}

export default memo(Span)