/** Encode each path segment for Next.js public URLs (spaces, +, etc.). */
export function publicUrl(path: string): string {
  if (!path.startsWith("/")) return path;
  return (
    "/" +
    path
      .split("/")
      .filter(Boolean)
      .map((seg) => encodeURIComponent(seg))
      .join("/")
  );
}
