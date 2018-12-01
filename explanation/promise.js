function requestHandler(req, res) {
  User.findById(req.userId)
    .then(function (user) {
      return Tasks.findById(user.tasksId)
    })
    .then(function (tasks) {
      tasks.completed = true;
      return tasks.save();
    })
    .then(function () {
      res.send('Tasks Completed!');
    })
    .catch(function (errors) {
      res.send(erros);
    });
}
