import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Dashboard, ContentPasteGo } from "@mui/icons-material";
import { matchPath, useNavigate } from "react-router-dom";
import Logo from "../../Component/Logo";
const menuItems = [
  {
    item: "Dashboard",
    href: "/dashboard",
    icon: Dashboard,
  },
  {
    item: "Project",
    href: "/project",
    icon: ContentPasteGo,
  },
];

const NavItem = ({ icon: Icon, label, href }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (window.location.pathname === `${href}`) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [navigate]);

  return (
    <>
      <ListItemButton
        className={
          active ? "sidebar-active sidebar-listitem" : "sidebar-listitem"
        }
        onClick={() => {
          navigate(href);
        }}
      >
        <Icon style={{ fontSize: "30px" }} /> &nbsp;&nbsp;
        <ListItemText className="font-family-sidebar">{label}</ListItemText>
      </ListItemButton>
    </>
  );
};

// function renderNavItems({ items, pathname, depth = 0 }) {
//   return (
//     <List disablePadding>
//       {items.reduce(
//         (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
//         []
//       )}
//     </List>
//   );
// }

// function reduceChildRoutes({ acc, pathname, item, depth }) {
//   const key = item.title + depth;

//   if (item.items) {
//     const open = matchPath(pathname, {
//       path: item.href,
//       exact: false,
//     });

//     acc.push(
//       <NavItem
//         depth={depth}
//         icon={item.icon}
//         info={item.info}
//         key={key}
//         open={Boolean(open)}
//         title={item.title}
//       >
//         {renderNavItems({
//           depth: depth + 1,
//           pathname,
//           items: item.items,
//         })}
//       </NavItem>
//     );
//   } else {
//     acc.push(
//       <NavItem
//         depth={depth}
//         href={item.href}
//         icon={item.icon}
//         info={item.info}
//         key={key}
//         title={item.title}
//       />
//     );
//   }

//   return acc;
// }

export const drawer = (
  <>
    <div className="px-3 my-3">
      <Logo />
    </div>
    <Divider />
    <List>
      {menuItems.map((text, index) => {
        return (
          <>
            <ListItem key={index} disablePadding>
              <NavItem icon={text?.icon} label={text?.item} href={text?.href} />
            </ListItem>
          </>
        );
      })}
    </List>
    <Divider />
  </>
);
