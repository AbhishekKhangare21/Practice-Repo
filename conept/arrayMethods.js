// //length
// var a = [10, 20, 30];
// console.log(a.length);

// //shift
// var sh = [10, 20, 30, 40];
// console.log(sh.shift()); //10
// console.log(sh); //20 30 40
// var sha = [];
// console.log(sha.shift());

// //unshift
// var unsh = [10, 20, 30, 40, 50];
// console.log(unsh.unshift(66, 25)); //inserted at begining
// console.log(unsh);

// //push
// var p = [10, 30, 40];
// console.log(p.pop());
// console.log(p);

// //pop
// var p = [10, 20, 30, 40, 50];
// console.log(p.push(70));
// console.log(p);

// //indexof
// var i = [10, 30, 40];
// console.log(i.indexOf(40));
// console.log(i.indexOf(200));

// // lastindexof
// var li = [10, 20, 30, 40, 50, 20, 50, 60];
// console.log(li.lastIndexOf(20));

// //includes
// var li = [10, 20, 30, 40];
// console.log(li.includes(20));
// console.log(li.includes(50));

// //join
// var jo = [10, 20, 30, 40];
// console.log(jo.join("-"));
// console.log(typeof jo.join("-"));

// //reverse
// var re = [10, 20, 30, 40, 50, 20, 50, 60, 30];
// console.log(re.reverse());

// //concat
// var arr = [10, 20, 30];
// console.log(arr.concat(20, 40));

// //foreach
// var foarr = [10, 20, 30];
// foarr.forEach(function (value, index) {
//   console.log(value);
// });

// //every
// var everyarr = [10, 30, 40, 50];
// var ever = everyarr.every(function (value, index) {
//   return value > 10;
// });
// console.log(ever);

// //some
// var somearr = [20, 30, 40, 50];
// var somear = somearr.some(function (value, index) {
//   return value > 10;
// });

// console.log(somear);

// //filter
// var filterArr = [10, 30, 40, 50];
// var somear = filterArr.filter(function (value, index) {
//   return value > 10;
// });

// console.log(somear);

// //slice
// var sl = [10, 20, 30, 40, 50];
// console.log(sl.slice(1, 4));

// //splice
// var slp = [10, 20, 30, 40, 50];
// console.log(slp.splice(1, 0, 100, 200, 300));
// console.log(slp);

// //map
// var m = [1, 2, 3];
// let area = [];
// let are;
// for (let i = 0; i < m.length; i++) {
//   are = m[i] * 5;
//   area.push(are);
// }

// // console.log(area);
// var mapa = [1, 2, 3, 4, 5, 6];
// console.log(
//   (mm = mapa.map(function (value, index) {
//     return value * 5;
//   }))
// );
// console.log(mm);
