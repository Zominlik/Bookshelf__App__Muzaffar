import { memo } from 'react'

const Option = ({ style = null, selected = null, value = null, className = null, children = null }) => {
    return (
        <option style={style} selected={selected} value={value} className={className}>
            {children}
        </option>
    )
}

export default memo(Option)