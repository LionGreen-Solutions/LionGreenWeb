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

## Account-deletion submission

The deletion form posts to the existing hosting endpoint
`/api/account-deletion.php`. That PHP handler is not included in this checkout;
building the Vite app does not install or update it. Preserve the existing
`public_html/api/` directory when uploading frontend assets.

The form requires a successful HTTP response with JSON content type and
`{"success":true}` before confirming submission. An HTML fallback, malformed
JSON, `success:false`, network error or 15-second timeout keeps the user's
details available for retry. The page also provides the support email and the
app's deletion scope. A submission acknowledgement does not prove inbox
delivery or completed account deletion.

Run the isolated submission tests with Node 22.20 or later:

```sh
node --experimental-strip-types --test scripts/account-deletion-request.test.mjs
```

Before marking delivery verified, an authorized operator must:

1. Submit a clearly marked disposable test through the deployed form.
2. Find that exact test in the monitored support inbox, including Spam if needed.
   An HTTP success response or PHP `mail()` returning true is not proof of receipt.
3. Verify ownership before deleting any real account. A supplied name, email
   address or phone number alone is not proof of ownership.
4. Follow the mobile repository's `docs/account-deletion-operations.md`: record
   the verification time, operator and due date; remove the relevant app data
   and storage; verify removal; confirm completion to the requester; track any
   separate records through their documented retention deadline.

On 15 November 2026, local submission tests passed. A separate hosted app
backend test verified request recording, retry deduplication, account isolation,
profile-photo removal, Auth/profile/request deletion, rejected sign-in/refresh,
and preservation of a control account. Both disposable accounts were removed.
This did not test the website's email delivery or staff fulfilment of deadlines.
The user subsequently uploaded and extracted the prepared build through cPanel.
On 15 November 2026, all three public legal URLs returned HTTP 200 and referenced
the deployed JavaScript and CSS matching the prepared build byte for byte.
The PHP endpoint still returned its expected HTTP 405 JSON response to a GET.
Browser rendering and successful request delivery were not verified. The user's
instruction to skip the website delivery test remains in effect; no test email
was sent.
