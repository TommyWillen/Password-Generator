# Password-Generator
# Responsive-Portfolio

Explore the github [project repo](https://github.com/TommyWillen/Responsive-Portfolio)

View the [github-pages](https://tommywillen.github.io/Responsive-Portfolio/)

## Table of Contents

- [Project Description](#Project-Description)
    - [Project Task Goal](#project-task-goal)
    - [Requests](#Requests)
    - [Variable String](#variable-string)
    - [Random Password](#random-password)
        - [Pick and Shuffle Functions](#pick-and-shuffle-functions)
    - [Video Tutorial](#Video-Tutorial)
- [Installation](#installation)

- [Roadmap](#roadmap)

- [License](#license)

- [Contact Me](#contact-me)

- [Acknowledgements](#acknowledgements)

## Project Description
![Password Generator Main](/assets/Images-Gifs-Videos/Password-Generator-Main.PNG)
This project is a program that will generate a random password based on specific user generated criteria.

### Project Task Goal

The overall goal was to create a password that could do the following:
1. Ask the user how long they want their password to be.
    1. The password must be between 8 and 128 characters
    1. Generate an error message if the user enters an invalid amount
1. Ask the user which types of characters they would like in their password
    1. Ask for uppercase, lowercase, numbers, and special characters
1. Generate a random password that is the length requested and contain at least one of the special characters requested.
### Requests
![Password Generator Requests](/assets/Images-Gifs-Videos/Password-Generator-Requests.gif)

The first aspect of the project was to create requests to get user information to generate a tailor made random password. To accomplish this task I created a function name generatePassword that is linked to a click event listener.
- For the length of the password I used a prompt.
    - I also created a while loop that generates if the user does not select a valid number and reprompts them to select a valid input
    - The value was then stored in a variable
- For asking which type of character the user wanted, I generated four different confirms for each character type.
    - Each confirm was stored into different variables

### Variable String

Once the user information was entered, I took the information from the confirm prompts and created an object. This object included four properties for each character type. Each property included a conditional that got the requested characters if the confirm return true or a blank string if it returned false.

I then took the object and combined the variable property values into an array and then joined the array into a string.

### Random Password

Once I created the string based on user information, I then randomly selected characters to create the password
- To ensure I included at least one of the requested characters, I first selected one random character from each of the requested character property strings.
- I then randomly selected the remaining characters from the combined string.

#### Pick and Shuffle Functions

To pick the random characters from the different strings I utilized a pick methond that let me randomly selected a random character from the different string. I used this method because it shrank down on the amount of code used.
- How this function works is that it use the math.floor and math.random methods to randomly select a character from a given string.

The shuffle function was used to shuffle the characters in the generated password. The reason I used this function was because the string I created whould not be as random because the first 2-4 characters would be specific character types and not random character types.
- How this function works is that is converts the string used into an array and randomly selects the values to create a different order of the characters then returns it back as a string.

### Video Tutorial

Click the image to view my video feature tutorial:

[![Password Generator Video ReadMe](/assets/Images-Gifs-Videos/Password-Generator-Readme.PNG)](https://youtu.be/PJyDI4q8g50)

## Installation

Prerequisites\: None

Simply clone it from my repo\:

```
clone git@github.com:TommyWillen/Password-Generator.git
```

## Roadmap

In the future I plan to make a form that users can select the information from so that it reduces human error issues that the prompt window cannot handle.

I also would like to find a way to create a random password that has to include specific characters since many websites/organizations require it.

## License

[License](https://github.com/TommyWillen/Password-Generator/blob/master/LICENSE)

## Contact Me

- [Email](TommyAllen1215@gmail.com)
- [Github Page](https://github.com/TommyWillen)
- [LinkedIn](https://www.linkedin.com/in/tommy-willen-12867b1b3/)

## Acknowledgements

For this project I would like to thank the following individuals\:

- John Young\: For introducing me to the joys of Javascrip and pointing out the difference between "=" and "===" so that I wouldn't waste even more time figuring out my code.
- Dan Mont-Eton\: For the calm and patient support he provided in understanding my code and "talking me off the ledge" when I wanted to throw my computer at the wall.
- Mykel Valdez: For trading poninters with each other to create the best/most efficient code I could think of.
- Thanks to stackoverflow users Blender and Christoph for the pick and shuffle methods source: [http://stackoverflow.com/a/962890/464744](http://stackoverflow.com/a/962890/464744)