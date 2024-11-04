export const fakeTodos = [
  {
    userId: 1,
    description: "wash car",
  },
  {
    userId: 2,
    description: "clean house",
  },
  {
    userId: 3,
    description: "get money",
  },
  {
    userId: 4,
    description: "finish todo app",
  },
];

type User = {
  userId:string,
  fullname:string,
  username:string
  todos:[number, number,number,number]
}

export const userProfile:User[] = [{
  userId:'1',
  fullname: "Mohamed Lamin Walon-Jalloh",
  username: 'walon',
  todos:[1,2,3,4]
}]
