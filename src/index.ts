// import World from './world';

// const root: HTMLElement | null = document.getElementById("root")
// const world = new World("Hello World!!!");
// world.sayHello(root);

// 第3回 基本の型定義
// import {
//   anySample,
//   unknownSample,
//   primitiveSample,
//   notExistSample,
// } from "./basic";

// anySample();
// notExistSample();
// primitiveSample();
// unknownSample();

// 第４回 関数の型定義
// import {
//   logMessage,
//   logMessage2,
//   logMessage5,
//   logMessage6,
// } from "./function/basic";

// logMessage("Hello logMessage");
// logMessage2("Hello");
// logMessage6("ネイチャ");
// logMessage5("呼び出しネイチャ");

// import {
//   isUserSignIn,
//   isUsersSignIn2,
//   sumProductsPrice,
// } from "./function/parameters";

// // ↓戻り値
// isUserSignIn("abc", "panda");
// isUsersSignIn2("123");
// const sum = sumProductsPrice(1000, 2000, 500);
// console.log("Function parameters sample 5: Total price:", sum);

// 第５回 オブジェクトの型定義
// import objectSample from "./object/object";
// objectSample();

// import typeAliasSample from "./object/ailias";
// typeAliasSample();

// 第６回 配列とダブルの型定義
// import arraySample from "./array/array";
// arraySample();

// import tupleSample from "./array/tuple";
// tupleSample();

// 第７回 ジェネリックの抽象化とポリモーフィズム
import genericsSample from "./generics/basic";
import advancedSample from "./generics/advanced";
genericsSample();
advancedSample();
