import { memo } from 'react';
import Image from "next/image";
import { Div, H2, Li, Span, Ul } from '..';

const Card = () => {
    return (
        <Div className='px-[4.267rem] flex flex-col    xxs:px-[1.875rem]  xs:px-[1.875rem]    sm:px-[1.875rem]'>
             <Div className="flex flex-col gap-[4.085rem] pb-[7.5rem] border-b-[0.063rem] border-b-[#CBCBCB]">
                 <Div className="pt-[13.25rem] flex flex-col gap-[4.783rem]       xs:grid xs:grid-cols-1 xs:grid xs:grid-cols-1       sm:grid sm:grid-cols-1 sm:grid sm:grid-cols-1">
                    <H2 className="text-center text-[#323142] text-[2.813rem] font-semibold leading-[1.597rem]">
                         Our Top
                        <Span className="text-[#6C5FBC] text-[2.813rem] font-semibold leading-[1.597rem] pl-[0.5rem]">
                            Dishes
                        </Span>
                     </H2>
            <Div className="card_Wrapper relative rounded-[2.161rem]     sm:px-[1.5rem]">
                <Image src={Image_Subscribe} className='w-[12.571rem] h-[13.012rem]     xxs:w-[7.55rem] xxs:h-[7.607rem]       xs:w-[7.55rem] xs:h-[7.607rem]          sm:w-[7.55rem] sm:h-[7.607rem]       lg:w-[8.218rem] lg:h-[8.218rem]   xl:w-[11.543rem] xl:h-[11.043rem] ' alt='Image_Subscribe' />
                <Image src={Heart} className='w-[1.372rem] h-[1.137rem] absolute top-0 right-0' alt='Heart' />
            </Div>
            <Ul className="pr-[0.599rem] pl-[1.085rem]   xxs:p-[0rem] xs:p-[0rem]">
                <Li className="">
                    <Ul className="flex flex-col gap-[0.5rem]">
                        <Li className="">
                            <Span className="px-[0.483rem] py-[0.171rem] bg-[#F7EDD0] text-[#DAA31A] rounded-md">
                                Healthy
                            </Span>
                        </Li>
                        <Li className="">
                            <Span className="text-[1.025rem] text-[#323142] font-semibold leading-[1.665rem]              xxs:text-[0.943rem] xxs:text-[#323142] xxs:font-semibold xxs:leading-[1.532rem]        xs:text-[0.943rem] xs:text-[#323142] xs:font-semibold xs:leading-[1.532rem]">
                                Chicken Hell
                            </Span>
                        </Li>
                        <Li className="">
                            <Ul className="flex justify-start items-center gap-[0.36rem]">
                                <Li className="">
                                    <Span className="">
                                        24min •
                                    </Span>
                                </Li>
                                <Li className="">
                                    <Image src={Star} className='w-[1.441rem] h-[1.441rem]' alt='StarIcon' />
                                </Li>
                                <Li className="Rating">
                                    <Span className="">
                                        4.8
                                    </Span>
                                </Li>
                            </Ul>
                        </Li>
                    </Ul>
                </Li>
                <Li className="">
                    <Ul className="pt-[0.831rem] flex justify-between items-center">
                        <Li className="flex items-end">
                            <Span className="xxs:text-[1.121rem] xxs:text-[#323142] xxs:leading-[2.022rem]         xs:text-[1.121rem] xs:text-[#323142] xs:leading-[2.022rem]          sm:text-[1.121rem] sm:text-[#323142] sm:leading-[2.022rem]          font-bold text-[1.621rem] text-[#323142] leading-[2.522rem]">
                                $12
                            </Span>
                            <Span className="xxs:text-[1.121rem] xxs:text-[#323142] xxs:leading-[2.022rem]         xs:text-[1.121rem] xs:text-[#323142] xs:leading-[2.022rem]          sm:text-[1.121rem] sm:text-[#323142] sm:leading-[2.022rem]       text-[#8E97A6] text-[1.175rem] leading-[2.522rem]">
                                .99
                            </Span>
                        </Li>
                        <Li className="">
                            <Div className="">
                                <Image src={Add} className='w-[2.739rem] h-[2.739rem]     xxs:w-[1.792rem]  xxs:h-[1.624rem]         xs:w-[1.792rem]  xs:h-[1.624rem]        sm:w-[1.792rem]  sm:h-[1.624rem]' alt='AddIcon' />
                            </Div>
                        </Li>
                    </Ul>
                </Li>
            </Ul>
            </Div>
            </Div>
        </Div>
    )
}

export default memo(Card)