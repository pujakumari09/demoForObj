let obj = [{ input: "Robin" }, { code: "stan" }, { output: "Robin" }];

let newArr = [];

let f1 = [];
let f2 = [];

let newObj = [];

for (let val of obj) {
  let newKey = Object.values(val).toString();
  let newVal = Object.keys(val).toString();
  let key = newKey;
  let newObj = { [key]: newVal };

  newArr.push(newObj);
}

newArr.filter(function(item, index) {
  if (item.stan == undefined) {
    f1.push(item.Robin);
  }

  if (item.Robin == undefined) {
    f2.push(item.stan);
  }
});

newObj.push({ Robin: f1 }, { stan: f2 });

console.log(newObj);
