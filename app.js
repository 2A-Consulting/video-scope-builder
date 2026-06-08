const pathConfigs = {
  "brand-story": {
    label: "brand and story video",
    heading: "Brand & story",
    narrative: true,
    questions: [
      {
        id: "primaryVideoCount",
        label: "How many final videos?",
        type: "number",
        min: 1,
        value: 1,
      },
      {
        id: "videoLength",
        label: "Approximate final video length",
        type: "select",
        options: ["30-60 seconds", "60-90 seconds", "2-3 minutes", "Custom"],
      },
      {
        id: "scriptSupport",
        label: "Script or narrative development",
        type: "select",
        options: ["2A drafts script", "Client provides draft script", "Talking points only"],
      },
      {
        id: "visualPlanning",
        label: "Visual planning",
        type: "select",
        options: ["Style frames and storyboard", "Light storyboard", "Edit-led only"],
      },
      {
        id: "brandVisualApproach",
        label: "What visual approach is expected?",
        type: "checkboxGroup",
        options: [
          "Stock footage",
          "Client-provided footage",
          "Client-provided branded graphics package",
          "Animated graphics / text on screen",
          "Product UI",
          "Custom illustration",
          "Custom animation",
          "Mixed approach",
        ],
      },
    ],
  },
  "product-showcase": {
    label: "product showcase video",
    heading: "Product showcase",
    narrative: true,
    questions: [
      {
        id: "primaryVideoCount",
        label: "How many final videos?",
        type: "number",
        min: 1,
        value: 1,
      },
      {
        id: "videoLength",
        label: "Approximate final video length",
        type: "select",
        options: ["30-60 seconds", "60-90 seconds", "2-3 minutes", "Custom"],
      },
      {
        id: "productAssets",
        label: "Product materials",
        type: "select",
        options: ["Client provides UI assets", "2A captures product screens", "Not sure"],
      },
      {
        id: "uiAnimation",
        label: "Product UI animation",
        type: "select",
        options: ["None", "Light UI motion", "Moderate UI motion", "Not sure"],
      },
      {
        id: "voiceover",
        label: "Voiceover",
        type: "select",
        options: ["Professional voiceover", "Client-provided voiceover", "AI voiceover", "None"],
        value: "None",
      },
      {
        id: "supportingGraphics",
        label: "Supporting graphics or branded elements",
        type: "checkbox",
        checked: true,
      },
    ],
  },
  "customer-evidence": {
    label: "customer evidence video",
    heading: "Customer evidence",
    narrative: true,
    questions: [
      {
        id: "primaryVideoCount",
        label: "How many final videos?",
        type: "number",
        min: 1,
        value: 1,
      },
      {
        id: "videoLength",
        label: "Approximate final video length",
        type: "select",
        options: ["60-90 seconds", "2-3 minutes", "3-5 minutes", "Custom"],
      },
      {
        id: "participantFootage",
        label: "Participant footage source",
        type: "select",
        options: ["Client provides footage", "Remote recording support", "Not sure"],
      },
      {
        id: "quoteSupport",
        label: "Quote and story support",
        type: "select",
        options: ["2A shapes narrative", "Client provides approved outline", "Light edit only"],
      },
      {
        id: "supportingGraphics",
        label: "Customer evidence supporting graphics",
        type: "checkbox",
        checked: true,
      },
    ],
  },
  podcast: {
    label: "podcast production",
    heading: "Podcast",
    questions: [
      {
        id: "episodeCount",
        label: "How many podcast episodes?",
        type: "number",
        min: 1,
        value: 1,
      },
      {
        id: "episodeLength",
        label: "Approximate episode length",
        type: "select",
        options: ["15-20 minutes", "20-30 minutes", "30-45 minutes", "Custom"],
      },
      {
        id: "podcastFormat",
        label: "Podcast format",
        type: "select",
        options: ["Audio only", "Video podcast", "Audio and video"],
      },
      {
        id: "podcastGraphics",
        label: "Graphics package",
        type: "select",
        options: ["None", "Client-provided graphics package", "Podcast system setup"],
      },
      {
        id: "podcastIntakeMeetings",
        label: "Podcast intake meetings or reviews",
        type: "number",
        min: 1,
        value: 1,
      },
      {
        id: "podcastDrafts",
        label: "Question and talking point drafts",
        type: "number",
        min: 1,
        value: 2,
      },
      {
        id: "podcastPrepMinutes",
        label: "Participant prep call length",
        type: "select",
        options: ["30 minutes", "45 minutes", "60 minutes"],
      },
      {
        id: "podcastRecordingSessions",
        label: "Remote recording sessions",
        type: "number",
        min: 1,
        value: 1,
      },
      {
        id: "podcastSocialClips",
        label: "Social clips from recorded podcast episode(s)",
        type: "number",
        min: 0,
        value: 0,
      },
    ],
  },
  webinar: {
    label: "webinar",
    heading: "Webinar",
    questions: [
      {
        id: "webinarSupport",
        label: "Webinar support type",
        type: "checkboxGroup",
        options: [
          "Outline/chiclets",
          "Slide-by-slide content",
          "Deck design",
          "Recording edit",
          "Post-event cutdowns",
        ],
      },
      {
        id: "webinarDeckStatus",
        label: "Existing deck status",
        type: "select",
        options: [
          "No, net-new deck is needed",
          "Yes, light cleanup is needed",
          "Yes, redesign is needed",
          "Yes, content rewrite + redesign is needed",
          "Not sure",
        ],
      },
      {
        id: "webinarAccessibility",
        label: "Accessibility level",
        type: "select",
        options: [
          "Not required",
          "Basic design accessibility only",
          "Full accessibility review/report",
          "Not sure",
        ],
      },
      {
        id: "webinarCutdownCount",
        label: "How many post-event cutdowns?",
        type: "number",
        min: 0,
        value: 3,
      },
      {
        id: "cutdownLength",
        label: "Approximate cutdown length",
        type: "select",
        options: ["30-60 seconds", "60-90 seconds", "2-3 minutes"],
      },
    ],
  },
  "social-clips": {
    label: "social clip package",
    heading: "Social clips",
    questions: [
      {
        id: "clipCount",
        label: "How many social clips?",
        type: "number",
        min: 1,
        value: 3,
      },
      {
        id: "clipLength",
        label: "Approximate clip length",
        type: "select",
        options: ["6-10 seconds", "15 seconds", "30 seconds", "60 seconds", "Custom"],
      },
      {
        id: "sourceMaterial",
        label: "Source material",
        type: "select",
        options: ["Existing long-form video", "Podcast recording", "Webinar recording", "Client-provided assets", "Net-new creative concept"],
      },
      {
        id: "motionSupport",
        label: "Social clip motion support",
        type: "select",
        options: ["Text on screen and captions", "Light motion graphics", "Moderate motion graphics"],
      },
    ],
  },
  gif: {
    label: "GIF",
    heading: "GIF",
    questions: [
      {
        id: "gifCount",
        label: "How many GIF files?",
        type: "number",
        min: 1,
        value: 3,
      },
      {
        id: "gifSource",
        label: "GIF source",
        type: "select",
        options: ["Existing video or animation", "Client-provided static assets", "Simple net-new animation"],
      },
      {
        id: "gifFormats",
        label: "Delivery format",
        type: "select",
        options: ["GIF only", "GIF and MP4", "MP4 only"],
      },
    ],
  },
};

