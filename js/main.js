/* =========================================================
   PROJECTS: the case study text and images for every project.
   Each card in index.html points here with data-p="project-id"
   and data-k="image number". To add a project: add an entry here,
   then copy one of the matching cards in index.html.
   ========================================================= */
const PROJECTS = {
 "modern-smile": {
  "section": "brand",
  "title": "Modern Smile",
  "client": "Dental cabinet",
  "tags": [
   "Logo",
   "Brand system",
   "Stationery",
   "Signage"
  ],
  "short": "Identity for a new dental cabinet that had to calm patients before it impressed them.",
  "problem": "Dental branding usually lands in one of two places: a tooth icon with a sparkle, or cold clinical blue. Both say “dentist”, and neither says “you’ll be looked after”. Most patients walk into a cabinet already a little anxious, so the brand’s first job wasn’t to look impressive. It had to look gentle, trustworthy and modern at the same time, and hold up on everything from a reception wall to a business card.",
  "decisions": [
   {
    "h": "One line, four meanings",
    "p": "The mark is a single stroke that reads as a tooth first, so it’s recognizable in a second. Inside it sits an M for Modern, the lower curve is a smile, the outer shape works as a protective shield, and the loop suggests continuity: a patient you keep for years, not a one-off visit. I only kept ideas that fit inside one line. Anything that needed a second shape got cut."
   },
   {
    "h": "Turquoise instead of dental blue",
    "p": "Blue is the category default, which makes a practice invisible next to its competitors. Turquoise #4EE0C7 still reads as clean and healthy, but it leans toward mint, which people already connect with freshness. Large surfaces use pale mint #E8F8F5 instead of pure white, which feels calmer and less clinical under bright practice lighting."
   },
   {
    "h": "Rounded type, structured subline",
    "p": "Hanken Grotesk has soft, open curves that echo the stroke of the mark, so the wordmark and symbol feel drawn by the same hand. DENTAL CABINET is set small and widely spaced underneath to add structure and seriousness under a friendly wordmark."
   },
   {
    "h": "Built for the wall first",
    "p": "The reception sign is the first thing a patient sees, so the mark had to work as a raised 3D object, not only as a flat file. A single tapered stroke holds up as a physical sign, embossed on paper, and at favicon size."
   },
   {
    "h": "The mark as texture",
    "p": "On the business card and letterhead, the mark is cropped large and faded off the edge. The stationery feels branded without repeating the logo everywhere, and the tagline “Your smile, our priority” gets room to breathe."
   }
  ],
  "images": [
   {
    "src": "assets/work/ms-logo.png",
    "w": 787,
    "h": 627,
    "alt": "Modern Smile logo: a tooth-shaped mark in turquoise above the wordmark"
   },
   {
    "src": "assets/work/ms-concept.png",
    "w": 465,
    "h": 627,
    "alt": "Concept panel explaining the M, the smile, the protection and the continuity in the mark"
   },
   {
    "src": "assets/work/ms-cards.png",
    "w": 458,
    "h": 377,
    "alt": "Modern Smile business cards, turquoise front and white back"
   },
   {
    "src": "assets/work/ms-wall.png",
    "w": 347,
    "h": 377,
    "alt": "Modern Smile logo as a raised white sign on a mint reception wall"
   },
   {
    "src": "assets/work/ms-stationery.png",
    "w": 436,
    "h": 377,
    "alt": "Modern Smile envelope and letterhead"
   },
   {
    "src": "assets/work/ms-palette.png",
    "w": 1254,
    "h": 246,
    "alt": "Color palette and Hanken Grotesk typography for Modern Smile"
   }
  ]
 },
 "shaolin": {
  "section": "social",
  "title": "Shaolin on the pitch",
  "client": "Concept post",
  "tags": [
   "Compositing",
   "Social post"
  ],
  "short": "Two worlds that should never share a frame, built to stop the scroll.",
  "problem": "In a feed you get about half a second before the thumb moves on, and a clean product shot doesn’t survive that. I wanted an image that makes people stop and ask “wait, what am I looking at?” So I put a Shaolin monk mid-kick on a football pitch, with a temple rising behind the stands. The idea is the easy part. The hard part is making two worlds that don’t belong together look like one photograph.",
  "decisions": [
   {
    "h": "One warm color against a cold scene",
    "p": "Stormy sky, blue-grey stands, dark grass. The orange robe is the only warm, saturated thing in the frame, so the eye goes straight to him wherever the post lands in the grid."
   },
   {
    "h": "Stadium light as the glue",
    "p": "The floodlights turn into bokeh and floating sparks, and the same light falls on his shoulders and the temple roof. Shared light is what makes a composite believable. Without it, he’d look pasted on."
   },
   {
    "h": "Low camera, frozen motion",
    "p": "The horizon sits low so he rises above the stands, and the kick is caught at its highest point. The flying cloth and rope carry the movement, so a still image reads as action."
   },
   {
    "h": "Square format",
    "p": "It fills the feed on every platform without anything getting cropped."
   }
  ],
  "images": [
   {
    "src": "assets/work/social-monk.jpg",
    "w": 709,
    "h": 709,
    "alt": "Shaolin monk mid-kick on a football pitch with a temple behind the stadium"
   }
  ]
 },
 "car-rental": {
  "section": "social",
  "title": "Best car for rent today",
  "client": "Car rental agency",
  "tags": [
   "Social post",
   "Compositing"
  ],
  "short": "A rental post that sells the trip, not just the vehicle.",
  "problem": "Car rental posts all look alike: a car cut out on white, a price, a phone number. Scrolling past them feels like reading a catalogue. The message was one line, “best car for rent today”, but the real sell is the weekend you’ll have with it. The post had to feel like an adventure and still read clearly at thumb size.",
  "decisions": [
   {
    "h": "The car breaks the frame",
    "p": "An orange frame sits behind the Jeep and the car drives through it toward the viewer. That one overlap gives a flat post depth and makes the vehicle feel like it’s coming out of the phone."
   },
   {
    "h": "The road leads the eye",
    "p": "The wet asphalt and yellow center line pull the eye up from the bottom edge to the headlights, then on to the headline. The post reads in one pass, with no hunting."
   },
   {
    "h": "Headline in three short lines",
    "p": "Condensed bold type, stacked a few words at a time inside the frame, stays legible when the post shows up small in a feed or a story."
   },
   {
    "h": "Color pulled from the scene",
    "p": "The frame’s orange is picked from the autumn trees, so the graphic feels like part of the photo rather than something laid on top of it."
   }
  ],
  "images": [
   {
    "src": "assets/work/social-car-rental.jpg",
    "w": 633,
    "h": 680,
    "alt": "Jeep on a wet forest road bursting through an orange frame, headline Best car for rent today"
   }
  ]
 },
 "nike": {
  "section": "social",
  "title": "Nike running post",
  "client": "Spec work, not commissioned",
  "tags": [
   "Spec work",
   "Social post"
  ],
  "short": "Selling speed with a shoe that isn’t moving.",
  "problem": "A running shoe sells on feeling fast, but a social post is a still image. On top of that, Nike is so recognizable that the lazy move is to slap the logo on and call it done. I wanted the brand to be felt before it’s read, and the shoe to look like it’s already in motion.",
  "decisions": [
   {
    "h": "Tearing through the page",
    "p": "The shoe bursts through a torn paper edge on a rising diagonal. Torn edges suggest force, and a left-to-right upward line reads as forward motion."
   },
   {
    "h": "The logo as background, not a badge",
    "p": "The wordmark and swoosh are blown up and cropped behind the shoe. You recognize the brand at a glance, but the product stays the hero."
   },
   {
    "h": "A palette taken from the product",
    "p": "The red, orange and blue all come from the shoe’s own colorway, so the post feels like one object instead of a shoe placed on a background."
   }
  ],
  "images": [
   {
    "src": "assets/work/social-nike.jpg",
    "w": 454,
    "h": 493,
    "alt": "Nike running shoe bursting through torn red paper over a large Nike wordmark"
   }
  ]
 },
 "final-round": {
  "section": "manip",
  "title": "The Final Round",
  "client": "Poster concept",
  "tags": [
   "Poster",
   "Compositing"
  ],
  "short": "Two fighters, one trophy, the second before it’s decided.",
  "problem": "A fight poster has to deliver tension without giving away the result. Show the punch landing and the story’s over. I built the scene around the moment before: two fighters in a rundown gym, and the thing they’re fighting for sitting between them.",
  "decisions": [
   {
    "h": "The trophy as the stake",
    "p": "It sits low and centered, exactly between the two fighters. Your eye bounces from one to the other and lands on what’s at stake."
   },
   {
    "h": "Dusty, backlit haze",
    "p": "Window light cuts through the haze from behind. It separates the fighters from the background and gives the gym a worn, lived-in feel, like the story happens somewhere real."
   },
   {
    "h": "Handwritten title",
    "p": "Rough, chalky lettering instead of a heavy display font makes it feel like a gym wall rather than a blockbuster. It suits an underdog story."
   }
  ],
  "images": [
   {
    "src": "assets/work/poster-final-round.png",
    "w": 445,
    "h": 626,
    "alt": "The Final Round poster: two boxers in a hazy gym ring with a trophy between them"
   }
  ]
 },
 "signal": {
  "section": "manip",
  "title": "Signal",
  "client": "Personal poster",
  "tags": [
   "Poster",
   "Compositing",
   "Color grading"
  ],
  "short": "A calm figure at the center of total chaos.",
  "problem": "Character posters live or die on attitude. I wanted the city falling apart around him, with papers flying, fire, and neon tentacles curling overhead, while he walks straight at the camera completely unbothered. The challenge was layering that much chaos without losing him in it.",
  "decisions": [
   {
    "h": "Dead center and symmetrical",
    "p": "Everything else in the frame is moving and tilted, so the figure is the only stable thing. That contrast is what makes him look in control."
   },
   {
    "h": "Warm fire below, cool neon above",
    "p": "Fire lights him from underneath while teal and pink neon wash in from the street behind. Two light sources on the figure are what sell that he’s really standing in the scene."
   },
   {
    "h": "Motion blur on the debris only",
    "p": "The papers are blurred and the figure is sharp, which tells you in a single frame: fast chaos, still subject."
   }
  ],
  "images": [
   {
    "src": "assets/work/poster-signal.png",
    "w": 443,
    "h": 626,
    "alt": "Hooded man walking toward the camera through a neon street with flying papers and fire"
   }
  ]
 },
 "spider-man": {
  "section": "manip",
  "title": "Spider-Man: The Reveal",
  "client": "Personal fan poster",
  "tags": [
   "Fan art",
   "Poster",
   "Compositing"
  ],
  "short": "A fan poster built on suspense and a narrow city alley.",
  "problem": "Fan posters are everywhere, and most reuse the same hero pose. I wanted a quieter, more cinematic take: the character hanging upside down in a tight alley, as if the reveal is about to happen to whoever walks in next.",
  "decisions": [
   {
    "h": "Upside down, at the top edge",
    "p": "Flipping the figure and placing him at the top of the frame makes you look up. It feels like you’ve just spotted him from the street."
   },
   {
    "h": "The alley as leading lines",
    "p": "The walls converge toward a lit sign at the far end. That adds depth and frames the title in the lower third."
   },
   {
    "h": "A grade built from the suit",
    "p": "Red neon and deep shadows pull the whole city into the suit’s red and blue, so character and setting feel like one image."
   }
  ],
  "images": [
   {
    "src": "assets/work/poster-spiderman.png",
    "w": 441,
    "h": 626,
    "alt": "Spider-Man hanging upside down in a red-lit city alley, title The Reveal"
   }
  ]
 },
 "ss-beauty": {
  "section": "print",
  "title": "S&S Beauty",
  "client": "Hair and beauty salon",
  "tags": [
   "Flyer",
   "Gift card",
   "Print"
  ],
  "short": "Opening flyer and gift cards for a new hair and beauty salon.",
  "problem": "A new salon needs two things right away: people through the door for the opening, and a way for customers to bring their friends. The flyer had to carry a full price list without looking like a menu board, and the gift card had to feel like a present, not a voucher.",
  "decisions": [
   {
    "h": "Folded flyer, offer on the cover",
    "p": "The bifold keeps the cover clean: the name and a pink opening-promotion banner as the hook. The price list sits inside, where people read it once they’ve already picked it up."
   },
   {
    "h": "Florals kept to the corners",
    "p": "Blush roses frame the edges and leave the center clear for text. The salon feels warm and feminine without the decoration fighting the prices."
   },
   {
    "h": "A gift card that looks wrapped",
    "p": "The gold bow on the front turns a card into something that looks gift-wrapped. The back has clear fields for who it’s from, who it’s for and the treatment, so staff can fill it in quickly at the desk."
   },
   {
    "h": "One system across every piece",
    "p": "The same florals, marble texture and wordmark run across the flyer and the cards, so the salon feels established from its first day."
   }
  ],
  "images": [
   {
    "src": "assets/work/ss-beauty-flyer.jpg",
    "w": 1260,
    "h": 945,
    "alt": "S&S Beauty bifold flyer with an opening promotion banner and price list"
   },
   {
    "src": "assets/work/ss-beauty-gift-cards.jpg",
    "w": 952,
    "h": 635,
    "alt": "Front and back of the S&S Beauty gift card"
   },
   {
    "src": "assets/work/ss-beauty-gift-card.jpg",
    "w": 978,
    "h": 652,
    "alt": "S&S Beauty gift card with a gold bow"
   }
  ]
 },
 "bio-rituel": {
  "section": "print",
  "title": "Bio Rituel",
  "client": "Moroccan skincare, sold in France",
  "tags": [
   "Packaging",
   "Label design"
  ],
  "short": "Packaging that brings Moroccan tradition to a French shelf.",
  "problem": "Bio Rituel makes traditional Moroccan sprays and skincare, but sells in France. That’s the whole tension: the products need to feel authentic, yet they sit next to modern European cosmetics. Go too traditional and it looks like a souvenir. Go too minimal and it loses the reason anyone would pick it up.",
  "decisions": [
   {
    "h": "Matte black as the base",
    "p": "Black reads premium and modern on a French shelf, and it makes everything on top of it pop. It also works across every format, from the spray bottle to the refill pouch."
   },
   {
    "h": "Zellige at the bottom, like a floor",
    "p": "The Moroccan tile pattern is kept to a band at the base of each pack instead of covering everything. Heritage becomes the foundation rather than decoration, which keeps it elegant."
   },
   {
    "h": "Blossom and pink for softness",
    "p": "A diagonal sweep of pink and blossoms adds softness and hints at the rose water inside. The same pink carries onto the caps and triggers, so the range is recognizable from across a room."
   },
   {
    "h": "A script seal and two languages",
    "p": "The thin script wordmark in a circle feels like a handmade stamp. The pouch carries Arabic and French together, so it stays true to its origin and clear to French buyers."
   }
  ],
  "images": [
   {
    "src": "assets/work/bio-rituel-bottle.jpg",
    "w": 421,
    "h": 631,
    "alt": "Bio Rituel rose water spray bottle in matte black with pink blossoms and zellige pattern"
   },
   {
    "src": "assets/work/bio-rituel-pouch.jpg",
    "w": 505,
    "h": 547,
    "alt": "Bio Rituel herbal body scrub pouch with Arabic and French text"
   },
   {
    "src": "assets/work/bio-rituel-sprays.jpg",
    "w": 773,
    "h": 567,
    "alt": "Two Bio Rituel spray bottles with pink triggers"
   }
  ]
 },
 "ads-rating": {
  "section": "ads",
  "title": "4,6/5 on Google",
  "client": "Belocum, Q4 app campaign",
  "tags": [
   "Paid ad",
   "Social proof",
   "UI mockup"
  ],
  "short": "A star rating that reads as evidence, not a boast.",
  "problem": "Every staffing app says it’s trusted, so the word has stopped meaning anything. Belocum had something better than a claim: a 4.6 rating on Google from real reviews. The challenge was making one number feel like proof at thumb speed, instead of another brand patting itself on the back.",
  "decisions": [
   {
    "h": "A headline that dares you to doubt it",
    "p": "“You can’t fake that” turns the rating from a statistic into a statement. It answers the viewer’s skepticism before they have time to feel it."
   },
   {
    "h": "Show where the number comes from",
    "p": "The phone shows the Google listing itself: the name, the review count and the Reviews tab. People recognize that screen instantly, so the rating borrows Google’s credibility instead of relying on ours."
   },
   {
    "h": "Stars lifted off the screen",
    "p": "The rating is pulled out of the phone as an oversized bar in the brand’s lime, so it reads from across the feed. The last star is only partly filled, which keeps the 4.6 honest instead of rounding it up to five."
   },
   {
    "h": "Brand navy on a soft gradient",
    "p": "The headline and logo sit in Belocum’s deep navy over the campaign’s teal-to-lime gradient, the same system used across all five ads."
   }
  ],
  "images": [
   {
    "src": "assets/work/ads-google-rating.jpg",
    "w": 1400,
    "h": 1400,
    "alt": "Belocum ad: 4,6/5 on Google. You can’t fake that. A phone shows the Google listing with five large lime stars lifted off the screen"
   }
  ]
 },
 "ads-downloads": {
  "section": "ads",
  "title": "34K+ Downloads",
  "client": "Belocum, Q4 app campaign",
  "tags": [
   "Paid ad",
   "3D icon",
   "Social proof"
  ],
  "short": "A download count turned into the campaign’s signature line.",
  "problem": "Download numbers are the most common proof point in app advertising, and people scroll past them without reading. 34K+ is a real milestone for Belocum, but on its own it’s just a figure. It needed to feel like a moment for the brand, and to tie into the #BeAwesome campaign line.",
  "decisions": [
   {
    "h": "The headline plays on the name",
    "p": "“That’s BeAwesome” sets “Be” in a serif, echoing the Be in BeLOCUM. The number gets a payoff, and the campaign hashtag becomes part of the sentence instead of a tag at the bottom."
   },
   {
    "h": "A 3D icon made for the brand",
    "p": "The download button isn’t stock 3D. I created it from scratch in Belocum’s turquoise and navy, with the same soft, rounded, tactile style as the rest of the campaign icons, so it looks like it belongs to the app’s world."
   },
   {
    "h": "One object, lots of air",
    "p": "A single floating icon with a soft shadow in the center, the headline top left, the store badges bottom left. Nothing competes, so it reads in one glance."
   },
   {
    "h": "Both store badges",
    "p": "The figure covers iPhone and Android, so both badges are shown, and whoever sees it knows the app is there for them."
   }
  ],
  "images": [
   {
    "src": "assets/work/ads-downloads.jpg",
    "w": 1400,
    "h": 1400,
    "alt": "Belocum ad: 34K+ Downloads. That’s BeAwesome. A turquoise 3D download icon floats over a teal and lime gradient"
   }
  ]
 },
 "ads-per-diem": {
  "section": "ads",
  "title": "A Paid Lunch? We Call It Per Diem.",
  "client": "Belocum, Q4 app campaign",
  "tags": [
   "Paid ad",
   "App screen",
   "Benefit messaging"
  ],
  "short": "A contract term translated into a benefit anyone wants.",
  "problem": "Per diem is one of Belocum’s best benefits, but it’s a contract word. Many people skip it, and some don’t know what it covers. The ad had to turn a line in the fine print into something people actually want, without sounding like a benefits brochure.",
  "decisions": [
   {
    "h": "Question first, term second",
    "p": "The headline asks the thing people care about, a paid lunch, then names it. The viewer gets the benefit and learns the word in the same breath."
   },
   {
    "h": "A real screen from the app",
    "p": "The phone shows Belocum’s actual Contracts screen, with thousands of available contracts and a real shift card. It proves the benefit lives inside real work, not only in the ad."
   },
   {
    "h": "Cropped close, sized for the feed",
    "p": "The phone rises from the bottom edge and is cropped close, so the screen text stays readable even when the ad shows up small."
   },
   {
    "h": "Start of a headline series",
    "p": "“We call it…” became a pattern the campaign repeats, so each new benefit ad is recognizable as part of the same voice."
   }
  ],
  "images": [
   {
    "src": "assets/work/ads-per-diem.jpg",
    "w": 1400,
    "h": 1400,
    "alt": "Belocum ad: A paid lunch? We call it per diem. An iPhone shows the Belocum Contracts screen with available shifts"
   }
  ]
 },
 "ads-commute": {
  "section": "ads",
  "title": "Paid to Commute? We Call It Normal.",
  "client": "Belocum, Q4 app campaign",
  "tags": [
   "Paid ad",
   "3D map",
   "Benefit messaging"
  ],
  "short": "Travel pay made visible with a map built for the brand.",
  "problem": "Being paid for travel is a real advantage for professionals who take contracts in different places. But “travel compensation” is dull and hard to picture. The ad needed an image that makes the commute itself feel like part of the deal.",
  "decisions": [
   {
    "h": "The same headline system",
    "p": "It follows the per diem ad’s question-and-answer pattern. “We call it normal” reframes a perk other employers treat as special as something Belocum simply does."
   },
   {
    "h": "A 3D map created from scratch",
    "p": "Instead of a screenshot of a real map, which would look like any navigation app, I built a stylized 3D region in the brand’s lime and navy, with trees, small buildings and roads matched to the campaign’s soft, clay-like style."
   },
   {
    "h": "The route is the message",
    "p": "A glowing turquoise route connects three pins across the map, so the commute becomes the hero of the image: several places, one paid journey."
   },
   {
    "h": "Closing with the campaign line",
    "p": "#BeAwesome sits bottom right and the store badges bottom left, the same layout used in the other benefit ads."
   }
  ],
  "images": [
   {
    "src": "assets/work/ads-commute.jpg",
    "w": 1400,
    "h": 1400,
    "alt": "Belocum ad: Paid to commute? We call it normal. A custom lime and navy 3D map with a glowing route between three location pins"
   }
  ]
 },
 "ads-staffing": {
  "section": "ads",
  "title": "Not Just a Staffing App.",
  "client": "Belocum, Q4 app campaign",
  "tags": [
   "Paid ad",
   "3D icons",
   "Brand positioning"
  ],
  "short": "The whole platform explained in three pieces that lock together.",
  "problem": "Staffing apps are usually seen as job boards: a list of shifts and nothing more. Belocum connects professionals and clinics directly, with the contract in the middle handling the details. The ad had to explain that relationship in a single image, with almost no words.",
  "decisions": [
   {
    "h": "Three pieces that lock together",
    "p": "A professional, the app and a clinic are joined like puzzle pieces. The app is literally the connection between the two, which says “more than a job board” without a paragraph of copy."
   },
   {
    "h": "Icons made to match the brand",
    "p": "The person, the phone with its contract cards and the clinic building were all created from scratch in Belocum’s turquoise and navy, in the same rounded 3D style as the download icon and the map, so the whole campaign feels like one set."
   },
   {
    "h": "One accent: the lime check",
    "p": "The only lime in the illustration is the check on the middle contract. It marks a confirmed match and pulls the eye to the result the app delivers."
   },
   {
    "h": "A short headline",
    "p": "Four words, centered. The image does the explaining, so the headline only has to change how people think about the category."
   }
  ],
  "images": [
   {
    "src": "assets/work/ads-staffing.jpg",
    "w": 1400,
    "h": 1400,
    "alt": "Belocum ad: Not just a staffing app. Custom 3D icons of a person, a phone with contract cards and a clinic lock together like puzzle pieces"
   }
  ]
 }
};

