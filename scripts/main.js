let myImg = document.querySelector('img')
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src')
    if (mySrc === 'images/mdn-icon.png') {
        myImg.setAttribute('src', 'images/firefox-icon.png')
    } else {
       myImg.setAttribute('src','images/mdn-icon.png')
    }
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;

let storedName = localStorage.getItem('name');
if(!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}