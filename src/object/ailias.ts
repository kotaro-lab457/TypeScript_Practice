// 型エイリアスで型定義を再利用
export default function typeAliasSample() {
  // 型エイリアスとは
  // ・type を使って、型に名前をつけて宣言できる
  // 同じ型を何度も定義する必要はない （再利用可能）♻️
  // 型に名前をつけることで変数の役割を明確化✨

  // 型エイリアス（type）---再利用&明確化---
  type Country = {
    capital: string;
    language: string;
    name: string;
  };

  const Japan: Country = {
    capital: "東京",
    language: "日本語",
    name: "Japan",
  };

  console.log("Object alias sample 1:", Japan);

  const America: Country = {
    capital: "シアトル",
    language: "英語",
    name: "アメリカ",
  };

  console.log("Object alias sample 2:", America);

  // 合併型（union types）と交差型（Intersection Types）
  // ・合併型：型A か 型B どちらかの型を持つ 🚨 A と B に共通する型ではない🚨
  // ・交差型：型A か 型B 両方の肩をもつ（共通）

  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };

  type Avater = Knight | Wizard; // 合併型： KnightとWizardのどちらかの型をもつ（OR）
  type Paladin = Knight & Wizard; // 交差型： KnightとWizardがが持つ全ての要素を持っている（AND）

  // Knightの型を持つAvater1（合併型）
  const Avater1: Avater = {
    hp: 100,
    sp: 40,
    weapon: "マシン剣",
    swordSkill: "マシン斬り！",
  };

  console.log("Object alias sample 3 Avater1:", Avater1);

  // Wizard2の型を持つAvater2（合併型）
  const Avater2: Avater = {
    hp: 60,
    mp: 70,
    weapon: "孤島の杖",
    magicSkill: "エイプリルグランド",
  };

  console.log("Object alias sample 4 Avater2:", Avater2);

  // KnightとWizard両方の型をもつAvater3(Paladin:交差型)
  const Avater3: Paladin = {
    hp: 400,
    sp: 150,
    mp: 300,
    weapon: "ギアソード＆杖",
    swordSkill: "プルスウルトラ！",
    magicSkill: "スマッシュ！！",
  };

  console.log("Object alias sample 5 Avater3:", Avater3);
}
