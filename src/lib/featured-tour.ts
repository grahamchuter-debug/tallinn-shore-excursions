/**
 * Featured-tour helpers — Historic Tallinn flagship used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("historic-tallinn-old-town-highlights");

export const featuredTour = flagship
  ? {
      slug: flagship.slug,
      path: flagship.path,
      bookingPath: flagship.bookingPath,
      cardName: flagship.name,
      fullName: flagship.experienceName,
    }
  : {
      slug: "historic-tallinn-old-town-highlights",
      path: "/shore-excursions/historic-tallinn-old-town-highlights",
      bookingPath: "/book/historic-tallinn-old-town-highlights",
      cardName: "Historic Tallinn & Old Town Highlights",
      fullName: "Historic Tallinn & Old Town Highlights",
    };
