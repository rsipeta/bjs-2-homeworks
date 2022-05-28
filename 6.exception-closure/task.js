function parseCount(value){
    var nVal = Number.parseInt(value);
    if (isNaN(nVal)) 
        throw new Error("Невалидное значение");
    else
        return nVal;
}

function validateCount(value){
    try {
        return parseCount(value);
    } catch (error) {
        return error;
   }
}


class Triangle{
    constructor(a, b, c){
        if (a + b < c || a + c < b || b + c < a) 
            throw new Error("Треугольник с такими сторонами не существует");
        else{
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    getPerimeter() { return this.a + this.b + this.c; }
    getArea() {
            let p = this.getPerimeter() / 2;
            return Number.parseFloat(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3));
    }
}
class TriangleBreak{
    getPerimeter() { return "Ошибка! Треугольник не существует"; }
    getArea() { return "Ошибка! Треугольник не существует"; }
}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return new TriangleBreak();
   }
}