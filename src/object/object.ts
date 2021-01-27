// object型に意味はない
// object型は objectであることを伝えるだけ

export default function objectSample() {
  // const a: object = {
  //     name: 'Panda',
  //     age: 23
  // }
  // a.name
  // console.log('Object object sample1:', a)
  //プロパティnameには型：objectに存在しないエラー

  // オブジェクトリテラル記法
  // ・構造を定義
  // ・各プロパティに型をつける
  const country: {
    languaege: string;
    name: string;
  } = {
    languaege: "Japanese",
    name: "Japan",
  };
  console.log("Object object sample2:", country);

  // オプショナル（？）なプロパティと読み取り専用（readonly）プロパティ
  const panda: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string; // あってもなくてもOK
  } = {
    age: 23,
    lastName: "Sato",
    firstName: "Kotaro",
  };
  panda.lastName = "Suzuki";
  // panda.firstName = 'Kondo'
  // fistNameプロパティはreadonlyだから再利用不可(上書きできない)
  panda.gender = "スタバ"; // genderプロパティはこのように後から追加できる

  console.log("Object object sample3:", panda);

  // インデックスシグネチャ（オブジェクトの柔軟な型定義）
  // オブジェクトが複数のプロパティを持つ可能性を示す
  // [key: T]:Uのように定義する 🚨 keyはstringかnumberのみ 🚨

  const capitals: {
    [countryName: string]: string; // [key: T] : U
  } = {
    Japan: "日本",
    Korea: "韓国",
  };
  capitals.China = "中国";
  capitals.Canada = "カナダ";

  console.log("Object object sample4:", capitals);
}
