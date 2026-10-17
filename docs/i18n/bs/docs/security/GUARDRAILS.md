# Guardrails (Bosanski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Izvor istine:** `src/lib/guardrails/`
> **Posljednje ažuriranje:** 2026-08-29 — v3.8.51 (Porijeklo transkripta Video Bridge-a je deklarisano od strane pozivaoca,
> još nije verifikovano od strane servera — pojašnjeno po #11661)

Zaštitne ograde (Guardrails) nameću sigurnost, politiku i transformacije sadržaja na granici
između OmniRoute-a i uzvodnih provajdera. Svaka zaštitna ograda može pregledati (i
opcionalno odbiti, transformisati ili anotirati) zahtjeve (`preCall`) i
uzvodne odgovore (`postCall`).

Sistem je **fail-open**: ako zaštitna ograda baci grešku tokom izvršavanja, registar
bilježi grešku i nastavlja sa sljedećom zaštitnom ogradom umjesto da odbije
zahtjev. Blokiranje je eksplicitna odluka (`block: true`), nikada slučajnost.

## Ugrađene zaštitne mjere

Registar pri uvozu automatski učitava šest zaštitnih mjera prema redoslijedu prioriteta
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Naziv               | Faza/e         | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niži brojevi prioriteta izvršavaju se **prvi**.

### Premosnik za viziju (`visionBridge.ts`) — Premosnik modaliteta PR-1

Presreće zahtjeve koji sadrže slike i usmjereni su prema **modelima bez podrške za viziju** te cijeli zahtjev preusmjerava na model koji podržava viziju ili zamjenjuje dijelove sa slikama tekstualnim opisima koje generiše podesivi model za viziju prije poziva prema nadređenom servisu. Time se pružaocima koji podržavaju samo tekst omogućava da transparentno obrađuju multimodalne sadržaje.

Tok:

1. Preskočite ako ciljni model već podržava viziju (osim ako se nalazi na
   listi modela za prisilno premošćavanje `isVisionBridgeForcedModel`).
2. Izdvojite dijelove sa slikama putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji obradu delegira **objedinjenom detektoru
   medija** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedinstvenom
   izvoru istine koji se dijeli s kombinovanim filterom kompatibilnosti.
   Izdvajanje je ograničeno listom dozvoljenih dijelova najvišeg nivoa čije
   oblike `replaceImageParts` može vratiti na mjesto (ugovor izdvajanje↔zamjena): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` i Responses API `input_image`. Ugniježđena podudaranja i
   oblici koji sadrže samo indikatore namijenjeni su kombinovanom filteru i nikada se ne izdvajaju.
   Preskočite ako nijedan nije pronađen.
3. Razriješite konfiguraciju za vrijeme izvođenja putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključevi postavki
   `modalityBridge*` imaju prednost; zastarjeli ključevi `visionBridge*` ostaju kao
   **rezervna opcija tokom jednog ciklusa** (period za vraćanje prethodne verzije).
   Preskočite prije bilo kakvog prolaska kroz medije kada je premošćavanje onemogućeno.
4. Selektor načina rada (`modalityBridgeVisionMode`, pogledajte tabelu ispod)
   odlučuje između preusmjeravanja i opisivanja. Preusmjeravanje vraća
   `modifiedPayload` u kojem je zamijenjen samo `model`, uz metapodatke
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Putanja opisivanja: ograničava broj slika na `maxImages`, sastavlja upit
   prilagođen zadatku, provjerava keš opisa, poziva model za viziju **paralelno**
   (`Promise.allSettled`) i umjesto slika umeće tekstualne dijelove
   `[Slika N]: <opis>`. Neuspjelo opisivanje daje `null`, a izvorni dio sa slikom
   ostaje **sačuvan** (#4012) — osim na kombinovanoj putanji opisivanja kada sva
   opisivanja ne uspiju, pri čemu potvrđeni nadređeni servis bez podrške za viziju dobija
   zamjenski tekst `(nedostupno — nije povezan nijedan pružalac koji podržava viziju)` (#8430).
6. Vratite `modifiedPayload` + metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor načina rada (`modalityBridgeVisionMode`)

| Način rada | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                                                                           |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Zastarjela heuristika, nepromijenjena (#6640/#7204): modeli koji nisu kombinovani/`auto/` preusmjeravaju se na najbolji model za viziju, osim ako izvorni model već ima upotrebljive pristupne podatke (tada se koristi opisivanje); kombinovana odredišta uvijek koriste opisivanje.                                                                               |
| `describe` |        | Uvijek opisuje — blok za preusmjeravanje u potpunosti se preskače; model koji je korisnik izabrao uvijek daje odgovor.                                                                                                                                                                                                                                              |
| `reroute`  |        | Prisiljava preusmjeravanje: zaobilazi se zaštita za zadržavanje modela s pristupnim podacima. Zaštita pristupnih podataka za **cilj** preusmjeravanja i dalje se primjenjuje — kada ne postoji upotrebljiv ciljni model za viziju, zahtjev prelazi na opisivanje kako neobrađene slike nikada ne bi stigle do pozadinskog sistema koji podržava samo tekst (#8430). |

Prisilni načini rada prekidaju obradu **prije** pokretanja automatske heuristike;
ponašanje načina `auto` identično je na nivou bajtova zaštitnoj mjeri prije PR-1.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivaoca ograničava `allowedConnections`, skupove kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), premošćavanje bira
samo modele za preusmjeravanje i opisivanje koje ključ smije koristiti, na vezama
koje ključ smije koristiti. Poziv za opisivanje zatim uvijek prolazi kroz
OmniRoute samopetlju sa zaglavljem `x-omniroute-self-loop-key-id`, tako da
prijemni zahtjev za razgovor ponovo primjenjuje pravila tog ključa za veze i
modele. `enforceApiKeyPolicy()` uvažava to zaglavlje samo zajedno sa bearer
tokenom samopetlje, tako da ono može samo suziti pristup, a ID koji se ne može
razriješiti biva odbijen.

Ako ključu nije dozvoljen nijedan model za viziju, putanja opisivanja se povlači
i zahtjev prolazi nepromijenjen, uz isto ponašanje otvorenog prolaza u slučaju
greške kao kod onemogućene zaštitne mjere (metapodaci
`{ skipped: true, reason: "no_permitted_vision_model" }`). Zahtjevi bez ključa
i ključevi bez ovih ograničenja ponašaju se potpuno jednako kao ranije.

#### Upit za opisivanje prilagođen zadatku (`modalityBridgeVisionTaskAware`)

Zadano je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **posljednje korisničke poruke** (skraćen na 500 znakova) osnovnom
upitu za opisivanje, usmjeravajući opis prema onome što je korisnik zaista pitao
(obrazac codex-vision-proxy) i tražeći od modela za vid da transkribuje vidljivi
tekst. Kada je zastavica isključena — ili nema korisničkog teksta — osnovni upit
koristi se neizmijenjen.

Vlastiti OpenAI-kompatibilni zahtjev samopetlje za opisivanje (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvijek zahtijeva `image_url.detail: "high"` —
bezuslovno, za svakog pozivaoca/pružaoca, bez zavisnosti od bilo kakvog signala klijenta.
Uzorkovanje s niskim nivoom detalja umanjuje tačnost OCR-a upravo za zadatak
transkripcije teksta koji ovaj upit zahtijeva, pa sam poziv za opisivanje uvijek
zahtijeva visok nivo detalja bez obzira na nivo detalja korišten u izvornom dolaznom
zahtjevu. Ovo utiče samo na tijelo internog zahtjeva za opisivanje; ne mijenja način
na koji OmniRoute prosljeđuje pozivaočev vlastiti `image_url.detail` u primarnom zahtjevu —
ta zadana vrijednost primjenjuje se zasebno i samo za prepoznate OpenCode klijente, u
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grana
samopetlje za opisivanje s Anthropic žičanim formatom nema polje `detail`
i nijedna zadana vrijednost ne utiče na nju.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji vrati
`callVisionModel()` prosljeđuje se neizmijenjen, čime se zadržava postojeće
ponašanje. Svaka vrijednost u rasponu 100–50000 skraćuje opis i dodaje
sufiks `…` prije nego što se umetne nazad kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovu vrijednost za OCR zadatke s mnogo detalja kod kojih narednom modelu
treba potpuna transkripcija; smanjite je kako biste ograničili potrošnju tokena
kod opširnih modela za vid. Polje na kontrolnoj ploči nalazi se u panelu Advanced
na kartici Vision (`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`)
i ograničava svaku vrijednost između 1 i 99 na najmanje 100, dok eksplicitnu
vrijednost `0` ostavlja netaknutom — `0` je samostalno važeća Zod vrijednost
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
zadana vrijednost koja znači „nije postavljeno“.

#### Keš opisa (`modalityBridge/bridgeCache.ts`)

LRU + TTL keš u memoriji za izlaze opisa, zajednički za cijeli proces.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
uokvirivanjem prefiksom dužine (bez kolizija granica polja). Komponenta modela
je **konfigurisani** model mosta, a ne model koji je zaista odgovorio —
`callVisionModel` može interno koristiti rezervni model, a određivanje ključa
po pokušaju fragmentiralo bi keš. Neuspjeli opisi nikada se ne keširaju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljenih slika (samopetlja za opisivanje/preuzimanje base64 sadržaja)

Kada most sam preuzima **udaljenu** sliku — Anthropic samopoziv za opisivanje
i konverzija u base64 za claude žičani format
(`ensureBase64ImagesForClaudeWire`), oboje putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultujući URI
podataka prosljeđuje se kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije ugrađivanja u zahtjev modelu za vid.
Prevelike slike smanjuju se na **2048px po dužoj ivici** (što odgovara
ograničenju promjene veličine koje OpenAI/Anthropic već primjenjuju na serverskoj
strani), čime se smanjuju količina podataka za prijenos i latencija bez promjene
onoga što model za vid vidi. Promjena veličine koristi `sharp`, učitan dinamičkim
uvozom: na platformi na kojoj se njegova nativna binarna datoteka ne uspije učitati,
`normalizeDataUri()` **nikada ne baca izuzetak** — umjesto toga prosljeđuje izvorne
bajtove neizmijenjene, tako da putanja opisivanja/konverzije u base64 uvijek nastavlja
raditi. Bajtovi koji nisu slika (preuzimanje koje nije vratilo sliku koju je moguće
dekodirati) također se prosljeđuju neizmijenjeni. Ova normalizacija ograničena je na
slike koje most preuzima za vlastiti samopoziv — nikada se ne primjenjuje na pozivaočev
izvorni sadržaj koji se direktno prosljeđuje, u skladu s načelom izmjene isključivo
uz izričitu saglasnost (Strogo pravilo #20).

#### Shema postavki + migracija

Novi ključevi `modalityBridge*` validiraju se pomoću Zoda u `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojka `modalityBridgeCache*` i grupa
`modalityBridgeAudio*` koju koristi Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopira postojeće naslijeđene vrijednosti
`visionBridge*` u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje
vrijednost `modalityBridge*` koju je postavio operater); naslijeđeni ključevi
ostaju prihvaćeni kao rezervna opcija za čitanje tokom jednog ciklusa izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori transformisani opisivanjem sadrže
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izrađuje ga `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
a postavlja `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmjereni zahtjevi **nemaju** zaglavlje — sadržaj nije izmijenjen, a zamjena
modela već je vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (upravljačka autentifikacija, isti nivo kao
`GET /api/settings`) vraća brojače po modalitetu pohranjene u memoriji
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` koristi `latencySamples`, a ne sve pokušaje, kao
nazivnik; operacija bez mjerenja vremena ne stvara lažni uzorak od nula
milisekundi. `bridged` ostaje unazad kompatibilan alias za uspješne
konverzije; neuspješni pokušaji ga ne uvećavaju.
Brojači se po dizajnu resetuju pri ponovnom pokretanju procesa
(telemetrija, a ne računovodstvo).

#### Konfiguracija kontrolne ploče

Namjenska stranica kontrolne ploče je
`/dashboard/settings/modality-bridge`. Njene kartice `Vision`, `Audio` i
`Video`, kojima se može pristupiti putem URL-a, zadržavaju parametre upita prilikom promjene vrijednosti `tab`.
Kartica Vision omogućava uključivanje, odabir režima i modela (uključujući automatski
zadani odabir), upite prilagođene zadatku, napredna ograničenja isteka vremena/slike/dužine
opisa/keša, brojače vremena izvršavanja i zaštićeni ogledni zahtjev. Kartica Audio je također aktivna: omogućava
uključivanje, birač isključivo STT modela s opcijom Auto, ograničenja isteka vremena/maksimalnog trajanja isječka, audio
brojače i ogledni test `input_audio`. Kartica Video je funkcionalna: prikazuje
stanje FFmpeg/ffprobe okruženja — jedno od četiri eksplicitna stanja korisničkog interfejsa (`unknown` dok
je provjera u toku ili se nije mogla završiti, `restricted` na hostu kontrolne ploče
koji nije povratna petlja, gdje se provjera preskače na strani klijenta, `unavailable` nakon što je provjerom
potvrđeno da nedostaje ili `available` s verzijama FFmpeg/ffprobe) — trajno pohranjuje
ograničenja uključivanja/modela/kadrova/videa/isteka vremena, filtrira birač modela na modele
koji podržavaju vid i prikazuje video brojače.

Prethodna kartica Vision Bridge u AI postavkama sada je kompatibilna poveznica na
novu stranicu; više ne sadrži drugu kopiju obrasca. Media Providers također
povezuje tokove rada Image-to-Text i Speech-to-Text s odgovarajućim karticama Modality
Bridgea bez uklanjanja postojećeg Speech-to-Text okruženja za testiranje.

**Zaobilaženje kontrole pristupa za vlastitu povratnu petlju:** kada se poziv za opisivanje usmjerava kroz vlastitu
`/v1` povratnu petlju OmniRoutea (nestandardni model pružaoca), podzahtjev šalje
`x-omniroute-admission-bypass: internal` i autentificira se razriješenim
akreditivom povratne petlje — lokalnim sentinelom `sk_omniroute` u lokalnom režimu ili
ključem okruženja `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` koji je konfigurirao operater (#1350), kako bi
implementacije s `REQUIRE_API_KEY=true` i dalje mogle izvršiti poziv za opisivanje. Zaobilaženje
se prihvata samo za te tačne akreditive, tako da vanjski klijenti ne mogu koristiti
zaglavlje za preskakanje kontrole pristupa.

Naslijeđene zadane vrijednosti nalaze se u `src/shared/constants/visionBridgeDefaults.ts`;
nove zadane vrijednosti za režim/zadatke/keš i razrješivač postavki nalaze se u
`src/shared/constants/modalityBridgeDefaults.ts`. Zaštitni mehanizam izlaže
opciju konstruktora `deps` kako bi testovi mogli umetnuti lažne implementacije
`getSettings` i `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahtjeve za razgovor koji sadrže zvuk prije nego što stignu do odredišta za koje nije
poznato da prihvata audio ulaz. Nikada ne preusmjerava zahtjev za razgovor: audio dijelovi se
transkribuju putem postojećeg višedijelnog krajnjeg endpointa kompatibilnog s OpenAI-jem, a
odabrani model za razgovor nastavlja raditi s tekstualnim transkriptima.

