# QA Report: V1 Video Scope Builder

## Summary

The current V1 prototype is in useful shape for internal review. The app runs locally, all seven project paths generate output, the formatted preview works, Copy preserves plain Markdown/plain text, and the universal opening scope bullets now appear across paths.

What is working well:

- All tested paths begin with the required opening bullets.
- No tested output produced checkbox syntax like `[x]` or `[ ]`.
- No tested output created a separate `Scope includes` subsection.
- Podcast no longer behaves like a generic video edit; it includes intake, questions, prep call, recording, edit, graphics options, thumbnail, audio mix, and optional social clips.
- Podcast graphics package options are mutually exclusive.
- Webinar recording edit language clarifies that the client conducts the webinar and provides the recording to 2A.
- Social clips duration language includes `per clip`.
- Live capture / on-site filming triggers an internal custom-scoping flag when selected.

Biggest risks:

- Several paths are still too shallow for consultant confidence, especially Product showcase, Customer evidence, Webinar, and GIF.
- Some unsupported or complex options from the requirements are not selectable yet, so the app cannot test or flag them.
- Some outputs are illogical for selected states, especially webinar deck-only and audio-only podcast deliverables.
- Some labels produce awkward wording such as `webinar support support` and `GIF support support`.
- The formatted preview is no longer editable, which conflicts with earlier prototype expectations.

Highest-priority fixes:

- Fix webinar deck-only and recording/cutdown dependencies.
- Add missing guided questions for Webinar, GIF, Product showcase, and Customer evidence.
- Make audio-only Podcast avoid unnecessary video/caption/descriptive-audio language.
- Restore or add an editable generated text mode.
- Remove duplicate or near-duplicate opening/meeting language in Podcast and Brand & story.

## Test Matrix

