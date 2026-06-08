# V1 Video Scope Builder

This is the V1 internal Video Scope Builder prototype for 2A review and demo use.

The app is a static front-end web app. The core app files live at the project root:

- `index.html`
- `styles.css`
- `app.js`

QA notes and status reports live in the `QA Reports` folder.

## Run Locally

Open `index.html` directly in a browser, or run a simple local web server from this folder:

```powershell
python -m http.server 4174 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4174/
```

If the server is started from the parent folder instead, open:

```text
http://127.0.0.1:4174/video-scope-builder/
```

## Services And Access

This prototype does not require API keys, backend services, a database, user accounts, or external authentication.

## Review Status

This is for internal review and demo only. It is not ready for client use yet.
