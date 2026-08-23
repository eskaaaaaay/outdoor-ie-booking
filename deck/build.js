const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
pres.author = "Loggdin";
pres.company = "Loggdin";
pres.title = "Booking for outdoor.ie — Loggdin proposal";

// ---- design system ------------------------------------------------------
const C = {
  green:    "16513C", // brand deep green — for solid fills
  accent:   "4FA98A", // BRIGHT green — text/eyebrows on dark backgrounds
  ink:      "16201C", // near-black — dark slide bg / dark text on light
  ink2:     "5A6661", // muted text on light
  line:     "E2E4E0", // hairline on light
  paper:    "FFFFFF",
  paper2:   "F4F6F4", // faint panel on light
  white:    "FFFFFF",
  cardDark: "22302A", // card fill on dark bg (clearer than before)
  cardEdge: "36473E", // border on dark cards
  inkBar:   "13201B", // even darker band for stat strips
};
const MONO = "Courier New";
const SANS = "Arial";
const W = 13.33, H = 7.5;

// ---- helpers ------------------------------------------------------------
function bg(s, color) { s.background = { color }; }
function eyebrow(s, t, x, y, onDark) {
  s.addText(t.toUpperCase(), {
    x, y, w: 9, h: 0.32, fontFace: MONO, fontSize: 12.5, bold: true,
    color: onDark ? C.accent : C.green, charSpacing: 3, align: "left", valign: "middle",
  });
}
function h1(s, t, x, y, color, w) {
  s.addText(t, {
    x, y, w: w || 11.6, h: 1.15, fontFace: SANS, fontSize: 33, bold: true,
    color: color || C.ink, align: "left", valign: "top", lineSpacing: 36,
  });
}
function card(s, x, y, w, h, fill, edge) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: 0.09, fill: { color: fill },
    line: edge ? { color: edge, width: 1 } : { type: "none" },
  });
}
function circ(s, x, y, d, fill, txt, tc) {
  s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { type: "none" } });
  if (txt) s.addText(txt, { x, y, w: d, h: d, fontFace: MONO, fontSize: 16, bold: true, color: tc, align: "center", valign: "middle" });
}

// ========================================================================
// 1 — TITLE (dark)
// ========================================================================
(() => {
  const s = pres.addSlide(); bg(s, C.ink);
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.9, y: 0.9, w: 0.55, h: 0.55, rectRadius: 0.1, fill: { color: C.green }, line: { type: "none" } });
  s.addText("✓", { x: 0.9, y: 0.9, w: 0.55, h: 0.55, fontFace: SANS, fontSize: 22, bold: true, color: C.white, align: "center", valign: "middle" });
  s.addText("LOGGDIN", { x: 1.6, y: 0.9, w: 6, h: 0.55, fontFace: MONO, fontSize: 14, bold: true, color: C.white, charSpacing: 4, valign: "middle" });
  eyebrow(s, "Dublin · Pergola consultations", 0.9, 2.7, true);
  s.addText("Booking for outdoor.ie", { x: 0.9, y: 3.05, w: 11.6, h: 1.6, fontFace: SANS, fontSize: 52, bold: true, color: C.white, align: "left", valign: "top", lineSpacing: 52 });
  s.addText("A drop-in consultation calendar, built and managed by Loggdin.", { x: 0.9, y: 4.65, w: 10.5, h: 0.6, fontFace: SANS, fontSize: 18, color: "C9D4CF", align: "left" });
  s.addText("PROPOSAL — V1  ·  CONFIDENTIAL", { x: 0.9, y: 6.55, w: 9, h: 0.4, fontFace: MONO, fontSize: 12, bold: true, color: C.accent, charSpacing: 2 });
  s.addNotes("Title. Proposal from Loggdin to The Outdoor Scene (outdoor.ie) for a drop-in booking calendar on their WordPress site.");
})();

