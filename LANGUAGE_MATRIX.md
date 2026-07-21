# Video Scope Builder Language Matrix

Working draft for turning 2A video scoping judgment into clearer generated SOW language.

This is not app logic yet. It is the source-of-truth draft we can review, correct, and eventually translate into the builder.

## How to Review This

Olivia's job is not to write the matrix from scratch. Review in shorthand:

- Keep / revise / delete
- Simple / Standard / Premium / custom
- Client-facing / internal-only
- Phrase 2A would actually use
- Missing assumption or exclusion
- Any dealbreaker nuance

Example shorthand:

```text
P-03: Standard if screenshots are approved. Custom if we need to recreate UI or invent the demo flow.
P-06: Client-facing wording is too scary. Keep the warning internal.
P-09: Need legal/compliance signoff assumption.
```

## Review Status

- Product showcase: First SME review complete
- Customer evidence: Not started
- Brand and story: Not started
- Podcast: Not started
- Webinar: Not started
- Social clips: Not started
- GIF: Not started

## Language Principles

- Client-facing scope should be clear, concrete, and bounded.
- Internal notes should flag risk without making the client-facing SOW sound uncertain.
- "Not sure" inputs should not produce confident scope language.
- Premium does not always mean custom animation.
- Simple does not always mean low-risk.
- If 2A is expected to invent product logic, recreate UI, solve UX, or define an unapproved demo path, custom scoping may be needed.
- Assumptions should protect the scope without sounding adversarial.
- Exclusions should name work that is commonly confused with the scoped activity.

## Product Showcase - What We Need to Know

Use these prompts to understand the scope. These are not final tier labels yet. The first two columns can both be clear, scopeable work.

| Topic | Lightest clear scope | Clear scope with 2A shaping | Needs review before final scope |
|---|---|---|---|
| Product source material | Client has usable approved footage, screenshots, UI assets, or product references | Client has mixed materials, and 2A helps decide what can support the story or creates supporting materials needed for the story | Source materials are unclear, missing, not approved, or not ready for use |
| Demo story | Client has an approved product story, feature order, or demo path | 2A helps shape the story using client direction and approved product inputs | Client direction is too vague to write a confident scope |
| Capture | Client provides final footage/assets | 2A records a client-approved product path or remote walkthrough | Product access, environment readiness, or approval path is unclear |
| UI motion | No motion, light callouts, text on screen, or simple polish | 2A adds supporting UI motion from approved screens or captures | The ask may require custom animation, product simulation, or recreating UI |
| Script / voiceover | No VO, client-provided VO, or approved AI VO with a client-provided script | 2A supports scripting and VO development, using either professional or AI VO as approved | Scripting approach, approval path, or VO usage is unclear enough that it should be reviewed before final scope |
| Review / approval | One consolidated client review group | Product and marketing stakeholders both review | Legal, compliance, security, customer, or executive approval may affect timing/scope |
| Deliverables | Main video with expected basics such as captions, thumbnail, and scoped export format | Main video plus a small number of expected derivative needs | Multiple versions, cutdowns, ratios, localized variants, or channel-specific edits |

Note from Olivia review: do not say 2A "invents" the demo flow. 2A can help shape the story with client direction, but the client owns product truth, product logic, and approval.

Note from Olivia review: 2A shaping the demo story is not automatically harder to scope. It is often a normal, clear part of the work.

Note from Olivia review: 2A recording a client-approved product path is not automatically a harder scope than client-provided footage. The risk comes from unclear access, readiness, or approvals, not from capture itself.

Note from Olivia review: all normal video deliverables include expected basics. "One main video only" is not a realistic baseline if captions, thumbnail, and export specs are still part of delivery.

## Product Showcase - Core Scope Modules

Use these modules to build a holistic scope. Scenario rows should not try to carry the whole project by themselves. Each scenario should identify which modules are included, which questions need answers, and which wording changes.

| Module | What it answers | Consultant questions | Draft client-facing language | Notes for app logic |
|---|---|---|---|---|
| Intake and source review | What are we starting from? | What source materials exist? Are they approved? What is missing? | Meet to understand audiences, use cases, objectives, product inputs, and key messages. Review existing, relevant assets provided by the client. | Already exists globally, but Product showcase may need product-specific intake prompts. |
| Product story / demo direction | What does the video need to show? | Has the client identified the product moments, features, claims, or demo path? Does 2A need to shape script/talking points? | Develop product video script or talking points based on client direction and approved product inputs; review, revise, and finalize - scope includes up to [X] review rounds. | This should be separate from source-material status. Client owns product truth; 2A shapes narrative from client direction. |
| Product source materials | What visual/product assets are used? | Will the video use client-provided footage/assets, 2A screen capture, both, or net-new animation? | Use client-provided product footage, screenshots, UI assets, and approved product materials to support the product showcase video. | If unknown, app should block or warn strongly before generating final SOW language. |
| Product screen capture | Does 2A need to record anything? | Does 2A need to record a product path or remote walkthrough? How many sessions? How long? | Conduct [X] remote product screen-capture session(s) to record the approved product flow. | Capture is not automatically harder; it is one activity. Risk comes from unclear access/readiness/approval. |
| SME / talking-head recording | Is there a person explaining the demo on camera or by audio? | Does the client want a subject matter expert recorded as part of the video? Is the SME on camera, voice-only, or only guiding the screen recording? | Conduct [X] remote recording session(s) with client subject matter expert(s) to capture product walkthrough footage and/or narration for the scoped video. | This is different from only recording product screens. Many product demos involve recording the SME walking through the demo. |
| Edit / assembly | What is the core video production work? | Is this mostly trimming/stitching/polish, or a more produced edit with story structure? | Create the product showcase video using approved product materials; review, revise, and finalize - scope includes up to [X] video review rounds. | This is the backbone of most Product showcase scopes. |
| UI motion / supporting graphics | What visual enhancement is included? | None, light callouts/text, supporting UI motion, custom graphics, or custom product animation? | Add supporting graphics, text on screen, product UI callouts, transitions, and/or branded visual elements, as applicable. | Custom graphics or custom product animation can push Standard to Premium/custom. Need clearer thresholds. |
| Voiceover | Is narration included? | No VO, client-provided VO, professional VO, or approved AI VO? Who provides script? | Incorporate approved voiceover, music, and sound effects into the final video, as applicable. | Needs branching. Client-provided VO, professional VO, and AI VO should not share all assumptions/exclusions. |
| Music / sound | What audio polish is included? | Music only? SFX? Audio mix? Client-approved tracks? | Add music and sound effects, as applicable, using licensed or client-approved tracks. | Simple projects may still include music. |
| Deliverables | What does the client receive? | Length, formats, aspect ratios, captions, thumbnail, cutdowns, derivatives? | Final deliverables include [X] final video file(s), text/caption file(s), thumbnail(s), and scoped formats/aspect ratios. | Expected basics should be included by default. Extra versions/cutdowns need separate controls. |
| Review rounds | How many review cycles are included? | How many script/talking-point rounds? How many video rounds? Any separate animation/design rounds? | Review, revise, and finalize - scope includes up to [X] review rounds. | App should let consultant select review rounds instead of relying only on tier defaults. |
| Client responsibilities | What must the client own? | Who approves product accuracy, claims, demo flow, assets, access, VO, and final delivery specs? | Client will provide product direction, approved source materials, consolidated feedback, product accuracy validation, and final delivery specifications. | Product accuracy belongs to client, not 2A. |
| Assumptions / exclusions | What protects the scope? | What is approved? What is not included? What changes would affect scope? | Client-provided product assets are approved for use. Product design, UX design, product strategy, and recreating product UI from scratch are excluded unless separately scoped. | Should be generated from selected modules, not only path/tier. |

### Product Showcase - Default Review Round Pattern

- Script/talking points: 3 rounds - V1, V2, and final.
- Design: 2 rounds - V1 and final.
- Video edit: 3 rounds - V1, V2, and final.

### Product Showcase - Missing App Controls Suggested by Module Review

- Script/talking-point support: none, client-provided, 2A drafts/refines.
- Script/talking-point review rounds.
- Video review rounds.
- Voiceover source: none, client-provided, professional, approved AI.
- Product screen capture: none, one session, multiple sessions/custom.
- Product screen capture session length or notes: for example, up to 30 minutes or up to 60 minutes.
- SME / talking-head recording: none, on-camera SME, voice-only SME, or SME guides the demo recording.
- Motion/supporting graphics depth: none, light callouts/text, supporting UI motion, custom graphics, custom product animation.
- Music/SFX: none, music only, music and SFX/audio mix.
- Deliverable variants: main video only with expected basics, plus cutdowns, plus additional aspect ratios/versions.
- Blocking product-materials state when the consultant cannot identify whether the video uses existing assets, 2A capture, or net-new animation.

## Product Showcase - Proposed App Controls

Draft app-question model based on the reviewed Product showcase matrix. Recommended model level for this content-design pass: Medium. Recommended model level for implementing these controls in `app.js`: High.

