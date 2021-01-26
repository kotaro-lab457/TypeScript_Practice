export default function anySample() {
  let name: any = "panda";
  console.log("any sample1:", typeof name, name);

  name = 23;
  console.log("any sample2:", typeof name, name);
  // 何者にもなるから使用禁止
}