// ========================================================================
// 2 — PROBLEM (light)
// ========================================================================
(() => {
  const s = pres.addSlide(); bg(s, C.paper);
  eyebrow(s, "The problem", 0.9, 0.7);
  h1(s, "The enquiry gap", 0.9, 1.05);
  s.addText("Every consultation still starts with a form, a phone call, or an email. The people most ready to buy are the ones who get stuck.", { x: 0.9, y: 2.05, w: 11.4, h: 0.7, fontFace: SANS, fontSize: 16, color: C.ink2, lineSpacing: 22 });
  const cards = [
    ["Decided customers hit a wall", "Someone ready to buy a pergola wants a time — not a contact form that goes nowhere at 9pm."],
    ["Back-and-forth loses the lead", "Phone and email tag over several days cools a warm intent into a maybe."],
    ["Nothing lands in your diary", "No automatic calendar entry, invite, or reminder. The team schedules by hand."],
  ];
  const cw = 3.7, gap = 0.45, x0 = 0.9, y0 = 3.0, ch = 2.95;
  cards.forEach((c, i) => {
    const x = x0 + i * (cw + gap);
    card(s, x, y0, cw, ch, C.paper2, C.line);
    circ(s, x + 0.35, y0 + 0.35, 0.5, C.green, String(i + 1), C.white);
    s.addText(c[0], { x: x + 0.35, y: y0 + 1.0, w: cw - 0.7, h: 0.7, fontFace: SANS, fontSize: 16, bold: true, color: C.ink, lineSpacing: 19 });
    s.addText(c[1], { x: x + 0.35, y: y0 + 1.7, w: cw - 0.7, h: 1.0, fontFace: SANS, fontSize: 13, color: C.ink2, lineSpacing: 18 });
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.9, y: 6.35, w: 11.53, h: 0.55, fill: { color: C.inkBar }, line: { type: "none" } });
  s.addText([{ text: "0 ", options: { fontFace: MONO, fontSize: 16, bold: true, color: C.accent } }, { text: "online bookings today — every consult is still manual.", options: { fontFace: SANS, fontSize: 14, color: C.white } }], { x: 1.1, y: 6.35, w: 11, h: 0.55, valign: "middle" });
  s.addNotes("Problems: high-intent customers can't self-serve a time, manual scheduling loses warm leads, nothing auto-lands in the diary.");
})();

// ========================================================================
// 3 — WEDGE (light, rebalanced)
// ========================================================================
(() => {
  const s = pres.addSlide(); bg(s, C.paper);
  eyebrow(s, "The wedge", 0.9, 0.7);
  h1(s, "When intent is highest,\nthe path is longest.", 0.9, 1.05);
  // statement band
  card(s, 0.9, 2.75, 11.53, 1.45, C.ink);
  s.addText("A customer is on your pergola page at 9pm and wants Friday 2pm. The form can't give them that. So they leave — and they don't come back.", { x: 1.25, y: 2.95, w: 10.8, h: 1.05, fontFace: SANS, fontSize: 18, color: C.white, lineSpacing: 26, valign: "middle" });
  // 3-col flow
  const cols = [
    ["TODAY", "Customer decides → phones next day → may forget", false],
    ["CONTACT FORM", "Sends an email → waits for a human to reply", false],
    ["WITH THIS", "Picks a live slot → confirmed in 30 seconds", true],
  ];
  const cw = 3.7, gap = 0.45, x0 = 0.9, y0 = 4.55, ch = 1.95;
  cols.forEach((c, i) => {
    const x = x0 + i * (cw + gap);
    if (c[2]) card(s, x, y0, cw, ch, C.green);
    else card(s, x, y0, cw, ch, C.paper2, C.line);
    s.addText(c[0], { x: x + 0.35, y: y0 + 0.3, w: cw - 0.7, h: 0.4, fontFace: MONO, fontSize: 12.5, bold: true, color: c[2] ? C.white : C.green, charSpacing: 1.5 });
    s.addText(c[1], { x: x + 0.35, y: y0 + 0.8, w: cw - 0.7, h: 0.95, fontFace: SANS, fontSize: 14, color: c[2] ? C.white : C.ink, lineSpacing: 19, valign: "top" });
  });
  s.addNotes("Sharpest pain: highest-intent moment has the longest, most manual path. Live slots close it in 30 seconds.");
})();

