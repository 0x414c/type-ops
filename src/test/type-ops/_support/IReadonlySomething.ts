export interface IReadonlySomething {
  readonly p1: string;
  readonly p2: {
    readonly p3: string;
    p4: string;
  };
  p5: string;
  p6: {
    readonly p7: string;
    p8: string;
  };
}
