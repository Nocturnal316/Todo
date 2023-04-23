const taskRepository = require('../repository/task.repository');

class TaskService{

    constructor(){}

    async getTasks(){
        return await taskRepository.getTask();
    }

    async createTask(task){
        return await taskRepository.createTask(task);
    }

    async updateTask(task){
        return await taskRepository.updateTask(task);
    }

    async deleteTask(taskId){
        return await taskRepository.deleteTask(taskId);
    }
}

module.exports = new TaskService();