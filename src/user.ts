interface User {
    id: number;
    name: string;
    age?: number;
    email?: string;
}

const user1: User = {
    id: 1,
    name: "Pimpim PamPam"
};

const user2: User = {
    id: 2,
    name: "Bim bamich",
    age: 31
};

const user3: User = {
    id: 3,
    name: "Alex bam",
    email: "chito@gmail.com"
};

const user4: User = {
  id: 4,
  name: "Lan Bin",
  age: 22,
  email: "BinLan22@example.com"
};

console.log(user1, user2, user3, user4);


interface Admin extends User {
  role: string;
}


const admin1: Admin = {
  id: 100,
  name: "Main admin",
  role: "superadmin"
};

const admin2: Admin = {
  id: 101,
  name: "common admin",
  role: "admin",
  age: 35,
  email: "admin@example.com"
};

console.log(admin1, admin2);


function greetUser(user: User): string {
  if (user.age !== undefined) {
    return `Привет, ${user.name}! Тебе ${user.age} лет.`;
  } else {
    return `Привет, ${user.name}!`;
  }
}

console.log(greetUser(user1));
console.log(greetUser(user2));
console.log(greetUser(admin1));