### Control 1 - Product Source Materials

**Question:** What product source materials will the video use?

**Input type:** Multi-select.

**Options:**

- Client-provided footage / screen recordings / UI assets
- 2A records product walkthrough
- Custom animated product visuals from approved references
- Not sure / source materials unclear

**Default:** Client-provided footage / screen recordings / UI assets.

**App behavior:**

- If client-provided is selected: include product source materials language.
- If 2A records is selected: include product walkthrough recording module.
- If both client-provided and 2A records are selected: include both modules.
- If custom animated visuals: require Premium-style custom animated graphics language and confirm approved references.
- If not sure: block client-facing output and show an internal warning.

**Output notes:**

- Product accuracy remains client-owned.
- Do not imply 2A independently accesses or configures a product environment.

### Control 2 - Product Story / Script Support

**Question:** What script or story support is included?

**Input type:** Select.

**Options:**

- No script support; client provides final script / talking points
- 2A copy edits client-provided script / talking points
- 2A drafts net-new script / talking points
- Not sure

**Default:** 2A copy edits or drafts script/talking points for Standard and Premium; no script support or client-provided final script/talking points for Simple.

**Follow-up control:** Script/talking-point review rounds.

**Review round default:** 3 rounds - V1, V2, and final.

**App behavior:**

- If 2A drafts net-new: include full script/talking-point scope language.
- If 2A copy edits: include lighter script refinement language.
- If client provides final script/talking points: include client responsibility and approved-script assumption.
- If no script support: do not add script scope.
- If not sure: show internal warning before final SOW language is used.

**Output notes:**

- This is script creation, not product messaging strategy.
- Client owns product truth, product claims, product logic, and approval.

### Control 3 - Product Walkthrough / SME Recording

**Question:** Is 2A recording a product walkthrough or SME?

**Input type:** Select.

**Options:**

- No recording; use client-provided footage/assets
- Record SME/talking head
- Record product walkthrough with SME guiding recording, not included in final video

**Default:** No recording for client-provided assets; SME guides recording for 2A-recorded walkthroughs.

**Follow-up controls:**

- Recording session count: 1, 2, custom
- Session length: up to 30 minutes, up to 60 minutes, custom

**App behavior:**

- If any recording option is selected: include remote recording/product walkthrough language.
- If SME/talking head is selected: include SME/talking-head recording module. The edit may use the recorded video and/or audio as appropriate.
- If SME only guides recording: client responsibility should require SME availability, but deliverables should not imply talking-head footage.

**Output notes:**

- Use "remote product walkthrough recording" rather than only "screen capture" if SME participation is involved.
- Do not include product environment setup language unless a warning/edge case requires it.

### Control 4 - Edit / Assembly Depth

**Question:** What level of edit/assembly is included?

**Input type:** Select.

**Options:**

- Simple stitch/polish of approved product footage
- Produced product demo edit
- Produced edit with custom graphics / heavier design lift

**Default:** Produced product demo edit for Standard; produced edit with custom graphics for Premium.

**Follow-up control:** Video review rounds.

**Review round default:** 3 rounds - V1, V2, and final.

**App behavior:**

- Simple stitch/polish can support Simple if no script/VO/custom graphics are included.
- Produced product demo edit supports Standard.
- Produced edit with custom graphics supports Premium.

**Output notes:**

- This is the backbone of the Product showcase scope.
- Capture/source material language should not replace edit/assembly language.

### Control 5 - Motion / Supporting Graphics

**Question:** What motion or supporting graphics are included?

**Input type:** Select.

**Options:**

- None
- Light UI callouts / highlights
- Supporting UI motion using existing assets
- Custom animated graphics from approved product references

**Default:** Light UI callouts / highlights for Simple; supporting UI motion for Standard; custom animated graphics for Premium.

**App behavior:**

- None: no motion/supporting graphics language.
- Light callouts/highlights: include simple callout/highlight language.
- Supporting UI motion: include Standard motion language using existing client-provided graphics/assets plus design/motion treatment.
- Custom animated graphics: include Premium custom animated graphics language.

**Output notes:**

- Standard supporting UI motion uses existing client-provided graphics/assets, adds design elements as needed, and makes them move.
- Premium custom animated graphics means there is nothing that currently exists like this, and 2A is tasked with creating visuals from scratch.
- Product simulation / unapproved product behavior should not be a normal option here; if needed, it belongs in risk flags.

### Control 6 - Voiceover Source

**Question:** Is voiceover included?

**Input type:** Select.

**Options:**

- None
- Client-provided voiceover
- Approved AI voiceover
- Professional voiceover sourced/recorded by 2A

**Default:** None.

**App behavior:**

- None: no VO language.
- Client-provided: include approved voiceover file responsibility, with MP3 as an example.
- AI VO: include client approval of AI voiceover usage and preferred style/tone.
- Professional VO: include sourcing/recording and approval language; note that this is the VO option most likely to affect cost.

**Output notes:**

- Simple can include no VO, approved AI VO, or client-provided VO.
- Standard can include no VO, AI VO, professional VO, or client-provided VO.
- Premium typically includes professional VO.
- If client later switches from AI VO to professional VO, additional scope/cost may be required.

### Control 7 - Music / Sound

**Question:** What music or sound support is included?

**Input type:** Select.

**Options:**

- None
- Music only
- Music and sound effects / audio mix

**Default:** Music only.

**App behavior:**

- None: no music/SFX language.
- Music only: include stock/licensed/client-approved music language.
- Music and SFX/audio mix: include music, SFX, and audio mix language.

**Output notes:**

- Simple projects may still include music.
- Custom music composition remains excluded unless separately scoped.

### Control 8 - Deliverable Variants

**Question:** What deliverables are included?

**Input type:** Multi-select plus quantity fields.

**Base deliverables:**

- Final video file(s), with scoped formats and aspect ratios
- Text/caption file(s)
- Thumbnail(s)
- Descriptive audio, if selected

**Optional derivative deliverables:**

- Cutdowns from approved edit
- Additional aspect ratios
- Additional versions
- Channel-specific exports

**Format options:** MOV, MP4.

**Aspect ratio options:** 16:9, 9:16, 1:1, 4:5.

**App behavior:**

- Always include expected basics for a normal video.
- Derivative outputs should not automatically change Simple/Standard/Premium.
- If a requested output has distinct content, treat it as a separate net-new video rather than a derivative.
- Consultants should be able to select all applicable format(s), aspect ratio(s), and channel-specific export needs.
- Aspect ratio should be captured for the main video and for each cutdown/derivative group.

**Output notes:**

- Add quantity controls for derivative outputs.
- Keep derivative language tied to the approved edit.
- Descriptive audio should remain an optional deliverable.

### Control 9 - Review Rounds

**Question:** What review sequence is included?

**Input type:** Select/custom controls by review type.

**Defaults:**

- Script/talking points: V1, V2, and final.
- Design: V1 and final.
- Video edit: V1, V2, and final.

**App behavior:**

- Let consultants override review sequences instead of relying only on tier.
- Use the selected sequence in generated scope language.

**Output notes:**

- Preferred phrase: "review, revise, and finalize - scope includes [review sequence]."
- Using the actual sequence avoids ambiguity about whether V1 and final is one round, two rounds, or one feedback cycle.

### Control 10 - Approval / Risk Flags

**Question:** Are any required inputs unclear?

**Input type:** Generated flags based on selected answers, plus manual "not sure" choices.

**Flag states:**

- Product source materials unclear
- Product simulation / unapproved product behavior requested
- Product feature/UI not ready to scope
- Script/VO approach unclear
- Legal/compliance/security feedback not included in review rounds

**App behavior:**

- Blocking flags should prevent final client-facing scope language or show a strong internal warning.
- Non-blocking flags should add assumptions, responsibilities, or internal notes.

**Output notes:**

- Legal/compliance/security review is client-owned and does not determine tier by itself.
- Late legal/compliance/security feedback after final approval may require additional scope.

## Product Showcase - Control-to-Language Map

Draft language rules for turning proposed app controls into SOW output. Recommended model level for this drafting pass: Medium. Recommended model level for implementation and QA: High.

Format note from Olivia review: current 2A scopes may not include separate Client Responsibilities and Exclusions sections in the final sell/SOW format. Keep these fields in the matrix for now because they are useful for internal safeguards, assumptions, and future formatting decisions. Later, decide whether they appear in final client-facing output, internal notes, or a shorter "Scope excludes..." bullet.

### Global Product Showcase Opening

**Always include in Video Scope:**

- Meet to understand audiences, use cases, objectives, product inputs, and key messages.
- Review existing, relevant assets provided by the client.

**Always include in Client Responsibilities:**

- Provide approved product direction, source materials, and product contacts needed for the scoped video.
- Validate product accuracy, including product claims, UI details, feature names, and technical details.
- Provide consolidated feedback and approvals within the scoped review rounds.

**Always include in Exclusions unless contradicted by selected controls:**

