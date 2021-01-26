// 1.パラメーター:関数宣言時に渡される値（仮パラメーター）⇨型
// 2.引数:関数を呼び出す時に渡す値（実パラメーター）⇨ void,never
// 3.戻り値:関数が返す値

// アロー関数
export const logMessage = (message: string): void => {
  console.log("Function basic sample1:", message);
};

// 名前つき関数
export function logMessage2(message: string): void {
  console.log("Function basic sample2:", message);
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log("Function basic sample3:", message);
};
// アロー関数の省略記法
export const logMessage4 = (message: string): void =>
  console.log("Function basic sample4:", message);

export const alwaysThrowError = (message: string): never => {
  throw new Error(message);
};

// 呼び出しシグネチャ
// ・どのような関数なのか表現する型定義
// 省略記法 === アロー関数と似た形
// 完全な記法 === オブジェクトと似た形

// 呼び出しシグネチャ（省略記法）アロー関数
type LogMessage = (message: string) => void;
export const logMessage5: LogMessage = (message) => {
  console.log("Function basic sample 5:", message);
};

// 完全な呼び出しシグネチャ（オブジェクト）
type FullLogMessage = {
  (message: string): void;
};

export const logMessage6: FullLogMessage = (message) => {
  console.log("Function basic sample 6:", message);
};
