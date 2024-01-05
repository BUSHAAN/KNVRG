import { Navigate, Outlet } from "react-router-dom";
import Image from "../../src/assets/images/my-side-image.jpg";


const AuthLayout = () => {
  const isAunthenticated = false;
  return (
    <>
      {isAunthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <div className="flex flex-row w-screen">
          <section className="flex flex-1 flex-center justify-items-center flex-col mt-3">
            <Outlet />
          </section>
          <img src={Image} alt="HEHE lassana image ekkuth one" className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"/>
        </div>
      )}
    </>
  );
};

export default AuthLayout;
