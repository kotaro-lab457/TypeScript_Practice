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

// レストパラメーターを持つ関数の例
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice;
  }, 0);
};
