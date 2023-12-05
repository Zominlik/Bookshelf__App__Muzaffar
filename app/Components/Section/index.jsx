import { memo } from "react"

const Section = ({ style = null, children = null, className = null, id = null }) => {
    return (
        <section style={style} className={className} id={id}>
            {children}
        </section>
    )
}

export default memo(Section)