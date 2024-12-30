"use strict";

// while
// do while
// for
// condition + body
// while (30 > 20) {
//     console.log("Hello");
// }
// do {
//     console.log("Hello");
// } while (10 > 20);
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// const arr = ["David", "Sara", "Paloma", "Sam"];
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);
// for (let i = 0; i < array.length; i++) {
//     if (arr[i].length <= 4) {
//         console.log("Hello", arr[i]);
//     }
// }
// Array length check
var likes = ["Peter", "Alex", "Sam", "David"];

function likeSystem() {
  if (likes.length === 0) {
    console.log("No one likes this post");
  } else if (likes.length === 1) {
    console.log(likes[0] + " likes this post");
  } else if (likes.length === 2) {
    console.log(likes[0], "and", likes[1] + " like this post");
  } else if (likes.length === 3) {
    console.log(likes[0], ",", likes[1], "and", likes[2] + " like this post");
  } else if (likes.length > 3) {
    console.log(likes[0], likes[1], "and", likes.length - 2 + " others like this post");
  }
}

likeSystem();