async function requestHandler(req, res) {
  try {
    const user = await User.findById(req.userId);
    const tasks = await Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    res.send('Tasks Saved');
  }
  catch (e) {
    res.send(e);
  }
}
