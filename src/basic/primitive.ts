export default function primitiveSample() {
  const name = "panda";
  console.log("primitive sample 1:", typeof name, name);

  const age = 123;
  console.log("primitive sample 2:", typeof age, age);

  const isSingle = true;
  console.log("primitive sample 3:", typeof isSingle, isSingle);

  const isOver: boolean = age >= 20;
  console.log("primitive sample 4:", typeof isOver, isOver);
}
