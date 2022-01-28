// 호이스팅
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
function doublee() {
  console.log(a*2)
}

const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = (x) => {
  return x * 2
}
console.log("doubleArrow: ", doubleArrow(8))

const doubleArrow2 = (x) => x * 2
console.log("doubleArrow: ", doubleArrow2(9))

// 객체 데이터는 소괄호 꼭 필요함
const doubleArrow3 = (x) => ({name: 'dalgorithm'})
console.log("doubleArrow: ", doubleArrow3(9))

// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// 콜백 - 함수의 인수로 사용되는 함수
function timeout(cb) {
  setTimeout(() => {
    console.log('dalgorithm!')
    cb()
  },3000)
}
timeout(() => {
  console.log('hello')
})