# GOBI P005 — Near Miss Bukan Sinyal Asset Manifest

**Status:** Production-ready knowledge-content baseline v1  
**Series:** Myth Lab 04  
**Format:** 9:16 vertical  
**Runtime:** 34 seconds  
**Audience:** Adults 18+

## Approved assets

| Asset | Dimensions / format | SHA-256 | Status |
|---|---:|---|---|
| `gobi-p005-storyboard-v1.png` | 864×1821 | `c5d7945fc9715c3a292cc7110585aae82135697c40005842cd94801cb0c05821` | Approved six-beat storyboard |
| `gobi-p005-thumbnail-v1.png` | 941×1672 | `2d80063420f50326c1785ca7e255cafaf7f628d62e1628f5fa30c4d68f39c18f` | Approved Myth Lab cover |
| `gobi-p005-animatic-v1.mp4` | 1080×1920, 30 fps, 34 s | `99cf7f5827876334744e13fb6c736dbf86a35d6c6a74f0106bd1c7a058357f8e` | Approved guide-tone animatic |
| `gobi-p005-animatic-poster-v1.jpg` | 1080×1920 | `8a165604b9a2fb6db26c663ef1efb9b83eedbe80b3580a7b73f9d9c80c2e40f5` | Animatic poster frame |
| `gobi-p005-animatic-contact-sheet-v1.jpg` | 842×1472 | `f65a9cd68b3452faf43fcc88fcc182faa7b6ce45364f3a7add29c6e8cff19076` | Nine-timestamp QA sheet |
| `script-v1.md` | Markdown | `bc5a1b200a4eb9e412782b885da4f641e9cfab798b06d1c40d70ee0a01f63f3f` | Approved script and caption |
| `gobi-p005-id.srt` | SRT | `ccf9f5cc2805898957013af354be9c4d0b087667ad180ed555b248d576c73d1b` | Indonesian subtitle master |

## Knowledge locks

- A near miss is a completed losing outcome that appears visually close to a winning arrangement.
- It is not progress toward a future win and does not predict the next outcome.
- Salient “almost” imagery can influence attention and memory without changing probability.
- The next RNG request is resolved separately under the configured probabilities.

## Publishing locks

- Retain `18+`, educational framing, and responsible-play cue.
- Do not imply a hidden progress meter, “due” win, recovery chance, timing method, or prediction signal.
- Do not add fabricated percentages, provider claims, currency, jackpot imagery, or deposit CTA.
- Voice production is deferred; subtitles are the current approved information layer.
- Guide tone is temporary and not approved final music.

## Reproduction

- Prompt record: `../../../../assets/concepts/generation-record-p005-near-miss-v1.md`
- Render script: `../../../scripts/render-p005-animatic-v1.sh`
- Content script: `script-v1.md`
- Subtitle master: `gobi-p005-id.srt`
