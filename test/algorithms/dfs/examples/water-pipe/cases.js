/**
 * 水管工游戏
 *
 * N*M 的矩形土地埋设有一些水管，水管从 (1, 1) 左上角 延伸到坐标 (N, M) 右下角，
 * 水管有2中，弯、直，每种管道占据一个单位正方形土地，可以旋转这些管道，使其构成一个管道系统，
 * 即创建一条从 (1, 1) 到 (N, M) 的连通管道。标有树木的方格表示这里没有管道。
 *
 * 0 树木
 * 1~6 管道的六种不同摆法
 *  弯：1 右上  2 右下  3 左下  4 左上
 *  直：5 横  6 竖
 * 1~4 进出水口方向
 *  1 左  2 上  3 右  4 下
 */
export default [
  {
    input: {
      data: [
        [5, 3, 5, 3],
        [1, 5, 3, 0],
        [2, 3, 5, 1],
        [6, 1, 1, 5],
        [1, 5, 5, 4]
      ],
      pipeIn: 1,
      pipeOut: 3
    },
    output: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 4, y: 3 }
    ]
  },
  {
    input: {
      data: [
        [5, 3, 5, 3],
        [1, 5, 3, 0],
        [2, 3, 5, 1],
        [6, 1, 1, 5],
        [1, 5, 5, 4]
      ],
      pipeIn: 2,
      pipeOut: 4
    },
    output: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 3, y: 1 },
      { x: 2, y: 1 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 1 },
      { x: 4, y: 2 },
      { x: 4, y: 3 }
    ]
  },
  {
    input: {
      data: [
        [5, 3, 5, 3],
        [1, 5, 3, 0],
        [2, 3, 5, 1],
        [6, 1, 1, 5],
        [1, 5, 5, 4]
      ],
      pipeIn: 1,
      pipeOut: 4
    },
    output: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 1 },
      { x: 4, y: 2 },
      { x: 4, y: 3 }
    ]
  }
]
