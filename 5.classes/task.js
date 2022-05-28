class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    set state(nState){
        this._state = (nState < 0 ? 0 : (nState > 100 ? 100 : nState));
    }
    get state() {
        return this._state;
    }

    fix(){
        if (this._state > 0) 
            this._state = (this._state * 1.5 > 100 ? 100 : this._state * 1.5); 
    }
}


class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}



class Library{
    constructor (name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if (book.state > 30) this.books.push(book);
    }
    
    findBookBy(type, value){
        var arr = this.books.filter((Book) => Book[type] === value);
        return (arr.length === 0 ? null: arr[0]);
    }
    giveBookByName(bookName){
        var nIdex = this.books.findIndex((Book) => Book.name === bookName);
        if (nIdex < 0) 
            return null;
        
        var oBook = Object.assign({}, this.books[nIdex]);
        this.books.splice(nIdex, 1);
        return oBook;
    }
}






class StudentMark{
    constructor(subject, mark){
        this.subject = subject;
        this.mark = mark;
    }
}

class Student {
    constructor(name){
        this.name = name;
        this.subjects = [];
        this.marks = [];
    }

    addMark(mark, subject){
        if (mark < 1 || mark > 5) {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
            return;
        }
        // Добавляем предмет если его нет
        if (!this.subjects.includes(subject)) this.subjects.push(subject);

        // Добавлем оценку
        this.marks.push(new StudentMark(subject, mark));
    }

    getAverageBySubject(subject){
        if (!this.subjects.includes(subject)){
            console.log("Несуществующий предмет");
            return;
        }

        var aMark = this.marks.filter((StudentMark) => StudentMark.subject === subject);
        
        if (aMark.length == 0) return 0;
        let sum = 0;
        aMark.forEach(element => { sum += element.mark;  });
        return sum / aMark.length;      
    }

    getAverage(){
        if (this.marks.length == 0) return 0;
        let sum = 0;
        this.marks.forEach(element => { sum += element.mark;  });
        return sum / this.marks.length; 
    }

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }      
}