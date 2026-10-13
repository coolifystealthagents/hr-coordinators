#!/usr/bin/env python3
import json,hashlib
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
ROOT=Path(__file__).resolve().parents[2];DATA=json.loads((ROOT/'publishing/2026-10-12/release-data.json').read_text());OUT=ROOT/'public/thumbnails/october-12';OUT.mkdir(parents=True,exist_ok=True)
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf';regular='/System/Library/Fonts/Supplemental/Arial.ttf'
def font(p,s):
 try:return ImageFont.truetype(p,s)
 except:return ImageFont.load_default()
def wrap(d,text,f,w):
 lines=[];line=''
 for word in text.split():
  test=(line+' '+word).strip()
  if d.textbbox((0,0),test,font=f)[2]<=w:line=test
  else:lines.append(line);line=word
 if line:lines.append(line)
 return lines
def make(item,i,kind):
 palettes=[((255,247,243),(122,31,61),(230,161,139)),((255,249,244),(103,43,70),(244,207,157)),((252,244,241),(133,55,75),(219,153,132)),((255,247,243),(96,48,75),(228,177,158))]
 bg,primary,accent=palettes[i%4];im=Image.new('RGB',(1200,630),bg);d=ImageDraw.Draw(im);seed=int(hashlib.sha256(item['slug'].encode()).hexdigest()[:8],16)
 d.rectangle((0,0,18,630),fill=accent);d.rounded_rectangle((710,72,1125,554),34,fill=(255,255,255),outline=primary,width=5)
 for n in range(3):
  y=145+n*128;d.ellipse((760,y,828,y+68),fill=[primary,accent,(244,207,157)][n]);d.rounded_rectangle((850,y+7,1050+((seed>>(n*4))&45),y+25),8,fill=primary);d.rounded_rectangle((850,y+38,1010+((seed>>(n*5))&55),y+54),8,fill=accent)
 d.text((70,70),'RESEARCH BRIEF' if kind=='research' else 'PEOPLE OPERATIONS GUIDE',font=font(bold,22),fill=primary)
 size=48
 while size>31:
  f=font(bold,size);lines=wrap(d,item['title'],f,560)
  if len(lines)<=4:break
  size-=2
 y=140
 for line in lines:d.text((70,y),line,font=f,fill=(54,16,30));y+=size+11
 d.text((70,520),'HR COORDINATORS',font=font(bold,21),fill=primary);d.text((70,560),'2026-10-12',font=font(regular,18),fill=(102,74,84))
 return im
for i,item in enumerate(DATA['blogs']):make(item,i,'blog').save(OUT/f"{item['slug']}.webp",'WEBP',quality=88,method=6)
for i,item in enumerate(DATA['research']):make(item,i+12,'research').save(OUT/f"{item['slug']}.webp",'WEBP',quality=88,method=6)
