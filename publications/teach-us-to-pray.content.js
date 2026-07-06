/* Teach Us To Pray — content
   A guide to prayer from Luke 11. Built entirely from the shared
   Reader Engine v1 + Engravings v1 — this file is just words and structure. */

const pages=[
[
{teal:true,html:shell(`${doorSVG('top')}<div class="circle"></div><div style="height:302px"></div><div class="title">TEACH<br>US TO<br>PRAY</div><div class="rule"></div><p class="body"><b>A Guide to Prayer from Luke 11</b><br>@THE.RIGHTSIDEUP</p>`,'COVER','A GUIDE TO PRAYER')},
{html:shell(`<div class="centerpiece"><div class="kicker">Introduction</div><div class="big">They saw<br>something<br>in Jesus.</div><div class="rule"></div><p class="body">The disciples did not ask Jesus to teach them to preach, lead, or perform miracles.</p><p class="body">They watched him pray. Something in them said: <b>I want that.</b></p><p class="quote">“Lord, teach us to pray.”</p></div>`,'INTRODUCTION','LUKE 11:1')}
],
[
{html:shell(`${prayerSVG()}<div style="height:62px"></div><div class="kicker">The Question</div><div class="huge">HOW DO<br>WE PRAY?</div><div class="rule"></div><p class="body">Jesus answers with more than a technique. He gives a pattern, a posture, and a promise.</p>`,'ORIENTATION','THE GUIDE')},
{teal:true,html:shell(`<div class="centerpiece"><div class="huge">A PATTERN.<br>A POSTURE.<br>A PROMISE.</div><div class="rule"></div><p class="body large">Not a formula. A way of life with the Father.</p></div>`,'ORIENTATION','THREE MOVEMENTS')}
],
[
{teal:true,html:shell(`<div style="height:80px"></div><div class="num">01</div><div class="huge">THE<br>PATTERN</div><p class="body large">What do we pray?</p>`,'CHAPTER ONE','THE PATTERN')},
{html:shell(`<div style="height:58px"></div><div class="kicker">Chapter 1</div><div class="big">A framework,<br>not a formula.</div><div class="rule"></div><p class="body">The Lord’s Prayer is not an incantation to conjure God’s hand. It is a pattern to pray through: each line a movement, a reorientation, a surrender.</p><div class="scripture">Father, hallowed be your name, your kingdom come.</div>`,'THE PATTERN','LUKE 11:2')}
],
[
{html:shell(`<div style="height:52px"></div><div class="kicker">Pray the Pattern</div><div class="steps">
<div class="step"><b>01</b><span>Our Father<br><small>God is accessible.</small></span></div>
<div class="step"><b>02</b><span>Hallowed be your name<br><small>God is holy.</small></span></div>
<div class="step"><b>03</b><span>Your kingdom come<br><small>Exchange my kingdoms for his.</small></span></div>
<div class="step"><b>04</b><span>Daily bread<br><small>Dependence is the point.</small></span></div>
<div class="step"><b>05</b><span>Forgive us<br><small>Receive mercy. Extend mercy.</small></span></div>
<div class="step"><b>06</b><span>Lead us not<br><small>I know my weakness.</small></span></div>
</div>`,'THE PATTERN','PRACTICE')},
{html:shell(`${breadSVG()}<div style="height:62px"></div><div class="kicker">Daily Bread</div><div class="big">Dependence<br>is not a<br>defect.</div><div class="rule"></div><p class="body">Jesus teaches us to ask for enough for today. Prayer begins to heal the illusion that we are self-sufficient.</p>`,'THE PATTERN','DAILY BREAD')}
],
[
{teal:true,html:shell(`<div style="height:80px"></div><div class="num">02</div><div class="huge">THE<br>POSTURE</div><p class="body large">How do we pray?</p>`,'CHAPTER TWO','THE POSTURE')},
{html:shell(`<div style="height:58px"></div><div class="kicker">Chapter 2</div><div class="big">Shameless<br>audacity.</div><div class="rule"></div><p class="body">Jesus answers the question of how to pray with a story: a man pounding on his neighbor’s door at midnight because he has nothing to offer his guest.</p><p class="body"><b>A refusal to be embarrassed into silence. A refusal to quit.</b></p>`,'THE POSTURE','FRIEND AT MIDNIGHT')}
],
[
{html:shell(`${doorSVG()}<div style="height:54px"></div><div class="kicker">Word Study</div><div class="word"><div class="greek">ἀναίδεια</div><div class="pronounce">anaideia</div><p class="body">Shameless audacity. Bold persistence. Refusing to be embarrassed into silence. Refusing to quit.</p></div><div class="rule"></div><p class="body">This is not polished, performative prayer. It is honest need brought to the door.</p>`,'THE POSTURE','ANAIDEIA')},
{html:shell(`<div style="height:64px"></div><div class="kicker">The Essential Correction</div><div class="huge">GOD IS NOT<br>THE RELUCTANT<br>NEIGHBOR.</div><div class="rule"></div><p class="body">The neighbor responds from obligation. The Father responds from love.</p>`,'THE POSTURE','CORRECTION')}
],
[
{html:shell(`<div style="height:78px"></div><div class="kicker">Lesser → Greater</div><div class="big">Persistent prayer<br>does not force<br>God’s hand.</div><div class="rule"></div><p class="body large" style="color:var(--teal)">It forms your heart.</p><p class="body">Keep asking. Keep seeking. Keep knocking. Not because persistence unlocks God’s hand, but because the Father on the other side of the door is good.</p>`,'THE POSTURE','LESSER TO GREATER')},
{teal:true,html:shell(`<div class="centerpiece"><div class="huge">KEEP<br>ASKING.<br>KEEP<br>SEEKING.<br>KEEP<br>KNOCKING.</div></div>`,'THE POSTURE','ASK SEEK KNOCK')}
],
[
{teal:true,html:shell(`<div style="height:80px"></div><div class="num">03</div><div class="huge">THE<br>PROMISE</div><p class="body large">Why do we pray this way?</p>`,'CHAPTER THREE','THE PROMISE')},
{html:shell(`<div style="height:58px"></div><div class="kicker">Chapter 3</div><div class="big">The Father<br>is good.</div><div class="rule"></div><p class="body">If imperfect human fathers know how to give good gifts, how much more does a perfect, loving, endlessly generous heavenly Father?</p><p class="quote">The question is not whether God will answer. It is whether I will trust the Good Father with the answer.</p>`,'THE PROMISE','THE FATHER')}
],
[
{html:shell(`${spiritSVG()}<div style="height:64px"></div><div class="kicker">The Gift</div><div class="huge">NOT SOMETHING<br>FROM GOD’S<br>HAND.</div><div class="rule"></div><p class="body large">God himself.</p><p class="body">The greatest gift of prayer is not getting what I asked for. It is receiving the One who gives.</p>`,'THE PROMISE','THE GIFT')},
{html:shell(`<div style="height:64px"></div><div class="kicker">Luke 11:13</div><div class="big">How much<br>more?</div><div class="scripture">How much more will your Father in heaven give the Holy Spirit to those who ask him.</div><div class="rule"></div><p class="body">The promised gift is the Holy Spirit: God with us, forming us into the likeness of Jesus, comforting, convicting, guiding, and empowering us.</p>`,'THE PROMISE','HOLY SPIRIT')}
],
[
{teal:true,html:shell(`<div style="height:80px"></div><div class="num">04</div><div class="huge">THE<br>RESPONSE</div><p class="body large">What do we do now?</p>`,'CHAPTER FOUR','THE RESPONSE')},
{html:shell(`<div style="height:62px"></div><div class="kicker">Honesty</div><div class="big">Some of us<br>have stopped<br>praying.</div><div class="rule"></div><p class="body">Not because the need disappeared. Because disappointment moved in.</p><p class="quote">“How long, O Lord?” is not a crisis of faith. It is one of the most honest things a person can say to God.</p>`,'THE RESPONSE','HONESTY')}
],
[
{html:shell(`<div style="height:48px"></div><div class="kicker">Thirty Days</div><div class="steps">
<div class="step"><b>01</b><span>Write it down<br><small>One persistent prayer.</small></span></div>
<div class="step"><b>02</b><span>Pray the pattern<br><small>God’s name. God’s kingdom. God’s purposes.</small></span></div>
<div class="step"><b>03</b><span>Take the posture<br><small>Keep asking. Seeking. Knocking.</small></span></div>
<div class="step"><b>04</b><span>Share it<br><small>Invite one or two trusted people.</small></span></div>
<div class="step"><b>05</b><span>Track it<br><small>Notice what God does in you.</small></span></div>
</div>`,'THE RESPONSE','THIRTY DAYS')},
{html:shell(`<div style="height:62px"></div><div class="kicker">Practice Page</div><div class="big">My one<br>persistent<br>prayer.</div><div class="rule"></div><div class="prompt">What am I carrying?</div><div class="prompt">Where do I need surrender?</div><div class="prompt">Who will pray with me?</div><div class="prompt">What am I noticing?</div>`,'PRACTICE','REFLECTION')}
],
[
{html:shell(`<div style="height:64px"></div><div class="kicker">A Simple Way To Begin</div><div class="card"><b>Father</b><p class="body">Name who God is before you name what you need.</p></div><div class="card"><b>Kingdom</b><p class="body">Ask where your desires need reordering.</p></div><div class="card"><b>Bread</b><p class="body">Bring today’s need honestly.</p></div><div class="card"><b>Mercy</b><p class="body">Receive forgiveness. Release forgiveness.</p></div>`,'PRACTICE','BEGIN')},
{teal:true,html:shell(`<div style="height:78px"></div><div class="huge">A GOOD<br>FATHER<br>ON THE<br>OTHER SIDE<br>OF THE DOOR.</div>`,'CLOSING','CONFIDENCE')}
],
[
{html:shell(`<div class="centerpiece"><div class="kicker">Closing</div><div class="big">Pray the<br>pattern.</div><div class="big" style="color:var(--teal)">Take the<br>posture.</div><div class="big">Trust the<br>promise.</div></div>`,'CLOSING','SUMMARY')},
{html:shell(`${tableSVG()}<div style="height:66px"></div><div class="kicker">Blessing</div><div class="big">May your prayer<br>become less<br>performative.</div><div class="rule"></div><p class="body">More honest. More persistent. More surrendered. More confident in the goodness of the Father.</p>`,'CLOSING','BLESSING')}
],
[
{html:shell(`<div class="centerpiece"><p class="quote" style="font-size:27px">The Kingdom does not turn the world upside down.</p><div class="rule"></div><div class="huge">IT TURNS<br>AN UPSIDE-<br>DOWN WORLD<br>RIGHT SIDE UP.</div></div>`,'CLOSING','KINGDOM')},
{teal:true,html:shell(`<div class="circle"></div><div style="height:118px"></div><div class="title">TEACH<br>US TO<br>PRAY</div><div class="rule"></div><p class="body"><b>@THE.RIGHTSIDEUP</b><br>A Guide to Prayer from Luke 11</p>`,'END','A GUIDE TO PRAYER')}
]
];

