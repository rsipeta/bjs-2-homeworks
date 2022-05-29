// тут вы можете вызывать функции из task.js

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("12:05", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("12:05", () => console.log("Давай, вставай уже!"), 2);
//phoneAlarm.addClock("11:53", () => console.log("Иди умываться"));


phoneAlarm.addClock("12:06", () => {
    console.log("Вставай, а то проспишь!");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);

phoneAlarm.addClock("11:54", () => console.log("Вставай, а то проспишь!"), 1);

phoneAlarm.printAlarms();
phoneAlarm.start();