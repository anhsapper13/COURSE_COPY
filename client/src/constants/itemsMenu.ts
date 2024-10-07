import { MenuProps } from "antd";
import createTransformer from "tailwind-group-variant";
const expandVariant = createTransformer();
export const itemsCourseSkill: MenuProps["items"] = [
  {
    label: "Sharpen your skills",
    key: "Sharpen your skills",
    className: expandVariant("lg:(w-1/4 text-center after:mb-[-10px])"),
    style: { fontSize: "16px" },
  },
  {
    label: "Change careers",
    key: "Change careers",
    className: expandVariant("lg:(w-1/4 text-center after:mb-[-10px])"),
    style: { fontSize: "16px" },
  },
  {
    label: "Level up as a leader",
    key: "Level up as a leader",
    className: expandVariant("lg:(w-1/4 text-center after:mb-[-10px])"),
    style: { fontSize: "16px" },
  },
  {
    label: "Earn a degree",
    key: "Earn a degree",
    className: expandVariant("lg:(w-1/4 text-center after:mb-[-10px])"),
    style: { fontSize: "16px" },
  },
];

export const itemsCourseTrending: MenuProps["items"] = [
  {
    label: "Sharpen your skills",
    key: "Sharpen your skills",
    className: expandVariant("md:(w-1/4 text-center after:mb-[-10px])"),
  },
  {
    label: "Change careers",
    key: "Change careers",
    className: expandVariant("md:(w-1/4 text-center after:mb-[-10px])"),
  },
  {
    label: "Level up as a leader",
    key: "Level up as a leader",
    className: expandVariant("md:(w-1/4 text-center after:mb-[-10px])"),
  },
  {
    label: "Earn a degree",
    key: "Earn a degree",
    className: expandVariant("md:(w-1/4 text-center after:mb-[-10px])"),
  },
];
