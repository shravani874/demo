const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

const txt = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const objd = JSON.parse(txt);
obj.birth = new Date(obj.birth);

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

// if beg < end
// set mid = (beg + end)/2
// MERGE_SORT(arr, beg, mid)
// MERGE_SORT(arr, mid + 1, end)
// MERGE (arr, beg, mid, end)
// end of if

