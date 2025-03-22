// src/data/articles.js - updated with correct image paths
export const articles = [
  {
    id: 1,
    title: "Ålder är bara en siffra - passion vet inga gränser!",
    summary: "Inga Gustafsson, 85 år, bevisar att man aldrig är för gammal för att följa sina drömmar! Efter 17 år med teatergruppen \"Berguvarna\" turnerar hon nu med föreställningen \"Återvinning\" för att inspirera andra äldre. \"Man slutar inte leka för att man blir gammal, man blir gammal för att man slutar leka,\" säger Inga med ett leende.",
    source: { name: "SVT Nyheter" },
    published_date: "2025-03-18T10:00:00Z",
    positivity_score: 0.91,
    topics: [{ name: "Kultur" }, { name: "Inspirerande" }],
    region: { name: "Södertälje", positivity: 0.88, articles_count: 45 },
    image_url: "/images/inga_teater_85.jpg",
    url: "https://www.svt.se/nyheter/artikel/12345"
  },
  {
    id: 2,
    title: "Från scenen till idrottsarenan - när en person gör skillnad!",
    summary: "Mångmiljardären Torsten Jansson har investerat otroliga 200 miljoner kronor i en multiarena på 10 000 kvadratmeter i lilla Kosta! \"Det fanns inget för ungdomar att göra,\" förklarar Torsten, som själv har bakgrund som pingisspelare. När reportern frågade vad han vinner på det hela svarade han enkelt: \"Inget annat än glädje.\"",
    source: { name: "SVT Nyheter" },
    published_date: "2025-03-17T14:30:00Z",
    positivity_score: 0.88,
    topics: [{ name: "Idrott" }, { name: "Samhälle" }],
    region: { name: "Småland", positivity: 0.81, articles_count: 68 },
    image_url: "/images/torsten_arena_kosta.jpg",
    url: "https://www.svt.se/nyheter/artikel/67890"
  },
  {
    id: 3,
    title: "Generositet som botar - från idrott till medicin!",
    summary: "Tyska forskare har åstadkommit något som länge ansetts omöjligt - fem patienter med den autoimmuna sjukdomen SLE har blivit helt symptomfria efter genteknikbehandling! Detta genombrott visar att engagemang inom forskning kan leda till livräddande genombrott.",
    source: { name: "Svenska Dagbladet" },
    published_date: "2025-03-14T09:45:00Z",
    positivity_score: 0.92,
    topics: [{ name: "Forskning" }, { name: "Hälsa" }],
    region: { name: "Global", positivity: 0.86, articles_count: 112 },
    image_url: "/images/sle_breakthrough_research.jpg",
    url: "https://www.svd.se/artikel/97531"
  },
  {
    id: 4,
    title: "En stjärnas jordnära handling - från medicinsk till ekonomisk frihet!",
    summary: "Skådespelaren Michael Sheen har använt sin förmögenhet för att befria 900 personer från ekonomisk börda! Med 100 000 pund köpte han upp skulder i sin hemstad Port Talbot, där många drabbats av arbetslöshet efter att ortens stålverk lagts ner. \"Det blev som ett slag i magen,\" berättar Michael om när han hörde om situationen.",
    source: { name: "Aftonbladet" },
    published_date: "2025-03-12T16:20:00Z",
    positivity_score: 0.89,
    topics: [{ name: "Ekonomi" }, { name: "Kändisar" }],
    region: { name: "Wales", positivity: 0.84, articles_count: 32 },
    image_url: "/images/michael_sheen_debt.jpg",
    url: "https://www.aftonbladet.se/artikel/24680"
  },
  {
    id: 5,
    title: "Kärlek i överflöd - från människor till hundar!",
    summary: "Ett viralt klipp från ett hunddagis i Kina visar precis hur överflödande kärlek kan vara! När en anställd snubblade överöstes personen med hundkärlek istället för ilska. Hundarna påminner oss om kraften i ovillkorlig kärlek och glädje!",
    source: { name: "Expressen" },
    published_date: "2025-03-18T08:15:00Z",
    positivity_score: 0.94,
    topics: [{ name: "Djur" }, { name: "Viralt" }],
    region: { name: "Kina", positivity: 0.83, articles_count: 28 },
    image_url: "/images/doggy_daycare_love.jpg",
    url: "https://www.expressen.se/artikel/13579"
  },
  {
    id: 6,
    title: "Från vardagshjältar till idrottshjältar!",
    summary: "Svenska Alexander Isak blev matchhjälte när Newcastle bröt sin 70-åriga titeltorka med seger i ligacupfinalen mot Liverpool. \"Alexander Isak cementerar sin plats i Newcastles sägner,\" rapporterade BBC. Isak skapade ett historiskt ögonblick på fotbollsplanen!",
    source: { name: "Omni" },
    published_date: "2025-03-16T22:30:00Z",
    positivity_score: 0.90,
    topics: [{ name: "Idrott" }, { name: "Fotboll" }],
    region: { name: "England", positivity: 0.85, articles_count: 76 },
    image_url: "/images/isak_newcastle_victory.jpg",
    url: "https://www.omni.se/artikel/86420"
  },
  {
    id: 7,
    title: "Kärlekens uthållighet - den ultimata framgångssagan!",
    summary: "Det brasilianska paret Manoel (105) och Maria (101) har just slagit världsrekord i längsta äktenskapet med otroliga 84 år tillsammans! Deras hemlighet? \"Kärlek\", säger Maria enkelt. Paret visar att kärlek och engagemang bara växer sig starkare med åren.",
    source: { name: "People" },
    published_date: "2025-02-24T12:00:00Z",
    positivity_score: 0.95,
    topics: [{ name: "Relationer" }, { name: "Rekord" }],
    region: { name: "Brasilien", positivity: 0.82, articles_count: 40 },
    image_url: "/images/brazilian_couple_record.jpg",
    url: "https://www.people.com/artikel/75319"
  },
  {
    id: 8,
    title: "En kopp hälsa till allt detta!",
    summary: "Ny forskning visar att kaffedrickande kan minska risken för alzheimers och parkinsons med hela 30 procent! Bäst effekt ger osötat kaffe med koffein - ytterligare en anledning att ta en paus och reflektera över dagens goda nyheter med en värmande kopp i handen!",
    source: { name: "Aftonbladet" },
    published_date: "2025-03-17T11:10:00Z",
    positivity_score: 0.87,
    topics: [{ name: "Hälsa" }, { name: "Forskning" }],
    region: { name: "Global", positivity: 0.86, articles_count: 112 },
    image_url: "/images/coffee_brain_health.jpg",
    url: "https://www.aftonbladet.se/artikel/24681"
  }
];