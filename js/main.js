let cookies = 0;
let CPS = 0;


let updiv1 = false;
let box1cost = 25;
let box1cps = 0;
let box1enabled = false;

let updiv2 = false;
let box2cost = 250;
let box2cps = 0;
let box2enabled = false;

let updiv3 = false;
let box3cost = 2500;
let box3cps = 0;
let box3enabled = false;

let updiv4 = false;
let box4cost = 25000;
let box4cps = 0;
let box4enabled = false;

let updiv5 = false;
let box5cost = 250000;
let box5cps = 0;
let box5enabled = false;

let updiv6 = false;
let box6cost = 2500000;
let box6cps = 0;
let box6enabled = false;

let updiv7 = false;
let box7cost = 25000000;
let box7cps = 0;
let box7enabled = false;

let updiv8 = false;
let box8cost = 250000000;
let box8cps = 0;
let box8enabled = false;

let updiv9 = false;
let box9cost = 2500000000;
let box9cps = 0;
let box9enabled = false;

let updiv10 = false;
let box10cost = 2500000000;
let box10cps = 0;
let box10enabled = false;


const linkcookiebtn = document.querySelector('.mainclicker');
linkcookiebtn.addEventListener("click", cookiebutton);
const linkcookieamountshow = document.querySelector('.cookieshow');
const linkcpsamountshow = document.querySelector('.cpsshow');

const upgr2box1 = document.querySelector('.div1');
const upgr2box1cost = document.querySelector('.pricename1');
upgr2box1.addEventListener("click", upgrade1box1);

const upgr2box2 = document.querySelector('.div2');
const upgr2box2cost = document.querySelector('.pricename2');
upgr2box2.addEventListener("click", upgrade1box2);

const upgr2box3 = document.querySelector('.div3');
const upgr2box3cost = document.querySelector('.pricename3');
upgr2box3.addEventListener("click", upgrade1box3);

const upgr2box4 = document.querySelector('.div4');
const upgr2box4cost = document.querySelector('.pricename4');
upgr2box4.addEventListener("click", upgrade1box4);

const upgr2box5 = document.querySelector('.div5');
const upgr2box5cost = document.querySelector('.pricename5');
upgr2box5.addEventListener("click", upgrade1box5);

const upgr2box6 = document.querySelector('.div6');
const upgr2box6cost = document.querySelector('.pricename6');
upgr2box6.addEventListener("click", upgrade1box6);

const upgr2box7 = document.querySelector('.div7');
const upgr2box7cost = document.querySelector('.pricename7');
upgr2box7.addEventListener("click", upgrade1box7);

const upgr2box8 = document.querySelector('.div8');
const upgr2box8cost = document.querySelector('.pricename8');
upgr2box8.addEventListener("click", upgrade1box8);

const upgr2box9 = document.querySelector('.div9');
const upgr2box9cost = document.querySelector('.pricename9');
upgr2box9.addEventListener("click", upgrade1box9);

const upgr2box10 = document.querySelector('.div10');
const upgr2box10cost = document.querySelector('.pricename10');
upgr2box10.addEventListener("click", upgrade1box10);

function cookiebutton() {
    cookies += 1;
}

function serverupdate() {
    cookies = Math.round(cookies * 100) / 100
    linkcookieamountshow.innerHTML = cookies;
    CPS = Math.round(CPS * 100) / 100
    linkcpsamountshow.innerHTML = CPS;


    if (cookies >= 10 && updiv1 == false) {
        upgr2box1.classList.remove('hidden');
        updiv1 = true;
    }

    if (cookies >= 100 && updiv2 == false) {
        upgr2box2.classList.remove('hidden');
        updiv2 = true;
    }

    if (cookies >= 1000 && updiv3 == false) {
        upgr2box3.classList.remove('hidden');
        updiv3 = true;
    }

    if (cookies >= 10000 && updiv4 == false) {
        upgr2box4.classList.remove('hidden');
        updiv4 = true;
    }

    if (cookies >= 100000 && updiv5 == false) {
        upgr2box5.classList.remove('hidden');
        updiv5 = true;
    }

    if (cookies >= 1000000 && updiv6 == false) {
        upgr2box6.classList.remove('hidden');
        updiv6 = true;
    }

    if (cookies >= 10000000 && updiv7 == false) {
        upgr2box7.classList.remove('hidden');
        updiv7 = true;
    }

    if (cookies >= 100000000 && updiv8 == false) {
        upgr2box8.classList.remove('hidden');
        updiv8 = true;
    }

    if (cookies >= 1000000000 && updiv9 == false) {
        upgr2box9.classList.remove('hidden');
        updiv9 = true;
    }

    if (cookies >= 10000000000 && updiv10 == false) {
        upgr2box10.classList.remove('hidden');
        updiv10 = true;
    }
}

function upgrade1box1() {
    if (cookies >= box1cost) {
        cookies = cookies - box1cost;
        box1cost = box1cost * 1.25;
        box1cost = Math.round(box1cost);
        upgr2box1cost.innerHTML = box1cost;
        box1cps = box1cps + 1;
        CPS += 1;

        if (box1enabled == false) {
            intervalbox1();
            box1enabled = true;
        }
    }
}

