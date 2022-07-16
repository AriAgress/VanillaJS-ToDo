var app = new (function () {
  //el="element": We are getting all our tasks from our table body in the HTML
  this.el = document.getElementById("tasks");
  //We will make tasks an empty array
  this.tasks = [];

  //Read
  this.FetchAll = function () {
    var data = "";

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += "<tr>";
        data += "<td>" + (i + 1) + ". " + this.task[i] + "</td>";
        data +=
          '<td><button onclick="app.Edit(' +
          i +
          ')" id="edit-button">Edit</button></td>';
        data +=
          '<td><button onclick="app.Delete(' +
          i +
          ')" id="edit-button">Delete</button></td>';
        data += "</tr>";
      }
    }
    //call count function to give it a count
    this.Count(this.tasks.length);
    //return our element(el) into our html
    return (this.el.innerHTML = data);
  };

  //add
  this.Add = function () {
    el = document.getElementById("add-todo");
    //after grabbing add-todo element, we can now grab the value inside the input
    var task = el.value;
    if (task) {
      //trim removes white space from the string
      this.tasks.push(task.trim());
    }
  };

  //update
  this.Edit = function (item) {};

  //delete
  this.Delete = function (item) {};

  //count
  this.Count = function (data) {};
})();

app.FetchAll();

function CloseInput() {
  document.getElementById("edit-box").style.display = "none";
}
