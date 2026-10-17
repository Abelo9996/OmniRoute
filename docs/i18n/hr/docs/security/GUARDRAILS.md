# Guardrails (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Izvor istine:** `src/lib/guardrails/`
> **Zadnje ažurirano:** 2026-08-29 — v3.8.51 (Podrijetlo transkripta Video Bridgea deklarira pozivatelj,
> još nije potvrđeno od strane poslužitelja — pojašnjeno prema #11661)

Guardrails (zaštitne ograde) provode sigurnost, pravila i transformacije sadržaja na granici
između OmniRoute-a i uzvodnih (upstream) pružatelja usluga. Svaki guardrail može pregledati (i
opcionalno odbiti, transformirati ili anotirati) terete zahtjeva (`preCall`) i
uzvodne odgovore (`postCall`).

Sustav je **fail-open**: ako guardrail izbaci pogrešku tijekom izvršavanja, registar
bilježi pogrešku i nastavlja sa sljedećim guardrailom umjesto prekidanja
zahtjeva. Blokiranje je eksplicitna odluka (`block: true`), nikada slučajnost.

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

### Most za vizualni sadržaj (`visionBridge.ts`) — Most modaliteta PR-1

Presreće zahtjeve koji sadrže slike i usmjereni su na **modele bez podrške za vizualni sadržaj** te preusmjerava cijeli zahtjev na model s podrškom za vizualni sadržaj ili, prije poziva nadređene usluge, zamjenjuje slikovne dijelove tekstnim opisima koje generira podesivi model za vizualni sadržaj. Time se pružateljima koji podržavaju samo tekst omogućuje transparentna obrada multimodalnih korisnih sadržaja.

Tijek:

1. Preskočite ako ciljni model već podržava vizualni sadržaj (osim ako se nalazi na popisu modela za koje je most obvezan `isVisionBridgeForcedModel`).
2. Izdvojite slikovne dijelove putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji obradu delegira **objedinjenom detektoru
   medija** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedinstvenom
   izvoru istine koji se dijeli s filtrom kompatibilnosti kombinacija.
   Izdvajanje je ograničeno popisom dopuštenih oblika dijelova najviše razine
   koje `replaceImageParts` može umetnuti natrag (ugovor izdvajanje↔zamjena): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` i Responses API `input_image`. Ugniježđena podudaranja i
   oblici koji služe samo kao indikatori pripadaju filtru kombinacija i nikada se
   ne izdvajaju. Preskočite ako ništa nije pronađeno.
3. Razriješite konfiguraciju tijekom izvođenja putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključevi postavki
   `modalityBridge*` imaju prednost; naslijeđeni ključevi `visionBridge*` ostaju
   **rezervna opcija tijekom jednog ciklusa** (razdoblje za vraćanje). Preskočite
   prije bilo kakvog prolaska kroz medije kada je most onemogućen.
4. Odabir načina rada (`modalityBridgeVisionMode`, pogledajte tablicu u nastavku)
   određuje hoće li se zahtjev preusmjeriti ili opisati. Preusmjeravanje vraća
   `modifiedPayload` u kojem je zamijenjen samo `model`, uz metapodatke
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Putanja opisivanja: ograničava broj slika na `maxImages`, sastavlja upit
   prilagođen zadatku, provjerava predmemoriju opisa, poziva model za vizualni
   sadržaj **paralelno** (`Promise.allSettled`) i na njihovo mjesto umeće tekstne
   dijelove `[Image N]: <description>`. Neuspješan opis rezultira vrijednošću
   `null`, a izvorni slikovni dio ostaje **sačuvan** (#4012) — osim na kombiniranoj
   putanji opisivanja kada svi opisi ne uspiju, pri čemu potvrđena nadređena
   usluga bez podrške za vizualni sadržaj umjesto toga dobiva zamjenski tekst
   `(unavailable — no vision-capable provider connected)` (#8430).
6. Vratite `modifiedPayload` + metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Odabir načina rada (`modalityBridgeVisionMode`)

| Način rada | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Naslijeđena heuristika, neizmijenjena (#6640/#7204): nekombinirani/`auto/` modeli preusmjeravaju se na najbolji model za vizualni sadržaj, osim ako izvorni model već ima upotrebljive vjerodajnice (tada se opisuje); kombinirani ciljevi uvijek se opisuju.                                                                                |
| `describe` |        | Uvijek opisuje — blok za preusmjeravanje u potpunosti se preskače; uvijek odgovara model koji je korisnik odabrao.                                                                                                                                                                                                                           |
| `reroute`  |        | Prisilno preusmjeravanje: zaobilazi se zaštita koja zadržava model s vjerodajnicama. Zaštita vjerodajnica **cilja** preusmjeravanja i dalje se primjenjuje — kada nema upotrebljivog cilja za vizualni sadržaj, zahtjev prelazi na opisivanje kako sirove slike nikada ne bi dospjele do pozadinske usluge koja podržava samo tekst (#8430). |

Prisilni načini rada prekidaju obradu **prije** pokretanja automatske heuristike;
ponašanje načina `auto` bajt-po-bajt je identično zaštitnoj mjeri prije PR-1.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivatelja ograničava `allowedConnections`, skupove kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most za
preusmjeravanje i opisivanje odabire samo modele koje taj ključ smije
upotrebljavati, na vezama koje taj ključ smije upotrebljavati. Poziv za
opisivanje zatim uvijek prolazi kroz OmniRoute samopetlju sa zaglavljem
`x-omniroute-self-loop-key-id`, tako da primljeni zahtjev za razgovor ponovno
provodi pravila tog ključa za veze i modele. `enforceApiKeyPolicy()` uzima to
zaglavlje u obzir samo zajedno s nositeljem samopetlje, tako da ono može samo
sužavati pristup, a ID koji nije moguće razriješiti odbija se.

Ako ključu nije dopušten nijedan model za vizualni sadržaj, putanja opisivanja
povlači se i zahtjev prolazi neizmijenjen, što je jednako ponašanju otvorenog
propuštanja kao kod onemogućene zaštitne mjere (metapodaci
`{ skipped: true, reason: "no_permitted_vision_model" }`). Zahtjevi bez ključa
i ključevi bez tih ograničenja ponašaju se potpuno jednako kao prije.

#### Upit za opisivanje prilagođen zadatku (`modalityBridgeVisionTaskAware`)

Zadano je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) osnovnom upitu za opis dodaje tekst **posljednje korisničke poruke** (skraćen na 500 znakova), usmjeravajući opis prema onome što je korisnik doista zatražio (obrazac codex-vision-proxy) i tražeći od modela za vid da transkribira vidljivi tekst. Kada je zastavica isključena — ili nema korisničkog teksta — osnovni upit ostaje nepromijenjen.

Vlastiti OpenAI-kompatibilni zahtjev samopetlje za opisivanje (`callVisionModelSingle()` u `visionBridgeHelpers.ts`) uvijek zahtijeva `image_url.detail: "high"` — bezuvjetno, za svakog pozivatelja/pružatelja usluge, neovisno o bilo kakvom signalu klijenta. Uzorkovanje s niskom razinom detalja smanjuje točnost OCR-a upravo za zadatak transkripcije teksta koji ovaj upit zahtijeva, stoga sam poziv za opisivanje uvijek traži visoku razinu detalja bez obzira na razinu detalja korištenu u izvornom dolaznom zahtjevu. To utječe samo na tijelo internog zahtjeva za opisivanje; ne mijenja način na koji OmniRoute prosljeđuje pozivateljev vlastiti `image_url.detail` u primarnom zahtjevu — ta se zadana vrijednost primjenjuje zasebno i samo za prepoznate OpenCode klijente, u `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grana samopetlje za opisivanje koja koristi Anthropicov format prijenosa nema polje `detail` i na nju ne utječe nijedna zadana vrijednost.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji vraća `callVisionModel()` prosljeđuje se neizmijenjen, čime se zadržava postojeće ponašanje. Svaka vrijednost u rasponu 100–50000 skraćuje opis uz sufiks `…` prije nego što se umetne natrag kao `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`). Povećajte ovu vrijednost za OCR zadatke s mnogo detalja kod kojih je modelu u nastavku potrebna cjelovita transkripcija; smanjite je kako biste ograničili potrošnju tokena kod opširnih modela za vid. Polje na nadzornoj ploči nalazi se na ploči Napredno kartice Vision (`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i svaku vrijednost između 1 i 99 podiže na donju granicu od 100, dok izričitu vrijednost `0` ostavlja netaknutom — `0` je samostalno valjana Zod vrijednost (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo zadana vrijednost za „nije postavljeno”.

#### Predmemorija opisa (`modalityBridge/bridgeCache.ts`)

Procesno dijeljena memorijska LRU + TTL predmemorija za izlaze opisa. Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s uokvirivanjem prefiksom duljine (bez kolizija na granicama polja). Komponenta modela jest **konfigurirani** model mosta, a ne model koji je stvarno odgovorio — `callVisionModel` može interno prijeći na pričuvni model, a stvaranje ključa za svaki pokušaj fragmentiralo bi predmemoriju. Neuspjeli opisi nikada se ne predmemoriraju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljenih slika (samopetlja za opisivanje/dohvaćanje base64 podataka)

Kada most sam dohvaća **udaljenu** sliku — za Anthropicov samopoziv za opisivanje i pretvorbu u base64 za claude format prijenosa (`ensureBase64ImagesForClaudeWire`), oboje putem `fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — dobiveni podatkovni URI prije ugrađivanja u zahtjev modelu za vid prolazi kroz `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`). Prevelike slike smanjuju se tako da im **duži rub iznosi 2048px** (u skladu s ograničenjem promjene veličine koje OpenAI/Anthropic već primjenjuju na strani poslužitelja), čime se smanjuju količina podataka za prijenos i latencija bez promjene onoga što model za vid vidi. Promjena veličine koristi `sharp`, učitan dinamičkim uvozom: na platformi na kojoj se njegova izvorna binarna datoteka ne uspije učitati, `normalizeDataUri()` **nikada ne izbacuje iznimku** — vraća se na prosljeđivanje izvornih bajtova bez izmjena, pa putanja opisivanja/pretvorbe u base64 uvijek nastavlja raditi. Bajtovi koji nisu slika (dohvaćanje koje nije vratilo sliku koju je moguće dekodirati) također se prosljeđuju bez izmjena. Ova je normalizacija ograničena na slike koje most dohvaća za vlastiti samopoziv — nikada se ne primjenjuje na pozivateljevo neobrađeno korisno opterećenje koje se izravno prosljeđuje, u skladu s načelom izmjena isključivo uz izričito uključivanje (Strogo pravilo #20).

#### Shema postavki + migracija

Novi ključevi `modalityBridge*` provjeravaju se Zodom u `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trojka `modalityBridgeCache*` i grupa `modalityBridgeAudio*` koju koristi Audio Bridge. Migracija `141_modality_bridge_settings.sql` kopira postojeće naslijeđene vrijednosti `visionBridge*` u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje vrijednost `modalityBridge*` koju je postavio operater); naslijeđeni ključevi ostaju prihvaćeni kao pričuvni izvor za čitanje tijekom jednog ciklusa izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori preobraženi opisivanjem sadrže
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izrađuje ga `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`, a postavlja `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`). Preusmjereni zahtjevi **nemaju** zaglavlje — korisno opterećenje nije izmijenjeno, a zamjena modela već je vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (autentifikacija za upravljanje, ista razina kao
`GET /api/settings`) vraća brojače po modalitetu pohranjene u memoriji
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` kao nazivnik koristi `latencySamples`, a ne sve
pokušaje; operacija bez mjerenja vremena ne stvara izmišljeni uzorak od nula
milisekundi. `bridged` ostaje unatrag kompatibilan pseudonim za uspješne
konverzije; neuspjeli pokušaji ne povećavaju njegovu vrijednost.
Brojači se namjerno poništavaju pri ponovnom pokretanju procesa
(telemetrija, a ne računovodstvo).

#### Konfiguracija nadzorne ploče

Namjenska stranica nadzorne ploče nalazi se na
`/dashboard/settings/modality-bridge`. Njezine kartice `Vision`, `Audio` i
`Video`, kojima se može pristupiti putem URL-a, pri prebacivanju čuvaju parametre
upita i mijenjaju vrijednost parametra `tab`.
Kartica Vision omogućuje uključivanje, odabir načina rada, odabir modela
(uključujući automatsku zadanu vrijednost), upite prilagođene zadatku, napredna
ograničenja isteka vremena/slike/duljine opisa/predmemorije, brojače tijekom
izvođenja i zaštićeni ogledni zahtjev. Kartica Audio također je aktivna:
omogućuje uključivanje, odabir isključivo STT modela s opcijom Auto, ograničenja
isteka vremena/maksimalnog trajanja isječka, brojače zvuka i ogledni test
`input_audio`. Kartica Video funkcionalna je: prikazuje stanje okruženja za
izvođenje FFmpeg/ffprobe — jedno od četiriju izričitih stanja korisničkog sučelja
(`unknown` dok je provjera u tijeku ili se nije mogla dovršiti, `restricted` na
hostu nadzorne ploče koji nije povratna petlja i na kojem se provjera preskače na
klijentskoj strani, `unavailable` nakon provedene provjere kojom je potvrđeno da
nedostaje ili `available` s verzijama FFmpeg/ffprobe) — trajno pohranjuje
postavke uključivanja/modela/kadrova/videozapisa/isteka vremena, filtrira odabir
modela tako da prikazuje modele koji podržavaju vid te prikazuje brojače
videozapisa.

Prijašnja kartica Vision Bridge u postavkama umjetne inteligencije sada je
poveznica radi kompatibilnosti na novu stranicu; više ne sadrži drugu kopiju
obrasca. Media Providers također povezuje tijekove rada Image-to-Text i
Speech-to-Text s odgovarajućim karticama Modality Bridgea bez uklanjanja
postojećeg okruženja za isprobavanje Speech-to-Texta.

**Zaobilaženje kontrole prihvata za vlastitu petlju:** kada se poziv za opis
usmjerava kroz vlastitu `/v1` petlju OmniRoutea (model nestandardnog pružatelja),
podzahtjev šalje `x-omniroute-admission-bypass: internal` i autentificira se
razriješenom vjerodajnicom vlastite petlje — lokalnim sentinelom `sk_omniroute`
u lokalnom načinu rada ili ključem okruženja `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` koji je konfigurirao operator (#1350), kako bi implementacije s
`REQUIRE_API_KEY=true` i dalje mogle izvršavati poziv za opis. Zaobilaženje se
prihvaća samo za te točne vjerodajnice, pa vanjski klijenti ne mogu upotrijebiti
zaglavlje za preskakanje kontrole prihvata.

Naslijeđene zadane vrijednosti nalaze se u
`src/shared/constants/visionBridgeDefaults.ts`; nove zadane vrijednosti za
način rada/zadatke/predmemoriju i razrješivač postavki nalaze se u
`src/shared/constants/modalityBridgeDefaults.ts`. Zaštitni mehanizam izlaže
konstruktorsku opciju `deps` kako bi testovi mogli umetnuti lažne implementacije
`getSettings` i `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahtjeve za razgovor koji sadrže zvuk prije nego što stignu do cilja
za koji nije poznato da prihvaća zvučni ulaz. Nikada ne preusmjerava zahtjev za
razgovor: zvučni dijelovi transkribiraju se putem postojećeg višedijelnog krajnjeg
čvora kompatibilnog s OpenAI-jem, a odabrani model za razgovor nastavlja rad s
tekstnim transkriptima.

Tijek:

1. Razriješite `supportsAudio` putem `getResolvedModelCapabilities()`. Prednost
   imaju eksplicitni metapodaci registra pružatelja, zatim statički metapodaci
   modela, a potom sinkronizirani `modalities_input`. Deklarirani popis ulaza
   bez `audio` ima vrijednost `false`; ako nema dokaza o sposobnosti, vrijednost
   ostaje `null`. I `false` i `null` aktiviraju konzervativni most, dok ga
   `true` zaobilazi.
2. Razriješite postavke `modalityBridgeAudio*` i izdvojite spojive zvučne
   dijelove najviše razine iz svake poruke putem zajedničkog detektora
   `detectMediaParts()`. Podržani formati prijenosa jesu OpenAI-jevi
   `input_audio`, `audio_url` i `source.media_type: "audio/*"`. Ugniježđeni se
   zvuk otkriva radi usmjeravanja, ali ga putanja spajanja ne uklanja. Količina
   obrade ograničena je postavkom `modalityBridgeAudioMaxClips`; kasniji dijelovi
   ostaju nepromijenjeni.
3. Poštujte konfigurirani `provider/model` ili dopustite funkciji
   `selectAudioBridgeModel()` da prođe kroz `AUDIO_TRANSCRIPTION_PROVIDERS`
   stabilnim redoslijedom kataloga i odabere prvi model s upotrebljivom aktivnom
   vjerodajnicom pružatelja.
4. `callAudioTranscription()` pretvara zvuk base64/data-URI formata u
   višedijelni `file` ili preuzima udaljeni `audio_url` putem zaštite izlaznog
   prometa koja dopušta samo javna odredišta, uz DNS vezivanje i ograničenje od
   25 MB. Zatim POST-om šalje datoteku i odabrani model lokalnoj vlastitoj petlji
   `/v1/audio/transcriptions`, autentificiranoj pomoću
   `resolveSelfLoopBearer()`. Postojeća ruta za transkripciju obavlja uobičajeno
   pronalaženje vjerodajnica, rukovanje razdobljem čekanja/ograničavanjem brzine
   i prosljeđivanje pružatelju.
5. Uspješni pozivi zamjenjuju svoje dijelove tekstom
   `[Audio N]: <transcript>`. Pozivi se izvršavaju pomoću
   `Promise.allSettled`: pojedinačni neuspjeh zadržava izvorni zvučni dio
   (ugovor #4012). Ako svi pozivi ne uspiju, a dokazano je da cilj ima
   `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (unavailable — no STT provider connected)` (ugovor #8430). Za
   nepoznati cilj (`null`) rezultat u kojem svi pozivi ne uspiju ostaje
   nepromijenjen. Dokazano tekstni cilj bez upotrebljive STT vjerodajnice prima
   isti eksplicitni zamjenski tekst bez slanja mrežnog poziva.

Uspješni transkripti koriste LRU/TTL predmemoriju Modality Bridgea na razini
cijelog procesa. Ključ objedinjuje referencu zvuka, stabilnu oznaku operacije
`audio-transcription` i odabrani STT model; neuspjesi se nikada ne spremaju u
predmemoriju. Pokušaji obrade zvuka ažuriraju zajedničke brojače `bridged`,
`cacheHits`, `failures` i `lastUsedAt`. Preobraženi odgovori sadrže
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nepromijenjeni zahtjevi ne dobivaju segment Audio Bridgea.

Postavke tijekom izvođenja pohranjene su u bazi podataka i validirane pomoću
Zoda:

| Ključ                         | Zadano  | Raspon                |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatski ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Zajedničkom predmemorijom i dalje upravljaju `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Most za videozapise (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće dijelove videozapisa najviše razine u `messages` sučelja Chat Completions i
`input` sučelja Responses API prije pozivanja cilja bez poznate izvorne podrške
za videozapise. Podržani oblici su `input_video`, `video_url`, `video_source`, HTTPS URL-ovi
i podatkovni URI-jevi `data:video/*;base64,...`. Obični nazivi datoteka u tekstu ne tretiraju se
kao videozapisi.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prolaskom kroz zahtjev,
provjerom mogućnosti/pravilnika, agregacijom po zahtjevu i korisnim sadržajem odgovora.
Rad na pojedinačnom videozapisu — dohvaćanje, predmemorija cjelovitog rezultata, opisivanje slijeda
kadrova (koje objedinjuje svaki audioprijepis koji je deklarirao pozivatelj) te metrike po pokušaju,
prekid i čišćenje — skriven je iza `processVideoPart` u
`videoBridgePipeline.ts`, koji se poziva jednom za svaki dio videozapisa unutar petlje `preCall`.
Taj modul također definira izričite granice priključaka `VideoMediaBrokerPort`
(dohvaćanje bajtova i izdvajanje uzorkovanih kadrova), `VideoAudioTranscriptionPort`
(objedinjavanje audioprijepisa koji je deklarirao pozivatelj s opisima uzorkovanih kadrova) i
`VideoDrilldownPort` (granica za pohranu detaljne analize kadrova; još nije povezana
s `processVideoPart` — danas samo zasebna ruta `/api/modality-bridge/video/drilldown`
zapisuje unose detaljne analize).

Javna putanja zahtjeva `/v1` nikada ne uvozi niti poziva podproces. Udaljeni
videozapisi preuzimaju se uz ograničenje od 50 MiB; umetnuti videozapisi u formatu base64 imaju
konzervativno ograničenje dekodirane veličine od 36 MiB po videozapisu kako bi omotnica
modela/poruka/uokvirivanja ostala unutar javnog ograničenja prihvata JSON zahtjeva od 50 MiB.
Procjene umetnute duljine i dekodirane veličine provjeravaju se prije dodjele memorije. HTTPS je
obavezan za početni udaljeni URL i svako preusmjeravanje, uz postojeći
zaštitni mehanizam za javni izlazni promet s DNS prikvačivanjem. Bajtovi zatim prelaze točno definiranu internu
granicu posrednika `POST /api/modality-bridge/video/extract`. Ta je ruta istodobno
`LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvaća samo autentificirani zahtjev unutar procesa
iz pouzdane povratne petlje i nikada ne prihvaća URL, putanju datotečnog sustava, izvršnu datoteku
ni popis argumenata. Cjevovod ograničenja veličine tijela API-ja i inkrementalni čitač tijela
rukovatelja neovisno primjenjuju ograničenje ulaza posrednika od 50 MiB. Njegov ograničeni red
izvodi jedno izdvajanje odjednom, dopušta četiri posla na čekanju i ograničava ulazne podatke
na čekanju na 100 MiB.

Unutar posrednika `ffprobe` čita privatnu lokalnu datoteku; fiksni popis
dopuštenih formata isključuje formate popisa za reprodukciju i manifesta. Za dopuštene spremnike
iz obitelji MOV vanjske reference na MOV podatke ostaju prema zadanim postavkama onemogućene,
a fiksna naredba ne omogućuje ih. I `ffprobe` i `ffmpeg` upotrebljavaju
popis dopuštenih protokola koji sadrži samo `file`, jednu dretvu, fiksne nizove argumenata, bez ljuske,
a izvršne se datoteke razrješavaju iz `PATH`. Tokovi naslovnih slika tipa attached-picture nisu
kandidati za reprodukciju. Svi tokovi koji se mogu reproducirati moraju zadovoljavati ograničenja,
a izričiti zadani tok ima prednost pred determinističkim zamjenskim odabirom s najnižim indeksom.
Videozapisi su ograničeni na 600 sekundi, 8.192 piksela po dimenziji i
33.554.432 izvorna piksela. FFmpeg uzorkuje 1–16 JPEG kadrova u srednjim točkama, smanjuje
dulji rub na najviše 1.024 piksela bez povećavanja manjih ulaznih sadržaja i
nikada ne prima URL. Uzorkovanje je prema zadanim postavkama `uniform`. Neobavezna
pravila `scene_aware` i eksperimentalna `segment_aware` izvode jedan dodatni
fiksni prolaz FFmpeg-a nad već potvrđenim lokalnim tokom, odabiru ograničene
vremenske oznake scena `showinfo` i deterministički se vraćaju na iste
ujednačene srednje točke u slučaju neuspjeha detektora, isteka vremena, neispravnog izlaza ili praznog
skupa kandidata. Način rada svjestan segmenata raspoređuje uzorke srednjih točaka razmjerno
potvrđenim intervalima scena; dokazi svjesni segmenata i ponašanje zamjenskog odabira
detaljno su opisani u nastavku. Čvrsto ograničenje od 16 kadrova
primjenjuje se nakon odabira u svakom pravilu. Kada zahtjev svjestan scena ima samo
budžet od jednog kadra, upotrebljava ujednačenu srednju točku aktivnog prozora cijelog videozapisa ili
fokusnog prozora te navodi `policyEffective: uniform`: jedan odabrani kadar scene
ne može sačuvati oba vremenska kraja. Pozivatelj po želji može navesti
konačan fokusni prozor (`start`/`end` u sekundama); granice se ograničavaju na trajanje medija,
obrnuti ili nekonačni prozori odbacuju se, a sva se pravila uzorkovanja
primjenjuju samo unutar normaliziranog intervala. Dobiveni
prozor uključuje se u metapodatke uzorkovanja i u nepouzdani prefiks opisa
kako bi modeli u nastavku obrade mogli razlikovati fokusirani isječak od cijele
vremenske crte.

Semantičko usmjerenje opisa zasebna je, izričita postavka. Zadani način analize `full`
zadržava postojeći upit za kadar i nikada ne prosljeđuje tekst zahtjeva
modelu za opisivanje. U načinu `focused` most čita samo najnoviji
tekst `text`/`input_text` autora-korisnika koji nije prazan, iz istog spremnika sučelja Chat ili Responses,
normalizira ga u NFC, sažima kontrolne znakove i bjeline
te ga ograničava na 500 Unicode kodnih točaka. Prazan rezultat vraća se na
točno određeni upit `full`. Upotrebljiva uputa serijalizira se kao JSON u namjenskom
bloku nepouzdanog korisničkog konteksta i smije samo odrediti prioritet vidljivih detalja; ne
može nadjačati zasebno upozorenje protiv slijeđenja uputa koje su vidljive
ili čujne u mediju. Tekstualni fokus nikada ne izvodi `start`/`end` niti mijenja
vremenski uzorkivač.

#### FU-07 strukturni dokazi o segmentima

`segment_aware` koristi jedan ograničeni prolaz predanalize nad već validiranim
lokalnim videostreamom. Fiksni lanac filtara najprije skalira video na širinu
od najviše 320 piksela, otkriva promjene scena i zamrznute intervale, a zatim
uzima uzorke brzinom od 1 kadra u sekundi radi analize zamućenja, prosječne
luminancije te prostornih/vremenskih informacija. Prolaz je ograničen na 600
strukturnih uzoraka, jednu FFmpeg/filtarsku dretvu, iste popise dopuštenih
protokola isključivo za `file` i spremnika, ograničenje izlaza procesa od 1 MiB
te najviše 30 sekundi unutar zajedničkog prekida/roka posrednika. Nikada ne
prihvaća naredbu, filtar, putanju ni URL iz zahtjeva.

Strukturne vrijednosti deterministički su uzorkovani dokazi, a ne semantičko
razumijevanje videozapisa. Ne izvode zaključke o subjektima, radnjama, titlovima,
govoru ni namjeri korisnika. Granice scena i zamrzavanja tvore segmente;
pokrivenost zamrzavanjem, zamućenje, ekspozicija, prostorni detalji i vremenske
promjene utječu samo na način raspodjele postojećeg proračuna od 1 do 16
kadrova. Potpuno zamrznuti segment ograničen je na jedan kadar, dok se
nezamrznuti segmenti natječu za preostali proračun. Kada granica ima više nego
kadrova, zadržava se ujednačena pokrivenost vremenske crte kako brzi rani rezovi
ne bi mogli sakriti dugačak završni segment. Granice scena koje su unutar
1-sekundne razlučivosti analize od granice zamrzavanja spajaju se.

Nedostajući filtri, neispravni/prazni dokazi, pogreška detektora ili istek
vremena ograničene predanalize rezultiraju nastavkom rada uz točno određeno
pravilo ujednačenih središnjih točaka. Prekid pozivatelja ili rok posrednika ne
rezultira takvim nastavkom rada: prekida podproces u tijeku, sprječava naknadno
izdvajanje kadrova, a privatno privremeno stablo uklanja se u bloku `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira determinističke stvarne FFmpeg
testne resurse za uštede u broju poziva za opis nakon uklanjanja duplikata,
raspodjelu proračuna pri gustom kretanju, dokaze o zamućenju/ekspoziciji/SI-TI,
brze rezove s dugim završetkom i lažno pozitivne rezultate postupnog pretapanja.
Bilježi proteklo vrijeme predanalize te, kada je `/usr/bin/time` dostupan,
procesorsko vrijeme podređenog procesa i vršni RSS. Njegove provjere kvalitete
samo su strukturna mjerila. Kvaliteta stvarnog modela za opisivanje ostaje
`HOLD` jer ovaj okvir nema ovlaštenu krajnju točku ni zamrznutog procjenitelja.
Novčane uštede također ostaju `HOLD`, osim ako
`--caption-cost-per-call-usd` ne zada izričitu pozitivnu procjenu troška po
pozivu; skripta nikada ne izmišlja nijedan od tih rezultata.

Svaki je kadar ograničen na 4 MiB, svi neobrađeni kadrovi zajedno na 23 MiB, a
serijalizirani odgovor posrednika na 32 MiB. Privatni privremeni direktorij
uklanja se u bloku `finally`. OmniRoute ne uključuje FFmpeg i ne prihvaća
prilagođenu putanju do izvršne datoteke. Prije opisivanja most primjenjuje
konzervativan prolaz vizualnog uklanjanja duplikata: svaki JPEG svodi se na
međuspremnik sivih tonova veličine 16×16 i uspoređuje samo s posljednjim
zadržanim kadrom. Za zatraženi proračun opisa veći od jednog kadra izdvajanje
daje ograničen skup kandidata veličine do dvostrukog proračuna, ali nikada više
od 16 kadrova. Zatraženo ograničenje primjenjuje se tek nakon uklanjanja
duplikata, pri čemu se prvi i posljednji odabrani kandidat zadržavaju tijekom
završnog prorjeđivanja kada proračun iznosi najmanje dva. Verzijska politika
`grayscale-16x16-mean-cells-v2` koristi veću vrijednost između srednje promjene
luminancije i omjera ćelija minijature čija je normalizirana razlika najmanje
0.05. Prag duplikata konstanta je 0.04, odabrana radi predvidljivosti, a ne kao
postavka dostupna tijekom izvođenja. Taj sekundarni signal visokog kontrasta
čuva male pokrete i promjene vidljivog teksta koje usporedba zasnovana samo na
srednjoj vrijednosti može sakriti. Pogreške usporednika ili dekodera rezultiraju
nastavkom rada i zadržavanjem pokrivenosti. Izlazni metapodaci odvojeno prikazuju
izdvojene kandidate, uspješno upotrijebljene kadrove i odbačene vizualne
duplikate.

Izričito označen videodio može zatražiti kontaktnu tablu s vremenskim oznakama.
Most izrađuje JPEG mrežu od najviše 4 stupca i 16 kadrova. Svaka ćelija od 512
piksela utiskuje vremensku oznaku izvora u donju traku visokog kontrasta, dok
iste vremenske oznake ostaju u tekstualnim metapodacima radi naknadnog
povezivanja i revizije. Cijeli JPEG ostaje ograničen na 32 MiB. Ako `sharp` ne
može dekodirati ili sastaviti mrežu, most se vraća na pojedinačne JPEG kadrove;
prekid klijenta i dalje se prenosi kroz operaciju izrade table.

Dokazi za promicanje namjerno su odvojeni od sintetičkog mikrotesta performansi
sastavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira
A/B okvir s verzioniranom shemom za stvarne modele vida kompatibilne s OpenAI-jem.
Mjeri tokene koje je prijavio pružatelj, ukupnu proteklu latenciju (uključujući
sastavljanje table), broj poziva modela i zadržavanje činjenica definirano
manifestom. Neobrađeni odgovori modela ne zapisuju se u izvješće; zadržavaju se
samo sažeci SHA-256 i ID-jevi podudarnih činjenica. Okvir ne upućuje mrežni ni
plaćeni poziv modelu osim ako se proslijedi `--execute-real` i konfiguriraju
`--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez takvog izričitog
stvarnog izvođenja njegov strojno čitljiv zaključak ostaje `HOLD`; sama
sintetička mjerenja sadržaja/broja poziva nisu dokaz za promicanje.

Pozivatelji mogu podržanom videodijelu priložiti neobavezno polje
`transcript.cues` kada već posjeduju vremenski usklađen tekst. Svaka natuknica
mora sadržavati `text`, konačan interval `start`/`end` unutar utvrđenog trajanja
i dopušteni `source` (`client`, `embedded` ili `audio-bridge`); `confidence`
zadano iznosi `1` i mora ostati između `0` i `1`. Potpuno jednake natuknice
objedinjuju se. OmniRoute nikada ne pokreće transkripciju na temelju tih
metapodataka: validirane natuknice kopiraju se u opisani rezultat zajedno s
izvorom, pouzdanošću i intervalom te se prikazuju kao nepouzdana opažanja uz
opise kadrova. Neispravan tekst, tekst izvan raspona ili tekst bez podrijetla
odbacuje se umjesto da se miješa u tok opisa. Oba transkriptna kanala tijela
zahtjeva normaliziraju navedeno podrijetlo na `client`, uključujući samostalno
navedene oznake `embedded` ili `audio-bridge`. Samo adapter pod nadzorom
poslužitelja može dodijeliti te pouzdane oznake putem argumenta `trustedSource`
dostupnog isključivo iz koda; JSON polje zahtjeva ne može dosegnuti taj
argument. Tekst transkripta ostaje nepouzdan sadržaj izveden iz medija, bez
obzira na njegovo podrijetlo, i nikada ne smije određivati autorizaciju.

Napredni pozivatelj može navesti zapis `audioTranscript` za isti videozapis;
on se smatra tekstom koji je dostavio klijent, a ne dokazom poslužiteljske transkripcije.
Spojna komponenta pokreće vizualna i zvučna opažanja unutar
jednog roka i signala za prekid, raspoređuje ih na zajedničkoj vremenskoj crti, sažima
potpuno jednake duplikate i prijavljuje djelomičan rezultat kada uspije samo jedna strana.
Nevaljani `audioTranscript` degradira se na taj djelomičan rezultat — vizualni
opis zadržava se, a zvučna grana bilježi sanitizirani kôd pogreške —
umjesto da cijeli videozapis završi neuspješno. Dostupnost po grani, oznaka djelomičnosti
i sanitizirani kodovi pogrešaka čuvaju se u opisanom rezultatu, u
metapodacima zaštitnih mehanizama (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), u metapodacima predmemorije rezultata i u
brojačima spajanja mosta. Zadani put Video Bridgea ne poziva pretvorbu govora u tekst
niti preuzima drugu kopiju medija; bez tog izričitog zapisa ostaje
ograničen samo na videozapis.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primjenjuje kad god
Video Bridge (koji se i sam mora izričito uključiti) prikaže stavku transkripta — ne postoji zasebna
oznaka zadržavanja. Kada zahtjev prikaže bilo koju stavku transkripta (pozivateljev deklarirani
`transcript` ili spojeni `audioTranscript`), zaštitni mehanizam označava ga kao
`videoBridgeObserved` i stvara redigiranu kopiju opisa videozapisa —
identičan prikaz u kojem je tijelo slobodnog teksta svake stavke zamijenjeno s
`[redacted-video-transcript]`, izrađen zamjenom strukturiranog polja stavke
prije sastavljanja niza (nikada raščlanjivanjem objedinjenog teksta, tako da nijedan sadržaj
stavke — zlonamjeran ili uobičajen, uključujući tijela koja sadržavaju `]`, kao što su
`[inaudible]`/`[music]` — ne može preživjeti). Tijelo zahtjeva u trajno pohranjenom zapisniku poziva zamjenjuje
svaki tekstualni dio izveden iz videozapisa tom redigiranom kopijom, podudaranjem prema jednakosti
sadržaja; sidro `fullText` ponovno se čita iz dovršenog sadržaja zaštitnog mehanizma prije poziva,
pa podudaranje i dalje uspijeva nakon što naknadni lančani zaštitni mehanizmi (maskeri osobnih
podataka i vjerodajnica, prioriteti 10/95) prepišu tekst opisa na mjestu te
nakon što umetanje sistemske upute, primopredaje i Memorije preoblikuje polje poruka. Tijelo
poslano modelu ne mijenja se. Opaženi zahtjev također ne popunjava
trajnu Memoriju (preskače se izdvajanje izvedeno i iz zahtjeva i iz odgovora),
pa vlastiti odgovor modela ne može prenijeti tekst transkripta u Memoriju.

**Neobrađena videopolja (#12430).** Kada je most omogućen, a izvorna podrška za videozapis nepoznata ili ne postoji, definirana polja `transcript`/`audioTranscript` također aktiviraju `videoBridgeObserved`, čak i nakon neuspjelog opisivanja ili ograničenja `maxVideos`. Vrijednosti `null` i prazni nizovi računaju se; odsutna polja i metapodaci koji se ne odnose na videozapis ne računaju se. Zadržane kopije redigiraju ta polja ili izostavljaju zahtjev, a predmemorije i Memorija zaobilaze se.

Na tim rezervnim putovima valjane stavke pozivatelja postaju podržani dijelovi `text`/`input_text`
umjesto nestandardnih polja pružatelja usluge. Oba zapisa dostavljena u zahtjevu
ostaju nepouzdana opažanja vrste `client`, uz izričito upozorenje da videozapis
nije opisan i da vremenske oznake nisu provjerene u odnosu na medij. Postojeća
ograničenja od 256 stavki/64 KiB ukupno i po stavci primjenjuju se na oba zapisa zajedno;
vremenske oznake moraju biti unutar brokerova ograničenja od 600 sekundi i svakog navedenog
vremenskog raspona fokusa. Nevaljani zapisi odbacuju se i ne prosljeđuju kao proizvoljan tekst; valjani
srodni zapis i dalje se može upotrijebiti, osim ako je njihovo zajedničko ograničenje prekoračeno. Polja s vrijednošću `null`/prazna
polja ne dodaju tekst. Ovaj rezervni mehanizam ne dodaje dohvaćanje medija ni transkripciju.
Polja proširenja transkripta uklanjaju se iz rezervnog nositelja videozapisa i njegovih
objekata `video_url`/`source`. OpenAI-jev popis dopuštenih elemenata u prijenosnom formatu ostaje strog; nositelji
videozapisa s nepoznatom izvornom podrškom ostaju dostupni, a poznata odredišta koja podržavaju samo tekst zadržavaju sigurne oznake.
Strukturirane redigirane kopije štite dodani tekst transkripta, dok
izvorni zahtjev u vlasništvu pozivatelja ostaje nepromijenjen. Odredišta s izvornom podrškom i
onemogućeni mostovi zadržavaju postojeće ponašanje zaobilaženja.

Dodatne zadržane kopije koriste isti signal opaženog zahtjeva. Neobrađena
snimka klijentskog zahtjeva prije zaštitnih mehanizama, zahtjev na čekanju u memoriji i zapisnik
rano odbijenog zahtjeva strukturno zamjenjuju polja transkripta u dijelovima videozapisa;
tekstualne upute koje sintetiziraju faze obrade i primopredaja konteksta redigiraju se
na odredištu tijela trajno pohranjenog zahtjeva. Trajno pohranjena oznaka `video_content_removed`
uzrokuje da nastavak putem `previous_response_id` bude sigurno odbijen umjesto da rekonstruira
tekst koji je namjerno odbačen. Ako opaženi zahtjev izgubi svoju
redigiranu kopiju po dijelu prije zapisivanja ili ako čak i jedna od nekoliko kopija videozapisa
ne pronađe podudaranje nakon naknadnih izmjena zahtjeva, zadržano tijelo zahtjeva
u potpunosti se izostavlja umjesto zadržavanja djelomično redigiranog transkripta.

Za opaženi zahtjev odgovor modela može citirati bilo koji dio
transkripta bez strukturirane granice stavke. Njegov `responseBody` u trajno pohranjenom zapisniku poziva
stoga se zamjenjuje oznakom izostavljanja; detaljni artefakt obrade (koji može sadržavati
tijela pružatelja usluge/klijenta i dijelove toka) ne zadržava se. Semantička predmemorija,
predmemorija idempotentnosti i predmemorija ponovne reprodukcije zaključivanja zaobilaze čitanja i zapisivanja za taj zahtjev.
Zahtjev pružatelju usluge i odgovor vidljiv klijentu ostaju nepromijenjeni.
Rani bajtovi za održavanje veze prazne se iz privremenog
međuspremnika kada se detaljni artefakt izostavi. Kirovo upozorenje o neispravnom EventStreamu
prijavljuje samo broj bajtova sadržaja, nikada njegov sadržaj ni neobrađenu pogrešku JSON
parsera.
Ovim se ne tvrdi da je svaki nepovezani dijagnostički zapis pružatelja usluge/dodatka
revidiran; šira provjera odredišta trajnog zadržavanja prati se u #11658.

Interni životni ciklus `/api/modality-bridge/video/drilldown` zasebna je podloga predmemorije s povratnom petljom i autentikacijom tokenom. Svaka operacija također zahtijeva kanonski neprozirni ID principala. Prije omogućavanja produkcijskog pozivatelja, on mora izvesti taj ID iz autentificiranog tenanta i nikada ne smije proslijediti vrijednost koju je odabrao klijent. Ključevi predmemorije povezuju taj principal s kanonskim ID-ovima sesije i videoreference, pohranjuju samo njihove ključeve izvedene algoritmom SHA-256 te ograničavaju i čitanja i brisanje na isti principal. Predmemorija po stavci pohranjuje najviše 16 izvedenih JPEG okvira, uklanja ih nakon deset minuta te podržava ograničena čitanja `start`/`end` ili izričito brisanje sesije.

Svaki principal ograničen je na 16 stavki i 64 MiB kanonskih JPEG podataka. Ta su ograničenja neovisna o globalnom maksimumu od 64 stavke/256 MiB: pritisak kvote principala uklanja samo najdulje nekorištene stavke tog principala prije razmatranja globalnog LRU uklanjanja. Istekle stavke uklanjaju se i iz evidencije principala i iz globalne evidencije pri aktivnosti predmemorije, dok se u slučaju otkazivanja i neuspjeha provjere valjanosti djelomična zamjena ne pohranjuje.

Predmemorija odbija nekanonski Base64, suvišno popunjavanje, medije koji nisu JPEG, neispravne ili skraćene JPEG datoteke te JPEG datoteke koje tijekom ograničenog dekodiranja cijele slike pomoću `sharp` proizvedu upozorenje. Svaku prihvaćenu sliku ponovno kodira kao kanonski JPEG, izvodi širinu i visinu iz dekodiranih bajtova umjesto da vjeruje poljima pozivatelja te odbacuje sve završne poliglotske bajtove umjesto da ih zadržava. U obje se kvote uračunava samo ograničeni kanonski komprimirani međuspremnik. Ograničenje JSON prijenosa uključuje Base64 povećanje veličine za gornju granicu dekodiranog ulaza od 32 MiB. Svaka pohranjena izvedenica bilježi svoj provjereni JPEG format/razlučivost, pravila uzorkovanja, verziju izvođenja, vrijeme stvaranja, sadržajni sažetak koji je izračunao poslužitelj te sažetak nadređene reference zajedno sa sažetkom sadržaja nadređenog objekta koji je dostavio pouzdani pozivatelj. Otkazivanje se provjerava između asinkronih faza dekodiranja i izračuna sažetka prije atomskog spremanja u predmemoriju.

Ova etapa još ne povezuje produkcijskog proizvođača s rutom i ne omogućuje odabir varijante s više razlučivosti. Transparentni put zahtjeva Video Bridge stoga ne uzrokuje dodatan rad, dok izvođenje principala vezanog uz tenant i puni životni ciklus FU-08 s više razlučivosti ostaju izričiti naknadni zadaci, umjesto da budu dokumentirani kao dovršeno ponašanje.

Okviri se opisuju redom pomoću konfiguriranog Video modela. Prazno Video nadjačavanje nasljeđuje postavku Vision; ako su obje postavke prazne, Vision automatski usmjerivač odabire efektivni model koji podržava vid. Uspješni opisi zamjenjuju izvorni dio stabilnim prefiksom `[Video description:` koji tekst također označava kao nepouzdano opažanje izvedeno iz medija i upućuje modele u nastavku obrade da ne slijede upute pronađene u mediju. Ključevi predmemorije opisa okvira uključuju JPEG bajtove, upit, vremensku oznaku i efektivni model; predmemoriraju se samo uspješni opisi. Stavke predmemorije zadržavaju stvarni model proizvođača koji je uspješno obradio sadržaj, uključujući pričuvni model; most prijavljuje `mixed` kada su različite okvire proizveli različiti modeli. Pogodak u predmemoriji ponovno upotrebljava taj identitet proizvođača umjesto da ga ponovno označi kao zatraženi plan usmjeravanja. Predmemorija rezultata cijelog videozapisa indeksirana je svakim ulazom koji mijenja izlaz — upitom, efektivnim modelom, pravilima uzorkovanja, brojem okvira, načinom semantičke analize, SHA-256 otiskom normalizirane napomene o fokusu, prozorom fokusa, vrijednošću `transcript`, vrijednošću `audioTranscript` i zastavicom kontaktnog lista — pa promjena bilo koje od tih dimenzija uzrokuje promašaj predmemorije, a nikada ponovnu upotrebu zastarjelog sadržaja. Verzija pravila vizualne deduplikacije, prag i ograničeni broj kandidata za okvire također su izričito navedeni u ključu i metapodacima predmemorije rezultata; promjena pravila stoga ne može ponovno upotrijebiti zastarjeli opis cijelog videozapisa. Metapodaci predmemorije rezultata v4 zadržavaju način rada i otisak, ali nikada neobrađeni korisnički zadatak. Metapodaci zaštitnog mehanizma navode i zatraženi i efektivni način analize; zatraženi način `focused` bez upotrebljivog korisničkog teksta prijavljuje se kao efektivno `full`.

Zaštitni mehanizam izdvaja svaki podržani videodio, ali opisuje najviše `modalityBridgeVideoMaxVideos` videozapisa. Za cilj za koji je dokazano da ima `supportsVideo === false`, neuspjeli videozapisi i videozapisi iznad ograničenja pretvaraju se u izričite sigurne tekstualne oznake kako nijedan neobrađeni videozapis ne bi ostao. Kada je mogućnost nepoznata, ti dijelovi zadržavaju svoj videonositelj; svaki pričuvni transkript slijedi gore navedenu ograničenu pretvorbu teksta. Ciljevi sa `supportsVideo === true` zaobilaze most. Signal za prekid klijentskog zahtjeva prenosi se kroz preuzimanje, red čekanja brokera, potprocese i pozive za opisivanje; prekidi zaustavljaju obradu između videozapisa i nikada ne dopuštaju nesiguran nastavak s neobrađenim medijem.

Postavke vremena izvođenja pohranjene su u bazi podataka i provjerene pomoću Zod:

| Ključ                               | Zadana vrijednost | Raspon / ponašanje                                                                                             |
| ----------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`           | Neobavezno okruženje za izvođenje, uz izričito uključivanje                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`          | `full` zadržava generičke opise; `focused` koristi ograničeni, nepouzdani kontekst najnovijeg korisnika        |
| `modalityBridgeVideoModel`          | `""`              | Nasljeđuje model komponente Vision Bridge                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`               | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`       | `uniform`, `scene_aware` ili proporcionalni `segment_aware`; u slučaju pogreške detektora koristi se `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`               | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`          | 1000–120000 ms                                                                                                 |

Naslijeđene trajno pohranjene vrijednosti vremenskog ograničenja za Video veće od 120 sekundi ograničavaju se na
rok posrednika; novi pokušaji zapisivanja postavki iznad tog ograničenja odbijaju se.
`GET /api/modality-bridge/video/runtime` prije autentifikacije ili ispitivanja okruženja za izvođenje zahtijeva pouzdanu, označenu
lokalnost povratne petlje, a zatim zahtijeva upravljačku
autentifikaciju. Vraća samo `available`, pročišćene verzije alata FFmpeg/ffprobe i fiksni
razlog kada okruženje za izvođenje nije dostupno. Interna krajnja točka za izdvajanje nije
javni API za prijenos: zasićenje reda vraća `503` uz `Retry-After`, prekid veze
pozivatelja vraća `499`, a fiksni rok posrednika vraća `504`. Pretvoreni odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u središnje
zaglavlje `x-omniroute-modality-bridge` bez uklanjanja segmenata Vision ili Audio.

### Maskiranje osobnih podataka (`piiMasker.ts`)

Izvodi se u **objema** fazama.

- **`preCall`** klonira korisni sadržaj, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući stavke koje su obični nizovi znakova) te primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na polja `content`/`text` koja sadrže nizove znakova. Kada je
  `PII_REDACTION_ENABLED=true`, otkriveni osobni podaci redigiraju se u odlaznom
  korisnom sadržaju. To je neovisno o postavci `INPUT_SANITIZER_MODE` (koja upravlja samo
  pravilima za umetanje naredbi). Kada je redigiranje isključeno, poziv bilježi broj
  otkrivenih stavki bez izmjene sadržaja.
- **`postCall`** dubinski klonira odgovor, pokreće `sanitizePIIResponse()` zajedno s
  maskiranjem oblika Responses API-ja (`maskResponsesOutput` — obuhvaća
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog redigiranja,
  izmijenjeni odgovor zamjenjuje izvorni.

Zaštitno pravilo nikada ne blokira; ono samo dodaje bilješke (`meta.detections`,
`meta.redacted`) ili preinačuje sadržaj.

### Umetanje naredbi (`promptInjection.ts`)

Otkriva zlonamjerne strukture u sadržaju koji je dostavio korisnik i provodi
konfigurirana pravila. Ponašanje određuju varijable okruženja i opcije
konstruktora:

| Postavka        | Varijabla okruženja                                                                                   | Zadana vrijednost | Učinak                                                                                                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`            | Kada je `false`, zaštitno pravilo odmah prekida obradu.                                                                                                                                                                             |
| Način rada      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`            | Pravilo za umetanje: `block`, `warn` ili `log`. (`redact` je prihvaćen radi kompatibilnosti sa starijim verzijama, ali **ne** uklanja umetnuti tekst; preinačivanjem osobnih podataka u zahtjevu upravlja `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`            | Najmanja razina ozbiljnosti potrebna za blokiranje. Uz zadanu postavku srednja razina služi samo za promatranje.                                                                                                                    |

**Prednost načina rada** (`getMode`): `options.mode` pozivatelja →
`INJECTION_GUARD_MODE` **nadjačavanje DB zastavicom značajke** (Nadzorna ploča → Postavke →
Zastavice značajki) → varijabla okruženja `INJECTION_GUARD_MODE` → varijabla okruženja `INPUT_SANITIZER_MODE` →
`warn`. Nadjačavanje putem nadzorne ploče stoga ima prednost pred varijablama okruženja, pa korisničko sučelje Zastavice
značajki upravlja aktivnom zaštitom u stvarnom vremenu (bez ponovnog pokretanja). Čitanje iz DB-a sigurno je u slučaju pogreške:
ako se pojavi pogreška, zaštita se vraća na ponašanje temeljeno na varijablama okruženja, a kada
nadjačavanje nije postavljeno, ponašanje je jednako razrješavanju koje se temelji isključivo na varijablama okruženja.

Izvori otkrivanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički skup detektora
   koji se koristi na drugim mjestima u procesnom slijedu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutačno `system_override_inline` i
   `markdown_system_block`, oba razine ozbiljnosti `high`).
3. Neobavezni `customPatterns` proslijeđeni putem opcija konstruktora (nizovi znakova, regularni izrazi
   ili zapisi `{ name, pattern, severity }`).

Kada je `mode === "block"` **i** barem jedna detekcija dosegne prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Request rejected:
suspicious content detected" }`. U načinima rada `warn`/`log` zaštitni mehanizam bilježi događaj, ali
dopušta poziv. Zajednički pomoćni modul `evaluatePromptInjection()` također se izvozi
za pozivatelje koji trebaju procijeniti upite bez korištenja registra.

**Ograničenje skeniranja (v3.8.20):** detektor pregledava samo **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` primjenjuju `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje uzoraka. Direktive za ubrizgavanje nalaze se pri vrhu ulaza, pa se time
ograničava opterećenje CPU-a/GC-a uzrokovano regularnim izrazima na sadržajima veličine više stotina KB bez slabljenja detekcije (usp.
#3932, #4041).

### Maskiranje vjerodajnica (`credentialMasker.ts`)

Izvodi se u **obje** faze, posljednje u zadanom lancu (prioritet `95`). Redigira
poznate uzorke API ključeva / tajnih tokena iz izlaznog sadržaja (sadržaj poruke,
argumenti poziva alata, rezultati alata) **i** odgovora pružatelja usluge, tako da
vjerodajnica zalijepljena u upit (ili vraćena u rezultatu alata) ne procuri
vanjskom pružatelju usluge ni natrag klijentu.

- **Samo uz izričito uključivanje**, prema istoj konvenciji kao redigiranje osobnih podataka (uz Strogo pravilo #20):
  onemogućeno je osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitni mehanizam ne poduzima ništa —
  nikada ne blokira niti prepisuje.
- `redactCredentials()` prolazi kroz cijelo stablo sadržaja/odgovora (`walkValue()`,
  sigurno od zagađenja prototipa, sigurno od ciklusa putem `WeakSet`) i zamjenjuje podudaranja
  rezerviranim tekstom `[REDACTED:<type>]`, klonirajući samo grane koje su se doista
  promijenile.
- `CREDENTIAL_PATTERNS` obuhvaća ključeve pružatelja LLM usluga (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve
  usluga u oblaku (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  nizove za povezivanje koji sadrže vjerodajnice (`mongodb://user:pass@...` itd.) i
  generički uzorak vrijednosti zaglavlja `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključevi oblika zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redigiraju se strukturno (samo vrijednost, dok se prefiks sheme poput
  `Bearer `/`Basic ` zadržava), umjesto putem generičkog tekstualnog regularnog izraza.
- Zaštitni mehanizam nikada ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) i dodaje bilješke (`meta.credentialsRedacted`, `meta.count`).

Zaštita od regresija: `tests/unit/credential-masker-guardrail.test.ts`.

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
  modifiedPayload?: TValue; // vraća preCall za prepisivanje zahtjeva
  modifiedResponse?: TValue; // vraća postCall za prepisivanje odgovora
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

Zaštitna ograda signalizira "bez promjene" vraćanjem `void`, `{}`, ili
`{ block: false }`. Vraćanje `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za nizvodne zaštitne ograde.
`signal?: AbortSignal` prenosi životni ciklus pozivatelja u zaštitne ograde. Prekid zahtjeva je namjerna iznimka otvorenog kvara: medijski mostovi zaustavljaju rad i čišćenje bez vraćanja sirovih medija na cilj za koji se zna da ih ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje (ili zamjenjuje normaliziranim imenom) zaštitnu ogradu i
  ponovno sortira po uzlaznom `priority`.
- `clear()` / `list()` — administrativni pomoćnici.
- `runPreCallHooks(payload, context)` — iterira aktivne zaštitne ograde, provlači
  payload kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
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
- Tijelo zahtjeva `disabledGuardrails` (najviša razina)
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

1. `resolveDisabledGuardrails(...)` gradi popis za preskakanje iz API ključa, tijela
   i zaglavlja.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne ograde uzlaznim
   redoslijedom prioriteta:
   - Onemogućene zaštitne ograde bilježe se kao `skipped`.
   - `preCall` svake zaštitne ograde može prepisati teret putem `modifiedPayload`.
   - Prvi `block: true` kratko spaja lanac i rukovatelj vraća
     odgovor o odbijanju zaštitne ograde.
3. (Potencijalno prepisan) teret teče u kombinirano usmjeravanje i uzvodnu
   dispečersku službu.
4. Nakon što je odgovor sastavljen, `guardrailRegistry.runPostCallHooks(...)`
   pokreće isti lanac na odgovoru. `block: true` ovdje odbacuje uzvodni
   odgovor.

Zaštitne ograde koje bacaju iznimku bilježe se s `error: <message>` i bilježe putem
`logger.warn`, ali lanac se nastavlja — dizajnirano je da se otvara u slučaju kvara.

## Konfiguracija

Varijable okoline koje čitaju ugrađene zaštitne ograde:

| Varijabla                             | Koristi se od strane    | Učinak                                                                                                                           |
| :------------------------------------ | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Postavite `false` da biste u potpunosti onemogućili detekciju.                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Politika ubrizgavanja: `warn`, `block` ili `log`. Zastarjela vrijednost `redact` ne prepisuje tekst ubrizgavanja.                |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način rada za zaštitu od ubrizgavanja; također zastavica značajke baze podataka koja **nadjačava** varijable okoline (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Minimalna ozbiljnost koju `MODE=block` odbija: `high` (zadano), `medium` ili `low`.                                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Zastarjeli alias za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kada je `true`, PII zahtjeva se redigira (neovisno o načinu ubrizgavanja).                                                       |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nizvodno) | Kontrolira ponašanje maskera na strani odgovora.                                                                                 |

Zaštitne ograde Modality Bridgea čitaju konfiguraciju vremena izvođenja iz pohrane postavki podržane bazom podataka
(`getSettings()`), a ne iz varijabli okoline. Primarni ključevi za Vision su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` i
`modalityBridgeCacheMaxEntries`. Zastarjeli
`visionBridge*` ključevi prihvaćaju se samo kao dokumentirani jednociklični
povratni mehanizam čitanja; pisanja na nadzornoj ploči koriste primarne ključeve. Zadane vrijednosti i povratni
mehanizam rješavanja nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, s
zastarjelim konstantama zadržanim u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, plus zajedničke
`modalityBridgeCache*` postavke. Audio nema povratni mehanizam za zastarjele ključeve jer su ti
ključevi uvedeni sa shemom Modality Bridgea.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` i
`modalityBridgeVideoTimeout`, plus zajedničke `modalityBridgeCache*` postavke.
Onemogućen je prema zadanim postavkama jer su FFmpeg/ffprobe opcionalne operativne
ovisnosti, a titlovanje okvira dodaje kašnjenje i troškove modela.

## Prilagođene zaštitne ograde

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Dnevni budžet prekoračen" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Koraci:

1. Stvorite `src/lib/guardrails/myGuardrail.ts` proširujući `BaseGuardrail`.
2. Implementirajte `preCall` i/ili `postCall`.
3. Registrirajte se prilikom uvoza (push iz `registerDefaultGuardrails`) ili
   pozovite `guardrailRegistry.register(...)` tijekom izvođenja — registar zamjenjuje
   bilo koju prethodnu zaštitnu ogradu s istim normaliziranim imenom.
4. Dodajte testove pod `tests/unit/` (postojeći primjeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Koristite `resetGuardrailsForTests()` između testova za početak iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` za početak s praznim registrom i
registrirajte samo zaštitne ograde koje se testiraju. Vision Bridge prihvaća ubrizgavanje ovisnosti
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže ekvivalentne šavove za postavke, mogućnosti, odabir STT modela, provjere vjerodajnica i transkripciju. Testovi stoga mogu vježbati oba toka bez pristupa bazi podataka ili mreži.

## Vidi također

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — zajednički detektor koji pokreće
  ubrizgavanje upita i maskiranje PII
- `src/shared/constants/visionBridgeDefaults.ts` — zadane postavke Vision Bridgea i
  popis modela prisilnog premošćivanja
- `src/shared/constants/modalityBridgeDefaults.ts` — zajedničke zadane postavke Vision/Audio runtimea
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalni sloj (prekidač, hlađenja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okoline

## Pokrivenost rute zaštite od ubrizgavanja i crveni tim (Faza 8 · Blok D)

Zaštita od ubrizgavanja (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvaćaju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (zadano `warn` = samo zapisivanje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Vrsta             | Rute                                                                                                                                                 | Zadani način rada |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Tekst (postojeći) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Generativni       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Ekstrakcija teksta (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Crveni tim (noćni, `nightly-llm-security.yml`):** promptfoo provjerava da svaka ruta blokira
OWASP-LLM korpus u `INJECTION_GUARD_MODE=block`; garak pokreće sonde (preskače bez tajne).
`moderations` je uključen radi dosljednosti — operatori u blok-načinu mogu ga izuzeti putem
`resolveDisabledGuardrails`.

Noćni tijek rada (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva posla:

- **`promptfoo-guard` (blokiranje)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Svaki adversarijalni slučaj (npr. "zanemari sve
  prethodne upute…", jailbreakovi u DAN stilu) potvrđuje da odgovor nosi
  `error.code === "SECURITY_001"`, tj. da je zaštita stvarno odbila zahtjev.
- **`garak` (savjetodavno)** — pokreće garak `--probes promptinject,dan,leakreplay`
  protiv lokalne OmniRoute instance (`http://localhost:20128/v1`). Ograničeno tajnom
  davatelja (`PROMPTFOO_PROVIDER_KEY`); graciozno preskače i ima sufiks
  `|| true`, tako da izvještava bez neuspjeha CI-ja.

Pokrivenost pomoćne funkcije zaštite (`createInjectionGuard` / `withInjectionGuard`)
obuhvaća svaku `/v1` rutu koja nosi upit; tekst upita se izvlači iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.
