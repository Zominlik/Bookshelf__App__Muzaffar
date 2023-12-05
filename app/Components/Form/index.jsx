import { memo } from 'react';

const Form = ({ action = null, className = null, onSubmit = null, children = null }) => {
    return (
        <form action={action} className={className} onSubmit={onSubmit} >
            {children}
        </form>
    )
}

export default memo(Form)