/* ---------- case study viewer ---------- */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ORDER = Object.keys(PROJECTS);
const lb = document.getElementById("lb");
if (typeof lb.showModal !== "function"){
  lb.showModal = ()=>{ lb.setAttribute("open",""); lb.classList.add("fallback"); };
  lb.close = ()=>{ lb.removeAttribute("open"); lb.dispatchEvent(new Event("close")); };
  Object.defineProperty(lb, "open", {get:()=>lb.hasAttribute("open")});
}
let cur = null, opener = null;
function openCase(id, k){
  const p = PROJECTS[id]; if (!p) return;
  cur = id;
  document.getElementById("lbTitle").textContent = p.title;
  document.getElementById("lbWho").textContent = p.client;
  document.getElementById("lbTags").innerHTML = `<div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join("")}</div>`;
  document.getElementById("lbProblem").textContent = p.problem;
  document.getElementById("lbDecisions").innerHTML = p.decisions.map(d=>`<div class="dec"><h5>${esc(d.h)}</h5><p>${esc(d.p)}</p></div>`).join("");
  document.getElementById("lbMedia").innerHTML = p.images.map(im=>
    `<img src="${esc(im.src)}" alt="${esc(im.alt)}" width="${im.w}" height="${im.h}" style="--nw:${im.w}px" decoding="async">`).join("");
  document.getElementById("lbPos").textContent = `Project ${ORDER.indexOf(id)+1} of ${ORDER.length}`;
  if (!lb.open) lb.showModal();
  lb.scrollTop = 0;
  const target = document.getElementById("lbMedia").children[k || 0];
  if (k && target) requestAnimationFrame(()=>target.scrollIntoView({block:"start"}));
}
const step = d => openCase(ORDER[(ORDER.indexOf(cur) + d + ORDER.length) % ORDER.length], 0);
document.addEventListener("click", e=>{
  const c = e.target.closest("[data-p]");
  if (c){ opener = c; openCase(c.dataset.p, +c.dataset.k || 0); }
});
document.getElementById("lbClose").onclick = ()=>lb.close();
document.getElementById("lbPrev").onclick = ()=>step(-1);
document.getElementById("lbNext").onclick = ()=>step(1);
lb.addEventListener("click", e=>{ if (e.target === lb) lb.close(); });
lb.addEventListener("close", ()=>{ document.getElementById("lbMedia").innerHTML = ""; if (opener) opener.focus({preventScroll:true}); });
lb.addEventListener("keydown", e=>{ if (e.key==="ArrowRight") step(1); if (e.key==="ArrowLeft") step(-1); });

