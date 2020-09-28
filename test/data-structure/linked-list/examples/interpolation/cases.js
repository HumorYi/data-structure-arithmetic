export default [
  {
    input: {
      str: '2,3,5,8,9,10,18,26,32',
      data: 6
    },
    output: '2,3,5,6,8,9,10,18,26,32'
  },
  {
    input: {
      str: '2,3,5,8,9,10,18,26,32',
      data: 20
    },
    output: '2,3,5,8,9,10,18,20,26,32'
  },
  {
    input: {
      str: '2,3,5,8,9,10,18,26,32',
      data: 40
    },
    output: '2,3,5,8,9,10,18,26,32,40'
  },
  {
    input: {
      str: ' ',
      data: 40
    },
    output: ' '
  },
  {
    input: {
      str: '2,3,5,8,9,10,18,26,32',
      data: 1
    },
    output: '1,2,3,5,8,9,10,18,26,32'
  },
  {
    input: {
      str: '2,3,5,8,9,10,18,26,32',
      data: 2
    },
    output: '2,2,3,5,8,9,10,18,26,32'
  },
  {
    input: {
      str: '2,3,5,8,9,10,18,26,32',
      data: 32
    },
    output: '2,3,5,8,9,10,18,26,32,32'
  }
]
