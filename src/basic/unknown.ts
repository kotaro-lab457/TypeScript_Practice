export default function unknownSample() {
  const maybeNumber: unknown = 10;
  console.log("unknown sample 1:", typeof maybeNumber, maybeNumber);

  const isFor = maybeNumber === "for";
  console.log("unknown sample 2:", typeof isFor, isFor); //boolean false

  if (typeof maybeNumber === "number") {
    const sum = maybeNumber + 10;
    console.log("unknown sample 3:", typeof sum, sum);
  }
}
