alert("Type - 'q'");
let input = prompt("What would you like to do?");
const list = ['Collect chiken eggs', 'Clean liter box']
while (input !== 'Quit' && input !== 'q') {
          if (input === 'List') {
                    console.log("*********************")
                    for (let i = 0; i < list.length; i++) {
                              console.log(`${i}: ${list[i]}`)
                    }
                    console.log("*********************")
          } else if (input === 'New') {
                    const newTodo = prompt("Ok, what,s the new todo?");
                    list.push(newTodo);
                    console.log(`${newTodo} added to the list!`);
          }
          input = prompt("What would you like to do?");
}
console.log("Ok,Quit the app.")