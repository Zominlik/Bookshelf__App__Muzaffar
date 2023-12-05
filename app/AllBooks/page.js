'use client';

import { memo, useEffect } from 'react';
import AllBooksHeader from '@/app/Components/AllBooks_Header';
import { Div } from '../Components';
import AllBooks_Main from '../Components/AllBooks_Main';
import { LS_Set_Data } from '../Components/LS_Get_Set_Data';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AllBooks = () => {
  let router = useRouter();
  async function myFn() {
    try {
      const res = await axios.get('https://0001.uz/books');
      console.log(res, 'Qaytgan Responce');
      if (res?.isOk === true && res?.message === 'ok') {
        LS_Set_Data('AllBookData', res.data[0].book);
      } else {
        router.push('/');
      }
    } catch (err) {
      alert(err?.message);
    }
  }

  useEffect(() => {
    myFn();
  }, []);

  return (
    <Div>
      <AllBooksHeader />
      <AllBooks_Main />
    </Div>
  );
};

export default memo(AllBooks);