// ========================================================================
// 4 — SOLUTION (dark, contrast fixed)
// ========================================================================
(() => {
  const s = pres.addSlide(); bg(s, C.ink);
  eyebrow(s, "The solution", 0.9, 0.7, true);
  s.addText("A real booking calendar on your site.\nZero install.", { x: 0.9, y: 1.05, w: 11.6, h: 1.5, fontFace: SANS, fontSize: 34, bold: true, color: C.white, lineSpacing: 38 });
  const steps = [
    ["See availability", "Your real opening hours, days off and buffers — shown live."],
    ["Pick a slot", "Customer chooses a time and adds their details in one go."],
    ["Confirmed", "They get a confirmation + calendar invite. So do you."],
  ];
  const cw = 3.7, gap = 0.45, x0 = 0.9, y0 = 2.95, ch = 2.55;
  steps.forEach((st, i) => {
    const x = x0 + i * (cw + gap);
    card(s, x, y0, cw, ch, C.cardDark, C.cardEdge);
    s.addText(String(i + 1).padStart(2, "0"), { x: x + 0.35, y: y0 + 0.3, w: 1.2, h: 0.7, fontFace: MONO, fontSize: 26, bold: true, color: C.accent });
    s.addText(st[0], { x: x + 0.35, y: y0 + 1.05, w: cw - 0.7, h: 0.5, fontFace: SANS, fontSize: 18, bold: true, color: C.white });
    s.addText(st[1], { x: x + 0.35, y: y0 + 1.55, w: cw - 0.7, h: 0.9, fontFace: SANS, fontSize: 13, color: "C9D4CF", lineSpacing: 17 });
    if (i < 2) s.addText("→", { x: x + cw, y: y0 + 0.95, w: gap, h: 0.6, fontFace: SANS, fontSize: 22, bold: true, color: C.accent, align: "center", valign: "middle" });
  });
  s.addText("No plugin. No theme change. No new login for your team.", { x: 0.9, y: 6.0, w: 11.5, h: 0.5, fontFace: SANS, fontSize: 15, italic: true, color: C.accent });
  s.addNotes("Three-step magic: see availability, pick a slot, confirmed with invites. Nothing installed on WordPress.");
})();

// ========================================================================
// 6 — COMPARISON (light)
// ========================================================================
(() => {
  const s = pres.addSlide(); bg(s, C.paper);
  eyebrow(s, "Better, not just different", 0.9, 0.7);
  h1(s, "Why not keep the contact form?", 0.9, 1.05);
  const headY = 2.3, rowH = 0.62, x = 0.9, w = 11.53;
  s.addShape(pres.shapes.RECTANGLE, { x, y: headY, w, h: rowH, fill: { color: C.inkBar }, line: { type: "none" } });
  s.addText("CAPABILITY", { x: x + 0.3, y: headY, w: 5, h: rowH, fontFace: MONO, fontSize: 12, bold: true, color: C.white, valign: "middle", charSpacing: 2 });
  s.addText("CONTACT FORM", { x: x + 6.0, y: headY, w: 2.7, h: rowH, fontFace: MONO, fontSize: 12, bold: true, color: "C9D4CF", valign: "middle", align: "center", charSpacing: 1 });
  s.addText("LOGGDIN BOOKING", { x: x + 8.93, y: headY, w: 2.6, h: rowH, fontFace: MONO, fontSize: 12, bold: true, color: C.accent, valign: "middle", align: "center", charSpacing: 1 });
  const rows = [
    ["Real, live time slots", "✗", "✓"],
    ["Calendar invite sent", "✗", "✓"],
    ["Automatic day-before reminder", "✗", "✓"],
    ["Customer reschedules themselves", "✗", "✓"],
    ["No staff login to check bookings", "✗", "✓"],
  ];
  rows.forEach((r, i) => {
    const y = headY + rowH + i * rowH;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w, h: rowH, fill: { color: i % 2 ? C.paper2 : C.paper }, line: { color: C.line, width: 1 } });
    s.addText(r[0], { x: x + 0.3, y, w: 5.5, h: rowH, fontFace: SANS, fontSize: 14, color: C.ink, valign: "middle" });
    s.addText(r[1], { x: x + 6.0, y, w: 2.7, h: rowH, fontFace: SANS, fontSize: 16, bold: true, color: C.ink2, align: "center", valign: "middle" });
    s.addText(r[2], { x: x + 8.93, y, w: 2.6, h: rowH, fontFace: SANS, fontSize: 16, bold: true, color: C.green, align: "center", valign: "middle" });
  });
  s.addNotes("Framed on value: live slots, invites, reminders, self-serve reschedule, no staff login.");
})();

