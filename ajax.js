fetch("http://codingapple1.github.io/price.json")
  .then((response) => {
    // 출력, callback 함수
    if (!response.ok) {
      // 정확한 에러 처리
      throw new Error("error!!");
    }
    return response.json();
  })
  .then((결과) => {
    console.log(결과);
  })
  .catch(() => {
    // 에러 처리
    console.log("error!");
  });

// vue에서는 axios 라이브러리 사용, vue exercise 참고

// async await 사용
// async function 데이터가져오는함수() {
//   var response = await fetch("http://codingapple1.github.io/price.json");
//   if (!response.ok) {
//     throw new Error("error!");
//   }
//   var result = await response.json();
//   console.log(result);
// }
// 데이터가져오는함수().catch(() => {
//   console.log("error");
// });
