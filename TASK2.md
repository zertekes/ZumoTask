This document outlines the testing plan for the ZUMO mobile application's Registration, Login, and Create Wallet functionality. The purpose of this test plan is to ensure the quality and reliability of these features. The plan includes a combination of automated and manual testing techniques and covers various aspects, including device compatibility, usability, and accessibility.

Test Automation
To accelerate regression testing and the release process, the following automated End-to-End (E2E) flows should be developed:
Unit tests cover minimum 80%
API tests to confirm that all API works and communicates with the database as expected
Automated E2E flow for the registration scenario.
Automated E2E flow for the login scenario.

Device and OS Coverage
Test the application on a variety of Android and iOS devices and operating systems, including:
Test on the latest devices and operating systems.
Test on older devices and operating systems.
Test on devices with different screen sizes (large and small).
Exploratory Testing
Perform exploratory testing in areas that are not covered by automation, focusing on login and error scenarios. This will help identify any vulnerabilities or issues that may have been missed by scripted tests.

Accessibility Testing
Conduct accessibility testing to ensure the application meets the following criteria:

Verify color contrast for users with visual impairments.
Test compatibility with voiceover and talkback features.
Validate functionality with different mobile settings, such as large text size or dark mode.

The below test scenarios are only a sketch, for a complete document I would create detailed test scenarios in BDD gherkins style (given, when, then). The BDD format helps to understand the test scenarios for everybody including non-technical or business persons. It also helps to create easier automation tests in the future.

Conclusion
This test plan outlines the key testing activities for the ZUMO mobile application's Registration, Login, and Create Wallet functionalities. By following these test scenarios, performing automated E2E flows, testing on various devices and operating systems, conducting exploratory testing, and ensuring accessibility, the application's quality and user experience can be significantly improved.


Before registration:
- make sure that user can download the application from Play Store (android) / App store (ios)
- make sure that user can instal the application successfully on different devices Android / Apple
/// these tests should be executed for every new release

REGISTRATION as new user

- Check that the user can see the 3 slide banners on the first landing screen
- User can click on the "I'm new here" button and the app navigates to the welcome to Zumo screen
- User can click on the "Take a Tour" button and the app navigates to the main with a logout status
    - This could be an issue or intended behaviour, but the user can not navigate back to the previous screen with the native android back button. The app closed down when I used the back button. I expected that the app will navigate me back to the previous Welcome screen.
- User can click on the "Create an account" button and the app navigates to the Terms & Conditions screen.
    - User can read / scroll down / scroll up  / open the refernce links in the terms and conditions text box.
    - User can tick the "I have read and accept the terms and conditions" checkbox.
    - When the user ticked the accept T&C checkbox the Agree  & Confirm button became enabled and clickable.
    - Make sure that the "I have read and accept the terms and conditions" checkbox is unchecked by default.
    - Check that the "Agree & Confirm" button is disabled by default.
    - Check that the user can not click on the "Agree & Confirm" button when the "I have read and accept the terms and conditions" checkbox is unchecked.
    - Check that the  user can navigate back to the previous screen by the back button.
- User can click on the "Agree & Confirm" button and the app navigates to the Create Username screen
    - User can type a username into the input field
        - Check the input field validations
            - user should type minimum 4 characters
                - it should display a validation error message and the "Next" button should not be enabled
                NOTE: - User can type special characters. It needs exploratory testing around this area and check that the API accepts it without any errors. It also needs to check the mximum characters that the user can input whitout any API error.
            - already used username should display an error // this could come from the API, after the user tapped on the "Next" button.
    - Check that the "Next" button is disabled by default
    - Next button should be enabled after the user typed a valid username The previously typed username should populate the input field
    - Check that the  user can navigate back to the previous screen by the "back" button.
- User can click on the "Next" button and the app navigates to the next Email address screen
    - Check that the user can type their email address into the input field
        NOTE: There is no email format validation in this field at the moment. In my opinion it would be great if we checked the email format before the user clicks on the create account button.
    - Check that the "Create an account" button is disabled by default
    - "Create an account" becomes enabled when the user typed a valid email
- User can click on the "Create an account" and the app navigates to the next Verify email screen
    - user can click/tap on the "Open email" button and it opens the default email app
    - user can click/tap on the "Didn't get the email" button
        - the pop up notification was displayed confirming that the new email verification was sent out
        - expired verification link error sscenario
        - valid email verification link - successful verification
- The app navigates to the "Your Country" screen after the email verification was completed successfully
    - check that the user can not navigate back to the previous screen
    - Check that the "Confirm" button is enabled by default
    NOTE: it needs exploratory testing around the input field and the search functionality.
    - Check that when the user selects a country the "Confirm" button becomes enabled
- When the user click / tap on the "Confirm" button the app navigates to the next "Enable notifications" screen
    - the "confirm" button should be enabled by default
    - user can toggle on/off each notifications separately
    - Pop up message is displayed if the user does not toggle any option and tapped on Confirm
    - user has the option to turn off or cancel this message
- When userconfirmed the notification settings, the app navigates to the "Passcode" screen
    - "Next" button should not be visible until the passcode confirmation was successful
    - User can type a valid pass code
    - User can confirm the passcode
        - error message if the two passcodes do not match
- When user clicked on the "Next" button after they added the passcode, the app should navigate to the "Enable biometrics" screen
    - "Enable Biometrics" button selection - confirm that the user can login with biometric on the next login.
    - "Maybe later" option - user did not select the Biometrics option - confirm that the user can not login with Biometrics on the next login.
- Biometrics login confirmation
NOTE it needs exploratory testing around biometrics logins such as failed attempts, using passcode instead etc.
- ID verification process flow
    NOTE The postcode search functionality does not work
    I assume that the part bof the id verification uses a third party application therefore we need to check only its integration to the app and the flow.
    - Checking the Idintity check progress status in the app settings (not verified, in progress, failed etc.)
- Skip ID verification - check what functionality the user can access, for example user can not make deposit etc.


LOGIN

- Login successful
    - Email verification when the user wants to login to an existing account
    NOTE I am not sure about the requirements around the email verification, however it looks strange that I have to verify my email every time when I login in. If this is the right behaviour I would rename the process to something like "device login confirmation"
    NOTE: Are there any other 2FA login options like yubikey or authenticator app?
    - User should be able to login with biometrics
    - the app should offer the biometrics login by default if the user toogled that option in the settings previously. 
    - user should be able to login with passcode
    - the app should offer the passcode login by default if the user toogled off the biometrics login option in the settings previously. 
    NOTE: I noticed that the app does not offer the biometrics login after the user verified their email.
- Login error scenarios
    - invalid email verification
    NOTE: Are there a limited number of tries?
    - invalid passcode
    - reset passcode
- First time login after registration
- Second or onwards login

- The app should log out after the user switched screen or locked the screen or closed the app.
NOTE: I noticed the app does not lock after the above scenarios. In my opinion the app should ask to login for security reason. All bank and crypto wallet applications have that behaviour.

Wallett Creation

NOTE: Unfortunately, my ID verification is in progress and the app does not allowed me to create a wallet, therefore I could not test this through the app.

Scenarios could be the following:
- Create different asset wallets: BTC, ETH, , Bitcoin SV.
NOTE Are there any pass phrases that we can get when we create a wallet?
- Create the maximum number of wallets of each currencies
- Check the address by making a transaction to and from the wallet
- Test successful creation of a digital wallet for the user.
- Verify that the wallet balance is correctly displayed after creation.
- Test the transaction history feature to ensure accurate recording of wallet activity.