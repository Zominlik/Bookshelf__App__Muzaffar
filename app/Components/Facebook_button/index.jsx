import PageModules from '../../CssModules/SignUp_SignIn_Page.module.css';
import Facebook from '@/public/Images/Icons/Facebook.png';
import { memo } from 'react';
import { Button } from '..';
import Image from 'next/image';

const FacebookButton = () => {
  return (
    <Button className={PageModules.GoogleButton}>
      <Image height="24" width="24" src={Facebook} alt="FacebookIcon"></Image>
      Continue with Facebook
    </Button>
  );
};

export default memo(FacebookButton);
