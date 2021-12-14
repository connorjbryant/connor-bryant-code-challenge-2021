# code-challenge-2021

1. Make `Hello World` appear on the webpage. There is some existing code but it needs work.
2. Play the included bling sound when the user clicks on `Hello World`
3. If that was easy, then add some more visual bling to the page when the sound plays

Look in the `docs` folder for a screenshot of the final layout.

Implement this challenge by modifing the main.js file. You should not have to modify index.html or main.css nor add any libraries.

Your page should render correctly on a phone or desktop browser.

Feel free to consult anyone or use the internet for solutions. However, be ready to explain your approach and your code.

It would be best if you could provide a single url to the page. You can use https://pages.github.com/ but really any hosting solution is fine. Please also send me the link to your git repo.

Good luck!

Hints:

1. there are issues with the css. for some reason the words do not appear?
2. there are issues with the code. the loop is really sloppy, hhhhhm.
3. there's a sound on the page. you just need to listen for it. it's one click away.

# my comments

1. I read through the code challenge and started this project by fixing the issue listed on hint #1. The words weren't appearing because the text color was set to black which is the same color as the webpage backgroud and the visibility of the text was turned off. In the JavaScript file, I wrote two lines of code to remove the css properties that were causing the visibility issues.

2. I worked on the while loop next. The argument (j < 300) in the loop made the first value in the array print itself 300 times so I removed that part of the code and then replaced the j++ to i++ to get the message "Hello World" to appear on the screen. I also added a space in the array so it would look like Hello World and not HelloWorld.

3. I got the sound to play when the user clicks on the Hello World text by adding a function to div id="hello_world".

4. I added more pizazz to the page by having the text change to a random color when the sound plays.