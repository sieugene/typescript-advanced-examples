export const book = Object.freeze({
  root: "/",
  profile: "/profile",
  panel: "/panel",
  starship: "/panel/:starship",
  registration: "/registration",
});
export type BookType = typeof book;
