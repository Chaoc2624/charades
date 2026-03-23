export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
}

const blogData: Record<string, BlogPost[]> = {
  en: [
    {
      slug: 'how-to-play-charades',
      title: 'How We Play Charades at Our House',
      excerpt: 'So my family plays charades like every weekend and I thought I\'d share how we do it cos some of my mates didn\'t even know the rules.',
      content: `Right so charades. If you haven't played it before, basically someone acts out a word and everyone else has to guess what it is. Sounds dead simple but trust me it gets proper funny.

## How it works

OK so first things first, you split into teams. We usually do boys vs girls at ours but you can do whatever. Then someone picks a word — we use this website to get random ones cos nobody wants to spend ages thinking of words.

You get about a minute or two to act it out. The main rules are:

1. **No talking.** Not even a little whisper. My dad always tries to mouth the words and we have to tell him off.
2. **No pointing at stuff** in the room. Like if the word is "clock" you can't just point at the clock on the wall, that's cheating.
3. **Just use your body** and face to show what the word is.

If your team guesses it, you get a point. Easy.

## Things people always do

There's some hand signals everyone uses:
- Hold up fingers to show how many words there are
- Put fingers on your arm to show syllables (I only learnt this recently actually)
- Cup your ear if you're doing a "sounds like" clue

## What I've learnt

Honestly the trick is to just go for it. Like don't be embarrassed. The people who are rubbish at charades are the ones who do tiny little movements and nobody can see what they're doing. You've gotta go big. Wave your arms about. Pull stupid faces.

Also animals are the easiest category to start with. Everyone can do a dog or a cat. Try doing "jealous" or "beautiful" though — that's when it gets tricky!`,
      date: '2025-12-15',
      author: 'Charades Team',
    },
    {
      slug: 'best-party-games-for-groups',
      title: 'Games We Always Play at Parties (Ranked)',
      excerpt: 'Had a massive party last month and we played loads of games. Here are the ones that actually went well and the ones that were a bit rubbish.',
      content: `So we had my cousin's birthday party last month and there were like 15 of us. We needed games that everyone could play, not just board games for 4 people. Here's what worked and what didn't.

## 1. Charades (obviously)

I'm probably biased cos this is a charades website but honestly it is the best one. You don't need to buy anything, it works with any number of people, and my nan can play it just as well as my little brother. We use the word generator on here and just take turns.

## 2. Pictionary

Same idea as charades but you draw instead. Honestly the worse you are at drawing the funnier it is. My uncle drew a "house" that looked like a bin and we were crying laughing.

## 3. Two Truths and a Lie

Everyone says three things about themselves and you have to guess which one's made up. Good if you've got people who don't know each other that well cos you learn stuff about people.

## 4. Mafia

This one takes a bit of explaining but once everyone gets it, it's brilliant. Someone's secretly the "mafia" and you have to figure out who through talking. Gets proper intense.

## 5. Musical Chairs

Yeah I know it's a kids game but we played it anyway and it was hilarious. My mate Tom proper dived for a chair and knocked over a lamp.

## 6. Sardines

It's like hide and seek but backwards. One person hides and everyone looks for them. When you find them you hide with them. Gets well cramped and funny.

## 7. Celebrity Heads

Stick a name on your forehead and ask yes or no questions to figure out who you are. Classic.

## Games that didn't work

We tried doing a quiz but half the people couldn't be bothered. And we tried that game where you wrap someone in toilet roll but it was over in about 30 seconds and we'd wasted all the loo roll. Stick with charades honestly.`,
      date: '2025-11-20',
      author: 'Charades Team',
    },
    {
      slug: 'charades-for-kids-guide',
      title: 'Playing Charades with Younger Kids (Without Tears)',
      excerpt: 'My mum\'s a teaching assistant and she plays charades with kids at school. Here are her tips for making it work with little ones.',
      content: `So my mum works at a primary school and she uses charades loads in her classroom. She asked me to write down her tips cos she reckons lots of parents make the same mistakes when playing with young kids.

## Why kids love it

Kids are mental at charades. Like they've got no shame so they'll just throw themselves into it. My little sister does the most dramatic performances ever — she once spent three minutes pretending to be a penguin and it was genuinely impressive.

It's also good for them cos they learn new words, get to move about (instead of staring at a screen), and have to work together as a team.

## What words to use for different ages

### Little ones (4-6)
Keep it really simple. Animals they know, things they can see:
- Dog, Cat, Fish, Bunny
- Jumping, Dancing, Sleeping
- Ball, Hat, Star

My mum says at this age it doesn't even matter if they don't follow the rules properly. If they talk a bit while acting, just let them. They'll get the hang of it.

### Middle ones (7-9)
Now you can make it a bit harder:
- Penguin, Elephant, Butterfly
- Swimming, Cooking, Painting
- Camera, Guitar, Skateboard

### Older kids (10-12)
These lot can handle proper tricky words:
- Embarrassed, Confused, Excited
- Juggling, Rock climbing, Surfing
- Invisible, Enormous, Slippery

## Mum's top tips

1. **Short turns.** Don't make them wait ages. 30 seconds is fine for small kids.
2. **Don't be strict about rules.** Like if a 5 year old says "it's got four legs!" just go with it. They're having fun, who cares.
3. **Cheer everyone.** Even if their acting is terrible, clap and say well done. Otherwise they won't want to do it again.
4. **Mix ages.** Put a big kid with a little kid on the same team. The big ones help the little ones and everyone has a better time.

## For teachers

If you're a teacher you can use it for loads of stuff — spelling practice, learning French vocabulary, or just as a brain break when everyone's going a bit mad after lunch. It costs nothing and the kids love it.`,
      date: '2025-10-05',
      author: 'Charades Team',
    },
  ],
  de: [
    {
      slug: 'wie-man-scharade-spielt',
      title: 'So spielen wir Scharade bei uns zu Hause',
      excerpt: 'Wir spielen quasi jedes Wochenende Scharade. Hier ist, wie es bei uns läuft — vielleicht hilft es euch ja.',
      content: `Also Scharade. Falls ihr das noch nie gespielt habt: Jemand stellt ein Wort dar und alle anderen müssen raten, was es ist. Klingt einfach, wird aber richtig lustig.

## So geht's

Erst mal Teams bilden. Dann zieht jemand ein Wort — wir benutzen den Generator hier, weil niemand Lust hat, sich selbst Wörter auszudenken. Man hat so 1-2 Minuten Zeit.

Die wichtigsten Regeln:

1. **Nicht reden.** Kein Flüstern, kein Murmeln, gar nichts.
2. **Nicht auf Sachen zeigen** im Raum. Das ist geschummelt.
3. **Nur Körpersprache.** Hände, Arme, Gesicht — alles erlaubt, nur keine Stimme.

Wenn's richtig geraten wird, gibt's einen Punkt.

## Was ich gelernt hab

Der Trick ist: Keine Angst haben, sich zum Affen zu machen. Die Leute, die nur so kleine Bewegungen machen — die verlieren immer. Einfach voll reingehen, große Gesten, lustige Gesichter. Tiere sind am einfachsten zum Anfangen.`,
      date: '2025-12-15',
      author: 'Scharade Team',
    },
    {
      slug: 'scharade-fuer-kinder',
      title: 'Scharade mit kleinen Kindern spielen (ohne Geschrei)',
      excerpt: 'Meine Mutter arbeitet in einer Grundschule und benutzt Scharade im Unterricht. Hier sind ihre Tipps.',
      content: `Meine Mutter ist Lehrerin und macht ständig Scharade im Unterricht. Kinder lieben es einfach — die haben keine Hemmungen und legen sich voll rein.

## Welche Wörter für welches Alter

### 4-6 Jahre
Einfach halten: Hund, Katze, Ball, Tanzen, Schlafen

### 7-9 Jahre
Bisschen schwieriger: Pinguin, Schwimmen, Kamera, Fahrrad

### 10-12 Jahre
Jetzt wird's knifflig: Überrascht, Unsichtbar, Jonglieren

## Mamas Tipps

1. **Kurze Runden** — 30 Sekunden reichen für Kleine.
2. **Nicht zu streng sein** — Wenn ein Fünfjähriger ein bisschen redet, ist das nicht schlimm.
3. **Alle anfeuern** — Auch wenn's nicht geklappt hat, klatschen und loben.
4. **Altersgruppen mischen** — Große Kinder helfen den Kleinen.`,
      date: '2025-10-05',
      author: 'Scharade Team',
    },
  ],
  fr: [
    {
      slug: 'comment-jouer-aux-charades',
      title: 'Comment on joue aux charades chez nous',
      excerpt: 'On joue aux charades presque tous les week-ends. Voici comment on fait — c\'est pas compliqué du tout.',
      content: `Alors les charades. Si vous connaissez pas, c'est simple : quelqu'un mime un mot et les autres doivent deviner. Ça a l'air facile comme ça, mais ça devient vraiment marrant.

## Comment ça marche

On fait des équipes. Quelqu'un tire un mot — on utilise le générateur sur ce site parce que personne veut passer des heures à chercher des mots. On a 1-2 minutes.

Les règles :

1. **Pas le droit de parler.** Même pas chuchoter.
2. **Pas le droit de montrer des objets** dans la pièce.
3. **Juste le corps.** Les mains, les bras, le visage.

Si l'équipe trouve, c'est un point.

## Mon conseil

Faut pas avoir honte. Ceux qui font des petits gestes timides, ils perdent toujours. Faut y aller à fond, faire des grands mouvements. Les animaux c'est le plus facile pour commencer.`,
      date: '2025-12-15',
      author: 'Équipe Charades',
    },
  ],
  es: [
    {
      slug: 'como-jugar-charadas',
      title: 'Cómo jugamos a las charadas en casa',
      excerpt: 'Jugamos charadas casi todos los fines de semana. Os cuento cómo lo hacemos — es muy fácil.',
      content: `A ver, las charadas. Si no las habéis jugado nunca: alguien actúa una palabra y los demás tienen que adivinar. Parece fácil pero se pone muy divertido.

## Cómo va

Primero hacéis equipos. Alguien saca una palabra — nosotros usamos el generador de esta web porque nadie quiere pensar palabras. Tenéis 1-2 minutos.

Las reglas:

1. **No se puede hablar.** Ni susurrar ni nada.
2. **No señalar cosas** que haya en la habitación.
3. **Solo el cuerpo.** Manos, brazos, cara.

Si el equipo acierta, un punto.

## Mi consejo

No tengáis vergüenza. Los que hacen gestitos pequeños siempre pierden. Hay que ir a saco, movimientos grandes. Los animales son lo más fácil para empezar.`,
      date: '2025-12-15',
      author: 'Equipo Charadas',
    },
  ],
  it: [
    {
      slug: 'come-giocare-a-sciarada',
      title: 'Come giochiamo a sciarada a casa nostra',
      excerpt: 'Giochiamo a sciarada quasi ogni fine settimana. Ecco come facciamo noi — è facilissimo.',
      content: `Allora, la sciarada. Se non ci avete mai giocato: qualcuno mima una parola e gli altri devono indovinare. Sembra facile ma diventa davvero divertente.

## Come funziona

Prima si fanno le squadre. Qualcuno pesca una parola — noi usiamo il generatore di questo sito perché nessuno ha voglia di inventarsi le parole. Si hanno 1-2 minuti.

Le regole:

1. **Non si può parlare.** Neanche sussurrare.
2. **Non indicare oggetti** nella stanza.
3. **Solo il corpo.** Mani, braccia, faccia.

Se la squadra indovina, è un punto.

## Il mio consiglio

Non vergognatevi. Quelli che fanno gestini piccoli perdono sempre. Bisogna buttarsi, movimenti grandi. Gli animali sono i più facili per iniziare.`,
      date: '2025-12-15',
      author: 'Team Sciarada',
    },
  ],
  ja: [
    {
      slug: 'how-to-play',
      title: 'うちでのジェスチャーゲームのやり方',
      excerpt: '毎週末ジェスチャーゲームやってます。やり方を紹介しますね。めっちゃ簡単です。',
      content: `ジェスチャーゲームって知ってます？誰かが言葉をジェスチャーで表して、みんなが当てるゲームです。単純だけど、めっちゃ盛り上がります。

## やり方

まずチーム分け。次に誰かが単語を引きます。うちはこのサイトのジェネレーターを使ってます。制限時間は1〜2分。

ルール：

1. **しゃべっちゃダメ。** ひそひそ声もダメ。
2. **部屋の中のものを指差すのもダメ。**
3. **体だけで表現。** 手、腕、顔、なんでもOK。

チームが当たったら1ポイント。

## コツ

恥ずかしがらないこと！小さい動きの人はだいたい負けます。大きく動いて、変な顔して。動物が一番簡単なカテゴリーです。`,
      date: '2025-12-15',
      author: 'ジェスチャーゲーム チーム',
    },
  ],
  ko: [
    {
      slug: 'how-to-play',
      title: '우리 집에서 제스처 게임하는 법',
      excerpt: '거의 매주 제스처 게임 해요. 어떻게 하는지 알려드릴게요. 진짜 쉬워요.',
      content: `제스처 게임 알아요? 누가 몸으로 단어를 표현하면 다른 사람들이 맞추는 거예요. 단순한데 진짜 웃겨요.

## 방법

먼저 팀 나누기. 그다음 누군가 단어를 뽑아요. 저희는 이 사이트 생성기를 써요. 시간은 1-2분.

규칙:

1. **말하면 안 돼요.** 속삭이는 것도 안 됨.
2. **방에 있는 물건 가리키면 안 돼요.**
3. **몸으로만 표현.** 손, 팔, 얼굴 다 OK.

팀이 맞추면 1점.

## 꿀팁

부끄러워하지 마세요! 작게 움직이는 사람은 대부분 져요. 크게 움직이고 우스꽝스러운 표정 지세요. 동물이 제일 쉬운 카테고리예요.`,
      date: '2025-12-15',
      author: '제스처 게임 팀',
    },
  ],
  'zh-tw': [
    {
      slug: 'how-to-play',
      title: '我們家怎麼玩比手畫腳',
      excerpt: '我們幾乎每個週末都玩比手畫腳。跟大家分享一下我們怎麼玩的，超級簡單。',
      content: `比手畫腳這遊戲，如果你沒玩過：就是一個人用動作表演一個詞，其他人來猜。聽起來很簡單，但玩起來真的超好笑。

## 怎麼玩

先分隊。然後有人抽一個詞 — 我們都用這個網站的生成器，因為沒人想自己想詞。時間大概1-2分鐘。

規則：

1. **不能說話。** 連悄悄話都不行。
2. **不能指房間裡的東西。** 那算作弊。
3. **只能用身體。** 手、手臂、臉，什麼都行。

隊友猜對就得一分。

## 我的秘訣

不要害羞！動作很小的人通常都會輸。要大動作、做誇張的表情。動物類是最簡單的，可以先從這個開始。`,
      date: '2025-12-15',
      author: '比手畫腳團隊',
    },
  ],
}

export function getBlogPosts(lang: string): BlogPost[] {
  return blogData[lang] || blogData.en
}

export function getBlogPost(lang: string, slug: string): BlogPost | undefined {
  const posts = getBlogPosts(lang)
  return posts.find((p) => p.slug === slug)
}
