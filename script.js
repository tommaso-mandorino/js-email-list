// #region Constants declaration

    // Boolean email API URL
    const EMAIL_API_URL = 'https://flynn.boolean.careers/exercises/api/random/mail';

    // Number of emails to generate
    const EMAIL_NUMBER = 10;

    // Email list DOM element
    const emailListElement = document.getElementById('email-list');

    // Generate button DOM element
    const generateButtonElement = document.getElementById('generate-button');

// #endregion Constants declaration



// #region Functions declaration

    //#region print array function
    function printArray(array, element) {

        // For each element in the array
        array.forEach(itemValue => {

            // Create a new list item
            const newListItemElement = document.createElement('li');

            // Add list group item Bootstrap class
            newListItemElement.classList.add('list-group-item');

            // Insert current array value in its text
            newListItemElement.innerText = itemValue;

            // Add item to the end of the list
            element.appendChild(newListItemElement);

        });

    }
    //#endregion print array function

    // #region Generate emails function
    function generateEmails(outputListElement) {

        // Clear previous emails
        outputListElement.innerHTML = '';

        // Change generate button text
        generateButtonElement.innerText = 'Generazione...';

        // Disable generate button
        generateButtonElement.disabled = true;

        // Initialize an empty email list array
        const emailList = [];

        // Loop to reach desired emails number
        for (let index = 0; index < EMAIL_NUMBER; index++) {

            // Fetch a random email via API
            fetch(EMAIL_API_URL)
                // Get response
                .then(response => response.json())
                // Get data
                .then(data => {

                    // Get email from JSON
                    const randomGeneratedEmail = data.response;

                    // Push random generated email address into email list array
                    emailList.push(randomGeneratedEmail);

                    // IF all emails are generated
                    if (emailList.length === EMAIL_NUMBER) {

                        // Print email list array in its DOM element
                        printArray(emailList, outputListElement);

                        // Change generate button text
                        generateButtonElement.innerText = 'Genera';

                        // Enable generate button
                        generateButtonElement.disabled = false;

                    }

                })
                // Catch error
                .catch(error => console.error(error));

        }

    }
    // #endregion Generate emails function

// #endregion Functions declaration



// #region Script logic

    // Generate emails on page load
    generateEmails(emailListElement);

    // Generate emails on button click
    generateButtonElement.addEventListener('click', () => generateEmails(emailListElement));

// #endregion Script logic