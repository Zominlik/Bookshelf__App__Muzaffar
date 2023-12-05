import { memo } from "react"

const P = ({ style = null, children = null, className = null }) => {
    return (
        <p style={style} className={className}>
            {children}
        </p>
    )
}

export default memo(P)