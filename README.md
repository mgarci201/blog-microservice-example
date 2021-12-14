# blog-microservice-example

This simple project shows how to create a microservice using React & Express Node.

* Separate posts serivce
* Separate comments service
* Client as the React app
* Separate query service
* and Event Bus to store events

To run the app go to each folder and run npm install then:
* Go to the client folder and run `npm start`
* Go to the query folder and run `npm start`
* Go to the event-bus folder and run `npm start`
* Go to the posts folder and run `npm start`
* Go to the comments folder and run `npm start`


* Start by creating a post
* Refresh the page to see the post
* Then create a comment

--------------------------------------------------
With Docker & K8s:
* Ensure to build all services to your own docker account `docker build -t <username>/<service> .`
* Restart K8s for all services `kubectl rollout restart`
