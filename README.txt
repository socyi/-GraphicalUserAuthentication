Full URL: http://23.102.49.216/gua/

The email sending function was implemented.

We weren't asked to check any inputs (correct email format, age has to be an integer, so I skipped those checks.

The number of images that a user can select from was reduced to 27 for better usability-simplicity.

The user still has to select exactly 5 images and the system still loads 10 decoy images to maintain the security level.

At the password creation step you can enter a password for more than once and it shows "Password successfully created". However in the DB only the first password is stored and the user has to log in with that one.

At the log in step, I believe the instructions and the suggested design of the page are not well presented. The grid of the images has to be empty until the user enters an email with a registered password, so the right images are loaded (5 selected + 10 decoy mapped to user's email). 

Instead, I removed the email input, I receive the email from the previous sessions (activation,password creation).

At the log in step, we weren't asked to implement drag and drop, so I skipped it for that page.