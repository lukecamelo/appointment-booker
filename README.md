# Appointment Booker by Luke Camelo


### What even is this?
A web application for creating and managing a schedule of appointments.

### Okay, so what does it do exactly?
It's mostly a table that holds dates, times, and names. Users can enter appointments via a form that validates the details and insures that there is no overlap or conflict between appointments. Individual appointments can be edited and rearranged as long as, again, there are no conflicts. Users must first sign up and log in to access the application.

### Cool. What's going on under the hood?
I built this in a little under a month using ReactJS for the client, Node.js/Express for the server, and MongoDB for data persistence. Oh, and CSS to make it pretty of course.

### Why an appointment management app?
I wanted a striking portfolio piece that was at least a little bit unique. I saw an endless sea of to-do lists and udemy tutorial projects and decided I wanted to stand out from all that. I wanted to build something with a real world purpose, and this is what I came up with.

### Is it done?
I currently consider it feature complete. I accomplished everything I set out to accomplish, though I recognize that if I really wanted to there are things I could add on to it, like a calender or other more advanced features. Perhaps I will get around to those things when I have time.

### Any known issues?
There is certainly some refactoring that could be done. The algorithm that decides if an appointment is conflicting with another one could probably be a bit more elegant, and in mobile mode the edit/delete buttons on individual appointments could be aligned a little cleaner, and I'm sure there are other bits that could be polished to varying degrees, but overall I am happy to where I've gotten the application.

## Running the app
If you want to poke around yourself, after cloning the repo and navigating to the directory, enter the following in succession:

`node server.js`

`cd client`

`npm start`

That should start it up! From there, feel free to mess with the code and break it however you please!

### Also, you can view a live demo version [here](https://damp-shore-12996.herokuapp.com/). Thanks for reading!