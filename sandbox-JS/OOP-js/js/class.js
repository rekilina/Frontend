class People {
  /**
   * Класс человек
   * @param {String} fio по формату "Фамилия Имя Отчество"
   * @param {String} birthday день рождения по формату "24.11.1994"
   * @param {String} numbers "номер", если больше 2 номеров, то по формату "номер1, номер2"
   * @param {Number} room комната
   */
  constructor(fio, birthday, numbers="", room="") {
    let name = fio.toLowerCase().split(" ");
    this.name = {};
    this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
    this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
    this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

    let date = birthday.split(".");
    this.date = {};
    this.date.d = +date[0]
    this.date.m = +date[1]
    this.date.y = +date[2]

    this.numbers = numbers.split(", ")

    this.room = +room
  }
  static month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  /**
   * Вывести ФИО
   * @return {String} Строка формата "Фамилия Имя Отчество"
   */
  getFio() {
    return `${this.name.f} ${this.name.i} ${this.name.o}`
  }
  /**
   * Вывести день рождения
   * @return {String} Строка формата "24 июля 1997"
   */
  getBirthday() {
    return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
  }
  /**
   * Вывести Фамилия_Имя_Отчество.расширение
   * @param {String} extention расширение, например "jpg" или "png"
   * @return {String} для названия изображения
   */
  getImgSrc(extention) {
    return `${this.name.f}_${this.name.i}_${this.name.o}.${extention}`
  }
  /**
   * Вывести все номера телефона или только первый номер
   * @param {Boolean} allNumbers если true то все номера, если false только первый номер
   * @return {String} Строка формата: "89006660099, 89009996699"
   */
  getNumberList(allNumbers) {
    if(this.numbers.length == 0 || this.numbers[0].length == 0)
      return undefined
    if(allNumbers) {
      return this.numbers.join(", ")
    } else {
      return this.numbers[0];
    }
  }
}
let people1 = new People("уСеИнов ИсмАиЛ аСанович", "24.11.1994", "9984, 8847, 5478", 542)
let people2 = new People("Иванов Иван иВанович", "20.12.1984")
console.log(people1.getFio())
console.log(people2.getFio())