Tok:

1. Razriješite `supportsAudio` putem `getResolvedModelCapabilities()`. Eksplicitni
   metapodaci registra pružaoca imaju prednost, zatim statički metapodaci modela, pa sinhronizirani
   `modalities_input`. Deklarirana lista ulaza bez `audio` ima vrijednost `false`; ako nema
   dokaza o mogućnostima, vrijednost ostaje `null`. I `false` i `null` aktiviraju
   konzervativni most, dok ga `true` zaobilazi.
2. Razriješite postavke `modalityBridgeAudio*` i izdvojite zamjenjive audio dijelove najvišeg nivoa
   iz svake poruke putem zajedničkog detektora `detectMediaParts()`.
   Podržani formati prijenosa su OpenAI `input_audio`, `audio_url` i
   `source.media_type: "audio/*"`. Ugniježđeni zvuk se detektuje radi usmjeravanja, ali se ne
   uklanja putem putanje zamjene. Rad je ograničen postavkom `modalityBridgeAudioMaxClips`;
   kasniji dijelovi ostaju netaknuti.
3. Koristite konfigurirani `provider/model` ili dopustite da `selectAudioBridgeModel()` prolazi kroz
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabilnim redoslijedom kataloga i odabere prvi
   model s upotrebljivim aktivnim akreditivom pružaoca.
