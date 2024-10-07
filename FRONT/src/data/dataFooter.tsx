interface DataFooterType {
   title: string
   li: { name: string; to: string }[]
}
export const dataFooter: DataFooterType[] = [
   {
      title: "Buying & Selling",
      li: [
         { name: "Find a car", to: "/cars-shop" },
         { name: "Listings by city", to: "" },
         { name: "Sell your car", to: "" },
         { name: "Compare side by side", to: "" },
      ],
   },
   {
      title: "Resource",
      li: [
         { name: "Blog", to: "" },
         { name: "Guides", to: "" },
         { name: "FAQ", to: "" },
         { name: "Help Center", to: "" },
      ],
   },
   {
      title: "About",
      li: [
         { name: "Company", to: "/about-us" },
         { name: "Career", to: "" },
         { name: "Contact", to: "" },
      ],
   },
]
