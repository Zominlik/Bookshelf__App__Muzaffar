import { memo } from 'react'

const Hr = ({style = null}) => {
  return (
    <hr style={style}/>
  )
}

export default memo(Hr)