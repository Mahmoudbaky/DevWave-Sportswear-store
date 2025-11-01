import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";

const SignOutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <form action={handleSignOut} className="w-full">
      <Button
        className="w-full cursor-pointer py-4 px-2 h-4 justify-start"
        variant="ghost"
      >
        Sign Out
      </Button>
    </form>
  );
};

export default SignOutForm;
