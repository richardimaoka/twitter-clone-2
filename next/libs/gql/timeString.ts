import { TimeString } from "./graphql";

export const toTimeString = (s: string): TimeString | null => {
  try {
    const d = new Date(s);
    return d.toISOString() as TimeString;
  } catch (e) {
    return null;
  }
};
