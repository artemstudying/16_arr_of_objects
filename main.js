
// Нужно сделать конструктор сущности Студент.

// У Студента есть имя, фамилия, год рождения — это свойства. Есть массив с оценками, это тоже свойство.
// И есть возможность получить возраст студента и его средний бал — это методы.

// Еще у всех Студентов есть по массиву одинаковой длины, в нем 25 элементов, изначально он не заполнен,
// но на 25 элементов. Это массив в котором отмечается посещаемость, каждый раз когда мы вызываем метод .present()
// на очередное пустое место в массив записывается true, когда вызываем .absent() — записывается false. Предусмотрите
// какую нибудь защиту от того чтоб в массиве посещаемости не могло быть более 25 записей. Массив это свойство,
// present и absent — методы.

// Ну и последний метод: .summary(), он проверяет среднюю оценку, и среднее посещение
// (количествоПосещений/количествоЗанятий), и если средняя оценка больше 90
//  а среднее посещение больше 0.9, то метод summary, возвращает строку "Ути какой молодчинка!",
//  если одно из этих значений меньше, то — "Норм, но можно лучше", если оба ниже — "Редиска!".

// Ну и не забудьте после того как напишите замечательный конструктор, создать пару экземпляров(конкретных студентов) и подергать методы.





class Student {
  constructor(o){
    this.name = o.name,
    this.surname = o.surname,
    this.born = o.born,
    this.assessments =  o.assessments,
    this.attendance = o.attendance
  }
  present() {
    if (this.attendance.length < 25) {
      this.attendance.push(true);
    }
  }
  absent() {
    if (this.attendance.length < 25) {
      this.attendance.push(false);
    }
  }
  averageAssesment(){
    //Рассчитываем среднюю оценку
    let assessmentAverage = this.
                              assessments.
                                reduce((prev, item) => prev += item, 0) /
                                  this.assessments.length;
    return assessmentAverage;
  }
  averagePresence(){
           //Рассчитываем среднее посещение
    let attendanceAvarage = this.
                             attendance.
                               reduce((prev, item) => prev += item, 0) /
                                 this.attendance.length;
    return attendanceAvarage;
  }

  summary() {
    let assessmentAverage = this.averageAssesment();
    let attendanceAvarage = this.averagePresence();

    //Делаем выводы:
    if (assessmentAverage > 90 && attendanceAvarage > 0.9) {
       return ("Ути какой молодчинка!")
    }else if (assessmentAverage < 90 || attendanceAvarage < 0.9) {
      return ("Норм, но можно лучше")
    }else {
      return ("Редиска!")
    }

  }
}

//Создаем экземпляры классa Student

let st1 = new Student({
  name: 'Artem',
  surname: 'Shvets',
  born: 1986,
  assessments: [90, 90, 95, 97, 90, 99],
  attendance: []
});

st2 = new Student({
  name: 'Anastasiia',
  surname: 'Shves',
  born: 2001,
  assessments: [85, 70, 89, 97, 88, 99],
  attendance: []
});

//заполняем посещаемость
st1.present();
st1.present();
st1.present();
st1.present();
st1.present();
st1.present();
st1.present();
st1.absent();
st1.absent();
st1.absent();
st1.absent();
st1.absent();

st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.absent();
st2.absent();

// Создать конструктор массива, который будет содержать объекты из прошлого задания на прототипы.
// Массивы созданные с помощью этого конструктора должны содержать следующие методы:

class Group extends Array {
  // .attendance — если вызывается без аргумента, то возвращает среднюю посещаемость группы за одно занятие;
  //   если с аргументом — строкой содержащей фамилию одного из студентов, то возвращает его место в рейтинге
  //   посещаемости
  attendance(arg) {
    if (arg) {
        let newArr = this.slice();
        newArr.sort((a, b) => {
          if (a.averagePresence() > b.averagePresence()) {
            return 1;
          }
        });
        let student = this.find(stud => stud.surname === arg);

        return newArr.indexOf(student) + 1;

      } else {
        return this.
          reduce((prev, item) => prev + item.averagePresence(), 0) /
            this.length;
    }
  }

  // .performance — то же самое, но с оценками
  performance(arg) {
    if (arg) {
        let newArr = this.slice();
        newArr.sort((a, b) => {
          if (a.averageAssesment() > b.averageAssesment()) {
            return 1;
          }
        });
        let student = this.find(stud => stud.surname === arg);

        return newArr.indexOf(student) + 1;

      } else {
        return this.
          reduce((prev, item) => prev + item.averageAssesment(), 0) /
            this.length;
    }
  }

}

let group = new Group();
group.push(st1, st2);

console.log(group.performance('Shvets'));
console.log(group.performance('Shves'));
console.log(group.performance());
console.log(group.attendance('Shvets'));
console.log(group.attendance('Shves'));
console.log(group.attendance());
