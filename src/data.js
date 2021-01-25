export const nav_routes = [{
    name: "One",
    link: "/one"
  }, {
    name: "Two",
    link: "/two"
  }, {
    name: "Three",
    link: "/three",
    drop: [{
        name: "Four",
        link: "/four"
      }, {
        name: "Five",
        link: "/five"
      }
    ]
  }
]


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

export const pages = [{
  id: '1',
  path: '/page-1',
  name: 'Home',
  modules: [modules_1],
  visible: true
}, {
  id: '2',
  path: '/page-2',
  name: 'Settings',
  modules: [],
  visible: true
}]

export const users = [{
    name: "admin",
    pass: "admin",
    image: "/avatar1.png"
  }, {
    name: "user",
    pass: "user"
  }, {
    name: "visitor",
    pass: "visitor"
}]