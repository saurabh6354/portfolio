// This is taking a relative path which is passed as an argument, taking the base URL of our website,
// appending this relative path onto it, and then return whatever that URL is.
// This makes it easier to dynamically import images into our different components.

export const getImageURL = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
