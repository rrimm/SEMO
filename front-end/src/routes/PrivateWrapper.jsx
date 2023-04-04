import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { BROWSER_PATH } from '../constants/path';

import { isLogin } from '../stores/auth';

function PrivateWrapper() {
  const navigate = useNavigate();
  const auth = useRecoilState(isLogin);

  useEffect(() => {
    if (!auth[0]) {
      navigate(BROWSER_PATH.LOGIN);
    }
  }, [auth, navigate]);

  return <Outlet />;
}
export default PrivateWrapper;
