import { memo } from "react"



const A_tag = ({ style = null, href = null, children = null, className = null }) => {
    return (
        <a style={style} href={href} className={className}>{children}</a>
    )
}

export default memo(A_tag)