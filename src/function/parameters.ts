// ---オプションとデフォルト---
// オプションパラメーター
// ・パラメーターの最後に記述
// ・オプショナル『 ? 』をつける ？をつけなかったらどっちにしますか？とエラーが出る

// デフォルトパラメーター
// パラメーターの順序は関係なく記述できる
// 『 = 』で指定

// オブジェクトパラメーターをもつ関数の例
export const isUserSignIn = (userId: string, username?: string): boolean => {
  if (userId === "abc") {
    console.log(
      "Function parameters sample1:User is signed in! Username is",
      username
    );
    return true;
  } else {
    console.log("Function parameters sample1:User is not signed in!");
    return false;
  }
};

// デフォルトパラメーターを持つ関数の例
export const isUsersSignIn2 = (
  userId: string,
  username = "NO NAME"
): boolean => {
  if (userId === "ABC") {
    console.log(
      "Function parameters sample 3: User is signed in! Username is",
      username
    );
    return true;
  } else {
    console.log("Function parameters sample 4: User is not signed in");
    return false;
  }
};

// 可変超引数とは？
// ・関数の呼び出しの時に引数の数をいくつ渡してもOK
// ・全く型安全でないことがデメリット

// レストパラメーター
// ・パラメーターに、『...』を使うことで型定義できる
// ・パラメーターの最後に一つだけ指定できる

// レストパラメーターを持つ関数の例
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice;
  }, 0);
};
