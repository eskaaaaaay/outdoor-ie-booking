#!/bin/bash
# Render the deck to per-slide PNGs for visual QA.
set -e
DECK="outdoor-ie-booking-deck.pptx"
OUTDIR="slides"
mkdir -p "$OUTDIR"
SOFFICE="/Applications/LibreOffice.app/Contents/MacOS/soffice"
if [ ! -x "$SOFFICE" ]; then echo "LibreOffice not found at $SOFFICE"; exit 1; fi
echo "Converting deck -> PDF ..."
"$SOFFICE" --headless --convert-to pdf "$DECK" --outdir "$OUTDIR" >/dev/null 2>&1
PDF="$OUTDIR/outdoor-ie-booking-deck.pdf"
echo "Converting PDF -> PNGs ..."
pdftoppm -jpeg -r 110 "$PDF" "$OUTDIR/slide" >/dev/null 2>&1
echo "Done. Slides:"
ls -1 "$OUTDIR"/slide-*.jpg 2>/dev/null || ls -1 "$OUTDIR"/slide-*.png 2>/dev/null
