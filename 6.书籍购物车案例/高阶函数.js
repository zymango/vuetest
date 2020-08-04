//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//filter/map/reduce
//filter中回调函数必须返回一个布尔值
//true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false：当返回false时，函数会过滤掉这次的n
// const nums = [10, 20, 40, 50, 222, 25, 333];

//链式编程写法
// let total = nums.filter(function(n){
//   return n < 100;
// }).map(function(n) {
//   return n * 2;
// }).reduce(function(preValue, n){
//   return preValue + n;
// });
// console.log(total);

//箭头函数写法
// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
// console.log(total);

//1.filter函数的使用
// let newArry = nums.filter(function(n) {
//   return n <= 100;
// });
// console.log(newArry);

// //2.map函数的使用
// let newArry1 = newArry.map(function(n){
//   return n * 2;
// })
// console.log(newArry1);

// //3.reduce函数使用
// //reduce作用对数组中的所有的内容进行汇总
// let total = newArry1.reduce(function (preValue, n) {
//   return preValue + n;
// }, 0);
// console.log(total);

//第一次：preValue 0  n 20
//第二次：preValue 20 n 40
//第三次：preValue 60 n 80
//第四次：preValue 140 n 100



//1.需求：取出小于100的数字
// let newArry = [];
// for(let n in nums){
//   if(num <= 100){
//     newArry.push(n)
//   }
// }

// //2.将所有小于100的数字进行转化：全部{*2}
// let newArry1 = [];
// for(let n of newArry){
//   newArry1.push(n * 2);
// }

// //3.将所有newArry1中的所有数字相加  得到最终的结果
// let total = [];
// for(let n in newArry1){
//   total += n;
// }
// console.log(total);