| Path | Support level | Scenario | Result | Notes |
|---|---|---|---|---|
| Brand & story | Simple | Client-provided assets and basic edit | Warning | Required opening bullets appear. Output still includes style frames/storyboards in some simple states, which may be too heavy. |
| Brand & story | Standard | Script support, style frames, storyboard, animated graphics | Pass | Supporting graphics duration appears when selected. |
| Brand & story | Premium | Custom illustration and custom animation | Pass | Custom illustration/custom animation module appears and is not replaced by supporting graphics duration. |
| Brand & story | Premium | Mixed approach: stock + animated graphics + custom animation | Warning | Output can become broad and potentially duplicative when many visual approaches are selected. |
| Brand & story | Standard | Supporting graphics duration set to 5 seconds / 60 seconds | Pass | Duration appears for edit-led animated graphics. |
| Brand & story | Standard | Custom supporting graphics duration | Pass | Internal custom-scoping flag appears when Custom duration is selected. |
| Product showcase | Simple | Client-provided UI/screens | Warning | Product UI responsibility appears, but the guided questions are still limited and do not distinguish screen recordings, product copy, feature documentation, or product access well. |
| Product showcase | Standard | Script support, UI animation, professional VO | Warning | Music/VO/SFX language appears. Style frames/storyboards are not clearly selectable for Product showcase. |
| Product showcase | Premium | Custom animation + product UI | Fail | There is no clear Custom animation option for Product showcase yet. |
| Product showcase | Standard | Supporting graphics duration selected | Pass | Duration cap appears. |
| Product showcase | Standard | Descriptive audio set to Not sure | Pass | Assumption appears asking client to confirm descriptive audio. |
| Customer evidence | Simple | Client-provided footage | Warning | Basic path works, but output remains generic and does not ask enough customer-specific questions. |
| Customer evidence | Standard | Remote interviews | Warning | Remote support and participant responsibilities appear, but the app does not ask number of interviews, interview length, or participant coordination owner. |
| Customer evidence | Premium | Remote capture + story support + supporting graphics | Warning | Some relevant language appears, but premium path is not deeply differentiated. |
| Customer evidence | Standard | Supporting graphics duration set to 10 seconds | Warning | Duration may not appear if motion duration is changed before the duration field is visible/active in the UI flow. Needs manual browser verification. |
| Customer evidence | Premium | Live/on-site capture selected | Pass | Internal custom-scoping flag appears and client-facing scope excludes silent inclusion. |
| Podcast | Simple | Audio-only episode | Warning | Podcast workflow appears, but output still includes text/caption files if applicable and descriptive audio can be globally selected even when audio-only. |
| Podcast | Standard | Audio + video podcast workflow | Pass | Intake, questions, prep call, Riverside recording, edit, graphics, thumbnail, audio mix, and optional social clips appear. |
| Podcast | Standard | Client-provided graphics package | Pass | Client-provided graphics package appears without Podcast system setup. |
| Podcast | Standard | Podcast system setup | Pass | Standardized podcast assets appear without client-provided graphics package. |
| Podcast | Standard | No graphics package | Pass | Neither graphics package bullet appears; thumbnail still appears. |
| Podcast | Standard | Social clips | Pass | Social clips appear in scope and deliverables. |
| Podcast | Any | Equipment kits selected or Not sure | Fail | Equipment kits are not currently selectable, so the app cannot flag or assume them. |
| Webinar | Simple | Webinar deck only | Fail | Deck-only state can still show generic MP4/presentation formats and client responsibility about conducting/providing a recording even when recording edit is off. |
| Webinar | Standard | Outline + slide-by-slide + deck design | Fail | These choices are not currently available as guided questions. |
| Webinar | Standard | Recording edit only | Pass | Recording edit clarifies client conducts webinar and provides recording to 2A. |
| Webinar | Premium | Deck + recording edit + post-event cutdowns | Warning | Recording/cutdown language works, but dependencies are weak; cutdowns can be selected even when edited recording is off. |
| Webinar | Standard | Basic accessibility | Fail | Accessibility level is not currently selectable. |
| Webinar | Premium | Full accessibility review/report | Fail | Full accessibility review/report is not selectable and cannot trigger custom scoping. |
| Webinar | Standard | Descriptive audio Not sure | Pass | Assumption appears asking client to confirm descriptive audio. |
| Social clips | Simple | Existing long-form video | Pass | Existing source language appears and does not imply net-new capture. |
| Social clips | Standard | Podcast recording source | Fail | Podcast recording is not available as a source material option. |
| Social clips | Standard | Webinar recording source | Fail | Webinar recording is not available as a source material option. |
| Social clips | Standard | Light motion graphics | Pass | Supporting graphics/motion language appears. |
| Social clips | Standard | 5 seconds / 60 seconds duration | Pass | Duration appears with `per clip`. |
| Social clips | Standard | Custom duration | Pass | Internal custom-scoping flag appears. |
| GIF | Simple | Existing brand assets | Warning | Existing assets path works, but output is very thin. |
| GIF | Standard | Concept, copy, storyboard, animation | Fail | Concept/copy/storyboard controls do not exist yet. |
| GIF | Standard | Product/UI GIF | Fail | Product/UI GIF is not selectable, and product accuracy assumptions do not appear. |
| GIF | Premium | Custom illustration | Fail | Custom illustration is not selectable or flagged. |
| GIF | Standard | MP4 output | Pass | MP4 deliverable appears when GIF and MP4 is selected. |
| GIF | Simple | GIF-only output | Pass | GIF-only output avoids text/caption files and thumbnails by default. |

## Detailed Findings

### Brand & story

#### Finding 1

- Severity: Medium
- Scenario tested: Simple brand/story with default client-provided footage and stock footage.
- Expected output: A simpler edit-led output with light/no visual planning unless selected.
- Actual output: The simple scenario can still include style frames and storyboards if the tier/field state defaults to that path.
- Why it matters: Simple tier should feel lighter and cheaper to scope. Style frames and storyboards may overstate effort.
- Recommended fix: Make Simple Brand & story default to `Edit-led only` consistently and only include style frames/storyboards when selected.

#### Finding 2

- Severity: Low
- Scenario tested: Premium mixed approach with multiple visual approach checkboxes selected.
- Expected output: A cohesive mixed-approach scope with minimal duplication.
- Actual output: Multiple selected approaches can create overlapping visual direction bullets.
- Why it matters: Consultants may select several options and get a scope that reads too broad or repetitive.
- Recommended fix: Add a mixed-approach summarizer or grouping rule that consolidates related visual approach bullets.