const tierDefaults = {
  simple: {
    scriptRounds: 1,
    designRounds: 1,
    storyboardRounds: 1,
    editRounds: 2,
    animationRounds: 1,
    assumptionLimit: 3,
    exclusionLimit: 6,
  },
  standard: {
    scriptRounds: 2,
    designRounds: 1,
    storyboardRounds: 2,
    editRounds: 3,
    animationRounds: 2,
    assumptionLimit: 6,
    exclusionLimit: 8,
  },
  premium: {
    scriptRounds: 3,
    designRounds: 2,
    storyboardRounds: 3,
    editRounds: 3,
    animationRounds: 3,
    assumptionLimit: 8,
    exclusionLimit: 10,
  },
};

const globalOpeningScopeBullets = [
  "Meet to understand audiences, use cases, objectives, and key inputs",
  "Review existing, relevant assets provided by the client",
];

const form = document.querySelector("#scopeForm");
const pathSelect = document.querySelector("#projectPath");
const tierSelect = document.querySelector("#tier");
const questionContainer = document.querySelector("#pathQuestions");
const motionDurationGroup = document.querySelector("#motionDurationGroup");
const motionDurationSelect = document.querySelector("#motionDuration");
const output = document.querySelector("#output");
const flags = document.querySelector("#flags");
const tierRecommendation = document.querySelector("#tierRecommendation");
const copyButton = document.querySelector("#copyButton");
const copyStatus = document.querySelector("#copyStatus");
let generatedMarkdown = "";
let brandVisualApproachTouched = false;

function normalizeId(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function formatCount(value, singular, plural = `${singular}s`) {
  const count = Number(value);
  return `${value} ${count === 1 ? singular : plural}`;
}

function getDefaultCheckedOptions(question) {
  if (pathSelect.value === "brand-story" && question.id === "brandVisualApproach") {
    if (tierSelect.value === "premium") return ["Custom illustration", "Custom animation"];
    if (tierSelect.value === "standard") return ["Animated graphics / text on screen"];
    return ["Stock footage", "Client-provided footage"];
  }

  if (pathSelect.value === "webinar" && question.id === "webinarSupport") {
    return ["Deck design"];
  }

  return question.checkedOptions || [];
}

function getDefaultSelectValue(question) {
  if (pathSelect.value === "brand-story" && question.id === "visualPlanning") {
    if (tierSelect.value === "simple") return "edit-led-only";
    return "style-frames-and-storyboard";
  }

  return question.value ? normalizeId(question.value) : "";
}

function getQuestionState() {
  const state = {};
  questionContainer.querySelectorAll("input, select").forEach((field) => {
    if (field.type === "checkbox") {
      state[field.name] = state[field.name] || [];
      if (field.checked) {
        state[field.name].push(field.value || "on");
      }
      return;
    }

    state[field.name] = field.value;
  });
  return state;
}

function getEffectiveCheckedValues(question, previousState) {
  if (previousState[question.id]) return previousState[question.id];
  return getDefaultCheckedOptions(question).map(normalizeId);
}

function applyBrandStoryTierDefaults() {
  if (pathSelect.value !== "brand-story") return;

  const visualPlanning = form.elements.visualPlanning;
  if (visualPlanning) {
    visualPlanning.value = getDefaultSelectValue({ id: "visualPlanning" });
  }

  const defaultVisuals = getDefaultCheckedOptions({ id: "brandVisualApproach" }).map(normalizeId);
  Array.from(document.querySelectorAll('input[name="brandVisualApproach"]')).forEach((field) => {
    field.checked = defaultVisuals.includes(field.value);
  });
}

function shouldRenderQuestion(question, previousState) {
  if (pathSelect.value !== "webinar") return true;

  const webinarSupport = previousState.webinarSupport || ["deck-design"];
  if (question.id === "webinarDeckStatus") {
    return webinarSupport.includes("deck-design");
  }

  if (question.id === "webinarCutdownCount" || question.id === "cutdownLength") {
    return webinarSupport.includes("post-event-cutdowns");
  }

  return true;
}

function renderQuestions() {
  const config = pathConfigs[pathSelect.value];
  const previousState = getQuestionState();
  questionContainer.innerHTML = "<legend>Guided questions</legend>";

  config.questions.forEach((question) => {
    if (!shouldRenderQuestion(question, previousState)) return;

    if (question.type === "checkbox") {
      const checkedValues = getEffectiveCheckedValues(question, previousState);
      const row = document.createElement("label");
      row.className = "checkbox-row";
      row.innerHTML = `
        <input type="checkbox" id="${question.id}" name="${question.id}" ${checkedValues.includes("on") || (!previousState[question.id] && question.checked) ? "checked" : ""}>
        <span>${question.label}</span>
      `;
      questionContainer.appendChild(row);
      return;
    }

    if (question.type === "checkboxGroup") {
      const groupLabel = document.createElement("label");
      groupLabel.textContent = question.label;
      questionContainer.appendChild(groupLabel);

      const checkedOptions = getEffectiveCheckedValues(question, previousState);
      question.options.forEach((option) => {
        const row = document.createElement("label");
        row.className = "checkbox-row";
        row.innerHTML = `
          <input type="checkbox" name="${question.id}" value="${normalizeId(option)}" ${checkedOptions.includes(normalizeId(option)) ? "checked" : ""}>
          <span>${option}</span>
        `;
        questionContainer.appendChild(row);
      });
      return;
    }

    const label = document.createElement("label");
    label.setAttribute("for", question.id);
    label.textContent = question.label;
    questionContainer.appendChild(label);

    if (question.type === "number") {
      const input = document.createElement("input");
      input.type = "number";
      input.id = question.id;
      input.name = question.id;
      input.min = question.min ?? 0;
      input.value = previousState[question.id] ?? question.value ?? 0;
      questionContainer.appendChild(input);
      return;
    }

    const select = document.createElement("select");
    select.id = question.id;
    select.name = question.id;
    question.options.forEach((option) => {
      const optionEl = document.createElement("option");
      optionEl.value = normalizeId(option);
      optionEl.textContent = option;
      select.appendChild(optionEl);
    });
    const defaultValue = getDefaultSelectValue(question);
    if (defaultValue) {
      select.value = defaultValue;
    }
    if (previousState[question.id] && Array.from(select.options).some((option) => option.value === previousState[question.id])) {
      select.value = previousState[question.id];
    }
    questionContainer.appendChild(select);
  });

  updateOutput();
}

function getValue(id, fallback = "") {
  const field = form.elements[id];
  if (!field) return fallback;
  if (field.type === "checkbox") return field.checked;
  return field.value || fallback;
}

function getSelectedText(id, fallback = "") {
  const field = form.elements[id];
  if (!field || !field.options) return fallback;
  return field.options[field.selectedIndex]?.textContent || fallback;
}

function getCheckedValues(id) {
  const checkedInputs = Array.from(document.querySelectorAll(`input[name="${id}"]:checked`));
  if (checkedInputs.length) return checkedInputs.map((input) => input.value);

  const fields = form.elements[id];
  if (!fields) return [];
  if (fields.type === "checkbox") return fields.checked ? [fields.value] : [];
  return Array.from(fields).filter((field) => field.checked).map((field) => field.value);
}

function hasCheckedOption(id, label) {
  return getCheckedValues(id).includes(normalizeId(label));
}

function hasWebinarSupport(label) {
  return hasCheckedOption("webinarSupport", label);
}

function hasWebinarDeckSupport() {
  return hasWebinarSupport("Deck design");
}

function hasWebinarRecordingEdit() {
  return hasWebinarSupport("Recording edit");
}

function hasWebinarCutdowns() {
  return hasWebinarSupport("Post-event cutdowns");
}

function hasWebinarVideoOutput() {
  return hasWebinarRecordingEdit() || hasWebinarCutdowns();
}

function hasPodcastVideoOutput() {
  return getSelectedText("podcastFormat") !== "Audio only" || Number(getValue("podcastSocialClips", 0)) > 0;
}

function hasBrandStoryCustomVisuals() {
  return hasCheckedOption("brandVisualApproach", "Custom illustration") || hasCheckedOption("brandVisualApproach", "Custom animation");
}

function hasBrandStoryStyleFramesOrStoryboard() {
  return hasBrandStoryCustomVisuals() || getSelectedText("visualPlanning").includes("Style frames");
}

function supportsDescriptiveAudio(path) {
  if (pathConfigs[path]?.narrative) return true;
  if (path === "podcast") return hasPodcastVideoOutput();
  if (path === "webinar") return hasWebinarVideoOutput();
  if (path === "social-clips") return true;
  return false;
}

function getWebinarCutdownCount() {
  return Math.max(1, Number(getValue("webinarCutdownCount", 3)) || 1);
}

function getTier() {
  if (tierSelect.value !== "not-sure") return tierSelect.value;
  return recommendTier();
}

function recommendTier() {
  const path = pathSelect.value;
  if (getValue("liveCapture") !== "no") return "premium";
  if (path === "webinar" && (hasWebinarRecordingEdit() || hasWebinarCutdowns())) return "premium";
  if (path === "webinar" && (hasWebinarSupport("Outline/chiclets") || hasWebinarSupport("Slide-by-slide content") || hasWebinarDeckSupport())) return "standard";
  if (path === "social-clips" && Number(getValue("clipCount", 0)) > 4) return "premium";
  if (path === "podcast" && (getSelectedText("podcastGraphics") === "Podcast system setup" || Number(getValue("episodeCount", 0)) > 1 || Number(getValue("podcastSocialClips", 0)) > 0)) return "standard";
  if (path === "gif" && getSelectedText("gifSource").includes("net-new")) return "standard";
  if (pathConfigs[path].narrative && getSelectedText("visualPlanning").includes("Style frames")) return "standard";
  return "simple";
}

function shouldShowMotionDuration() {
  const path = pathSelect.value;
  if (path === "social-clips") return true;
  if (path === "podcast") return tierSelect.value === "premium";
  if (path === "brand-story") {
    const hasEditLedMotion = hasCheckedOption("brandVisualApproach", "Animated graphics / text on screen");
    const hasCustomAnimation = hasCheckedOption("brandVisualApproach", "Custom illustration") || hasCheckedOption("brandVisualApproach", "Custom animation");
    return hasEditLedMotion && !hasCustomAnimation;
  }
  if (getValue("supportingGraphics") === true) return true;
  return ["Light UI motion", "Moderate UI motion", "Not sure"].includes(getSelectedText("uiAnimation"));
}

function lineList(title, items) {
  if (!items.length) return "";
  return `${title}\n\n${items.map((item) => `- ${cleanBulletText(item)}`).join("\n")}`;
}

function cleanBulletText(text) {
  return String(text).replace(/^\s*\[[ x]\]\s*/i, "").trim();
}

function cleanGeneratedOutput(text) {
  return text
    .split("\n")
    .filter((line) => !/^#{2,3}\s+Scope includes\s*$/i.test(line.trim()))
    .map((line) => line.replace(/^-\s*\[[ x]\]\s*/i, "- "))
    .join("\n");
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderMarkdown(markdown) {
  const html = [];
  let listItems = [];

  function flushList() {
    if (!listItems.length) return;
    html.push(`<ul>${listItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`);
    listItems = [];
  }

  markdown.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      html.push(`<h3>${escapeHtml(trimmed.slice(4))}</h3>`);
      return;
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      return;
    }

    flushList();
    html.push(`<p>${escapeHtml(trimmed)}</p>`);
  });

  flushList();
  output.innerHTML = html.join("");
}

