export const generateId = (maxNumber = 1000): number => {
  return Math.floor(Math.random() * (maxNumber - 1 + 1)) + 1
}
