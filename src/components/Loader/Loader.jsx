import { BallTriangle } from "react-loader-spinner";

import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <BallTriangle
        height={160}
        width={160}
        radius={5}
        color="#3470ff"
        ariaLabel="ball-triangle-loading"
      />
    </div>
  );
};

export default Loader;