#### Finding 3

- Severity: Low
- Scenario tested: Brand & story outputs after universal opening block.
- Expected output: Opening bullets appear once and path-specific meeting language does not repeat.
- Actual output: Required opening bullets appear once. No major duplicate for Brand & story in the tested scenarios.
- Why it matters: This path is in better condition than several others.
- Recommended fix: Keep monitoring when additional Brand & story modules are added.

### Product showcase

#### Finding 1

- Severity: High
- Scenario tested: Premium product showcase with custom animation and product UI.
- Expected output: Ability to select custom animation and generate premium product-specific animation language.
- Actual output: Product showcase only has Product UI animation options: None, Light UI motion, Moderate UI motion, Not sure. There is no custom animation option.
- Why it matters: Premium product showcase is under-modeled and may under-scope complex product videos.
- Recommended fix: Add visual approach/animation depth options for Product showcase, including custom animation and advanced product UI animation.

#### Finding 2

- Severity: Medium
- Scenario tested: Standard product demo with script support, style frames, storyboard, UI animation, and professional VO.
- Expected output: Product-specific story/script support, style frames, storyboard, UI animation, professional VO, and music/SFX language.
- Actual output: VO/music/SFX language appears, but Product showcase has no explicit visual planning selector like style frames/storyboards.
- Why it matters: Style frames/storyboards are common for standard/premium product demos and should be explicitly controllable.
- Recommended fix: Add Product showcase visual planning question or reuse the narrative visual planning question for this path.

#### Finding 3

- Severity: Low
- Scenario tested: Product showcase using client-provided UI assets.
- Expected output: Client responsibility for product UI assets and validation.
- Actual output: Product UI assets and accuracy responsibilities appear.
- Why it matters: This is working as expected.
- Recommended fix: Keep this logic, but add more granular product-input options later.

### Customer evidence

#### Finding 1

- Severity: High
- Scenario tested: Standard customer case study with remote interviews.
- Expected output: Questions for number of interviews, interview length, and participant coordination; output should reflect those choices.
- Actual output: Remote recording support appears, but the app does not ask number of interviews, interview length, or participant coordination owner.
- Why it matters: These details materially affect scope, timing, and client responsibilities.
- Recommended fix: Add remote-interview questions and map them into scope, responsibilities, assumptions, and exclusions.

#### Finding 2

- Severity: Medium
- Scenario tested: Customer evidence with supporting graphics duration.
- Expected output: Supporting graphics bullet should include selected duration.
- Actual output: The duration cap may not appear depending on interaction order because the field is conditionally shown and defaults to None.
- Why it matters: Consultants may expect duration to appear after choosing supporting graphics.
- Recommended fix: Make the duration question visible and prominent for Customer evidence when supporting graphics is selected, and consider a non-None default for Standard/Premium.

#### Finding 3

- Severity: Low
- Scenario tested: Live/on-site capture selected.
- Expected output: Internal custom-scoping flag and no silent inclusion of live capture.
- Actual output: Internal flag appears and scope says live capture/on-site filming is excluded unless separately scoped.
- Why it matters: This is an important V1 guardrail and is working.
- Recommended fix: Keep as-is.

### Podcast

#### Finding 1

- Severity: Medium
- Scenario tested: Standard podcast with universal opening bullets.
- Expected output: Universal opening bullets followed by podcast-specific intake language.
- Actual output: Output includes universal opening bullets and then `Meet with client to understand audiences, objectives, content strategy, participants, and key inputs.`
- Why it matters: This is not a strict duplicate, but it is close enough that the opening can feel repetitive.
- Recommended fix: Replace the podcast-specific meet bullet with a narrower podcast intake/context bullet, or allow the universal opening block to satisfy that requirement.

#### Finding 2

- Severity: Medium
- Scenario tested: Simple audio-only podcast episode.
- Expected output: Audio-only output should avoid unnecessary video/caption/descriptive-audio language.
- Actual output: Deliverables include `Text/caption file(s), if applicable`, and global descriptive audio can still be selected for audio-only podcast.
- Why it matters: Audio-only podcast scope should not imply video accessibility/video deliverables.
- Recommended fix: Hide or suppress descriptive audio for audio-only Podcast and only include caption text when video/social clips are included.

