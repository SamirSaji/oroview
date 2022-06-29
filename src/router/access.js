import { Routes } from "./routes";
import { UserRoles, sideMenuRoutesOptions } from "../utils";

/**
 * The below function define redirection for a particular route based on the role
 */
export const Redirections = (userRole) => {
  switch (userRole) {
    default:
      return "";
  }
};

/**
 * The below function define redirection to a particular route based on the role
 */
export const LoginSuccess = (userRole) => {
  switch (userRole) {
    case UserRoles.admin:
      return Routes.posts;
    case UserRoles.user:
      return Routes.posts;
    default:
      return "/";
  }
};

/**
 * The below function define number of routes that can accessible by the
 * different role.
 */
export const Access = (userRole, path) => {


  switch (userRole) {
    case UserRoles.admin:
      return sideMenuRoutesOptions?.[UserRoles.admin]
        ?.map((val) => val.route)
        .indexOf(path);
    case UserRoles.user:
      return sideMenuRoutesOptions?.[UserRoles.user]
        ?.map((val) => val.route)
        .indexOf(path);

    default:
      return -1;
  }
};
