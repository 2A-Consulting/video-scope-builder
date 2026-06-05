# Video Scope Builder Deep QA Audit Report

## Executive Summary

Overall QA status: the V1 app is usable for internal review, but it is not fully demo-ready as a polished scope generator. The core output structure is working, the preview renders formatted content, the copy model remains text/Markdown-friendly, and all seven project paths generate a scope. The app also consistently includes the two required opening bullets and, in tested scenarios, avoided checkbox syntax, a separate "Scope includes" subsection, and duplicate final packaging bullets.

Biggest risks:

- Several paths still generate scope that is too generic for the selected project type, especially Product Showcase, Customer Evidence, Social Clips, and GIF.
- Brand & Story Premium does not reliably preselect or output the custom illustration/custom animation workflow when the user switches from Standard to Premium.
- Product Showcase and Customer Evidence do not have enough guided questions to represent common real scope decisions.
- Some final deliverables and client responsibilities still include irrelevant video-oriented language for GIF-only or social-only outputs.
- The Simple / Standard / Premium lift selector often changes only rounds or assumption/exclusion limits, not meaningful scope structure.

Demo readiness: good enough for a controlled internal walkthrough if positioned as a prototype, but not yet strong enough for a boss screenshare where generated SOW language will be closely inspected across all paths. Podcast and Webinar are currently the safest paths to demo.

Top fixes recommended before a boss screenshare:

1. Fix Brand & Story Premium default behavior so it actually preselects and outputs custom illustration/custom animation.
2. Clean GIF deliverables so GIF-only and MP4-only outputs match the selected delivery format.
3. Remove thumbnail/descriptive-audio client responsibility language from GIF and other non-video or no-thumbnail paths.
4. Add Product Showcase visual planning/custom animation controls or clearly limit Product Showcase V1 to edit-led work.
5. Add Customer Evidence interview/capture scoping questions or flag remote interview work for additional review.

## Test Coverage

| Project path | Scenarios tested | Lift levels tested | Notes on coverage gaps |
|---|---|---|---|
| Brand & Story | Default Simple/Standard/Premium, simple edit-led scenario, Premium tier switch, Premium custom-animation expectation, custom supporting-duration flag | Simple, Standard, Premium | Browser QA focused on visible controls and generated output. Numeric quantity changes were not deeply tested. |
| Product Showcase | Default Simple/Standard/Premium, product UI materials, moderate UI motion, professional VO, Not sure inputs, live capture custom-scoping flag | Simple, Standard, Premium | No custom animation or style-frame controls exist to test. |
| Customer Evidence | Default Simple/Standard/Premium, remote recording support, Not sure participant footage, supporting graphics visibility | Simple, Standard, Premium | App lacks interview count, interview length, participant coordination, and case-study-specific controls. |
| Podcast | Audio-only, video podcast, client-provided graphics package, podcast system setup, Premium motion duration, Custom motion duration | Simple, Standard, Premium | Browser automation could not reliably edit numeric fields, so social clip quantity was not fully retested in this deep pass. |
| Webinar | Deck-only, outline + slide + deck rewrite, recording edit only, deck + recording + cutdowns, cutdowns without recording edit, basic accessibility, full accessibility review/report, descriptive audio Not sure | Simple, Standard, Premium | Cutdown quantity used default value during browser QA because numeric entry was unreliable in the automation layer. |
| Social Clips | Default Simple/Standard/Premium, webinar source, podcast source, custom motion duration | Simple, Standard, Premium | Quantity changes were not fully retested due numeric-entry issue in the automation layer. |
| GIF | Basic GIF-only, Premium simple net-new animation, MP4-only delivery | Simple, Standard, Premium | No controls exist for length, loop behavior, product/UI GIF, storyboard, copy, or custom illustration. |

## High Priority Findings

### Brand & Story Premium does not reliably output the Premium custom-animation workflow

