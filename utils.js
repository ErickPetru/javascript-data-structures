export function ordinal (number) {
  const prefixes = ['st','nd','rd']
  const index = ((Math.abs(number) + 90) % 100 - 10) % 10 - 1
  return number + (prefixes[index] || 'th')
}
