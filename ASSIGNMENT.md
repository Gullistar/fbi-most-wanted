# Coding Exercise: FBI "Most Wanted" Dashboard

## Objective

Your task is to create a web application using one of the FBI’s public API (Most Wanted individuals or National art theft).
You can be creative on the use for the app like making it a dating apps for criminals or any other application you could think of.

## Links

API docs: `https://api.fbi.gov/docs#/`
National art thieves: `https://api.fbi.gov/artcrimes`
Most wanted criminals: `https://api.fbi.gov/wanted`

## Requirements

1. **Fetch Data**: Retrieve and display data from the FBI's API.
2. **Table Display**: Show a table with relevant information (you decide what fields are most important).
3. **Pagination or Infinite Scroll**: Implement either pagination or infinite scrolling to navigate through results.

## Bonus

- **Search Functionality**: Allow users to filter results based on at least one field (note: The API seem to struggle with spaces).
- **Detail View**: Clicking on an entry should open a modal or a new page with additional details about the person.
- The relevant area are tested
- Accessibility is following [WCAG 2.1](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1)

## Tech Stack

The code can be written in JS or TS and styling can be done using SCSS/CSS
We recommend using React/Vite, feel free to use tools or framework you feel are relevant to the application

## Time Estimate

This exercise should take approximately **3 to 6 hours** to complete.

## Limitations

The gov public APIs have a rate limitation on their "demo api" that might interfere in the development (HTTP429) - 30 per hour & 50 per day. (See https://api.data.gov/docs/developer-manual/)
We recommend requesting an API key to get a limit of 1000 entries/hours instead (https://api.data.gov/signup/)

If you are encountering issues in getting the data or with the API key, you can also use a mock `fetch` function to avoid the limitation.
Please contact the contact person by email if you want our version of the mock fetch function

## Notes

Please document the following:

- How to deploy the application locally
- Any decision that might be difficult to understand from the code
- Immediate improvements you would prioritize if this was going to be a production ready code

* You do not need to have a beautiful design, completely accessible application and so on. But if you have the skills to do so and would like to demonstrate them, it is highly encouraged.
* You do not need to write unit tests but if you have the time for it, you’re encouraged to do so.
* You should not spend time on polishing details to perfection.
* You should not spend more than a day or write thousands of lines of code. Simpler and smarter solutions are more appreciated.
* You must provide working code, where the goals of assignment can be clearly demonstrated.
* You must use a git repository for development and provide whole commit history instead of latest working commit. You can link the project or zip the repo directory.
* If you are motivated to take initiative and be creative for additional functionality besides the requirements, you must provide motivation behind those decisions.

You are welcome to contact Contact Person by email for any questions, you can also go with your own perception/understanding of given problem.
