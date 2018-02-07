const { events, Job } = require("brigadier");

events.on("push", function(e, project) {
  console.log("received push for commit " + e.commit)

  // Create a new job
  var node = new Job("test-runner")

  // We want our job to run the stock Docker Python 3 image
  node.image = "410602862282.dkr.ecr.us-east-2.amazonaws.com/demo-jenkins-pipeline:1.4"

  // Now we want it to run these commands in order:
  node.tasks = [
//    "echo Welcome to Brigade, Next Big Thing!"
//    "helm install --namespace wordpress --name wordpress --set serviceType=NodePort stable/wordpress"
//    `kubectl get pods`
    `helm install --namespace wordpress --name wordpress --set serviceType=LoadBalancer stable/wordpress`
  ]

  // We're done configuring, so we run the job
  node.run()
})