#### Finding 3

- Severity: High
- Scenario tested: Equipment kits selected or Not sure.
- Expected output: Equipment kits should trigger custom scoping or clear assumptions/exclusions.
- Actual output: Equipment kits are not selectable.
- Why it matters: Equipment kits are explicitly V1 unsupported/custom-scope work.
- Recommended fix: Add Podcast equipment kits question with No/Yes/Not sure and trigger internal custom-scoping flag for Yes/Not sure.

#### Finding 4

- Severity: Low
- Scenario tested: Podcast system setup and client-provided graphics package.
- Expected output: Mutually exclusive bullets unless Both exists.
- Actual output: Mutually exclusive behavior works.
- Why it matters: Recent fix is successful.
- Recommended fix: No immediate fix.

### Webinar

#### Finding 1

- Severity: High
- Scenario tested: Webinar deck only.
- Expected output: Deck-only output should include webinar deck deliverable and avoid video/recording responsibilities unless recording edit is selected.
- Actual output: When edited recording is unchecked and cutdowns are zero, output can still include only generic scoped formats and a client responsibility about conducting/providing a recording.
- Why it matters: Deck-only scopes may accidentally imply video/recording work or omit the deck deliverable depending on checkbox state.
- Recommended fix: Tie recording responsibilities and MP4/video deliverables to edited recording/cutdown selections only. Make deck deliverable explicit when deck is selected.

#### Finding 2

- Severity: High
- Scenario tested: Webinar outline + slide-by-slide content + deck design.
- Expected output: Guided questions and output bullets for outline, slide-by-slide content, and deck design.
- Actual output: These controls do not exist yet.
- Why it matters: Webinar support is broader than recording edit and deck creation.
- Recommended fix: Add webinar support type controls: outline, slide-by-slide content, deck design, recording edit, cutdowns.

#### Finding 3

- Severity: High
- Scenario tested: Full accessibility review/report.
- Expected output: Full accessibility review/report should trigger custom scoping or separate scoping language.
- Actual output: Accessibility level is not selectable.
- Why it matters: Accessibility support can materially change scope and risk.
- Recommended fix: Add accessibility level question with Basic support vs Full accessibility review/report, and flag full report for custom scoping.

#### Finding 4

- Severity: Low
- Scenario tested: Recording edit.
- Expected output: Clarify client conducts webinar and provides recording to 2A.
- Actual output: Required clarification appears.
- Why it matters: This avoids implying 2A hosts or manages the live webinar.
- Recommended fix: Keep as-is.

### Social clips

#### Finding 1

- Severity: Medium
- Scenario tested: Clips from podcast recording and webinar recording.
- Expected output: Source material options should include podcast recording and webinar recording.
- Actual output: Source material options are Existing long-form video, Client-provided assets, Net-new creative concept.
- Why it matters: Podcast and webinar cutdowns are common clip sources and should generate more accurate assumptions/responsibilities.
- Recommended fix: Add source options for Podcast recording and Webinar recording.

#### Finding 2

- Severity: Medium
- Scenario tested: Net-new creative concept.
- Expected output: If net-new concept implies non-existing assets or new footage, output should be careful not to imply live capture.
- Actual output: App allows Net-new creative concept but does not add custom-scope flag or clarifying assumptions.
- Why it matters: Could accidentally imply concepting or production beyond V1.
- Recommended fix: Add clarifying language that social clips use existing/source assets unless separate production is scoped.

#### Finding 3

- Severity: Low
- Scenario tested: Supporting animation duration 5 seconds / 60 seconds / Custom.
- Expected output: Duration per clip or custom-scoping flag.
- Actual output: Duration appears with `per clip`; Custom triggers internal flag.
- Why it matters: This rule is working.
- Recommended fix: No immediate fix.

### GIF

#### Finding 1

- Severity: High
- Scenario tested: Standard campaign GIF with concept, copy, storyboard, and animation.
- Expected output: Concept, copy, storyboard, and animation controls and output language.
- Actual output: GIF path only asks count, source, and delivery format. Scope output is very thin.
- Why it matters: GIF workflows are often motion-led and need concept/copy/storyboard decisions.
- Recommended fix: Add GIF type, concepting, copy, storyboard, and animation level questions.

