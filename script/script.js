let element = document.querySelectorAll('#number');  // Кнопки ввода
let field = document.querySelector('.display__write');  // Окно ввода
let clear = document.querySelector('#clear');  // Стереть
let equals = document.querySelector('.equals');  // Ровно
let del = document.querySelector('.del') // Удалить 1 цифру
let numberArray = [];

// Ввод на дисплей
for (let elem of element) {
    elem.addEventListener('click', function () {
        // field.value += this.textContent;  // Старый вариант
        numberArray.push(this.textContent);
        console.log(numberArray);
        console.log(numberArray.length)
        if (numberArray.length > 14) {
            numberArray.pop()
            field.value = numberArray.join('');
        } else {
            field.value = numberArray.join('');
        }
    });
};

window.addEventListener("keypress", (e) => {
    if (numberArray.length == 14) return;
    numberArray.push(e.key);
    console.log(numberArray);
    console.log(numberArray.length)
    if (numberArray.length > 14) {
        numberArray.pop()
        field.value = numberArray.join('');
    } else {
        field.value = numberArray.join('');
    }
});

// Удаление с дисплея
clear.addEventListener('click', () => {
    if ( numberArray.length !== 0 ) {
        field.value = "";
        numberArray = [];
        console.log(numberArray);
    }
});

//Запись Ответа
equals.addEventListener('click', () => {
    // field.value = eval(field.value);   // Старый вариант
    if ( numberArray.length !== 0 ) {
        field.value = eval(field.value); 
        numberArray = field.value.split('');
        console.log(numberArray);
    }
});

//Удалить одну цифру

// del.addEventListener('click', () => {     // Старый вариант
//     let a = field.value;
//     let b = a.split('');
//     b.pop();
//     let d = b.join('');
//     field.value = d;
// });

del.addEventListener('click', () => {
    if ( numberArray.length !== 0 ) {
        numberArray.pop();
        console.log(numberArray);
        field.value = numberArray.join('');
    }
});

window.addEventListener("keydown", function (event) {
    if (event.key === 'Backspace') {
        if ( numberArray.length !== 0 ) {
            numberArray.pop();
            console.log(numberArray);
            field.value = numberArray.join('');
        }
    } else if (event.key === ' ') {
        if ( numberArray.length !== 0 ) {
            field.value = eval(field.value); 
            numberArray = field.value.split('');
        }
        this.setTimeout(() => {
            numberArray.pop()
            console.log(numberArray)
        });
    } else if (event.key === 'Escape') {
        if ( numberArray.length !== 0 ) {
            field.value = "";
            numberArray = [];
            console.log(numberArray);
        }
    } else {
        return;
    }
})

/////////////////////////////////////////////////////////////////

// class Samurai {
//     constructor(name) {
//       this.name = name;
//     }
//     hello() { alert(this.name) }
//   }
  
//   let shogun = new Samurai('Maks')
//   console.log(shogun.__proto__.__proto__.__proto__ === null)

/////////////////////////////////////////////////////////////////

// class User {
//     constructor(options) {
//       this.name = options.name;
//       this.age = options.age;
//       this.work = options.work;
//       this.fractions = options.fractions;
//     }
    
//     saHorde() {
//       console.log("Sa Horde!!!");
//     }
    
//     saAlians() {
//       console.log("Sa Alians!!!")
//     }
  
//   }
  
//   let user = new User({
//     name: 'Maksim',
//     age: 24,
//     work: 'sit Home!',
//     fractions: 'Horde',
//   });
  
  
  
//   class Human extends User {
//     constructor(options) {
//       super(options)
//       this.color = options.color;
//     }
//     saAlians() {
//       super.saAlians()
//       console.log("Sa Horde!!!")
//     }
    
//     get ageInfo() {
//       return this.age * 3
//     }
    
//     set ageInfo(newAge) {
//       this.age = newAge;
//     }
//   }
  
//   let human = new Human({
//     name: 'Alena',
//     age: 21,
//     work: 'Nails',
//     fractions: 'Aliance',
//     color: 'red',
//   });
  
//   console.log(human.ageInfo)

//////////////////////////////////////////////////////////////

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.transform = 'scale(0)';
    }

    show() {
        this.$el.style.transform = 'scale(1)';
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.backgroundColor = options.color;
    }
}

class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%';
        this.$el.style.margin = '55px 2px';
        this.$el.style.transition = 'all 0.4s ease-out';
        this.$el.style.border = '2px solid black';
    }
}

const box1 = new Circle({
    selector: '#box1',
    size: 30,
    color: 'red'
})

const box2 = new Circle({
    selector: '#box2',
    size: 30,
    color: 'blue'
})

const box3 = new Circle({
    selector: '#box3',
    size: 30,
    color: 'green',
})

document.querySelector('#opa').addEventListener('click', () => {
    setTimeout(function run() {
        box1.hide()
        setTimeout(() => {
            box1.show()
        }, 300)
        setTimeout(() => {
            box2.hide()
            setTimeout(() => {
                box2.show()
            }, 300)
        }, 300)
        
        setTimeout(() => {
            box3.hide()
            setTimeout(() => {
                box3.show()
            }, 300)
        }, 600)
        
        setTimeout(run, 1300);
    }, 0)
})

/////////////////////////////////////////////////////////////

document.querySelector('#starP').addEventListener('click', () => {
    console.log("Request data...");

    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Preparing data...');
            const backendData = {
                server: 'aws',
                port: 2000,
                status: 'working',
            }
            resolve(backendData)
        }, 2000)
    }).then(data => { 
        data.modified  =  true;
        return data;
    }).then(data => {
        data.fromPromise = true;
        return data;
    }).then(data => {
        console.log('Modified', data);
    })
})


    
let sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

Promise.all([sleep(5000), sleep(3000)]).then(() => {
    console.log("All promises")
})

const requestURL = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url)

//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json')

//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//                 return
//             }
//             resolve(xhr.response)
//         }
//         xhr.send(JSON.stringify(body))
//     })
// }

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// sendRequest('POST', requestURL, {
//     name: 'Maks',
//     age: 24
// })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then(error => {
            const e = new Error('ОШИбочКА тута')
            e.data = error;
            throw e
        })
    })
}

let userMaks = {
    name: 'Maks',
    age: 24
};

sendRequest('POST', requestURL, userMaks)
    .then(data => console.log(data))
    .catch(err => console.log(err))



function person() {
    console.log(this.name)
    console.log(this.age)
}

let Maks = person.bind(userMaks);

Maks()