import { twMerge, type ClassNameValue } from "tailwind-merge";

export const cn = (classArray: ClassNameValue[]) => {
  return twMerge(classArray);
};