/* ---------- throttle readout (shift lights + r/min) ---------- */
const thr = document.getElementById("thr"), thrRpm = document.getElementById("thrRpm");
const leds = [...thr.querySelectorAll(".thr-leds i")];
let litPrev = -1;
function thrUI(v){
  thrRpm.textContent = (Math.round(v*1000/50)*50).toLocaleString("en-US");
  const lit = Math.max(0, Math.min(10, Math.round((v - 1.3) / 10.2 * 10)));
  if (lit !== litPrev){ litPrev = lit; leds.forEach((l,k)=>l.classList.toggle("on", k < lit)); }
}

/* ---------- tachometer (ignition sweep) ---------- */
const svg = document.getElementById("tach");
const C = 200, R = 168;
const ang = v => (-135 + v * 22.5) * Math.PI / 180;
const pt = (v, r) => [C + r * Math.sin(ang(v)), C - r * Math.cos(ang(v))];
function arc(a, b, r){ const [x1,y1]=pt(a,r), [x2,y2]=pt(b,r); return `M${x1} ${y1} A${r} ${r} 0 ${(b-a)*22.5>180?1:0} 1 ${x2} ${y2}`; }
let s = `<path class="t-track" d="${arc(0,12,R)}"/><path class="t-red" d="${arc(10,12,R-4)}"/>`;
for (let i = 0; i <= 24; i++){
  const v = i/2, major = i%2===0, red = v>=10 ? " red" : "";
  const [x1,y1]=pt(v,R-12), [x2,y2]=pt(v,major?R-32:R-22);
  s += `<line class="${major?"t-maj":"t-min"}${red}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  if (major){ const [tx,ty]=pt(v,R-54); s += `<text class="t-num${red}" x="${tx}" y="${ty}">${v}</text>`; }
}
s += `<text class="t-rpm" id="rpm" x="200" y="300">0</text><text class="t-unit" x="200" y="322">r/min</text>`;
s += `<g id="needle"><line class="t-needle" x1="200" y1="222" x2="200" y2="52"/></g><circle class="t-hub" cx="200" cy="200" r="13"/>`;
svg.innerHTML = s;
const needle = document.getElementById("needle"), rpm = document.getElementById("rpm");
let val = 0, busy = false;
function setV(v){ val = v; needle.setAttribute("transform", `rotate(${-135 + v*22.5} 200 200)`); rpm.textContent = Math.round(v*1000/50)*50; thrUI(v); }
const easeOut = k => 1 - Math.pow(1-k, 3), easeInOut = k => k<.5 ? 4*k*k*k : 1 - Math.pow(-2*k+2,3)/2;
function go(to, dur, ease){ return new Promise(res=>{ const from=val, t0=performance.now();
  (function f(t){ const k=Math.min(1,(t-t0)/dur); setV(from+(to-from)*ease(k)); k<1?requestAnimationFrame(f):res(); })(t0); }); }
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
/* live engine: ignition sweep, idle flutter, scroll = throttle, hover/tap = rev */
let throttle = 0, live = false, held = false, tapUntil = 0, lastEngaged = -1e9, lastHit = -1e9, revT;
const tachWrap = document.querySelector(".tach-wrap");
function engine(t){
  const engaged = held || t < tapUntil;
  throttle *= engaged ? 0.995 : 0.94;
  const flutter = Math.sin(t/70)*0.05 + Math.sin(t/23)*0.03;
  let want = 1.3 + Math.min(throttle, 10.9) + flutter;
  if (want > 11.8) want = 11.2 + Math.random()*0.5;   // rev limiter bounce
  setV(val + (want - val) * 0.14);
  tachWrap.classList.toggle("redline", val > 10);
  if (engaged) lastEngaged = t;
  if (val > 10.4 && t - lastEngaged < 600 && t - lastHit > 1400){ lastHit = t; redlineHit(); }
  requestAnimationFrame(engine);
}
async function ignition(){
  setV(0);
  await new Promise(r=>setTimeout(r,500));
  await go(12,750,easeOut);
  await new Promise(r=>setTimeout(r,160));
  await go(1.3,1100,easeInOut);
  if (!live){ live = true; requestAnimationFrame(engine); }
}
if (document.readyState === "complete") ignition(); else addEventListener("load", ignition);
let lastY = scrollY;
addEventListener("scroll", ()=>{ const d = Math.abs(scrollY - lastY); lastY = scrollY; throttle = Math.min(throttle + d*0.035, 11); }, {passive:true});
const blip = amt => { throttle = Math.max(throttle, amt); };
document.getElementById("rev").addEventListener("mouseenter", ()=>blip(6.5));
tachWrap.addEventListener("mouseenter", ()=>blip(8));
tachWrap.addEventListener("click", ()=>tapRev());

/* ---------- throttle control ----------
   Desktop: hold the button, then scroll the wheel down to open the throttle.
   Phone / keyboard: tap (or press Space) to snap it wide open.            */
function redlineHit(){
  const h = document.documentElement;
  h.classList.remove("rev-hit"); thr.classList.remove("hit"); void h.offsetWidth;
  h.classList.add("rev-hit"); thr.classList.add("hit", "used");
  clearTimeout(revT); revT = setTimeout(()=>{ h.classList.remove("rev-hit"); thr.classList.remove("hit"); }, 700);
  if (navigator.vibrate) { try { navigator.vibrate(35); } catch(e){} }
}
function tapRev(){
  tapUntil = performance.now() + 380; throttle = 11.5;
  thr.classList.add("held"); setTimeout(()=>{ if (!held) thr.classList.remove("held"); }, 220);
}
let heldAt = 0, wheeled = false;
function release(){
  if (!held) return;
  held = false; thr.classList.remove("held");
  if (!wheeled && performance.now() - heldAt < 260) blip(6);   // quick click = small blip
}
thr.addEventListener("pointerdown", e=>{
  if (e.pointerType === "mouse"){
    if (e.button !== 0) return;
    e.preventDefault(); held = true; wheeled = false; heldAt = performance.now();
    thr.classList.add("held"); throttle = Math.max(throttle, 1.2);
  } else tapRev();
});
addEventListener("pointerup", release);
addEventListener("pointercancel", release);
addEventListener("blur", release);
addEventListener("wheel", e=>{
  if (!held) return;
  e.preventDefault(); wheeled = true;
  const k = e.deltaMode === 1 ? 0.6 : 0.018;
  throttle = Math.min(11.5, Math.max(0, throttle + e.deltaY * k));
}, {passive:false});
thr.addEventListener("keydown", e=>{ if ((e.key === " " || e.key === "Enter") && !e.repeat){ e.preventDefault(); tapRev(); } });
thr.addEventListener("contextmenu", e=>e.preventDefault());

/* ---------- gear indicator follows scroll ---------- */
const gearNow = document.getElementById("gearNow");
const links = [...document.querySelectorAll("#gearLinks a")];
const io = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if (!en.isIntersecting) return;
    const g = en.target.dataset.gear;
    if (gearNow.textContent !== g){ gearNow.textContent = g; if (!reduce){ gearNow.classList.remove("shift"); void gearNow.offsetWidth; gearNow.classList.add("shift"); } }
    links.forEach(a=>{
      const on = a.dataset.g === g; a.classList.toggle("on", on);
      if (on){ const ol = a.closest("ol"); ol.scrollLeft = a.parentElement.offsetLeft - ol.offsetLeft - 8; }
    });
  });
},{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("[data-gear]").forEach(el=>io.observe(el));

/* ---------- video ----------
   Each card shows a looping animated preview. "Play with sound" swaps in the
   real .mp4, which the browser streams from the server (works on iPhone and
   Android). Without JavaScript the plain video player is shown instead. */
document.querySelectorAll(".vplayer").forEach(box=>{
  const v = box.querySelector("video");
  const file = v.querySelector("source").getAttribute("src");
  const btn = document.createElement("button");
  btn.type = "button"; btn.className = "vbtn";
  btn.innerHTML = '<span aria-hidden="true"></span>Play with sound';
  const note = document.createElement("p"); note.className = "vnote";
  note.innerHTML = 'The video did not load. Check your connection, or <a href="' + file + '" target="_blank" rel="noopener">open the video file</a>.';
  box.append(btn); box.parentElement.insertBefore(note, box.nextSibling);
  const fail = ()=>{ box.classList.remove("on"); box.classList.add("nope"); };
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".vplayer.on video").forEach(o=>{ if (o !== v) o.pause(); });
    box.classList.add("on");
    v.muted = false;
    const p = v.play();
    if (p && p.catch) p.catch(err=>{ if (err && err.name === "NotSupportedError") fail(); });
  });
  /* the browser tries each <source> in order; only the last one failing means no playable copy */
  const all = v.querySelectorAll("source");
  all[all.length - 1].addEventListener("error", fail);
  v.addEventListener("ended", ()=>{ box.classList.remove("on"); v.currentTime = 0; });
});

/* ---------- theme switch: black + orange / beige + orange ---------- */
const themeBtns = document.querySelectorAll("[data-set-theme]");
const metaTheme = document.querySelector('meta[name="theme-color"]');
function applyTheme(t, fromUser){
  const h = document.documentElement;
  if (fromUser && !reduce){ h.classList.add("theming"); clearTimeout(applyTheme.t); applyTheme.t = setTimeout(()=>h.classList.remove("theming"), 500); }
  h.setAttribute("data-theme", t);
  themeBtns.forEach(b=>b.setAttribute("aria-pressed", String(b.dataset.setTheme === t)));
  metaTheme.setAttribute("content", t === "light" ? "#E8DCC6" : "#000000");
  if (fromUser){ try { localStorage.setItem("ya-theme", t); } catch(e){} }
}
applyTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark", false);
themeBtns.forEach(b=>b.addEventListener("click", ()=>applyTheme(b.dataset.setTheme, true)));

document.getElementById("toTop").onclick = ()=>window.scrollTo({top:0, behavior: reduce ? "auto" : "smooth"});
