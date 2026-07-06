/* The Right Side Up — Shared Engravings v1
   Small hand-drawn line-art SVGs used as decorative motifs inside publications.
   Add new ones here when they're generic enough to reuse; a publication is
   still free to define a one-off engraving inline in its own content.js if
   the art is truly unique to that piece. */

function doorSVG(cls=''){
return `<div class="engraving ${cls}"><svg viewBox="0 0 360 220" aria-hidden="true">
<rect x="122" y="34" width="118" height="168"></rect>
<path d="M136 54 C166 62 198 62 226 54"></path>
<path d="M136 90 C166 98 198 98 226 90"></path>
<path d="M136 126 C166 134 198 134 226 126"></path>
<path d="M136 162 C166 170 198 170 226 162"></path>
<circle cx="218" cy="120" r="5"></circle>
<line x1="96" y1="202" x2="266" y2="202"></line>
<path d="M84 202 C104 176 116 158 122 136"></path>
<path d="M258 202 C246 176 242 158 240 136"></path>
<circle cx="82" cy="72" r="14"></circle>
</svg></div>`
}
function prayerSVG(cls=''){
return `<div class="engraving ${cls}"><svg viewBox="0 0 360 220" aria-hidden="true">
<path d="M176 198 C176 150 178 112 178 78"></path>
<circle cx="178" cy="56" r="16"></circle>
<path d="M162 76 C138 92 126 116 122 146"></path>
<path d="M194 76 C218 92 230 116 234 146"></path>
<path d="M122 146 C142 136 158 136 176 150"></path>
<path d="M234 146 C214 136 198 136 180 150"></path>
<path d="M142 198 C150 178 162 166 176 150"></path>
<path d="M214 198 C206 178 194 166 180 150"></path>
<line x1="84" y1="198" x2="276" y2="198"></line>
<path d="M68 198 C92 168 116 154 138 146"></path>
<path d="M292 198 C268 168 244 154 222 146"></path>
</svg></div>`
}
function tableSVG(cls=''){
return `<div class="engraving ${cls}"><svg viewBox="0 0 360 220" aria-hidden="true">
<ellipse cx="180" cy="112" rx="118" ry="36"></ellipse>
<path d="M74 112 C96 142 264 142 286 112"></path>
<line x1="118" y1="140" x2="100" y2="196"></line>
<line x1="242" y1="140" x2="260" y2="196"></line>
<line x1="110" y1="196" x2="250" y2="196"></line>
<circle cx="132" cy="96" r="12"></circle><path d="M120 108 C104 118 96 128 92 144"></path>
<circle cx="228" cy="96" r="12"></circle><path d="M240 108 C256 118 264 128 268 144"></path>
<path d="M160 102 C172 96 188 96 200 102"></path>
</svg></div>`
}
function breadSVG(cls=''){
return `<div class="engraving ${cls}"><svg viewBox="0 0 360 220" aria-hidden="true">
<path d="M82 142 C94 96 128 72 180 72 C232 72 266 96 278 142 C252 164 108 164 82 142 Z"></path>
<path d="M116 138 C126 112 144 94 168 86"></path>
<path d="M166 144 C176 114 196 94 224 84"></path>
<path d="M216 138 C228 118 244 104 266 96"></path>
<line x1="68" y1="164" x2="292" y2="164"></line>
<line x1="86" y1="176" x2="274" y2="176"></line>
<path d="M130 62 C130 46 146 40 152 26"></path>
<path d="M180 62 C180 44 198 40 200 24"></path>
<path d="M230 64 C230 48 244 42 252 28"></path>
</svg></div>`
}
function spiritSVG(cls=''){
return `<div class="engraving ${cls}"><svg viewBox="0 0 360 220" aria-hidden="true">
<path d="M180 36 C156 72 158 102 180 126 C202 102 204 72 180 36 Z"></path>
<path d="M180 126 C154 122 132 108 112 86 C118 124 142 150 180 160"></path>
<path d="M180 126 C206 122 228 108 248 86 C242 124 218 150 180 160"></path>
<path d="M180 160 C166 174 154 188 146 206"></path>
<path d="M180 160 C194 174 206 188 214 206"></path>
<line x1="96" y1="206" x2="264" y2="206"></line>
<path d="M132 56 C114 74 104 94 102 118"></path>
<path d="M228 56 C246 74 256 94 258 118"></path>
</svg></div>`
}
