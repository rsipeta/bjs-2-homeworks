function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;  
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [ mark ]; 
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
  marks.forEach(element => {this.addMark(element);});
}

Student.prototype.getAverage = function(){
  if (this.marks.length == 0) return 0;
  let sum = 0;
  this.marks.forEach(element => { sum += element;  });
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason){
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}