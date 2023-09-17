import { BaseUrl, ImagePosterSize, ImageBackdropSize } from "./constants";
export const posterImgUrl = (posterUrl: string) => {
  if (!posterUrl) {
    return "/default_image.svg";
  }
  return `${BaseUrl}${ImagePosterSize}${posterUrl}`;
};

export const backdropImgUrl = (posterUrl: string) => {
  if (!posterUrl) {
    return "/default_image.svg";
  }
  return `${BaseUrl}${ImageBackdropSize}${posterUrl}`;
};
