import { memo } from "react"

const H2 = ({ children = null, className = null, style = null } ) => {
    return (
        <h2 className={className} style={style}>
            {children}
        </h2>
    )
}

export default memo(H2)