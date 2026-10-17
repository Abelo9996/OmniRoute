# Guardrails (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Vir resnice:** `src/lib/guardrails/`
> **Nazadnje posodobljeno:** 2026-08-29 — v3.8.51 (izvor prepisa Video Bridge določi klicatelj,
> strežnik pa ga še ne preverja — pojasnjeno skladno z #11661)

Varovala uveljavljajo varnost, pravilnike in preoblikovanje vsebine na meji
med OmniRoute in ponudniki v zaledju. Vsako varovalo lahko pregleda (in
po želji zavrne, preoblikuje ali opremi z opombami) koristne vsebine zahtev (`preCall`) ter
odzive iz zaledja (`postCall`).

Sistem je zasnovan tako, da ob napaki **dovoli nadaljevanje**: če varovalo med izvajanjem sproži izjemo, register
zabeleži napako in nadaljuje z naslednjim varovalom, namesto da bi
zahteva spodletela. Blokiranje je izrecna odločitev (`block: true`), nikoli naključje.

## Vgrajene varovalke

Register ob uvozu samodejno naloži šest varovalk po prednostnem vrstnem redu
(glejte `registry.ts` → `registerDefaultGuardrails()`):

| Prednost | Ime                 | Faza/-e        | Datoteka              |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižje številke prednosti se izvedejo **prej**.

### Slikovni most (`visionBridge.ts`) — Most modalnosti PR-1

Prestrezajo se zahteve, ki vsebujejo slike in so namenjene **modelom brez podpore za slike**, nato pa se celotna zahteva preusmeri na model s podporo za slike ali pa se slikovni deli pred klicem nadrejene storitve zamenjajo z besedilnimi opisi, ki jih ustvari nastavljiv slikovni model. Tako lahko ponudniki, ki podpirajo samo besedilo, pregledno obdelujejo večmodalne koristne vsebine.

Potek:

1. Preskoči, če ciljni model že podpira slike (razen če je na seznamu modelov za prisilno uporabo mostu `isVisionBridgeForcedModel`).
2. Izloči slikovne dele prek `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ki obdelavo prenese na **enotni zaznavalnik
   predstavnosti** `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — edini
   vir resnice, ki si ga deli s kombiniranim filtrom združljivosti.
   Izločanje je omejeno na dovoljene dele na najvišji ravni v oblikah, ki jih
   lahko `replaceImageParts` vstavi nazaj (pogodba izločanje↔zamenjava): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` in Responses API `input_image`. Ugnezdeni zadetki in
   oblike, ki vsebujejo samo indikatorje, so namenjeni kombiniranemu filtru in
   se nikoli ne izločijo.
3. Razreši konfiguracijo izvajalnega okolja prek `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključi nastavitev
   `modalityBridge*` imajo prednost; starejši ključi `visionBridge*` ostanejo
   **nadomestna možnost za en cikel** (časovno okno za povrnitev). Če je most
   onemogočen, preskoči pred kakršnim koli pregledovanjem predstavnosti.
4. Izbirnik načina (`modalityBridgeVisionMode`, glejte spodnjo tabelo) določi,
   ali se zahteva preusmeri ali opiše. Preusmeritev vrne `modifiedPayload`, v
   katerem je zamenjan samo `model`, skupaj z metapodatki
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Pot opisovanja: omeji število slik na `maxImages`, sestavi poziv, prilagojen
   nalogi, preveri predpomnilnik opisov, pokliče slikovni model **vzporedno**
   (`Promise.allSettled`) in na njihova mesta vstavi besedilne dele
   `[Slika N]: <opis>`. Neuspešno opisovanje vrne `null`, izvirni slikovni del
   pa se **ohrani** (#4012) — razen na kombinirani poti opisovanja, kadar so
   spodleteli vsi poskusi opisovanja; takrat potrjena nadrejena storitev brez
   podpore za slike prejme nadomestno besedilo
   `(ni na voljo — povezan ni noben ponudnik s podporo za slike)` (#8430).
6. Vrne `modifiedPayload` in metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Izbirnik načina (`modalityBridgeVisionMode`)

| Način      | Privzeto | Vedenje                                                                                                                                                                                                                                                                                              |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Nespremenjena starejša hevristika (#6640/#7204): modeli, ki niso kombinirani, in modeli `auto/` se preusmerijo na najboljši slikovni model, razen če ima izvirni model že uporabne poverilnice (takrat se uporabi opisovanje); kombinirani cilji vedno uporabijo opisovanje.                         |
| `describe` |          | Vedno uporabi opisovanje — blok za preusmeritev se v celoti preskoči; vedno odgovori model, ki ga je izbral uporabnik.                                                                                                                                                                               |
| `reroute`  |          | Prisili preusmeritev: varovalo za ohranitev modela s poverilnicami se obide. Varovalo poverilnic za **cilj** preusmeritve še vedno velja — kadar ni uporabnega slikovnega cilja, se zahteva prepusti opisovanju, zato neobdelane slike nikoli ne dosežejo zaledja, ki podpira samo besedilo (#8430). |

Prisilni načini se zaključijo **pred** izvedbo samodejne hevristike; vedenje
načina `auto` je bajtno enako varovalki pred PR-1.

#### Obseg ključa API (`visionBridgeKeyScope.ts`)

Kadar klicateljev ključ API omejuje `allowedConnections`, zbirke kvot
(`allowedQuotas`) ali modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most za
preusmeritev in opisovanje izbere samo modele, ki jih ključ sme uporabljati,
na povezavah, ki jih ključ sme uporabljati. Klic za opisovanje nato vedno
poteka prek samozanke OmniRoute z glavo `x-omniroute-self-loop-key-id`, zato
prejemna zahteva za klepet znova uveljavi pravilnik tega ključa za povezave in
modele. `enforceApiKeyPolicy()` to glavo upošteva samo skupaj z žetonom
nosilca samozanke, zato lahko dostop zgolj omeji, ID, ki ga ni mogoče razrešiti,
pa je zavrnjen.

Če ključu ni dovoljen noben slikovni model, se pot opisovanja umakne in
zahteva se nespremenjena posreduje naprej, kar je enako vedenje z dovoljenim
nadaljevanjem ob napaki kot pri onemogočeni varovalki (metapodatki
`{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahteve brez ključa in ključi brez teh omejitev se vedejo povsem enako kot
prej.

#### Poziv za opisovanje, prilagojen nalogi (`modalityBridgeVisionTaskAware`)

Privzeto **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) osnovnemu pozivu za opis doda besedilo **zadnjega uporabniškega sporočila** (skrajšano na 500 znakov), s čimer opis usmeri k temu, kar je uporabnik dejansko zahteval (vzorec codex-vision-proxy), in od vidnega modela zahteva prepis vidnega besedila. Ko je zastavica izklopljena — ali ko ni uporabniškega besedila — se osnovni poziv uporabi nespremenjen.

Lastna zahteva OpenAI-združljivega samoklica za opis (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vedno zahteva `image_url.detail: "high"` —
brezpogojno, za vsakega klicatelja/ponudnika in neodvisno od kakršnega koli signala odjemalca.
Vzorčenje z nizko ravnjo podrobnosti poslabša natančnost OCR prav pri nalogi
prepisa besedila, ki jo zahteva ta poziv, zato sam klic za opis vedno zahteva
visoko raven podrobnosti, ne glede na raven podrobnosti izvirne vhodne zahteve. To
vpliva samo na telo interne zahteve za opis; ne spremeni načina, kako
OmniRoute posreduje klicateljev lastni `image_url.detail` v primarni zahtevi —
ta privzeta vrednost se uporabi ločeno in samo za zaznane odjemalce OpenCode, v
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Veja
samoklica za opis v žičnem formatu Anthropic nima polja `detail`
in nanjo ne vpliva nobena od teh privzetih nastavitev.

#### Omejitev izhoda opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Privzeto | Razpon            |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` ali 100–50000 |

`0` (privzeto) pomeni **brez omejitve** — opis, ki ga vrne
`callVisionModel()`, se posreduje nespremenjen, s čimer se ohrani obstoječe
vedenje. Vsaka vrednost v razponu 100–50000 skrajša opis in mu doda pripono
`…`, preden se vstavi nazaj kot `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
To vrednost zvišajte za naloge OCR z veliko podrobnostmi, pri katerih nadaljnji
model potrebuje celoten prepis; znižajte jo, da omejite porabo žetonov pri
preveč zgovornih vidnih modelih. Polje na nadzorni plošči je v razdelku Advanced
zavihka Vision (`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) in
vsako vrednost med 1 in 99 omeji navzgor na spodnjo mejo 100, medtem ko izrecno
vrednost `0` pusti nedotaknjeno — `0` je samostojna veljavna vrednost Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`) in ne zgolj
privzeta vrednost »ni nastavljeno«.

#### Predpomnilnik opisov (`modalityBridge/bridgeCache.ts`)

Procesno skupen predpomnilnik LRU + TTL v pomnilniku za izhode opisov.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z
okvirjanjem s predpono dolžine (brez kolizij na mejah polj). Komponenta modela
je **konfigurirani** premostitveni model in ne model, ki je dejansko odgovoril —
`callVisionModel` lahko interno uporabi nadomestni model, določanje ključa za vsak
poskus posebej pa bi razdrobilo predpomnilnik. Neuspešni opisi se nikoli ne
predpomnijo. Nastavitve:

| Ključ                           | Privzeto | Razpon  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalizacija oddaljenih slik (samoklic za opis/pridobivanje base64)

Ko most sam pridobi **oddaljeno** sliko — pri samoklicu za opis Anthropic in
pretvorbi v base64 za žični format Claude
(`ensureBase64ImagesForClaudeWire`), v obeh primerih prek
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — se nastali podatkovni
URI pred vdelavo v zahtevo vidnemu modelu posreduje skozi `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Prevelike slike se zmanjšajo tako, da je
**daljša stranica dolga 2048px** (kar ustreza omejitvi spreminjanja velikosti,
ki jo OpenAI/Anthropic že uporabljata na strežniški strani), s čimer se zmanjšata
količina podatkov za nalaganje in zakasnitev, ne da bi se spremenilo, kaj vidi
vidni model. Spreminjanje velikosti uporablja `sharp`, naložen z dinamičnim
uvozom: na platformi, kjer se njegove izvorne binarne datoteke ne naložijo,
`normalizeDataUri()` **nikoli ne sproži izjeme** — uporabi neposredno
posredovanje izvirnih bajtov, zato pot za opis/pretvorbo v base64 vedno deluje.
Tudi bajti, ki niso slika (pridobivanje ni vrnilo slike, ki bi jo bilo mogoče
dekodirati), se posredujejo nedotaknjeni. Ta normalizacija je omejena na slike,
ki jih most pridobi za svoj samoklic — nikoli se ne uporabi za klicateljevo
surovo neposredno posredovano koristno vsebino, kar je skladno z načelom
spreminjanja samo ob izrecni privolitvi (Hard Rule #20).

#### Shema nastavitev + migracija

Novi ključi `modalityBridge*` se preverjajo z Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojica `modalityBridgeCache*` in skupina
`modalityBridgeAudio*`, ki jo uporablja Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopira obstoječe podedovane vrednosti
`visionBridge*` v ustrezne nove ključe (idempotentno in brez prepisovanja
vrednosti `modalityBridge*`, ki jo je nastavil upravljavec); podedovani ključi
ostanejo še en cikel izdaje sprejeti kot nadomestni vir za branje.

#### Glava za preglednost + statistika

Odgovori, preoblikovani z opisom, vsebujejo
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sestavi jo `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
doda pa jo `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Preusmerjene zahteve **nimajo** glave — koristna vsebina je ostala nedotaknjena,
zamenjava modela pa je že vidna v polju `model` telesa odgovora.

`GET /api/modality-bridge/stats` (skrbniško preverjanje pristnosti, ista raven kot
`GET /api/settings`) vrne števce v pomnilniku za vsako modalnost
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` in
`video`. `averageLatencyMs` kot imenovalec uporablja `latencySamples`, ne vseh
poskusov; operacija brez merjenja časa ne ustvari lažnega vzorca z nič
milisekundami. `bridged` ostaja vzvratno združljiv vzdevek za uspešne
pretvorbe; neuspešni poskusi ga ne povečajo.
Števci se načrtno ponastavijo ob ponovnem zagonu procesa
(telemetrija, ne računovodstvo).

#### Konfiguracija nadzorne plošče

Namenska stran nadzorne plošče je
`/dashboard/settings/modality-bridge`. Njeni zavihki `Vision`, `Audio` in
`Video`, ki jih je mogoče neposredno nasloviti z URL-jem, pri preklapljanju
vrednosti `tab` ohranijo parametre poizvedbe.
Zavihek Vision omogoča omogočanje funkcije, izbiro načina in modela (vključno s
samodejno privzeto izbiro), pozivanje z upoštevanjem naloge, napredne omejitve
časovne omejitve/velikosti slike/dolžine opisa/predpomnilnika, števce izvajalnega
okolja in zaščiten vzorčni zahtevek. Tudi zavihek Audio je dejaven: omogoča
omogočanje funkcije, izbirnik modela samo za STT z možnostjo Auto, omejitve
časovne omejitve/največje dolžine posnetka, števce zvoka in vzorčni preizkus
`input_audio`. Zavihek Video je funkcionalen: prikazuje stanje izvajalnega okolja
FFmpeg/ffprobe — eno od štirih izrecnih stanj uporabniškega vmesnika (`unknown`,
dokler preverjanje poteka ali ga ni bilo mogoče dokončati, `restricted` pri
gostitelju nadzorne plošče, ki ni povratna zanka, kjer je preverjanje preskočeno
na strani odjemalca, `unavailable`, ko je bilo preverjanje izvedeno in je
odsotnost potrjena, ali `available` z različicama FFmpeg/ffprobe) — trajno shrani
nastavitve za omogočanje, model ter omejitve sličic/videa/časovne omejitve,
filtrira izbirnik modelov na modele, ki podpirajo vid, in prikazuje števce videa.

Prejšnja kartica Vision Bridge v nastavitvah AI je zdaj združljivostna povezava
do nove strani; ne vsebuje več druge kopije obrazca. Media Providers prav tako
povezuje poteka dela Image-to-Text in Speech-to-Text z ustreznima zavihkoma
Modality Bridge, ne da bi odstranil obstoječe preizkusno okolje Speech-to-Text.

**Obhod preverjanja sprejema pri povratni zanki:** ko je klic za opis usmerjen
prek lastne povratne zanke `/v1` storitve OmniRoute (nestandardni model
ponudnika), podzahtevek pošlje `x-omniroute-admission-bypass: internal` in se
overi z razrešenim poverilom povratne zanke — lokalnim nadomestnim poverilom
`sk_omniroute` v lokalnem načinu ali okoljskim ključem
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY`, ki ga konfigurira upravljavec (#1350),
tako da lahko uvedbe z `REQUIRE_API_KEY=true` še vedno izvedejo klic za opis.
Obhod je dovoljen samo za ta natančna poverila, zato zunanji odjemalci z uporabo
glave ne morejo preskočiti preverjanja sprejema.

Podedovane privzete vrednosti so v
`src/shared/constants/visionBridgeDefaults.ts`; nove privzete vrednosti za
način/upoštevanje naloge/predpomnilnik in razreševalnik nastavitev so v
`src/shared/constants/modalityBridgeDefaults.ts`. Varovalni mehanizem ponuja
možnost konstruktorja `deps`, da lahko preizkusi vstavijo lažne implementacije
`getSettings` in `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Prestrezanje zahtevkov za klepet, ki vsebujejo zvok, preden dosežejo cilj, za
katerega ni znano, da sprejema zvočni vhod. Zahtevek za klepet ni nikoli
preusmerjen: zvočni deli se prepišejo prek obstoječe večdelne končne točke,
združljive z OpenAI, izbrani model za klepet pa nadaljuje z besedilnimi prepisi.

Potek:

1. Razreši `supportsAudio` prek `getResolvedModelCapabilities()`. Izrecni
   metapodatki registra ponudnikov imajo prednost, sledijo statični metapodatki
   modela in nato sinhronizirani `modalities_input`. Deklariran seznam vhodov
   brez `audio` pomeni `false`; če ni dokazov o zmogljivosti, vrednost ostane
   `null`. Tako `false` kot `null` aktivirata konservativni most, medtem ko ga
   `true` obide.
2. Razreši nastavitve `modalityBridgeAudio*` in iz vsakega sporočila prek
   skupnega detektorja `detectMediaParts()` izlušči zamenljive zvočne dele na
   najvišji ravni. Podprte žične oblike so OpenAI `input_audio`, `audio_url` in
   `source.media_type: "audio/*"`. Ugnezdeni zvok je zaznan za usmerjanje, vendar
   ga pot zamenjave ne odstrani. Obseg dela omejuje
   `modalityBridgeAudioMaxClips`; poznejši deli ostanejo nespremenjeni.
3. Upošteva konfigurirani `provider/model` ali pa dovoli, da
   `selectAudioBridgeModel()` pregleda `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnem
   vrstnem redu kataloga in izbere prvi model z uporabnim aktivnim poverilom
   ponudnika.
4. `callAudioTranscription()` pretvori zvok base64/podatkovnega URI-ja v večdelno
   datoteko `file` ali prenese oddaljeni `audio_url` prek zaščite za odhodne
   povezave samo do javnih naslovov s pripenjanjem DNS in omejitvijo 25 MB. Nato
   pošlje datoteko in izbrani model z metodo POST lokalni povratni zanki
   `/v1/audio/transcriptions`, overjeni z `resolveSelfLoopBearer()`. Obstoječa
   pot za prepisovanje izvede običajno iskanje poveril, obravnavo obdobij
   mirovanja/omejevanja hitrosti in posredovanje ponudniku.
5. Uspešni klici svoje dele nadomestijo z `[Audio N]: <transcript>`. Klici se
   izvajajo z `Promise.allSettled`: posamezna napaka ohrani izvirni zvočni del
   (pogodba #4012). Če so vsi klici neuspešni in je dokazano, da ima cilj
   `supportsAudio === false`, deli postanejo
   `[Audio N]: (unavailable — no STT provider connected)` (pogodba #8430). Pri
   neznanem cilju (`null`) ostane rezultat, pri katerem so vsi klici neuspešni,
   nespremenjen. Dokazano samo besedilni cilj brez uporabnega poverila STT prejme
   enako izrecno nadomestno besedilo, ne da bi bil izveden omrežni klic.

Uspešni prepisi uporabljajo predpomnilnik LRU/TTL Modality Bridge za celoten
proces. Ključ združuje sklic na zvok, stabilno oznako operacije
`audio-transcription` in izbrani model STT; napake se nikoli ne shranijo v
predpomnilnik. Poskusi obdelave zvoka posodobijo skupne števce `bridged`,
`cacheHits`, `failures` in `lastUsedAt`. Preoblikovani odgovori vsebujejo
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nespremenjeni zahtevki ne prejmejo segmenta Audio Bridge.

Nastavitve izvajalnega okolja so shranjene v podatkovni zbirki in preverjene z
Zod:

| Ključ                         | Privzeto | Razpon                  |
| ----------------------------- | -------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                       |
| `modalityBridgeAudioModel`    | `""`     | Samodejno ali ID STT-ja |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                    |

Skupni predpomnilnik še naprej upravljajo `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` in `modalityBridgeCacheMaxEntries`.

### Most za video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Prestrezajo dele videa na najvišji ravni v `messages` zaključevanj klepeta in
`input` v API-ju Responses, preden je poklican ciljni sistem brez znane izvorne
podpore za video. Podprte oblike so `input_video`, `video_url`, `video_source`,
URL-ji HTTPS in podatkovni URI-ji `data:video/*;base64,...`. Navadna imena datotek
v besedilu se ne obravnavajo kot video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja pregled zahteve,
preverjanje zmogljivosti/pravilnika, združevanje posamezne zahteve in odzivno
vsebino. Delo za posamezen video — pridobivanje, predpomnilnik celotnega
rezultata, opisovanje zaporedja sličic (ki združi tudi morebitni zvočni prepis,
ki ga je navedel klicatelj) ter metrike/prekinitev/čiščenje za posamezen poskus —
je skrito za `processVideoPart` v `videoBridgePipeline.ts`, ki se pokliče enkrat
za vsak del videa znotraj zanke metode `preCall`. Ta modul določa tudi eksplicitne
meje vrat `VideoMediaBrokerPort` (pridobivanje bajtov in izločanje vzorčenih
sličic), `VideoAudioTranscriptionPort` (združevanje zvočnega prepisa, ki ga je
navedel klicatelj, z vzorčenimi napisi) in `VideoDrilldownPort` (meja trajnega
shranjevanja za podrobno analizo sličic; še ni povezana s `processVideoPart` —
danes vnose podrobne analize zapisuje samo ločena pot
`/api/modality-bridge/video/drilldown`).

Javna pot zahteve `/v1` nikoli ne uvozi ali prikliče podprocesa. Oddaljeni
videoposnetki se prenesejo z omejitvijo 50 MiB; videoposnetki base64 v vrstici
imajo konservativno omejitev dekodirane velikosti 36 MiB na video, da lahko
ovojnica modela/sporočil/uokvirjanja ostane znotraj javne omejitve sprejema
zahtev JSON, ki znaša 50 MiB. Dolžina v vrstici in ocene dekodirane velikosti se
preverijo pred dodelitvijo pomnilnika. HTTPS je zahtevan za začetni oddaljeni
URL in vsako preusmeritev, pri čemer se uporablja obstoječa zaščita za izhodne
povezave samo do javnih naslovov s pripenjanjem DNS. Bajti nato prečkajo natančno
notranjo posredniško mejo `POST /api/modality-bridge/video/extract`. Ta pot je
hkrati `LOCAL_ONLY` in `SPAWN_CAPABLE`, sprejme samo overjeno zahtevo zaupanja
vredne povratne zanke za posamezen proces ter nikoli ne sprejme URL-ja, poti
datotečnega sistema, izvršljive datoteke ali seznama argumentov. Cevovod
omejitve velikosti telesa API-ja in postopni bralnik telesa obravnavalnika
neodvisno uveljavljata omejitev posredniškega vnosa 50 MiB. Njegova omejena
čakalna vrsta izvaja eno izločanje naenkrat, dovoljuje štiri čakajoča opravila
in omejuje čakajoči vhod na 100 MiB.

Znotraj posrednika `ffprobe` bere zasebno lokalno datoteko; fiksni seznam
dovoljenih formatov izključuje formate seznamov predvajanja in manifestov. Za
dovoljene vsebnike družine MOV so zunanji sklici na podatke MOV privzeto še
naprej onemogočeni, fiksni ukaz pa njihove uporabe ne omogoči. Tako `ffprobe`
kot `ffmpeg` uporabljata seznam dovoljenih protokolov, omejen samo na `file`,
eno nit, fiksna polja argumentov, nobene lupine in izvršljive datoteke, razrešene
iz `PATH`. Tokovi naslovnih slik, priloženih videu, niso kandidati za
predvajanje. Vsi tokovi, ki jih je mogoče predvajati, morajo izpolnjevati
omejitve, eksplicitni privzeti tok pa ima prednost pred deterministično rezervno
izbiro toka z najnižjim indeksom. Videoposnetki so omejeni na 600 sekund, 8.192
slikovnih pik na dimenzijo in 33.554.432 izvornih slikovnih pik. FFmpeg vzorči
1–16 vmesnih sličic JPEG, zmanjša daljši rob na največ 1.024 slikovnih pik brez
povečevanja manjših vhodov in nikoli ne prejme URL-ja. Vzorčenje je privzeto
`uniform`. Izbirna pravilnika `scene_aware` in poskusni `segment_aware` izvedeta
en dodaten fiksni prehod FFmpeg čez že preverjeni lokalni tok, izbereta omejene
časovne žige prizorov `showinfo` in se ob napaki detektorja, časovni omejitvi,
nepravilno oblikovanem izhodu ali praznem naboru kandidatov deterministično
vrneta na iste enakomerne vmesne točke. Način, ki upošteva segmente,
sorazmerno dodeli vzorce vmesnih točk preverjenim intervalom prizorov; dokazi
na podlagi segmentov in rezervno vedenje so podrobno opisani spodaj. Stroga
omejitev 16 sličic se pri vsakem pravilniku uporabi po izbiri. Kadar ima zahteva,
ki upošteva prizore, proračun samo ene sličice, uporabi enakomerno vmesno točko
aktivnega okna celotnega videa ali okna fokusa in sporoči
`policyEffective: uniform`: ena sama izbrana sličica prizora ne more ohraniti
obeh časovnih koncev. Klicatelj lahko izbirno poda končno okno fokusa (`start`/
`end` v sekundah); meje se omejijo na trajanje medija, obrnjena ali nekončna
okna se zavrnejo, vsi pravilniki vzorčenja pa se izvedejo samo znotraj
normaliziranega intervala. Dobljeno okno je vključeno v metapodatke vzorčenja
in v nezaupanja vredno predpono opisa, da lahko modeli v nadaljevanju ločijo
osredotočen odlomek od celotne časovnice.

Semantični fokus napisov je ločena, eksplicitna nastavitev. Privzeti način
analize `full` ohrani obstoječi poziv za sličice in besedila zahteve nikoli ne
posreduje modelu za napise. V načinu `focused` most prebere samo najnovejši
neprazen `text`/`input_text`, ki ga je ustvaril uporabnik, iz istega vsebnika
Chat ali Responses, ga normalizira v NFC, strne nadzorne znake in presledke ter
omeji na 500 kodnih točk Unicode. Prazen rezultat se vrne na natančen poziv
`full`. Uporaben namig se serializira kot JSON v namenskem bloku konteksta
nezaupanja vrednega uporabnika in sme zgolj prednostno razvrstiti opazne
podrobnosti; ne more preglasiti ločenega opozorila, da se navodilom, vidnim ali
slišnim v mediju, ne sme slediti. Besedilni fokus nikoli ne sklepa vrednosti
`start`/`end` in ne spreminja časovnega vzorčevalnika.

#### FU-07 strukturni dokazi segmentov

`segment_aware` uporablja en omejen prehod predhodne analize nad že preverjenim
lokalnim videotokom. Fiksna veriga filtrov najprej zmanjša širino na največ 320
slikovnih pik, zazna spremembe prizorov in zamrznjene intervale, nato pa z 1
sličico na sekundo vzorči zamegljenost, povprečno svetilnost ter prostorske/časovne
informacije. Prehod je omejen na 600 strukturnih vzorcev, eno nit za
FFmpeg/filter, enake sezname dovoljenih protokolov samo za `file` in vsebnikov,
omejitev izhoda procesa 1 MiB ter največ 30 sekund znotraj posrednikove skupne
prekinitve/roka. Nikoli ne sprejme ukaza, filtra, poti ali URL-ja iz zahteve.

Strukturne vrednosti so deterministični dokazi vzorčenja in ne semantično
razumevanje videoposnetka. Ne sklepajo o subjektih, dejanjih, podnapisih, govoru
ali namenu uporabnika. Meje prizorov in zamrznitev tvorijo segmente; pokritost
zamrznitev, zamegljenost, osvetlitev, prostorske podrobnosti in časovne spremembe
vplivajo samo na razporeditev obstoječega proračuna 1–16 sličic. Popolnoma
zamrznjen segment je omejen na eno sličico, nezamrznjeni segmenti pa tekmujejo za
preostali proračun. Ko je mej več kot sličic, se ohrani enakomerna pokritost
časovnice, da hitri zgodnji rezi ne morejo skriti dolgega zaključnega segmenta.
Meje prizorov, ki so znotraj 1-sekundne ločljivosti analize glede na mejo
zamrznitve, se združijo.

Manjkajoči filtri, nepravilno oblikovani/prazni dokazi, napaka detektorja ali
časovna prekoračitev omejene predhodne analize sprožijo nadaljevanje z natančno
politiko enakomernih sredinskih točk. Prekinitev klicatelja ali rok posrednika ne
sproži takšnega nadaljevanja: konča podproces v izvajanju, prepreči poznejše
izločanje sličic, zasebno začasno drevo pa se odstrani v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ustvari deterministične dejanske
preskusne podatke FFmpeg za prihranek pri klicih za opise po odstranjevanju
dvojnikov, razporejanje proračuna pri gostem gibanju, dokaze o
zamegljenosti/osvetlitvi/SI-TI, hitre reze z dolgim zaključkom in lažno pozitivne
rezultate pri postopnem prelivu. Beleži stenski čas predhodne analize ter, kjer je
na voljo `/usr/bin/time`, procesorski čas podrejenega procesa in najvišjo porabo
RSS. Njegova preverjanja kakovosti so samo strukturna merila. Kakovost dejanskega
modela za opise ostaja `HOLD`, ker ta preskusni okvir nima pooblaščene končne
točke ali zamrznjenega ocenjevalnika. Tudi denarni prihranki ostajajo `HOLD`,
razen če `--caption-cost-per-call-usd` poda izrecno pozitivno oceno stroška na
klic; skript nikoli ne izmišljuje nobenega od teh rezultatov.

Vsaka sličica je omejena na 4 MiB, vse neobdelane sličice skupaj na 23 MiB,
serializiran odgovor posrednika pa na 32 MiB. Zasebni začasni imenik se odstrani
v `finally`. OmniRoute ne vključuje FFmpeg in ne sprejema poti do poljubne
izvedljive datoteke. Pred ustvarjanjem opisov most uporabi konservativen prehod
vizualnega odstranjevanja dvojnikov: vsak JPEG se zmanjša na sivinski medpomnilnik
16×16 in primerja samo z zadnjo ohranjeno sličico. Pri zahtevanem proračunu
opisov, večjem od ene sličice, izločanje zagotovi omejen nabor kandidatov z največ
dvakratnikom tega proračuna in nikoli več kot 16 sličicami. Zahtevana omejitev se
uporabi šele po odstranjevanju dvojnikov, pri končnem redčenju pa se ohranita prvi
in zadnji izbrani kandidat, kadar proračun znaša vsaj dve sličici. Različicena
politika `grayscale-16x16-mean-cells-v2` uporablja večjo vrednost med povprečno
razliko svetilnosti in deležem celic sličice, katerih normalizirana razlika znaša
vsaj 0,05. Prag za dvojnik je konstanta 0,04, izbrana zaradi predvidljivosti in
ne kot nastavitev, izpostavljena med izvajanjem. Ta sekundarni visokokontrastni
signal ohranja majhne premike in spremembe vidnega besedila, ki jih lahko
primerjava samo na podlagi povprečja skrije. Napake primerjalnika ali dekodirnika
sprožijo nadaljevanje in ohranijo pokritost. Metapodatki izhoda ločujejo izločene
kandidate, uspešno uporabljene sličice in odstranjene vizualne dvojnike.

Izrecno označeni videodel lahko zahteva kontaktni list s časovnimi oznakami. Most
sestavi mrežo JPEG z največ 4 stolpci in 16 sličicami. Vsaka celica velikosti 512
slikovnih pik vžge časovno oznako svojega vira v visokokontrastni spodnji pas,
iste časovne oznake pa ostanejo tudi v besedilnih metapodatkih za nadaljnje
povezovanje in revizijo. Celoten JPEG ostane omejen na 32 MiB. Če `sharp` ne more
dekodirati ali sestaviti mreže, most preklopi nazaj na posamezne sličice JPEG;
prekinitev odjemalca se še vedno prenese skozi operacijo kontaktnega lista.

Dokazi za napredovanje so namenoma ločeni od sintetičnega mikromerila uspešnosti
sestavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts` določa preskusni
okvir A/B z različico sheme za dejanske modele vida, združljive z OpenAI. Meri
žetone, ki jih poroča ponudnik, celotno stensko zakasnitev (vključno s
sestavljanjem kontaktnega lista), število klicev modela in ohranjanje dejstev,
določenih v manifestu. Neobdelani odgovori modela se ne zapišejo v poročilo;
ohranijo se samo izvlečki SHA-256 in ID-ji ujemajočih se dejstev. Preskusni okvir
ne izvede nobenega omrežnega ali plačljivega klica modela, razen če je podan
`--execute-real` in so konfigurirani `--model`, `OMNIROUTE_BASE_URL` ter
`OMNIROUTE_API_KEY`. Brez takšnega izrecnega dejanskega izvajanja ostane njegova
strojno berljiva razsodba `HOLD`; zgolj sintetične meritve koristne
vsebine/števila klicev niso dokaz za napredovanje.

Klicatelji lahko podprtemu videodelu dodajo izbirno polje `transcript.cues`, če
že imajo poravnano besedilo. Vsaka iztočnica mora vsebovati `text`, končen interval
`start`/`end` znotraj preverjenega trajanja in `source` z dovoljenega seznama
(`client`, `embedded` ali `audio-bridge`); `confidence` ima privzeto vrednost
`1` in mora ostati med `0` ter `1`. Povsem enake iztočnice se združijo.
OmniRoute iz teh metapodatkov nikoli ne začne prepisovanja: preverjene iztočnice
se kopirajo v opisani rezultat z virom, zaupanjem in intervalom ter se skupaj z
opisi sličic prikažejo kot nezaupanja vredna opažanja. Neveljavno besedilo,
besedilo zunaj razpona ali besedilo brez izvora se zavrne, namesto da bi se
vmešalo v tok opisov. Oba kanala prepisa v telesu zahteve normalizirata podani
izvor na `client`, vključno s samodeklariranimi oznakami `embedded` ali
`audio-bridge`. Samo strežniški adapter lahko te zaupanja vredne oznake dodeli
prek argumenta `trustedSource`, dostopnega samo iz kode; polje JSON v zahtevi ne
more doseči tega argumenta. Besedilo prepisa ostaja nezaupanja vredna vsebina,
izpeljana iz predstavnosti, ne glede na njegov izvor, in nikoli ne sme določati
avtorizacije.

Napredni klicatelj lahko za isti videoposnetek posreduje sled `audioTranscript`;
ta se obravnava kot besedilo, ki ga je posredoval odjemalec, in ne kot dokaz strežniškega prepisa.
Točka združevanja izvaja vizualna in zvočna opazovanja znotraj
enega roka in z enim signalom za prekinitev, jih razvrsti na skupni časovnici, združi
popolnoma enake dvojnike in sporoči delni rezultat, kadar uspe samo ena stran.
Neveljaven `audioTranscript` se pretvori v takšen delni rezultat — vizualni
opis se ohrani, zvočna veja pa zabeleži očiščeno kodo napake —
namesto da bi obdelava celotnega videoposnetka spodletela. Razpoložljivost posameznih vej, zastavica delnega rezultata
in očiščene kode napak se ohranijo v opisanem rezultatu, v
metapodatkih varovala (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metapodatkih predpomnilnika rezultatov in v števcih
združevanja mostu. Privzeta pot Video Bridge ne prikliče pretvorbe govora v besedilo
in ne prenese druge kopije predstavnostne vsebine; brez te izrecne sledi ostane
omejena samo na videoposnetek.

**Hramba prepisa (#12150 P1).** To se samodejno uporabi vedno, ko
Video Bridge (ki ga je treba posebej omogočiti) upodobi iztočnico prepisa — ločena
zastavica za hrambo ne obstaja. Ko zahteva upodobi katero koli iztočnico prepisa (s strani klicatelja navedeni
`transcript` ali združeni `audioTranscript`), jo varovalo označi z
`videoBridgeObserved` in ustvari redigirano senčno kopijo opisa videoposnetka —
enako upodobitev, v kateri je telo prostega besedila vsake iztočnice nadomeščeno z
`[redacted-video-transcript]`; ta nastane z zamenjavo strukturiranega polja iztočnice,
preden se sestavi niz (nikoli z razčlenjevanjem sploščenega besedila, zato se nobena vsebina
iztočnice — zlonamerna ali običajna, vključno s telesi, ki vsebujejo `]`, kot sta
`[inaudible]`/`[music]` — ne more ohraniti). Telo zahteve v trajno shranjenem dnevniku klicev zamenja
vsak besedilni del, izpeljan iz videoposnetka, s to redigirano senčno kopijo, pri čemer se ujemanje
izvede po enakosti vsebine; sidro `fullText` se znova prebere iz dokončane vsebine
varovala pred klicem, tako da ujemanje uspe tudi po tem, ko poznejša verižna varovala (maskirniki osebno določljivih podatkov in
poverilnic s prioritetama 10/95) prepišejo besedilo opisa na mestu, ter
po tem, ko vstavljanje sistemskega poziva/predaje/pomnilnika preoblikuje polje sporočil. Telo,
poslano modelu v nadaljnjo obdelavo, ostane nespremenjeno. Opazovana zahteva prav tako ne napolni
trajnega pomnilnika Memory (pridobivanje iz zahteve in odgovora se preskoči),
zato modelov lastni odgovor ne more ponoviti besedila prepisa v Memory.

**Neobdelana polja videoposnetka (#12430).** Ko je most omogočen in je izvorna podpora za videoposnetke neznana ali je ni, definirani polji `transcript`/`audioTranscript` prav tako aktivirata `videoBridgeObserved`, tudi po neuspelem opisovanju ali omejitvi `maxVideos`. `null` in prazni nizi štejejo; odsotna polja in metapodatki, ki niso povezani z videoposnetkom, ne štejejo. V shranjenih kopijah se ta polja redigirajo ali pa se zahteva izpusti, predpomnilniki/Memory pa se obidejo.

Na teh nadomestnih poteh veljavne iztočnice klicatelja postanejo podprti deli `text`/`input_text`
namesto nestandardnih polj ponudnika. Obe sledi, posredovani z zahtevo,
ostaneta nezaupanja vredni opazovanji `client`, z izrecnim opozorilom, da videoposnetek
ni bil opisan in da časovni žigi niso bili preverjeni glede na predstavnostno vsebino. Obstoječe
omejitve 256 iztočnic/64 KiB skupaj in omejitve posamezne iztočnice veljajo za obe sledi skupaj;
časovni žigi morajo biti znotraj posrednikove zgornje meje 600 sekund in morebitnega podanega
okna osredotočenosti. Neveljavne sledi se zavržejo in se ne posredujejo kot poljubno besedilo; veljavna
sorodna sled se lahko še vedno uporabi, razen če je njuna skupna omejitev presežena. Ničelna/prazna
polja ne dodajo besedila. Ta nadomestna pot ne doda pridobivanja predstavnostne vsebine ali prepisovanja.
Razširitvena polja prepisa se odstranijo iz nadomestnega nosilca videoposnetka in njegovih
objektov `video_url`/`source`. Seznam dovoljenih vrednosti za prenosni format OpenAI ostane strog; izvorni
nosilci videoposnetkov z neznano podporo ostanejo na voljo, znani cilji samo z besedilom pa ohranijo varne označevalnike.
Strukturirane redigirane senčne kopije zaščitijo dodano besedilo prepisa, izvirna
zahteva, ki je v lasti klicatelja, pa ostane nespremenjena. Cilji z izvorno podporo in
onemogočeni mostovi ohranijo obstoječe obnašanje obhoda.

Dodatne shranjene kopije uporabljajo isti signal opazovane zahteve. Neobdelani
posnetek odjemalčeve zahteve pred varovalom, čakajoča zahteva v pomnilniku in dnevnik zgodaj
zavrnjene zahteve strukturno nadomestijo polja prepisa v delih videoposnetka;
nizovni pozivi, ki jih sintetizirajo stopnje cevovoda in predaja konteksta, se redigirajo
na ponoru trajno shranjenega telesa zahteve. Trajno shranjeni označevalnik `video_content_removed`
povzroči, da se nadaljevanje `previous_response_id` varno zaključi z napako, namesto da bi rekonstruiralo
besedilo, ki je bilo namenoma zavrženo. Če opazovana zahteva pred beleženjem izgubi svojo
redigirano senčno kopijo posameznega dela ali če se po poznejših spremembah zahteve ne ujema
celo ena od več senčnih kopij videoposnetkov, se shranjeno telo zahteve
v celoti izpusti, namesto da bi se shranil delno redigiran prepis.

Pri opazovani zahtevi lahko odgovor modela navede kateri koli del
prepisa brez strukturirane meje iztočnice. Njegov trajno shranjeni `responseBody`
v dnevniku klicev se zato nadomesti z označevalnikom izpustitve; podroben
artefakt cevovoda (ki lahko vključuje telesa ponudnika/odjemalca in pretočne dele)
se ne shrani. Semantični predpomnilnik, predpomnilnik idempotentnosti in predpomnilnik ponovnega predvajanja sklepanja
za to zahtevo obidejo branja in pisanja. Zahteva ponudniku in odgovor,
viden odjemalcu, ostaneta nespremenjena. Zgodnji bajti za ohranjanje povezave se izpraznijo iz začasnega
medpomnilnika, ko se podrobni artefakt izpusti. Kirovo opozorilo o nepravilno oblikovanem EventStream
sporoči samo število bajtov vsebine, nikoli pa njene vsebine ali neobdelane napake
razčlenjevalnika JSON.
To ne pomeni, da je bila pregledana vsaka nepovezana diagnostika ponudnika/vtičnika;
širši pregled ponorov shranjenih podatkov se spremlja v #11658.

Notranji življenjski cikel `/api/modality-bridge/video/drilldown` je ločena predpomnilniška podlaga, overjena prek povratne zanke/žetona. Vsaka operacija zahteva tudi kanonični neprosojni ID glavnega subjekta. Preden je produkcijskemu klicatelju omogočena uporaba, mora ta ID izpeljati iz overjenega najemnika in nikoli ne sme posredovati vrednosti, ki jo izbere odjemalec. Ključi predpomnilnika vežejo ta glavni subjekt na kanonične ID-je seje in reference videoposnetka, shranjujejo samo njihove ključe, izpeljane s SHA-256, ter omejujejo tako branje kot brisanje na isti glavni subjekt. Predpomnilnik shrani največ 16 izpeljanih sličic JPEG na vnos, po desetih minutah jim veljavnost poteče ter podpira omejena branja `start`/`end` ali izrecno brisanje seje.

Vsak glavni subjekt je omejen na 16 vnosov in 64 MiB kanoničnih podatkov JPEG. Te omejitve so neodvisne od globalne zgornje meje 64 vnosov/256 MiB: pritisk na kvoto glavnega subjekta najprej odstrani samo njegove najmanj nedavno uporabljene vnose, preden se upošteva globalno odstranjevanje LRU. Vnosi s pretečeno veljavnostjo se ob dejavnosti predpomnilnika odstranijo tako iz obračuna glavnega subjekta kot iz globalnega obračuna, medtem ko preklic in neuspešno preverjanje veljavnosti ne uveljavita delne zamenjave.

Predpomnilnik zavrne nekanonični Base64, odvečno dopolnjevanje, predstavnostne vsebine, ki niso JPEG, nepravilno oblikovane ali okrnjene datoteke JPEG ter datoteke JPEG, ki med omejenim dekodiranjem celotne slike s `sharp` ustvarijo opozorilo. Vsako sprejeto sliko znova kodira kot kanonični JPEG, širino in višino izpelje iz dekodiranih bajtov, namesto da bi zaupal poljem klicatelja, ter zavrže vse končne poliglotske bajte, namesto da bi jih ohranil. Obe kvoti se bremenita samo za omejeni kanonični stisnjeni medpomnilnik. Omejitev prenosa JSON vključuje pribitek Base64 za zgornjo mejo dekodiranega vhoda 32 MiB. Vsaka shranjena izpeljava beleži preverjene obliko/ločljivost JPEG, pravilnik vzorčenja, različico izpeljave, čas ustvarjanja, zgoščeno vrednost vsebine, ki jo izračuna strežnik, ter zgoščeno nadrejeno referenco skupaj z zgoščeno vrednostjo nadrejene vsebine zaupanja vrednega klicatelja. Preklic se preveri med asinhronimi fazami dekodiranja/izračunavanja zgoščene vrednosti pred atomsko uveljavitvijo v predpomnilnik.

Ta sklop še ne povezuje produkcijskega proizvajalca s potjo in ne omogoča izbire različic z več ločljivostmi. Transparentna pot zahteve Video Bridge zato ne povzroča dodatnega dela, medtem ko izpeljava glavnega subjekta, vezanega na najemnika, in celoten večločljivostni življenjski cikel FU-08 ostajata izrecno nadaljnje delo, namesto da bi bila dokumentirana kot dokončano delovanje.

Sličice so zaporedno opisane z nastavljenim modelom Video. Prazna preglasitev Video podeduje nastavitev Vision; če sta obe prazni, samodejni usmerjevalnik Vision izbere dejanski model, ki podpira vid. Uspešni opisi zamenjajo izvirni del s stabilno predpono `[Video description:`, ki besedilo označi tudi kot nezaupanja vredno opažanje, izpeljano iz predstavnostne vsebine, in nadaljnjim modelom naroči, naj ne upoštevajo navodil, najdenih v predstavnostni vsebini. Ključi predpomnilnika opisov sličic vključujejo bajte JPEG, poziv, časovni žig in dejanski model; predpomnijo se samo uspešni opisi. Vnosi predpomnilnika ohranijo dejanski uspešni model proizvajalca, vključno z nadomestnim modelom; most sporoči `mixed`, kadar so različne sličice ustvarili različni modeli. Zadetek v predpomnilniku ponovno uporabi identiteto tega proizvajalca, namesto da bi jo na novo označil kot zahtevani načrt usmerjanja. Predpomnilnik rezultatov celotnega videoposnetka uporablja ključ, sestavljen iz vseh vhodov, ki spreminjajo izhod — poziva, dejanskega modela, pravilnika vzorčenja, števila sličic, načina semantične analize, prstnega odtisa SHA-256 normaliziranega namiga za osredotočenje, okna osredotočenja, `transcript`, `audioTranscript` in zastavice kontaktnega lista — zato sprememba katere koli od teh razsežnosti povzroči zgrešitev predpomnilnika, nikoli ponovne uporabe zastarelega vnosa. Različica pravilnika vizualnega odstranjevanja dvojnikov, prag in omejeno število kandidatnih sličic so prav tako izrecno vključeni v ključ in metapodatke predpomnilnika rezultatov; sprememba pravilnika zato ne more ponovno uporabiti zastarelega opisa celotnega videoposnetka. Metapodatki v4 predpomnilnika rezultatov ohranijo način in prstni odtis, nikoli pa ne neobdelane uporabniške naloge. Metapodatki varovalnih mehanizmov poročajo tako o zahtevanem kot o dejanskem načinu analize; zahtevani način `focused` brez uporabnega uporabniškega besedila se sporoči kot dejansko `full`.

Varovalni mehanizem izvleče vsak podprti del videoposnetka, vendar jih opiše največ `modalityBridgeVideoMaxVideos`. Pri cilju, za katerega je dokazano, da ima `supportsVideo === false`, neuspešni videoposnetki in videoposnetki nad omejitvijo postanejo izrecne varne besedilne oznake, tako da ne preživi noben neobdelan videoposnetek. Kadar zmožnost ni znana, ti deli ohranijo svoj nosilec videoposnetka; vsak nadomestni prepis sledi zgoraj opisani omejeni pretvorbi besedila. Cilji z `supportsVideo === true` obidejo most. Signal za prekinitev odjemalske zahteve se razširi skozi prenos, čakalno vrsto posrednika, podprocese in klice za opisovanje; prekinitve ustavijo obdelavo med videoposnetki in nikoli ne dopustijo nadaljevanja z neobdelano predstavnostno vsebino.

Nastavitve izvajalnega okolja so shranjene v zbirki podatkov in preverjene z Zod:

| Ključ                               | Privzeto    | Razpon / vedenje                                                                                         |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Izbirno izvajalno okolje, zahteva izrecno omogočitev                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ohrani splošne napise; `focused` uporablja omejen, nezaupanja vreden kontekst zadnjega uporabnika |
| `modalityBridgeVideoModel`          | `""`        | Podeduje model Vision Bridge                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ali sorazmerni `segment_aware`; ob napaki detektorja se uporabi `uniform`       |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                           |

Starejše trajno shranjene vrednosti časovne omejitve za video, višje od 120 sekund, so omejene na
rok posrednika; novi zapisi nastavitev nad to omejitvijo so zavrnjeni.
`GET /api/modality-bridge/video/runtime` pred preverjanjem pristnosti ali izvajalnega okolja zahteva
zaupanja vredno in označeno lokalnost povratne zanke, nato pa še skrbniško
avtentikacijo. Vrne samo `available`, prečiščene različice FFmpeg/ffprobe in nespremenljiv
razlog, kadar izvajalno okolje ni na voljo. Notranja končna točka za izvlečenje ni
javni API za nalaganje: ob zapolnitvi čakalne vrste vrne `503` skupaj z `Retry-After`, ob
prekinitvi povezave klicatelja vrne `499`, ob izteku nespremenljivega roka posrednika pa `504`. Pretvorjeni odgovori dodajo
`video->text;model=<visionModel>;parts=<videos>` v osrednjo
glavo `x-omniroute-modality-bridge`, ne da bi odstranili segmente Vision ali Audio.

### Maskirnik osebno določljivih podatkov (`piiMasker.ts`)

Izvaja se v **obeh** fazah.

- **`preCall`** klonira koristno vsebino, prehodi `system`, `messages`, `input` in
  `prompt` (vključno z elementi v obliki navadnih nizov) ter uporabi `processPII()` (iz
  `@/shared/utils/inputSanitizer`) za polja nizov `content`/`text`. Ko je
  `PII_REDACTION_ENABLED=true`, so zaznani osebno določljivi podatki redigirani v odhodni
  koristni vsebini. To je neodvisno od `INPUT_SANITIZER_MODE` (ki nadzira samo
  pravilnik vbrizgavanja pozivov). Ko je redigiranje izklopljeno, klic zabeleži število
  zaznav, ne da bi prepisal vsebino.
- **`postCall`** globoko klonira odgovor ter izvede `sanitizePIIResponse()` in
  maskirnik oblike Responses API (`maskResponsesOutput` — zajema
  `output_text` in `output[].content[].text`). Če pride do redigiranja,
  spremenjeni odgovor nadomesti izvirnega.

Varnostna omejitev nikoli ne blokira; samo doda opombe (`meta.detections`,
`meta.redacted`) ali prepiše vsebino.

### Vbrizgavanje pozivov (`promptInjection.ts`)

Zaznava sovražne strukture v vsebini, ki jo posreduje uporabnik, in uveljavlja
konfigurirani pravilnik. Vedenje določajo okoljske spremenljivke in možnosti
konstruktorja:

| Nastavitev      | Okoljska spremenljivka                                                                                   | Privzeto | Učinek                                                                                                                                                                                                                         |
| --------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omogočeno       | `INPUT_SANITIZER_ENABLED`                                                                                | `true`   | Ko je nastavljeno na `false`, se varnostna omejitev nemudoma zaključi.                                                                                                                                                         |
| Način           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`   | Pravilnik vbrizgavanja: `block`, `warn` ali `log`. (`redact` je sprejet zaradi združljivosti za nazaj, vendar **ne** odstrani besedila vbrizga; prepis osebno določljivih podatkov v zahtevi nadzira `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | Možnost `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (vzdevek `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Najnižja stopnja resnosti, potrebna za blokiranje. Srednja stopnja pri privzeti nastavitvi omogoča samo opazovanje.                                                                                                            |

**Prednostni vrstni red načinov** (`getMode`): klicateljev `options.mode` →
**preglasitev zastavice funkcije v podatkovni zbirki** za `INJECTION_GUARD_MODE` (Nadzorna plošča → Nastavitve →
Zastavice funkcij) → okoljska spremenljivka `INJECTION_GUARD_MODE` → okoljska spremenljivka `INPUT_SANITIZER_MODE` →
`warn`. Preglasitev na nadzorni plošči ima zato prednost pred okoljskimi spremenljivkami, tako da uporabniški
vmesnik Zastavice funkcij sproti nadzira delujočo varnostno omejitev (brez ponovnega zagona). Branje podatkovne zbirke je varno ob napaki:
če pride do napake, varnostna omejitev uporabi vedenje na podlagi okoljskih spremenljivk; kadar
preglasitev ni nastavljena, pa je vedenje enako razreševanju samo na podlagi okoljskih spremenljivk.

Viri zaznavanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (skupni nabor detektorjev,
   uporabljen tudi drugje v cevovodu).
2. Vgrajeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` in
   `markdown_system_block`, oba z resnostjo `high`).
3. Izbirni `customPatterns`, posredovani prek možnosti konstruktorja (nizi, regularni izrazi
   ali zapisi `{ name, pattern, severity }`).

Ko je `mode === "block"` **in** vsaj ena zaznava doseže prag resnosti,
`preCall` vrne `{ block: true, message: "Request rejected:
suspicious content detected" }`. V načinih `warn`/`log` varovalo beleži dogodek,
vendar dovoli klic. Skupna pomožna funkcija `evaluatePromptInjection()` je prav tako izvožena
za klicatelje, ki morajo ovrednotiti pozive brez uporabe registra.

**Omejitev pregledovanja (v3.8.20):** detektor pregleda samo **prvih 16 KB**
združenega besedila poziva — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Tako `detectInjection()` kot
`evaluatePromptInjection()` pred izvajanjem zanke vzorcev uporabita
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Navodila za vrivanje so običajno blizu vrha vnosa, zato
to omeji porabo CPE/pomnilnika GC pri koristnih vsebinah velikosti več sto KB, ne da bi oslabilo zaznavanje (glejte
#3932, #4041).

### Maskiranje poverilnic (`credentialMasker.ts`)

Izvaja se v **obeh** fazah, zadnje v privzeti verigi (prioriteta `95`). Iz odhodne
koristne vsebine (vsebine sporočila, argumentov klica orodja, rezultatov orodja) **in**
odgovora ponudnika odstrani dobro znane vzorce ključev API / skrivnih žetonov, tako da
poverilnica, prilepljena v poziv (ali vrnjena v rezultatu orodja), ne uide
zunanjemu ponudniku ali nazaj odjemalcu.

- **Samo z izrecno vključitvijo**, enak dogovor kot pri redigiranju osebnih podatkov (v povezavi s strogim pravilom št. 20):
  onemogočeno, razen če je `settings.credentialRedactionEnabled === true` **ali**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ko je izklopljeno, varovalo ne naredi ničesar —
  nikoli ne blokira in nikoli ne prepisuje.
- `redactCredentials()` prehodi celotno drevo koristne vsebine/odgovora (`walkValue()`,
  varno pred onesnaženjem prototipa, varno pred cikli prek `WeakSet`) in zamenja zadetke z
  označbo `[REDACTED:<type>]`, pri čemer klonira samo veje, ki so se dejansko
  spremenile.
- `CREDENTIAL_PATTERNS` pokriva ključe ponudnikov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), žetone VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), plačilne ključe (Stripe, Square), ključe
  storitev v oblaku (dostopni ključ AWS, Twilio, SendGrid, Mailgun), zasebne ključe / JWT-je,
  povezovalne nize, ki vsebujejo poverilnice (`mongodb://user:pass@...` itd.), in
  splošen vzorec vrednosti glave `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključi v obliki glav (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se redigirajo strukturno (samo vrednost, predpona sheme, kot je
  `Bearer `/`Basic `, se ohrani), ne pa prek splošnega besedilnega regularnega izraza.
- Varovalo nikoli ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) in dodaja metapodatke (`meta.credentialsRedacted`, `meta.count`).

Regresijsko varovalo: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovna pogodba (`base.ts`)

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
  block?: boolean; // vrednost true prekine verigo
  message?: string; // prikazano ob blokiranju
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrne preCall za preoblikovanje zahteve
  modifiedResponse?: TValue; // vrne postCall za preoblikovanje odgovora
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

Varovalo sporoči »brez spremembe« tako, da vrne `void`, `{}` ali
`{ block: false }`. Vrnitev `modifiedPayload`/`modifiedResponse` zamenja
vrednost, ki teče skozi verigo do naslednjih varoval.
`signal?: AbortSignal` posreduje življenjski cikel klicatelja varovalom. Prekinitev zahteve je namerna izjema s pristopom »fail-open«: predstavnostni mostovi ustavijo delo in počistijo vire, ne da bi obnovili neobdelano predstavnost za cilj, za katerega je znano, da je ne podpira.

## Register (`registry.ts`)

Edinec `guardrailRegistry` izpostavlja:

- `register(guardrail)` — doda varovalo (ali ga zamenja glede na normalizirano ime) in
  znova razvrsti varovala po naraščajoči vrednosti `priority`.
- `clear()` / `list()` — skrbniški pomožni funkciji.
- `runPreCallHooks(payload, context)` — gre skozi aktivna varovala, posreduje
  koristno vsebino prek `modifiedPayload` in se ustavi pri prvem `block: true`.
- `runPostCallHooks(response, context)` — enak potek na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — počisti stanje in po želji
  znova registrira privzete nastavitve za čisto izolacijo preizkusov.

Oba izvajalnika vrneta `{ blocked, payload|response, results, guardrail?, message? }`,
pri čemer je `results` polje zapisov `GuardrailExecutionResult`, ki vključujejo
polja `blocked`, `skipped`, `modified`, `error` in `meta` za vsako varovalo,
kar je uporabno za sledenje.

### Onemogočanje varoval za posamezno zahtevo

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` zbere
podvojenih vrednosti očiščen seznam imen varoval, ki jih je treba preskočiti za trenutno
zahtevo. Viri (vsi izbirni, vsi združeni):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v telesu zahteve (na najvišji ravni)
- `metadata.disabledGuardrails` v telesu zahteve
- Glava `x-omniroute-disabled-guardrails` (ali starejša
  `x-disabled-guardrails`)

Vrednosti so lahko polja nizov ali niz, ločen z vejicami; imena so
normalizirana v male črke in zapis kebab-case (`pii_masker` → `pii-masker`). Rezultat
se prek `context.disabledGuardrails` posreduje registru, ki preskoči
ujemajoča se varovala (`skipped: true` v `results`).

## Vrstni red izvajanja

Za vsako zahtevo, ki teče skozi `src/sse/handlers/chat.ts` in
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sestavi seznam za preskok na podlagi ključa API, telesa
   in glav.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izvede varovalne mehanizme po naraščajočem
   vrstnem redu prioritete:
   - Onemogočeni varovalni mehanizmi so zabeleženi kot `skipped`.
   - `preCall` vsakega varovalnega mehanizma lahko prepiše koristno vsebino prek `modifiedPayload`.
   - Prvi `block: true` prekine verigo, obravnavalnik pa vrne
     odgovor o zavrnitvi s strani varovalnega mehanizma.
3. (Morebiti prepisana) koristna vsebina se posreduje kombiniranemu usmerjanju in
   pošiljanju nadrejenemu ponudniku.
4. Ko je odgovor sestavljen, `guardrailRegistry.runPostCallHooks(...)`
   izvede isto verigo nad odgovorom. `block: true` na tej točki zavrže odgovor
   nadrejenega ponudnika.

Varovalni mehanizmi, ki sprožijo izjemo, so zabeleženi z `error: <message>` in zapisani v dnevnik prek
`logger.warn`, vendar se veriga nadaljuje — zasnovano po načelu odprtega odpovedovanja.

## Konfiguracija

Spremenljivke okolja, ki jih berejo vgrajeni varovalni mehanizmi:

| Spremenljivka                         | Uporablja jo                 | Učinek                                                                                                                       |
| ------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`           | Nastavite na `false`, da zaznavanje v celoti onemogočite.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`           | Pravilnik za vrivanje: `warn`, `block` ali `log`. Podedovana vrednost `redact` ne prepisuje vrinjenega besedila.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`           | Način za zaščito pred vrivanjem; tudi zastavica funkcije v zbirki podatkov, ki **preglasi** spremenljivke okolja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`           | Najnižja stopnja resnosti, ki jo `MODE=block` zavrne: `high` (privzeto), `medium` ali `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`           | Podedovan vzdevek za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`                 | Ko je nastavljeno na `true`, se podatki PII v zahtevi zakrijejo (neodvisno od načina vrivanja).                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nadaljnji tok) | Nadzira vedenje prikrivanja na strani odgovora.                                                                              |

Varovalni mehanizmi Modality Bridge berejo izvajalno konfiguracijo iz shrambe
nastavitev, podprte z zbirko podatkov (`getSettings()`), in ne iz spremenljivk okolja. Primarni ključi za slikovni način so
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` in
`modalityBridgeCacheMaxEntries`. Podedovani ključi
`visionBridge*` so sprejeti samo kot dokumentiran nadomestni način branja za en cikel;
zapisi nadzorne plošče uporabljajo primarne ključe. Privzete vrednosti in razreševalnik nadomestnih vrednosti
so v `src/shared/constants/modalityBridgeDefaults.ts`, podedovane
konstante pa so ohranjene v `src/shared/constants/visionBridgeDefaults.ts`.

Zvok uporablja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` in `modalityBridgeAudioMaxClips` ter skupne
nastavitve `modalityBridgeCache*`. Zvok nima nadomestnega branja podedovanih ključev, ker so bili ti
ključi uvedeni s shemo Modality Bridge.

Video uporablja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` in
`modalityBridgeVideoTimeout` ter skupne nastavitve `modalityBridgeCache*`.
Privzeto je onemogočen, ker sta FFmpeg/ffprobe izbirni operativni
odvisnosti, opisovanje sličic pa poveča zakasnitev in stroške modela.

## Zaščitni mehanizmi po meri

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

Koraki:

1. Ustvarite `src/lib/guardrails/myGuardrail.ts`, ki razširja `BaseGuardrail`.
2. Implementirajte `preCall` in/ali `postCall`.
3. Registrirajte ga bodisi ob uvozu (dodajte ga iz `registerDefaultGuardrails`) bodisi
   med izvajanjem pokličite `guardrailRegistry.register(...)` — register zamenja
   vsak predhodni zaščitni mehanizem z enakim normaliziranim imenom.
4. Dodajte teste v `tests/unit/` (obstoječi primeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Med testi uporabite `resetGuardrailsForTests()`, da začnete iz znanega stanja.
Posredujte `{ registerDefaults: false }`, da začnete s praznim registrom in
registrirate samo zaščitne mehanizme, ki jih testirate. Vision Bridge podpira vstavljanje
odvisnosti (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge ponuja
enakovredne priključne točke za nastavitve, zmogljivosti, izbiro modela STT, preverjanje
poverilnic in prepisovanje. Testi lahko zato preverjajo oba poteka brez dostopa do
podatkovne zbirke ali omrežja.

## Glejte tudi

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — skupni detektor, ki omogoča
  zaznavanje vbrizgavanja pozivov in maskiranje osebno določljivih podatkov
- `src/shared/constants/visionBridgeDefaults.ts` — privzete nastavitve Vision Bridge in
  seznam modelov s prisilno uporabo mostu
- `src/shared/constants/modalityBridgeDefaults.ts` — skupne privzete nastavitve izvajalnega okolja Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — neodvisna plast (varovalka, obdobja mirovanja)
- `docs/reference/ENVIRONMENT.md` — celoten pregled spremenljivk okolja

## Pokritost poti z zaščito pred vbrizgavanjem in red-team testiranje (8. faza · sklop D)

Zaščita pred vbrizgavanjem (`createInjectionGuard` / `withInjectionGuard`) pokriva vse poti,
ki sprejemajo uporabniške pozive. Upošteva `INJECTION_GUARD_MODE` (privzeto `warn` = samo beleženje;
`block` = vrne HTTP 400 `SECURITY_001`).

| Vrsta                | Poti                                                                                                                                                 | Privzeti način |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Besedilo (obstoječe) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativno          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Podatki              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Izločanje besedila (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testiranje (vsako noč, `nightly-llm-security.yml`):** promptfoo preverja, ali vsaka pot blokira
korpus OWASP-LLM v načinu `INJECTION_GUARD_MODE=block`; garak izvaja sonde (brez skrivnosti se preskoči).
Pot `moderations` je vključena zaradi doslednosti — upravljavci jo lahko v načinu blokiranja izvzamejo prek
`resolveDisabledGuardrails`.

Nočni delovni tok (`.github/workflows/nightly-llm-security.yml`, cron + ročni
zagon) ima dve opravili:

- **`promptfoo-guard` (blokirajoče)** — izvede `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Vsak nasprotniški primer (npr. »prezri vsa
  prejšnja navodila …«, poskusi pobega iz omejitev v slogu DAN) preveri, ali odgovor vsebuje
  `error.code === "SECURITY_001"`, tj. ali je zaščita dejansko zavrnila zahtevo.
- **`garak` (svetovalno)** — izvede garak `--probes promptinject,dan,leakreplay`
  proti lokalnemu primerku OmniRoute (`http://localhost:20128/v1`). Pogojeno je s
  skrivnostjo ponudnika (`PROMPTFOO_PROVIDER_KEY`); brez nje se elegantno preskoči, ukaz pa ima pripono
  `|| true`, zato poroča, ne da bi povzročil neuspeh CI.

Pokritost pomožne funkcije zaščite (`createInjectionGuard` / `withInjectionGuard`)
obsega vse poti `/v1`, ki sprejemajo pozive; besedilo poziva se pridobi iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` s funkcijo
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
