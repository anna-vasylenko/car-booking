import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <div>
      <Header />
      <section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default Layout;