- Product design, UX design, product strategy, and recreating product UI from scratch.
- Product claim substantiation, legal review, compliance review, security review, or technical validation by 2A.
- Additional formats, versions, cutdowns, or derivative assets not listed in final deliverables.

### Control 1 - Product Source Materials

**If selected: Client-provided footage / screen recordings / UI assets**

Video Scope:

- Use client-provided product footage, screen recordings, screenshots, UI assets, and approved product materials to support the product showcase video.

Client Responsibilities:

- Provide approved product footage, screen recordings, screenshots, UI assets, product copy, feature documentation, and demo path guidance needed for the scoped video.

Assumptions:

- Client-provided product assets and source materials are approved for use in final deliverables.

**If selected: 2A records product walkthrough**

Video Scope:

- Conduct remote product walkthrough recording session(s) to capture the approved product flow - scope includes up to [X] session(s), [X length] each.

Client Responsibilities:

- Provide product access, approved demo path, and a subject matter expert who can walk through the product demo during recording.

Assumptions:

- Product access, approved demo path, and screen-capture requirements will be confirmed before product recording begins.

Exclusions:

- Capturing additional product flows or additional walkthrough recording sessions beyond those listed in scope.

**If selected: Custom animated product visuals from approved references**

Video Scope:

- Design style frames to align on the visual direction for custom animated product-supporting visuals; review, revise, and finalize - scope includes up to 2 review rounds: V1 and final.
- Create storyboards for scenes using custom animated product visuals; review, revise, and finalize - scope includes up to 2 review rounds: V1 and final.
- Animate approved custom product-supporting visuals using approved product references, product UI, client-provided resources, and approved visual direction; review, revise, and finalize - scope includes up to 2 animation review rounds: V1 and final.

Client Responsibilities:

- Provide approved product references, UI states, product direction, client-provided resources, and stakeholder approval requirements for custom animated product visuals.

Assumptions:

- Approved style frames and storyboards will guide custom animated product visuals.
- Custom animated product visuals will be based on approved product references, client-provided resources, and approved visual direction.

Exclusions:

- Net-new UI design, UX design, product prototyping, product simulation, or inventing product behavior unless separately scoped.

**If selected: Not sure / source materials unclear**

Internal Flag:

- Product materials are required to scope this project. Confirm whether the video will use client-provided footage/assets, 2A product recording, custom animated product visuals, or a combination before generating SOW language.

Output Behavior:

- Block final client-facing scope language until clarified.

### Control 2 - Product Story / Script Support

**If selected: No script support; client provides final script / talking points**

Video Scope:

- Use client-provided final script or talking points to guide the product showcase edit.

Client Responsibilities:

- Provide final approved script or talking points before edit, animation, or voiceover work begins.

Assumptions:

- Client-provided script or talking points are final, approved, and accurate.

**If selected: 2A copy edits client-provided script / talking points**

Video Scope:

- Copy edit client-provided product script or talking points for clarity, flow, and video readiness; review, revise, and finalize - scope includes up to [X] script/talking point review rounds.

Client Responsibilities:

- Provide draft script or talking points, approved product messaging, feature priorities, and consolidated feedback.

Assumptions:

- Client-provided product direction and claims will guide script refinement.

Exclusions:

- Product messaging strategy, product positioning strategy, or product claims development unless separately scoped.

**If selected: 2A drafts net-new script / talking points**

Video Scope:

- Draft product video script or talking points based on approved product inputs and client direction; review, revise, and finalize - scope includes up to [X] script/talking point review rounds.

Client Responsibilities:

- Provide approved product messaging, feature priorities, audience context, source materials, and consolidated feedback.

Assumptions:

- Final script or talking point approval is required before edit, animation, or voiceover work begins.

Exclusions:

- Product messaging strategy, product positioning strategy, or product claims development unless separately scoped.

**If selected: Not sure**

Internal Flag:

- Script/talking-point approach must be confirmed before final SOW language is used.

### Control 3 - Product Walkthrough / SME Recording

**If selected: No recording; use client-provided footage/assets**

Video Scope:

- No additional recording language.

**If selected: Record SME/talking head**

Video Scope:

- Conduct [X] remote recording session(s) with client subject matter expert(s) to capture talking-head footage and/or narration for the scoped video.

Client Responsibilities:

- Identify subject matter expert(s), support scheduling, and provide approved talking points or demo direction before recording.

Assumptions:

- Client subject matter expert(s) will be available for the scoped recording session(s).

Exclusions:

- Additional SME recording sessions, in-person recording, travel, or external equipment kits unless separately scoped.

**If selected: Record product walkthrough with SME guiding recording, not included in final video**

Video Scope:

- Conduct [X] remote product walkthrough recording session(s) with client subject matter expert support to capture the approved product flow for edit.

Client Responsibilities:

- Provide a subject matter expert who can access and walk through the approved product demo during recording.

Assumptions:

- SME participation is for product walkthrough guidance and does not imply talking-head footage will appear in the final video.

Exclusions:

- Talking-head footage, additional product flows, or additional recording sessions unless separately scoped.

### Control 4 - Edit / Assembly Depth

**If selected: Simple stitch/polish of approved product footage**

Video Scope:

- Edit approved product footage or screen recordings into a product showcase clip; review, revise, and finalize - scope includes up to [X] video review rounds.
- Add light polish, timing adjustments, and music as selected.

**If selected: Produced product demo edit**

Video Scope:

- Create a produced product showcase video using approved product materials, script/talking points, product footage, and supporting visual elements; review, revise, and finalize - scope includes up to [X] video review rounds.

**If selected: Produced edit with custom graphics / heavier design lift**

Video Scope:

- Create a produced product showcase video with custom graphics and a heavier design lift using approved product materials, approved style frames/storyboards as applicable, and visual direction; review, revise, and finalize - scope includes up to [X] video review rounds.

Assumptions:

- Approved visual direction and product references will guide custom graphics and edit development.

### Control 5 - Motion / Supporting Graphics

**If selected: None**

Video Scope:

- No motion/supporting graphics language.

**If selected: Light UI callouts / highlights**

Video Scope:

- Add light UI callouts, text on screen, highlights, and/or simple branded elements to support the approved product footage or product story.

**If selected: Supporting UI motion using existing assets**

Video Scope:

- Add supporting UI motion, visual callouts, transitions, and branded elements using approved product materials and existing client-provided assets.

Assumptions:

- Supporting UI motion will be based on approved product materials, screen captures, or visual direction.

**If selected: Custom animated graphics from approved product references**

Video Scope:

- Design style frames to align on the visual direction for custom animated graphics; review, revise, and finalize - scope includes up to 2 review rounds: V1 and final.
- Create storyboards for scenes using custom animated graphics; review, revise, and finalize - scope includes up to 2 review rounds: V1 and final.
- Animate approved custom graphics using approved product UI, client-provided resources, and approved visual direction; review, revise, and finalize - scope includes up to 2 animation review rounds: V1 and final.

Assumptions:

- Approved style frames and storyboards will guide custom animated graphics.
- Custom animated graphics will be based on approved product references, client-provided resources, and approved visual direction.

Exclusions:

- Product simulation, net-new UI design, product prototyping, or recreating product UI from scratch unless separately scoped.

### Control 6 - Voiceover Source

**If selected: None**

Video Scope:

- No voiceover language.

**If selected: Client-provided voiceover**

Video Scope:

- Incorporate client-provided voiceover into the final video, as applicable.

Client Responsibilities:

- Provide final approved voiceover files, such as MP3, in a usable format before edit lock.

Assumptions:

- Client-provided voiceover is final, approved, and usable for the scoped edit.

Exclusions:

- Voiceover recording, talent sourcing, script rewriting, audio repair, or alternate reads unless separately scoped.

**If selected: Approved AI voiceover**

Video Scope:

- Create and incorporate approved AI voiceover into the final video, based on the approved script and client-approved voice style/tone.

Client Responsibilities:

- Confirm AI voiceover usage approval, preferred AI voiceover style/tone, pronunciation guidance, and any legal or brand requirements before production begins.

Assumptions:

- AI voiceover use is subject to client approval and any applicable legal, brand, or platform requirements.

Exclusions:

- Voice cloning, custom voice model creation, legal review, usage clearance, or switching from AI voiceover to professional voiceover unless separately scoped.

Internal Flag:

- If the client later wants professional voiceover instead of AI voiceover, additional scope/cost may be required.

**If selected: Professional voiceover sourced/recorded by 2A**

Video Scope:

- Source and record professional voiceover based on the approved script, then incorporate approved voiceover, music, and sound effects into the final video.

Client Responsibilities:

- Review and approve voiceover script, review professional voiceover talent options, select preferred talent, provide pronunciation guidance, and approve final audio before delivery.

Assumptions:

- Final script approval is required before professional voiceover recording begins.

Exclusions:

- Additional voiceover records, alternate reads, talent usage beyond the scoped deliverables, or custom music composition unless separately scoped.

### Control 7 - Music / Sound

**If selected: None**

Video Scope:

- No music or sound support language.

**If selected: Music only**

Video Scope:

