import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { me } from "../../store/authSlice";

export default function AuthHOC(WrappedComponent) {
  return function WithAuth(props) {
    const dispatch = useDispatch();
    const hasFetchRef = useRef(null);
    const { loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
      if (!hasFetchRef.current) {
        hasFetchRef.current = true;
        dispatch(me());
      }
    }, []);

    // not use `user` because it may be empty
    if (error) {
      return <Navigate to="/" replace />;
    }

    if (loading) {
      return (
        <div className="flex-2 space-y-4 border-r border-l border-gray-600">
          <div className="dark:bg-[#131416] animate-pulse rounded-md mx-4 h-30"></div>
          <div className="dark:bg-[#131416] animate-pulse rounded-md mx-4 h-100"></div>
          <div className="dark:bg-[#131416] animate-pulse rounded-md mx-4 h-10"></div>
          <div className="dark:bg-[#131416] animate-pulse rounded-md mx-4 h-10"></div>
          <div className="dark:bg-[#131416] animate-pulse rounded-md mx-4 h-10"></div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}
