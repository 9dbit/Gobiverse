#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE="${PROJECT_DIR}/content/week-01/p001/gobi-p001-storyboard-v4.png"
THUMBNAIL="${PROJECT_DIR}/content/week-01/p001/gobi-p001-thumbnail-v4.png"
SUBTITLES="${PROJECT_DIR}/content/week-01/p001/gobi-p001-id.srt"
WORK_DIR="${PROJECT_DIR}/tmp/p001-animatic-v2"
FRAME_DIR="${WORK_DIR}/frames"
CLIP_DIR="${WORK_DIR}/clips"
OUTPUT="${PROJECT_DIR}/content/week-01/p001/gobi-p001-animatic-v2.mp4"
POSTER="${PROJECT_DIR}/content/week-01/p001/gobi-p001-animatic-poster-v2.jpg"
CONTACT_SHEET="${PROJECT_DIR}/content/week-01/p001/gobi-p001-animatic-contact-sheet-v2.jpg"
FONT="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

mkdir -p "${FRAME_DIR}" "${CLIP_DIR}"

# Crop geometry is locked to storyboard v4 (941×1672).
ffmpeg -loglevel error -y -i "${SOURCE}" -vf "crop=941:290:0:0" "${FRAME_DIR}/01-portal.png"
ffmpeg -loglevel error -y -i "${SOURCE}" -vf "crop=941:265:0:290" "${FRAME_DIR}/02-city.png"
ffmpeg -loglevel error -y -i "${SOURCE}" -vf "crop=941:295:0:555" "${FRAME_DIR}/03-breakout.png"
ffmpeg -loglevel error -y -i "${SOURCE}" -vf "crop=310:205:0:850" "${FRAME_DIR}/04-academy.png"
ffmpeg -loglevel error -y -i "${SOURCE}" -vf "crop=320:205:310:850" "${FRAME_DIR}/05-arena.png"
ffmpeg -loglevel error -y -i "${SOURCE}" -vf "crop=311:205:630:850" "${FRAME_DIR}/06-lab.png"
ffmpeg -loglevel error -y -i "${SOURCE}" -vf "crop=941:275:0:1055" "${FRAME_DIR}/07-closeup.png"
ffmpeg -loglevel error -y -i "${SOURCE}" -vf "crop=941:342:0:1330" "${FRAME_DIR}/08-hero.png"
cp "${THUMBNAIL}" "${FRAME_DIR}/09-endcard.png"

render_clip() {
  local input="$1"
  local duration="$2"
  local title="$3"
  local index="$4"
  local output="$5"
  local frames
  frames="$(awk -v d="${duration}" 'BEGIN { printf "%d", d * 30 }')"
  local graph="[0:v]split=2[bg0][fg0];[bg0]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,boxblur=18:6,eq=brightness=-0.08:saturation=0.95[bg];[fg0]scale=1000:1500:force_original_aspect_ratio=decrease,pad=1028:1528:14:14:color=0x07111F,zoompan=z='min(zoom+0.00035,1.035)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=1028x1528:fps=30[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2+45[comp];[comp]drawbox=x=0:y=0:w=1080:h=12:color=0xE21D25:t=fill,drawbox=x=62:y=172:w=176:h=10:color=0xE21D25:t=fill,drawtext=fontfile=${FONT}:text='${title}':fontcolor=white:fontsize=58:x=62:y=86:borderw=2:bordercolor=0x07111F,drawtext=fontfile=${FONT}:text='${index} / 09':fontcolor=0xE21D25:fontsize=26:x=62:y=190,drawbox=x=0:y=1748:w=1080:h=172:color=0x03070D@0.62:t=fill,format=yuv420p[out]"
  ffmpeg -loglevel error -y -loop 1 -framerate 30 -i "${input}" -t "${duration}" -filter_complex "${graph}" -map "[out]" -an -r 30 -c:v libx264 -preset medium -crf 18 -movflags +faststart "${output}"
}

render_clip "${FRAME_DIR}/01-portal.png" 3 "WELCOME, GOBI CREW" "01" "${CLIP_DIR}/01.mp4"
render_clip "${FRAME_DIR}/02-city.png" 4 "PLAY." "02" "${CLIP_DIR}/02.mp4"
render_clip "${FRAME_DIR}/03-breakout.png" 4 "LEARN." "03" "${CLIP_DIR}/03.mp4"
render_clip "${FRAME_DIR}/04-academy.png" 3 "MECHANICS" "04" "${CLIP_DIR}/04.mp4"
render_clip "${FRAME_DIR}/05-arena.png" 3 "GAMES" "05" "${CLIP_DIR}/05.mp4"
render_clip "${FRAME_DIR}/06-lab.png" 3 "AI + TECH" "06" "${CLIP_DIR}/06.mp4"
render_clip "${FRAME_DIR}/07-closeup.png" 6 "EXPLORE." "07" "${CLIP_DIR}/07.mp4"
render_clip "${FRAME_DIR}/08-hero.png" 4 "ENTER THE GOBIVERSE" "08" "${CLIP_DIR}/08.mp4"
render_clip "${FRAME_DIR}/09-endcard.png" 4 "PILIH MISI PERTAMA" "09" "${CLIP_DIR}/09.mp4"

CONCAT_GRAPH="[0:v][1:v][2:v][3:v][4:v][5:v][6:v][7:v][8:v]concat=n=9:v=1:a=0[outv]"
ffmpeg -loglevel error -y -i "${CLIP_DIR}/01.mp4" -i "${CLIP_DIR}/02.mp4" -i "${CLIP_DIR}/03.mp4" -i "${CLIP_DIR}/04.mp4" -i "${CLIP_DIR}/05.mp4" -i "${CLIP_DIR}/06.mp4" -i "${CLIP_DIR}/07.mp4" -i "${CLIP_DIR}/08.mp4" -i "${CLIP_DIR}/09.mp4" -filter_complex "${CONCAT_GRAPH}" -map "[outv]" -an -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p "${WORK_DIR}/silent-master.mp4"

# Low-level guide tone only. Replace with approved music, voice-over, and final sound design.
SUB_FILTER="subtitles='${SUBTITLES}':force_style='FontName=DejaVu Sans,FontSize=8,PrimaryColour=&H00FFFFFF,OutlineColour=&H00111F2E,BackColour=&H9903070D,BorderStyle=3,Outline=1,Shadow=0,MarginL=16,MarginR=16,MarginV=18,Alignment=2'"
ffmpeg -loglevel error -y -i "${WORK_DIR}/silent-master.mp4" -f lavfi -i "aevalsrc=0.025*sin(2*PI*55*t)*(0.65+0.35*sin(2*PI*0.25*t)):s=48000:d=34" -vf "${SUB_FILTER}" -map 0:v:0 -map 1:a:0 -t 34 -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -c:a aac -b:a 128k -ar 48000 -movflags +faststart "${OUTPUT}"

ffmpeg -loglevel error -y -ss 00:00:28.800 -i "${OUTPUT}" -frames:v 1 -q:v 2 "${POSTER}"
ffmpeg -loglevel error -y -i "${OUTPUT}" -vf "fps=1/4,scale=270:480,tile=3x3:padding=8:margin=8:color=0x07111F" -frames:v 1 -q:v 2 "${CONTACT_SHEET}"
ffprobe -v error -show_entries format=duration,size:stream=codec_name,width,height,r_frame_rate -of default=noprint_wrappers=1 "${OUTPUT}"
