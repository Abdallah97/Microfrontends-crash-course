# Microfrontends demo application
As a part of this demo we have created tow diffrent applications and they are working on diffrent ports as below
1. components (This is first remote/child application and will run on port 3001)
2. container (This is micro frontends host application and will run on port 3000).
3. We have created state management with three diffrent option in below folders
 - props-and-callback --> Data sharning with normal react way passign props and callback.
 - context --> Microfrontends state sharing with react context.
 - zustand --> Microfrontends state sharing with Zustand.

## Steps to run
1. First go to components folder, do npm install and then npm start (App will open in port 3001).
2. Now go to contanier folder in seccond tab and do npm install and then npm start (App will open in port 3000).


### Demo link urls
1. https://youtu.be/oip8WcxymYk?feature=shared
