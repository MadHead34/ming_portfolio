import GlobalStyle from '../styles/globals';
import Navbar from './navbar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
    </>
  );
}