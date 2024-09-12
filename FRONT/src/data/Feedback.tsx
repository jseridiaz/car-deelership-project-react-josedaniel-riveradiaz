interface FeedbackCustomersType {
   name: string
   bought: string
   rating: string
   img: string
   alt: string
}

export const feedbackCustomers: FeedbackCustomersType[] = [
   {
      name: "Órlaith Parastu",
      bought: "Tesla Model 3",
      rating:
         "The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.",
      img: "/UserRating/picture-orlaith.png",
      alt: "Rating-orlaith-Tesla",
   },
   {
      name: "James Nesterenko",
      bought: "Nissan Qasqai",
      rating:
         "The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.",
      img: "/UserRating/picture-James.png",
      alt: "Rating-James-Nissan",
   },
   {
      name: "Eve Artie",
      bought: "Volkswagen Tiguan",
      rating:
         "The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.",
      img: "/UserRating/picture-eve.png",
      alt: "Rating-Eve-Tiguan",
   },
]