// ========================================================================
// 8 — VALUE (dark)
// ========================================================================
(() => {
  const s = pres.addSlide(); bg(s, C.ink);
  eyebrow(s, "What you get", 0.9, 0.7, true);
  s.addText("Value to outdoor.ie", { x: 0.9, y: 1.05, w: 11.6, h: 1.0, fontFace: SANS, fontSize: 34, bold: true, color: C.white });
  const vals = [
    ["24/7 capture", "Warm leads book themselves, even outside office hours."],
    ["Zero scheduling time", "No one manually arranges or chases consultations."],
    ["Runs on what you have", "Sits on your existing WordPress site. No new platform."],
    ["Fewer lost enquiries", "A real next step on the page instead of a dead end."],
  ];
  const cw = 5.6, gap = 0.45, x0 = 0.9, y0 = 2.7, ch = 1.9;
  vals.forEach((v, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = x0 + (cw + gap) * col, y = y0 + row * (ch + 0.3);
    card(s, x, y, cw, ch, C.cardDark, C.cardEdge);
    circ(s, x + 0.35, y + 0.35, 0.5, C.green, "✓", C.white);
    s.addText(v[0], { x: x + 1.0, y: y + 0.3, w: cw - 1.3, h: 0.5, fontFace: SANS, fontSize: 17, bold: true, color: C.white });
    s.addText(v[1], { x: x + 1.0, y: y + 0.85, w: cw - 1.3, h: 0.85, fontFace: SANS, fontSize: 13, color: "C9D4CF", lineSpacing: 17 });
  });
  s.addNotes("Value: captures leads round the clock, removes staff scheduling, uses existing WordPress, reduces lost enquiries.");
})();

// ========================================================================
// 9 — ROADMAP (light)
// ========================================================================
(() => {
  const s = pres.addSlide(); bg(s, C.paper);
  eyebrow(s, "Roadmap", 0.9, 0.7);
  h1(s, "From preview to live", 0.9, 1.05);
  const phases = [
    ["P1", "Preview", "Test on a draft page, no one sees it yet."],
    ["P2", "Cal.com setup", "Account, event type, availability and branding."],
    ["P3", "Go live", "Publish + add the 'Book a consultation' button."],
    ["P4", "Expand", "Add booking to other services you offer."],
    ["P5", "Insights", "Review booking patterns and busy periods."],
  ];
  const n = phases.length, x0 = 1.35, y = 4.15, span = 10.6;
  const step = span / (n - 1);
  s.addShape(pres.shapes.LINE, { x: x0, y, w: span, h: 0, line: { color: C.line, width: 2 } });
  phases.forEach((p, i) => {
    const cx = x0 + step * i;
    s.addShape(pres.shapes.OVAL, { x: cx - 0.3, y: y - 0.3, w: 0.6, h: 0.6, fill: { color: C.green }, line: { color: C.paper, width: 3 } });
    s.addText(p[0], { x: cx - 0.3, y: y - 0.3, w: 0.6, h: 0.6, fontFace: MONO, fontSize: 12, bold: true, color: C.white, align: "center", valign: "middle" });
    const above = i % 2 === 0;
    const ty = above ? y - 1.55 : y + 0.5;
    s.addText(p[1], { x: cx - 1.1, y: ty, w: 2.2, h: 0.4, fontFace: SANS, fontSize: 15, bold: true, color: C.ink, align: "center" });
    s.addText(p[2], { x: cx - 1.25, y: ty + 0.4, w: 2.5, h: 0.95, fontFace: SANS, fontSize: 12, color: C.ink2, align: "center", lineSpacing: 15 });
  });
  s.addNotes("Phased rollout: preview, Cal.com setup, go live with button, expand to other services, review insights.");
})();