function addMotionLanguage(base, perClip = false) {
  const duration = motionDurationSelect.value;
  if (!shouldShowMotionDuration() || duration === "none") return base;
  if (duration === "custom") return base;
  return `${base} - scope includes ${duration} of supporting graphics or animated elements${perClip ? " per clip" : ""}.`;
}

function getSocialMotionScopeText() {
  const motionSupport = getSelectedText("motionSupport");
  if (motionSupport === "Text on screen and captions") {
    return "Add text on screen, captions, product UI, and/or supporting visual elements, as applicable";
  }
  if (motionSupport === "Moderate motion graphics") {
    return "Add text on screen, captions, product UI, and/or scoped motion graphics support, as applicable";
  }
  return "Add text on screen, captions, product UI, and/or light motion graphics, as applicable";
}

function getPodcastReviewRounds(tier) {
  if (tier === "simple") return 1;
  return 2;
}

function buildPodcastScopeBullets(tier) {
  const reviewRounds = getPodcastReviewRounds(tier);
  const recordingSessions = getValue("podcastRecordingSessions", 1);
  const socialClips = Number(getValue("podcastSocialClips", 0));
  const isAudioOnly = getSelectedText("podcastFormat") === "Audio only";
  const bullets = [
    `Provide and/or review podcast intake materials - scope includes up to ${getValue("podcastIntakeMeetings", 1)} intake meeting(s) or review(s).`,
    `Draft interview questions and talking points; review, revise, and finalize - scope includes up to ${getValue("podcastDrafts", 2)} drafts: draft 1 and final.`,
    `Host a prep meeting with podcast participants to review approved questions, talking points, and recording best practices - scope includes one ${getSelectedText("podcastPrepMinutes", "30 minutes")} prep call.`,
    `Schedule and conduct ${recordingSessions} remote recording session(s) using Riverside.fm.`,
    isAudioOnly ? "Capture audio recordings for inclusion in the final podcast." : "Capture audio and/or video footage for inclusion in the final podcast.",
    `Edit recorded podcast episode(s); review, revise, and finalize - scope includes up to ${reviewRounds} review rounds: draft 1 and final.`,
  ];

  if (getSelectedText("podcastGraphics") === "Podcast system setup") {
    bullets.push("Create standardized podcast assets, which may include intro/outro cards, thumbnail design, lower thirds package, intro/outro script, and intro/outro music recommendation.");
  } else if (getSelectedText("podcastGraphics") === "Client-provided graphics package") {
    bullets.push("Add client-provided graphics package, as applicable, which may include intro cards, outro cards, transitions, lower thirds, and intro/outro music.");
  }

  if (!isAudioOnly || socialClips > 0) {
    bullets.push("Create podcast thumbnail after the final edit is approved.");
  }

  if (tier === "premium" && shouldShowMotionDuration() && motionDurationSelect.value !== "none" && motionDurationSelect.value !== "custom") {
    bullets.push(`Create supporting animated elements or motion graphics ${getSelectedText("motionDuration").toLowerCase()} total, such as intro/outro moments, transitions, lower-third treatments, or emphasis graphics.`);
  }

  bullets.push("Complete audio mix.");

  if (socialClips > 0) {
    bullets.push(`Create social clips from recorded podcast episode(s); review, revise, and finalize - scope includes up to ${reviewRounds} review rounds: draft 1 and final.`);
  }

  return bullets;
}