- Add music, as applicable, using licensed or client-approved tracks.

**If selected: Music and sound effects / audio mix**

Video Scope:

- Add music, sound effects, and audio mix, as applicable, using licensed or client-approved tracks.

Exclusions:

- Custom music composition or advanced sound design unless separately scoped.

### Control 8 - Deliverable Variants

**Always include for normal video deliverables:**

Final Deliverables:

- [X] final video file(s), approximately [length] each, scoped format(s) [formats] including [aspect ratio(s)].
- Text/caption file(s).
- Thumbnail(s).
- Descriptive audio, if selected.

**If selected: Cutdowns from approved edit**

Final Deliverables:

- [X] cutdown(s) from the approved product showcase edit, approximately [length] each, scoped format(s) [formats] including [aspect ratio(s)].

Assumptions:

- Cutdowns will be created from the approved product showcase edit.

Exclusions:

- Separate net-new videos with distinct content unless separately scoped.

**If selected: Additional aspect ratios / versions / channel-specific exports**

Final Deliverables:

- Additional scoped export version(s), aspect ratio(s), or channel-specific file(s), as selected.

Assumptions:

- Additional versions are derivative outputs from the approved edit unless separately scoped.

App Control Notes:

- Consultants should be able to select all applicable format(s), aspect ratio(s), and channel-specific export needs.
- Aspect ratio should be captured for the main video and for each cutdown/derivative group.
- Descriptive audio should remain an optional deliverable.

### Control 9 - Review Rounds

**Review wording note:**

- "Review rounds" can be confusing because V1 and final can be described as either one feedback cycle or two delivery milestones. Prefer generating the actual review sequence in the output.

**Default language pattern:**

- Review, revise, and finalize - scope includes [review sequence].
- For V1 and final: review, revise, and finalize - scope includes V1 and final.
- For V1, V2, and final: review, revise, and finalize - scope includes V1, V2, and final.
- For custom: review, revise, and finalize - scope includes [custom review sequence].

**Default counts:**

- Script/talking points: V1, V2, and final.
- Design: V1 and final.
- Video edit: V1, V2, and final.

### Control 10 - Approval / Risk Flags

**If flag: Product source materials unclear**

Internal Flag:

- Product materials are required to scope this project. Confirm whether the video will use client-provided footage/assets, 2A product recording, custom animated product visuals, or a combination before generating SOW language.

**If flag: Product simulation / unapproved product behavior requested**

Internal Flag:

- Product simulation or unapproved product behavior should be reviewed before SOW finalization. The Product showcase builder should not generate final scope language for product behavior that has not been approved.

**If flag: Product feature/UI not ready to scope**

Internal Flag:

- Product feature/UI readiness must be confirmed before final scope language is generated.

**If flag: Script/VO approach unclear**

Internal Flag:

- Script and voiceover approach must be confirmed before final SOW language is used.

**If flag: Legal/compliance/security feedback not included in review rounds**

Assumptions:

- Client feedback will be consolidated before being shared with 2A, including any required product, legal, compliance, security, or customer feedback.

Internal Flag:

- Late legal, compliance, security, or customer feedback after final approval may require additional scope, timeline, or budget.

## Product Showcase - Test Scenarios

Plain-English test cases for the Product showcase path. Recommended model level for drafting/reviewing scenarios: Medium. Recommended model level for implementing and QA testing in the app: High.

Each scenario should eventually be run through the app and compared against expected output.

Format/aspect ratio note: In this matrix, "format" means the delivery file/type such as MOV or MP4, and "aspect ratio" means the frame shape: 16:9, 9:16, 1:1, or 4:5. If 2A scopes usually treat these together, the app can present them together while still storing both pieces of information.

### PS-01 - Simple Stitched UI Clip

**Use case:** Client provides approved product screen recording or UI footage. 2A trims, stitches, lightly polishes, and delivers a short clip for a deck or embed.

**Selected controls:**

- Product source materials: Client-provided footage / screen recordings / UI assets
- Script support: No script support; client provides final script / talking points, or no script needed
- Recording: No recording; use client-provided footage/assets
- Edit depth: Simple stitch/polish of approved product footage
- Motion/graphics: Light UI callouts / highlights, or None
- Voiceover: None
- Music/sound: None or Music only
- Deliverables: Main video with expected basics; selected format/aspect ratio
- Review sequence: Video edit V1, V2, and final unless consultant overrides

**Expected Video Scope:**

- Universal opening bullets.
- Use client-provided product footage, screen recordings, screenshots, UI assets, and approved product materials.
- Edit approved product footage or screen recordings into a product showcase clip; review, revise, and finalize - scope includes selected review sequence.
- Add light UI callouts/highlights only if selected.
- Add music only if selected.

**Expected Deliverables:**

- Final video file(s), approximate length, selected format(s), selected aspect ratio(s).
- Thumbnail(s), if selected.
- Text/caption file(s) and descriptive audio only if VO, narration, talking-head audio, or accessibility requirements are selected.

**Should not appear:**

- Script drafting language.
- SME recording language.
- Professional VO language.
- Custom animated graphics workflow.

### PS-02 - Standard Product Demo With 2A Script And SME-Guided Walkthrough

**Use case:** Client provides direction and product access. 2A drafts talking points, records an SME-guided walkthrough, and creates a produced product demo edit.

**Selected controls:**

- Product source materials: 2A records product walkthrough; optionally client-provided assets
- Script support: 2A drafts net-new script / talking points
- Recording: Record product walkthrough with SME guiding recording, not included in final video
- Edit depth: Produced product demo edit
- Motion/graphics: Supporting UI motion using existing assets
- Voiceover/narration: Select one narration path - SME walkthrough audio used as narration, client-provided VO, approved AI voiceover, or professional voiceover sourced/recorded by 2A
- Music/sound: Music only or Music and sound effects / audio mix
- Deliverables: Main video with expected basics
- Review sequence: Script V1, V2, and final; Video edit V1, V2, and final

**Expected Video Scope:**

- Universal opening bullets.
- Draft product video script or talking points based on approved product inputs and client direction.
- Conduct remote product walkthrough recording session(s) to capture the approved product flow - scope includes selected session count and length.
- Create a produced product showcase video using approved product materials, script/talking points, product footage, and supporting visual elements.
- Add supporting UI motion, visual callouts, transitions, and branded elements using approved product materials and existing client-provided assets.

**Expected Deliverables:**

- Final video file(s), approximate length, selected format(s), selected aspect ratio(s).
- Text/caption file(s), thumbnail(s), and optional descriptive audio.

**Should not appear:**

- Talking-head deliverable language unless SME/talking-head is selected.
- Voiceover/narration set to None.
- Professional VO or AI VO language unless selected as the narration path.
- Custom animation style-frame/storyboard workflow.

### PS-03 - Standard Product Demo With AI Voiceover

**Use case:** 2A drafts script/talking points, client provides approved source assets or 2A records the product walkthrough, client approves AI voice style/tone, and 2A creates a produced product demo with AI VO.

**Selected controls:**

- Product source materials: Client-provided assets and/or 2A records product walkthrough
- Script support: 2A drafts net-new script / talking points
- Recording: No recording only if client provides approved product footage/assets; otherwise record product walkthrough with SME guiding recording, not included in final video
- Edit depth: Produced product demo edit
- Motion/graphics: Supporting UI motion using existing assets
- Voiceover: Approved AI voiceover
- Music/sound: Music and sound effects / audio mix
- Deliverables: Main video with expected basics
- Review sequence: Script V1, V2, and final; Video edit V1, V2, and final

**Expected Video Scope:**

- Include product source material or product walkthrough recording language based on selected source.
- Draft product video script or talking points.
- Create and incorporate approved AI voiceover into the final video, based on the approved script and client-approved voice style/tone.
- Create a produced product showcase video using approved materials and supporting visual elements.
- Add music, sound effects, and audio mix as selected.

**Expected Assumptions / Flags:**

- AI voiceover use is subject to client approval and any applicable legal, brand, or platform requirements.
- If client later wants professional voiceover instead of AI voiceover, additional scope/cost may be required.

**Should not appear:**

- Professional VO talent selection language.
- Client-provided MP3 responsibility.

### PS-04 - Premium Custom Animated Graphics

**Use case:** Client needs a Premium produced product showcase with custom animated graphics created from approved product references and client resources. This usually implies a fuller 2A-led workflow: 2A drafts the script/talking points, 2A records the needed product walkthrough/SME content, and 2A creates the produced edit.

**Selected controls:**

- Product source materials: Custom animated product visuals from approved references plus 2A-recorded product walkthrough/SME content and client-provided resources as needed
- Script support: 2A drafts net-new script / talking points
- Recording: 2A records product walkthrough and/or SME content needed for the edit
- Edit depth: Produced edit with custom graphics / heavier design lift
- Motion/graphics: Custom animated graphics from approved product references
- Voiceover: Professional voiceover sourced/recorded by 2A, unless changed
- Music/sound: Music and sound effects / audio mix
- Deliverables: Main video with expected basics; optional cutdowns/versions
- Review sequence: Script V1, V2, and final; Style frames V1 and final; Storyboards V1 and final; Animation V1 and final; Video edit V1, V2, and final

