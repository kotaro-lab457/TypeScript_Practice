export default function arraySample() {
  // シンプルな配列の型定義（配列要素を型として定義できる）
  const colors: string[] = ["red", "blue"];
  colors.push("yellow"); // 追加（push）

  //colors.push(123) number型ではないのでNG
  console.log("array sample 1:", colors);

  // 型定義方法: T[]と Array<T>は同義
  const even: Array<number> = [123, 456];
  even.push(89); // OK
  //even.push('文字列') error

  console.log("array sample 2:", even);

  // 合併型の配列
  const ids: (string | number)[] = ["ABC文字列", 123];
  ids.push("DEF文字列");
  ids.push(4567);

  console.log("array sample 3:", ids);

  // アノテーションしなくても型推論される
  const generateSomeArray = () => {
    const _someArray = []; // any[]で型定義されている（最初）
    _someArray.push("最初の文字列"); //string型[]の型推論
    _someArray.push(111); // number型[]の型推論
    // 最終的に (string | number)[] として推論されている、下のtrueはNG
    return _someArray;
  };

  const someArray = generateSomeArray();
  //someArray.push(true)
  someArray.push("二番目の文字");

  console.log("array sample 4:", someArray);

  // イミュータブルな配列（書き換え可能）
  const mutableNumbers: number[] = [1, 2, 3];
  mutableNumbers[2] = 4;

  console.log("mutable sample 5:", mutableNumbers);

  const mutableNames: Readonly<string[]> = ["s", "u", "z", "u"];
  //mutableNames.push('ki') NG
  console.log("mutable sample 6:", mutableNames);

  // 読み取り専用（readonly）
  const commands: readonly string[] = ["taro", "kent", "ryo"];
  //commands.push("太郎") 追加不可、代入不可
  console.log("mutable sample 7:", commands);
}
