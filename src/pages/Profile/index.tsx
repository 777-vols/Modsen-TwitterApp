import { FC } from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '@/store/slices/userSlice/selectors';

const Profile: FC = () => {
  const currentUser = useSelector(userSelector);
  console.log(currentUser);

  return <h1>Profile</h1>;
};

export default Profile;