function buildBrandStoryScopeBullets(tier) {
  const defaults = tierDefaults[tier];
  const visualPlanning = getSelectedText("visualPlanning");
  const hasStock = hasCheckedOption("brandVisualApproach", "Stock footage");
  const hasClientFootage = hasCheckedOption("brandVisualApproach", "Client-provided footage");
  const hasClientGraphics = hasCheckedOption("brandVisualApproach", "Client-provided branded graphics package");
  const hasAnimatedGraphics = hasCheckedOption("brandVisualApproach", "Animated graphics / text on screen");
  const hasProductUi = hasCheckedOption("brandVisualApproach", "Product UI");
  const hasMixedApproach = hasCheckedOption("brandVisualApproach", "Mixed approach");
  const hasCustomIllustration = hasCheckedOption("brandVisualApproach", "Custom illustration");
  const hasCustomAnimation = hasCheckedOption("brandVisualApproach", "Custom animation");
  const hasCustomVisuals = hasBrandStoryCustomVisuals();
  const scriptRounds = formatCount(defaults.scriptRounds, "round");
  const designRounds = formatCount(defaults.designRounds, "review round");
  const storyboardRounds = formatCount(defaults.storyboardRounds, "round");
  const animationRounds = formatCount(defaults.animationRounds, "animation review round");
  const editRounds = formatCount(defaults.editRounds, "review round");
  const bullets = [
    "Meet to understand audiences, use cases, objectives, and key inputs",
    "Review existing, relevant assets provided by the client",
  ];

  const scriptText = getSelectedText("scriptSupport");
  if (scriptText.includes("2A")) {
    bullets.push(`Draft script or talking points; review, revise, and finalize - scope includes up to ${scriptRounds} of revisions.`);
  } else if (scriptText.includes("Client")) {
    bullets.push(`Review and refine client-provided script direction; review, revise, and finalize - scope includes up to ${scriptRounds} of revisions.`);
  } else {
    bullets.push(`Develop talking points and narrative flow; review, revise, and finalize - scope includes up to ${scriptRounds} of revisions.`);
  }

  if (hasStock) {
    bullets.push("Determine supporting visual elements, including stock photography and/or stock video, to support the approved video direction.");
  }

  if (hasClientFootage) {
    bullets.push("Use client-provided footage and source materials to support the approved video direction.");
  }

  if (hasMixedApproach) {
    bullets.push("Combine selected source footage, branded assets, stock materials, graphics, and/or animation into a cohesive visual approach.");
  }

  if (hasClientGraphics) {
    bullets.push("Add branded elements provided by the client, as applicable, including bumpers, lower thirds, context slides, transitions, and background music.");
  }

  if (hasProductUi) {
    bullets.push("Determine the visual approach for incorporating product UI into the video.");
    bullets.push("Animate product UI, graphics, text on screen, and supporting visual elements, as applicable.");
  }

  if (hasCustomVisuals) {
    bullets.push("Develop a custom illustrated and animated visual direction to support the approved story.");
    bullets.push(`Design style frames to establish the visual approach; review, revise, and finalize - scope includes up to ${designRounds}.`);
    bullets.push(`Craft storyboards to align custom visuals to the approved script; review, revise, and finalize - scope includes up to ${storyboardRounds} of revisions.`);
    bullets.push(`Create custom illustration assets, graphics, and supporting visual elements based on approved style frames and storyboards.`);
    bullets.push(`Animate custom illustrations, graphics, transitions, and supporting motion design; review, revise, and finalize - scope includes up to ${animationRounds}.`);
  } else {
    if (visualPlanning.includes("Style frames")) {
      bullets.push(`Design style frames to determine the visual approach; review, revise, and finalize - scope includes up to ${designRounds}.`);
      bullets.push(`Craft storyboards to align visuals to the approved script; review, revise, and finalize - scope includes up to ${storyboardRounds} of revisions.`);
    } else if (visualPlanning.includes("Light")) {
      bullets.push(`Create a light storyboard or visual outline to align the edit approach; review, revise, and finalize - scope includes up to ${storyboardRounds} of revisions.`);
    }

    if (hasAnimatedGraphics) {
      bullets.push(addMotionLanguage("Add supporting graphics, text on screen, and/or branded elements, as applicable"));
    }
  }

  bullets.push(`Edit video footage and assembled assets; review, revise, and finalize - scope includes up to ${editRounds} per video: V1, V2, and final.`);
  bullets.push("Add music and sound effects, as applicable, using licensed or client-approved tracks.");
  return bullets;
}

function buildWebinarScopeBullets(tier) {
  const defaults = tierDefaults[tier];
  const bullets = [];
  const deckStatus = getSelectedText("webinarDeckStatus");
  const hasContentRewriteRedesign = hasWebinarDeckSupport() && deckStatus === "Yes, content rewrite + redesign is needed";

  if (hasWebinarSupport("Outline/chiclets")) {
    bullets.push(`Draft webinar outline/chiclets; review, revise, and finalize - scope includes up to ${defaults.scriptRounds} draft round(s).`);
  }

  if (hasWebinarSupport("Slide-by-slide content") && !hasContentRewriteRedesign) {
    bullets.push(`Draft slide-by-slide webinar content; review, revise, and finalize - scope includes up to ${defaults.scriptRounds} content draft round(s).`);
  }

  if (hasWebinarDeckSupport()) {
    if (deckStatus === "Yes, light cleanup is needed") {
      bullets.push(`Clean up existing webinar deck using client-provided content and brand guidance; review, revise, and finalize - scope includes up to ${defaults.designRounds} design review round(s).`);
    } else if (deckStatus === "Yes, redesign is needed") {
      bullets.push(`Redesign existing webinar deck using client-provided content and brand guidance; review, revise, and finalize - scope includes up to ${defaults.designRounds} design review round(s).`);
    } else if (deckStatus === "Yes, content rewrite + redesign is needed") {
      bullets.push(`Rewrite slide-by-slide webinar content and redesign the existing deck using client-provided inputs and brand guidance; review, revise, and finalize - scope includes up to ${defaults.scriptRounds} content round(s) and ${defaults.designRounds} design review round(s).`);
    } else {
      bullets.push(`Design webinar slides using existing brand guidelines provided by the client and presentation best practices; review, revise, and finalize - scope includes up to ${defaults.designRounds} design review round(s).`);
    }
  }

  if (getSelectedText("webinarAccessibility") === "Basic design accessibility only") {
    bullets.push("Apply basic accessibility considerations, including meeting font size minimums and adjusting color contrast where needed.");
  }

  if (hasWebinarRecordingEdit()) {
    bullets.push("Once the webinar has been conducted by the client, client will provide the webinar recording to 2A for editing.");
    bullets.push(`Edit client-provided webinar recording for clarity, flow, and polish; review, revise, and finalize - scope includes up to ${defaults.editRounds} review rounds: V1, V2, and final.`);
    bullets.push("Add music, sound effects, captions, and basic audio cleanup to the edited webinar recording, as applicable.");
  }

  if (hasWebinarCutdowns()) {
    if (!hasWebinarRecordingEdit()) {
      bullets.push("Client will provide the final webinar recording to 2A as source material for post-event cutdowns.");
    }
    bullets.push(`Create post-event cutdown(s) from the webinar recording; review, revise, and finalize - scope includes up to ${defaults.editRounds} review rounds.`);
    bullets.push("Add music, sound effects, captions, and light post-production polish to post-event cutdown(s), as applicable.");
  }

  if (!bullets.length) {
    bullets.push("Confirm webinar support needs and draft scope language based on selected inputs.");
  }

  return bullets;
}

