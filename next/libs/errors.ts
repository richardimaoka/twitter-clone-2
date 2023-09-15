export type ErrorResult = {
  kind: "ErrorResult";
  error: string;
  detail: string;
};

export function isErrorResult(result: any): result is ErrorResult {
  return (
    typeof result === "object" &&
    result && // null can be "object", so check `result` is true
    "kind" in result &&
    result.kind === "ErrorResult"
  );
}
