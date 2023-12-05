import React, { memo } from 'react'
import Image from 'next/image'
import loader from "@/public/Images/Spinner.gif"
import Div from '../Div'
import Span from '../Span'

const Loader = () => {
    return (
        <Div className="flex flex-col items-center justify-center  border mx-auto">
            <Image src={loader} alt="Spinner_Loader" className="animate-spin h-[12rem] w-[12rem]" />
            <Span className="animate-bounce">Processing ...</Span>
        </Div>
    )
}

export default memo(Loader)