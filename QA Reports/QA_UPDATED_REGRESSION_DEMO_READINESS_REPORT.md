# Updated Regression + Demo Readiness QA Report

Testing performed against the local preview at `http://127.0.0.1:4174/` on June 5, 2026.

## Executive Summary

Status: mostly demo-ready for a controlled walkthrough.

Demo readiness: the app is in a solid V1 preview state. The recent fixes for global opening scope bullets, path-specific deliverables, Podcast graphics behavior, Brand & Story Premium, GIF formats, Webinar deck/edit/cutdown branching, Product Showcase uncertainty handling, and Customer Evidence source handling are largely working.

Safest demo paths:
- Podcast audio-only with client-provided graphics package
- Podcast video with podcast system setup
- GIF-only, MP4-only, and GIF + MP4
- Brand & Story Premium default
- Webinar deck-only
- Webinar recording edit only
- Webinar deck + recording edit + cutdowns
- Product Showcase with client-provided product assets
- Customer Evidence with client-provided footage

Riskiest demo paths:
- Social clips with "Moderate motion graphics" selected, because the scope still says "light motion graphics"
- Webinar with Descriptive audio set to "Not sure," because it does not currently add a cautionary assumption or internal flag
- Podcast Premium with "Podcast system setup" plus motion duration, because the motion-duration selection does not appear in the scope
- Higher-complexity Product Showcase and Customer Evidence scenarios where the exact content model still needs product/content judgment

Top fixes before a boss demo:
- Fix Webinar "Descriptive audio = Not sure" so it creates a visible assumption or internal custom-scoping check.
- Normalize Social motion wording so the selected motion level is reflected in the generated scope.
- Decide whether Podcast system setup should include/support the separate supporting motion duration cap.
- Clean up pluralization polish such as `file(s)`, `round(s)`, and `meeting(s)` where feasible.

## Recent Fix Verification

| Area | Result | Notes |
| --- | --- | --- |
| Podcast audio-only cleanup | Pass | Audio-only Podcast generated audio deliverables only. It did not include MP4, thumbnail, caption, aspect-ratio, or descriptive-audio deliverables by default. |
| Podcast Premium motion graphics duration | Partial | Premium video Podcast with client-provided graphics package included the selected supporting animation duration. Premium video Podcast with podcast system setup did not include the selected duration, though it did trigger the custom-duration internal note when Custom was selected. |
| GIF deliverable format logic | Pass | GIF-only produced GIF deliverables only. GIF + MP4 produced both. MP4-only produced MP4 deliverables only. |
| GIF/Social responsibilities | Pass with polish note | GIF uses format/source/channel responsibilities instead of generic video responsibilities. Social uses source footage, channel, aspect-ratio, caption, and platform requirements. |
| Brand & Story Premium | Pass | Premium defaults generated custom illustrated/animated visual direction, style frames, storyboards, animation review rounds, music/SFX, and relevant assumptions/exclusions. |
| Product Showcase Not sure | Pass | Product materials and UI animation "Not sure" generated confirmation language and an internal review note instead of over-scoping the work. |
| Product Showcase voiceover default | Pass | Default Product Showcase did not include voiceover language, which avoids implying narration work when it was not selected. |
| Customer Evidence specificity/source footage | Pass with future-work note | Client-provided footage and Not sure source states generated customer-specific language. The workflow still needs richer controls for interview count/length/coordination in a future pass. |

## Regression Findings

No broad regression was found in the global output structure.

Confirmed global rules:
- Every tested path starts with:
  - Meet to understand audiences, use cases, objectives, and key inputs
  - Review existing, relevant assets provided by the client
- The final Video Scope bullet is `Package final files and deliver assets`.
- No checkbox syntax like `[x]` or `[ ]` appeared in tested outputs.
- No separate "Scope includes" subsection appeared.
- Review rounds stay inline with the relevant activity.
- Final deliverables are plain bullets.

