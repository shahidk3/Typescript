const a = 3344;
console.log(a)
// use tsc sample.tsc -w this is watcher and helps to continuously watch over ts file and not compile everytime


let b: string = "{23}"
let nambo:number = 343;
let namee=<string>"Shahid";

//union data types

let surname: string | number;

surname = 12
surname = "khan"

//arrays

const arr: number[] = [1, 2, 3, 4, 5]

const arr2: string[] = ["Hello", "world"]

// another and better way to declare array 

const arr3:Array<String> = []
const arr1:Array<String | number> = ["Hello", 123]


//objects
interface Obj {
    height: number;
    weight: number;
    gender: string;
};

const obj:Obj = {
    height: 179,
    weight: 70,
    gender: "Male",
};


//functions 

type FuncType = (n:number, m:number, l?: number) => number;

//optional parameter
const func: FuncType = (n, m, l) => {
    if (typeof l === "undefined") return n * m;
    return n * m * l
}


//default parameter
const func1 = (n: number, m: number, l: number = 20) => {
    return n * m * l
}
func1(22, 30)



//funcations with objects 

const getData = (product: {
    name: string, 
    stock:number, 
    price:number,
    photo: string,
}): void => {
    console.log(product)

}

// classes 

class Player {
    constructor( 
        private height: number,
        public weight: number,
        protected power: number
    ) {}

    getMyHeight = () => this.height //height is private that is why it will be accesed in that same calss only
}

class player2 extends Player{
    special: boolean;
    constructor( height: number, weight: number, power: number, special: boolean){
        super(height, weight, power);
        this.special = special;
    }
    getMyPower = () => this.power; // power is protected hence it can be accesed in same class and deriveed class

}

const shahid = new Player(179, 68, 50);
console.log(shahid.weight);


interface ProductType {
    name: string;
    price: number;
    stock: number;
    getId: () => string;
    offer?: boolean;
}

class product implements ProductType{
    private id: string = String(Math.random() * 1000)
    constructor(
        public name: string,
        public price: number, 
        public stock: number
    ) {}
    getId = () => this.id

    
}


// Type Assertion

// const btn = document.getElementById("btn") as HTMLElement;
// const btn = document.getElementById("btn")!;
const btn = <HTMLElement> document.getElementById("btn");

btn.onclick


// const image = document.getElementById("myimg") as HTMLImageElement;
// const image = document.querySelector("img")!;


const form = document.getElementById("myform") as HTMLFormElement;
const myinput = document.querySelector("form > input") as HTMLInputElement; 

form.onsubmit = () => {
    console.log(myinput.value);
}


//type utility

// > partial<type>
type user = {
    Name: string;
    Email: String;
}

type user2 = Partial<user>;

// > required<type> -- opposite of partial 
type user0 = {
    name?: string;
    email: string;
}

const user: Required<user0> = {
    name: "sha";
    email: "sha@gmail.com";
}

// > readonly<type>

type user1 = {
    name: string;
    email: string;
}

const userr: readonly<user1> = {
    name: "shah";
    email: "sha@gmail.com";
}

// > record<key, type>

type user3 = {
    name: string;
    email: string;
}

type user33 = Record<"namw" | "email" | "gender", String>

// > pick<type,key>
interface OrderInfo{
    readonly Id: string;
    user: string;
    city: string;
    state: string;
    country: string;
    status: string;
} 

type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

//omit 

type random = Omit<OrderInfo, "country">;


// generics

// const func0 = <T>(n: T): T => {

//   return n;
// };

// const anss = func(20);
// const ans2 = func("20");
// const ans3 = func(true);

// type Personnn = {
//   name: string;
//   age: number;
// };

// const func7 = <T>(n: T): T => {
//   return n;
// };

// const person1: Person = {
//   name: "Abhi",
//   age: 109,
// };

// const ansss = func<Person>(person1);

// const func = <T, U>(n: T, o: U): { n:T, o:U } => {
//   return { n, o };
// };

// const ans00 = func<number,string>(20,"Lol");

// type Person = {
//   name: string;
//   age: number;
// };

// type Person2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user: Person = {
//   name: "abhi",
//   age: 109,
// };

// const user2: Person2 = {
//   name: "abhi",
//   age: 109,
//   email: "asd@gmail.com",
// };

// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const ans = func<Person, Person2>(user, user2);

// type Person = {
//   name: string;
//   age: number;
// };

// const users: Person[] = [
//   {
//     name: "abhi",
//     age: 109,
//   },
//   {
//     name: "Nahar",
//     age: 109,
//   },
//   {
//     name: "Levi",
//     age: 52,
//   },

//   {
//     name: "Random",
//     age: 2,
//   },
// ];

// const filterByPeoples = <T, U extends keyof T>(
//   arr: T[],
//   property: U,
//   value: T[U]
// ): T[] => {
//   return arr.filter((item) => item[property] === value);
// };

// const filteredPeopleByName = filterByPeoples(users, "name", "Nahar");
// const filteredPeopleByAge = filterByPeoples(users, "age", 109);
// console.log(filteredPeopleByAge);