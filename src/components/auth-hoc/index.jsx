import { useDispatch, useSelector } from "react-redux";
import { me } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function AuthHOC(WrappedComponent) {
  return function WithAuth(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.auth);

    if (!user.user_handle && !loading) {
      dispatch(me());
    }

    if (!user.user_handle) {
      navigate("/");
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
}