#### Finding 2

- Severity: High
- Scenario tested: Product/UI GIF.
- Expected output: Product/UI-specific language and product accuracy assumptions.
- Actual output: Product/UI GIF is not selectable.
- Why it matters: Product/UI GIFs need product accuracy and UI asset responsibilities.
- Recommended fix: Add GIF type option for Product/UI GIF and map to product accuracy assumptions.

#### Finding 3

- Severity: Medium
- Scenario tested: Premium GIF with custom illustration.
- Expected output: Custom illustration should trigger appropriate language or custom-scoping flag.
- Actual output: Custom illustration is not selectable or flagged.
- Why it matters: Custom illustration may be out of simple GIF scope and should not be silently implied.
- Recommended fix: Add animation level/custom illustration question and either generate explicit scoped language or trigger custom scoping.

#### Finding 4

- Severity: Low
- Scenario tested: GIF-only output.
- Expected output: Avoid video-specific deliverables unless MP4/video output requires them.
- Actual output: GIF-only deliverables are clean and avoid text/caption files and thumbnails.
- Why it matters: This is working.
- Recommended fix: Keep as-is.

## Cross-Path Findings

- Universal opening bullets appear across all tested paths and do not appear as exact duplicates.
- Near-duplicate meeting/context language remains in Podcast after the universal opening block.
- No tested output generated checkbox syntax.
- No tested output generated a separate `Scope includes` subsection.
- Several paths use awkward heading copy because the label already includes `support`, resulting in phrases like `webinar support support` and `GIF support support`.
- Assumptions and exclusions are mostly short, but some are still generic and not tightly path-specific.
- Client Responsibilities always appear, even for very light paths where they may not be strictly needed.
- The preview is formatted but no longer editable in place.
- Tier recommendation logic is still lightweight and not enough for consultant confidence.
- Several required unsupported/custom-scope triggers are missing because the related questions are missing, especially equipment kits and full accessibility review/report.
- Review round wording has grammar rough edges such as `1 rounds` and `1 review round(s)`.
- Some deliverables are too generic, especially Webinar deck-only and audio-only Podcast.
- The app has no automated test suite, so generator rules can regress easily.

## Suggested Fix Backlog

### High priority

Fixes needed before showing to leadership:

1. Fix Webinar deck-only and recording/cutdown dependency logic.
2. Add missing Webinar controls for outline, slide-by-slide content, deck design, accessibility level, recording edit, and cutdowns.
3. Add GIF concept/copy/storyboard/animation-level controls.
4. Add Product showcase custom animation/advanced UI animation controls.
5. Add Customer evidence remote interview count, interview length, and participant coordination controls.
6. Add Podcast equipment kit question and custom-scoping flag.
7. Fix audio-only Podcast deliverables and descriptive audio handling.
8. Restore or add an editable generated-output mode.

### Medium priority

Fixes needed before broader consultant testing:

1. Remove near-duplicate Podcast meeting/context bullet after universal opening.
2. Add Social clips source options for podcast recording and webinar recording.
3. Improve assumptions and exclusions to be more path-specific.
4. Improve tier recommendation logic.
5. Fix grammar for singular/plural review rounds.
6. Fix awkward `support support` headings.
7. Add more precise formats/aspect ratio controls.
8. Add generated-output regression tests for core rules.

### Low priority

Nice-to-have polish:

1. Refactor `app.js` into smaller modules.
2. Add save/reset controls for scenarios.
3. Add a lightweight scenario preset picker for demos.
4. Improve UI density and labels for consultant use.
5. Add visual indication of what is client-facing vs internal note.

## Recommended Next Prompt

Paste this prompt tomorrow:

```text
Please continue from QA_REPORT.md. Do not deploy or add hosting. Start with the high-priority Webinar fixes only. Fix deck-only, recording edit, and cutdown dependency logic; add webinar controls for outline, slide-by-slide content, deck design, accessibility level, recording edit, and cutdowns; make full accessibility review/report trigger custom scoping; and ensure deck-only output avoids video deliverables and recording responsibilities. Keep the UI simple, preserve global output rules, and run local generator checks after the change.
```