// ========================================================================
// 10 — GO TO MARKET (light)
// ========================================================================
(() => {
  const s = pres.addSlide(); bg(s, C.paper);
  eyebrow(s, "Go to market", 0.9, 0.7);
  h1(s, "Catching customers at intent", 0.9, 1.05);
  const cards = [
    ["Button on pergola pages", "'Book a free consultation' sits where the decision is made."],
    ["Intercept, don't interrupt", "Offer a time to people already interested — not a cold ask."],
    ["Keep the enquiry form", "Questions still go to the form; bookings go to the calendar."],
    ["Promote in follow-ups", "Drop the booking link in quotes and after-visit emails."],
  ];
  const cw = 5.6, gap = 0.45, x0 = 0.9, y0 = 2.75, ch = 1.9;
  cards.forEach((c, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = x0 + (cw + gap) * col, y = y0 + row * (ch + 0.3);
    card(s, x, y, cw, ch, C.paper2, C.line);
    s.addText(c[0], { x: x + 0.4, y: y + 0.3, w: cw - 0.8, h: 0.5, fontFace: SANS, fontSize: 17, bold: true, color: C.green });
    s.addText(c[1], { x: x + 0.4, y: y + 0.85, w: cw - 0.8, h: 0.85, fontFace: SANS, fontSize: 13, color: C.ink2, lineSpacing: 18 });
  });
  s.addNotes("GTM on their own site: button at intent, intercept not interrupt, keep the form, promote in follow-ups.");
})();

// ========================================================================
// 11 — THE ASK (dark)
// ========================================================================
(() => {
  const s = pres.addSlide(); bg(s, C.ink);
  eyebrow(s, "The ask", 0.9, 0.7, true);
  s.addText("What we need to start", { x: 0.9, y: 1.05, w: 11.6, h: 1.0, fontFace: SANS, fontSize: 34, bold: true, color: C.white });
  const asks = [
    ["WordPress admin", "Access to add a page and paste the block."],
    ["Cal.com account", "Or we create one and hand over the keys."],
    ["Bookings email", "sales@outdoor.ie — copied on every booking."],
    ["A go", "Approve the page and we build, test and launch."],
  ];
  const cw = 2.75, gap = 0.4, x0 = 0.9, y0 = 2.85, ch = 3.05;
  asks.forEach((a, i) => {
    const x = x0 + i * (cw + gap);
    card(s, x, y0, cw, ch, C.cardDark, C.cardEdge);
    s.addText(String(i + 1), { x: x + 0.3, y: y0 + 0.3, w: 1, h: 0.7, fontFace: MONO, fontSize: 28, bold: true, color: C.accent });
    s.addText(a[0], { x: x + 0.3, y: y0 + 1.1, w: cw - 0.6, h: 0.7, fontFace: SANS, fontSize: 16, bold: true, color: C.white, lineSpacing: 18 });
    s.addText(a[1], { x: x + 0.3, y: y0 + 1.85, w: cw - 0.6, h: 1.0, fontFace: SANS, fontSize: 12, color: "C9D4CF", lineSpacing: 16 });
  });
  s.addNotes("The ask: WordPress admin, a Cal.com account (or we make one), the bookings email, and their go-ahead.");
})();

// ========================================================================
// 12 — VISION / CLOSING (green, balanced)
// ========================================================================
(() => {
  const s = pres.addSlide(); bg(s, C.green);
  // motif: large faint circle on the right to balance the left-weighted text
  s.addShape(pres.shapes.OVAL, { x: 9.7, y: 1.6, w: 4.6, h: 4.6, fill: { color: "1C6347" }, line: { type: "none" } });
  s.addShape(pres.shapes.OVAL, { x: 11.0, y: 2.9, w: 2.0, h: 2.0, fill: { color: C.green }, line: { type: "none" } });
  s.addText("✓", { x: 11.0, y: 2.9, w: 2.0, h: 2.0, fontFace: SANS, fontSize: 64, bold: true, color: C.white, align: "center", valign: "middle" });
  s.addText("From zero to logged.", { x: 0.9, y: 2.3, w: 9.0, h: 1.4, fontFace: SANS, fontSize: 48, bold: true, color: C.white, lineSpacing: 50 });
  s.addText("A booking calendar that captures the customers who've already decided — and gets them in your diary without the back-and-forth.", { x: 0.9, y: 3.8, w: 8.2, h: 1.0, fontFace: SANS, fontSize: 17, color: "DCEDE5", lineSpacing: 24 });
  s.addText("hello@loggdin.com   ·   loggdin.com", { x: 0.9, y: 6.4, w: 11, h: 0.5, fontFace: MONO, fontSize: 14, bold: true, color: C.white, charSpacing: 1 });
  s.addNotes("Closing: From zero to logged. Reclaim the warm lead and the scheduling time. Contact Loggdin.");
})();

// ---- write ---------------------------------------------------------------
pres.writeFile({ fileName: "outdoor-ie-booking-deck.pptx" }).then(f => console.log("WROTE", f));
