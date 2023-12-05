import PageModules from '../../CssModules/SignUp_SignIn_Page.module.css';
import GoogleImage from '@/public/Images/Icons/Google_Logo.svg';
import { memo } from 'react';
import { Button, Span } from '..';
import Image from 'next/image';

const GoogleButton = () => {
  return (
    <Button className={PageModules.GoogleButton}>
      <Image height="24" width="24" src={GoogleImage} alt="GoogleImage"></Image>
      <Span>Continue with Google</Span>
    </Button>
  );
};

export default memo(GoogleButton);
