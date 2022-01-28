import random from './getRandom'
// 구조 분해 할당
// 비구조화 할당
const user = {
  name : 'Dalgorithm',
  age : 24,
  email : 'abcd@gmail.com',
  address : 'USA'
}
const {name : dalgo, age, address = 'KOREA'} = user

console.log(`사용자의 이름은 ${dalgo}입니다.`)
console.log(`${dalgo}의 이메일 주소는 ${user.email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
const [, b] = fruits
console.log(b) //banana 출력

// 변수 유효범위
// let, const 블록레벨
// var 함수레벨

// 형 변환
// 참
// true, {}, [], 1, 2, 'false', -12 ...

// 거짓
// false, '', null, undefined, 0 , -0, NaN

const a = random()

switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest...')
}

if (a === 0) {
  console.log('a is 0')
} else {
  console.log('a is', a)
}

// 삼항 연산자
const b = 1 < 2

if (b) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(b ? '참' : '거짓')

// 반복문 ***
const ulEl = document.querySelector('ul')
for ( let i = 0; i < 10; i ++) {
  const li = document.createElement('li')
  li.textContent = `list - ${i + 1}`
  if ( (i + 1) % 2 === 0 ){
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}