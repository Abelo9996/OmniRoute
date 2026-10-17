# Guardrails (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Pirminis tiesos šaltinis:** `src/lib/guardrails/`
> **Paskutinį kartą atnaujinta:** 2026-08-29 — v3.8.51 („Video Bridge“ transkripcijos kilmę deklaruoja iškvietėjas,
> serveris jos dar nepatvirtina — patikslinta pagal #11661)

Apsaugos priemonės užtikrina saugos, politikos ir turinio transformacijas ties
riba tarp „OmniRoute“ ir išorinių teikėjų. Kiekviena apsaugos priemonė gali tikrinti
(ir pasirinktinai atmesti, transformuoti arba anotuoti) užklausų naudingąsias apkrovas (`preCall`) ir
išorinių teikėjų atsakymus (`postCall`).

Sistema yra **fail-open**: jei vykdant apsaugos priemonę įvyksta išimtis, registras
įrašo klaidą ir tęsia darbą su kita apsaugos priemone, užuot atmetęs
užklausą. Blokavimas visada yra sąmoningas sprendimas (`block: true`), o ne atsitiktinumas.

## Integruoti apsaugos mechanizmai

Importuojant registras automatiškai įkelia šešis apsaugos mechanizmus prioriteto
tvarka (žr. `registry.ts` → `registerDefaultGuardrails()`):

| Prioritetas | Pavadinimas         | Etapas (-ai)   | Failas                |
| ----------- | ------------------- | -------------- | --------------------- |
| `5`         | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`         | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`         | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`        | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`        | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`        | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Mažesnius prioriteto numerius turintys mechanizmai vykdomi **pirmiausia**.

### Vaizdų tiltas (`visionBridge.ts`) — modalumų tiltas PR-1

Perima užklausas su vaizdais, skirtas **vaizdų nepalaikantiems modeliams**, ir
arba nukreipia visą užklausą į vaizdus palaikantį modelį, arba prieš siunčiant
užklausą aukštesnio lygio paslaugai pakeičia vaizdų dalis tekstiniais aprašais,
sugeneruotais konfigūruojamo vaizdų modelio. Taip tik tekstą palaikantys
teikėjai gali skaidriai apdoroti daugiarūšius duomenis.

Eiga:

1. Praleisti, jei tikslinis modelis jau palaiko vaizdus (nebent jis yra
   priverstinio tilto sąraše `isVisionBridgeForcedModel`).
2. Išskirti vaizdų dalis naudojant `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kuri deleguoja darbą **vieningajam medijos
   detektoriui** `detectMediaParts()`, esančiam `open-sse/utils/mediaParts.ts` —
   vieninteliam tiesos šaltiniui, bendram ir kombinuoto suderinamumo filtrui.
   Išskyrimas pagal leidžiamąjį sąrašą taikomas tik aukščiausio lygio dalims,
   kurių formas `replaceImageParts` gali įterpti atgal (išskyrimo↔pakeitimo
   sutartis): OpenAI `image_url`, Anthropic base64 `source.type:"base64"`,
   Anthropic URL `source.type:"url"` ir Responses API `input_image`. Įdėtiniai
   atitikmenys ir tik indikatoriaus formos yra kombinuoto filtro medžiaga ir
   niekada neišskiriami. Praleisti, jei nieko nerasta.
3. Nustatyti vykdymo konfigūraciją naudojant
   `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nauji
   `modalityBridge*` nustatymų raktai turi pirmenybę; pasenę `visionBridge*`
   raktai lieka kaip **vieno ciklo atsarginis variantas** (grąžinimo langas).
   Kai tiltas išjungtas, praleisti prieš bet kokį medijos perėjimą.
4. Režimo parinkiklis (`modalityBridgeVisionMode`, žr. toliau pateiktą lentelę)
   nustato, ar nukreipti, ar aprašyti. Nukreipimo atveju grąžinamas
   `modifiedPayload`, kuriame pakeistas tik `model`, ir metaduomenys
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprašymo kelias: apriboti vaizdų skaičių iki `maxImages`, suformuoti į
   užduotį orientuotą raginimą, patikrinti aprašų podėlį, iškviesti vaizdų
   modelį **lygiagrečiai** (`Promise.allSettled`) ir vietoje vaizdų įterpti
   `[Image N]: <description>` teksto dalis. Nepavykus sukurti aprašo, gaunama
   `null`, o pradinė vaizdo dalis **išsaugoma** (#4012), išskyrus kombinuoto
   aprašymo kelią, kai nepavyko sukurti nė vieno aprašo: tokiu atveju
   patvirtintai vaizdų nepalaikančiai aukštesnio lygio paslaugai vietoje jo
   pateikiamas `(nepasiekiama — neprijungtas joks vaizdus palaikantis teikėjas)`
   pakaitalas (#8430).
6. Grąžinti `modifiedPayload` ir metaduomenis (`imagesProcessed`,
   `descriptions`, `processingTimeMs`, `visionModel`).

#### Režimo parinkiklis (`modalityBridgeVisionMode`)

| Režimas    | Numatytasis | Veikimas                                                                                                                                                                                                                                                                                                          |
| ---------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Ankstesnė euristika, nepakeista (#6640/#7204): ne kombinuoti / `auto/` modeliai nukreipiami į geriausią vaizdų modelį, nebent pradinis modelis jau turi tinkamus kredencialus (tada aprašoma); kombinuoti tikslai visada aprašomi.                                                                                |
| `describe` |             | Visada aprašyti — nukreipimo blokas visiškai praleidžiamas; visada atsako naudotojo pasirinktas modelis.                                                                                                                                                                                                          |
| `reroute`  |             | Priverstinis nukreipimas: kredencialus turinčio modelio išlaikymo patikra apeinama. Nukreipimo **tikslo** kredencialų patikra vis tiek taikoma — kai nėra tinkamo vaizdų tikslo, užklausa perduodama aprašymo keliui, kad neapdoroti vaizdai niekada nepasiektų tik tekstą palaikančios galinės sistemos (#8430). |

Priverstiniai režimai baigiami anksčiau, **prieš** vykdant automatinę
euristiką; `auto` veikimas baitų lygmeniu yra identiškas iki PR-1 buvusiam
apsaugos mechanizmui.

#### API rakto aprėptis (`visionBridgeKeyScope.ts`)

Kai skambinančiojo API raktas riboja `allowedConnections`, kvotų telkinius
(`allowedQuotas`) arba modelius (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tiltas
nukreipimui ir aprašymui parenka tik tuos modelius, kuriuos raktui leidžiama
naudoti, ir tik tuose ryšiuose, kuriuos raktui leidžiama naudoti. Tada aprašymo
iškvieta visada siunčiama per OmniRoute savikilpą su
`x-omniroute-self-loop-key-id` antrašte, todėl gaunanti pokalbio užklausa dar
kartą pritaiko to rakto ryšių ir modelių politiką. `enforceApiKeyPolicy()`
atsižvelgia į šią antraštę tik kartu su savikilpos prieigos raktu, todėl ji
gali tik susiaurinti prieigą, o neegzistuojantį identifikatorių turinti užklausa
atmetama.

Jei raktui neleidžiamas joks vaizdų modelis, aprašymo kelias pasitraukia ir
užklausa perduodama nepakeista — tai toks pats leidžiantis tęsti veikimą
gedimo atveju principas kaip ir išjungus apsaugos mechanizmą (metaduomenys
`{ skipped: true, reason: "no_permitted_vision_model" }`). Užklausos be rakto
ir raktai be šių apribojimų veikia lygiai taip pat kaip anksčiau.

#### Į užduotį orientuotas aprašymo raginimas (`modalityBridgeVisionTaskAware`)

Numatytoji reikšmė yra **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) prie bazinės
aprašymo užklausos prideda **paskutinio naudotojo pranešimo** tekstą (sutrumpintą iki 500 simbolių),
kad aprašymas būtų orientuotas į tai, ko naudotojas iš tikrųjų klausė
(`codex-vision-proxy` šablonas), ir prašo vaizdo modelio transkribuoti matomą
tekstą. Kai ši žyma išjungta arba naudotojo teksto nėra, bazinė užklausa naudojama nepakeista.

Paties aprašymo vidinio ciklo su OpenAI suderinama užklausa (`callVisionModelSingle()`
faile `visionBridgeHelpers.ts`) visada nustato `image_url.detail: "high"` —
besąlygiškai, kiekvienam kvietėjui / teikėjui ir nepriklausomai nuo kliento signalo.
Žemo detalumo atranka sumažina OCR tikslumą būtent tai teksto transkribavimo
užduočiai, kurios prašoma šioje užklausoje, todėl pats aprašymo kvietimas visada prašo
didelio detalumo, nepaisant to, koks detalumo lygis buvo naudojamas pradinėje gaunamoje užklausoje. Tai
paveikia tik vidinės aprašymo užklausos turinį; tai nekeičia, kaip
OmniRoute persiunčia kvietėjo `image_url.detail` pagrindinėje užklausoje —
numatytoji reikšmė jai taikoma atskirai ir tik aptiktiems OpenCode klientams,
naudojant `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Aprašymo
vidinio ciklo Anthropic laidinio formato šaka neturi `detail` lauko,
todėl nė viena iš šių numatytųjų reikšmių jai įtakos nedaro.

#### Aprašymo išvesties riba (`modalityBridgeVisionMaxChars`)

| Raktas                         | Numatytoji reikšmė | Diapazonas         |
| ------------------------------ | ------------------ | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`                | `0` arba 100–50000 |

`0` (numatytoji reikšmė) reiškia, kad **riba netaikoma** — `callVisionModel()`
grąžintas aprašymas perduodamas nepakeistas, išlaikant esamą
elgseną. Bet kuri reikšmė diapazone 100–50000 sutrumpina aprašymą ir
prideda `…` galūnę prieš įterpiant jį kaip `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` faile `src/lib/guardrails/visionBridge.ts`).
Padidinkite šią reikšmę daug detalių turinčioms OCR užduotims, kai paskesniam modeliui reikia
visos transkripcijos; sumažinkite ją, kad apribotumėte daugžodžiaujančių vaizdo modelių žetonų naudojimą.
Prietaisų skydelio laukas yra skirtuko Vision skydelyje Advanced
(`modality-bridge-max-chars` faile `ModalityBridgeVisionTab.tsx`) ir bet kurią
reikšmę nuo 1 iki 99 padidina iki minimalios 100 ribos, tačiau aiškiai nurodytos `0`
reikšmės nekeičia — `0` yra savarankiška tinkama Zod reikšmė
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), o ne vien
numatytoji „nenustatyta“ reikšmė.

#### Aprašymų podėlis (`modalityBridge/bridgeCache.ts`)

Atmintyje laikomas LRU + TTL aprašymų išvesčių podėlis, bendrai naudojamas visame procese.
Raktas = `sha256(imageRef + composedPrompt + configuredBridgeModel)`, naudojant
ilgio prefiksais pagrįstą įrėminimą (be laukų ribų kolizijų). Modelio komponentas yra
**sukonfigūruotas** tarpinio sluoksnio modelis, o ne faktiškai atsakęs modelis —
`callVisionModel` viduje gali naudoti atsarginį modelį, o raktų kūrimas pagal kiekvieną bandymą
suskaidytų podėlį. Nepavykusių aprašymų rezultatai niekada nelaikomi podėlyje. Nustatymai:

| Raktas                          | Numatytoji reikšmė | Diapazonas |
| ------------------------------- | ------------------ | ---------- |
| `modalityBridgeCacheEnabled`    | `true`             | —          |
| `modalityBridgeCacheTtlMinutes` | `60`               | 1–1440     |
| `modalityBridgeCacheMaxEntries` | `200`              | 10–5000    |

#### Nuotolinių vaizdų normalizavimas (vidinio ciklo aprašymas / base64 gavimas)

Kai tarpinis sluoksnis pats gauna **nuotolinį** vaizdą — Anthropic aprašymo
vidiniam kvietimui arba claude laidinio formato base64 konvertavimui
(`ensureBase64ImagesForClaudeWire`), abiem atvejais naudojant
`fetchRemoteImageAsDataUri()` faile `visionBridgeHelpers.ts` — gautas duomenų
URI prieš įterpiant į vaizdo modelio užklausą perduodamas per `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Per dideli vaizdai sumažinami taip, kad jų **ilgoji kraštinė būtų 2048px**
(tai atitinka dydžio ribą, kurią OpenAI / Anthropic jau taiko serverio pusėje), todėl
sumažėja siunčiamų duomenų kiekis ir delsa, nekeičiant to, ką mato vaizdo modelis. Dydžiui keisti
naudojamas `sharp`, įkeliamas dinaminiu importavimu: platformoje, kurioje nepavyksta įkelti jo savaiminio
dvejetainio failo, `normalizeDataUri()` **niekada neišmeta išimties** — jis
grįžta prie pradinių baitų perdavimo jų nekeičiant, todėl aprašymo / base64 konvertavimo
kelias visada lieka veikiantis. Ne vaizdo baitai (kai gavimo rezultatas nėra
dekoduojamas vaizdas) taip pat perduodami nepakeisti. Šis normalizavimas
taikomas tik vaizdams, kuriuos tarpinis sluoksnis gauna savo vidiniam kvietimui — jis niekada
netaikomas neapdorotam kvietėjo tiesiogiai perduodamam naudingajam turiniui, laikantis
tik pasirenkamų keitimų principo (griežtoji taisyklė Nr. 20).

#### Nustatymų schema ir migracija

Naujieji `modalityBridge*` raktai tikrinami naudojant Zod schemoje `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trijulė ir
`modalityBridgeAudio*` grupė, naudojama Audio Bridge. Migracija
`141_modality_bridge_settings.sql` nukopijuoja esamas pasenusias
`visionBridge*` reikšmes į atitinkamus naujus raktus (idempotentiškai ir niekada neperrašydama
operatoriaus nustatytos `modalityBridge*` reikšmės); vieną leidimo ciklą pasenę raktai
ir toliau priimami kaip atsarginis skaitymo šaltinis.

#### Skaidrumo antraštė ir statistika

Aprašymo transformuoti atsakymai turi
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sukuriama naudojant `buildModalityBridgeHeader()` faile `modalityBridge/bridgeStats.ts`,
pridedama naudojant `withModalityBridgeHeader()` faile `src/sse/handlers/chatHelpers.ts`).
Peradresuotos užklausos **negauna** jokios antraštės — naudingasis turinys nebuvo pakeistas, o modelio
pakeitimas jau matomas atsakymo turinio `model` lauke.

`GET /api/modality-bridge/stats` (valdymo autentifikavimas, tas pats lygis kaip
`GET /api/settings`) grąžina atmintyje saugomus kiekvieno modalumo skaitiklius
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }`, skirtus `vision`, `audio` ir
`video`. `averageLatencyMs` vardikliu naudoja `latencySamples`, o ne visus
bandymus; operacija be išmatuotos trukmės nesukuria fiktyvaus nulinės milisekundės
matavimo. `bridged` išlieka su ankstesnėmis versijomis suderinamas sėkmingų
konvertavimų pseudonimas; nesėkmingi bandymai jo nedidina.
Skaitikliai pagal numatytą veikimą nustatomi iš naujo paleidus procesą
(tai telemetrija, o ne apskaita).

#### Valdymo skydelio konfigūracija

Specialus valdymo skydelio puslapis yra
`/dashboard/settings/modality-bridge`. Jo per URL pasiekiamos `Vision`, `Audio`
ir `Video` kortelės perjungiant `tab` reikšmę išsaugo užklausos parametrus.
Kortelėje „Vision“ galima valdyti įjungimą, režimą, modelio pasirinkimą (įskaitant
automatinę numatytąją parinktį), užduotį atitinkančių užklausų formulavimą,
išplėstinius skirtojo laiko, vaizdo, aprašo ilgio ir podėlio apribojimus, vykdymo
skaitiklius bei apsaugotą pavyzdinę užklausą. Kortelė „Audio“ taip pat veikia:
joje galima valdyti įjungimą, tik STT modeliams skirtą parinkiklį su „Auto“,
skirtojo laiko ir maksimalaus įrašo ilgio apribojimus, garso skaitiklius bei
`input_audio` pavyzdinį bandymą. Kortelė „Video“ yra funkcionali: joje rodoma
FFmpeg/ffprobe vykdymo aplinkos būsena — viena iš keturių aiškiai apibrėžtų
sąsajos būsenų (`unknown`, kol patikra vykdoma arba jos nepavyko užbaigti,
`restricted`, kai valdymo skydelio prieglobos serveris nėra vietinio ciklo ir
patikra praleidžiama kliento pusėje, `unavailable`, kai patikrinus patvirtinama,
kad priemonių nėra, arba `available` su FFmpeg/ffprobe versijomis) — išsaugomi
įjungimo, modelio, kadrų, vaizdo įrašo ir skirtojo laiko apribojimai, modelių
parinkiklyje paliekami tik vaizdą palaikantys modeliai ir pateikiami vaizdo įrašų
skaitikliai.

Ankstesnė „Vision Bridge“ kortelė DI nustatymuose dabar yra suderinamumo nuoroda į
naująjį puslapį; joje nebėra antros formos kopijos. „Media Providers“ taip pat
susieja „Image-to-Text“ ir „Speech-to-Text“ darbo eigas su atitinkamomis
„Modality Bridge“ kortelėmis, nepašalinant esamos „Speech-to-Text“ bandymų
aplinkos.

**Savojo ciklo priėmimo patikros apėjimas:** kai aprašymo iškvieta nukreipiama per
paties OmniRoute `/v1` savąjį ciklą (nestandartinį teikėjo modelį), papildomoje
užklausoje siunčiama `x-omniroute-admission-bypass: internal` ir autentifikuojama
naudojant nustatytą savojo ciklo kredencialą — vietinį `sk_omniroute` žymeklį
vietiniu režimu arba operatoriaus sukonfigūruotą `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` aplinkos kintamojo raktą (#1350), kad diegimuose su
`REQUIRE_API_KEY=true` vis tiek būtų galima vykdyti aprašymo iškvietą. Apėjimas
leidžiamas tik naudojant būtent šiuos kredencialus, todėl išoriniai klientai
negali naudoti šios antraštės priėmimo patikrai praleisti.

Senieji numatytieji nustatymai yra faile
`src/shared/constants/visionBridgeDefaults.ts`; nauji numatytieji režimo,
užduoties atitikimo ir podėlio nustatymai bei nustatymų sprendiklis yra faile
`src/shared/constants/modalityBridgeDefaults.ts`. Apsaugos mechanizmas pateikia
`deps` konstruktoriaus parinktį, kad testuose būtų galima įterpti netikras
`getSettings` ir `callVisionModel` realizacijas.

### Garso tiltas (`audioBridge.ts`) — „Modality Bridge“ PR-3

Perima pokalbių užklausas su garsu prieš joms pasiekiant paskirties modelį, apie
kurį nežinoma, ar jis priima garso įvestį. Pokalbio užklausa niekada
neperadresuojama: garso dalys transkribuojamos per esamą su OpenAI suderinamą
kelių dalių galinį tašką, o pasirinktas pokalbių modelis tęsia darbą naudodamas
tekstines transkripcijas.

Eiga:

1. Nustatykite `supportsAudio` per `getResolvedModelCapabilities()`. Pirmenybė
   teikiama aiškiems teikėjų registro metaduomenims, tada statiniams modelio
   metaduomenims, o galiausiai sinchronizuotam `modalities_input`. Deklaruotas
   įvesčių sąrašas be `audio` reiškia `false`; jei nėra jokių duomenų apie
   galimybę, lieka `null`. Ir `false`, ir `null` aktyvina konservatyvųjį tiltą,
   o `true` jį apeina.
2. Nustatykite `modalityBridgeAudio*` nustatymus ir iš kiekvieno pranešimo per
   bendrą `detectMediaParts()` detektorių išskirkite sujungiamas aukščiausio
   lygio garso dalis. Palaikomi OpenAI perdavimo formatai yra `input_audio`,
   `audio_url` ir `source.media_type: "audio/*"`. Įdėtinis garsas aptinkamas
   maršrutizavimo tikslais, tačiau sujungimo metu nepašalinamas. Apdorojimo
   apimtį riboja `modalityBridgeAudioMaxClips`; vėlesnės dalys lieka nepakeistos.
3. Naudokite sukonfigūruotą `provider/model` arba leiskite
   `selectAudioBridgeModel()` stabilia katalogo tvarka pereiti per
   `AUDIO_TRANSCRIPTION_PROVIDERS` ir pasirinkti pirmąjį modelį, turintį tinkamą
   aktyvaus teikėjo kredencialą.
4. `callAudioTranscription()` konvertuoja base64 / duomenų URI garsą į kelių
   dalių `file` arba atsisiunčia nuotolinį `audio_url` per tik viešąsias paskirties
   vietas leidžiančią išeinančio ryšio apsaugą su DNS susiejimu ir 25 MB riba.
   Tada failas ir pasirinktas modelis POST metodu siunčiami į vietinį
   `/v1/audio/transcriptions` savojo ciklo galinį tašką, autentifikuojant per
   `resolveSelfLoopBearer()`. Esamas transkripcijos maršrutas atlieka įprastą
   kredencialų paiešką, atvėsimo laikotarpio ir dažnio apribojimų valdymą bei
   persiuntimą teikėjui.
5. Sėkmingos iškvietos pakeičia atitinkamas dalis į
   `[Audio N]: <transcript>`. Iškvietos vykdomos naudojant `Promise.allSettled`:
   nesėkmės atveju išsaugoma konkreti pradinė garso dalis (#4012 sutartis). Jei
   nepavyksta visos iškvietos ir įrodyta, kad paskirties modelio
   `supportsAudio === false`, dalys tampa
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 sutartis).
   Nežinomo paskirties modelio (`null`) atveju, jei nepavyksta visos iškvietos,
   turinys lieka nepakeistas. Įrodytas tik tekstą palaikantis paskirties modelis,
   kai nėra tinkamo STT kredencialo, gauna tą patį aiškų pakaitinį tekstą,
   neatliekant tinklo iškvietos.

Sėkmingos transkripcijos naudoja visam procesui bendrą „Modality Bridge“ LRU/TTL
podėlį. Raktas sudaromas iš garso nuorodos, stabilios `audio-transcription`
operacijos žymos ir pasirinkto STT modelio; nesėkmės niekada neįrašomos į podėlį.
Garso apdorojimo bandymai atnaujina bendrus `bridged`, `cacheHits`, `failures` ir
`lastUsedAt` skaitiklius. Transformuotų atsakymų antraštėje pateikiama
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nepakeistos
užklausos negauna „Audio Bridge“ segmento.

Vykdymo aplinkos nustatymai saugomi DB ir tikrinami naudojant Zod:

| Raktas                        | Numatytoji reikšmė | Diapazonas              |
| ----------------------------- | ------------------ | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`             | —                       |
| `modalityBridgeAudioModel`    | `""`               | Automatinis arba STT ID |
| `modalityBridgeAudioTimeout`  | `60000`            | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`                | 1–10                    |

Bendroji podėlio atmintinė ir toliau valdoma naudojant `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ir `modalityBridgeCacheMaxEntries`.

### Vaizdo įrašų tiltas (`videoBridge.ts`, `videoBridgePipeline.ts`)

Prieš iškviečiant paskirties sistemą, kuri, kaip žinoma, savaime nepalaiko vaizdo įrašų,
perima aukščiausiojo lygio vaizdo įrašų dalis iš Chat Completions `messages` ir Responses
API `input`. Palaikomi formatai: `input_video`, `video_url`, `video_source`, HTTPS URL
ir `data:video/*;base64,...` duomenų URI. Paprasti failų vardai tekste nelaikomi
vaizdo įrašais.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) valdo užklausos perėjimą, galimybių
ir politikos patikrą, agregavimą kiekvienai užklausai bei atsakymo naudingąją apkrovą.
Kiekvieno vaizdo įrašo apdorojimas — gavimas, viso rezultato podėlis, kadrų sekos
aprašymas (į kurį įtraukiama bet kokia iškvietėjo deklaruota garso transkripcija)
ir kiekvieno bandymo metrika, nutraukimas bei išvalymas — yra paslėptas už
`processVideoPart`, esančios `videoBridgePipeline.ts`; ji iškviečiama po vieną kartą
kiekvienai vaizdo įrašo daliai `preCall` cikle. Šiame modulyje taip pat apibrėžiamos
aiškios prievadų ribos: `VideoMediaBrokerPort` (baitams gauti ir atrinktiems kadrams
išskirti), `VideoAudioTranscriptionPort` (iškvietėjo deklaruotai garso transkripcijai
sujungti su atrinktų kadrų antraštėmis) ir `VideoDrilldownPort` (detalios kadrų analizės
išsaugojimo riba; dar neprijungta prie `processVideoPart` — šiuo metu detalios analizės
įrašus kuria tik atskiras `/api/modality-bridge/video/drilldown` maršrutas).

Viešasis `/v1` užklausos kelias niekada neimportuoja ir neiškviečia antrinio proceso.
Nuotoliniai vaizdo įrašai atsisiunčiami taikant 50 MiB ribą; įterptiesiems base64 vaizdo
įrašams taikoma konservatyvi 36 MiB dekoduoto dydžio riba vienam vaizdo įrašui, kad
modelio, pranešimų ir kadravimo apvalkalas neviršytų viešosios JSON užklausos priėmimo
50 MiB ribos. Įterptųjų duomenų ilgio ir dekoduoto dydžio įverčiai patikrinami prieš
atminties skyrimą. HTTPS privalomas pradiniam nuotoliniam URL ir kiekvienam
peradresavimui; naudojama esama tik viešus adresus leidžianti išsiuntimo apsauga su DNS
susiejimu. Tada baitai perduodami per tikslią vidinę
`POST /api/modality-bridge/video/extract` tarpininko ribą. Šis maršrutas yra ir
`LOCAL_ONLY`, ir `SPAWN_CAPABLE`, priima tik kiekvienam procesui autentifikuotą,
patikimos grįžtamojo ryšio sąsajos užklausą ir niekada nepriima URL, failų sistemos
kelio, vykdomojo failo ar argumentų sąrašo. API užklausos turinio dydžio apdorojimo
seka ir apdorojimo funkcijos prieauginis turinio skaitytuvas nepriklausomai užtikrina
50 MiB tarpininko įvesties ribą. Apribota jo eilė vienu metu vykdo vieną išskyrimą,
leidžia keturias laukiančias užduotis ir riboja bendrą laukiančios įvesties dydį iki
100 MiB.

Tarpininko viduje `ffprobe` skaito privatų vietinį failą; fiksuotame leidžiamų formatų
sąraše nėra grojaraščių ir manifestų formatų. Leidžiamiems MOV šeimos konteineriams
išorinės MOV duomenų nuorodos pagal numatytąją nuostatą lieka išjungtos, o fiksuota
komanda jų neįjungia. Ir `ffprobe`, ir `ffmpeg` naudoja tik `file` leidžiantį protokolų
sąrašą, vieną giją, fiksuotus argumentų masyvus, nenaudoja apvalkalo, o vykdomieji
failai nustatomi iš `PATH`. Pridėtų viršelio paveikslėlių srautai nelaikomi tinkamais
atkūrimo kandidatais. Visi atkuriami srautai turi atitikti ribas; prieš deterministinį
mažiausio indekso atsarginį pasirinkimą pirmenybė teikiama aiškiai numatytuoju
pažymėtam srautui. Vaizdo įrašų trukmė ribojama iki 600 sekundžių, kiekvienas matmuo —
iki 8 192 pikselių, o šaltinio pikselių skaičius — iki 33 554 432. FFmpeg atrenka
1–16 vidurio taško JPEG kadrų, sumažina ilgosios kraštinės dydį iki ne daugiau kaip
1 024 pikselių nedidindama mažesnių įvesčių ir niekada negauna URL. Pagal numatytąją
nuostatą atranka yra `uniform`. Pasirenkamosios `scene_aware` ir eksperimentinė
`segment_aware` politikos atlieka vieną papildomą fiksuotą FFmpeg perėjimą per jau
patvirtintą vietinį srautą, pasirenka apribotas `showinfo` scenų laiko žymas ir,
detektoriui sugedus, pasibaigus skirtajam laikui, gavus netinkamai suformuotą išvestį
arba tuščią kandidatų rinkinį, deterministiškai grįžta prie tų pačių tolygiai
paskirstytų vidurio taškų. Segmentais pagrįstas režimas paskirsto vidurio taškų
pavyzdžius proporcingai patvirtintiems scenų intervalams; segmentais pagrįsti įrodymai
ir atsarginio veikimo elgsena išsamiai aprašyti toliau. Griežta 16 kadrų riba taikoma
po atrankos pagal kiekvieną politiką. Kai scenas atsižvelgianti užklausa gali naudoti
tik vieną kadrą, ji pasirenka aktyvaus viso vaizdo įrašo arba fokusavimo lango tolygios
atrankos vidurio tašką ir pateikia `policyEffective: uniform`: vienas pasirinktas
scenos kadras negali išsaugoti abiejų laiko intervalo galų. Iškvietėjas gali
pasirinktinai pateikti baigtinį fokusavimo langą (`start`/`end` sekundėmis); ribos
apribojamos pagal medijos trukmę, atvirkštiniai arba nebaigtiniai langai atmetami, o
visos atrankos politikos vykdomos tik normalizuotame intervale. Gautas langas
įtraukiamas į atrankos metaduomenis ir nepatikimą aprašo priešdėlį, kad tolesni modeliai
galėtų atskirti sufokusuotą ištrauką nuo visos laiko juostos.

Semantinis antraščių fokusavimas yra atskira, aiškiai nurodoma nuostata. Numatytasis
`full` analizės režimas išsaugo esamą kadrų užklausą ir niekada neperduoda užklausos
teksto antraščių modeliui. `focused` režimu tiltas iš to paties Chat arba Responses
konteinerio nuskaito tik naujausią netuščią naudotojo sukurtą `text`/`input_text`,
normalizuoja ją į NFC, sutraukia valdymo simbolius bei tarpus ir apriboja iki 500
Unicode kodo taškų. Gavus tuščią rezultatą, grįžtama prie tikslios `full` užklausos.
Tinkama užuomina serializuojama kaip JSON specialiame nepatikimo naudotojo konteksto
bloke ir gali tik nustatyti stebimų detalių prioritetus; ji negali apeiti atskiro
įspėjimo nesilaikyti medijoje matomų ar girdimų nurodymų. Tekstinis fokusavimas niekada
nenustato `start`/`end` ir nekeičia laikinės atrankos mechanizmo.

#### FU-07 struktūriniai segmentų įrodymai

`segment_aware` naudoja vieną apribotą preliminarios analizės etapą jau patvirtintam
vietiniam vaizdo srautui. Fiksuota filtrų grandinė pirmiausia sumažina plotį iki ne
daugiau kaip 320 pikselių, aptinka scenų pasikeitimus ir sustingusius intervalus,
tada 1 kadro per sekundę dažniu ima mėginius suliejimui, vidutiniam skaisčiui bei
erdvinei ir laiko informacijai įvertinti. Šiame etape leidžiama apdoroti ne daugiau
kaip 600 struktūrinių mėginių, naudojama viena FFmpeg / filtro gija, tie patys tik
`file` protokolui ir konteineriams taikomi leidžiamųjų sąrašai, 1 MiB proceso
išvesties riba ir ne daugiau kaip 30 sekundžių bendrame tarpininko nutraukimo /
galutinio termino intervale. Jis niekada nepriima komandos, filtro, kelio ar URL iš
užklausos.

Struktūrinės reikšmės yra deterministiniai imties duomenys, o ne semantinis vaizdo
įrašo supratimas. Pagal jas nenustatomi objektai, veiksmai, subtitrai, kalba ar
naudotojo ketinimai. Scenų ir sustingimų ribos sudaro segmentus; sustingimo
aprėptis, suliejimas, ekspozicija, erdvinis detalumas ir pokyčiai laike daro įtaką
tik tam, kaip paskirstomas esamas 1–16 kadrų biudžetas. Visiškai sustingusiam
segmentui skiriamas ne daugiau kaip vienas kadras, o nesustingę segmentai
konkuruoja dėl likusio biudžeto. Kai ribų yra daugiau nei kadrų, išlaikoma tolygi
laiko juostos aprėptis, kad greiti montažiniai perėjimai pradžioje negalėtų
paslėpti ilgo pabaigos segmento. Scenų ribos, kurios patenka į 1 sekundės analizės
skyrą nuo sustingimo ribos, sujungiamos.

Jei trūksta filtrų, duomenys yra netinkamai suformuoti ar tušti, įvyksta detektoriaus
klaida arba baigiasi apribotam preliminarios analizės etapui skirtas laikas,
saugumo patikra praleidžiama ir tiksliai taikoma tolygaus vidurio taškų parinkimo
strategija. Skambinančiojo inicijuotas nutraukimas ar tarpininko galutinis terminas
tokio veikimo nesukelia: vykdomas poprocesis nutraukiamas, vėlesnis kadrų
išgavimas neleidžiamas, o privatus laikinųjų failų medis pašalinamas bloke
`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuoja deterministinius tikrus FFmpeg
testinius duomenis, skirtus įvertinti subtitravimo iškvietimų sumažėjimą pašalinus
dublikatus, kadrų biudžeto paskirstymą esant intensyviam judėjimui, suliejimo /
ekspozicijos / SI-TI duomenis, greitus montažinius perėjimus su ilga pabaigos
atkarpa ir klaidingus teigiamus rezultatus laipsniško išblukimo atveju. Jis
registruoja preliminarios analizės faktinę trukmę ir, kai pasiekiama
`/usr/bin/time`, antrinio proceso CPU laiką bei didžiausią RSS. Jo kokybės
patikros yra tik struktūriniai etalonai. Tikro subtitravimo modelio kokybės būsena
lieka `HOLD`, nes ši testavimo sistema neturi įgalioto galinio taško ar fiksuoto
vertintojo. Finansinio sutaupymo būsena taip pat lieka `HOLD`, nebent
`--caption-cost-per-call-usd` pateikia aiškų teigiamą vieno iškvietimo kainos
įvertį; scenarijus niekada neišgalvoja nė vieno iš šių rezultatų.

Kiekvieno kadro dydis ribojamas iki 4 MiB, visų neapdorotų kadrų bendras dydis –
iki 23 MiB, o serializuotas tarpininko atsakymas – iki 32 MiB. Privatus laikinasis
katalogas pašalinamas bloke `finally`. OmniRoute neįtraukia FFmpeg ir nepriima
pasirinktinio vykdomojo failo kelio. Prieš subtitruodamas tiltas pritaiko
konservatyvų vaizdinių dublikatų šalinimo etapą: kiekvienas JPEG sumažinamas iki
16×16 pilkio tonų buferio ir lyginamas tik su paskutiniu išsaugotu kadru. Kai
prašomas subtitravimo biudžetas yra didesnis nei vienas kadras, išgavimo metu
pateikiamas apribotas kandidatų rinkinys, ne daugiau kaip dukart didesnis už tą
biudžetą ir niekada neviršijantis 16 kadrų. Prašoma riba pritaikoma tik pašalinus
dublikatus; kai biudžetas yra bent du kadrai, per galutinį retinimą išsaugomi
pirmasis ir paskutinis pasirinkti kandidatai. Versijuota
`grayscale-16x16-mean-cells-v2` strategija naudoja didesniąją iš šių reikšmių:
vidutinį skaisčio pokytį arba miniatiūros langelių, kurių normalizuotas pokytis yra
bent 0.05, santykį. Dublikatų slenkstis yra konstanta 0.04, pasirinkta dėl
nuspėjamumo, užuot pateikus ją kaip vykdymo metu keičiamą nustatymą. Šis antrinis
didelio kontrasto signalas išsaugo nedidelius judesius ir matomo teksto pokyčius,
kuriuos gali paslėpti vien vidurkiu paremtas palyginimas. Įvykus lygintuvo ar
dekoderio klaidai, saugumo patikra praleidžiama ir aprėptis išsaugoma. Išvesties
metaduomenyse atskiriami išgauti kandidatai, sėkmingai panaudoti kadrai ir pašalinti
vaizdiniai dublikatai.

Aiškiai pažymėtoje vaizdo įrašo dalyje galima paprašyti kontaktinio lapo su laiko
žymomis. Tiltas sukuria ne daugiau kaip 4 stulpelių ir 16 kadrų JPEG tinklelį.
Kiekviename 512 pikselių langelyje šaltinio laiko žyma įterpiama į didelio
kontrasto apatinę juostą, o tos pačios laiko žymos išlaikomos tekstiniuose
metaduomenyse, kad vėlesniuose etapuose jas būtų galima susieti ir audituoti.
Viso JPEG dydis ribojamas iki 32 MiB. Jei `sharp` negali dekoduoti ar sukomponuoti
tinklelio, tiltas grįžta prie atskirų JPEG kadrų; kliento nutraukimas vis tiek
perduodamas kontaktinio lapo operacijai.

Diegimo į gamybinę aplinką pagrindžiantys duomenys sąmoningai atskirti nuo
sintetinio komponavimo mikrotesto. `scripts/perf/video-bridge-contact-sheet-eval.ts`
apibrėžia schemos versiją turinčią A/B testavimo sistemą, skirtą tikriems su
OpenAI suderinamiems regos modeliams. Ji matuoja paslaugos teikėjo nurodytus
žetonus, bendrąją faktinę delsą nuo pradžios iki pabaigos (įskaitant kontaktinio
lapo komponavimą), modelio iškvietimų skaičių ir manifeste apibrėžtų faktų
išlaikymą. Neapdoroti modelio atsakymai į ataskaitą neįrašomi; išsaugomos tik
SHA-256 maišos ir atitinkančių faktų ID. Testavimo sistema neatlieka jokių tinklo
ar mokamų modelio iškvietimų, nebent perduodamas `--execute-real` ir sukonfigūruoti
`--model`, `OMNIROUTE_BASE_URL` bei `OMNIROUTE_API_KEY`. Neatlikus tokio aiškiai
nurodyto tikro vykdymo, mašininio nuskaitymo verdiktas lieka `HOLD`; vien
sintetiniai naudingosios apkrovos ar iškvietimų skaičiaus matavimai nėra diegimą
pagrindžiantys duomenys.

Skambinantieji prie palaikomos vaizdo įrašo dalies gali pridėti pasirinktinį
`transcript.cues` masyvą, jei jau turi sinchronizuotą tekstą. Kiekvienoje
užuominoje turi būti `text`, baigtinis `start` / `end` intervalas išanalizuotos
trukmės ribose ir į leidžiamųjų sąrašą įtrauktas `source` (`client`, `embedded`
arba `audio-bridge`); numatytoji `confidence` reikšmė yra `1`, ji turi likti tarp
`0` ir `1`. Visiškai vienodos užuominos sujungiamos. OmniRoute niekada nepradeda
transkribavimo pagal šiuos metaduomenis: patvirtintos užuominos kartu su šaltiniu,
patikimumu ir intervalu nukopijuojamos į aprašytą rezultatą ir pateikiamos kaip
nepatikimi stebėjimai greta kadrų subtitrų. Netinkamas, intervalo neatitinkantis
arba kilmės informacijos neturintis tekstas atmetamas, užuot jį įmaišius į
subtitrų srautą. Abu užklausos turinio transkripcijos kanalai pateiktą kilmę
normalizuoja į `client`, įskaitant savarankiškai nurodytas `embedded` arba
`audio-bridge` žymas. Tik serverio valdomas adapteris gali priskirti šias
patikimas žymas naudodamas tik kode pasiekiamą argumentą `trustedSource`;
užklausos JSON laukas negali pasiekti šio argumento. Transkripcijos tekstas,
nepaisant jo kilmės, lieka nepatikimu iš medijos gautu turiniu ir niekada negali
lemti autorizavimo.

Patyręs iškvietėjas tam pačiam vaizdo įrašui gali pateikti `audioTranscript` takelį;
jis laikomas kliento pateiktu tekstu, o ne serverio atliktos transkripcijos įrodymu.
Sujungimo sandūra apdoroja vaizdo ir garso stebėjimus taikydama
vieną terminą ir nutraukimo signalą, išrikiuoja juos bendroje laiko juostoje, sujungia
visiškai vienodus dublikatus ir pateikia dalinį rezultatą, kai pavyksta tik viena pusė.
Netinkamas `audioTranscript` lemia tokį dalinį rezultatą — vaizdo
aprašas išlaikomas, o garso šaka įrašo išvalytą klaidos kodą —
užuot atmetus visą vaizdo įrašą. Kiekvienos šakos pasiekiamumas, dalinio rezultato žyma
ir išvalyti klaidų kodai išsaugomi aprašytame rezultate,
apsaugos metaduomenyse (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), rezultatų podėlio metaduomenyse ir tilto
sujungimo skaitikliuose. Numatytasis Video Bridge kelias nepaleidžia kalbos vertimo į tekstą
ir neatsisiunčia antros medijos kopijos; be aiškiai pateikto takelio jis lieka
skirtas tik vaizdo įrašui.

**Transkripcijos saugojimas (#12150 P1).** Tai taikoma automatiškai, kai
Video Bridge (kuris pats yra pasirenkamas) atvaizduoja transkripcijos žymą — atskiros
saugojimo žymos nėra. Kai užklausoje atvaizduojama bet kokia transkripcijos žyma (iškvietėjo deklaruotas
`transcript` arba sujungtas `audioTranscript`), apsauga pažymi ją kaip
`videoBridgeObserved` ir sukuria užmaskuotą vaizdo įrašo aprašo šešėlinę kopiją —
identišką atvaizdavimą, kuriame kiekvienos žymos laisvos formos teksto turinys pakeičiamas į
`[redacted-video-transcript]`; ji sukuriama pakeičiant struktūrinį žymos lauką
dar prieš sudarant eilutę (niekada neanalizuojant sujungto teksto, todėl joks žymos
turinys — nei priešiškas, nei įprastas, įskaitant turinį su `]`, pvz.,
`[inaudible]`/`[music]` — negali išlikti). Išsaugotame iškvietimo žurnalo užklausos turinyje
kiekviena iš vaizdo įrašo gauta teksto dalis pakeičiama ta užmaskuota šešėline kopija,
atitiktį nustatant pagal turinio lygybę; `fullText` atrama iš naujo nuskaitoma iš užbaigtos
prieš iškvietimą taikomos apsaugos naudingosios apkrovos, todėl atitiktis vis tiek randama po to,
kai vėlesnės grandinės apsaugos (PII ir prisijungimo duomenų maskuokliai, prioritetai 10/95)
vietoje perrašo aprašo tekstą, taip pat po to, kai sistemos raginimo, perdavimo ar Memory
įterpimas pakeičia pranešimų masyvo struktūrą. Modeliui siunčiamas turinys
nepakeičiamas. Stebėta užklausa taip pat neužpildo ilgalaikės Memory (praleidžiamas
ir iš užklausos, ir iš atsakymo gaunamų duomenų išskyrimas),
todėl paties modelio atsakymas negali nukopijuoti transkripcijos teksto į Memory.

**Neapdoroti vaizdo įrašo laukai (#12430).** Kai tiltas įjungtas, o savasis vaizdo įrašų palaikymas nežinomas arba jo nėra, apibrėžti `transcript`/`audioTranscript` laukai taip pat aktyvina `videoBridgeObserved`, net ir nepavykus aprašyti arba pritaikius `maxVideos` ribą. `null` ir tuščios eilutės įskaitomos; nesami laukai ir su vaizdo įrašu nesusiję metaduomenys — ne. Išsaugotose kopijose šie laukai užmaskuojami arba užklausa praleidžiama, o podėliai ir Memory apeinami.

Šiuose atsarginiuose keliuose galiojančios iškvietėjo žymos tampa palaikomomis `text`/`input_text`
dalimis, o ne nestandartiniais teikėjo laukais. Abu su užklausa pateikti takeliai
lieka nepatikimais `client` stebėjimais, pateikiant aiškų įspėjimą, kad vaizdo įrašas
nebuvo aprašytas ir laiko žymos nebuvo patikrintos pagal mediją. Esami
256 žymų / 64 KiB bendri ir vienai žymai taikomi limitai abiem takeliams taikomi kartu;
laiko žymos turi tilpti į tarpininko 600 sekundžių ribą ir bet kurį pateiktą fokusavimo
intervalą. Netinkami takeliai atmetami, o ne persiunčiami kaip laisvos formos tekstas; tinkamas
gretimas takelis vis tiek gali būti naudojamas, nebent viršijamas bendras jų limitas. `null` ar tušti
laukai neprideda teksto. Šis atsarginis kelias neprideda medijos gavimo ar transkripcijos.
Transkripcijos išplėtimo laukai pašalinami iš atsarginio vaizdo įrašo konteinerio ir jo
`video_url`/`source` objektų. OpenAI perdavimo leidžiamų laukų sąrašas lieka griežtas; neaiškaus savojo
palaikymo vaizdo įrašų konteineriai lieka pasiekiami, o žinomi tik tekstą palaikantys gavėjai išlaiko saugias žymas.
Struktūrinės užmaskuotos šešėlinės kopijos apsaugo pridėtą transkripcijos tekstą, o
pradinė iškvietėjui priklausanti užklausa lieka nepakeista. Gavėjai su savuoju palaikymu ir
išjungti tiltai išlaiko esamą apėjimo veikseną.

Papildomose išsaugotose kopijose naudojamas tas pats stebėtos užklausos signalas. Neapdorotoje
kliento užklausos momentinėje kopijoje prieš apsaugą, atmintyje laikomoje laukiančioje užklausoje ir anksti
atmestų užklausų žurnale transkripcijos laukai vaizdo įrašo dalyse pakeičiami struktūriškai;
eilutiniai raginimai, kuriuos sukuria konvejerio etapai ir konteksto perdavimas, užmaskuojami
išsaugomo užklausos turinio priėmimo taške. Išsaugota `video_content_removed` žyma
užtikrina, kad `previous_response_id` tęsimas saugiai nutrūktų, užuot atkūręs
tekstą, kuris buvo sąmoningai pašalintas. Jei stebėta užklausa prieš registravimą praranda
atskiros dalies užmaskuotą šešėlinę kopiją arba net viena iš kelių vaizdo įrašų šešėlinių kopijų
nebeatitinka po vėlesnių užklausos pakeitimų, išsaugomas užklausos turinys
visiškai praleidžiamas, užuot išsaugojus tik iš dalies užmaskuotą transkripciją.

Stebėtos užklausos atveju modelio atsakymas gali pacituoti bet kurią
transkripcijos dalį be struktūrinės žymos ribos. Todėl išsaugotame iškvietimo žurnale jo
`responseBody` pakeičiamas praleidimo žyma; išsamus
konvejerio artefaktas (kuriame gali būti teikėjo ar kliento turiniai ir srauto fragmentai)
neišsaugomas. Semantiniai, idempotentiškumo ir samprotavimo atkūrimo podėliai
tai užklausai neskaitomi ir nerašomi. Teikėjui siunčiama užklausa ir klientui matomas
atsakymas lieka nepakeisti. Ankstyvieji ryšio palaikymo baitai pašalinami iš laikinojo
buferio, kai išsamus artefaktas praleidžiamas. Kiro netinkamai suformuoto EventStream
įspėjimas pateikia tik naudingosios apkrovos baitų skaičių, bet niekada ne jos turinį ar JSON
analizatoriaus neapdorotą klaidą.
Tai nėra teiginys, kad buvo patikrinta kiekviena nesusijusi teikėjo ar papildinio diagnostika;
platesnė išsaugomų duomenų priėmimo taškų peržiūra stebima užduotyje #11658.

Vidinis `/api/modality-bridge/video/drilldown` gyvavimo ciklas yra atskiras,
grįžtamojo ryšio / prieigos raktu autentifikuojamas podėlio pagrindas. Kiekvienai operacijai taip pat būtinas
kanoninis neskaidrus pagrindinio subjekto ID. Prieš įgalinant produkcinės aplinkos iškvietėją, jis turi
išvesti tą ID iš autentifikuoto nuomininko ir niekada nepersiųsti
kliento pasirinktos reikšmės. Podėlio raktai susieja tą pagrindinį subjektą su kanoniniais seanso ir
vaizdo įrašo nuorodos ID, saugo tik iš jų SHA-256 išvestus raktus ir apriboja tiek skaitymą,
tiek šalinimą tuo pačiu pagrindiniu subjektu. Kiekviename podėlio įraše saugoma ne daugiau kaip 16 išvestinių JPEG
kadrų, jie nustoja galioti po dešimties minučių, taip pat palaikomi apriboti
`start` / `end` skaitymai arba tiesioginis seanso pašalinimas.

Kiekvienam pagrindiniam subjektui leidžiama ne daugiau kaip 16 įrašų ir 64 MiB kanoninių JPEG duomenų. Šie
apribojimai nepriklauso nuo visuotinių 64 įrašų / 256 MiB ribų: esant pagrindinio subjekto kvotos
spaudimui, pirmiausia šalinami tik seniausiai naudoti to pagrindinio subjekto įrašai, o tik tada
svarstomas visuotinis LRU šalinimas. Pasibaigusio galiojimo įrašai podėlio operacijų metu pašalinami tiek iš pagrindinio subjekto,
tiek iš visuotinės apskaitos, o atšaukus operaciją ar nepavykus patikrai
dalinis pakeitimas neįrašomas.

Podėlis atmeta nekanoninį Base64, perteklinį užpildymą, ne JPEG mediją, netinkamai suformuotus arba
nepilnus JPEG failus ir JPEG failus, dėl kurių apribotas viso vaizdo `sharp`
dekodavimas pateikia įspėjimą. Kiekvienas priimtas vaizdas iš naujo užkoduojamas kaip kanoninis JPEG, o plotis ir aukštis
nustatomi iš dekoduotų baitų, užuot pasitikėjus iškvietėjo laukais; visi gale esantys
poliglotiniai baitai atmetami, o ne išsaugomi. Abiem kvotoms priskaičiuojamas tik ribojamo dydžio kanoninis suglaudintas buferis.
JSON perdavimo riba apima Base64 pridėtines sąnaudas, taikomas 32 MiB
dekoduotos įvesties ribai. Kiekviename
išsaugotame išvedime įrašomas patikrintas JPEG formatas / raiška, atrankos politika,
išvedimo versija, sukūrimo laikas, serverio apskaičiuota turinio maiša ir maiša apsaugota pirminė
nuoroda kartu su patikimo iškvietėjo pateikta pirminio turinio maiša. Atšaukimas tikrinamas
tarp asinchroninių dekodavimo / maišos skaičiavimo etapų, prieš atominį įrašymą į podėlį.

Šis etapas dar neprijungia produkcinės aplinkos kūrėjo prie maršruto ir
nesuteikia kelių raiškų variantų pasirinkimo. Todėl skaidrus „Video Bridge“ užklausos
kelias neatlieka jokio papildomo darbo, o su nuomininku susietas pagrindinio subjekto išvedimas ir
visas FU-08 kelių raiškų gyvavimo ciklas išlieka aiškiai įvardyti kaip tolesni darbai,
o ne dokumentuojami kaip užbaigta elgsena.

Kadrams nuosekliai generuojami aprašai naudojant sukonfigūruotą „Video“ modelį. Tuščia
„Video“ perraša paveldi „Vision“ nuostatą; jei abi tuščios, „Vision“
automatinis maršruto parinkiklis pasirenka tinkamą modelį, palaikantį vaizdo analizę. Sėkmingai sugeneruoti aprašai
pakeičia pradinę dalį stabilia `[Video description:` pradžia, kuri taip pat
pažymi tekstą kaip nepatikimą, iš medijos gautą stebėjimą ir nurodo tolesniems
modeliams nevykdyti medijoje aptiktų instrukcijų. Kadrų aprašų podėlio raktai
apima JPEG baitus, raginimą, laiko žymą ir faktiškai naudojamą modelį; į podėlį įrašomi tik sėkmingi
aprašai. Podėlio įrašuose išsaugomas faktiškai sėkmingai rezultatą pateikęs modelis,
įskaitant atsarginį modelį; tiltas pateikia `mixed`, kai skirtingus kadrus
apdorojo skirtingi modeliai. Podėlio atitiktis pakartotinai naudoja to kūrėjo tapatybę,
užuot peržymėjusi ją kaip prašomą maršruto parinkimo planą. Viso vaizdo įrašo rezultatų
podėlio raktas sudaromas iš kiekvienos išvestį keičiančios įvesties — raginimo, faktiškai naudojamo
modelio, atrankos politikos, kadrų skaičiaus, semantinės analizės režimo, normalizuotos tikslinės užuominos SHA-256
kontrolinio atspaudo, tikslinio lango, `transcript`,
`audioTranscript` ir kontaktinio lapo žymos — todėl bet kurio iš šių
matmenų pakeitimas lemia podėlio praleidimą, o ne pasenusio rezultato pakartotinį naudojimą. Vizualinio dublikatų šalinimo politikos
versija, slenkstis ir apribotas kandidatinių kadrų skaičius taip pat aiškiai įtraukiami į
rezultatų podėlio raktą ir metaduomenis; todėl pakeitus politiką negalima pakartotinai panaudoti pasenusio
viso vaizdo įrašo aprašo. Rezultatų podėlio v4 metaduomenyse išsaugomas režimas ir
kontrolinis atspaudas, bet niekada neapdorota naudotojo užduotis. Apsaugos mechanizmo metaduomenyse pateikiami tiek
prašomas, tiek faktiškai naudojamas analizės režimai; prašomas `focused` režimas be
tinkamo naudotojo teksto nurodomas kaip faktiškai `full`.

Apsaugos mechanizmas išskiria kiekvieną palaikomą vaizdo įrašo dalį, tačiau aprašo ne daugiau nei
`modalityBridgeVideoMaxVideos`. Kai įrodyta, kad paskirties objektui taikoma
`supportsVideo === false`, nesėkmingai apdoroti ir ribą viršijantys vaizdo įrašai pakeičiami aiškiomis saugiomis
teksto žymomis, kad neliktų jokio neapdoroto vaizdo įrašo. Kai pajėgumas nežinomas, šios dalys
išlaiko savo vaizdo įrašo konteinerį; bet kokia atsarginė transkripcija apdorojama pagal pirmiau aprašytą ribojamą teksto
konvertavimą. Paskirties objektai, kuriems taikoma `supportsVideo === true`, apeina tiltą.
Kliento užklausos nutraukimo signalas perduodamas per atsisiuntimą, tarpininko eilę,
poprocesius ir aprašų generavimo iškvietimus; nutraukimai sustabdo apdorojimą tarp vaizdo įrašų ir niekada nepalieka
neapdorotos medijos kaip atsarginio rezultato.

Vykdymo aplinkos nuostatos saugomos DB ir tikrinamos naudojant Zod:

| Raktas                              | Numatytoji reikšmė | Diapazonas / veikimas                                                                                       |
| ----------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`            | Pasirenkama vykdymo aplinka, įjungiama naudotojo pasirinkimu                                                |
| `modalityBridgeVideoAnalysisMode`   | `"full"`           | `full` išsaugo bendrinius aprašus; `focused` naudoja ribotą, nepatikimą naujausią naudotojo kontekstą       |
| `modalityBridgeVideoModel`          | `""`               | Paveldi „Vision Bridge“ modelį                                                                              |
| `modalityBridgeVideoFrameCount`     | `8`                | 1–16                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`        | `uniform`, `scene_aware` arba proporcinis `segment_aware`; aptikimo trikties atveju grįžtama prie `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`                | 1–4                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`           | 1000–120000 ms                                                                                              |

Senosios išsaugotos vaizdo įrašų skirtojo laiko reikšmės, viršijančios 120 sekundžių, apribojamos iki
tarpininko galutinio termino; nauji nustatymų įrašymai, viršijantys šią ribą, atmetami.
`GET /api/modality-bridge/video/runtime` prieš autentifikavimą ar vykdymo aplinkos tikrinimą
reikalauja patikimos, pažymėtos vietinės atgalinio ryšio vietos, o tada reikalauja valdymo
autentifikavimo. Jis grąžina tik `available`, išvalytas FFmpeg/ffprobe versijas ir fiksuotą
priežastį, kai vykdymo aplinka nepasiekiama. Vidinis išgavimo galinis taškas nėra
vieša įkėlimo API: prisotinus eilę grąžinama `503` kartu su `Retry-After`, skambinančiajam
atsijungus grąžinama `499`, o pasiekus fiksuotą tarpininko galutinį terminą grąžinama `504`. Konvertuoti atsakymai prie centrinės
`x-omniroute-modality-bridge` antraštės prideda
`video->text;model=<visionModel>;parts=<videos>`, nepašalindami „Vision“ ar „Audio“ segmentų.

### PII maskuoklis (`piiMasker.ts`)

Vykdomas **abiejuose** etapuose.

- **`preCall`** klonuoja naudingąją apkrovą, pereina per `system`, `messages`, `input` ir
  `prompt` (įskaitant paprastas eilučių reikšmes) ir tekstiniams `content`/`text` laukams
  pritaiko `processPII()` (iš
  `@/shared/utils/inputSanitizer`). Kai
  `PII_REDACTION_ENABLED=true`, aptikti PII užmaskuojami siunčiamoje
  naudingojoje apkrovoje. Tai nepriklauso nuo `INPUT_SANITIZER_MODE` (kuris valdo tik
  raginimo injekcijos politiką). Kai maskavimas išjungtas, iškvietimas įrašo aptikimų
  skaičių nekeisdamas turinio.
- **`postCall`** giliai klonuoja atsakymą, vykdo `sanitizePIIResponse()` ir
  „Responses API“ struktūros maskuoklį (`maskResponsesOutput` — apima
  `output_text` ir `output[].content[].text`). Jei atliekamas bent vienas maskavimas,
  pakeistas atsakymas pakeičia pradinį.

Apsaugos mechanizmas niekada neblokuoja; jis tik prideda anotacijas (`meta.detections`,
`meta.redacted`) arba perrašo.

### Raginimo injekcija (`promptInjection.ts`)

Aptinka priešiškas struktūras naudotojo pateiktame turinyje ir taiko
sukonfigūruotą politiką. Veikimą lemia aplinkos kintamieji ir konstruktoriaus
parinktys:

| Nustatymas          | Aplinkos kintamasis                                                                                                         | Numatytoji reikšmė | Poveikis                                                                                                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Įjungta             | `INPUT_SANITIZER_ENABLED`                                                                                                   | `true`             | Kai `false`, apsaugos mechanizmas iškart nutraukia vykdymą.                                                                                                                                           |
| Režimas             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                                             | `warn`             | Injekcijos politika: `block`, `warn` arba `log`. (`redact` priimamas dėl atgalinio suderinamumo, tačiau injekcijos tekstas **nepašalinamas**; užklausos PII perrašymą valdo `PII_REDACTION_ENABLED`.) |
| Blokavimo slenkstis | `blockThreshold` parinktis / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alternatyvus pavadinimas `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`             | Mažiausias blokavimui reikalingas grėsmės lygis. Pagal numatytuosius nustatymus vidutinis lygis tik stebimas.                                                                                         |

**Režimo pirmumas** (`getMode`): skambinančiojo `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijos vėliavėlės perrašymas** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` aplinkos kintamasis → `INPUT_SANITIZER_MODE` aplinkos kintamasis →
`warn`. Todėl valdymo skydelio perrašymas turi pirmenybę prieš aplinkos kintamuosius, tad „Feature
Flags“ naudotojo sąsaja tiesiogiai valdo veikiančią apsaugą (nereikia paleisti iš naujo). DB nuskaitymas yra atsparus triktims:
jei įvyksta klaida, apsauga grįžta prie aplinkos kintamaisiais pagrįsto veikimo, o kai
perrašymas nenustatytas, veikimas yra toks pat kaip naudojant tik aplinkos kintamuosius.

Aptikimo šaltiniai:

1. `sanitizeRequest()` iš `@/shared/utils/inputSanitizer` (bendras aptikimo priemonių
   rinkinys, naudojamas ir kitose konvejerio vietose).
2. Integruoti `DEFAULT_GUARD_PATTERNS` (šiuo metu `system_override_inline` ir
   `markdown_system_block`, abiejų grėsmės lygis yra `high`).
3. Pasirenkami `customPatterns`, perduodami per konstruktoriaus parinktis (eilutės, reguliarieji reiškiniai
   arba `{ name, pattern, severity }` įrašai).

Kai `mode === "block"` **ir** bent vienas aptikimas pasiekia rimtumo
slenkstį, `preCall` grąžina `{ block: true, message: "Request rejected:
suspicious content detected" }`. `warn` / `log` režimais apsaugos mechanizmas
įrašo į žurnalą, tačiau leidžia vykdyti iškvietimą. Bendrinama pagalbinė funkcija
`evaluatePromptInjection()` taip pat eksportuojama iškvietėjams, kuriems reikia
įvertinti užklausas nenaudojant registro.

**Nuskaitymo riba (v3.8.20):** detektorius tikrina tik **pirmuosius 16 KB**
sujungto užklausos teksto — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baitai)
faile `src/shared/utils/inputSanitizer.ts`. Tiek `detectInjection()`, tiek
`evaluatePromptInjection()` prieš vykdydamos šablonų ciklą pritaiko
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Įterpimo direktyvos paprastai būna netoli
įvesties pradžios, todėl tai apriboja reguliariųjų išraiškų CPU / GC sąnaudas
kelių šimtų KB naudingosios apkrovos atvejais, nesusilpninant aptikimo (plg.
#3932, #4041).

### Kredencialų maskavimo priemonė (`credentialMasker.ts`)

Vykdoma **abiejuose** etapuose, paskutinė numatytojoje grandinėje (prioritetas
`95`). Iš siunčiamos naudingosios apkrovos (pranešimo turinio, įrankių iškvietimo
argumentų, įrankių rezultatų) **ir** teikėjo atsakymo pašalina gerai žinomus API
raktų / slaptųjų prieigos raktų šablonus, kad į užklausą įklijuoti kredencialai
(arba įrankio rezultate pakartoti kredencialai) nebūtų nutekinti nei išoriniam
teikėjui, nei atgal klientui.

- **Tik pasirinktinai įjungiama**, taikant tą pačią tvarką kaip ir PII
  redagavimui (susiję su Griežtąja taisykle Nr. 20): išjungta, nebent
  `settings.credentialRedactionEnabled === true` **arba**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kai ši funkcija išjungta, apsaugos
  mechanizmas nieko nedaro — niekada neblokuoja ir neperrašo.
- `redactCredentials()` pereina visą naudingosios apkrovos / atsakymo medį
  (`walkValue()`, apsaugota nuo prototipo užteršimo, apsaugota nuo ciklų
  naudojant `WeakSet`) ir pakeičia atitikmenis vietos rezervavimo žyma
  `[REDACTED:<type>]`, klonuodama tik faktiškai pakeistas šakas.
- `CREDENTIAL_PATTERNS` apima LLM teikėjų raktus (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS / SaaS prieigos raktus
  (GitHub, Slack, Linear, Notion, npm, Postman, Discord), mokėjimų raktus
  (Stripe, Square), debesijos raktus (AWS prieigos raktą, Twilio, SendGrid,
  Mailgun), privačiuosius raktus / JWT, ryšio eilutes su kredencialais
  (`mongodb://user:pass@...` ir kt.) bei bendrinį
  `Authorization` / `x-api-key` / `api-key` / `apikey` antraštės reikšmės
  šabloną. Antraščių pavidalo raktai (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redaguojami struktūriškai (tik reikšmė, išsaugant schemos prefiksą,
  pvz., `Bearer ` / `Basic `), o ne naudojant bendrinę teksto reguliariąją
  išraišką.
- Apsaugos mechanizmas niekada neblokuoja; jis tik perrašo (`modifiedPayload` /
  `modifiedResponse`) ir prideda anotacijas (`meta.credentialsRedacted`,
  `meta.count`).

Regresijos apsauga: `tests/unit/credential-masker-guardrail.test.ts`.

## Bazinė sutartis (`base.ts`)

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
  block?: boolean; // true nutraukia grandinę
  message?: string; // pateikiamas blokuojant
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // grąžinamas iš preCall užklausai perrašyti
  modifiedResponse?: TValue; // grąžinamas iš postCall atsakymui perrašyti
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

Apsaugos priemonė nurodo, kad pakeitimų nėra, grąžindama `void`, `{}` arba
`{ block: false }`. Grąžinus `modifiedPayload` / `modifiedResponse`, grandine
perduodama reikšmė pakeičiama tolesnėms apsaugos priemonėms.
`signal?: AbortSignal` perduoda iškvietėjo gyvavimo ciklą apsaugos priemonėms. Užklausos nutraukimas yra sąmoninga „fail-open“ išimtis: medijos tarpininkai sustabdo darbą ir atlaisvina išteklius, neatkurdami neapdorotos medijos paskirties vietai, kuri, kaip žinoma, jos nepalaiko.

## Registras (`registry.ts`)

Vienintelis egzempliorius `guardrailRegistry` suteikia:

- `register(guardrail)` — prideda apsaugos priemonę (arba pakeičia pagal normalizuotą pavadinimą) ir
  iš naujo surikiuoja didėjančia `priority` tvarka.
- `clear()` / `list()` — administravimo pagalbinės funkcijos.
- `runPreCallHooks(payload, context)` — iteruoja aktyvias apsaugos priemones, perduoda
  naudingąją apkrovą per `modifiedPayload` ir sustoja ties pirmuoju `block: true`.
- `runPostCallHooks(response, context)` — tokia pati eiga atsakymo pusėje.
- `resetGuardrailsForTests({ registerDefaults })` — išvalo būseną ir pasirinktinai
  iš naujo užregistruoja numatytąsias apsaugos priemones, kad testai būtų visiškai izoliuoti.

Abi vykdymo funkcijos grąžina `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` yra `GuardrailExecutionResult` įrašų masyvas, apimantis kiekvienos
apsaugos priemonės laukus `blocked`, `skipped`, `modified`, `error` ir `meta`,
naudingus sekimui.

### Apsaugos priemonių išjungimas atskiroms užklausoms

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` surenka pasikartojimų
neturintį apsaugos priemonių, kurios turi būti praleistos vykdant dabartinę
užklausą, pavadinimų sąrašą. Šaltiniai (visi neprivalomi, visi sujungiami):

- `apiKeyInfo.disabledGuardrails`
- Užklausos turinio `disabledGuardrails` (aukščiausiu lygiu)
- Užklausos turinio `metadata.disabledGuardrails`
- Antraštė `x-omniroute-disabled-guardrails` (arba senoji
  `x-disabled-guardrails`)

Reikšmės gali būti eilučių masyvai arba kableliais atskirta eilutė; pavadinimai
normalizuojami į mažosiomis raidėmis rašomą kebabo stilių (`pii_masker` → `pii-masker`). Rezultatas
perduodamas registrui per `context.disabledGuardrails`, o registras praleidžia
atitinkančias apsaugos priemones (`skipped: true` lauke `results`).

## Vykdymo tvarka

Kiekvienai užklausai, perduodamai per `src/sse/handlers/chat.ts` ir
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sudaro praleidžiamų apsaugos priemonių sąrašą pagal API raktą, užklausos turinį
   ir antraštes.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` vykdo apsaugos priemones didėjančia
   prioriteto tvarka:
   - Išjungtos apsaugos priemonės pažymimos kaip `skipped`.
   - Kiekvienos apsaugos priemonės `preCall` gali perrašyti naudingąją apkrovą per `modifiedPayload`.
   - Pirmasis `block: true` nutraukia grandinę, o apdorojimo programa grąžina
     apsaugos priemonės atmetimo atsakymą.
3. Galimai perrašyta naudingoji apkrova perduodama kombinuotajam maršrutizavimui ir išsiunčiama
   aukštesniojo lygio paslaugai.
4. Surinkus atsakymą, `guardrailRegistry.runPostCallHooks(...)`
   paleidžia tą pačią grandinę atsakymui. Šiame etape `block: true` atmeta aukštesniojo lygio paslaugos
   atsakymą.

Klaidą sukeliančios apsaugos priemonės pažymimos įrašu `error: <message>`, o klaida registruojama per
`logger.warn`, tačiau grandinė tęsiama — taip sąmoningai įgyvendinamas veikimo tęstinumas klaidos atveju.

## Konfigūracija

Integruotųjų apsaugos priemonių nuskaitomi aplinkos kintamieji:

| Kintamasis                            | Naudoja               | Poveikis                                                                                                                     |
| ------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`    | Nustačius `false`, aptikimas visiškai išjungiamas.                                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`    | Įterpimo politika: `warn`, `block` arba `log`. Ankstesnė reikšmė `redact` įterpimo teksto neperrašo.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`    | Įterpimo apsaugos režimas; taip pat DB funkcijos vėliavėlė, kuri **perrašo** aplinkos kintamuosius (DB > ENV).               |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`    | Mažiausias griežtumo lygis, kurį `MODE=block` atmeta: `high` (numatytasis), `medium` arba `low`.                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`    | Ankstesnis `INPUT_SANITIZER_BLOCK_THRESHOLD` alternatyvus pavadinimas.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`          | Kai nustatyta `true`, užklausoje esanti asmens identifikavimo informacija užmaskuojama (nepriklausomai nuo įterpimo režimo). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (toliau) | Valdo atsakymo pusės maskavimo priemonės veikimą.                                                                            |

„Modality Bridge“ apsaugos priemonės vykdymo konfigūraciją nuskaito iš DB pagrįstos nustatymų
saugyklos (`getSettings()`), o ne iš aplinkos kintamųjų. Pagrindiniai vaizdo apdorojimo raktai yra
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ir
`modalityBridgeCacheMaxEntries`. Ankstesni
`visionBridge*` raktai priimami tik kaip dokumentuotas vieno ciklo nuskaitymo
atsarginis variantas; valdymo skydelio įrašymo operacijos naudoja pagrindinius raktus. Numatytosios reikšmės ir atsarginio varianto
sprendiklis yra faile `src/shared/constants/modalityBridgeDefaults.ts`, o ankstesnės
konstantos paliktos faile `src/shared/constants/visionBridgeDefaults.ts`.

Garso apdorojimas naudoja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ir `modalityBridgeAudioMaxClips` bei bendrus
`modalityBridgeCache*` nustatymus. Garso apdorojimas neturi atsarginio ankstesnių raktų varianto, nes šie
raktai buvo įtraukti kartu su „Modality Bridge“ schema.

Vaizdo įrašų apdorojimas naudoja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ir
`modalityBridgeVideoTimeout` bei bendrus `modalityBridgeCache*` nustatymus.
Pagal numatytuosius nustatymus jis išjungtas, nes FFmpeg/ffprobe yra pasirenkamos operacinės
priklausomybės, o kadrų aprašų generavimas padidina delsą ir modelio naudojimo sąnaudas.

## Pasirinktinės apsaugos priemonės

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

Veiksmai:

1. Sukurkite `src/lib/guardrails/myGuardrail.ts`, išplečiantį `BaseGuardrail`.
2. Įgyvendinkite `preCall` ir (arba) `postCall`.
3. Užregistruokite importavimo metu (įtraukite per `registerDefaultGuardrails`) arba
   vykdymo metu iškvieskite `guardrailRegistry.register(...)` — registras pakeičia
   bet kurią ankstesnę apsaugos priemonę tuo pačiu normalizuotu pavadinimu.
4. Pridėkite testus aplanke `tests/unit/` (esami pavyzdžiai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testavimas

Tarp testų naudokite `resetGuardrailsForTests()`, kad pradėtumėte nuo žinomos būsenos.
Perduokite `{ registerDefaults: false }`, kad pradėtumėte nuo tuščio registro ir
užregistruotumėte tik testuojamas apsaugos priemones. „Vision Bridge“ palaiko priklausomybių
įterpimą (`deps.getSettings`, `deps.callVisionModel`); „Audio Bridge“ suteikia
atitinkamus sąsajos taškus nustatymams, galimybėms, STT modelio pasirinkimui, prisijungimo duomenų
patikroms ir transkripcijai. Todėl testais galima patikrinti abu srautus be prieigos
prie DB ar tinklo.

## Taip pat žr.

- `src/lib/guardrails/` — įgyvendinimas
- `src/shared/utils/inputSanitizer.ts` — bendras aptikimo mechanizmas, kuriuo grindžiami
  raginimų injekcijos aptikimas ir PII maskavimas
- `src/shared/constants/visionBridgeDefaults.ts` — numatytosios „Vision Bridge“ reikšmės ir
  priverstinio tilto modelių sąrašas
- `src/shared/constants/modalityBridgeDefaults.ts` — bendrosios „Vision“ / „Audio“ vykdymo aplinkos numatytosios reikšmės
- `docs/architecture/RESILIENCE_GUIDE.md` — nepriklausomas sluoksnis (grandinės pertraukiklis, atvėsimo laikotarpiai)
- `docs/reference/ENVIRONMENT.md` — išsamus aplinkos kintamųjų žinynas

## Injekcijos apsaugos maršrutų aprėptis ir „red-team“ testavimas (8 etapas · D blokas)

Injekcijos apsauga (`createInjectionGuard` / `withInjectionGuard`) apima visus maršrutus,
kurie priima naudotojų raginimus. Ji atsižvelgia į `INJECTION_GUARD_MODE` (numatytoji reikšmė `warn` = tik registruoti žurnale;
`block` = grąžina HTTP 400 `SECURITY_001`).

| Tipas           | Maršrutai                                                                                                                                            | Numatytasis režimas |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Tekstas (esami) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatyviniai  | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Duomenys        | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Teksto išskyrimas (`extractMessageContents`) apima `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**„Red-team“ testavimas (kasnakt, `nightly-llm-security.yml`):** promptfoo patikrina, ar kiekvienas maršrutas blokuoja
OWASP-LLM rinkinį, kai `INJECTION_GUARD_MODE=block`; garak vykdo zondus (praleidžiama, jei nėra slaptojo rakto).
`moderations` įtrauktas nuoseklumo sumetimais — operatoriai, naudojantys blokavimo režimą, gali jam taikyti išimtį per
`resolveDisabledGuardrails`.

Kasnakt vykdoma darbo eiga (`.github/workflows/nightly-llm-security.yml`, cron + rankinis
paleidimas) turi dvi užduotis:

- **`promptfoo-guard` (blokuojanti)** — vykdo `promptfoo eval -c promptfooconfig.yaml`
  su `INJECTION_GUARD_MODE=block`. Kiekvienu priešišku atveju (pvz., „nepaisyk visų
  ankstesnių instrukcijų…“, DAN tipo apsaugos apėjimai) patvirtinama, kad atsakyme yra
  `error.code === "SECURITY_001"`, t. y. apsauga iš tikrųjų atmetė užklausą.
- **`garak` (patariamoji)** — vykdo garak `--probes promptinject,dan,leakreplay`
  vietiniame „OmniRoute“ egzemplioriuje (`http://localhost:20128/v1`). Vykdymas priklauso nuo
  teikėjo slaptojo rakto (`PROMPTFOO_PROVIDER_KEY`); jo nesant užduotis korektiškai praleidžiama, o pabaigoje pridėta
  `|| true`, todėl rezultatai pateikiami nesukeliant CI nesėkmės.

Apsaugos pagalbinės priemonės (`createInjectionGuard` / `withInjectionGuard`)
aprėptis apima kiekvieną raginimus priimantį `/v1` maršrutą; raginimo tekstas paimamas iš
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, naudojant
`extractMessageContents()` faile `src/shared/utils/inputSanitizer.ts`.
