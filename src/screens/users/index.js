import React from "react";
import { withNavBars } from "./../../HOCs";

import { Users } from "./users";

class UsersParent extends React.Component {
  render() {
    return <Users />;
  }
}

export default withNavBars(UsersParent);
