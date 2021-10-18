# DEVELOPMENT STANDARDS

1. Use PascalCase for components with double or more words exmple `ForgotPassword`
2. Folders should be small letters
3. Components should be capital letters
4. Components and all their related stylesheets should be in the same folder. Example: the `button` folder should contain the `Button.js` component and `button.css` files. Everything related to the button should be in one place.
5. follow this [twitter guide](https://dev.to/pritampatil/12-css-best-practices-by-twitter-2fap) for css styling

Rules to Enforce for Github:

1. When working on a new issue for eg. ISSUE-10 with title “Add new create method”
2. branch out of dev
3. Name your branch in this format: `Firstname-Issue-Number-IssueTitle` for eg. `Faddal-Issue-10-Add-create-method`
4. Never merge to master!
5. Never merge or commit directly to `development`
6. When you create a PR, the title of the PR should be of format `[Issue-10] - Add Create Method`
7. Don’t merge any code without a review from at least one person on the team
