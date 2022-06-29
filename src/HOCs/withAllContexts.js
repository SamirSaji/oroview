import React from "react";
import { DrawerContext } from "../contexts";

const withAllContexts = (Component) => (props) => {
  const drawer = React.useContext(DrawerContext);

  return (
    <Component {...props} drawer={drawer}>
      {props.children}
    </Component>
  );
};

export default withAllContexts;
