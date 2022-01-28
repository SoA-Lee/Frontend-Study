// 내보내기 기본값
export default function getType (data) {
  return Object.prototype.toString.call(data).slice(8,-1)
}
