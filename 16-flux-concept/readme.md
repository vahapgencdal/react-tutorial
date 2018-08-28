#Flux 
Flux is a programming concept, where the data is uni-directional. 
This data enters the app and flows through it in one direction until it is rendered on the screen.
##Flux Elements
Following is a simple explanation of the flux concept. In the next chapter, we will learn how to implement this into the app.

- **Actions** − Actions are sent to the dispatcher to trigger the data flow.

- **Dispatcher** − This is a central hub of the app. All the data is dispatched and sent to the stores.

- **Store** − Store is the place where the application state and logic are held. Every store is maintaining a particular state and it will update when needed.

- **View** − The view will receive data from the store and re-render the app.
<!-- blank line -->
----
The data flow is depicted like below 
Action => Dispatcher => Store => View 
<!-- blank line -->
----
##Flux Pros
- Single directional data flow is easy to understand.
- The app is easier to maintain.
- The app parts are decoupled.
<!-- blank line -->
----