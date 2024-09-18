import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <section className={s.section}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default Layout;