function buildScopeBullets(tier) {
  const path = pathSelect.value;
  const config = pathConfigs[path];
  const defaults = tierDefaults[tier];
  const bullets = [...globalOpeningScopeBullets];

  if (path === "brand-story") {
    bullets.push(...buildBrandStoryScopeBullets(tier));
  } else if (config.narrative) {
    const scriptRounds = formatCount(defaults.scriptRounds, "round");
    const designRounds = formatCount(defaults.designRounds, "review round");
    const storyboardRounds = formatCount(defaults.storyboardRounds, "round");
    const editRounds = formatCount(defaults.editRounds, "review round");
    if (path === "customer-evidence") {
      const quoteSupport = getSelectedText("quoteSupport");
      if (quoteSupport === "2A shapes narrative") {
        bullets.push(`Shape the customer story, testimonial flow, outcomes, use cases, proof points, and customer quotes into a clear evidence narrative; review, revise, and finalize - scope includes up to ${scriptRounds} of revisions.`);
      } else if (quoteSupport === "Client provides approved outline") {
        bullets.push(`Review and refine the client-provided customer evidence outline, proof points, and quote direction; review, revise, and finalize - scope includes up to ${scriptRounds} of revisions.`);
      } else {
        bullets.push(`Lightly organize approved customer quotes, proof points, and source material into an edit-ready evidence flow; review, revise, and finalize - scope includes up to ${scriptRounds} of revisions.`);
      }
    } else {
      const scriptText = getSelectedText("scriptSupport");
      if (scriptText.includes("2A")) {
        bullets.push(`Draft script or talking points; review, revise, and finalize - scope includes up to ${scriptRounds} of revisions.`);
      } else if (scriptText.includes("Client")) {
        bullets.push(`Review and refine client-provided script direction; review, revise, and finalize - scope includes up to ${scriptRounds} of revisions.`);
      } else {
        bullets.push(`Develop talking points and narrative flow; review, revise, and finalize - scope includes up to ${scriptRounds} of revisions.`);
      }
    }

    const visualPlanning = getSelectedText("visualPlanning");
    if (visualPlanning.includes("Style frames")) {
      bullets.push(`Design style frames to determine the visual approach; review, revise, and finalize - scope includes up to ${designRounds}.`);
      bullets.push(`Craft storyboards to align visuals to the approved script; review, revise, and finalize - scope includes up to ${storyboardRounds} of revisions.`);
    } else if (visualPlanning.includes("Light")) {
      bullets.push(`Create a light storyboard or visual outline to align the edit approach; review, revise, and finalize - scope includes up to ${storyboardRounds} of revisions.`);
    }

    if (path === "product-showcase") {
      const productAssets = getSelectedText("productAssets");
      if (productAssets === "Client provides UI assets") {
        bullets.push("Use client-provided product UI assets, screenshots, screen recordings, documentation, and approved product materials to shape the product story and demo flow.");
      } else if (productAssets === "2A captures product screens") {
        bullets.push("Capture approved product screens and assemble product UI, feature details, and value proof points into the video narrative, pending confirmed product access and capture requirements.");
      } else {
        bullets.push("Confirm available product materials, product UI assets, screenshots, recordings, documentation, and access needs before production begins.");
      }
    }

    if (path === "customer-evidence") {
      const footage = getSelectedText("participantFootage");
      if (footage === "Client provides footage") {
        bullets.push("Edit client-provided customer interview footage, recordings, transcripts, and supporting assets into a customer evidence video.");
      } else if (footage === "Remote recording support") {
        bullets.push("Support remote customer interview recording preparation and capture, including basic setup guidance and recording coordination as scoped.");
      } else {
        bullets.push("Confirm available customer interview footage, participant availability, customer approval needs, and supporting assets before production begins.");
      }
      bullets.push("Highlight customer outcomes, use cases, proof points, approved quotes, and customer-approved brand, logo, or product references as provided.");
    }

    if (path === "product-showcase" && getSelectedText("uiAnimation") === "Not sure") {
      bullets.push("Confirm product UI animation approach and supporting motion requirements before production begins.");
    } else if (path === "customer-evidence" && getValue("supportingGraphics")) {
      bullets.push(addMotionLanguage("Add supporting graphics, text callouts, customer quote treatments, logo treatments, and/or proof-point graphics as scoped"));
    } else if (getValue("supportingGraphics") || getSelectedText("uiAnimation") !== "None") {
      bullets.push(addMotionLanguage("Add supporting graphics, text on screen, product UI, stock footage, and/or branded elements, as applicable"));
    }

    bullets.push(`Edit video footage and assembled assets; review, revise, and finalize - scope includes up to ${editRounds} per video: V1, V2, and final.`);

    if (shouldShowMotionDuration() && motionDurationSelect.value !== "none" && !(path === "product-showcase" && getSelectedText("uiAnimation") === "Not sure") && path !== "customer-evidence") {
      bullets.push(`Animate designs based on approved storyboards or visual direction; review, revise, and finalize - scope includes up to ${defaults.animationRounds} animation review round(s).`);
    }

    if (path === "product-showcase" && getSelectedText("voiceover") !== "None") {
      bullets.push("Incorporate recorded voiceover, music, and sound effects into the final video, as applicable.");
    } else {
      bullets.push("Add music and sound effects, as applicable, using licensed or client-approved tracks.");
    }
  }

  if (path === "podcast") {
    bullets.push(...buildPodcastScopeBullets(tier));
  }

  if (path === "webinar") {
    bullets.push(...buildWebinarScopeBullets(tier));
  }

  if (path === "social-clips") {
    bullets.push(`Develop social clip edit approach from ${getSelectedText("sourceMaterial").toLowerCase()}.`);
    bullets.push(`Edit social clips; review, revise, and finalize - scope includes up to ${defaults.editRounds} review rounds per clip package: V1, V2, and final.`);
    bullets.push(addMotionLanguage(getSocialMotionScopeText(), true));
    bullets.push("Add music and sound effects, as applicable, using licensed or client-approved tracks.");
  }

  if (path === "gif") {
    const gifCreationLabel = getSelectedText("gifFormats") === "MP4 only" ? "Create short looping motion assets" : "Create GIF assets";
    bullets.push(`${gifCreationLabel} using ${getSelectedText("gifSource").toLowerCase()}; review, revise, and finalize - scope includes up to ${defaults.animationRounds} review round(s).`);
    bullets.push("Optimize files for scoped delivery format and intended placement.");
  }

  if (getValue("liveCapture") !== "no") {
    bullets.push("Prepare draft scope language based on currently known video requirements, excluding live capture or on-site filming unless separately scoped.");
  }

  bullets.push("Package final files and deliver assets");

  return bullets.filter((bullet, index) => {
    const firstIndex = bullets.findIndex((candidate) => candidate === bullet);
    return firstIndex === index || !globalOpeningScopeBullets.includes(bullet);
  });
}

