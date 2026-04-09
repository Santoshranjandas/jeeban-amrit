import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return source ? builder.image(source) : null;
}
