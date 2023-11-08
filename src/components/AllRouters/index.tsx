import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Urls } from '@/constants/urls';
import { isUserAuthSelector } from '@/store/slices/userSlice/selectors';

import { privateRoutes, publicRoutes } from './routesConfig';

const { NOT_FOUND, PROFILE, HOME } = Urls;

const AllRouters: FC = () => {
  const isAuth = useSelector(isUserAuthSelector);

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))
        : publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
      <Route path={NOT_FOUND} element={<Navigate to={isAuth ? PROFILE : HOME} />} />
    </Routes>
  );
};

export default AllRouters;
