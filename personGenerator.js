const personGenerator = {
    lastNameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Артём",
            "id_2": "Борис",
            "id_3": "Владимир",
            "id_4": "Денис",
            "id_5": "Ефим",
            "id_6": "Захар",
            "id_7": "Иван",
            "id_8": "Кирилл",
            "id_9": "Леонид",
            "id_10": "Олег"
        }
    }`,
    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Вера",
            "id_2": "Марина",
            "id_3": "Юлия",
            "id_4": "Виктория",
            "id_5": "Дарья",
            "id_6": "Галина",
            "id_7": "Надежда",
            "id_8": "Елена",
            "id_9": "Зинаида",
            "id_10": "Яна"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    professionMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "токарь",
            "id_2": "пожарный",
            "id_3": "грузчик",
            "id_4": "поэт",
            "id_5": "летчик"
         }
    }`,
    professionFeMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "модель",
            "id_2": "актрисса",
            "id_3": "медсестра",
            "id_4": "инструктор по йоге",
            "id_5": "модель"
         }
    }`,

    GENDER_MALE: 'Мужчина \u{2642}',
    GENDER_FEMALE: 'Женщина \u{2640}',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        let obj = JSON.parse(json);
        let prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    //Возвращаем мужское имя
    randomFirstNameMale: function () {

        return this.randomValue(this.firstNameMaleJson);

    },
    //Формируем мужское отчество
    randomMiddleNameMale: function () {

        return this.randomValue(this.firstNameMaleJson) + "ович";

    },

    //Формируем женское отчество
    randomMiddleNameFeMale: function () {

        return this.randomValue(this.firstNameMaleJson) + "овна";

    },

    //Возвращаем женское имя
    randomFirstNameFeMale: function () {

        return this.randomValue(this.firstNameFeMaleJson);

    },
    //Возаращаем фамилию
    randomLastName: function () {

        return this.randomValue(this.lastNameJson);

    },
    //дата рождения месяц
    randomMonth: function () {

        return this.randomValue(this.monthJson);

    },
    //женская профессия
    randomProfessionFeMale: function () {

        return this.randomValue(this.professionFeMaleJson);

    },
    //мужская профессия
    randomProfessionMale: function () {

        return this.randomValue(this.professionMaleJson);

    },

    // выбираем пол
    randomGender: function () {
        let male = this.randomIntNumber(1, 0);
        male == 1 ? this.male = this.GENDER_MALE : this.male = this.GENDER_FEMALE;

        return this.male;
    },

    getPerson: function () {
        this.person = {};
        //в зависимости от пола выбираем имя, отчество и меняем фамилию
        this.person.gender = this.randomGender();
        this.person.lastName = this.randomLastName();
        if (this.person.gender == this.GENDER_FEMALE) {
            this.person.lastName += 'a';
            this.person.firstName = this.randomFirstNameFeMale();
            this.person.profession = this.randomProfessionFeMale();
            this.person.middleName = this.randomMiddleNameFeMale();
        }
        else {
            this.person.firstName = this.randomFirstNameMale();
            this.person.profession = this.randomProfessionMale();
            this.person.middleName = this.randomMiddleNameMale();
        }
        // формируем дату рождения
        let date='';
        let month='';
        month = this.randomMonth();
        if ((month == "апрель") || (month == "июнь") || (month == "сентябрь") || (month == "ноябрь")){
            date = Math.floor(Math.random() * (30 - 1 + 1) + 1);
        }
        if (month == "февраль") {
            date = Math.floor(Math.random() * (29 - 1 + 1) + 1);
        } else {
            date = Math.floor(Math.random() * (31 - 1 + 1) + 1);    
        }

        this.person.year = Math.floor(Math.random() * (2022 - 1950 + 1) + 1950);

        date = String(date)+' '+String(month)+' '+String(Math.floor(Math.random() * (2020 - 1950 + 1) + 1950));
        this.person.year = date;
        return this.person;
    }
}
