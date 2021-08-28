document.getElementById("delete").onclick = function () {
    document.getElementsByClassName("display")[0].innerHTML = null;
};

document.getElementById("deleteLast").onclick = function () {
    let strItem = document.getElementsByClassName("display")[0].innerHTML;
    document.getElementsByClassName("display")[0].innerHTML
        = strItem.substring(0, strItem.length - 1);
};

function one(parameter) {
    let item = document.getElementsByClassName("display")[0];
    item.innerHTML += parameter;
    return;
};

function two(parameter) {
    let item = document.getElementsByClassName("display")[0];

    if (item.innerText.length !== 0 &&
        (item.innerText[item.innerText.length - 1] === "-" ||
            item.innerText[item.innerText.length - 1] === "+" ||
            item.innerText[item.innerText.length - 1] === "/" ||
            item.innerText[item.innerText.length - 1] === "x") ||
        item.innerText[item.innerText.length - 1] === ".") {
        item.innerHTML += parameter;
    }
    return;
};

function operator(parameter) {
    let item = document.getElementsByClassName("display")[0];
    let num;
    let str = item.innerText;
    try {
        if (str[str.length - 1] === "-" ||
            str[str.length - 1] === "+" ||
            str[str.length - 1] === "/" ||
            str[str.length - 1] === "x") throw "Недопустимый ввод";

        if (str.length > 0 &&
            (str[str.length - 1] !== "-" &&
                str[str.length - 1] !== "+" &&
                str[str.length - 1] !== "/" &&
                str[str.length - 1] !== "x")) {
            item.innerHTML += parameter;
        }

        if (str.length === 0 && parameter === "-") {
            item.innerHTML += parameter;
        }

        if (str.length > 0 && str.includes("-") && str.lastIndexOf("-") !== 0) {
            if (str.indexOf("-") === 0) {
                num = Number.parseFloat(str.substring(0, str.lastIndexOf("-"))) -
                    Number.parseFloat(str.substring(str.lastIndexOf("-") + 1));
            } else {
                num = Number.parseFloat(str.substring(0, str.indexOf("-"))) -
                    Number.parseFloat(str.substring(str.indexOf("-") + 1));
            }
            item.innerHTML = String(num);
            item.innerHTML += parameter;
        }
        if (str.length !== 0 && str.includes("+")) {
            num = Number.parseFloat(str.substring(0, str.indexOf("+"))) +
                Number.parseFloat(str.substring(str.indexOf("+") + 1));
            item.innerHTML = String(num);
            item.innerHTML += parameter;
        }
        if (str.length > 0 && str.includes("/")) {
            try {
                num = Number.parseFloat(str.substring(0, str.indexOf("/"))) /
                    Number.parseFloat(str.substring(str.indexOf("/") + 1));
                if (Number.parseFloat(str.substring(str.indexOf("/") + 1)) === 0)
                    throw "На ноль деление невозможно";
                item.innerHTML = String(num);
                item.innerHTML += parameter;
            } catch (er) {
                er = "На ноль деление невозможно";
                item.innerHTML = er;
                setTimeout(() => {
                    item.innerHTML = null;
                }, 2000);

            }
        }
        if (str.length > 0 && str.includes("x")) {
            num = Number.parseFloat(str.substring(0, str.indexOf("x"))) *
                Number.parseFloat(str.substring(str.indexOf("x") + 1));
            item.innerHTML = String(num);
            item.innerHTML += parameter;
        }
    } catch (er) {
        er = "Недопустимый ввод";
        item.innerHTML = er;
        setTimeout(() => {
            item.innerHTML = null;
        }, 2000);
    }
    return;
};

function result() {
    let item = document.getElementsByClassName("display")[0];
    let num;
    let str = item.innerText;
    if (str !== "") {

        if (str.length > 0 && str.includes("-") && str.lastIndexOf("-") !== 0) {
            if (str.indexOf("-") === 0) {
                num = Number.parseFloat(str.substring(0, str.lastIndexOf("-"))) -
                    Number.parseFloat(str.substring(str.lastIndexOf("-") + 1));
            } else {
                num = Number.parseFloat(str.substring(0, str.indexOf("-"))) -
                    Number.parseFloat(str.substring(str.indexOf("-") + 1));
            }
            item.innerHTML = String(num);

        }
        if (str.length !== 0 && str.includes("+")) {
            num = Number.parseFloat(str.substring(0, str.indexOf("+"))) +
                Number.parseFloat(str.substring(str.indexOf("+") + 1));
            item.innerHTML = String(num);

        }
        if (str.length > 0 && str.includes("/")) {
            try {
                num = Number.parseFloat(str.substring(0, str.indexOf("/"))) /
                    Number.parseFloat(str.substring(str.indexOf("/") + 1));
                if (Number.parseFloat(str.substring(str.indexOf("/") + 1)) === 0)
                    throw "На ноль деление невозможно";
                item.innerHTML = String(num);

            } catch (er) {
                er = "На ноль деление невозможно";
                item.innerHTML = er;
                setTimeout(() => {
                    item.innerHTML = null;
                }, 2000);
            }
        }
        if (str.length > 0 && str.includes("x")) {
            num = Number.parseFloat(str.substring(0, str.indexOf("x"))) *
                Number.parseFloat(str.substring(str.indexOf("x") + 1));
            item.innerHTML = String(num);

        }
    }
    return;
};





