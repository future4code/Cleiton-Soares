//Exercício 3
/* <------------RESPOSTA------------> */
const tasks = [{tarefa: 'Lavar a louça'}, {tarefa: 'Comprar óleo'}, ];
const taskToAdd = process.argv[2];

function addTaskToList(task) {
  tasks.push({tarefa: task});
  console.log("Tarefa adicionada com sucesso!");
  return tasks
}
console.table(addTaskToList(taskToAdd));
/* </------------RESPOSTA------------> */