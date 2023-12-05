import { memo } from 'react'

const Label = ({ style = null, children = null, htmlFor = null, className = null }) => {
    return (
        <label htmlFor={htmlFor} className={className}>{children}</label>
    )
}

export default memo(Label)