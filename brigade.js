const { events, Job } = require("brigadier");

events.on("push", function(e, project) {
  console.log("received push for commit " + e.commit)

  // Create a new job
  var node = new Job("test-runner")

  // We want our job to run the stock Docker Python 3 image
  node.image = "sugendh_brigade:1.2"

  // Now we want it to run these commands in order:
  node.tasks = [
    "echo Welcome to Brigade, Next Big Thing!"
  ]

  // We're done configuring, so we run the job
  node.run()
})
