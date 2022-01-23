export async function sum(a: number, b: number) {
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }

  return a + b;
}
