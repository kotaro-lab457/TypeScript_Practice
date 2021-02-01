// ↓型エイリアス
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Player = "first" | "second";

// コマの位置のクラス
class Position {
  // コンストラクタはクラスの初期値を設定
  constructor(private suji: Suji, private dan: Dan) {
    // private⇨アクセス制の役割
  }

  // パラメーターに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    // positionとplayerを渡す（パラメーター）
    if (player === "first") {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(position.dan)),
      };
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(position.dan)),
        // 段（縦列）は正と負の反転でマイナス
      };
    }
  }
}

// コマを表すクラス
abstract class Piece {
  // abstractは抽象装飾子
  protected position: Position;
  // protected クラスとサブクラスでのみアクセス可能（外部からは使えない）

  constructor(
    // 初期値
    private readonly player: Player,
    suji: Suji,
    dan: Dan
  ) {
    this.position = new Position(suji, dan);
    // this.positionは現在の位置で new position に新しく生成されたクラス
  }

  //new Piece(player: 'first', suji: 1, dan: '1') 抽象クラスはインスタンスできないとエラーが出る

  // メソッドの定義
  // パラメーターへ移動するコマのメソッド
  moveTo(position: Position) {
    this.position = position;
  }

  // 移動できるか判定するメソッド(抽象)
  abstract canMoveTo(position: Position, player: Player): boolean;
}

class Osho extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    // 移動先に、指定された位置(position)と現在の位置(this.position)と比較
    const distance = this.position.distanceFrom(position, player);

    // 移動先との距離が２未満なら、１マス移動
    return distance.suji < 2 && distance.dan < 2;
  }
}

class Fu extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player);

    // 縦列に１マス移動
    return distance.suji === 0 && distance.dan === 1;
  }
}

class NariKin extends Fu {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player);

    return (
      distance.suji < 2 &&
      distance.dan < 2 && // 移動さきが１マス以内
      distance.suji !== 0 &&
      distance.dan === -1 // 左と右後方には進めない
    );
  }
}

class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
    return [
      new Osho("first", 5, "1"),
      new Osho("second", 5, "9"),

      // 先手の歩
      new Fu("first", 1, "3"),
      new Fu("first", 2, "3"),
      new Fu("first", 3, "3"),
      new Fu("first", 4, "3"),
      new Fu("first", 5, "3"),
      new Fu("first", 6, "3"),
      new Fu("first", 7, "3"),
      new Fu("first", 8, "3"),
      new Fu("first", 9, "3"),

      // 後者の歩
      new Fu("second", 1, "7"),
      new Fu("second", 2, "7"),
      new Fu("second", 3, "7"),
      new Fu("second", 4, "7"),
      new Fu("second", 5, "7"),
      new Fu("second", 6, "7"),
      new Fu("second", 7, "7"),
      new Fu("second", 8, "7"),
      new Fu("second", 9, "7"),
    ];
  }
}

new Game();