- Path: Brand & Story
- Scenario tested: Starting from the default app state, switch Support level from Standard to Premium.
- Selected inputs: Brand & Story, Premium, default visual approach state.
- Actual output problem: The visual approach remained "Animated graphics / text on screen" instead of preselecting Custom illustration and Custom animation. The output included style frames/storyboards and supporting graphics, but not the Premium custom illustrative animation bullets.
- Why this matters: Premium Brand & Story was specifically intended to support custom illustration/custom animation. In the live app, a consultant can select Premium and still get an edit-led scope that reads too light.
- Recommended fix: When Brand & Story support level changes to Premium, update the default visual approach to Custom illustration and Custom animation unless the user has already made an intentional manual selection.
- Severity: High
- Suggested next Codex task: "Fix Brand & Story Premium default state so Premium preselects and outputs the custom illustration/custom animation workflow without overwriting deliberate user selections."

### Product Showcase is under-modeled for Standard and Premium work

- Path: Product Showcase
- Scenario tested: Product Showcase across Simple, Standard, and Premium; Product materials set to Not sure; Product UI animation set to Not sure.
- Selected inputs: Product Showcase, Standard/Premium, Product materials = Not sure, Product UI animation = Not sure.
- Actual output problem: The app flags Not sure inputs, but the scope still says 2A will use client-provided product UI assets, screenshots, screen recordings, and product documentation. There is no visual planning selector, no custom animation option, and no advanced product UI animation control.
- Why this matters: Product Showcase scopes often hinge on product access, screen capture, UI animation depth, storyboard/style-frame needs, and technical validation. The current path may under-scope complex demos and produce misleading assumptions when the inputs are uncertain.
- Recommended fix: Add Product Showcase-specific visual planning and animation-depth questions, or explicitly position Product Showcase V1 as edit-led only. For Not sure product materials, avoid committing to client-provided assets in the scope and add a clearer custom-scoping/review note.
- Severity: High
- Suggested next Codex task: "Harden Product Showcase logic with product-material source handling, visual planning, UI animation depth, and Not sure output behavior."

### Customer Evidence lacks core interview and participant scoping controls

- Path: Customer Evidence
- Scenario tested: Customer Evidence default and remote support scenarios across Simple, Standard, and Premium.
- Selected inputs: Customer Evidence, Remote recording support, 2A shapes narrative.
- Actual output problem: Remote support adds a generic recording-support bullet, but the app does not ask for number of interviews, interview length, participant coordination owner, whether client provides recordings, or whether 2A conducts remote interviews.
- Why this matters: These details materially affect scope, timeline, client responsibilities, and whether the work is supported in V1. The current output can feel like a generic narrative video instead of a customer-evidence workflow.
- Recommended fix: Add Customer Evidence-specific controls for participant/interview count, interview duration, source footage type, client/customer approvals, and whether 2A is supporting remote recording or only editing provided footage.
- Severity: High
- Suggested next Codex task: "Build Customer Evidence V1 logic for client-provided footage, remote interviews, participant responsibilities, and evidence-story deliverables."

### GIF delivery format output can contradict selected delivery format

- Path: GIF
- Scenario tested: GIF, Premium, Delivery format = MP4 only.
- Selected inputs: GIF, Simple net-new animation, MP4 only.
- Actual output problem: Final deliverables still included "3 GIF file(s)" and "Scoped formats and aspect ratios: GIF and/or MP4, as selected" even when MP4 only was selected.
- Why this matters: Final deliverables must match selected output formats. MP4-only should not promise GIF files.
- Recommended fix: Branch GIF deliverables by selected format: GIF only = GIF files only; GIF and MP4 = both; MP4 only = MP4 files only. Update format language accordingly.
- Severity: High
- Suggested next Codex task: "Fix GIF final deliverable logic for GIF only, GIF and MP4, and MP4 only."

### GIF-only and social-only outputs include irrelevant thumbnail/descriptive-audio responsibility language

