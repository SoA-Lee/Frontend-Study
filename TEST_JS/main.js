import random from './getRandom'

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