**Expected Video Scope:**

- Include product walkthrough/SME recording language unless the consultant explicitly confirms existing approved source content is sufficient.
- Draft or refine script/talking points as selected.
- Design style frames to align on visual direction for custom animated graphics.
- Create storyboards for scenes using custom animated graphics.
- Animate approved custom graphics using approved product UI, client-provided resources, and approved visual direction.
- Create a produced product showcase video with custom graphics and a heavier design lift.
- Add professional VO, music, sound effects, and audio mix if selected.

**Expected Assumptions:**

- Approved style frames and storyboards will guide custom animated graphics.
- Custom animated graphics will be based on approved product references, client-provided resources, and approved visual direction.

**Should not appear:**

- Product simulation or net-new UI design language as included scope.
- Blocking warning if approved references are confirmed.
- Treating Premium custom animated graphics as a light add-on to existing client screen capture unless that exception is intentionally scoped.

### PS-05 - Client-Provided Voiceover

**Use case:** Client provides a final approved VO file, and 2A edits the product showcase to that VO using client-provided product footage/assets or 2A-recorded product walkthrough footage.

**Selected controls:**

- Product source materials: Client-provided footage/assets and/or 2A records product walkthrough
- Voiceover: Client-provided voiceover
- Script support: No script support; client provides final approved VO
- Edit depth: Simple stitch/polish or Produced product demo edit
- Music/sound: Music only or Music and sound effects / audio mix

**Expected Video Scope:**

- Include product source material or product walkthrough recording language based on selected source.
- Incorporate client-provided voiceover into the final video, as applicable.
- Edit/assembly language based on selected edit depth.

**Expected Client Responsibilities / Internal Notes:**

- Provide final approved voiceover files, such as MP3, in a usable format before edit lock.

**Should not appear:**

- Professional VO sourcing/talent language.
- AI voiceover style/tone language.
- Voiceover recording language.

### PS-06 - Product Walkthrough Plus Talking-Head SME

**Use case:** 2A records an SME/talking head and product walkthrough for the product showcase edit, typically in the same remote recording session with separate tracks available.

**Selected controls:**

- Product source materials: 2A records product walkthrough; optionally client-provided assets
- Script support: 2A drafts or copy edits script/talking points
- Recording: Record SME/talking head
- Edit depth: Produced product demo edit
- Motion/graphics: Select one - Light UI callouts / highlights, Supporting UI motion using existing assets, or Custom animated graphics if the design lift is Premium
- Voiceover: None, unless SME audio functions as narration
- Music/sound: Music and sound effects / audio mix

**Expected Video Scope:**

- Conduct remote recording session(s) with client subject matter expert(s) to capture talking-head footage and/or narration and the approved product walkthrough, as applicable.
- Create a produced product showcase video using approved materials, SME footage/audio, product footage, and supporting visual elements.

**Expected Exclusions:**

- Additional SME recording sessions, in-person recording, travel, or external equipment kits unless separately scoped.

**Should not appear:**

- Professional VO sourcing language unless professional VO is also selected.
- Statement that SME is not included in final video.

### PS-07 - Main Video Plus Derivative Cutdowns

**Use case:** Client needs a main product showcase video plus cutdowns from the approved edit.

**Selected controls:**

- Deliverables: Main video with expected basics; Cutdowns from approved edit
- Cutdown quantity: [X]
- Cutdown length: [length]
- Cutdown format(s): [formats]
- Cutdown aspect ratio(s): [aspect ratios]

**Expected Deliverables:**

- [X] final video file(s), approximately [length] each, scoped format(s) [formats] including [aspect ratio(s)].
- [X] cutdown(s) from the approved product showcase edit, approximately [length] each, scoped format(s) [formats] including [aspect ratio(s)].
- Text/caption file(s), thumbnail(s), descriptive audio if selected.

**Expected Assumptions:**

- Cutdowns will be created from the approved product showcase edit.

**Should not appear:**

- Treating cutdowns as separate net-new videos.
- Automatic tier escalation based only on derivative outputs.

### PS-08 - Blocking Scenario: Product Materials Unclear

**Use case:** Consultant cannot confirm whether the video uses client-provided assets, 2A recording, custom animated product visuals, or another source.

**Selected controls:**

- Product source materials: Not sure / source materials unclear

**Expected Internal Flag:**

- Product materials are required to scope this project. Confirm whether the video will use client-provided footage/assets, 2A product recording, custom animated product visuals, or a combination before generating SOW language.

**Expected Output Behavior:**

- Block final client-facing scope language until clarified.

**Should not appear:**

- Confident client-facing product showcase scope language.

### PS-09 - Blocking Scenario: Product Simulation Or Unapproved Behavior

**Use case:** Client asks 2A to show product behavior that does not exist or has not been approved.

**Selected controls / flag:**

- Product simulation / unapproved product behavior requested

**Expected Internal Flag:**

- Product simulation or unapproved product behavior should be reviewed before SOW finalization. The Product showcase builder should not generate final scope language for product behavior that has not been approved.

**Expected Output Behavior:**

- Block or strongly warn before final client-facing SOW language is used.

**Should not appear:**

- Product simulation, net-new UI design, or invented product behavior as included scope.

## Product Showcase - Implementation Plan

Recommended model level for implementation planning, coding, and QA: High.

Goal: replace the current shallow Product showcase path with a module-driven Product showcase workflow that can generate accurate scope language for simple UI clips, standard product demos, Premium custom animated graphics, VO/SME recording paths, derivative deliverables, and blocking conditions.

### 1. Current App Controls To Replace Or Expand

Current Product showcase controls in `app.js`:

- `primaryVideoCount`
- `videoLength`
- `scriptSupport`
- `visualPlanning`
- `productAssets`
- `uiAnimation`
- `voiceover`
- `supportingGraphics`
- global `motionDuration`
- global `liveCapture`
- global `descriptiveAudio`

Recommended Product showcase-specific replacement/expansion:

- Replace `productAssets` select with multi-select `productSourceMaterials`.
- Replace or supplement `scriptSupport` with Product-specific `productScriptSupport`.
- Add `productWalkthroughRecording`.
- Add `productRecordingSessionCount`.
- Add `productRecordingSessionLength`.
- Replace `uiAnimation` and `supportingGraphics` with `productMotionGraphicsDepth`.
- Keep `voiceover`, but revise options/language to match VO source logic.
- Add `musicSoundSupport`.
- Add Product-specific deliverable controls for formats, aspect ratios, cutdowns, and derivative versions.
- Replace hard-coded review-round assumptions with selectable review sequences.

### 2. Proposed Product Showcase Control Schema

Use these as implementation-facing field names unless app structure suggests better local names.

| Field | Type | Options / values | Notes |
|---|---|---|---|
| `productSourceMaterials` | multi-select | `client-assets`, `2a-records-walkthrough`, `custom-animated-visuals`, `not-sure` | If `not-sure`, block final client-facing output. |
| `productScriptSupport` | select | `client-final-script`, `2a-copy-edit`, `2a-net-new`, `not-sure` | If `not-sure`, show internal warning. |
| `productWalkthroughRecording` | select | `none`, `sme-talking-head`, `sme-guided-walkthrough` | `sme-talking-head` may use video and/or audio in the edit. |
| `productRecordingSessionCount` | select/number | `1`, `2`, `custom` | Render only when recording is selected. |
| `productRecordingSessionLength` | select | `up to 30 minutes`, `up to 60 minutes`, `custom` | Render only when recording is selected. |
| `productEditDepth` | select | `simple-stitch-polish`, `produced-demo-edit`, `produced-custom-graphics` | Drives Simple/Standard/Premium language. |
| `productMotionGraphicsDepth` | select | `none`, `light-callouts`, `supporting-ui-motion`, `custom-animated-graphics` | Product simulation stays a flag, not a normal option. |
| `voiceover` | select | `none`, `client-provided`, `ai`, `professional` | Existing field can be reused if options are compatible. |
| `musicSoundSupport` | select | `none`, `music-only`, `music-sfx-audio-mix` | Simple projects may still include music. |
| `productMainFormats` | multi-select | `MOV`, `MP4` | Required for main video deliverable. |
| `productMainAspectRatios` | multi-select | `16:9`, `9:16`, `1:1`, `4:5` | Required for main video deliverable. |
| `productCutdownCount` | number | `0+` | If greater than 0, render cutdown controls/language. |
| `productCutdownLength` | select/text | app-defined length options plus custom | Required if cutdowns selected. |
| `productCutdownFormats` | multi-select | `MOV`, `MP4` | Required if cutdowns selected. |
| `productCutdownAspectRatios` | multi-select | `16:9`, `9:16`, `1:1`, `4:5` | Required if cutdowns selected. |
| `productDerivativeVersions` | number/select | `0+` or named version controls | Optional later enhancement. |
| `productScriptReviewSequence` | select/custom | `V1, V2, and final`, `V1 and final`, `custom` | Use actual sequence in output. |
| `productDesignReviewSequence` | select/custom | `V1 and final`, `custom` | Used for style frames/storyboards. |
| `productAnimationReviewSequence` | select/custom | `V1 and final`, `custom` | Used for custom animation. |
| `productVideoReviewSequence` | select/custom | `V1, V2, and final`, `V1 and final`, `custom` | Use actual sequence in output. |
| `productApprovalRisk` | multi-select/manual flags | `legal-feedback-not-in-rounds`, `product-ui-not-ready`, `product-simulation-requested` | Drives warnings/assumptions. |

