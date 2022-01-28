import _ from 'lodash'

const userA = [
  {userId: '1', name: 'DALGONG'},
  {userId: '2', name: 'Neo' }
]
const userB = [
  {userId: '1', name: 'DALGONG'},
  {userId: '3', name: 'Amy'}
]
const userC = userA.concat(userB) // 합치기
console.log('concat', userC)
console.log('uniqBy', _.uniqBy(userC,'userId')) // concat 이후 중복 제거

const userD = _.unionBy(userA, userB, 'userId') // 합치기 전 중복 제거
console.log('unionBy', userD)

const users = [
  {userId: '1', name: 'DALGONG'},
  {userId: '2', name: 'Neo'},
  {userId: '3', name: 'Amy'},
  {userId: '4', name: 'Evan'},
  {userId: '5', name: 'Lewis'}
]

const foundUser = _.find(users, {name: 'Amy'})
const foundUserIndex = _.findIndex(users, {name: 'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name:'DALGONG'})
console.log(users)