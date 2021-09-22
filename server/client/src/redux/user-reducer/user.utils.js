export const removeImg = (imgs, imgToRemove) => {
  return imgs.filter((img) => img.title === imgToRemove.title);
};
