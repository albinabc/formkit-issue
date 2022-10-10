# Setup
Run `npm install` and then `npm run dev`. 

# Reproduction
Click the textbox and then outside it to get the validationmessage "Firstname is required", when pressing Swap language, you'll notice that the "is required" does get changed to (in our case) Swedish, but the string from i18n, which actually gets updated on the label property of the object, which is visible above the textbox, does not. Because of this, we get a mix of languages until you re-do the validation. 
