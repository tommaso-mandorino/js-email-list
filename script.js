// #region Constants declaration

    // Boolean email API URL
    const EMAIL_API_URL = 'https://flynn.boolean.careers/exercises/api/random/mail';

    // Number of emails to generate
    const EMAIL_NUMBER = 10;

    // Email list DOM element
    const emailListElement = document.getElementById('email-list');

// #endregion Constants declaration



// #region Functions declaration



// #endregion Functions declaration



// #region Script logic

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

            })
            // Catch error
            .catch(error => console.error(error));

    }

    // Log email list array
    console.log(emailList);

// #endregion Script logic