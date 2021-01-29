export default function tupleSample() {
  // 一般的なタプルの型定義
  const response: [string, number] = ["文字", 300];
  // response = ['文字', 400 , 'また文字'] 定義された要素数と合わない
  // response = ['文字', 400] numberにstringは代入できない

  console.log("tuple sample 1:", response);

  // 可変長（レストパラメーター）も使える
  const girlfriends: [string, ...string[]] = ["さき", "みほ", "らん"];
  console.log("tuple sample 2:", girlfriends);
}
