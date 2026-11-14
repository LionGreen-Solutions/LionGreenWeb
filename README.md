Welcome to LionGreenSolutions
![LionGreenSolutions logo](https://github.com/user-attachments/assets/a2e769cd-d942-4723-b47c-7875c63012a9)
LionGreenSolutions is an innovative startup focused on e-mobility motorbike supply, and solar energy solutions for electrification. Our services include water pumping systems, home electrification, and other innovative power solutions for sustainable service delivery. Founded in 2021 by a team of experienced professionals, we leverage our expertise in solar energy design and installation to provide sustainable energy solutions that empower communities and promote environmental stewardship.

## LAZA legal pages

The terms at `/laza-terms` and privacy policy at `/laza-privacy-policy` display
the app's current English and Amharic wording. Use the language buttons or add
`?lang=am` to either URL. The deletion link points to `/laza-delete-account`.
The deletion page also uses the app's English processing and retention wording,
including the seven-day account-deletion deadline after ownership verification
and the separate-record retention period after account deletion.

Legal content in `src/content/laza/` is copied from the mobile app. After editing
the app's `features/legal/` content, run `npm run sync:legal` in this repository,
review and commit the generated changes, then build and deploy the website.
Run `npm run check:legal` to check that the copies still match.

Both commands expect the app in `../volt-rider-app`. For a different checkout,
pass its path, for example `npm run sync:legal -- /path/to/volt-rider-app`.
Only the public legal content is copied; normal builds use the committed files
and do not require the app repository. Make wording changes in the app source,
not in the generated copies.