function buildDeliverables() {
  const path = pathSelect.value;
  const deliverables = [];

  if (pathConfigs[path].narrative) {
    deliverables.push(`${formatCount(getValue("primaryVideoCount", 1), "final video file")}, approximately ${getSelectedText("videoLength")} each`);
    deliverables.push("Text/caption file(s)");
    deliverables.push("Thumbnail(s)");
    deliverables.push("Scoped formats and aspect ratios: MP4, 16:9");
  }

  if (path === "podcast") {
    const episodeFormat = getSelectedText("podcastFormat");
    const episodeCount = getValue("episodeCount", 1);
    if (episodeFormat === "Audio only") {
      deliverables.push(`${episodeCount} final audio episode file(s), approximately ${getSelectedText("episodeLength")} each`);
    } else {
      deliverables.push(`${episodeCount} final podcast episode file(s), approximately ${getSelectedText("episodeLength")} each`);
    }
    if (Number(getValue("podcastSocialClips", 0)) > 0) {
      deliverables.push(`${getValue("podcastSocialClips", 0)} social clip(s) from recorded podcast episode(s)`);
    }
    if (episodeFormat !== "Audio only") {
      deliverables.push(`${episodeCount} MP4 file(s)`);
    }
    if (hasPodcastVideoOutput()) {
      deliverables.push("Text/caption file(s), if applicable");
      deliverables.push("Thumbnail(s), if applicable");
      deliverables.push("Scoped formats and aspect ratios: audio export and/or MP4, as selected");
    } else {
      deliverables.push("Scoped audio export format");
    }
  }

  if (path === "webinar") {
    if (hasWebinarDeckSupport()) deliverables.push("1 webinar deck");
    if (hasWebinarRecordingEdit()) deliverables.push("1 edited webinar recording");
    if (hasWebinarCutdowns()) {
      deliverables.push(`${getWebinarCutdownCount()} post-event cutdown(s), approximately ${getSelectedText("cutdownLength")} each`);
    }
    if (hasWebinarVideoOutput()) {
      deliverables.push("Text/caption file(s), if applicable");
      deliverables.push("Thumbnail(s), if applicable");
    }
    if (hasWebinarDeckSupport() && hasWebinarVideoOutput()) {
      deliverables.push("Scoped formats and aspect ratios: presentation file, MP4, 16:9, and/or 9:16, as applicable");
    } else if (hasWebinarDeckSupport()) {
      deliverables.push("Scoped formats and aspect ratios: presentation file");
    } else if (hasWebinarVideoOutput()) {
      deliverables.push("Scoped formats and aspect ratios: MP4, 16:9, and/or 9:16, as applicable");
    }
  }

  if (path === "social-clips") {
    deliverables.push(`${getValue("clipCount", 3)} social clip(s), approximately ${getSelectedText("clipLength")} each`);
    deliverables.push("Text/caption file(s)");
    deliverables.push("Scoped formats and aspect ratios: 1:1, 4:5, and/or 9:16");
  }

  if (path === "gif") {
    const gifCount = getValue("gifCount", 3);
    const gifFormat = getSelectedText("gifFormats");
    if (gifFormat === "GIF only") {
      deliverables.push(`${gifCount} final GIF file(s)`);
      deliverables.push("Scoped format: GIF");
    } else if (gifFormat === "GIF and MP4") {
      deliverables.push(`${gifCount} final GIF file(s)`);
      deliverables.push(`${gifCount} final MP4 file(s)`);
      deliverables.push("Scoped formats: GIF and MP4");
    } else if (gifFormat === "MP4 only") {
      deliverables.push(`${gifCount} final MP4 file(s)`);
      deliverables.push("Scoped format: MP4");
    }
  }

  if (getValue("descriptiveAudio") === "yes" && supportsDescriptiveAudio(path)) {
    deliverables.push("Descriptive audio");
  }

  return deliverables;
}

function buildResponsibilities() {
  const path = pathSelect.value;
  if (path === "webinar") {
    const responsibilities = [
      "Provide source materials, messaging inputs, brand guidelines, templates, and relevant background information.",
      "Provide consolidated feedback and approvals within the agreed review timeline.",
    ];

    if (hasWebinarSupport("Outline/chiclets")) {
      responsibilities.push("Review and approve outline/chiclets before slide-by-slide content development begins.");
    }

    if (hasWebinarSupport("Slide-by-slide content")) {
      responsibilities.push("Review and approve final content before deck design begins, if deck design is included.");
    }

    if (hasWebinarDeckSupport()) {
      responsibilities.push("Validate technical, legal, product, and compliance accuracy in webinar content and slides.");
      responsibilities.push("Confirm final deck delivery specifications.");
    }

    if (hasWebinarVideoOutput()) {
      responsibilities.push("Conduct the webinar and provide the webinar recording to 2A in a usable format.");
      responsibilities.push("Confirm final video delivery specifications, including file format, aspect ratio, caption requirements, thumbnail requirements, and whether descriptive audio is required.");
    }

    return responsibilities;
  }

  if (path === "gif") {
    return [
      "Provide source assets, copy, product UI, brand guidance, and reference materials needed to create the scoped GIF or MP4 deliverable.",
      "Confirm intended placement, file format, dimensions, and any file-size or looping requirements before production begins.",
      "Review consolidated drafts and provide feedback within the scoped review rounds.",
    ];
  }

  if (path === "social-clips") {
    return [
      "Provide source footage or approved source content for the scoped social clips.",
      "Confirm target channels, aspect ratios, caption needs, and any platform-specific delivery requirements before editing begins.",
      "Review consolidated drafts and provide feedback within the scoped review rounds.",
    ];
  }

  if (path === "product-showcase") {
    const productAssets = getSelectedText("productAssets");
    const responsibilities = [];
    if (productAssets === "Client provides UI assets") {
      responsibilities.push("Provide product UI assets, screenshots, screen recordings, product copy, feature documentation, and approved product materials needed for the scoped video.");
    } else if (productAssets === "2A captures product screens") {
      responsibilities.push("Provide product access, capture guidance, approved demo paths, and source materials needed for 2A to capture product screens.");
    } else {
      responsibilities.push("Confirm available product materials, product UI assets, screenshots, recordings, documentation, and access needs before production begins.");
    }
    responsibilities.push("Validate technical, product, legal, customer, and compliance accuracy, including product claims, UI details, and feature/value proof points.");
    responsibilities.push("Provide consolidated feedback and approvals within the agreed review timeline.");
    responsibilities.push("Confirm final delivery specifications, including file format, aspect ratio, caption requirements, thumbnail requirements, and whether descriptive audio is required.");
    return responsibilities;
  }

  if (path === "customer-evidence") {
    const footage = getSelectedText("participantFootage");
    const responsibilities = [];

    if (footage === "Client provides footage") {
      responsibilities.push("Provide approved customer interview recordings, transcripts, customer logos, product references, and supporting assets needed for the edit.");
      responsibilities.push("Identify and coordinate customer participant(s), availability, and approval stakeholders.");
    } else if (footage === "Remote recording support") {
      responsibilities.push("Coordinate customer participant availability, permissions, review cycles, and access to required remote recording sessions.");
      responsibilities.push("Provide customer background, approved talking points, customer logos, product references, and supporting assets needed for the recording and edit.");
    } else {
      responsibilities.push("Confirm available customer interview footage, participant availability, customer approval needs, and supporting assets before production begins.");
      responsibilities.push("Identify and coordinate customer participant(s), availability, and approval stakeholders.");
    }

    responsibilities.push("Confirm customer quotes, claims, product references, logo usage, and approval requirements before final delivery.");
    responsibilities.push("Review consolidated drafts and provide feedback within the scoped review rounds.");
    return responsibilities;
  }

  const responsibilities = [
    "Provide relevant source materials, brand guidelines, assets, and approvals needed for the scoped work.",
    "Provide consolidated feedback and approvals within the agreed review timeline.",
    "Confirm final delivery specifications, including file format, aspect ratio, caption requirements, thumbnail requirements, and whether descriptive audio is required.",
  ];

  if (path === "podcast") {
    responsibilities.splice(0, 1, "Complete intake form and provide audience, objective, participant, and content inputs.");
    responsibilities.splice(1, 0, "Identify podcast participants and share participant contact information.");
    responsibilities.splice(2, 0, "Confirm host, guest, and participant information.");
    responsibilities.splice(3, 0, "Support scheduling as needed.");
    responsibilities.splice(4, 0, "Confirm participant approvals and release requirements before final delivery.");
    if (!hasPodcastVideoOutput()) {
      responsibilities[responsibilities.length - 1] = "Confirm final audio delivery specifications, including file format and any transcript requirements.";
    }
  }

  return responsibilities;
}

