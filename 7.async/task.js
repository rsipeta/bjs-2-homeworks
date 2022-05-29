class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if (id === undefined) { throw new Error('Не передан параметр id'); return; }
        if (this.alarmCollection.filter((Alarm) => Alarm.id === id).length) console.error("Будильник с таким id уже существует");
        else
        this.alarmCollection.push(new Alarm(id, time, callback))
    }

    removeClock(id){
        var nIdex = this.alarmCollection.findIndex((Alarm) => Alarm.id === id);
        if (nIdex < 0) 
            return false;
        
        this.alarmCollection.splice(nIdex, 1);
        return true;
    }

    getCurrentFormattedTime() { 
        var data = new Date(); 
        return ("0" + data.getHours()).slice(-2) + ":" + ("0" + data.getMinutes()).slice(-2); }

    checkClock(alarm){
        if (alarm.time === this.getCurrentFormattedTime())
            alarm.callback();
    }

    start() {
        if (this.timerId === null) {
            var checkCollection = () => this.alarmCollection.forEach(element => {
                this.checkClock(element)
            });;

            this.timerId = setInterval(checkCollection, 1000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() { console.log(`Всего будильников: ${this.alarmCollection.length}`); this.alarmCollection.forEach(element => { console.log(`ID: ${element.id}, Time: ${element.time}`); }); }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

class Alarm{
    constructor(id, time, callback){
        this.id = id;
        this.time = time;
        this.callback = callback;
    }
}