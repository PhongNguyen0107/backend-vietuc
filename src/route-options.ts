export const ROUTE_NAME = {
  DASHBOARD: "/home",
  CHANNELS: "/channels",
  PROFILE: "/profile"
}

export const MenuOpts = [
  {
    id: 1,
    path: ROUTE_NAME.DASHBOARD,
    title: "Dashboards",
    icon: "dashboard"
  },
  {
    id: 2,
    path: ROUTE_NAME.CHANNELS,
    title: "Channels",
    icon: "channel"
  }
]

export const SubMenuOpts = [
  {
    id: 10001,
    path: ROUTE_NAME.PROFILE,
    title: "Profile Information",
    icon: "profile"
  }
]