### 3. Conditional UI Rules

- If `productSourceMaterials` includes `not-sure`, show a blocking warning and do not generate final client-facing Product showcase scope language.
- If `productSourceMaterials` includes `2a-records-walkthrough`, show recording controls.
- If `productWalkthroughRecording` is not `none`, show recording session count and session length controls.
- If `productSourceMaterials` includes `custom-animated-visuals` or `productMotionGraphicsDepth` is `custom-animated-graphics`, show design and animation review sequence controls.
- If `productMotionGraphicsDepth` is `custom-animated-graphics`, default `productEditDepth` to `produced-custom-graphics`.
- If `productScriptSupport` is `2a-net-new` or `2a-copy-edit`, show script review sequence controls.
- If `voiceover` is `professional`, include professional VO talent selection responsibility/language.
- If `voiceover` is `ai`, include AI usage/style approval language and warning that switching to professional VO may add scope/cost.
- If `voiceover` is `client-provided`, include MP3/usable-file responsibility.
- If `productCutdownCount` is greater than 0, show cutdown length, format, and aspect-ratio controls.
- If descriptive audio is selected in deliverable controls, include it in deliverables for Product showcase.
- If no VO, narration, talking-head audio, or accessibility requirement is selected, do not include text/caption files by default for simple silent UI clips.

### 4. Tier Recommendation Rules

Keep tier selection user-controlled, but improve `not sure` recommendation logic:

- Recommend Simple when:
  - source is client-provided assets only;
  - edit depth is simple stitch/polish;
  - no 2A script work;
  - no recording;
  - no VO or only client-provided/AI VO;
  - no custom animated graphics.
- Recommend Standard when:
  - 2A drafts/copy edits script or talking points;
  - 2A records product walkthrough or SME-guided recording;
  - produced product demo edit;
  - supporting UI motion using existing assets;
  - AI/client/professional VO may be included.
- Recommend Premium when:
  - edit depth is produced custom graphics/heavier design lift;
  - motion/graphics depth is custom animated graphics;
  - custom style frames/storyboards/animation are included;
  - professional VO is typical but not the only Premium signal.
- Do not recommend a tier when:
  - source materials are not sure/unclear;
  - product behavior is unapproved or simulation is requested;
  - product feature/UI is not ready to scope.

### 5. Generator Refactor Plan

Implement Product showcase as a dedicated branch instead of relying on the generic narrative branch.

Recommended function shape:

- `buildProductShowcaseScopeBullets(tier)`
- `buildProductShowcaseDeliverables()`
- `buildProductShowcaseResponsibilities()`
- `buildProductShowcaseAssumptions(tier)`
- `buildProductShowcaseExclusions(tier)`
- `buildProductShowcaseFlags()`
- helper: `getProductReviewSequence(type)`
- helper: `hasProductNarrationOrAudio()`
- helper: `getProductFormatAspectText(formats, ratios)`

Keep existing global cleaners/formatters:

- `cleanGeneratedOutput`
- `formatSowSection`
- `renderMarkdown`
- duplicate filtering for universal opening bullets

### 6. Output Rules

Video Scope should assemble modules in this order:

1. Universal opening bullets.
2. Script/talking-point work, if selected.
3. Product source materials and/or product walkthrough recording.
4. SME/talking-head recording, if selected.
5. Style frames/storyboards/animation workflow, if custom animated graphics are selected.
6. Edit/assembly language.
7. Motion/supporting graphics language, if not already covered by custom animation workflow.
8. VO language, if selected.
9. Music/sound language, if selected.
10. Package final files and deliver assets.

Deliverables should include:

- Main final video file(s), approximate length, selected format(s), and selected aspect ratio(s).
- Text/caption file(s) only when VO, narration, talking-head audio, or accessibility requirements are selected.
- Thumbnail(s) by default, unless removed.
- Descriptive audio, if selected.
- Cutdowns with quantity, approximate length, selected format(s), and selected aspect ratio(s).

Assumptions should include, as applicable:

- Client-provided assets are approved for use.
- Final script/talking-point approval is required before edit, animation, or VO work begins.
- Approved style frames and storyboards will guide custom animated graphics.
- AI voiceover is subject to client approval and applicable requirements.
- Cutdowns are created from the approved product showcase edit.
- Client feedback is consolidated, including product/legal/compliance/security feedback where applicable.

Exclusions/internal safeguards should include, as applicable:

- Product design, UX design, product strategy, and recreating product UI from scratch.
- Product simulation, product prototyping, or inventing product behavior unless separately scoped.
- Additional recording sessions or product flows beyond scoped session count.
- Additional formats, aspect ratios, cutdowns, versions, or derivative assets not listed in deliverables.
- Legal/compliance/security review or product claim substantiation by 2A.

### 7. Blocking And Warning Behavior

Blocking output:

- `productSourceMaterials` includes `not-sure`.
- Product simulation/unapproved product behavior requested.
- Product feature/UI not ready to scope.

Blocking output should show an internal warning and avoid generating confident client-facing Product showcase scope.

Non-blocking warnings:

- Script/VO approach unclear.
- Legal/compliance/security feedback not included in review rounds.
- AI VO selected, with note that switching to professional VO may add scope/cost.
- Custom review sequence selected and needs manual review.

### 8. QA Plan

After implementation, run each Product showcase test scenario:

- PS-01 - Simple Stitched UI Clip
- PS-02 - Standard Product Demo With 2A Script And SME-Guided Walkthrough
- PS-03 - Standard Product Demo With AI Voiceover
- PS-04 - Premium Custom Animated Graphics
- PS-05 - Client-Provided Voiceover
- PS-06 - Product Walkthrough Plus Talking-Head SME
- PS-07 - Main Video Plus Derivative Cutdowns
- PS-08 - Blocking Scenario: Product Materials Unclear
- PS-09 - Blocking Scenario: Product Simulation Or Unapproved Behavior

For each scenario, verify:

- Expected Video Scope language appears.
- Expected deliverables appear.
- Required flags appear.
- Excluded language does not appear.
- Copy-to-clipboard output matches the formatted preview content.
- No checkbox syntax or raw UI labels appear in generated output.

### 9. Implementation Order

Recommended implementation sequence:

1. Add Product showcase-specific controls in `pathConfigs`.
2. Add render/conditional logic for multi-select, recording controls, cutdown controls, and review-sequence controls.
3. Add Product showcase helper functions.
4. Replace Product showcase generic narrative output with dedicated Product showcase generator functions.
5. Update tier recommendation logic for Product showcase.
6. Update flags/blocking behavior.
7. Run syntax check.
8. Run manual browser QA against PS-01 through PS-09.
9. Update `LANGUAGE_MATRIX.md` with any discoveries from implementation.

### 10. Implementation Decisions

- Thumbnails should be included by default, with an option to remove if needed.
- Text/caption files should be included by default for any video with any type of voiceover or narration.
- Descriptive audio should move into deliverable controls because it is required only for certain client accounts.
- Multi-select controls should appear as "check all that apply" checkbox groups in the current simple UI.
- V1 implementation should use fixed review sequence options only. Inline/client-editable review customization can come later with a broader editable-output workflow.

## Product Showcase - Draft Matrix

These rows are now scenario modifiers, not complete scopes. Each row should point back to the core modules above.

### P-01 - Approved Client UI Assets, Simple Product Edit

**Trigger / inputs:** Client provides approved screen recording, screenshots, UI assets, or product footage. Product story and demo flow are already clear.

**Core modules likely included:** Intake and source review; Product source materials; Edit / assembly; Music / sound as selected; Deliverables; Review rounds; Client responsibilities; Assumptions / exclusions.

**Core modules to confirm:** Product story / demo direction; UI motion / supporting graphics; Voiceover.

**Likely tier:** Simple if this is mostly trimming, stitching, light polish, music, and standard delivery. Standard if 2A is also shaping script/talking points, adding VO, or adding meaningful motion/supporting graphics.

**Consultant question:** Are the product assets and demo path already approved for use in the final video?

**Client-facing scope language:** Use client-provided product footage, screenshots, UI assets, and approved product materials to create a product showcase video; review, revise, and finalize - scope includes up to [X] review rounds.

**Client responsibilities:** Provide approved product assets, copy, screenshots, recordings, feature documentation, and demo path guidance needed for the scoped video.

**Assumptions:** Client-provided product assets and source materials are approved for use in final deliverables.

