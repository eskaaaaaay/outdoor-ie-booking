# Booking page for outdoor.ie

A working online booking calendar for pergola design consultations, ready to add to the outdoor.ie WordPress site.

**Nothing gets installed.** No plugin, no theme change, no changes to email, hosting or domain settings. It is one new page with one block of code on it. To remove it, delete the page.

---

## What's in here

| File | What it is |
|---|---|
| `index.html` | A standalone sample page. Open it in a browser to see and test the calendar before touching the website. |
| `booking-embed.html` | Just the code to paste into WordPress. This is the only file that goes on the live site. It is **config-driven** — edit the four values at the top to point it at a different Cal.com event, brand colour, or notification address. |

The same files work for any business: change the config and the calendar shows that business's bookings. That's how outdoor.ie can drop this into their own workspace without any code changes.

---

## 1. Set up your Cal.com calendar (one-time)

The calendar runs on [Cal.com](https://cal.com). outdoor.ie need their own account and one event type before the embed will show their availability.

1. **Sign up** at cal.com and pick a username (this becomes part of your booking link).
2. **Create an event type** for the consultation:
   - Name it (e.g. "Pergola design consultation").
   - Set the duration (e.g. 30 min).
   - Note the slug — your booking link is `https://cal.com/<username>/<slug>`.
3. **Set availability**:
   - Add your working hours and timezone.
   - Set a buffer between meetings and a minimum notice (e.g. 24h) so nobody books a slot in the past.
   - Block out days off and holidays.
4. **Connect a calendar** (Google or Outlook) so Cal.com knows when you're already busy and avoids double bookings.
5. **Notifications**: confirmations and reschedule/cancel emails go to the customer automatically. To copy every booking to a team inbox, set the `notify` value in the embed config (below) — e.g. `sales@outdoor.ie`.
6. **(Optional) Branding**: add your logo and accent colour in Cal.com — this matches the `brandColor` value in the embed config.

When that's done you have a link like `username/pergola-consultation`. Drop it into the embed's `calLink` (step 3 below).

> Cal.com's interface changes between versions; the path is usually **Event Types → New event type**, then **Availability**. Exact labels may differ slightly on your plan.

---

## 2. Try it first

Open `index.html` in any browser — double-click it, or drag it onto a browser window.

You'll see the live calendar. Book a slot with your own email address and watch what arrives. **These are real bookings**, so cancel them afterwards using the link in the confirmation email.

> If this repository has GitHub Pages turned on, the same page is live at `https://<your-username>.github.io/<repository-name>/` — handy for sharing with colleagues who'd rather click a link than download a file.

---

## 3. Add it to the website

### Step 1 — Create the page (unpublished)

1. Log in to WordPress and go to **Pages → Add New**.
2. Title it **Book a Consultation**. The address becomes `outdoor.ie/book-a-consultation/`.
3. Don't add it to any menu or link to it yet — keep it unpublished while you test.
4. Save it as a draft. You'll publish it in step 6 once it's tested.

### Step 2 — Paste in the calendar

Copy the **config block** and the **calendar block** from `booking-embed.html` (leave the comment block at the very top — it's just notes). If outdoor.ie want the calendar pointed at their own Cal.com event, brand colour or notification address, edit the four values in the config block first; that's the only thing to change. Then:

**If you edit with Elementor**

1. Click **Edit with Elementor** on the page.
2. Search the widget panel for **HTML** and drag the **HTML** widget onto the page.
3. Paste the code into the **HTML Code** box.
4. Click **Update**, then **Preview Changes** in a new tab.

**If you edit with the standard WordPress editor**

1. Click **+** to add a block, search for **Custom HTML**.
2. Paste the code in and click **Update**.

### Step 3 — If the calendar doesn't appear

Some WordPress security plugins strip `<script>` tags. If you see an empty space where the calendar should be, delete what you pasted and use the **no-script version** instead — it's at the bottom of `booking-embed.html`, commented out. Remove the `<!--` and `-->` around it.

---

## 4. Where the bookings go

Every booking automatically copies **sales@outdoor.ie** (set in the `notify` value of the config). Nobody at The Outdoor Scene needs an account, a login or a password — the bookings simply arrive as email.

| When | The customer gets | sales@outdoor.ie gets |
|---|---|---|
| They book | Confirmation + calendar invite | The booking, with name, phone, Eircode and notes |
| Day before | A reminder | — |
| They reschedule | Updated confirmation | Notice of the new time |
| They cancel | Cancellation notice | Notice, and the slot frees up |

**Do this on day one:** mark the first booking email as *not junk* and add the sender to your safe senders. First messages from a new sender often land in junk, and a booking sitting unread in a junk folder is worse than no booking at all.

---

## 5. Test before anyone real sees it

Use a personal email address, not a work one, so you see exactly what a customer sees.

- [ ] Open the page on a phone and book a slot
- [ ] Confirmation arrives, with the right date, time and address
- [ ] The same booking arrives at `sales@outdoor.ie` — check junk if it isn't in the inbox
- [ ] The calendar invite lands in the right diary
- [ ] Reschedule using the link in the email — sales@outdoor.ie is notified
- [ ] Cancel using the link in the email — sales@outdoor.ie is notified
- [ ] No slots are offered outside opening hours or on a Sunday
- [ ] The page looks right on a phone as well as a computer

---

## 6. Going live

1. **Publish the page** so it's publicly visible.
2. Add a button on the pergola pages linking to `/book-a-consultation/`, labelled **"Book a free consultation"**. That link is what actually drives bookings — the page on its own won't be found.
3. Leave the existing enquiry form exactly where it is. People with a question want the form; people who have decided want a time.

---

## 7. Changing things later

| To change | Where |
|---|---|
| Opening hours, holidays, days off | In your Cal.com availability settings |
| The Cal.com event shown | `calLink` in the config block |
| The calendar accent colour | `brandColor` in the config block |
| How tall the calendar is | `height` in the config block |
| Which address is copied on bookings | `notify` (the `guests` value) in the config block |

---

## 8. Removing it

Delete the page. That's the whole rollback. Nothing was installed, no settings were changed, and no other part of outdoor.ie knows this existed.
