import { BaseUrl, ImagePosterSize } from "./constants";
export const posterImgUrl = (posterUrl: string) => {
  if (!posterUrl) {
    return "/default_image.svg";
  }
  return `${BaseUrl}${ImagePosterSize}${posterUrl}`;
};
