// simple enum user type
enum UserType {
  ADMIN = 5,
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 10,
}

// specialize the object properties inside {}
const person: {
  // we can add (key: type) in here
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  userType: UserType;
} = {
  name: 'Trung',
  age: 28,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  userType: UserType.ADMIN,
};

// asign array any: any[]
let favoriteActivities: any[];
favoriteActivities = ['Sports', 2];

// !WRONG
// person.role.push('admin');
// person.role[1](20);

console.log(person);
console.log(person.name);