function buildAssumptions(tier) {
  const path = pathSelect.value;

  if (path === "podcast") {
    const podcastAssumptions = [
      "Client will complete intake before 2A drafts questions or talking points.",
      "Approved questions and talking points will guide the recording.",
      "Participants will use their own computer, camera, microphone, and internet connection unless equipment kits are separately scoped.",
      "Recording quality may vary based on participant equipment, internet connection, and recording environment.",
    ];

    if (Number(getValue("podcastSocialClips", 0)) > 0) {
      podcastAssumptions.push("Social clips will be created from the approved podcast recording.");
    }

    if (getValue("descriptiveAudio") === "not-sure" && supportsDescriptiveAudio(path)) {
      podcastAssumptions.push("Client to confirm whether descriptive audio is required.");
    }

    podcastAssumptions.push("Additional formats, versions, or revisions may impact scope, timeline, or budget.");
    return podcastAssumptions.slice(0, tierDefaults[tier].assumptionLimit);
  }

  if (path === "webinar") {
    const webinarAssumptions = [
      "Client will provide relevant source materials before work begins.",
      "Client feedback will be consolidated before being shared with 2A.",
    ];

    if (hasWebinarSupport("Outline/chiclets") || hasWebinarSupport("Slide-by-slide content")) {
      webinarAssumptions.push("Approved outline and/or content will guide subsequent webinar development.");
    }

    if (hasWebinarDeckSupport()) {
      webinarAssumptions.push("Final slide content approval is required before deck design is finalized.");
    }

    if (getSelectedText("webinarAccessibility") === "Basic design accessibility only") {
      webinarAssumptions.push("Basic accessibility support is limited to design considerations for the given form factor.");
    }

    if (hasWebinarVideoOutput()) {
      webinarAssumptions.push("Client will conduct the webinar and provide the webinar recording to 2A in a usable format.");
    }

    if (hasWebinarCutdowns() && !hasWebinarRecordingEdit()) {
      webinarAssumptions.push("Post-event cutdowns assume client provides a final webinar recording source file.");
    }

    if (getValue("descriptiveAudio") === "not-sure" && hasWebinarVideoOutput()) {
      webinarAssumptions.splice(2, 0, "Client to confirm whether descriptive audio is required before SOW finalization.");
    }

    webinarAssumptions.push("Additional cutdowns, formats, versions, or revisions may impact scope, timeline, or budget.");
    return webinarAssumptions.slice(0, tierDefaults[tier].assumptionLimit);
  }

  if (path === "brand-story") {
    const hasCustomVisuals = hasBrandStoryCustomVisuals();
    const hasStyleFramesOrStoryboard = hasBrandStoryStyleFramesOrStoryboard();
    const hasLightStoryboard = getSelectedText("visualPlanning").includes("Light");
    const brandAssumptions = [
      "Client will provide relevant source materials before work begins.",
      "Client-provided assets are approved for use in the final deliverables.",
      "Client feedback will be consolidated before being shared with 2A.",
      "Final script or narrative approval is required before design, animation, or edit work begins.",
    ];

    if (hasCustomVisuals) {
      brandAssumptions.push("Approved style frames and storyboards will guide custom illustration, animation, and motion design.");
      brandAssumptions.push("Changes to the approved visual direction after style frame or storyboard approval may impact scope, timeline, or budget.");
    } else if (hasStyleFramesOrStoryboard) {
      brandAssumptions.push("Approved style frames and storyboards will guide edit development, motion design, and visual polish.");
    } else if (hasLightStoryboard) {
      brandAssumptions.push("Approved visual outline will guide the edit approach and light motion design.");
    }

    if (shouldShowMotionDuration() && motionDurationSelect.value !== "none" && motionDurationSelect.value !== "custom") {
      brandAssumptions.push("Supporting graphics and animated elements are limited to the scoped duration listed above.");
    }

    if (getValue("descriptiveAudio") === "not-sure" && supportsDescriptiveAudio(path)) {
      brandAssumptions.push("Client to confirm whether descriptive audio is required.");
    }

    brandAssumptions.push("Additional formats, versions, or revisions may impact scope, timeline, or budget.");
    return brandAssumptions.slice(0, tierDefaults[tier].assumptionLimit);
  }

  if (path === "product-showcase") {
    const productAssets = getSelectedText("productAssets");
    const uiAnimation = getSelectedText("uiAnimation");
    const productAssumptions = [
      productAssets === "Not sure"
        ? "Final scope assumes product materials, access needs, and source assets are confirmed before production begins."
        : "Client will provide relevant product materials before work begins.",
    ];

    if (productAssets === "2A captures product screens") {
      productAssumptions.push("Product access, approved demo paths, and screen-capture requirements will be confirmed before product screen capture begins.");
    } else if (productAssets === "Client provides UI assets") {
      productAssumptions.push("Client-provided product assets and source materials are approved for use in the final deliverables.");
    }

    if (uiAnimation === "Not sure") {
      productAssumptions.push("Final scope assumes product UI animation depth and supporting motion requirements are confirmed before production begins.");
    } else if (uiAnimation !== "None") {
      productAssumptions.push("Product UI animation will be based on approved product materials, screen captures, or visual direction.");
    }

    productAssumptions.push("Client feedback will be consolidated before being shared with 2A.");
    productAssumptions.push("Final product story, messaging, and demo flow approval is required before edit or animation work begins.");
    productAssumptions.push("Client is responsible for validating technical, product, legal, customer, and compliance accuracy.");

    if (shouldShowMotionDuration() && motionDurationSelect.value !== "none" && motionDurationSelect.value !== "custom" && uiAnimation !== "Not sure") {
      productAssumptions.push("Supporting graphics and animated elements are limited to the scoped duration listed above.");
    }

    if (getValue("descriptiveAudio") === "not-sure" && supportsDescriptiveAudio(path)) {
      productAssumptions.push("Client to confirm whether descriptive audio is required.");
    }

    productAssumptions.push("Additional formats, versions, or revisions may impact scope, timeline, or budget.");
    return productAssumptions.slice(0, tierDefaults[tier].assumptionLimit);
  }

  if (path === "customer-evidence") {
    const footage = getSelectedText("participantFootage");
    const quoteSupport = getSelectedText("quoteSupport");
    const customerAssumptions = [];

    if (footage === "Not sure") {
      customerAssumptions.push("Final scope assumes customer evidence source materials, participant availability, and approval requirements are confirmed before production begins.");
    } else if (footage === "Remote recording support") {
      customerAssumptions.push("Participants will use their own computer, camera, microphone, and internet connection unless equipment kits are separately scoped.");
      customerAssumptions.push("Recording quality may vary based on participant equipment, internet connection, and recording environment.");
    } else {
      customerAssumptions.push("Client-provided customer interview recordings and supporting assets are approved for use in the final deliverables.");
    }

    if (quoteSupport === "Client provides approved outline") {
      customerAssumptions.push("Client-approved customer evidence outline and proof points will guide edit development.");
    } else if (quoteSupport === "Light edit only") {
      customerAssumptions.push("Approved customer quotes and source materials will guide the edit-led evidence flow.");
    } else {
      customerAssumptions.push("Approved customer story direction, proof points, and quotes will guide the evidence narrative.");
    }

    customerAssumptions.push("Client feedback will be consolidated before being shared with 2A.");

    if (shouldShowMotionDuration() && motionDurationSelect.value !== "none" && motionDurationSelect.value !== "custom") {
      customerAssumptions.push("Supporting graphics and animated elements are limited to the scoped duration listed above.");
    }

    if (getValue("descriptiveAudio") === "not-sure" && supportsDescriptiveAudio(path)) {
      customerAssumptions.push("Client to confirm whether descriptive audio is required.");
    }

    customerAssumptions.push("Additional participants, approval cycles, formats, versions, or revisions may impact scope, timeline, or budget.");
    return customerAssumptions.slice(0, tierDefaults[tier].assumptionLimit);
  }

  const assumptions = [
    "Client will provide relevant source materials before work begins.",
    "Client-provided assets are approved for use in the final deliverables.",
    "Client feedback will be consolidated before being shared with 2A.",
  ];

  if (pathConfigs[path].narrative) {
    assumptions.push("Final script approval is required before design, storyboard, animation, voiceover, or edit work begins.");
    assumptions.push("Approved style frames and/or storyboards will guide animation, motion design, and/or edit development.");
  }

  if (shouldShowMotionDuration() && motionDurationSelect.value !== "none" && motionDurationSelect.value !== "custom") {
    assumptions.push("Supporting graphics and animated elements are limited to the scoped duration listed above.");
  }

  if (getValue("descriptiveAudio") === "not-sure" && supportsDescriptiveAudio(path)) {
    assumptions.push("Client to confirm whether descriptive audio is required.");
  }

  assumptions.push("Additional formats, versions, or revisions may impact scope, timeline, or budget.");
  return assumptions.slice(0, tierDefaults[tier].assumptionLimit);
}

