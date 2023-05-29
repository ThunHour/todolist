class Todo {
    constructor(tId, title, sDescription, sDate, priority, sTime, finish, sCategory) {
        this.tId = tId;
        this.title = title;
        this.sDescription = sDescription;
        this.sDate = sDate;
        this.priority = priority;
        this.sTime = sTime;
        this.finish = finish;
        this.sCategory = sCategory;
    }
}

module.exports = Todo;