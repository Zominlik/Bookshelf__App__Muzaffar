import { memo } from "react"

const Li = ({ style = null, children = null, className = null }) => {
    return (
        <li className={className}>
            {children}
        </li>
    )
}

export default memo(Li)