4. `callAudioTranscription()` pretvara base64/data-URI audio u višedijelnu
   datoteku `file` ili preuzima udaljeni `audio_url` kroz zaštitu odlaznog prometa samo prema javnim
   adresama, uz DNS vezivanje i ograničenje od 25 MB. Zatim POST zahtjevom šalje datoteku i odabrani
   model lokalnoj `/v1/audio/transcriptions` povratnoj petlji, autentificiranoj pomoću
   `resolveSelfLoopBearer()`. Postojeća ruta za transkripciju obavlja uobičajeno
   pronalaženje akreditiva, obradu perioda hlađenja/ograničenja brzine i prosljeđivanje pružaocu.
5. Uspješni pozivi zamjenjuju svoje dijelove s `[Audio N]: <transcript>`. Pozivi
   se izvršavaju pomoću `Promise.allSettled`: pojedinačni neuspjeh zadržava izvorni
   audio dio (ugovor #4012). Ako svi pozivi ne uspiju, a dokazano je da odredište ima
   `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (unavailable — no STT provider connected)` (ugovor #8430). Za
   nepoznato odredište (`null`), rezultat u kojem svi pozivi ne uspiju ostaje netaknut. Dokazano
   tekstualno odredište bez upotrebljivog STT akreditiva dobija isti eksplicitni
   zamjenski tekst bez slanja mrežnog poziva.

Uspješni transkripti koriste LRU/TTL keš Modality Bridgea na nivou procesa.
Ključ kombinuje audio referencu, stabilnu oznaku operacije `audio-transcription`
i odabrani STT model; neuspjesi se nikada ne keširaju. Audio pokušaji ažuriraju
zajedničke brojače `bridged`, `cacheHits`, `failures` i `lastUsedAt`.
Transformirani odgovori sadrže
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; netaknuti
zahtjevi ne dobijaju segment Audio Bridgea.

Postavke vremena izvršavanja pohranjene su u bazi podataka i validirane pomoću Zoda:

| Ključ                         | Zadano  | Raspon                |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatski ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Dijeljena predmemorija i dalje se kontroliše putem `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Videomost (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće videodijelove najvišeg nivoa u `messages` za Chat Completions i `input`
za Responses API prije pozivanja cilja bez poznate izvorne podrške za video.
Podržani oblici su `input_video`, `video_url`, `video_source`, HTTPS URL-ovi
i podatkovni URI-jevi `data:video/*;base64,...`. Obični nazivi datoteka u tekstu
ne tretiraju se kao video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja obilaskom zahtjeva,
provjerom mogućnosti/politike, agregacijom po zahtjevu i sadržajem odgovora.
Obrada pojedinačnog videa — pribavljanje, predmemorija cjelokupnog rezultata,
opisivanje niza kadrova (koje objedinjuje svaki zvučni transkript koji je naveo
pozivalac) te metrike/prekid/čišćenje za svaki pokušaj — skrivena je iza
`processVideoPart` u `videoBridgePipeline.ts`, koji se poziva jednom po
videodijelu unutar petlje funkcije `preCall`. Taj modul također definiše
eksplicitne granice portova `VideoMediaBrokerPort` (pribavljanje bajtova i
izdvajanje uzorkovanih kadrova), `VideoAudioTranscriptionPort` (objedinjavanje
zvučnog transkripta koji je naveo pozivalac s opisima uzorkovanih kadrova) i
`VideoDrilldownPort` (granica trajnog pohranjivanja detaljne analize kadrova;
još nije povezana s `processVideoPart` — trenutno samo zasebna ruta
`/api/modality-bridge/video/drilldown` zapisuje unose detaljne analize).

Javna putanja zahtjeva `/v1` nikada ne uvozi niti pokreće potproces. Udaljeni
videozapisi preuzimaju se uz ograničenje od 50 MiB; ugrađeni base64 videozapisi
imaju konzervativno ograničenje od 36 MiB dekodiranih podataka po videozapisu
kako bi omotač modela/poruka/uokvirivanja mogao ostati unutar javnog ograničenja
prihvata JSON zahtjeva od 50 MiB. Ugrađena dužina i procjene dekodirane veličine
provjeravaju se prije alokacije. HTTPS je obavezan za početni udaljeni URL i
svako preusmjeravanje, uz korištenje postojećeg zaštitnog mehanizma za isključivo
javne odlazne veze s DNS prikvačivanjem. Bajtovi zatim prelaze tačno određenu
internu granicu posrednika `POST /api/modality-bridge/video/extract`. Ta ruta je
istovremeno `LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvata samo autentificiran zahtjev
pouzdane povratne petlje unutar procesa i nikada ne prihvata URL, putanju
datotečnog sistema, izvršnu datoteku niti listu argumenata. Obrada ograničenja
veličine tijela API-ja i inkrementalni čitač tijela u rukovaocu nezavisno
primjenjuju ograničenje ulaza posrednika od 50 MiB. Njegov ograničeni red obrađuje
jedno izdvajanje istovremeno, dopušta četiri posla na čekanju i ograničava ulazne
podatke na čekanju na 100 MiB.

Unutar posrednika, `ffprobe` čita privatnu lokalnu datoteku; fiksna lista
dozvoljenih formata isključuje formate lista za reprodukciju i manifesta. Za
dozvoljene spremnike iz porodice MOV, vanjske MOV reference na podatke ostaju
zadano onemogućene, a fiksna naredba ih ne uključuje. I `ffprobe` i `ffmpeg`
koriste listu dozvoljenih protokola koja sadrži samo `file`, jednu nit, fiksne
nizove argumenata, bez ljuske, te izvršne datoteke razriješene iz `PATH`.
Tokovi naslovnih slika u prilogu nisu kandidati za reprodukciju. Svi tokovi koji
se mogu reproducirati moraju zadovoljiti ograničenja, a eksplicitni zadani tok
ima prednost prije determinističkog rezervnog izbora s najnižim indeksom.
Videozapisi su ograničeni na 600 sekundi, 8.192 piksela po dimenziji i
33.554.432 izvorna piksela. FFmpeg uzorkuje 1–16 srednjih JPEG kadrova, smanjuje
dužu ivicu na najviše 1.024 piksela bez povećavanja manjih ulaza i nikada ne
prima URL. Uzorkovanje je zadano `uniform`. Opcionalne politike `scene_aware` i
eksperimentalna `segment_aware` izvode jedan dodatni fiksni FFmpeg prolaz nad već
potvrđenim lokalnim tokom, biraju ograničene vremenske oznake scena iz `showinfo`
i deterministički se vraćaju na iste ravnomjerno raspoređene srednje tačke u
slučaju greške detektora, isteka vremena, neispravnog izlaza ili praznog skupa
kandidata. Režim svjestan segmenata dodjeljuje uzorke srednjih tačaka
proporcionalno potvrđenim intervalima scena; dokazi za režim svjestan segmenata
i ponašanje rezervnog postupka detaljno su opisani u nastavku. Strogo ograničenje
od 16 kadrova primjenjuje se nakon odabira u svakoj politici. Kada zahtjev
svjestan scena ima budžet od samo jednog kadra, koristi ravnomjerno raspoređenu
srednju tačku aktivnog prozora cijelog videozapisa ili fokusnog prozora i
prijavljuje `policyEffective: uniform`: jedan odabrani kadar scene ne može
sačuvati oba vremenska kraja. Pozivalac opcionalno može navesti konačan fokusni
prozor (`start`/`end` u sekundama); granice se ograničavaju na trajanje medija,
obrnuti ili nekonačni prozori se odbijaju, a sve politike uzorkovanja izvršavaju
se samo unutar normaliziranog intervala. Rezultirajući prozor uključuje se u
metapodatke uzorkovanja i u prefiks nepouzdanog opisa kako bi nizvodni modeli
mogli razlikovati fokusirani isječak od cijele vremenske linije.

Semantički fokus opisa zasebna je, eksplicitna postavka. Zadani način analize
`full` zadržava postojeći upit za kadrove i nikada ne prosljeđuje tekst zahtjeva
modelu za opisivanje. U režimu `focused`, most čita samo posljednji neprazni
`text`/`input_text` koji je napisao korisnik iz istog spremnika Chat ili
Responses, normalizira ga u NFC, sažima kontrolne znakove i razmake te ga
ograničava na 500 Unicode kodnih tačaka. Prazan rezultat vraća se na potpuno
isti upit režima `full`. Upotrebljiva smjernica serijalizira se kao JSON u
namjenskom bloku nepouzdanog korisničkog konteksta i smije samo određivati
prioritet uočljivih detalja; ne može nadjačati zasebno upozorenje protiv praćenja
uputa koje su vidljive ili čujne u mediju. Tekstualni fokus nikada ne izvodi
`start`/`end` niti mijenja vremenski uzorkivač.

#### FU-07 strukturni dokazi o segmentima

`segment_aware` koristi jedan ograničeni prolaz predanalize nad već validiranim
lokalnim videotokom. Fiksni lanac filtera prvo skalira video na širinu od najviše
320 piksela, otkriva promjene scena i zamrznute intervale, a zatim uzorkuje brzinom
od 1 kadra u sekundi radi procjene zamućenja, prosječne luminanse te
prostornih/vremenskih informacija. Prolaz je ograničen na 600 strukturnih uzoraka,
jednu FFmpeg/filter nit, iste liste dozvoljenih protokola ograničene samo na
`file` i liste dozvoljenih kontejnera, ograničenje izlaza procesa od 1 MiB te
najviše 30 sekundi unutar zajedničkog prekida/roka brokera. Nikada ne prihvata
naredbu, filter, putanju niti URL iz zahtjeva.

Strukturne vrijednosti predstavljaju determinističke dokaze uzorkovanja, a ne
semantičko razumijevanje videa. One ne zaključuju o subjektima, radnjama,
natpisima, govoru niti namjeri korisnika. Granice scena i zamrzavanja formiraju
segmente; pokrivenost zamrzavanjem, zamućenje, ekspozicija, prostorni detalji i
vremenske promjene utiču samo na način raspodjele postojećeg budžeta od 1–16
kadrova. Potpuno zamrznuti segment ograničen je na jedan kadar, dok se
nezamrznuti segmenti nadmeću za preostali budžet. Kada ima više granica nego
kadrova, zadržava se ravnomjerna pokrivenost vremenske linije kako brzi rezovi
na početku ne bi mogli sakriti dugi završni segment. Granice scena koje se
nalaze unutar analitičke rezolucije od 1 sekunde u odnosu na granicu zamrzavanja
objedinjuju se.

Filteri koji nedostaju, neispravni/prazni dokazi, greška detektora ili istek
vremena ograničene predanalize prelaze na tačno određenu politiku ravnomjernog
odabira srednjih tačaka. Prekid koji pokrene pozivalac ili rok brokera ne
aktivira taj rezervni postupak: on prekida podproces u toku, sprečava naknadno
izdvajanje kadrova, a privatno privremeno stablo uklanja se u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generiše determinističke stvarne FFmpeg
testne uzorke za uštede poziva za opisivanje nakon deduplikacije, raspodjelu
budžeta za gusto kretanje, dokaze o zamućenju/ekspoziciji/SI-TI, brze rezove s
dugim završetkom i lažno pozitivne rezultate postepenog pretapanja. Bilježi
vrijeme predanalize prema zidnom satu te, gdje je `/usr/bin/time` dostupan,
CPU vrijeme podređenog procesa i vršnu RSS vrijednost. Njegove provjere
kvaliteta predstavljaju samo strukturne oracle. Kvalitet stvarnog modela za
opisivanje ostaje `HOLD` jer ovaj testni okvir nema ovlaštenu krajnju tačku
niti fiksiranog ocjenjivača. Novčane uštede također ostaju `HOLD`, osim ako
`--caption-cost-per-call-usd` navede eksplicitnu pozitivnu procjenu troška po
pozivu; skripta nikada ne izmišlja nijedan od tih rezultata.

Svaki kadar ograničen je na 4 MiB, svi neobrađeni kadrovi zajedno na 23 MiB, a
serijalizirani odgovor brokera na 32 MiB. Privatni privremeni direktorij uklanja
se u `finally`. OmniRoute ne uključuje FFmpeg i ne prihvata prilagođenu putanju
do izvršne datoteke. Prije opisivanja, most primjenjuje konzervativni prolaz
vizuelne deduplikacije: svaki JPEG svodi se na 16×16 međuspremnik u nijansama
sive i poredi se samo s posljednjim zadržanim kadrom. Za traženi budžet opisa
veći od jednog kadra, izdvajanje osigurava ograničeni skup kandidata veličine
do dvostrukog budžeta i nikada veći od 16 kadrova. Traženo ograničenje
primjenjuje se tek nakon deduplikacije, pri čemu se prvi i posljednji odabrani
kandidati čuvaju tokom završnog prorjeđivanja kada budžet iznosi najmanje dva.
Verzionirana politika
`grayscale-16x16-mean-cells-v2` koristi veću vrijednost između srednje promjene
luminanse i omjera ćelija minijature čija je normalizirana promjena najmanje
0.05. Prag duplikata je konstanta 0.04, odabrana radi predvidljivosti umjesto da
bude izložena kao postavka tokom izvršavanja. Ovaj sekundarni signal visokog
kontrasta čuva male pokrete i promjene vidljivog teksta koje poređenje zasnovano
samo na srednjoj vrijednosti može sakriti. Greške komparatora ili dekodera
prelaze na zadržavanje pokrivenosti. Izlazni metapodaci odvojeno prikazuju
izdvojene kandidate, uspješno korištene kadrove i odbačene vizuelne duplikate.

Eksplicitno označeni videodio može zatražiti kontaktni list s vremenskim
oznakama. Most izrađuje JPEG mrežu s najviše 4 kolone i 16 kadrova. Svaka
ćelija od 512 piksela utiskuje vremensku oznaku izvora u donju traku visokog
kontrasta, dok iste vremenske oznake ostaju u tekstualnim metapodacima radi
naknadnog povezivanja i revizije. Cijeli JPEG ostaje ograničen na 32 MiB. Ako
`sharp` ne može dekodirati ili sastaviti mrežu, most prelazi na pojedinačne JPEG
kadrove; prekid klijenta i dalje se prenosi kroz operaciju izrade lista.

Dokazi za promociju namjerno su odvojeni od sintetičkog mikromjerila performansi
sastavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiše A/B
testni okvir s verzioniranom shemom za stvarne modele vida kompatibilne s
OpenAI-jem. Mjeri tokene koje prijavi pružalac usluge, ukupnu latenciju prema
zidnom satu (uključujući sastavljanje lista), broj poziva modelu i zadržavanje
činjenica definiranih manifestom. Neobrađeni odgovori modela ne zapisuju se u
izvještaj; zadržavaju se samo SHA-256 sažeci i ID-ovi podudarnih činjenica.
Testni okvir ne uspostavlja mrežnu vezu niti upućuje plaćeni poziv modelu osim
ako se proslijedi `--execute-real` i konfiguriraju `--model`,
`OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez takvog eksplicitnog stvarnog
izvršavanja, njegov mašinski čitljiv rezultat ostaje `HOLD`; sama sintetička
mjerenja korisnog sadržaja/broja poziva nisu dokaz za promociju.

Pozivaoci mogu priložiti opcionalni niz `transcript.cues` podržanom videodijelu
kada već posjeduju poravnati tekst. Svaki znak mora sadržavati `text`, konačan
interval `start`/`end` unutar ispitivanog trajanja i `source` s liste dozvoljenih
vrijednosti (`client`, `embedded` ili `audio-bridge`); `confidence` ima zadanu
vrijednost `1` i mora ostati između `0` i `1`. Potpuno identični znakovi se
objedinjuju. OmniRoute nikada ne pokreće transkripciju na osnovu ovih
metapodataka: validirani znakovi kopiraju se u opisani rezultat zajedno s
izvorom, pouzdanošću i intervalom te se prikazuju kao nepouzdana zapažanja uz
opise kadrova. Nevažeći tekst, tekst izvan opsega ili tekst bez porijekla odbija
se umjesto da se miješa u tok opisa. Oba kanala transkripta u tijelu zahtjeva
normaliziraju dostavljeno porijeklo na `client`, uključujući samostalno navedene
oznake `embedded` ili `audio-bridge`. Samo adapter u vlasništvu servera može
dodijeliti te pouzdane oznake putem argumenta `trustedSource`, dostupnog
isključivo iz koda; JSON polje zahtjeva ne može dosegnuti taj argument. Tekst
transkripta ostaje nepouzdan sadržaj izveden iz medija, bez obzira na njegovo
porijeklo, i nikada ne smije određivati autorizaciju.

Napredni pozivalac može dostaviti zapis `audioTranscript` za isti video;
on se tretira kao tekst koji je dostavio klijent, a ne kao dokaz serverske transkripcije.
Spoj za objedinjavanje izvršava vizuelna i audio zapažanja unutar
jednog roka i uz jedan signal prekida, raspoređuje ih na zajedničkoj vremenskoj liniji, sažima
potpuno jednake duplikate i prijavljuje djelimičan rezultat kada uspije samo jedna strana.
Nevažeći `audioTranscript` svodi se na taj djelimičan rezultat — vizuelni
opis se zadržava, a audio grana bilježi sanitizirani kôd greške —
umjesto da cijeli video bude neuspješan. Dostupnost po granama, oznaka djelimičnog rezultata
i sanitizirani kodovi grešaka čuvaju se u opisanom rezultatu, u
metapodacima zaštitnih ograda (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), u metapodacima keša rezultata i u brojačima
objedinjavanja mosta. Zadana putanja Video Bridgea ne poziva pretvaranje govora u tekst
niti preuzima drugu kopiju medija; bez tog izričitog zapisa ostaje
ograničena samo na video.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primjenjuje kad god
Video Bridge (koji je i sam opcionalan) renderira oznaku transkripta — ne postoji zasebna
oznaka zadržavanja. Kada zahtjev renderira bilo koju oznaku transkripta (`transcript` koji je deklarirao pozivalac
ili objedinjeni `audioTranscript`), zaštitna ograda označava ga kao
`videoBridgeObserved` i stvara redigovanu kopiju opisa videa —
identičan prikaz u kojem je tijelo slobodnog teksta svake oznake zamijenjeno sa
`[redacted-video-transcript]`, izrađen zamjenom strukturiranog polja oznake
prije sastavljanja niza znakova (nikada raščlanjivanjem poravnatog teksta, tako da nijedan sadržaj
oznake — zlonamjeran ili uobičajen, uključujući tijela koja sadrže `]`, kao što su
`[inaudible]`/`[music]` — ne može preživjeti). Tijelo zahtjeva pohranjeno u evidenciji poziva zamjenjuje
svaki tekstualni dio izveden iz videa tom redigovanom kopijom, uparenom prema jednakosti
sadržaja; sidro `fullText` ponovo se čita iz završenog sadržaja zaštitne ograde prije poziva,
tako da uparivanje i dalje uspijeva nakon što kasnije zaštitne ograde u lancu (maskeri ličnih podataka i
vjerodajnica, prioriteti 10/95) izmijene tekst opisa na mjestu i
nakon što umetanje sistemskog upita, primopredaje i Memorije preoblikuje niz poruka. Tijelo
poslano modelu ostaje nepromijenjeno. Zapaženi zahtjev također ne popunjava
trajnu Memoriju (preskače se izdvajanje izvedeno i iz zahtjeva i iz odgovora),
tako da odgovor samog modela ne može ponoviti tekst transkripta u Memoriji.

**Neobrađena video polja (#12430).** Kada je most omogućen, a izvorna podrška za video nepoznata ili ne postoji, definirana polja `transcript`/`audioTranscript` također aktiviraju `videoBridgeObserved`, čak i nakon neuspjeha opisa ili ograničenja `maxVideos`. `null` i prazni nizovi znakova se računaju; odsutna polja i metapodaci koji nisu video ne računaju se. Zadržane kopije rediguju ova polja ili izostavljaju zahtjev, a keševi/Memory se zaobilaze.

Na tim rezervnim putanjama, važeće oznake pozivaoca postaju podržani dijelovi `text`/`input_text`
umjesto nestandardnih polja pružaoca usluge. Oba zapisa dostavljena u zahtjevu
ostaju nepouzdana zapažanja tipa `client`, uz izričito upozorenje da video
nije opisan i da vremenske oznake nisu provjerene u odnosu na medij. Postojeća
ograničenja od 256 oznaka/64 KiB ukupno i po oznaci primjenjuju se zajedno na oba zapisa;
vremenske oznake moraju biti unutar brokerovog ograničenja od 600 sekundi i svakog dostavljenog fokusnog
prozora. Nevažeći zapisi se odbacuju i ne prosljeđuju kao proizvoljan tekst; važeći
parnjak i dalje se može koristiti osim ako je premašen njihov zajednički budžet. Null/prazna
polja ne dodaju tekst. Ova rezervna obrada ne dodaje dohvaćanje medija niti transkripciju.
Polja proširenja transkripta uklanjaju se iz rezervnog nosača videa i njegovih
objekata `video_url`/`source`. OpenAI lista dozvoljenih elemenata za prijenos ostaje stroga; video
nosači s nepoznatom izvornom podrškom ostaju dostupni, a poznata odredišta samo za tekst zadržavaju sigurne oznake.
Strukturirane redigovane kopije štite dodani tekst transkripta, dok
izvorni zahtjev u vlasništvu pozivaoca ostaje nepromijenjen. Odredišta s izvornom podrškom i
onemogućeni mostovi zadržavaju postojeće ponašanje zaobilaženja.

Dodatne zadržane kopije koriste isti signal zapaženog zahtjeva. Neobrađeni
snimak klijentskog zahtjeva prije zaštitnih ograda, zahtjev na čekanju u memoriji i rana
evidencija odbijenog zahtjeva strukturno zamjenjuju polja transkripta u video dijelovima;
tekstualni upiti koje sintetiziraju faze cjevovoda i kontekstna primopredaja rediguju se
na odredištu tijela pohranjenog zahtjeva. Pohranjena oznaka `video_content_removed`
uzrokuje da se nastavak `previous_response_id` sigurno prekine umjesto da rekonstruira
tekst koji je namjerno odbačen. Ako zapaženi zahtjev izgubi svoju
redigovanu kopiju za pojedinačni dio prije evidentiranja ili ako se čak i jedna od više video kopija
ne uspije podudariti nakon kasnijih izmjena zahtjeva, zadržano tijelo zahtjeva
u potpunosti se izostavlja umjesto zadržavanja djelimično redigovanog transkripta.

Za zapaženi zahtjev, odgovor modela može citirati bilo koji dio
transkripta bez strukturirane granice oznake. Njegov `responseBody` u pohranjenoj evidenciji poziva
zato se zamjenjuje oznakom izostavljanja; detaljni
artefakt cjevovoda (koji može uključivati tijela uzvodne strane/klijenta i dijelove toka)
ne zadržava se. Semantički keš, keš idempotentnosti i keš ponovnog izvođenja rezonovanja
zaobilaze čitanja i pisanja za taj zahtjev. Zahtjev pružaocu usluge i odgovor
vidljiv klijentu ostaju nepromijenjeni. Rani keepalive bajtovi prazne se iz privremenog
međuspremnika kada se detaljni artefakt izostavi. Kirovo upozorenje o neispravnom EventStreamu
prijavljuje samo broj bajtova korisnog sadržaja, nikada njegov sadržaj niti neobrađenu grešku
JSON parsera.
Ovim se ne tvrdi da je provjerena svaka nepovezana dijagnostika pružaoca usluge/dodatka;
šira provjera odredišta za zadržavanje prati se u #11658.

Interni životni ciklus `/api/modality-bridge/video/drilldown` predstavlja zaseban,
povratnom petljom i tokenom autentificiran sloj predmemorije. Svaka operacija također zahtijeva
kanonski neprozirni ID principala. Prije nego što se produkcijskom pozivaocu omogući pristup, on mora
izvesti taj ID iz autentificiranog tenanta i nikada ne smije proslijediti
vrijednost koju je odabrao klijent. Ključevi predmemorije povezuju taj principal s kanonskim ID-ovima sesije i
videoreference, pohranjuju samo njihove ključeve izvedene pomoću SHA-256 te ograničavaju i čitanja
i brisanje na isti principal. Predmemorija pohranjuje najviše 16 izvedenih JPEG
kadrova po unosu, označava ih isteklim nakon deset minuta i podržava ograničena
`start`/`end` čitanja ili eksplicitno brisanje sesije.

Svaki principal ograničen je na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta
ograničenja nezavisna su od globalne gornje granice od 64 unosa/256 MiB: pritisak
kvote principala izbacuje samo unose tog principala koji najduže nisu korišteni prije nego što se
razmotri globalno LRU izbacivanje. Istekli unosi uklanjaju se i iz evidencije principala i iz
globalne evidencije tokom aktivnosti predmemorije, dok otkazivanje i neuspjeh validacije ne
potvrđuju djelimičnu zamjenu.

Predmemorija odbija nekanonski Base64, prekomjernu dopunu, medije koji nisu JPEG, neispravne ili
skraćene JPEG-ove te JPEG-ove koji generiraju upozorenje tokom ograničenog dekodiranja cijele slike pomoću `sharp`.
Svaku prihvaćenu sliku ponovo kodira kao kanonski JPEG, izvodi širinu i visinu
iz dekodiranih bajtova umjesto da vjeruje poljima pozivaoca te odbacuje sve završne
poliglotske bajtove umjesto da ih zadržava. Samo se ograničeni kanonski komprimirani međuspremnik
uračunava u obje kvote. Ograničenje JSON prijenosa uključuje Base64 prekoračenje za gornju granicu
dekodiranog ulaza od 32 MiB. Svako
pohranjeno izvođenje bilježi svoj validirani JPEG format/rezoluciju, politiku uzorkovanja,
verziju izvođenja, vrijeme kreiranja, hash sadržaja koji je izračunao server i hashiranu nadređenu
referencu zajedno s hashom nadređenog sadržaja pouzdanog pozivaoca. Otkazivanje se provjerava
između asinhronih faza dekodiranja/hashiranja prije atomskog potvrđivanja u predmemoriju.

Ova faza još ne povezuje produkcijskog proizvođača s rutom i ne
omogućava odabir varijante s više rezolucija. Transparentna putanja zahtjeva Video Bridgea
stoga ne uvodi dodatni rad, dok izvođenje principala vezano za tenanta i
potpuni FU-08 životni ciklus s više rezolucija ostaju eksplicitni naknadni zadaci, umjesto
da budu dokumentirani kao završeno ponašanje.

Kadrovi se redom opisuju pomoću konfiguriranog Video modela. Prazna
Video zamjena nasljeđuje Vision postavku; ako su obje prazne, Vision
automatski usmjerivač bira efektivni model koji podržava viziju. Uspješni opisi
zamjenjuju originalni dio stabilnim prefiksom `[Video description:` koji također
označava tekst kao nepouzdano zapažanje izvedeno iz medija i upućuje nizvodne
modele da ne slijede upute pronađene u mediju. Ključevi predmemorije opisa kadrova
uključuju JPEG bajtove, upit, vremensku oznaku i efektivni model; samo se uspješni
opisi pohranjuju u predmemoriju. Unosi predmemorije zadržavaju stvarni uspješni model proizvođača,
uključujući rezervni model; most prijavljuje `mixed` kada su različite kadrove
proizveli različiti modeli. Pogodak u predmemoriji ponovo koristi taj identitet proizvođača
umjesto da mu dodijeli oznaku traženog plana usmjeravanja. Predmemorija rezultata
cijelog videa koristi ključ zasnovan na svakom ulazu koji mijenja izlaz — upitu, efektivnom
modelu, politici uzorkovanja, broju kadrova, režimu semantičke analize, SHA-256
otisku normaliziranog nagovještaja fokusa, prozoru fokusa, `transcript`,
`audioTranscript` i zastavici kontaktne stranice — tako da promjena bilo koje od tih
dimenzija uzrokuje promašaj predmemorije, a nikada ponovnu upotrebu zastarjelih podataka. Verzija politike
vizuelne deduplikacije, prag i ograničeni broj kandidatskih kadrova također su eksplicitno navedeni u
ključu i metapodacima predmemorije rezultata; promjena politike stoga ne može ponovo upotrijebiti zastarjeli
opis cijelog videa. Metapodaci predmemorije rezultata v4 zadržavaju režim i
otisak, ali nikada sirovi korisnički zadatak. Metapodaci zaštitnih mehanizama izvještavaju i o
traženom i o efektivnom režimu analize; traženi režim `focused` bez
upotrebljivog korisničkog teksta prijavljuje se kao efektivno `full`.

Zaštitni mehanizam izdvaja svaki podržani videodio, ali ne opisuje više od
`modalityBridgeVideoMaxVideos`. Za cilj za koji je dokazano da ima
`supportsVideo === false`, neuspješni videozapisi i videozapisi preko ograničenja postaju eksplicitne sigurne
tekstualne oznake kako nijedan sirovi videozapis ne bi ostao. Kada je mogućnost nepoznata, ti dijelovi
zadržavaju svoj videonosač; svaki rezervni transkript prati gore navedenu ograničenu tekstualnu
konverziju. Ciljevi s `supportsVideo === true` zaobilaze most.
Signal za prekid klijentskog zahtjeva prenosi se kroz preuzimanje, brokerski red,
potprocese i pozive za opisivanje; prekidi zaustavljaju obradu između videozapisa i nikada ne dopuštaju
da sirovi medij prođe u slučaju greške.

Postavke izvođenja pohranjene su u bazi podataka i validirane pomoću Zoda:

| Ključ                               | Zadana vrijednost | Raspon / ponašanje                                                                                            |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`           | Opcionalno vrijeme izvršavanja, zahtijeva izričito uključivanje                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`          | `full` zadržava generičke opise; `focused` koristi ograničeni, nepouzdani kontekst najnovijeg korisnika       |
| `modalityBridgeVideoModel`          | `""`              | Nasljeđuje model komponente Vision Bridge                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`               | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`       | `uniform`, `scene_aware` ili proporcionalni `segment_aware`; neuspjeh detektora koristi `uniform` kao rezervu |
| `modalityBridgeVideoMaxVideos`      | `1`               | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`          | 1000–120000 ms                                                                                                |

Naslijeđene trajno pohranjene vrijednosti vremenskog ograničenja za video iznad 120 sekundi ograničavaju se na
rok brokera; nova zapisivanja postavki iznad tog ograničenja se odbijaju.
`GET /api/modality-bridge/video/runtime` zahtijeva pouzdanu, označenu loopback
lokalnost prije autentifikacije ili provjere okruženja za izvršavanje, a zatim zahtijeva upravljačku
autentifikaciju. Vraća samo `available`, pročišćene verzije FFmpeg/ffprobe i fiksni
razlog kada okruženje za izvršavanje nije dostupno. Interna krajnja tačka za izdvajanje nije
javni API za prijenos: zasićenje reda vraća `503` uz `Retry-After`, prekid veze
pozivaoca vraća `499`, a fiksni rok brokera vraća `504`. Konvertovani odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u centralno
`x-omniroute-modality-bridge` zaglavlje bez uklanjanja Vision ili Audio segmenata.

### Maskiranje PII-ja (`piiMasker.ts`)

Izvršava se u **obje** faze.

- **`preCall`** klonira korisni sadržaj, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući stavke koje su obični stringovi) te primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na string polja `content`/`text`. Kada je
  `PII_REDACTION_ENABLED=true`, otkriveni PII se rediguje u odlaznom
  korisnom sadržaju. Ovo je nezavisno od `INPUT_SANITIZER_MODE` (koji upravlja samo
  pravilima ubacivanja u prompt). Kada je redigovanje isključeno, poziv bilježi broj
  detekcija bez izmjene sadržaja.
- **`postCall`** dubinski klonira odgovor, pokreće `sanitizePIIResponse()` zajedno s
  maskiranjem oblika Responses API-ja (`maskResponsesOutput` — obuhvata
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog redigovanja,
  izmijenjeni odgovor zamjenjuje originalni.

Zaštitni mehanizam nikada ne blokira; samo dodaje bilješke (`meta.detections`,
`meta.redacted`) ili prepisuje sadržaj.

### Ubacivanje u prompt (`promptInjection.ts`)

Otkriva napadačke strukture u sadržaju koji je dostavio korisnik i primjenjuje
konfigurirana pravila. Ponašanjem upravljaju varijable okruženja i opcije
konstruktora:

| Postavka        | Varijabla okruženja                                                                                   | Zadano | Efekat                                                                                                                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Kada je `false`, zaštitni mehanizam odmah prekida obradu.                                                                                                                                                     |
| Način rada      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Pravilo za ubacivanje: `block`, `warn` ili `log`. (`redact` je prihvaćen radi kompatibilnosti unazad, ali **ne** uklanja tekst ubacivanja; prepisivanjem PII-ja u zahtjevu upravlja `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Minimalna ozbiljnost potrebna za blokiranje. Srednja ozbiljnost se uz zadane postavke samo posmatra.                                                                                                          |

**Prioritet načina rada** (`getMode`): `options.mode` pozivaoca →
`INJECTION_GUARD_MODE` **zamjena zastavice funkcionalnosti iz baze podataka** (Kontrolna tabla → Postavke →
Zastavice funkcionalnosti) → varijabla okruženja `INJECTION_GUARD_MODE` → varijabla okruženja `INPUT_SANITIZER_MODE` →
`warn`. Zamjena putem kontrolne table stoga ima prednost nad varijablama okruženja, pa korisnički interfejs za zastavice
funkcionalnosti upravlja aktivnom zaštitom u stvarnom vremenu (bez ponovnog pokretanja). Čitanje baze podataka je sigurno u slučaju greške:
ako dođe do greške, zaštitni mehanizam se vraća na ponašanje zasnovano na varijablama okruženja, a kada
zamjena nije postavljena, ponašanje je identično određivanju samo putem varijabli okruženja.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (dijeljeni skup detektora
   koji se koristi na drugim mjestima u cjevovodu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba ozbiljnosti `high`).
3. Opcionalni `customPatterns` proslijeđeni putem opcija konstruktora (stringovi, regularni izrazi
   ili zapisi `{ name, pattern, severity }`).

Kada je `mode === "block"` **i** najmanje jedna detekcija zadovoljava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Request rejected:
suspicious content detected" }`. U režimima `warn`/`log` zaštitna ograda bilježi događaj, ali
dozvoljava poziv. Dijeljeni pomoćni element `evaluatePromptInjection()` također se izvozi
za pozivaoce koji trebaju procijeniti upite bez prolaska kroz registar.

**Ograničenje skeniranja (v3.8.20):** detektor provjerava samo **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` koriste `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje obrazaca. Direktive za ubrizgavanje nalaze se blizu početka unosa, pa se time
ograničava potrošnja CPU-a/GC-a za regularne izraze na sadržajima od više stotina KB bez slabljenja detekcije (usp.
#3932, #4041).

### Maskiranje vjerodajnica (`credentialMasker.ts`)

Izvršava se u **obje** faze, posljednje u zadanom lancu (prioritet `95`). Rediguje
poznate obrasce API ključeva / tajnih tokena iz odlaznog sadržaja (sadržaj
poruke, argumenti poziva alata, rezultati alata) **i** odgovora pružaoca, tako da
vjerodajnica zalijepljena u upit (ili vraćena u rezultatu alata) ne procuri
uzvodnom pružaocu ili nazad klijentu.

- **Samo uz izričito uključivanje**, prema istoj konvenciji kao redigovanje PII podataka (u vezi sa Strogim pravilom #20):
  onemogućeno je osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključena, zaštitna ograda ne radi ništa —
  nikada ne blokira niti prepisuje.
- `redactCredentials()` prolazi kroz cijelo stablo sadržaja/odgovora (`walkValue()`,
  sigurno od zagađenja prototipa, sigurno od ciklusa putem `WeakSet`) i zamjenjuje podudaranja
  oznakom mjesta `[REDACTED:<type>]`, klonirajući samo grane koje su se zaista
  promijenile.
- `CREDENTIAL_PATTERNS` obuhvata ključeve LLM pružalaca (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve
  za oblak (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  stringove veze koji sadrže vjerodajnice (`mongodb://user:pass@...`, itd.) i
  generički obrazac vrijednosti zaglavlja `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključevi u obliku zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) rediguju se strukturno (samo vrijednost, dok se prefiks sheme poput
  `Bearer `/`Basic ` zadržava), umjesto putem generičkog tekstualnog regularnog izraza.
- Zaštitna ograda nikada ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) i dodaje napomene (`meta.credentialsRedacted`, `meta.count`).

Zaštita od regresije: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovni ugovor (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(payload: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;

  async postCall(response: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // true prekida lanac
  message?: string; // prikazuje se prilikom blokiranja
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vraća ga preCall radi izmjene zahtjeva
  modifiedResponse?: TValue; // vraća ga postCall radi izmjene odgovora
}

interface GuardrailContext {
  apiKeyInfo?: Record<string, unknown> | null;
  disabledGuardrails?: string[] | null;
  endpoint?: string | null;
  headers?: Headers | Record<string, unknown> | null;
  log?: GuardrailLog | Console | null;
  method?: string | null;
  model?: string | null;
  provider?: string | null;
  signal?: AbortSignal;
  sourceFormat?: string | null;
  stream?: boolean;
  targetFormat?: string | null;
}
```

Zaštitna ograda signalizira „bez promjene“ vraćanjem vrijednosti `void`, `{}` ili
`{ block: false }`. Vraćanje vrijednosti `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za naredne zaštitne ograde.
`signal?: AbortSignal` prenosi životni ciklus pozivaoca u zaštitne ograde. Prekid zahtjeva predstavlja namjerni izuzetak otvorenog propuštanja: medijski mostovi zaustavljaju obradu i obavljaju čišćenje bez vraćanja neobrađenog medijskog sadržaja cilju za koji je poznato da ga ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje (ili zamjenjuje normaliziranim imenom) zaštitnu ogradu i
  ponovno sortira po rastućem `priority`.
- `clear()` / `list()` — administrativni pomoćnici.
- `runPreCallHooks(payload, context)` — iterira kroz aktivne zaštitne ograde, provlači
  `payload` kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
- `runPostCallHooks(response, context)` — isti tok na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — briše stanje i opcionalno
  ponovno registrira zadane vrijednosti za čistu izolaciju testova.

Oba pokretača vraćaju `{ blocked, payload|response, results, guardrail?, message? }`
gdje je `results` niz zapisa `GuardrailExecutionResult` koji uključuju
polja `blocked`, `skipped`, `modified`, `error` i `meta` po zaštitnoj ogradi,
korisna za praćenje.

### Onemogućavanje zaštitnih ograda po zahtjevu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agregira
dedupliciranu listu imena zaštitnih ograda koje treba preskočiti za trenutni
zahtjev. Izvori (svi opcionalni, svi spojeni):

- `apiKeyInfo.disabledGuardrails`
- Tijelo zahtjeva `disabledGuardrails` (na najvišem nivou)
- Tijelo zahtjeva `metadata.disabledGuardrails`
- Zaglavlje `x-omniroute-disabled-guardrails` (ili zastarjelo
  `x-disabled-guardrails`)

Vrijednosti mogu biti nizovi stringova ili string odvojen zarezima; imena su
normalizirana u mala slova kebab-case (`pii_masker` → `pii-masker`). Rezultat
se prosljeđuje kroz `context.disabledGuardrails` registru, koji preskače
odgovarajuće zaštitne ograde (`skipped: true` u `results`).

## Redoslijed izvršavanja

Za svaki zahtjev koji prolazi kroz `src/sse/handlers/chat.ts` i
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` gradi listu za preskakanje iz API ključa, tijela i zaglavlja.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne ograde (guardrails) u rastućem redoslijedu prioriteta:
    - Onemogućene zaštitne ograde se bilježe kao `skipped`.
    - `preCall` svake zaštitne ograde može prepisati payload putem `modifiedPayload`.
    - Prvi `block: true` prekida lanac i rukovatelj vraća odgovor o odbijanju zaštitne ograde.
3.  (Potencijalno prepisan) payload ulazi u kombinovano rutiranje i uzvodno slanje.
4.  Nakon što je odgovor sastavljen, `guardrailRegistry.runPostCallHooks(...)` pokreće isti lanac na odgovoru. `block: true` ovdje odbacuje uzvodni odgovor.

Zaštitne ograde koje izbace grešku bilježe se sa `error: <message>` i loguju putem
`logger.warn`, ali lanac se nastavlja — dizajnirano da bude "fail-open".

## Konfiguracija

Varijable okruženja koje čitaju ugrađene zaštitne ograde:

| Varijabla                             | Koristi                 | Efekat                                                                                                                          |
| :------------------------------------ | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Postavite `false` da potpuno onemogućite detekciju.                                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Politika injekcije: `warn`, `block`, ili `log`. Stara vrijednost `redact` ne prepisuje tekst injekcije.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način rada za zaštitu od injekcije; također zastavica funkcije baze podataka koja **nadjačava** varijable okruženja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Minimalna ozbiljnost koju `MODE=block` odbija: `high` (podrazumijevano), `medium`, ili `low`.                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Stari alias za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kada je `true`, PII zahtjeva se rediguje (nezavisno od načina injekcije).                                                       |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nizvodno) | Kontroliše ponašanje maskera na strani odgovora.                                                                                |

Zaštitne ograde Modality Bridge čitaju konfiguraciju vremena izvođenja iz skladišta postavki podržanog bazom podataka (`getSettings()`), a ne iz varijabli okruženja. Primarni ključevi za Vision su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, i
`modalityBridgeCacheMaxEntries`. Stari
`visionBridge*` ključevi su prihvaćeni samo kao dokumentovani jednociklični rezervni mehanizam za čitanje; upisi na kontrolnoj tabli koriste primarne ključeve. Podrazumijevane vrijednosti i rezervni rješavač nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, sa starim konstantama zadržanim u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, i `modalityBridgeAudioMaxClips`, plus zajedničke
`modalityBridgeCache*` postavke. Audio nema rezervni mehanizam za stare ključeve jer su ovi ključevi uvedeni sa Modality Bridge shemom.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, i
`modalityBridgeVideoTimeout`, plus zajedničke `modalityBridgeCache*` postavke.
Podrazumijevano je onemogućeno jer su FFmpeg/ffprobe opcionalne operativne zavisnosti, a titlovanje okvira dodaje kašnjenje i troškove modela.

## Prilagođeni Guardrails

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Daily budget exceeded" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Koraci:

1.  Kreirajte `src/lib/guardrails/myGuardrail.ts` koji proširuje `BaseGuardrail`.
2.  Implementirajte `preCall` i/ili `postCall`.
3.  Registrujte prilikom uvoza (push iz `registerDefaultGuardrails`) ili
    pozovite `guardrailRegistry.register(...)` tokom izvršavanja — registar zamjenjuje
    bilo koji prethodni guardrail sa istim normalizovanim imenom.
4.  Dodajte testove pod `tests/unit/` (postojeći primjeri:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Koristite `resetGuardrailsForTests()` između testova da biste počeli iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` da biste počeli sa praznim registrom i
registrovali samo guardraile koji se testiraju. Vision Bridge prihvata ubrizgavanje zavisnosti
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže ekvivalentne šavove za postavke,
mogućnosti, odabir STT modela, provjere akreditiva i transkripciju. Testovi stoga mogu
izvršavati oba toka bez pristupa bazi podataka ili mreži.

## Pogledajte takođe

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — dijeljeni detektor koji pokreće
  prompt-injection i PII maskiranje
- `src/shared/constants/visionBridgeDefaults.ts` — podrazumijevane postavke Vision Bridge-a i
  lista modela sa prisilnim premošćavanjem
- `src/shared/constants/modalityBridgeDefaults.ts` — dijeljene podrazumijevane postavke Vision/Audio runtime-a
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalni sloj (prekidač strujnog kruga, hlađenja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okruženja

## Pokrivenost rute za zaštitu od ubrizgavanja i crveni tim (Faza 8 · Blok D)

Zaštita od ubrizgavanja (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvataju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (podrazumijevano `warn` = samo bilježenje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Tip               | Rute                                                                                                                                                 | Podrazumijevani način rada |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| Tekst (postojeći) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                       |
| Generativni       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                       |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                       |

Ekstrakcija teksta (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Crveni tim (noćno, `nightly-llm-security.yml`):** promptfoo provjerava da svaka ruta blokira
OWASP-LLM korpus u `INJECTION_GUARD_MODE=block`; garak pokreće sonde (preskače bez tajne).
`moderations` je uključen radi dosljednosti — operatori u blok-modu ga mogu izuzeti putem
`resolveDisabledGuardrails`.

Noćni radni tok (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva posla:

- **`promptfoo-guard` (blokiranje)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  sa `INJECTION_GUARD_MODE=block`. Svaki adversarijalni slučaj (npr. "zanemari sve
  prethodne instrukcije...", DAN-stil jailbreakovi) potvrđuje da odgovor nosi
  `error.code === "SECURITY_001"`, tj. da je zaštita zaista odbila zahtjev.
- **`garak` (savjetodavno)** — pokreće garak `--probes promptinject,dan,leakreplay`
  protiv lokalne OmniRoute instance (`http://localhost:20128/v1`). Ograničeno tajnom
  dobavljača (`PROMPTFOO_PROVIDER_KEY`); graciozno preskače i ima sufiks
  `|| true`, tako da izvještava bez pada CI-ja.

Pokrivenost pomoćnika za zaštitu (`createInjectionGuard` / `withInjectionGuard`)
obuhvata svaku `/v1` rutu koja nosi upit; tekst upita se izvlači iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.
