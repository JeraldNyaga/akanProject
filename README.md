# AKAN NAME GENERATOR
#### This a webapp that takes in your date, month and year which you were born and generates your respective AKan name.

## Authors of this project
* Jerald Wachira Nyaga

## Description
The Akan community of West Africa Name their children as per the days they were born for the male child ['Kwame','Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi'] and for the Female Child: ['Ama','Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua']. The first name in each list represents Saturday and the last name in the List represents Friday. The program is able to calaculate the day of the week in which the user was born and the corresponding Akan name.


The results achieved were perfect  and accurate.

## Technologies used
1. HTML
2. CSS
3. JavaScript

## Behaviour Driven Development
1. Scenario 1: Successful Akan name generation

- Given the user inputs a valid date of birth, a valid month, a valid year (between 1800 and 2025), and selects a gender.
- When the user clicks the "Submit" button.
- Then the system calculates the day of the week the user was born.
- And displays the corresponding Akan name based on the user's gender and the day of the week.

2. Scenario 2: Invalid date input (e.g., 30th February)

- Given the user inputs an invalid date (e.g., February 30th or April 31st).
- When the user clicks the "Submit" button.
- Then the system shows an error message: "Invalid date".

3. Scenario 3: Missing inputs

- Given the user leaves any of the required fields (date, month, year, or gender) blank.
- When the user clicks the "Submit" button.
- Then the system shows an error message: "All fields are required. Please fill them in."

### Expected Behaviour
- The system validates user inputs before processing.
- Invalid inputs trigger helpful error messages without crashing the app.
- Results are displayed dynamically without requiring a page reload.
- The application gracefully handles edge cases like leap years and invalid dates.

## Known bugs
- Once the user input the wrong date, they have to refresh the page so that they can input the right date.


## Set up instructions
The project does not have any complex set up instructions, key in your date, month and year you were born and a resultant Akan name will be generated once your input data has been verified.

## Contact Information
Incase of any challenge: reach me through email (jeraldnyaga15@gmail.com): [Jerald Nyaga].

Also reach me via phone: +254768017356.

## FIGMA Design
The figma design for the website is found here: [Figma Design](https://www.figma.com/design/szdJLenk02QTHvF7cT0NHT/Akan-Design?node-id=0-1&t=K0f3OqmfendAXQm6-1)

## Github pages link found here
The github pages link is found here in: [Github pages](https://jeraldnyaga.github.io/akanProject/)

### License
MIT License

Copyright (c) [2025] [JeraldWachiraNyaga]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.