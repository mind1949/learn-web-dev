const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */

for (i = 1; i < 6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + i.toString() + ".jpg");
    thumbBar.appendChild(newImage);
}

thumbBar.onclick = function (e) {
    srcValue = e.target.getAttribute("src");
    console.log(srcValue);
    displayedImage.setAttribute("src", srcValue);
};

/* 编写 变亮/变暗 按钮 */
btn.onclick = function () {
    classValue = btn.getAttribute("class");
    if (classValue === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "变亮";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "变暗";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
};

