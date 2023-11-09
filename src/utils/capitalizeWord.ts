export function capitalizeWord(word: string): string {
  const firstLetter = word.charAt(0).toLocaleUpperCase();
  const wordSliced = word.slice(1);
  const wordCapitalized = firstLetter + wordSliced;
  return wordCapitalized;
}
