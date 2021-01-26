export default function notExistSample() {
  const name = null;
  console.log("notExist sample 1:", typeof name, name);

  if (name) {
    console.log("notExist sample 2:", "僕はnullだ" + name);
  } else {
    console.log("notExist sample 3:", "僕はヌルではない");
  }

  let age = undefined;
  console.log("notExist sample 4:", typeof age, age);

  let age = 23;
  // ageが提示されている時 提示されていない（undefined）
  if (age) {
    console.log("notExist sample 5:", typeof age, "年齢は" + age + "です");
  } else {
    console.log("notExist sample 6:", "年齢はage");
  }
}
