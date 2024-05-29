import "./styles.css";
// ランダムな色を生成する関数
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// 指定した範囲でランダムなサイズを生成する関数
function getRandomSize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// サークルをランダムに再配置する関数
function repositionCircles() {
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    const left_pos = 10 + Math.floor(Math.random() * 400);
    const top_pos = 100 + Math.floor(Math.random() * 600);
    circle.style.left = `${left_pos}px`;
    circle.style.top = `${top_pos}px`;
  });
}

for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + num + ")";
  const size = getRandomSize(40, 80);
  elm.style.width = `${size}px`;
  elm.style.height = `${size}px`;
  elm.style.borderRadius = `${size / 2}px`;
  elm.style.backgroundColor = getRandomColor();
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;
  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);
  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";
}

var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
};
// 5秒ごとにサークルを再配置
setInterval(repositionCircles, 5000);
