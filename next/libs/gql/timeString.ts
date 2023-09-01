import { TimeString } from "./graphql";

export function toTimeString(s: string): TimeString | null {
  try {
    const d = new Date(s);
    return d.toISOString() as TimeString;
  } catch (e) {
    return null;
  }
}

export function fromDateToTimeString(d: Date): TimeString {
  return d.toISOString() as TimeString;
}