function buildExclusions(tier) {
  const path = pathSelect.value;
  if (path === "webinar") {
    const exclusions = [
      "Live webinar production, hosting, platform management, or live event support",
      "Registration strategy",
      "Speaker sourcing",
      "Platform upload or publishing",
      "Promotion strategy or paid media strategy",
      "Localization or translation",
      "Additional review rounds beyond those listed in scope",
    ];

    if (getSelectedText("webinarAccessibility") === "Full accessibility review/report") {
      exclusions.push("Full accessibility review/report, unless separately scoped");
    }

    return exclusions.slice(0, tierDefaults[tier].exclusionLimit);
  }

  const exclusions = [
    "Live capture or on-site filming",
    "Production crew, travel, permits, and location coordination",
    "Additional review rounds beyond those listed in scope",
    "Additional formats, aspect ratios, or derivative assets not listed in deliverables",
  ];

  if (path === "podcast" && !hasPodcastVideoOutput()) {
    exclusions[3] = "Additional audio formats, versions, or derivative assets not listed in deliverables";
  }

  if (path === "product-showcase") {
    exclusions.push("Product design or UX design");
    exclusions.push("Recreating product UI from scratch");
  }

  const brandHasCustomVisuals = path === "brand-story" && hasBrandStoryCustomVisuals();

  if (path === "brand-story" && brandHasCustomVisuals) {
    exclusions.push("Additional visual routes, illustration systems, or animation rounds beyond those listed in scope");
    exclusions.push("Character design or complex illustrated systems, unless separately scoped");
    exclusions.push("Net-new brand identity development");
  } else if (path === "brand-story" && tier === "premium") {
    exclusions.push("Net-new brand identity development");
  }

  if (pathConfigs[path].narrative || path === "social-clips" || path === "gif") {
    if (!brandHasCustomVisuals) {
      exclusions.push("Custom illustrative animation, unless explicitly scoped");
      exclusions.push("Additional animation or supporting graphics beyond the scoped duration, unless separately scoped");
    } else {
      exclusions.push("Additional animation, illustration assets, or supporting graphics beyond those listed in scope, unless separately scoped");
    }
    exclusions.push("Custom music composition or advanced sound design, unless separately scoped");
  }

  if (path === "customer-evidence") {
    exclusions.push("Talent sourcing");
    exclusions.push("Legal release management");
    exclusions.push("External camera or microphone kits");
  }

  if (path === "podcast") {
    exclusions.push("In-person recording");
    exclusions.push("Travel");
    exclusions.push("External camera or USB microphone kits");
    exclusions.push("Participant legal sign-off");
    exclusions.push("Podcast hosting, publishing, or distribution");
    exclusions.push("Custom music composition or advanced sound design, unless separately scoped");
    if (Number(getValue("podcastSocialClips", 0)) > 0) {
      exclusions.push("Additional social clips beyond the scoped quantity");
    }
  }

  exclusions.push("Localization or translation");
  return [...new Set(exclusions)].slice(0, tierDefaults[tier].exclusionLimit);
}

function buildFlags() {
  const messages = [];
  if (getValue("liveCapture") !== "no") {
    messages.push("This project requires custom scoping with the video practice lead. V1 of the scope builder does not support live capture or on-site filming.");
  }
  if (motionDurationSelect.value === "custom" && shouldShowMotionDuration()) {
    messages.push("Custom supporting graphics or animated elements duration should be reviewed with the video practice lead before the SOW is finalized.");
  }
  if (pathSelect.value === "webinar" && getSelectedText("webinarAccessibility") === "Full accessibility review/report") {
    messages.push("Full accessibility review/report should be reviewed with the video practice lead before the SOW is finalized.");
  }
  if (pathSelect.value === "webinar" && getValue("descriptiveAudio") === "not-sure" && hasWebinarVideoOutput()) {
    messages.push("Descriptive audio requirements must be confirmed before the SOW is finalized.");
  }
  if (getSelectedText("productAssets") === "Not sure" || getSelectedText("uiAnimation") === "Not sure" || getSelectedText("participantFootage") === "Not sure" || getSelectedText("podcastGraphics") === "Not sure") {
    messages.push("One or more selected inputs should be reviewed before this scope is finalized.");
  }
  return messages;
}

function updateOutput() {
  const tier = getTier();
  const config = pathConfigs[pathSelect.value];
  const flagMessages = buildFlags();
  const sections = [
    "### Video Scope",
    "",
    `2A will provide ${config.label} support, including:`,
    "",
    buildScopeBullets(tier).map((item) => `- ${cleanBulletText(item)}`).join("\n"),
    "",
    lineList("### Final deliverables include", buildDeliverables()),
    "",
    lineList("### Client Responsibilities", buildResponsibilities()),
    "",
    lineList("### Assumptions", buildAssumptions(tier)),
    "",
    lineList("### Exclusions", buildExclusions(tier)),
  ];

  if (flagMessages.length) {
    sections.push("", "### Internal Note", "", "This project includes elements that require custom scoping with the video practice lead before the SOW is finalized.");
  }

  generatedMarkdown = cleanGeneratedOutput(sections.filter((section) => section !== "").join("\n"));
  renderMarkdown(generatedMarkdown);

  motionDurationGroup.classList.toggle("hidden", !shouldShowMotionDuration());
  flags.innerHTML = flagMessages.map((message) => `<div class="flag">${message}</div>`).join("");

  tierRecommendation.textContent =
    tierSelect.value === "not-sure"
      ? `Recommended preset based on these answers: ${tier.charAt(0).toUpperCase() + tier.slice(1)}.`
      : "";
}

async function copyOutput() {
  try {
    await navigator.clipboard.writeText(generatedMarkdown);
  } catch {
    const temporaryText = document.createElement("textarea");
    temporaryText.value = generatedMarkdown;
    temporaryText.setAttribute("readonly", "");
    temporaryText.style.position = "fixed";
    temporaryText.style.top = "-9999px";
    document.body.appendChild(temporaryText);
    temporaryText.select();
    document.execCommand("copy");
    temporaryText.remove();
  }

  copyStatus.textContent = "Copied";
  setTimeout(() => {
    copyStatus.textContent = "";
  }, 1800);
}

pathSelect.addEventListener("change", () => {
  brandVisualApproachTouched = false;
  renderQuestions();
});
tierSelect.addEventListener("change", () => {
  if (pathSelect.value === "brand-story") {
    renderQuestions();
    if (!brandVisualApproachTouched) {
      applyBrandStoryTierDefaults();
      updateOutput();
    }
  }
});
form.addEventListener("input", updateOutput);
form.addEventListener("change", (event) => {
  if (pathSelect.value === "brand-story" && event.target?.name === "brandVisualApproach") {
    brandVisualApproachTouched = true;
  }
  if (pathSelect.value === "webinar" && event.target?.name === "webinarSupport") {
    renderQuestions();
  }
});
copyButton.addEventListener("click", copyOutput);

renderQuestions();
