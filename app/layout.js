// import { Inter } from 'next/font/google';
import './globals.css';
import AllBooksStyles from './CssModules/AllBooks.module.css';
import { Div } from './Components';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BookShelf App',
  description: 'BookShelf App, bestseller book, books, bestseller kitoblar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Div className={AllBooksStyles.template}>{children}</Div>
      </body>
    </html>
  );
}
