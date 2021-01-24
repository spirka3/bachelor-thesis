export const modules_1 = [
  {
    id: "1",
    page_id: "1",
    type: "image",
    size: {
      width: "200px",
      height: "200px"
    },
    position: {
      row: "0",
      col: "0"
    },
    status: "show"
  },{
    id: "2",
    page_id: "1",
    type: "card",
    size: {
      width: "400px",
      height: "400px"
    },
    position: {
      row: "1",
      col: "0"
    },
    status: "show"
  }]

export const pages = [
  {
    id: '1',
    path: '/page-1',
    name: 'name1',
    modules: [modules_1]
  }, {
    id: '2',
    path: '/page-2',
    name: 'name2',
    modules: []
  }, {
    id: '3',
    path: '/page-3',
    name: 'name3',
    modules: []
  }
]

export const users = [{
    name: "admin",
    pass: "admin"
  }, {
    name: "user",
    pass: "user"
  }, {
    name: "visitor",
    pass: "visitor"
}]