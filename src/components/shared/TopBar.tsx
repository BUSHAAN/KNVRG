import { useUserContext } from "@/context/useUserContext";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../assets/icons/logout.svg";
import Logo from "../../assets/images/logo.jpg";
import ProfileImg from "../../assets/images/profile.png";
import { Button } from "../ui/button";

const TopBar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const {user} = useUserContext();

  useEffect(() => {
    if (isSuccess) {
      navigate(0);
    }
  }, [isSuccess, navigate]);
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src={Logo} alt="Logo" width={130} height={325} />
        </Link>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}
          >
            <img src={Logout} alt="Logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img src={user.imageUrl || ProfileImg} alt="" className="h-8 w-8 rounded-full"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
