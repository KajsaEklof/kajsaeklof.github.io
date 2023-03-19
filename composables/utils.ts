export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-uk", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}