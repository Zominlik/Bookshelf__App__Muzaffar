import { memo } from 'react'

const Input = ({ style = null, autoComplete = null, onBlur = null, id = null, name = null, required = null, type = null, placeholder = null, className = null, defaultValue = null, onChange = null }) => {
    return (
        <input style={style} autoComplete={autoComplete} onBlur={onBlur} id={id} name={name} onChange={onChange} required={required} type={type} placeholder={placeholder} className={className} defaultValue={defaultValue} />
    )
}

export default memo(Input)