# V1 Video Scope Builder - Status

## 1. What the app currently does

V1 Video Scope Builder is a local, browser-based prototype for generating video-specific SOW scope language. A consultant selects a project path, chooses a support tier, answers guided questions, reviews formatted generated scope language, and copies clean Markdown/plain text for use in a larger SOW.

The app currently supports:

- Project path selection
- Tier selection, including Not sure recommendations
- Conditional guided questions by path
- Unsupported-work/custom-scoping flags
- Supporting animation/motion graphics duration handling
- Descriptive audio handling
- Formatted generated preview
- Copy-to-clipboard for the generated Markdown/plain text

There is no backend, database, login, deployment, or hosting configuration.

## 2. Project paths currently implemented

- Brand & story
- Product showcase
- Customer evidence
- Podcast
- Webinar
- Social clips
- GIF

Brand & story, Product showcase, and Customer evidence still share some narrative-video logic, with Brand & story now having a more specific visual approach workflow. Podcast, Webinar, Social clips, and GIF have separate path-specific output branches.

## 3. Recent changes made today

- Added a universal opening scope block to every project path:
  - Meet to understand audiences, use cases, objectives, and key inputs
  - Review existing, relevant assets provided by the client
- Added duplicate filtering so the universal opening bullets appear only once.
- Expanded Podcast from an edit-only path into a fuller podcast workflow.
- Fixed Podcast graphics package logic so None, Client-provided graphics package, and Podcast system setup are mutually exclusive.
- Changed the generated preview from raw Markdown text to formatted headings and bullets while preserving Markdown/plain text copying.
- Improved Brand & story, especially Premium, with visual approach checkboxes and custom illustration/custom animation logic.
- Added Premium Brand & story assumptions and exclusions.
- Preserved global output rules: no checkbox syntax, no separate Scope includes subsection, review rounds inline, and plain-bullet deliverables.

## 4. Known issues / rough edges

- The app is still a prototype and uses one large `app.js` file.
- Generated language is rule-based and not yet backed by a full content model or test suite.
- Brand & story, Product showcase, and Customer evidence share narrative logic in some places, so future edits should be careful not to accidentally affect all three.
- The formatted preview is not directly editable now. Copy still works, but editing generated text in-app would need a later pass.
- The app does not save user inputs or generated outputs.
- The UI is functional but still basic.
- Tier recommendation logic is lightweight and should be refined later.
- No deployment or hosting has been added.

## 5. What to test next

Test the universal opening bullets across all paths:

- Brand & story
- Product showcase
- Customer evidence
- Podcast
- Webinar
- Social clips
- GIF

For each path, confirm the Video Scope starts with:

- Meet to understand audiences, use cases, objectives, and key inputs
- Review existing, relevant assets provided by the client

Also test:

- Brand & story Simple, Standard, and Premium
- Podcast graphics package options: None, Client-provided graphics package, Podcast system setup
- Webinar recording edit language
- Social clips supporting animation duration per clip
- Customer evidence supporting graphics duration
- Copy button output pasted into Word or a plain text editor

## 6. Recommended next build tasks

Recommended next steps, in order:

1. Add a simple edit mode for the generated output, or provide a plain text edit panel alongside the formatted preview.
2. Add focused tests for the generator rules so future wording changes do not break other paths.
3. Refactor `app.js` into smaller sections or files, especially questions, scope generation, deliverables, assumptions, and exclusions.
4. Deepen Product showcase and Customer evidence path-specific workflows.
5. Improve tier recommendation logic.
6. Add more precise formats/aspect ratio controls.
7. Add a review/export flow for internal note vs. client-facing copy.

Do not deploy until the generator behavior has been reviewed and approved.

## 7. How to run the app locally

Open PowerShell, go to the project folder:

```powershell
cd "C:\Users\OliviaFiero\OneDrive - 2A\Documents\SOW Builder"
```

Start the local preview server:

```powershell
& "C:\Users\OliviaFiero\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://localhost:4173/
```

To stop the server, return to the PowerShell window and press `Ctrl+C`.

## 8. How to demo it to your boss over screenshare

Suggested demo flow:

1. Open `http://localhost:4173/`.
2. Explain that this is a local prototype, not a deployed app.
3. Start with Brand & story and show Simple vs. Premium.
4. Point out the universal opening scope bullets.
5. Show the Brand & story visual approach checkboxes and Premium custom animation language.
6. Switch to Podcast and show the full podcast workflow.
7. Toggle Podcast graphics package between None, Client-provided graphics package, and Podcast system setup.
8. Show Webinar and call out that 2A does not host the live webinar; the client provides the recording for editing.
9. Show Social clips with a supporting animation duration.
10. Click Copy and paste the generated scope into a document or email draft.

Position it as a working prototype for language structure and consultant workflow, not as a finished production system.