- Path: GIF and Social Clips
- Scenario tested: GIF-only output; Social Clips default output.
- Selected inputs: GIF only; Social clips from existing long-form video.
- Actual output problem: Client Responsibilities included "Confirm final delivery specifications, including file format, aspect ratio, caption requirements, thumbnail requirements, and whether descriptive audio is required." This appears even for GIF-only outputs and social outputs where thumbnails/descriptive audio may not be scoped.
- Why this matters: Responsibilities should be consolidated and relevant. Asking for thumbnail/descriptive audio requirements on GIF-only work makes the scope feel generic and not path-aware.
- Recommended fix: Build path-specific delivery-spec responsibility language. GIF should ask for placement, format, size/loop constraints, and source assets. Social Clips should ask for platform/aspect-ratio/caption requirements, and thumbnail/descriptive-audio only if selected or relevant.
- Severity: High
- Suggested next Codex task: "Normalize Client Responsibilities by path so non-video deliverables do not inherit generic thumbnail/descriptive-audio language."

## Medium Priority Findings

### Brand & Story Premium assumptions and exclusions can conflict with selected scope

- Path: Brand & Story
- Scenario tested: Brand & Story, Premium, default state after switching from Standard.
- Selected inputs: Brand & Story, Premium.
- Actual output problem: Premium assumptions mention approved style frames/storyboards guiding custom illustration, animation, and motion design, but the scope did not include the custom illustration/custom animation bullets. Exclusions also included "Custom illustrative animation, unless explicitly scoped," which can feel contradictory in a Premium context.
- Why this matters: The output mixes Premium assumptions with a non-Premium scope, creating consultant-facing ambiguity.
- Recommended fix: Only include Premium custom-animation assumptions when custom illustration/custom animation is actually selected, and make exclusions aware of explicitly scoped custom animation.
- Severity: Medium
- Suggested next Codex task: "Make Brand & Story assumptions/exclusions conditional on the selected visual approach."

### Social Clips motion support selector does not meaningfully change the scope language

- Path: Social Clips
- Scenario tested: Social Clips, Source material = Webinar recording, Social clip motion support = Moderate motion graphics, Custom duration.
- Selected inputs: Social Clips, Moderate motion graphics.
- Actual output problem: The scope still said "Add text on screen, captions, product UI, and/or light motion graphics, as applicable." The selected "Moderate motion graphics" did not change the wording.
- Why this matters: A consultant selecting moderate motion expects a different scope than light motion. The output currently flattens those choices.
- Recommended fix: Map each motion support option to distinct language: text/captions only, light motion graphics, moderate motion graphics. Keep duration caps inline when applicable.
- Severity: Medium
- Suggested next Codex task: "Differentiate Social Clips motion-support output by selected motion level."

### Product Showcase voiceover defaults may over-scope Simple projects

- Path: Product Showcase
- Scenario tested: Product Showcase default Simple.
- Selected inputs: Product Showcase, Simple, default Voiceover field.
- Actual output problem: Simple Product Showcase default included "Incorporate recorded voiceover, music, and sound effects into the final video, as applicable" because Professional voiceover is the first/default option.
- Why this matters: Simple projects may not always include professional VO. Defaulting to VO can overstate scope.
- Recommended fix: Consider defaulting Product Showcase Voiceover to None or adding "Not sure" as the default, then only include VO language when selected.
- Severity: Medium
- Suggested next Codex task: "Review Product Showcase defaults so Simple does not automatically include professional voiceover."

### Supporting animation duration is visible by default for several paths but defaults to None

- Path: Brand & Story, Product Showcase, Customer Evidence, Social Clips
- Scenario tested: Default Standard outputs for narrative paths and Social Clips.
- Selected inputs: Supporting graphics checked by default.
- Actual output problem: The Supporting animation control appears, but default output includes supporting graphics language without a duration cap because duration defaults to None.
- Why this matters: If duration caps are important to scoping, the default state may create uncapped supporting graphics language.
- Recommended fix: Decide whether Standard/Premium should default to a duration cap or whether supporting graphics should be unchecked by default. If "None" is valid, adjust wording so the uncapped bullet does not imply meaningful motion work.
- Severity: Medium
- Suggested next Codex task: "Normalize supporting-graphics duration defaults across paths."

### Webinar recording edit repeats client-provided recording responsibility in several sections