function upgrade1box2() {
    if (cookies >= box2cost) {
        cookies = cookies - box2cost;
        box2cost = box2cost * 1.50;
        box2cost = Math.round(box2cost);
        upgr2box2cost.innerHTML = box2cost;
        box2cps = box2cps + 12;
        CPS += 12;

        if (box2enabled == false) {
            intervalbox2();
            box2enabled = true;
        }
    }
}

function upgrade1box3() {
    if (cookies >= box3cost) {
        cookies = cookies - box3cost;
        box3cost = box3cost * 1.75;
        box3cost = Math.round(box3cost);
        upgr2box3cost.innerHTML = box3cost;
        box3cps = box3cps + 144;
        CPS += 144;

        if (box3enabled == false) {
            intervalbox3();
            box3enabled = true;
        }
    }
}

function upgrade1box4() {
    if (cookies >= box4cost) {
        cookies = cookies - box4cost;
        box4cost = box4cost * 2;
        box4cost = Math.round(box4cost);
        upgr2box4cost.innerHTML = box4cost;
        box4cps = box4cps + 1250;
        CPS += 1250;

        if (box4enabled == false) {
            intervalbox4();
            box4enabled = true;
        }
    }
}

function upgrade1box5() {
    if (cookies >= box5cost) {
        cookies = cookies - box5cost;
        box5cost = box5cost * 2.25;
        box5cost = Math.round(box5cost);
        upgr2box5cost.innerHTML = box5cost;
        box5cps = box5cps + 10000;
        CPS += 10000;

        if (box5enabled == false) {
            intervalbox5();
            box5enabled = true;
        }
    }
}

function upgrade1box6() {
    if (cookies >= box6cost) {
        cookies = cookies - box6cost;
        box6cost = box6cost * 2.5;
        box6cost = Math.round(box6cost);
        upgr2box6cost.innerHTML = box6cost;
        box6cps = box6cps + 50000;
        CPS += 50000;

        if (box6enabled == false) {
            intervalbox6();
            box6enabled = true;
        }
    }
}

function upgrade1box7() {
    if (cookies >= box7cost) {
        cookies = cookies - box7cost;
        box7cost = box7cost * 2.75;
        box7cost = Math.round(box7cost);
        upgr2box7cost.innerHTML = box7cost;
        box7cps = box7cps + 125000;
        CPS += 125000;

        if (box7enabled == false) {
            intervalbox7();
            box7enabled = true;
        }
    }
}

function upgrade1box8() {
    if (cookies >= box8cost) {
        cookies = cookies - box8cost;
        box8cost = box8cost * 3;
        box8cost = Math.round(box8cost);
        upgr2box8cost.innerHTML = box8cost;
        box8cps = box8cps + 750000;
        CPS += 750000;

        if (box8enabled == false) {
            intervalbox8();
            box8enabled = true;
        }
    }
}

function upgrade1box9() {
    if (cookies >= box9cost) {
        cookies = cookies - box9cost;
        box9cost = box9cost * 2.25;
        box9cost = Math.round(box9cost);
        upgr2box9cost.innerHTML = box9cost;
        box9cps = box9cps + 2250000;
        CPS += 2250000;

        if (box9enabled == false) {
            intervalbox9();
            box9enabled = true;
        }
    }
}

function upgrade1box10() {
    if (cookies >= box10cost) {
        cookies = cookies - box10cost;
        box10cost = box10cost * 2.5;
        box10cost = Math.round(box10cost);
        upgr2box10cost.innerHTML = box10cost;
        box10cps = box10cps + 6000000;
        CPS += 6000000;

        if (box10enabled == false) {
            intervalbox10();
            box10enabled = true;
        }
    }
}

function intervalbox1() {
    cookies += box1cps / 10;
    setTimeout(intervalbox1, 100);
}

function intervalbox2() {
    cookies += box2cps / 10;
    setTimeout(intervalbox2, 100);
}

function intervalbox3() {
    cookies += box3cps / 10;
    setTimeout(intervalbox3, 100);
}

function intervalbox4() {
    cookies += box4cps / 10;
    setTimeout(intervalbox4, 100);
}

function intervalbox5() {
    cookies += box5cps / 10;
    setTimeout(intervalbox5, 100);
}

function intervalbox6() {
    cookies += box6cps / 10;
    setTimeout(intervalbox6, 100);
}

function intervalbox7() {
    cookies += box7cps / 10;
    setTimeout(intervalbox7, 100);
}
function intervalbox8() {
    cookies += box8cps / 10;
    setTimeout(intervalbox8, 100);
}

function intervalbox9() {
    cookies += box9cps / 10;
    setTimeout(intervalbox9, 100);
}

function intervalbox10() {
    cookies += box10cps / 10;
    setTimeout(intervalbox10, 100);
}

setInterval(serverupdate, 100)