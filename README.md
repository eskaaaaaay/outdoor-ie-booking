# Booking page for outdoor.ie

A working online booking calendar for pergola design consultations, ready to add to the
outdoor.ie WordPress site.

**Nothing gets installed.** No plugin, no theme change, no changes to email, hosting or
domain settings. It is one new page with one block of code on it. To remove it, delete
the page.

---

## What's in here

| File | What it is |
|---|---|
| `index.html` | A standalone sample page. Open it in a browser to see and test the calendar before touching the website. |
| `booking-embed.html` | Just the code to paste into WordPress. This is the only file that goes on the live site. It is **config-driven** — edit the four values at the top to point it at a different Cal.com event, brand colour, or notification address. |

The same files work for any business: change the config and the calendar shows that business's bookings. That's how outdoor.ie can drop this into their own workspace without any code changes.

---

## 1. Try it first

Open `index.html` in any browser — double-click it, or drag it onto a browser window.

You'll see the live calendar. Book a slot with your own email address and watch what
arrives. **These are real bookings**, so cancel them afterwards using the link in the
confirmation email.

> If this repository has GitHub Pages turned on, the same page is live at
> `https://<your-username>.github.io/<repository-name>/` — handy for sharing with
> colleagues who'd rather click a link than download a file.

---

## 2. Add it to the website

### Step 1 — Make a page that nobody can stumble on yet

1. Log in to WordPress and go to **Pages → Add New**.
2. Title it **Book a Consultation**. The address becomes `outdoor.ie/book-a-consultation/`.
3. In the **Publish** box on the right, set **Visibility → Password protected** and choose
   a password to share internally. Don't add the page to any menu yet.
4. If you use Yoast or Rank Math, set **"Allow search engines to show this page?"** to **No**
   for now.
5. Click **Publish**. It's password protected, so this is safe.

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

Some WordPress security plugins strip `<script>` tags. If you see an empty space where the
calendar should be, delete what you pasted and use the **no-script version** instead — it's
at the bottom of `booking-embed.html`, commented out. Remove the `<!--` and `-->` around it.

---

## 3. Where the bookings go

Every booking automatically copies **sales@outdoor.ie**. Nobody at The Outdoor Scene needs
an account, a login or a password — the bookings simply arrive as email.

| When | The customer gets | sales@outdoor.ie gets |
|---|---|---|
| They book | Confirmation + calendar invite | The booking, with name, phone, Eircode and notes |
| Day before | A reminder | — |
| They reschedule | Updated confirmation | Notice of the new time |
| They cancel | Cancellation notice | Notice, and the slot frees up |

**Do this on day one:** mark the first booking email as *not junk* and add the sender to
your safe senders. First messages from a new sender often land in junk, and a booking
sitting unread in a junk folder is worse than no booking at all.

---

## 4. Test before anyone real sees it

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

## 5. Going live

1. **Publish box → Visibility → Public**, and switch search indexing back on.
2. Add a button on the pergola pages linking to `/book-a-consultation/`, labelled
   **"Book a free consultation"**. That link is what actually drives bookings — the page
   on its own won't be found.
3. Leave the existing enquiry form exactly where it is. People with a question want the
   form; people who have decided want a time.

---

## 6. Changing things later

| To change | Where |
|---|---|
| Opening hours, holidays, days off | Ask us — managed on our side, takes minutes |
| The green used by the calendar | `"cal-brand"` in the code |
| How tall the calendar is | `min-height` on the first line of the code |
| The questions customers are asked | Ask us — editing these here would break the booking |
| Which address is copied on bookings | `guests` in the code |

---

## 7. Removing it

Delete the page. That's the whole rollback. Nothing was installed, no settings were
changed, and no other part of outdoor.ie knows this existed.
