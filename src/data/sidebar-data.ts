import {ShoppingBasket, Settings, User, Presentation} from "lucide-react";
import type { SidebarData } from "../types/sideBar";

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: [
    {
      title: 'Menú',
      items: [
        {
          title: "Dashboard",
          url: "/estadisticas",
          icon: Presentation,
        },
        {
          title: "Mis productos",
          url: "/productos",
          icon: ShoppingBasket,
        },
      ],
    },
    {
      title: 'Otros',
      items: [
        {
          title: 'Ajustes',
          icon: Settings,
          items: [
            {
              title: 'Cuenta',
              url: '/cuenta',
              icon: User,
            },
          ],
        }
      ],
    },
  ],
};
