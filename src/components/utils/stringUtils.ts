/**
 * Formats a string by trimming spaces, converting to lowercase,
 * removing diacritics (e.g., tildes), and replacing spaces with underscores.
 *
 * @param title - The string to format.
 * @returns The formatted string.
 */
export const formatId = (title: string): string =>
    title
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, '_');