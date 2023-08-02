import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import css from './CommonLayout.module.css';
// const Loader = lazy(() => import('../Loader/index'));

export const CommonLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Logo />
        <Menu />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
