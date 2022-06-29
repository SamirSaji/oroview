import React from "react";
import { withNavBars } from "./../../HOCs";

import { Posts } from "./posts";

class PostsParent extends React.Component {
  render() {
    return <Posts />;
  }
}

export default withNavBars(PostsParent);
