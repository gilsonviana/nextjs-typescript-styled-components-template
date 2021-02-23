import {
  ThemeColorOptions,
  ThemeFontSizeOptions,
  ThemeFontWeightOptions,
} from "@styled/theme";

export interface IText {
  color?: keyof ThemeColorOptions;
  size?: keyof ThemeFontSizeOptions;
  weight?: keyof ThemeFontWeightOptions;
  margin?: boolean;
  center?: boolean;
}
