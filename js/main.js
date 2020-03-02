document.querySelectorAll(".nav-link").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    let _this = e.target;
    $(".collapse").collapse("hide");
    $(_this.getAttribute("href")).collapse("show");
  })
});

//1 task
document.querySelector("#f0 button").addEventListener("click", e => {
  e.preventDefault();
  let data = {};
  document.querySelectorAll("#f0 input").forEach(item => {
    data[item.name] = item.value
  });
  let result = calcChessBoard(
    data.height,
    data.width,
    data.char
  );
  if (result.reason) {
    document.getElementById("0").innerHTML = `status: ${result.status} \nreason: ${result.reason}`;
  } else {
    document.getElementById("0").innerHTML = result;
  }
});

//2 task
document.querySelector("#f1 button").addEventListener("click", e => {
  e.preventDefault();
  let data = {};
  document.querySelectorAll("#f1 input").forEach(item => {
    data[item.name] = item.value
  });
  let result = checkNesting(
    { w: data.wOne, h: data.hOne },
    { w: data.wTwo, h: data.hTwo }
  );
  if (result.reason) {
    document.getElementById(
      "1"
    ).innerHTML = `status: ${result.status} \nreason: ${result.reason}`;
  } else {
    document.getElementById(
      "1"
    ).innerHTML = `Вложение возможно в конверт под номером: ${result}\n*Если номер конверта равен 0, вложение не возможно!`;
  }
})

//3 task
const dataTask3 = [];
document.querySelector("#f2 button").addEventListener("click", e => {
  e.preventDefault();
  const obj = {};
  obj["verticles"] = document.querySelector('#f2 input[name="verticles"]').value.toUpperCase();
  obj[`${obj.verticles[0].toLowerCase()}`] = Math.abs(Number(
    document.querySelector('#f2 input[name="tF"]').value
  ));
  obj[`${obj.verticles[1].toLowerCase()}`] = Math.abs(Number(
    document.querySelector('#f2 input[name="tS"]').value
  ));
  obj[`${obj.verticles[2].toLowerCase()}`] = Math.abs(Number(
    document.querySelector('#f2 input[name="tT"]').value
  ));
  dataTask3.push(obj);
  document.getElementById("t-list").innerHTML += obj.verticles + " ";
})
document.querySelector("#f2 a").addEventListener("click", e => {
  e.preventDefault();
  const result = sortTriangles(dataTask3);
  if (result.reason) {
    document.getElementById(
      "2"
    ).innerHTML = `status: ${result.status} \nreason: ${result.reason}`;
  } else {
    document.getElementById("2").innerHTML = `Отсортированые треугольники:\n[ `
    result.forEach(item => {
      document.getElementById("2").innerHTML += `${item} `
    })
    document.getElementById("2").innerHTML += `]`;
  }
})

//4 task
document.querySelector("#f3 button").addEventListener("click", e => {
  e.preventDefault()
  let number = Number(document.querySelector('#f3 input[name="number"]').value)
  let result = checkPolindrome(number)
  if (result.reason) {
    document.getElementById(
      "3"
    ).innerHTML = `status: ${result.status} \nreason:${result.reason}`
  } else {
    document.getElementById("3").innerHTML = `Наибольший палендром -> ${result}`
  }
})

//5 task
document.querySelector("#f4 button").addEventListener("click", e => {
  e.preventDefault()
  let obj = {
    min: Number(document.querySelector('#f4 input[name="ticketMin"]').value),
    max: Number(document.querySelector('#f4 input[name="ticketMax"]').value),
  }
  let result = getLuckyTicket(obj)
  if (result.reason) {
    document.getElementById(
      "4"
    ).innerHTML = `status: ${result.status} \nreason:${result.reason}`
  } else {
    document.getElementById(
      "4"
    ).innerHTML = `Метод-победитель -> ${result.winner}\nКол-во счастливых билетов по простому способу -> ${result.counterEasy}\nКол-во счастливых билетов по сложному способу -> ${result.counterDifficult}`
  }
})

//6 task
document.querySelector("#f5 button").addEventListener("click", e => {
  e.preventDefault()
  let data = {}
  document.querySelectorAll("#f5 input").forEach(item => {
    data[item.name] = Number(item.value)
  })
  let result = getNumbers(data.length, data.minPow)
  if (result.reason) {
    document.getElementById(
      "5"
    ).innerHTML = `status: ${result.status} \nreason:${result.reason}`
  } else {
    document.getElementById("5").innerHTML = `Числовой ряд: ${result}`
  }
})

//7 task
document.querySelector("#f6-1 button").addEventListener("click", e => {
  e.preventDefault()
  let data = {}
  document.querySelectorAll("#f6-1 input").forEach(item => {
    data[item.name] = Number(item.value)
  })
  let result = fibRow(data)
  if (result.reason) {
    document.getElementById(
      "6"
    ).innerHTML = `status: ${result.status} \nreason:${result.reason}`
  } else {
    document.getElementById("6").innerHTML = `Числовой ряд: \n`
    result.forEach(item => {
      document.getElementById("6").innerHTML += `${item} `
    })
  }
})
document.querySelector("#f6-2 button").addEventListener("click", e => {
  e.preventDefault()
  let data = {}
  document.querySelectorAll("#f6-2 input").forEach(item => {
    data[item.name] = Number(item.value)
  })
  let result = fibRow(data)
  if (result.reason) {
    document.getElementById(
      "6"
    ).innerHTML = `status: ${result.status} \nreason:${result.reason}`
  } else {
    document.getElementById("6").innerHTML = `Числовой ряд: \n`
    result.forEach(item => {
      document.getElementById("6").innerHTML += `${item} `
    })
  }
})