**Exclusions:** Product design, UX design, product strategy, and recreating product UI from scratch.

**Internal note:** Product accuracy review does not automatically make this Standard because 2A is not responsible for product truth. The client owns product accuracy, especially when the client provides the demo footage/assets. This scenario is not a full scope by itself; it still needs module answers for script, VO, music, graphics/motion, deliverables, and review rounds. The app should eventually let the consultant choose the number of review rounds instead of hard-coding them by tier.

**Review ask:** Should this default to 3 video review rounds, or should a very light/simple edit allow fewer?

**Olivia note:** Reviewed and generally accepted. This is a real but less common case: up to 60-second screen capture stitched together with light edit polish. Need separate controls for music, script, VO, custom graphics, and whether it is truly just a straight UI video. Premium could apply if custom graphics are included.

### P-02 - Client Assets Exist, But Demo Flow Is Not Approved

**Trigger / inputs:** Client has UI assets or recordings, but the story path, clicks, feature sequence, or product claims are not final.

**Likely tier:** Standard if the client can tell 2A what they want to show and 2A shapes that into script/talking points and edit flow. Needs review if the client cannot provide product direction.

**Consultant question:** Has the client identified what product moments, features, or proof points need to be shown, even if the script/talking points still need to be shaped?

**Client-facing scope language:** Review existing product materials provided by client and develop a product video script or talking points based on client direction; review, revise, and finalize - scope includes up to [X] script/talking point review rounds. Once approved, create the product showcase video using approved product materials; review, revise, and finalize - scope includes up to [Y] video review rounds.

**Client responsibilities:** Provide product direction, approved feature priorities, source materials, and final approval of the product script/talking points before edit or animation work begins.

**Assumptions:** Final product story, messaging, and demo flow approval is required before edit or animation work begins.

**Exclusions:** Product positioning strategy, product roadmap decisions, UX design, and product claim development unless separately scoped.

**Internal note:** Do not say 2A invents the demo logic. 2A can shape the narrative from client direction, but the client needs to tell 2A what the product needs to show. This row needs additional branching for script, VO, music, and whether VO is client-provided, professional, or AI. Also confirm whether the video includes SME/talking-head recording, because many demos use a subject matter expert walking through the product.

**Review ask:** Reviewed and generally accepted. Normal steps captured from Olivia: intake/source review; draft script or talking points from provided recordings/materials and client direction; product video decision; VO/SME/talking-head decision; edit; final delivery. If there is a remote SME recording session, include that as its own module.

### P-03 - Product Materials Are Unclear

**Trigger / inputs:** Consultant selects "Not sure" for product materials, or the source mix is vague.

**Likely tier:** Do not recommend a tier yet.

**Consultant question:** Will the final video be built from client-provided footage/assets, 2A capture, or net-new product animation?

**Client-facing scope language:** Do not generate client-facing scope language until product source materials are confirmed.

**Client responsibilities:** Not applicable until the consultant confirms what materials exist.

**Assumptions:** Not applicable until the consultant confirms what materials exist.

**Exclusions:** Not applicable until the consultant confirms what materials exist.

**Internal note:** This should behave more like a blocking error than a normal warning. The consultant should go back to the client and get the necessary information before scoping.

**Review ask:** Reviewed and generally accepted as a blocking/parked scenario. Draft exact app warning copy. Current thought: "Product materials are required to scope this project. Confirm whether the video will use client-provided footage/assets, 2A product capture, or net-new animation before generating SOW language."

### P-04 - 2A Records A Defined Product Walkthrough

**Trigger / inputs:** Client can provide product access and a defined demo path. 2A records the product demo remotely, usually with an SME walking through the demo.

**Likely tier:** Standard.

**Consultant question:** Is 2A only recording the product screen/demo path, or also recording a subject matter expert talking through the demo?

**Client-facing scope language:** Conduct one remote recording session to capture the approved product walkthrough with client subject matter expert support. Use captured product footage, client-provided product materials, and approved script/talking points to create a product showcase video; review, revise, and finalize - scope includes up to [X] video review rounds.

**Client responsibilities:** Provide product access, approved demo path, and a subject matter expert who can walk through the product demo during recording.

**Assumptions:** Product access, approved demo path, and screen-capture requirements will be confirmed before product recording begins.

**Exclusions:** Capturing additional product flows, additional SME recording sessions, or recreating product UI beyond the scoped session unless separately scoped.

**Internal note:** Capturing screens is only one activity inside the broader product showcase scope. In practice, 2A often screen records with the SME who has product access, rather than entering a test environment independently. The app should not let capture language replace the script/story/edit language.

**Review ask:** Reviewed and generally accepted. Should this module be named "remote product walkthrough recording" instead of "product screen capture"?

### P-05 - Product Access Or Environment Setup Is Unclear

**Trigger / inputs:** Capture is needed, but product access, environment readiness, permissions, test data, or demo readiness is unknown.

**Likely tier:** Parked / less common. Do not overbuild this unless it becomes a real scoping need.

**Consultant question:** Is the product environment ready for recording, with approved sample data and a stable demo flow?

**Client-facing scope language:** Confirm product access, demo path, and recording approach before finalizing the SOW.

**Client responsibilities:** Provide the SME, access, approved demo path, and any materials needed to record the product walkthrough.

**Assumptions:** Recording assumes the client or SME can access and walk through the approved product demo at the time of recording.

**Exclusions:** Product environment setup, QA, troubleshooting, sample data creation, or product configuration unless separately scoped.

**Internal note:** Olivia note: 2A typically does not enter a test environment to record demos independently. More often, 2A screen records with someone who already has access and can walk through the demo. This row may not be a common enough scenario to deserve much app logic.

**Review ask:** Olivia says park this. It is not very relevant because 2A usually records with someone who already has access rather than independently accessing a product environment.

### P-06 - Light UI Motion From Approved Screens

**Trigger / inputs:** Client has approved UI screens or recordings; 2A adds light motion, callouts, zooms, transitions, or emphasis.

**Likely tier:** Simple if it is a short, utility-style product clip with light callouts and no script/VO/music. Standard if it is a produced product demo with story structure, script/VO/SME recording, music, or more developed edit flow.

**Consultant question:** Is this a short, utility-style product clip for a deck or embed, or a fuller product demo with script, VO/SME, music, and edit structure?

**Client-facing scope language:** Add light UI callouts, text on screen, highlights, transitions, and/or branded visual elements to support the approved product footage or product story.

**Client responsibilities:** Approve product UI source assets and confirm that highlighted UI details, feature names, and product claims are accurate.

**Assumptions:** Product UI motion will be based on approved product materials, screen captures, or visual direction.

**Exclusions:** Net-new UI animation, product simulation, or recreating product functionality unless separately scoped.

**Internal note:** There are two different cases here: a simple 20-second style clip showing a click path, possibly with red boxes/callouts and no VO/music; and a more standard product demo with narrative, VO/SME, music, and light motion. The app needs to distinguish those.

**Review ask:** Reviewed and generally accepted. Should the control use "light UI callouts/highlights" instead of "light UI motion" for the simpler case?

### P-07 - Moderate UI Motion Or Product Walkthrough Polish

**Trigger / inputs:** The video needs more developed UI motion, stitched screen moments, animated product flows, or heavier visual explanation.

**Likely tier:** Premium or Standard-plus.

**Consultant question:** Are we animating around real product captures, or creating product behavior that does not exist in source assets?

**Client-facing scope language:** Add product UI motion, visual callouts, transitions, and supporting motion graphics based on approved product materials and visual direction.

**Premium language option:** Create custom animated graphics using approved product UI, client-provided resources, and approved visual direction to support the product showcase video.

**Client responsibilities:** Provide approved product references and validate technical, product, legal, and compliance accuracy before final delivery.

**Assumptions:** Product UI animation will be based on approved product materials, screen captures, or visual direction.

**Exclusions:** Product simulation, net-new UI design, product prototyping, or recreating product UI from scratch unless separately scoped.

**Internal note:** The app currently has "Moderate UI motion" as a choice, but language is still broad. Premium may include a heavier design lift, including creating more visuals from scratch using product UI and client-provided resources, rather than using mostly templated or existing assets.

**Review ask:** Reviewed. Standard supporting UI motion uses existing client-provided graphics/assets, adds design elements as needed, and makes them move. Premium custom animated graphics means there is nothing that currently exists like this, and 2A is tasked with creating visuals from scratch.

### P-08 - Custom Product Animation / From-Scratch Visual Build

**Trigger / inputs:** Client wants custom animated product visuals, or 2A needs to create product-supporting visual assets from scratch using approved product references and client-provided resources.

**Likely tier:** Premium when the product behavior, UI references, and approval path are clear. Flag/block only if approved source references are missing or the ask requires product simulation, UX design, or inventing product behavior.

**Consultant question:** Are we creating custom animated visuals based on approved product references, or are we being asked to design/simulate product behavior that has not been approved?

**Client-facing scope language:** Create custom animated product-supporting visuals using approved product references, product UI, and client-provided resources; review, revise, and finalize - scope includes up to [X] design/animation review rounds.

