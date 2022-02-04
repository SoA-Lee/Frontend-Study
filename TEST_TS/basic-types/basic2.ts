// 1. Array
let list: (number | string)[] = [1,2,3, "4"];
// let list: Array<number> = [1,2,3];

// 2. Tuple
let x: [string, number];
x = ["hello", 39]; // 순서도 맞고, type도 맞아야 함. 
// x[3] = "world"; 오류 : 길이가 맞아야함. undefined.

const person: [string, number] = ["Mark", 39];

const [first, second] = person; // 구조분해할당

// 3. any
// noImplicitAny
function returnAny(message :any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");
any1.toString();

let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d; // 안전성을 잃게 된다.

// 4. unknown, typeGuard
declare const maybe: unknown;

if (maybe === true) {
  const aBoolean: boolean = maybe;
  // const aString: string = maybe;
}

if (typeof maybe === 'string') {
  const aString: string = maybe;
  // const aBoolean: boolean = maybe;
}

// 5. never. 모든 타입의 subtype. 어떤 것도 할당할 수 없다.
function error(message: string): never {
  throw new Error(message); // 어떠한 형태로 return 되지 않는다.
}

function fail(){
  return error("failed");
}

function infiniteLoop(): never {
  while(true) {}
}