- Path: Webinar
- Scenario tested: Webinar Recording edit only, Descriptive audio = Not sure.
- Selected inputs: Recording edit, Accessibility = Not required, Descriptive audio = Not sure.
- Actual output problem: The output says the client provides the recording in the scope, Client Responsibilities, and Assumptions.
- Why this matters: The clarification is correct, but repeated three times can make the SOW feel heavier and less polished.
- Recommended fix: Keep the scope bullet and one responsibility. Remove or shorten the duplicate assumption unless needed for a cutdowns-without-edit scenario.
- Severity: Medium
- Suggested next Codex task: "Polish Webinar client-provided recording language to avoid repeated bullets."

### Podcast equipment kits are referenced but not selectable

- Path: Podcast
- Scenario tested: Podcast assumptions/exclusions across audio-only and video podcast.
- Selected inputs: Podcast defaults.
- Actual output problem: Assumptions/exclusions mention equipment kits as separately scoped, but the UI has no way to select Yes/No/Not sure for equipment kits.
- Why this matters: Equipment kits are a real custom-scoping trigger. Without a control, the app cannot actively flag this unsupported work.
- Recommended fix: Add a Podcast equipment kits question with No, Yes, and Not sure. Yes/Not sure should trigger an internal custom-scoping flag.
- Severity: Medium
- Suggested next Codex task: "Add Podcast equipment-kit custom-scoping control."

## Low Priority / Polish Findings

### Several review-round phrases have awkward grammar

- Path: Multiple paths
- Scenario tested: Simple outputs for Brand & Story, Product Showcase, Customer Evidence, Podcast, GIF.
- Selected inputs: Simple/default.
- Actual output problem: Some bullets say "1 rounds of revisions" or "1 review round(s)."
- Why this matters: This is polish, but it is visible in client-facing SOW language.
- Recommended fix: Add a small pluralization helper for "round"/"rounds" and "file"/"files."
- Severity: Low
- Suggested next Codex task: "Add pluralization helpers for rounds, sessions, files, and episodes."

### GIF path is very thin

- Path: GIF
- Scenario tested: GIF only and MP4 only.
- Selected inputs: Existing video or animation; Simple net-new animation.
- Actual output problem: The GIF path has only source and format controls. It does not ask about length, loop behavior, dimensions, platform/use case, product UI, copy, storyboard, or custom illustration.
- Why this matters: The output can be technically correct but too generic for consultant confidence.
- Recommended fix: Add a bounded V1 GIF workflow: source, format, approximate length/loop, placement/use case, product UI or static assets, and whether net-new creative is required.
- Severity: Low
- Suggested next Codex task: "Add GIF-specific scoping questions for length, loop, placement, and source asset type."

### Internal Note text is generic even when the visible flag is specific

- Path: Webinar, Social Clips, Podcast Premium Custom motion
- Scenario tested: Full accessibility review/report; Custom motion duration.
- Selected inputs: Custom-scoping triggers selected.
- Actual output problem: The visible flag text is specific, but the generated Internal Note uses the generic custom-scoping sentence.
- Why this matters: Generic is acceptable for V1, but specific internal notes would help consultants know what needs review.
- Recommended fix: Consider including the specific flag message under Internal Note, while keeping it internal-facing.
- Severity: Low
- Suggested next Codex task: "Make Internal Note include specific custom-scoping trigger messages."

## Lift Selector Findings

Where Simple / Standard / Premium changes output meaningfully:

- Brand & Story: changes script, storyboard, design, edit, assumption, and exclusion counts. However, Premium does not reliably change the selected visual approach to custom illustration/custom animation.
- Podcast: changes review rounds and shows the supporting-animation duration control in Premium. Premium motion behavior is meaningful when selected.
- Webinar: changes design review rounds and assumption/exclusion limits. Premium deck-only gets more design rounds than Simple/Standard.
- GIF: changes review rounds for GIF creation.

Where lift changes output only lightly:

- Product Showcase: primarily changes script/edit rounds and assumption/exclusion limits. Questions and deliverables remain the same.
- Customer Evidence: primarily changes script/edit rounds and assumption/exclusion limits. Questions and deliverables remain the same.
- Social Clips: Simple has fewer review rounds than Standard/Premium. Standard and Premium are nearly identical in default output.

Where lift does not change UI options enough:

- Product Showcase: Premium does not expose custom animation, deeper UI animation, visual planning, or storyboard/style-frame controls.
- Customer Evidence: Premium does not expose interview/capture depth or richer story/approval options.
- Social Clips: Premium does not add meaningful options beyond the same source/material/motion controls.
- GIF: Premium does not expose more complex GIF workflow options.

Assessment: this is partly a bug and partly a product/design gap. Brand & Story Premium default behavior is a bug because Premium was expected to recommend/preselect custom illustration/custom animation. For the other paths, the lift selector is wired technically, but the product model is not yet deep enough for lift to feel meaningful.

Recommended next pass: define a Simple / Standard / Premium behavior matrix for one path at a time, starting with Product Showcase or Customer Evidence. Do not try to solve all lift logic globally in one pass.

## Path-by-Path Notes

### Brand & Story

What worked:

- Required opening bullets appear.
- Final packaging bullet appears once at the end of Video Scope.
- Supporting graphics duration can trigger custom scoping.
- Custom illustration/custom animation logic exists when selected.

What felt off:

- Premium does not reliably preselect custom illustration/custom animation when switching from Standard to Premium.
- Premium assumptions can mention custom illustration/animation even when custom visuals are not in scope.
- Exclusions can be awkward when custom illustrative animation is selected or implied.

Missing conditions:

- A clearer distinction between edit-led Brand & Story and custom-animation Brand & Story.

Duplicate or awkward language:

- "1 rounds" and "review round(s)" grammar.

Custom-scoping issues:

- Custom supporting animation duration correctly triggers a flag.
- Premium custom illustration should not be treated as unsupported if selected as core scope.

### Product Showcase

What worked:

- Required opening bullets appear.
- Product UI asset responsibilities and validation responsibilities appear.
- Voiceover/music/SFX language appears when voiceover is selected.
- Not sure product inputs trigger a visible review flag.
- Live capture/on-site filming triggers custom scoping.

What felt off:

- Product Showcase reads like a generic narrative edit with product UI assets.
- Not sure product inputs still generate a confident client-provided-assets scope bullet.
- Simple defaults may over-scope by including professional voiceover.

Missing conditions:

- Visual planning, storyboard/style frames, product access, screen capture depth, UI animation depth, custom animation, and product accuracy checkpoints.

Duplicate or awkward language:

- No major duplicate bullets observed.

Custom-scoping issues:

- Not sure inputs produce a review flag, but the generated client-facing scope still makes assumptions that may not be known.

### Customer Evidence

What worked:

- Required opening bullets appear.
- Remote recording support adds remote setup/capture guidance.
- Participant responsibilities appear.
- Live capture/on-site filming triggers custom scoping.

What felt off:

- Output reads like a generic narrative video plus customer quote language.
- Remote interview/capture details are too shallow.
- Supporting graphics are generic and include product UI/stock footage language that may not always apply.

Missing conditions:

- Number of customer interviews, interview duration, participant coordination owner, release/approval needs, whether client provides final interview recordings, whether 2A conducts remote interviews, and customer logo/legal review handling.

Duplicate or awkward language:

- No duplicate packaging observed.
- Some generic assumptions from narrative paths may not fit every customer evidence case.

Custom-scoping issues:

- Participant footage = Not sure triggers a review flag.
- More unsupported/uncertain customer capture work should likely trigger custom scoping or a clearer internal review note.

### Podcast

What worked:

- Audio-only Podcast now avoids thumbnail, MP4, aspect ratio, and descriptive-audio deliverables by default.
- Video Podcast includes video-appropriate deliverables.
- Podcast graphics package options are mutually exclusive.
- Premium Podcast exposes the supporting animation/motion graphics duration control.
- Custom motion duration triggers custom scoping.
- Packaging appears once.

What felt off:

- Equipment kits are only mentioned in assumptions/exclusions, not selectable.
- Premium motion duration control is visible for Premium audio-only Podcast too, even though additional motion graphics only make sense if there is a visual deliverable or selected graphics package.

Missing conditions:

- Equipment kits Yes/No/Not sure.
- More explicit social clips controls if podcast social clips are selected.

Duplicate or awkward language:

- "1 review rounds" grammar.

Custom-scoping issues:

- Custom motion duration works.
- Equipment kits should become an explicit custom-scoping trigger.

### Webinar

What worked:

- Deck-only output avoids edited recording deliverables.
- Recording edit correctly says the client conducts the webinar and provides the recording to 2A.
- Cutdowns without recording edit include client-provided recording source language.
- Basic accessibility adds the expected basic accessibility bullet.
- Full accessibility review/report triggers a custom-scoping flag.
- Cutdown fields appear only when cutdowns are selected.

What felt off:

- Recording edit repeats client-provided recording responsibility across scope, responsibilities, and assumptions.
- Full accessibility review/report produces the correct flag, but the generated Internal Note is generic.

Missing conditions:

- Descriptive audio is still global rather than deeply tied to actual webinar video outputs and accessibility decisions.

Duplicate or awkward language:

- Some repeated webinar recording responsibility language.

Custom-scoping issues:

- Full accessibility review/report works as a flag.
- Live webinar support remains excluded, which is correct.

### Social Clips

What worked:

- Required opening bullets appear.
- Podcast recording and webinar recording are available as source material.
- Custom supporting animation duration triggers custom scoping.
- Scope avoids full-length-video deliverables.

What felt off:

- Motion support options do not meaningfully change language. Moderate motion still outputs "light motion graphics."
- Client Responsibilities include thumbnail/descriptive-audio wording that does not always fit social clips.
- No platform-specific deliverable controls exist beyond the generic aspect-ratio list.

Missing conditions:

- Platform/channel selection, specific aspect ratios, caption style, burn-in captions versus caption files, thumbnail/cover frame only if needed.

Duplicate or awkward language:

- No duplicate packaging observed.

Custom-scoping issues:

- Custom duration works.
- Net-new creative concept likely needs clearer custom-scoping or assumption logic in a future pass.

### GIF

What worked:

- Required opening bullets appear.
- GIF-only output avoids caption files and thumbnails in Final Deliverables.
- MP4 deliverable appears when MP4 is included.
- Packaging appears once.

What felt off:

- MP4-only still includes GIF file(s).
- Format line says GIF and/or MP4 even when a specific format is selected.
- Client Responsibilities include thumbnail/descriptive-audio language that does not fit GIF-only work.
- Path remains very thin and generic.

Missing conditions:

- Length, loop behavior, dimensions, intended placement, product UI/static asset source, copy, storyboard, custom illustration, and whether net-new creative is required.

Duplicate or awkward language:

- No duplicate packaging observed.

Custom-scoping issues:

- Simple net-new animation in Premium does not trigger custom scoping. This may be acceptable if simple net-new animation is supported, but more complex GIF creation needs its own controls.

## Recommended Fix Order

1. Fix Brand & Story Premium default behavior and conditional assumptions/exclusions.
2. Fix GIF deliverables for GIF only, GIF and MP4, and MP4 only.
3. Replace generic client-responsibility delivery-spec language with path-specific versions, especially for GIF and Social Clips.
4. Harden Product Showcase with product source, visual planning, UI animation depth, custom animation, and Not sure behavior.
5. Harden Customer Evidence with interview/capture/participant scoping questions.
6. Differentiate Social Clips motion support output by selected level.
7. Add Podcast equipment-kit control and custom-scoping flag.
8. Polish pluralization across rounds, files, sessions, and deliverables.
9. Make Internal Note include specific custom-scoping trigger messages.
10. Define path-by-path Simple / Standard / Premium behavior, one path at a time.

## Do Not Change Code

- No code files changed. QA/report only.
- This pass created `QA_DEEP_AUDIT_REPORT.md` as the requested written audit report.
