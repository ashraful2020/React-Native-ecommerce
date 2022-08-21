import { color } from "../../theme/color";
import { typography } from "../../theme/typography";

const BASE = { fontSize: 15, fontFamily: typography.regular };
const BOLD = {
  fontSize: 15,
  fontFamily: typography.subHeading,
  fontWeight: 500,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BASE,
    fontSize: 32,
  },
  h2: {
    color: color.black,
    fontSize: 24,
  },
  h3: {
    ...BASE,
    fontSize: 20,
  },
  h4: {
    ...BASE,
    fontSize: 16,
  },
  small: {
    ...BOLD,
    fontSize: 12,
  },
  center: {
    ...BOLD,
    textAlign: "center",
  },
};
