import { Routes } from "../router/routes";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ListAltIcon from "@mui/icons-material/ListAlt";
/**
 * Object with role as key and value, which is used for
 * comparison of role in different place.
 */
export const UserRoles = {
  admin: "admin",
  user: "user",
};

/**
 * Object which has the different themes used in
 * the application.
 */
export let Themes = {
  default: "default",
  dark: "dark",
};

/**
 * Object which has the different props for the Drawer Component (/src/App.drawer.js)
 * which is used via DrawerContext (/src/contexts) and provided at /src/App.drawer.js.
 */
export const DrawerProps = {
  direction: {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
  },
  variant: {
    permanent: "permanent",
    persistent: "persistent",
    temporary: "temporary",
  },
};

/**
 * Object has the key and value pair of all the keys which
 * are used to store some values in the local storage.
 */
export let LocalStorageKeys = {
  token: "token",
};

/**
 * Object has the key and value pair of all the HTTP method
 * used for an network call.
 */
export let NetWorkCallMethods = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
  update: "UPDATE",
};

export const sideMenuRoutesOptions = {
  [UserRoles.admin]: [
    {
      name: "Post List",
      route: Routes.posts,
      icon: <ListAltIcon style={{ opacity: 0.7 }} />,
      showMenu: true,
    },
    {
      name: "User List",
      route: Routes.users,
      showMenu: true,
      icon: <PermIdentityIcon style={{ opacity: 0.7 }} />,
    },
  ],
  [UserRoles.user]: [
    {
      name: "Post List",
      route: Routes.posts,
      icon: <ListAltIcon style={{ opacity: 0.7 }} />,
      showMenu: true,
    },
  ],
};