Confirmed path behavior:
- Podcast no longer behaves like a generic video edit for the tested audio-only/video scenarios.
- Webinar no longer implies 2A hosts the live webinar.
- Webinar deck-only scopes do not create edited-recording deliverables.
- Webinar recording-edit scopes include the client-conducted-webinar/source-recording language.
- Webinar post-event cutdown fields stay hidden until cutdowns are selected.
- GIF deliverables now follow selected output format.
- Brand & Story Premium no longer behaves like a generic edit-led scope.

## Remaining High Priority Issues

1. Webinar descriptive audio "Not sure" does not produce a visible caution.

Tested scenario: Webinar + Recording edit + Descriptive audio = Not sure.

Current result: the output includes the edited recording deliverables, but there is no assumption, exclusion, or internal note about descriptive audio being unresolved.

Expected V1 behavior: add either a short assumption or an internal scoping note when descriptive audio is not confirmed.

2. Social motion support wording does not match the selected motion level.

Tested scenario: Social clips + Webinar recording + Moderate motion graphics + Up to 15 seconds.

Current result: scope says "light motion graphics" even when "Moderate motion graphics" is selected.

Expected V1 behavior: generated language should reflect the selected motion support level or use neutral wording that does not contradict the selection.

3. Podcast Premium motion duration behavior needs a product decision for Podcast system setup.

Tested scenario: Podcast + Premium + Video podcast + Podcast system setup + Custom motion duration.

Current result: custom duration triggers an internal note, but the scope does not include supporting motion duration language.

Expected decision: confirm whether podcast system setup replaces the supporting motion duration module, or whether supporting motion duration should be available as an additional scoped activity.

## Remaining Medium Priority Issues

1. Product Showcase Premium still needs a more mature high-end motion/custom-animation model.

The recent uncertainty and voiceover fixes work, but Product Showcase Premium still feels closer to a stronger edit/post path than a fully differentiated premium product-animation path.

2. Customer Evidence needs richer participant/interview scoping controls.

The source-footage language is improved, but V1 still lacks clear controls for number of customer interviews, interview length, coordination ownership, and approval complexity.

3. Internal notes are useful but generic.

Some flags say one or more inputs need review. This is safe, but less helpful than naming the exact unresolved item when multiple custom-scoping checks exist.

4. Webinar recording/cutdown client-source language is correct but somewhat repetitive.

The same idea appears in scope, responsibilities, and assumptions. This is safer than under-stating the client dependency, but could be tightened.

## Low Priority / Polish

- Replace awkward plural forms such as `file(s)`, `round(s)`, `meeting(s)`, and `session(s)` with singular/plural-aware wording.
- For GIF MP4-only, consider renaming the scope activity so it does not say "Create GIF assets" when the selected output is MP4-only.
- Consider making controlled demo presets or a short demo script so the strongest scenarios can be shown without exploratory clicking.
- Consider tightening output line endings so bullets feel more consistent, especially where some bullets end with periods and others do not.

## Demo Recommendation

Recommendation: demo-ready with guardrails.

Use a controlled walkthrough rather than open-ended exploration. Lead with paths that are now strongest:
- Podcast audio-only and/or video Podcast with clean graphics-package behavior
- Brand & Story Premium
- Webinar deck-only and Webinar recording edit
- GIF format branching
- Product Showcase with client-provided assets
- Customer Evidence with client-provided footage

Avoid or carefully narrate:
- Webinar descriptive audio set to Not sure
- Social clips with Moderate motion graphics
- Podcast system setup plus custom supporting motion duration

Suggested demo framing: present this as a strong V1 scoping assistant that now handles path-specific logic, with a small set of known polish/future-content-model items.

## Recommended Next Fix Order

1. Fix Webinar descriptive audio Not sure handling.
2. Normalize Social motion-support wording across selected support levels.
3. Decide and implement Podcast system setup versus supporting motion duration behavior.
4. Clean up pluralization across generated scope and deliverables.
5. Rename GIF MP4-only scope language so it does not imply a GIF output.
6. Expand Product Showcase Premium visual/motion logic.
7. Expand Customer Evidence participant/interview controls.
8. Make internal custom-scoping notes more specific.

## Code Change Confirmation

No code files changed. QA/report only.
