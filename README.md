# Password Generator

## Objective
The Password Generator will prompt the user for criteria of the password, starting with the length.  Character types will include lower and/or upper case letters, numbers and special characters.  The password must contain at least one letter, either upper or lower or possibly both but can not contain only numbers and special characters.


## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Final Result
[Password Generator](cpaschall.github.io/password-generator)

![Main Page of my Code Portfolio](.\assets\images\pw-generator-final.png)