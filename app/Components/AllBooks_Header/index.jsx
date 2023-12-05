import AllBooksStyles from '@/app/CssModules/AllBooks.module.css';

import { memo } from 'react';
import Cloud from '@/public/Images/Icons/Cloud_Check_Icon.png';
import searchIcon from '@/public/Images/Icons/search-refraction.png';
import bellIcon from '@/public/Images/Icons/bell_Icon.png';
import Image from 'next/image';
import { Span, Div, Input, } from '..';

const AllBooksHeader = () => {
  return (
    <>
      <header className={AllBooksStyles.Header}>
        <nav className={AllBooksStyles.nav}>
          <Div className={AllBooksStyles.nav1}>
            <Image height={`36`} width={`36`} src={Cloud} alt="CloudIcon" />
            <Span className={AllBooksStyles.HeaderLogoText}>
              <Span className={AllBooksStyles.HeaderLogoText1}>Books</Span>
              List
            </Span>
          </Div>
          <Div className={AllBooksStyles.nav2}>
            <Image src={searchIcon} alt="searchIcon" />
            <Input
              className={AllBooksStyles.inputSearch}
              placeholder="Search for any training you want"
            ></Input>
          </Div>
        </nav>
        <Div>
          <Image src={bellIcon} alt="bell_Icon" />
          <Image
            className={AllBooksStyles.HeaderRight}
            src={bellIcon}
            alt="bell_Icon"
          />
        </Div>
      </header>
    </>
  );
};

export default memo(AllBooksHeader);