**Client responsibilities:** Provide approved product references, UI states, product direction, client-provided resources, and stakeholder approval requirements for custom animated product visuals.

**Assumptions:** Custom animated product visuals will be based on approved product references, client-provided resources, and approved visual direction.

**Exclusions:** Net-new UI design, UX design, product prototyping, product simulation, or inventing product behavior unless separately scoped.

**Internal note:** Do not automatically force custom scoping. Premium can include custom animated graphics and a heavier design lift. Use a flag/blocking warning only when the client lacks approved source references or expects 2A to create product behavior/UI logic from scratch.

**Review ask:** Reviewed. "Blocked product simulation" does not need to be a normal selectable app choice; it should be a flag/warning state.

### P-09 - Product Claims Need Legal, Compliance, Or Security Review

**Trigger / inputs:** Product claims, regulated language, security claims, customer claims, or technical details need special approval.

**Likely tier:** Does not determine tier by itself.

**Consultant question:** Who validates product, legal, compliance, security, and customer claim accuracy?

**Client-facing scope language:** Incorporate approved product messaging and feature/value proof points into the video narrative, with client responsible for validating all product, legal, compliance, and technical accuracy.

**Client responsibilities:** Validate technical, product, legal, customer, security, and compliance accuracy, including product claims, UI details, and feature/value proof points.

**Assumptions:** Client feedback will be consolidated before being shared with 2A, including any required product, legal, compliance, security, or customer feedback.

**Exclusions:** Legal review, compliance review, security review, product claim substantiation, or technical validation by 2A.

**Internal note:** Legal/compliance/security review is client-owned and does not automatically affect scope. It affects scope when the client does not include those reviewers in the scoped review rounds and later reopens work after final approval.

**Review ask:** Add language that late legal/compliance/security feedback after final approval may require additional scope.

### P-10 - Professional Voiceover Included

**Trigger / inputs:** Professional voiceover is selected.

**Likely tier:** Standard or Premium when 2A sources/records professional voice talent. Integrating an already-approved recording can be Simple.

**Consultant question:** Is 2A sourcing/recording voice talent, or only integrating an approved recording?

**Client-facing scope language:** Incorporate approved voiceover, music, and sound effects into the final video, as applicable.

**Client responsibilities:** Review and approve voiceover script, pronunciation guidance, talent direction, and final audio before delivery.

**Assumptions:** Final script approval is required before voiceover recording, design, animation, or edit work begins.

**Exclusions:** Additional voiceover records, alternate reads, talent usage beyond the scoped deliverables, or custom music composition unless separately scoped.

**Internal note:** The app currently distinguishes professional, client-provided, AI, and none, but output language does not fully reflect those differences. Simple is usually no VO, approved AI VO, or client-provided VO. Standard can include no VO, AI VO, professional VO, or client-provided VO. Premium typically includes professional VO. Professional VO is the option that most directly affects cost.

**Review ask:** Separate professional VO cost/sourcing language from basic VO integration language.

### P-11 - Client-Provided Voiceover

**Trigger / inputs:** Client provides the final voiceover recording.

**Likely tier:** Simple or Standard.

**Consultant question:** Is the voiceover final and usable, or will 2A need to clean up timing/audio?

**Client-facing scope language:** Incorporate client-provided voiceover, music, and sound effects into the final video, as applicable.

**Client responsibilities:** Provide final approved voiceover files, such as MP3, in a usable format before edit lock.

**Assumptions:** Client-provided voiceover is final, approved, and usable for the scoped edit.

**Exclusions:** Voiceover recording, talent sourcing, script rewriting, audio repair, or alternate reads unless separately scoped.

**Internal note:** This should be separate from professional VO so assumptions and exclusions are cleaner.

**Review ask:** Reviewed. Use MP3 as the example file type. No extra timing caveat needed; the VO should map to the scoped length of the video.

### P-12 - AI Voiceover

**Trigger / inputs:** AI voiceover is selected.

**Likely tier:** Needs policy/process review.

**Consultant question:** Is AI voiceover approved for this client, usage, audience, and delivery channel?

**Client-facing scope language:** Incorporate approved voiceover, music, and sound effects into the final video, as applicable.

**Client responsibilities:** Confirm AI voiceover usage approval, preferred AI voiceover style/tone, pronunciation guidance, and any legal or brand requirements before production begins.

**Assumptions:** AI voiceover use is subject to client approval and any applicable legal, brand, or platform requirements.

**Exclusions:** Voice cloning, custom voice model creation, legal review, usage clearance, or switching from AI voiceover to professional voiceover unless separately scoped.

**Internal note:** If the client does not like the AI voiceover and later wants professional voiceover, additional scope/cost may be required.

**Review ask:** Find the best 2A phrase for AI voiceover "style/tone" selection.

### P-13 - Multiple Versions, Aspect Ratios, Or Cutdowns

**Trigger / inputs:** Client needs more than one version, extra ratios, social cutdowns, vertical versions, product-feature variants, or channel-specific edits.

**Likely tier:** Does not determine tier by itself. Simple, Standard, or Premium can include derivative outputs depending on the complexity of the main video and quantity of outputs.

**Consultant question:** Are these derivative outputs from one approved edit, or are they separate net-new videos?

**Client-facing scope language:** Create scoped derivative versions from the approved product showcase edit, with formats, aspect ratios, and quantities confirmed before production begins.

**Client responsibilities:** Confirm final delivery specifications, including file format, aspect ratio, caption requirements, thumbnail requirements, and any channel-specific needs.

**Assumptions:** Additional formats, versions, or revisions may impact scope, timeline, or budget.

**Exclusions:** Additional formats, aspect ratios, cutdowns, product variants, or derivative assets not listed in deliverables.

**Internal note:** Current app has limited format controls. Cutdowns should usually be treated as derivative outputs from the existing approved edit. If the content is truly distinct, that is a separate net-new video rather than a cutdown/version.

**Review ask:** Add controls for quantity of derivative outputs without tying them directly to Simple/Standard/Premium.

### P-14 - Product Story Requires Script Or Narrative Development

**Trigger / inputs:** 2A is expected to create product story, script, talking points, or narrative flow rather than only edit approved product material.

**Likely tier:** Standard or Premium.

**Consultant question:** Is 2A creating the product script/talking points from client-provided direction and approved product inputs?

**Client-facing scope language:** Draft product video script or talking points based on approved product inputs; review, revise, and finalize - scope includes up to [X] script/talking point review rounds.

**Client responsibilities:** Provide approved product messaging, feature priorities, audience context, and consolidated feedback on script or talking points.

**Assumptions:** Final script or narrative approval is required before design, animation, voiceover, or edit work begins.

**Exclusions:** Product positioning strategy, product messaging strategy, or product claims development unless separately scoped.

**Internal note:** This overlaps with general narrative logic, but Product showcase needs product-specific language.

**Review ask:** Olivia note: this is script creation, not messaging strategy. Keep the exclusion, but do not frame normal script development as strategy.

### P-15 - Unstable Product, Roadmap Feature, Or Not-Yet-Released UI

**Trigger / inputs:** Video shows a product feature that is not final, not released, confidential, or likely to change.

**Likely tier:** Blocking / do not scope until clarified.

**Consultant question:** Is the product state final enough to capture or animate, and who approves changes if the UI shifts?

**Client-facing scope language:** Do not generate final client-facing scope language until the product feature, UI state, approval path, and source references are confirmed.

**Client responsibilities:** Not applicable until the consultant confirms whether the product feature/UI is ready to scope.

**Assumptions:** Not applicable until the consultant confirms whether the product feature/UI is ready to scope.

**Exclusions:** Not applicable until the consultant confirms whether the product feature/UI is ready to scope.

**Internal note:** Olivia has not encountered this often. Treat it like an insufficient-information/blocking scenario, similar to unclear product materials, rather than a normal scope path.

**Review ask:** Keep as blocking warning, merge into P-03, or delete from the Product showcase matrix?

## Product Showcase - Review Status

Product showcase has had a full first-pass SME review from Olivia.

Working conclusions:

- P-01 through P-06 are generally accepted, with P-05 parked as low relevance.
- P-07 and P-08 are reviewed. Standard supporting UI motion uses existing client-provided graphics/assets plus design/motion treatment. Premium custom animated graphics means 2A creates visuals from scratch. Product simulation should be a flag/warning state, not a normal option.
- P-09 should focus on client-owned approval and late-feedback scope risk, not tier complexity.
- P-10 through P-12 are reviewed. VO branching should distinguish no VO, client-provided VO, AI VO, and professional VO. Client-provided VO can cite MP3 as an acceptable file example.
- P-13 should treat cutdowns/versions as derivative deliverables, not automatic tier changes.
- P-14 is normal script/talking-point creation, not messaging strategy.
- P-15 should be blocking/parked or merged into P-03 because not-ready product is not a normal scope path.

Next recommended step: convert Product showcase module findings into proposed app controls before starting Customer evidence.
