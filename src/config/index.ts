export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const, // this is like an internal id
    featured: [
      {
        name: "Editor picks",
        href: "#",
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Best Sellers",
        href: "#",
        imageSrc: "/nav/ui-kits/purple.jpg", // RES: Fixed typo from 'purple.Sjpg' to 'purple.jpg'
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const, // this is like an internal id
    featured: [
      {
        name: "Favorite Icon Picks",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling Icons",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg", // RES: Fixed typo from 'bestsellers.Sjpg' to 'bestsellers.jpg'
      },
    ],
  },
];

{
  /* RES: This file serves as a centralized storage for product categories and their associated featured items. 
      It improves code organization and maintainability by keeping related data together, making it easier to update 
      and manage assets (like images and labels) in one place. Use this technique when you have a set of related data 
      that needs to be accessed or displayed in multiple parts of your application, ensuring a cleaner and more 
      structured codebase. */
}
