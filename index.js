let x = document.createElement("div");
let y = document.querySelector("#main");
y.appendChild(x);
x.className = "Todo";
let h = document.createElement("h1");
h.innerHTML = "Todo List +";
x.appendChild(h);
let f = document.createElement("form");
x.appendChild(f);
let i = document.createElement("input");
f.appendChild(i);
i.className = "add";
let b = document.createElement("button");
f.appendChild(b);
b.className = "btn";
b.innerHTML = "add";
let j;
let n1 = localStorage.length;
console.log(n1);

if (n1 == 0) {
  j = 1;
} else {
  j = localStorage.length + 1;
}
b.addEventListener("click", () => {
  // console.log("dhanus");
  let y = i.value;
  console.log(y);
  localStorage.setItem(`todo${j}`, y);
  //   event.preventDefault();
});
let arr=[];

let n = localStorage.length;
for(k=0;k<n;k++)
{
    arr.push(localStorage.key(k))

}
console.log(arr);

console.log(n);
for (let i = 1; i <= n; i++) {
    let d=document.createElement("div");
    d.className=`div${i}`;
x.appendChild(d);
    let c = document.createElement("input");
  c.setAttribute("type", "checkbox");
  c.setAttribute("id", `todo${i}`);
  let l = document.createElement("label");
  l.setAttribute("for", `todo${i}`);
//   x.appendChild(c);
//   x.appendChild(l);
  l.innerHTML = localStorage.getItem(arr[i-1]);
  let bt = document.createElement("button");
  bt.innerHTML = "delete";
  let br = document.createElement("br");
  //   x.appendChild(br);
  d.appendChild(c);
  d.appendChild(l);
  d.appendChild(bt);
  c.addEventListener("change", (event) => {
    if (l.style.textDecoration == "line-through") {
      l.style.textDecoration = "none";
    }
    else{
      l.style.textDecoration = "line-through";

    }
    bt.addEventListener("click",(event)=>{
        if(c.checked == true)
        {
        //    console.log(event);
        localStorage.removeItem(c.id);
        d.style.display="none";
           
           
           
        }
    })
  });
}