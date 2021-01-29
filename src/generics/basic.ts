export default function genericsSample() {
  // ジェネリック型を使わない
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log(
    "Generics basic sample 1:",
    stringReduce(["SA", "MU", "RA", "I"], "")
  );

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log("Generics basic sample 2:", numberReduce([100, 200, 300], 1000));

  // 🔼これらのstringとnumber型を共通させる

  // 型エイリアスを作るとしたら、、、
  type Reduce = {
    (array: string[], initialValue: string): string;
    (array: number[], initialValue: number): number;
  };

  // ジェネリック型を使った呼び出し(シグネチャ全体にジェネリック型を割り当てる)
  type GenericsReduce<T> = {
    (array: T[], initialValue: T): T;
  };

  const genericStringReduce: GenericsReduce<string> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result += item;
    }
    return result;
  };
  console.log(
    "Generics basic sample3:",
    genericStringReduce(["J", "A", "P", "A", "N"], "")
  );

  const genericNumberReduce: GenericsReduce<number> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result += item;
    }
    return result;
  };
  console.log(
    "Generics basic sample3:",
    genericNumberReduce([20, 30, 40, 50], 100)
  );

  // 色々なジェネリック型の定義方法
  // 個々のシグネチャにジェネリック型を割り当てる記法
  type GenericsReduce2 = {
    <T>(array: T[], initialValue: T): T;
    <U>(array: U[], initialValue: U): U;
  };

  // 呼び出しシグネチャの省略記法
  type GenericsReduce3<T> = (array: T[], initialValue: T) => T; // 全体
  type GenericsReduce4 = <T>(array: T[], initialValue: T) => T; // 個々
}
