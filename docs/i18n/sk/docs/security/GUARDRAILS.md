# Guardrails (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizované:** 2026-08-29 — v3.8.51 (pôvod prepisu Video Bridge deklaruje volajúci,
> server ho zatiaľ neoveruje — spresnené podľa #11661)

Guardraily vynucujú bezpečnosť, pravidlá a transformácie obsahu na rozhraní
medzi OmniRoute a nadradenými poskytovateľmi. Každý guardrail môže kontrolovať
(a voliteľne odmietnuť, transformovať alebo anotovať) dátové časti požiadaviek
(`preCall`) a odpovede nadradených poskytovateľov (`postCall`).

Systém je navrhnutý ako **fail-open**: ak guardrail počas vykonávania vyhodí
výnimku, register zaznamená chybu a namiesto zlyhania požiadavky pokračuje
ďalším guardrailom. Blokovanie je explicitné rozhodnutie (`block: true`), nikdy
nie náhoda.

## Vstavané ochranné mechanizmy

Register pri importe automaticky načíta šesť ochranných mechanizmov v poradí podľa priority
(pozri `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Názov               | Fáza(-y)       | Súbor                 |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižšie čísla priority sa spúšťajú **ako prvé**.

### Most pre obrazový vstup (`visionBridge.ts`) — Most modalít PR-1

Zachytáva požiadavky obsahujúce obrázky smerované na **modely bez podpory obrazového vstupu** a buď
presmeruje celú požiadavku na model podporujúci obrazový vstup, alebo pred
volaním nadradenej služby nahradí obrazové časti textovými opismi vytvorenými
konfigurovateľným modelom pre obrazový vstup. Poskytovatelia podporujúci iba text tak môžu transparentne
spracúvať multimodálne dátové časti.

Priebeh:

1. Preskočí sa, ak cieľový model už podporuje obrazový vstup (pokiaľ sa nenachádza v
   zozname modelov s vynúteným mostom `isVisionBridgeForcedModel`).
2. Obrazové časti sa extrahujú prostredníctvom `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ktorý deleguje na **zjednotený detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný zdroj
   pravdy zdieľaný s filtrom kompatibility kombinácií.
   Extrakcia je obmedzená zoznamom povolených častí najvyššej úrovne s tvarmi,
   ktoré môže `replaceImageParts` vložiť späť (kontrakt extrakcie↔nahradenia): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` a Responses API `input_image`. Vnorené zhody a
   tvary obsahujúce iba indikátory sú určené pre filter kombinácií a nikdy sa neextrahujú.
   Ak sa žiadne nenájdu, krok sa preskočí.
3. Konfigurácia za behu sa určí prostredníctvom `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové kľúče nastavení `modalityBridge*`
   majú prednosť; staršie kľúče `visionBridge*` zostávajú ako **záložná možnosť na jeden cyklus**
   (okno na návrat k predchádzajúcej verzii). Ak je most zakázaný, preskočí sa ešte pred akýmkoľvek
   prechádzaním médií.
4. Selektor režimu (`modalityBridgeVisionMode`, pozri tabuľku nižšie) rozhoduje
   medzi presmerovaním a opisom. Presmerovanie vráti `modifiedPayload`, v ktorom je zmenené iba `model`,
   spolu s metaúdajmi `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta opisu: počet obrázkov sa obmedzí na `maxImages`, zostaví sa výzva zohľadňujúca úlohu,
   skontroluje sa vyrovnávacia pamäť opisov, model pre obrazový vstup sa zavolá **paralelne**
   (`Promise.allSettled`) a namiesto obrazových častí sa vložia textové časti
   `[Image N]: <description>`. Neúspešný opis vráti `null` a pôvodná obrazová časť sa
   **zachová** (#4012) — s výnimkou cesty opisu kombinácie, keď zlyhali všetky
   opisy; v takom prípade dostane potvrdená nadradená služba bez podpory obrazového vstupu zástupný text
   `(unavailable — no vision-capable provider connected)` (#8430).
6. Vrátia sa `modifiedPayload` + metaúdaje (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor režimu (`modalityBridgeVisionMode`)

| Režim      | Predvolený | Správanie                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | Pôvodná heuristika bez zmien (#6640/#7204): modely, ktoré nie sú kombináciami ani modelmi `auto/`, sa presmerujú na najlepší model pre obrazový vstup, pokiaľ pôvodný model už nemá použiteľné prihlasovacie údaje (vtedy sa použije opis); kombinované ciele vždy používajú opis.                                                                      |
| `describe` |            | Vždy sa použije opis — blok presmerovania sa úplne preskočí; vždy odpovedá model zvolený používateľom.                                                                                                                                                                                                                                                  |
| `reroute`  |            | Vynúti presmerovanie: kontrola zachovania modelu s prihlasovacími údajmi sa obíde. Kontrola prihlasovacích údajov **cieľa** presmerovania sa však naďalej uplatňuje — ak neexistuje žiadny použiteľný cieľ podporujúci obrazový vstup, požiadavka prejde na opis, aby nespracované obrázky nikdy nedorazili do backendu podporujúceho iba text (#8430). |

Vynútené režimy ukončia spracovanie **pred** spustením automatickej heuristiky; správanie režimu `auto`
je bajtovo identické s ochranným mechanizmom pred PR-1.

#### Rozsah kľúča API (`visionBridgeKeyScope.ts`)

Keď kľúč API volajúceho obmedzuje `allowedConnections`, fondy kvót
(`allowedQuotas`) alebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most vyberá iba
modely na presmerovanie a opis, ktoré môže kľúč používať, na pripojeniach, ktoré môže
kľúč používať. Volanie opisu potom vždy prechádza cez samoslučku OmniRoute s
hlavičkou `x-omniroute-self-loop-key-id`, takže prijímajúca požiadavka chatu
opätovne vynúti pravidlá daného kľúča pre pripojenia a modely. `enforceApiKeyPolicy()`
rešpektuje túto hlavičku iba spolu s bearer tokenom samoslučky, takže môže prístup
iba zúžiť, a identifikátor, ktorý sa nedá rozpoznať, sa odmietne.

Ak pre kľúč nie je povolený žiadny model pre obrazový vstup, cesta opisu ustúpi a
požiadavka prejde bez zmeny, s rovnakým správaním otvorenia pri zlyhaní ako pri zakázanom
ochrannom mechanizme (metaúdaje `{ skipped: true, reason: "no_permitted_vision_model" }`).
Požiadavky bez kľúča a kľúče bez týchto obmedzení sa správajú presne rovnako ako
predtým.

#### Výzva opisu zohľadňujúca úlohu (`modalityBridgeVisionTaskAware`)

Predvolená hodnota je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pripája
text **poslednej správy používateľa** (skrátený na 500 znakov) k základnej
výzve na opis, čím zameriava opis na to, na čo sa používateľ skutočne pýtal
(vzor codex-vision-proxy), a žiada model videnia, aby prepísal viditeľný
text. Ak je príznak vypnutý — alebo chýba text používateľa — základná výzva sa použije bez zmeny.

Vlastná požiadavka spätnej slučky opisu kompatibilná s OpenAI (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vždy požaduje `image_url.detail: "high"` —
bezpodmienečne, pre každého volajúceho/poskytovateľa, nezávisle od akéhokoľvek signálu klienta.
Vzorkovanie s nízkou úrovňou detailov znižuje presnosť OCR presne pri úlohe prepisu
textu, ktorú táto výzva požaduje, takže samotné volanie opisu vždy požaduje vysokú
úroveň detailov bez ohľadu na úroveň detailov použitú v pôvodnej prichádzajúcej požiadavke. Toto
ovplyvňuje iba telo internej požiadavky na opis; nemení spôsob, akým
OmniRoute preposiela vlastné `image_url.detail` volajúceho v primárnej požiadavke —
táto predvolená hodnota sa uplatňuje samostatne a iba pre rozpoznaných klientov OpenCode v
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Vetva
spätnej slučky opisu používajúca prenosový formát Anthropic nemá pole `detail`
a ani jedna z týchto predvolených hodnôt ju neovplyvňuje.

#### Limit výstupu opisu (`modalityBridgeVisionMaxChars`)

| Kľúč                           | Predvolená hodnota | Rozsah              |
| ------------------------------ | ------------------ | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`                | `0` alebo 100–50000 |

`0` (predvolená hodnota) znamená **bez limitu** — opis vrátený funkciou
`callVisionModel()` sa odovzdá bez úprav, čím sa zachová existujúce
správanie. Akákoľvek hodnota v rozsahu 100–50000 skráti opis a pridá
príponu `…` predtým, ako sa vloží späť v tvare `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Pri úlohách OCR náročných na detaily túto hodnotu zvýšte, ak následný model potrebuje
úplný prepis; znížte ju, ak chcete obmedziť spotrebu tokenov pri príliš zhovorčivých modeloch videnia.
Pole na ovládacom paneli sa nachádza na karte Vision v paneli Advanced
(`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) a každú
hodnotu od 1 do 99 zvýši na minimálnu hodnotu 100, zatiaľ čo explicitnú hodnotu `0`
ponechá nezmenenú — `0` je samostatne platná hodnota Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nielen
predvolená hodnota pre stav „nenastavené“.

#### Vyrovnávacia pamäť opisov (`modalityBridge/bridgeCache.ts`)

Procesom globálne zdieľaná vyrovnávacia pamäť LRU + TTL v pamäti pre výstupy opisov.
Kľúč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
rámcovaním pomocou dĺžkových prefixov (bez kolízií hraníc polí). Komponent modelu je
**nakonfigurovaný** model mosta, nie model, ktorý skutočne odpovedal —
`callVisionModel` môže interne použiť záložný model a vytváranie kľúčov podľa jednotlivých
pokusov by fragmentovalo vyrovnávaciu pamäť. Neúspešné opisy sa nikdy neukladajú do vyrovnávacej pamäte. Nastavenia:

| Kľúč                            | Predvolená hodnota | Rozsah  |
| ------------------------------- | ------------------ | ------- |
| `modalityBridgeCacheEnabled`    | `true`             | —       |
| `modalityBridgeCacheTtlMinutes` | `60`               | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`              | 10–5000 |

#### Normalizácia vzdialených obrázkov (opis v spätnej slučke/načítanie base64)

Keď most sám načíta **vzdialený** obrázok — pri vlastnom volaní opisu Anthropic
a pri konverzii do base64 pre prenosový formát claude
(`ensureBase64ImagesForClaudeWire`), v oboch prípadoch prostredníctvom
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledný dátový
URI sa pred vložením do požiadavky modelu videnia spracuje funkciou `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Obrázky s nadmernou veľkosťou sa zmenšia tak, aby ich
**dlhšia hrana mala 2048px** (v súlade s limitom zmenšenia, ktorý OpenAI/Anthropic už
uplatňujú na strane servera), čím sa zníži objem nahrávaných údajov a latencia bez zmeny
toho, čo model videnia vidí. Zmena veľkosti používa `sharp`, načítaný prostredníctvom
dynamického importu: na platforme, kde sa nepodarí načítať jeho natívny
binárny súbor, `normalizeDataUri()` **nikdy nevyvolá výnimku** — vráti
pôvodné bajty bez úprav, takže cesta opisu/konverzie do base64
bude vždy fungovať. Údaje, ktoré nie sú obrázkom (načítanie nevrátilo
dekódovateľný obrázok), sa takisto odovzdajú bez zmeny. Táto normalizácia
je obmedzená na obrázky, ktoré most načíta pre svoje vlastné volanie — nikdy
sa neuplatňuje na nespracovaný, priamo preposielaný obsah volajúceho, v súlade
s princípom zmien výhradne na základe súhlasu (Pevné pravidlo č. 20).

#### Schéma nastavení + migrácia

Nové kľúče `modalityBridge*` sú validované pomocou Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojica `modalityBridgeCache*` a skupina
`modalityBridgeAudio*` používaná mostom zvuku. Migrácia
`141_modality_bridge_settings.sql` kopíruje existujúce staršie hodnoty
`visionBridge*` do zodpovedajúcich nových kľúčov (idempotentne, nikdy neprepíše
hodnotu `modalityBridge*` nastavenú prevádzkovateľom); staršie kľúče zostanú
počas jedného cyklu vydania akceptované ako záložný zdroj pri čítaní.

#### Hlavička transparentnosti + štatistiky

Odpovede transformované opisom obsahujú
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(vytvorenú funkciou `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
pridanú funkciou `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Presmerované požiadavky nedostanú **žiadnu** hlavičku — obsah zostal nezmenený a zmena
modelu je už viditeľná v poli `model` tela odpovede.

`GET /api/modality-bridge/stats` (autentifikácia správy, rovnaká úroveň ako
`GET /api/settings`) vracia počítadlá jednotlivých modalít uložené v pamäti
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pre `vision`, `audio` a
`video`. `averageLatencyMs` používa ako menovateľ `latencySamples`, nie všetky
pokusy; operácia bez merania času nevytvára fiktívnu vzorku s nulovým počtom
milisekúnd. `bridged` zostáva spätne kompatibilným aliasom úspešných konverzií;
neúspešné pokusy ho nezvyšujú.
Počítadlá sa zámerne vynulujú pri reštarte procesu
(telemetria, nie účtovníctvo).

#### Konfigurácia ovládacieho panela

Vyhradená stránka ovládacieho panela sa nachádza na adrese
`/dashboard/settings/modality-bridge`. Jej karty `Vision`, `Audio` a
`Video`, ktoré možno adresovať prostredníctvom URL, zachovávajú pri prepínaní
parametre dopytu a menia iba hodnotu `tab`.
Karta Vision ponúka zapnutie, režim, výber modelu (vrátane automatického
predvoleného nastavenia), výzvy zohľadňujúce úlohu, rozšírené limity časového
limitu/obrázka/dĺžky opisu/vyrovnávacej pamäte, počítadlá behu a chránenú
vzorovú požiadavku. Karta Audio je takisto aktívna: ponúka zapnutie, výber
modelu iba pre STT s možnosťou Auto, limity časového limitu/maximálnej dĺžky
klipu, počítadlá zvuku a vzorový test `input_audio`. Karta Video je funkčná:
uvádza stav prostredia FFmpeg/ffprobe — jeden zo štyroch explicitných stavov
používateľského rozhrania (`unknown`, kým prebieha zisťovanie alebo ho nebolo
možné dokončiť, `restricted` na hostiteľovi ovládacieho panela mimo spätnej
slučky, kde sa zisťovanie preskočí na strane klienta, `unavailable` po vykonaní
zisťovania a potvrdení nedostupnosti alebo `available` s verziami
FFmpeg/ffprobe) — uchováva limity zapnutia/modelu/snímok/videa/časového limitu,
filtruje výber modelov iba na modely podporujúce obrazové vstupy a zobrazuje
počítadlá videa.

Pôvodná karta Vision Bridge v nastaveniach AI je kompatibilný odkaz na novú
stránku; už neobsahuje druhú kópiu formulára. Media Providers tiež prepája
pracovné postupy Image-to-Text a Speech-to-Text s príslušnými kartami Modality
Bridge bez odstránenia existujúceho testovacieho prostredia Speech-to-Text.

**Obídenie prijatia pri vlastnej spätnej slučke:** keď je volanie opisu
smerované cez vlastnú slučku `/v1` služby OmniRoute (neštandardný model
poskytovateľa), podpožiadavka odosiela
`x-omniroute-admission-bypass: internal` a autentifikuje sa pomocou vyriešeného
poverenia vlastnej spätnej slučky — lokálnej sentinelovej hodnoty
`sk_omniroute` v lokálnom režime alebo kľúča prostredia
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` nakonfigurovaného operátorom (#1350),
aby nasadenia s `REQUIRE_API_KEY=true` mohli naďalej vykonať volanie opisu.
Obídenie sa akceptuje iba pre tieto presné poverenia, takže externí klienti
nemôžu pomocou tejto hlavičky preskočiť prijatie.

Staršie predvolené hodnoty sa nachádzajú v
`src/shared/constants/visionBridgeDefaults.ts`; nové predvolené hodnoty
režimu/funkcie zohľadňujúcej úlohu/vyrovnávacej pamäte a resolver nastavení sa
nachádzajú v `src/shared/constants/modalityBridgeDefaults.ts`. Ochranný
mechanizmus ponúka možnosť konštruktora `deps`, aby testy mohli vložiť falošné
implementácie `getSettings` a `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytáva chatové požiadavky obsahujúce zvuk skôr, než sa dostanú k cieľu,
o ktorom nie je známe, že prijíma zvukový vstup. Chatovú požiadavku nikdy
nepresmeruje: zvukové časti sa prepíšu prostredníctvom existujúceho koncového
bodu kompatibilného s OpenAI pre viacdielne požiadavky a vybraný chatový model
pokračuje s textovými prepismi.

Postup:

1. Určte `supportsAudio` prostredníctvom `getResolvedModelCapabilities()`.
   Explicitné metadáta registra poskytovateľov majú prednosť, potom nasledujú
   statické metadáta modelu a následne synchronizované `modalities_input`.
   Deklarovaný zoznam vstupov bez `audio` má hodnotu `false`; ak neexistujú
   žiadne dôkazy o schopnosti, hodnota zostáva `null`. Hodnoty `false` aj
   `null` aktivujú konzervatívny most, zatiaľ čo `true` ho obíde.
2. Určte nastavenia `modalityBridgeAudio*` a pomocou zdieľaného detektora
   `detectMediaParts()` extrahujte z každej správy zameniteľné zvukové časti
   najvyššej úrovne. Podporované formáty prenosu sú OpenAI `input_audio`,
   `audio_url` a `source.media_type: "audio/*"`. Vnorený zvuk sa zisťuje na
   účely smerovania, ale cesta na nahradenie ho neodstráni. Množstvo práce je
   obmedzené hodnotou `modalityBridgeAudioMaxClips`; neskoršie časti zostávajú
   nezmenené.
3. Rešpektujte nakonfigurovanú hodnotu `provider/model` alebo nechajte
   `selectAudioBridgeModel()` prejsť položky `AUDIO_TRANSCRIPTION_PROVIDERS`
   v stabilnom poradí katalógu a vybrať prvý model s použiteľným aktívnym
   poverením poskytovateľa.
4. `callAudioTranscription()` skonvertuje zvuk vo formáte base64/data-URI na
   viacdielny súbor `file` alebo stiahne vzdialenú adresu `audio_url`
   prostredníctvom ochrany odchádzajúcich spojení povoľujúcej iba verejné
   adresy, s pripnutím DNS a limitom 25 MB. Následne odošle súbor a vybraný
   model metódou POST do lokálnej vlastnej spätnej slučky
   `/v1/audio/transcriptions`, autentifikovanej pomocou
   `resolveSelfLoopBearer()`. Existujúca trasa prepisu vykonáva bežné
   vyhľadanie poverení, spracovanie intervalu čakania/obmedzenia frekvencie
   a odoslanie poskytovateľovi.
5. Úspešné volania nahradia svoje časti hodnotou
   `[Audio N]: <transcript>`. Volania sa spúšťajú pomocou
   `Promise.allSettled`: individuálne zlyhanie zachová pôvodnú zvukovú časť
   (kontrakt #4012). Ak zlyhajú všetky volania a je preukázané, že cieľ má
   `supportsAudio === false`, časti sa zmenia na
   `[Audio N]: (unavailable — no STT provider connected)` (kontrakt #8430).
   Pri neznámom cieli (`null`) zostane pri zlyhaní všetkých volaní požiadavka
   nezmenená. Preukázateľne iba textový cieľ bez použiteľného poverenia STT
   dostane rovnaký explicitný zástupný text bez vykonania sieťového volania.

Úspešné prepisy používajú LRU/TTL vyrovnávaciu pamäť Modality Bridge platnú pre
celý proces. Kľúč kombinuje odkaz na zvuk, stabilné označenie operácie
`audio-transcription` a vybraný model STT; zlyhania sa nikdy neukladajú do
vyrovnávacej pamäte. Pokusy o spracovanie zvuku aktualizujú zdieľané počítadlá
`bridged`, `cacheHits`, `failures` a `lastUsedAt`.
Transformované odpovede obsahujú
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nezmenené požiadavky nedostanú segment Audio Bridge.

Nastavenia behu sú uložené v databáze a overované pomocou Zod:

| Kľúč                          | Predvolená hodnota | Rozsah                   |
| ----------------------------- | ------------------ | ------------------------ |
| `modalityBridgeAudioEnabled`  | `true`             | —                        |
| `modalityBridgeAudioModel`    | `""`               | Automaticky alebo ID STT |
| `modalityBridgeAudioTimeout`  | `60000`            | 1000–300000              |
| `modalityBridgeAudioMaxClips` | `3`                | 1–10                     |

Zdieľaná vyrovnávacia pamäť je naďalej riadená nastaveniami `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Premostenie videa (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachytáva časti videa najvyššej úrovne v `messages` rozhrania Chat Completions a vo
vstupe `input` rozhrania Responses API pred zavolaním cieľa bez známej natívnej
podpory videa. Podporované formáty sú `input_video`, `video_url`, `video_source`,
adresy URL HTTPS a dátové URI `data:video/*;base64,...`. Samotné názvy súborov
v texte sa nepovažujú za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zabezpečuje prechádzanie požiadavky,
kontrolu schopností a zásad, agregáciu pre jednotlivé požiadavky a dátový obsah
odpovede. Spracovanie jednotlivých videí — získanie, vyrovnávacia pamäť celého
výsledku, opis sekvencie snímok (ktorý zahŕňa zvukový prepis deklarovaný volajúcim)
a metriky, prerušenie a čistenie pre jednotlivé pokusy — je skryté za
`processVideoPart` v `videoBridgePipeline.ts`, ktoré sa volá raz pre každú časť
videa v rámci cyklu metódy `preCall`. Tento modul tiež definuje explicitné hranice
portov `VideoMediaBrokerPort` (získavanie bajtov a extrakcia vzorkovaných snímok),
`VideoAudioTranscriptionPort` (spájanie zvukového prepisu deklarovaného volajúcim
s titulkami vzorkovaných snímok) a `VideoDrilldownPort` (hranica perzistencie
podrobného preskúmania snímok; zatiaľ nie je zapojená do `processVideoPart` —
záznamy podrobného preskúmania dnes zapisuje iba samostatná trasa
`/api/modality-bridge/video/drilldown`).

Verejná cesta požiadavky `/v1` nikdy neimportuje ani nevyvoláva podproces. Vzdialené
videá sa sťahujú s limitom 50 MiB; vložené videá vo formáte base64 majú
konzervatívny limit 36 MiB dekódovaných dát na jedno video, aby obálka
modelu, správ a rámcovania zostala v rámci verejného limitu 50 MiB na prijatie
požiadavky JSON. Dĺžka vložených dát a odhady dekódovanej veľkosti sa kontrolujú
pred alokáciou. Pri počiatočnej vzdialenej adrese URL aj pri každom presmerovaní
sa vyžaduje HTTPS, pričom sa používa existujúca ochrana odchádzajúcej komunikácie
iba na verejné adresy s pripnutím DNS. Bajty potom prechádzajú presnou internou
hranicou sprostredkovateľa `POST /api/modality-bridge/video/extract`. Táto trasa
je zároveň `LOCAL_ONLY` a `SPAWN_CAPABLE`, prijíma iba autentifikovanú požiadavku
z dôveryhodného loopback rozhrania v rámci procesu a nikdy neprijíma adresu URL,
cestu v súborovom systéme, spustiteľný súbor ani zoznam argumentov. Spracovanie
veľkosti tela v API a inkrementálny čítač tela obslužnej rutiny nezávisle
vynucujú limit 50 MiB pre vstup sprostredkovateľa. Jeho ohraničený front vykonáva
naraz jednu extrakciu, povoľuje štyri čakajúce úlohy a obmedzuje čakajúce vstupné
dáta na 100 MiB.

V sprostredkovateľovi číta `ffprobe` súkromný lokálny súbor; pevne stanovený
zoznam povolených formátov vylučuje formáty zoznamov skladieb a manifestov.
Pre povolené kontajnery rodiny MOV zostávajú externé odkazy na dáta MOV predvolene
zakázané a pevne stanovený príkaz ich nezapína. `ffprobe` aj `ffmpeg` používajú
zoznam povolených protokolov obmedzený iba na `file`, jedno vlákno, pevné polia
argumentov, žiadny shell a spustiteľné súbory nájdené cez `PATH`. Pripojené obrazové
streamy s obrázkom obalu nie sú kandidátmi na prehrávanie. Všetky prehrateľné
streamy musia spĺňať limity, pričom explicitný predvolený stream má prednosť
pred deterministickým záložným výberom streamu s najnižším indexom. Videá sú
obmedzené na 600 sekúnd, 8 192 pixelov na rozmer a 33 554 432 zdrojových pixelov.
FFmpeg vzorkuje 1 až 16 stredových snímok JPEG, zmenšuje dlhšiu hranu najviac
na 1 024 pixelov bez zväčšovania menších vstupov a nikdy nedostáva adresu URL.
Vzorkovanie je predvolene nastavené na `uniform`. Voliteľné zásady `scene_aware`
a experimentálna `segment_aware` vykonajú jeden dodatočný pevne stanovený prechod
FFmpeg cez už overený lokálny stream, vyberú ohraničené časové značky scén
`showinfo` a pri zlyhaní detektora, vypršaní časového limitu, chybnom výstupe
alebo prázdnej množine kandidátov sa deterministicky vrátia k rovnakým rovnomerným
stredovým bodom. Režim zohľadňujúci segmenty prideľuje vzorky stredových bodov
úmerne overeným intervalom scén; dôkazy zohľadňujúce segmenty a záložné správanie
sú podrobne opísané nižšie. Pevný limit 16 snímok sa po výbere uplatňuje pri
každej zásade. Keď má požiadavka zohľadňujúca scény rozpočet iba jednej snímky,
použije rovnomerný stredový bod aktívneho okna celého videa alebo okna zaostrenia
a uvedie `policyEffective: uniform`: jediná vybraná snímka scény nedokáže zachovať
oba časové konce. Volajúci môže voliteľne poskytnúť konečné okno zaostrenia
(`start`/`end` v sekundách); hranice sa orežú na trvanie média, obrátené alebo
nekonečné okná sa odmietnu a všetky zásady vzorkovania sa vykonávajú iba v rámci
normalizovaného intervalu. Výsledné okno je zahrnuté v metadátach vzorkovania
a v nedôveryhodnej predpone opisu, aby následné modely dokázali rozlíšiť
zaostrený výňatok od celej časovej osi.

Sémantické zameranie titulkov je samostatné, explicitné nastavenie. Predvolený
režim analýzy `full` zachováva existujúcu výzvu pre snímky a nikdy neposiela
text požiadavky modelu titulkov. V režime `focused` premostenie číta iba najnovší
neprázdny používateľom vytvorený obsah `text`/`input_text` z rovnakého kontajnera
Chat alebo Responses, normalizuje ho do NFC, zlučuje riadiace znaky a medzery
a obmedzuje ho na 500 kódových bodov Unicode. Prázdny výsledok spôsobí návrat
k presnej výzve režimu `full`. Použiteľná pomôcka sa serializuje ako JSON
vo vyhradenom bloku nedôveryhodného používateľského kontextu a môže iba
uprednostňovať pozorovateľné podrobnosti; nemôže prepísať samostatné upozornenie,
aby sa nevykonávali pokyny viditeľné alebo počuteľné v médiu. Textové zameranie
nikdy neodvodzuje `start`/`end` ani nemení časový vzorkovač.

#### FU-07 štrukturálne dôkazy segmentov

`segment_aware` používa jeden ohraničený prechod predbežnej analýzy nad už overeným
lokálnym videostreamom. Pevný reťazec filtrov najprv zmenší obraz najviac na šírku
320 pixelov, zistí zmeny scén a zamrznuté intervaly a následne vzorkuje frekvenciou
1 snímka za sekundu s cieľom vyhodnotiť rozmazanie, priemernú luminanciu a
priestorové/časové informácie. Prechod je obmedzený na 600 štrukturálnych vzoriek,
jedno vlákno FFmpeg/filtrov, rovnaký zoznam povolených protokolov iba s protokolom
`file` a zoznam povolených kontajnerov, limit výstupu procesu 1 MiB a najviac
30 sekúnd v rámci zdieľaného prerušenia/časového limitu sprostredkovateľa. Nikdy
neprijíma príkaz, filter, cestu ani URL z požiadavky.

Štrukturálne hodnoty predstavujú deterministické dôkazy zo vzorkovania, nie
sémantické porozumenie videu. Neodvodzujú objekty, činnosti, titulky, reč ani
zámer používateľa. Hranice scén a zamrznutí vytvárajú segmenty; pokrytie
zamrznutia, rozmazanie, expozícia, priestorové detaily a časové zmeny ovplyvňujú
iba spôsob pridelenia existujúceho rozpočtu 1–16 snímok. Úplne zamrznutý segment
je obmedzený na jednu snímku, zatiaľ čo nezamrznuté segmenty súťažia o zostávajúci
rozpočet. Keď je hraníc viac než snímok, zachová sa rovnomerné pokrytie časovej
osi, aby rýchle prestrihy na začiatku nemohli skryť dlhý koncový segment. Hranice
scén, ktoré sa nachádzajú v rámci 1-sekundového rozlíšenia analýzy od hranice
zamrznutia, sa zlúčia.

Chýbajúce filtre, poškodené/prázdne dôkazy, chyba detektora alebo vypršanie
časového limitu ohraničenej predbežnej analýzy vedú k bezpečnému použitiu presnej
zásady rovnomerných stredových bodov. Prerušenie volajúcim alebo vypršanie
časového limitu sprostredkovateľa nevedie k takémuto náhradnému správaniu:
ukončí prebiehajúci podproces, zabráni následnej extrakcii snímok a súkromný
dočasný strom sa odstráni v bloku `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické reálne testovacie
dáta FFmpeg na vyhodnotenie úspor volaní titulkovania po deduplikácii, prideľovania
rozpočtu pri intenzívnom pohybe, dôkazov o rozmazaní/expozícii/SI-TI, rýchlych
prestrihoch s dlhým koncovým úsekom a falošne pozitívnych výsledkov pri postupnom
prelínaní. Zaznamenáva reálny čas predbežnej analýzy a tam, kde je dostupný
`/usr/bin/time`, aj čas procesora podradeného procesu a maximálnu RSS. Jeho
kontroly kvality sú iba štrukturálne orákulá. Kvalita reálneho modelu titulkovania
zostáva `HOLD`, pretože tento testovací nástroj nemá autorizovaný koncový bod ani
nemenný hodnotiaci mechanizmus. Peňažné úspory takisto zostávajú `HOLD`, pokiaľ
`--caption-cost-per-call-usd` neposkytne explicitný kladný odhad nákladov na jedno
volanie; skript nikdy nevytvára ani jeden z týchto výsledkov umelo.

Každá snímka je obmedzená na 4 MiB, všetky nespracované snímky spolu na 23 MiB
a serializovaná odpoveď sprostredkovateľa na 32 MiB. Súkromný dočasný adresár sa
odstráni v bloku `finally`. OmniRoute neobsahuje FFmpeg a neakceptuje vlastnú
cestu k spustiteľnému súboru. Pred titulkovaním most aplikuje konzervatívny
prechod vizuálnej deduplikácie: každý JPEG sa zmenší na 16×16-stupňovú sivú
vyrovnávaciu pamäť a porovná sa iba s poslednou zachovanou snímkou. Pri
požadovanom rozpočte titulkovania vyššom než jedna snímka extrakcia poskytne
ohraničenú množinu kandidátov s veľkosťou najviac dvojnásobku tohto rozpočtu,
nikdy však viac než 16 snímok. Požadovaný limit sa použije až po deduplikácii,
pričom pri záverečnom preriedení sa zachovajú prvý a posledný vybraný kandidát,
ak je rozpočet najmenej dve snímky. Verziovaná zásada
`grayscale-16x16-mean-cells-v2` používa väčšiu z hodnôt priemernej zmeny
luminancie a pomeru buniek miniatúry, ktorých normalizovaná zmena je aspoň 0.05.
Prahová hodnota duplicity je konštanta 0.04, zvolená kvôli predvídateľnosti,
a nie je sprístupnená ako nastavenie za behu. Tento sekundárny
vysokokontrastný signál zachováva malé pohyby a zmeny viditeľného textu, ktoré
môže porovnanie založené iba na priemere skryť. Chyby porovnávača alebo dekodéra
vedú k zachovaniu pokrytia. Výstupné metadáta rozlišujú extrahovaných kandidátov,
úspešne použité snímky a odstránené vizuálne duplikáty.

Explicitne označená časť videa môže požiadať o kontaktný hárok s časovými
značkami. Most vytvorí mriežku JPEG s najviac 4 stĺpcami a 16 snímkami. Každá
512-pixelová bunka napevno vloží časovú značku zdrojovej snímky do
vysokokontrastného spodného pásu, pričom rovnaké časové značky zostanú aj
v textových metadátach na následné priradenie a audit. Celý JPEG zostáva
obmedzený na 32 MiB. Ak `sharp` nedokáže mriežku dekódovať alebo zostaviť, most
sa vráti k jednotlivým snímkam JPEG; prerušenie klientom sa naďalej prenesie
do operácie s hárkom.

Dôkazy na povýšenie sú zámerne oddelené od syntetického mikrobenchmarku
zostavovania. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje
A/B testovací nástroj s verziovanou schémou pre reálne modely videnia kompatibilné
s OpenAI. Meria počet tokenov hlásený poskytovateľom, koncovú latenciu
(vrátane zostavenia hárka), počet volaní modelu a zachovanie faktov definovaných
v manifeste. Nespracované odpovede modelu sa do správy nezapisujú; uchovávajú sa
iba kontrolné súčty SHA-256 a identifikátory zhodných faktov. Testovací nástroj
nevykoná žiadne sieťové ani platené volanie modelu, pokiaľ nie je zadaný
`--execute-real` a nakonfigurované `--model`, `OMNIROUTE_BASE_URL` a
`OMNIROUTE_API_KEY`. Bez takéhoto explicitného reálneho spustenia zostáva jeho
strojovo čitateľný verdikt `HOLD`; samotné syntetické merania dátového objemu
a počtu volaní nie sú dôkazom na povýšenie.

Volajúci môžu k podporovanej časti videa pripojiť voliteľné pole
`transcript.cues`, ak už majú zarovnaný text. Každá položka musí obsahovať
`text`, konečný interval `start`/`end` v rámci zistenej dĺžky a hodnotu `source`
zo zoznamu povolených hodnôt (`client`, `embedded` alebo `audio-bridge`);
`confidence` má predvolenú hodnotu `1` a musí zostať medzi `0` a `1`. Presné
duplikáty položiek sa zlúčia. OmniRoute nikdy nespúšťa prepis na základe týchto
metadát: overené položky sa skopírujú do opísaného výsledku spolu so zdrojom,
mierou istoty a intervalom a zobrazia sa ako nedôveryhodné pozorovania vedľa
titulkov snímok. Neplatný text, text mimo rozsahu alebo text bez pôvodu sa
odmietne namiesto toho, aby sa zmiešal s prúdom titulkov. Oba kanály prepisu
v tele požiadavky normalizujú zadaný pôvod na `client`, vrátane samostatne
deklarovaných označení `embedded` alebo `audio-bridge`. Tieto dôveryhodné
označenia môže prostredníctvom argumentu `trustedSource`, dostupného iba v kóde,
priradiť výlučne serverom spravovaný adaptér; pole JSON v požiadavke sa k tomuto
argumentu nemôže dostať. Text prepisu zostáva nedôveryhodným obsahom odvodeným
z média bez ohľadu na svoj pôvod a nikdy nesmie určovať autorizáciu.

Pokročilý volajúci môže pre rovnaké video poskytnúť stopu `audioTranscript`;
považuje sa za text poskytnutý klientom, nie za dôkaz prepisu vykonaného serverom.
Spojovacia vrstva spracúva vizuálne a zvukové pozorovania v rámci
jedného časového limitu a signálu prerušenia, usporadúva ich na spoločnej časovej osi, zlučuje
presné duplikáty a hlási čiastočný výsledok, keď uspeje iba jedna vetva.
Neplatná stopa `audioTranscript` vedie k takémuto čiastočnému výsledku — vizuálny
opis sa zachová a zvuková vetva zaznamená sanitizovaný kód zlyhania —
namiesto zlyhania celého videa. Dostupnosť jednotlivých vetiev, príznak čiastočného
výsledku a sanitizované kódy zlyhania sa zachovávajú v opísanom výsledku, v
metadátach ochranných pravidiel (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metadátach vyrovnávacej pamäte výsledkov a v
počítadlách spájania premostenia. Predvolená cesta Video Bridge nevyvoláva prevod reči na text
ani nesťahuje druhú kópiu média; bez tejto explicitnej stopy zostáva
obmedzená iba na video.

**Uchovávanie prepisov (#12150 P1).** Toto sa použije automaticky vždy, keď
Video Bridge (ktorý je sám voliteľný) vykreslí úsek prepisu — neexistuje žiadny samostatný
príznak uchovávania. Keď požiadavka vykreslí ľubovoľný úsek prepisu (volajúcim deklarovaný
`transcript` alebo zlúčený `audioTranscript`), ochranné pravidlo ho označí ako
`videoBridgeObserved` a vytvorí redigovanú tieňovú verziu opisu videa —
identické vykreslenie, v ktorom je voľný text každého úseku nahradený reťazcom
`[redacted-video-transcript]`, vytvorené nahradením štruktúrovaného poľa úseku
pred zostavením reťazca (nikdy nie analýzou zlúčeného textu, takže nemôže
zostať žiadny obsah úseku — škodlivý ani bežný, vrátane tiel obsahujúcich `]`, ako sú
`[inaudible]`/`[music]`). Telo požiadavky uložené v protokole volaní nahradí
každú textovú časť odvodenú z videa touto redigovanou tieňovou verziou, pričom sa zhoduje
podľa rovnosti obsahu; ukotvenie `fullText` sa znova načíta z dokončeného obsahu
ochranných pravidiel pred volaním, takže zhoda zostane úspešná aj po tom, čo neskoršie
reťazové ochranné pravidlá (maskovače osobných identifikačných údajov a prihlasovacích údajov s prioritami 10/95) prepíšu
text opisu priamo na mieste, a po tom, čo vloženie systémovej výzvy, odovzdania a pamäte
zmení tvar poľa správ. Telo odoslané modelu ostáva nezmenené. Pozorovaná požiadavka
takisto nevytvára žiadnu trvalú Memory (extrakcia odvodená z požiadavky aj odpovede sa
preskočí), takže vlastná odpoveď modelu nemôže zopakovať text prepisu do Memory.

**Nespracované polia videa (#12430).** Keď je premostenie povolené a natívna podpora videa je neznáma alebo chýba, definované polia `transcript`/`audioTranscript` takisto aktivujú `videoBridgeObserved`, a to aj po zlyhaní opisu alebo po dosiahnutí limitu `maxVideos`. Hodnoty `null` a prázdne reťazce sa započítavajú; chýbajúce polia a metadáta, ktoré nesúvisia s videom, nie. Uchovávané kópie tieto polia redigujú alebo požiadavku vynechajú a vyrovnávacie pamäte/Memory sa obídu.

Na týchto záložných cestách sa platné úseky volajúceho zmenia na podporované časti
`text`/`input_text` namiesto neštandardných polí poskytovateľa. Obe stopy
dodané v požiadavke zostávajú nedôveryhodnými pozorovaniami `client` s explicitným
upozornením, že video nebolo opísané a časové pečiatky neboli overené voči médiu. Existujúce
limity 256 úsekov/64 KiB celkovo aj limity pre jednotlivé úseky sa vzťahujú na obe stopy
spoločne; časové pečiatky sa musia zmestiť do 600-sekundového stropu sprostredkovateľa a do každého
zadaného okna zamerania. Neplatné stopy sa zahodia a nepreposielajú sa ako ľubovoľný text;
platnú súvisiacu stopu možno naďalej použiť, pokiaľ sa neprekročí ich spoločný limit. Polia
s hodnotou null/prázdne polia nepridávajú žiadny text. Tento záložný mechanizmus nepridáva žiadne načítanie média
ani prepis. Rozširujúce polia prepisu sa odstránia zo záložného nosiča videa a jeho
objektov `video_url`/`source`. Zoznam povolených položiek pre rozhranie OpenAI zostáva prísny;
nosiče videa s neznámou natívnou podporou zostávajú dostupné a známe ciele podporujúce iba text si zachovávajú bezpečné značky.
Štruktúrované redigované tieňové verzie chránia pripojený text prepisu, zatiaľ čo
pôvodná požiadavka vlastnená volajúcim zostáva nezmenená. Ciele s natívnou podporou a
vypnuté premostenia si zachovávajú svoje existujúce správanie obídenia.

Ďalšie uchovávané kópie používajú rovnaký signál pozorovanej požiadavky. Nespracovaná
snímka požiadavky klienta pred ochrannými pravidlami, čakajúca požiadavka v pamäti a protokol
predčasne odmietnutej požiadavky štruktúrne nahrádzajú polia prepisu v častiach videa;
reťazcové výzvy syntetizované fázami spracovateľského kanála a odovzdaním kontextu sa redigujú
v mieste uloženia tela požiadavky. Uložená značka `video_content_removed`
spôsobí, že pokračovanie pomocou `previous_response_id` sa bezpečne ukončí neúspechom namiesto rekonštrukcie
textu, ktorý bol zámerne odstránený. Ak pozorovaná požiadavka pred zaznamenaním
stratí svoju redigovanú tieňovú verziu pre danú časť alebo ak sa po neskorších úpravách požiadavky
nepodarí nájsť zhodu čo i len pre jednu z viacerých tieňových verzií videa, uchovávané telo požiadavky sa
úplne vynechá namiesto uchovania iba čiastočne redigovaného prepisu.

Pri pozorovanej požiadavke môže odpoveď modelu citovať ľubovoľnú časť
prepisu bez štruktúrovanej hranice úseku. Jej uložené pole `responseBody` v protokole volaní
sa preto nahradí značkou vynechania; podrobný artefakt
spracovateľského kanála (ktorý môže zahŕňať telá upstreamu/klienta a bloky streamu)
sa neuchováva. Sémantická vyrovnávacia pamäť, vyrovnávacia pamäť idempotencie a vyrovnávacia pamäť opakovaného prehrania uvažovania
obídu čítania aj zápisy pre túto požiadavku. Požiadavka poskytovateľa a
odpoveď viditeľná klientovi zostávajú nezmenené. Skoré bajty keepalive sa odstránia z dočasnej
vyrovnávacej pamäte, keď sa podrobný artefakt vynechá. Upozornenie Kiro na poškodený EventStream
uvádza iba počet bajtov obsahu, nikdy nie jeho obsah ani nespracovanú chybu
analyzátora JSON.
Týmto sa netvrdí, že bola skontrolovaná každá nesúvisiaca diagnostika poskytovateľa/pluginu;
širšia kontrola miest uchovávania sa sleduje v #11658.

Interný životný cyklus `/api/modality-bridge/video/drilldown` predstavuje samostatnú,
slučkou/tokenom autentifikovanú vrstvu vyrovnávacej pamäte. Každá operácia vyžaduje aj
kanonický nepriehľadný identifikátor principála. Pred povolením produkčného volajúceho musí
tento identifikátor odvodiť z autentifikovaného tenanta a nikdy nesmie preposlať
hodnotu zvolenú klientom. Kľúče vyrovnávacej pamäte viažu tento principál na kanonické identifikátory relácie a
referencie videa, ukladajú iba ich kľúče odvodené pomocou SHA-256 a obmedzujú čítanie
aj odstraňovanie na rovnaký principál. Vyrovnávacia pamäť ukladá najviac 16 odvodených snímok JPEG
na položku, po desiatich minútach ich platnosť vyprší a podporuje ohraničené čítania
`start`/`end` alebo explicitné odstránenie relácie.

Každý principál je obmedzený na 16 položiek a 64 MiB kanonických údajov JPEG. Tieto
limity sú nezávislé od globálneho stropu 64 položiek/256 MiB: tlak na kvótu
principála odstráni najprv iba najmenej nedávno používané položky daného principála a až potom
sa zvažuje globálne odstraňovanie LRU. Položky s vypršanou platnosťou sa pri aktivite vyrovnávacej pamäte odstraňujú
z účtovania principála aj globálneho účtovania, zatiaľ čo zrušenie a zlyhanie validácie
nepotvrdia čiastočnú náhradu.

Vyrovnávacia pamäť odmieta nekanonický Base64, nadbytočné doplnenie, médiá iné než JPEG, poškodené alebo
skrátené súbory JPEG a súbory JPEG, ktoré počas ohraničeného dekódovania celého obrázka pomocou `sharp`
vyvolajú upozornenie. Každý prijatý obrázok znova zakóduje ako kanonický JPEG, odvodí šírku a výšku
z dekódovaných bajtov namiesto dôvery v polia volajúceho a odstráni všetky koncové
polyglotné bajty namiesto ich zachovania. Do oboch kvót sa započítava iba ohraničený kanonický komprimovaný buffer.
Limit prenosu JSON zahŕňa réžiu Base64 pre strop dekódovaného vstupu 32 MiB.
Každé
uložené odvodenie zaznamenáva validovaný formát/rozlíšenie JPEG, politiku vzorkovania,
verziu odvodenia, čas vytvorenia, hash obsahu vypočítaný serverom a hashovanú nadradenú
referenciu spolu s hashom nadradeného obsahu od dôveryhodného volajúceho. Zrušenie sa kontroluje
medzi asynchrónnymi fázami dekódovania/hashovania pred atomickým potvrdením do vyrovnávacej pamäte.

Táto etapa zatiaľ nepripája k trase produkčného producenta ani
neposkytuje výber variantu s viacerými rozlíšeniami. Transparentná cesta požiadavky Video Bridge
preto nevykonáva žiadnu dodatočnú prácu, zatiaľ čo odvodenie principála viazaného na tenanta a
úplný životný cyklus FU-08 s viacerými rozlíšeniami zostávajú explicitnými následnými úlohami,
a nie zdokumentovaným dokončeným správaním.

Snímky sa postupne titulkujú nakonfigurovaným modelom Video. Prázdne
prepísanie Video zdedí nastavenie Vision; ak sú obe prázdne, automatický smerovač Vision
vyberie efektívny model podporujúci obraz. Úspešné titulky
nahradia pôvodnú časť stabilným prefixom `[Video description:`, ktorý zároveň
označuje text ako nedôveryhodné pozorovanie odvodené z média a prikazuje nadväzujúcim
modelom, aby sa neriadili pokynmi nájdenými v médiu. Kľúče vyrovnávacej pamäte titulkov snímok
zahŕňajú bajty JPEG, výzvu, časovú značku a efektívny model; do vyrovnávacej pamäte sa ukladajú iba úspešné
titulky. Položky vyrovnávacej pamäte uchovávajú skutočný úspešný producentský model
vrátane záložného modelu; premostenie hlási `mixed`, keď rôzne snímky
vytvorili rôzne modely. Zásah do vyrovnávacej pamäte opätovne použije túto identitu producenta
namiesto jej preznačenia na požadovaný plán smerovania. Vyrovnávacia pamäť výsledkov celého videa
používa kľúč odvodený zo všetkých vstupov, ktoré menia výstup — výzvy, efektívneho
modelu, politiky vzorkovania, počtu snímok, režimu sémantickej analýzy, odtlačku SHA-256
normalizovanej nápovedy zamerania, okna zamerania, `transcript`,
`audioTranscript` a príznaku kontaktného hárka — takže zmena ktoréhokoľvek z týchto
rozmerov znamená minutie vyrovnávacej pamäte, nikdy nie opätovné použitie zastaraného výsledku. Verzia politiky
vizuálnej deduplikácie, prah a ohraničený počet kandidátskych snímok sú tiež explicitne uvedené v
kľúči a metadátach vyrovnávacej pamäte výsledkov; zmena politiky preto nemôže opätovne použiť zastaraný
opis celého videa. Metadáta vyrovnávacej pamäte výsledkov v4 uchovávajú režim a
odtlačok, nikdy nie nespracovanú úlohu používateľa. Metadáta ochranných mechanizmov uvádzajú požadovaný
aj efektívny režim analýzy; požadovaný režim `focused` bez
použiteľného textu používateľa sa vykazuje ako efektívne `full`.

Ochranný mechanizmus extrahuje každú podporovanú časť videa, ale opíše najviac
`modalityBridgeVideoMaxVideos`. Pri cieli, o ktorom je preukázané, že má
`supportsVideo === false`, sa neúspešné videá a videá prekračujúce limit zmenia na explicitné bezpečné
textové značky, aby nezostalo žiadne nespracované video. Keď je schopnosť neznáma, tieto časti
si zachovajú svoj nosič videa; každý záložný prepis sa riadi vyššie uvedeným ohraničeným
prevodom textu. Ciele s `supportsVideo === true` obchádzajú premostenie.
Signál zrušenia požiadavky klienta sa prenáša cez sťahovanie, front sprostredkovateľa,
podprocesy a volania titulkovania; zrušenia zastavia spracovanie medzi videami a nikdy núdzovo
nepovolia nespracované médium.

Nastavenia behu sú uložené v DB a validované pomocou Zod:

| Kľúč                                | Predvolená hodnota | Rozsah / správanie                                                                                            |
| ----------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`            | Voliteľné za behu, vyžaduje explicitné zapnutie                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`           | `full` zachováva všeobecné titulky; `focused` používa obmedzený, nedôveryhodný kontext posledného používateľa |
| `modalityBridgeVideoModel`          | `""`               | Zdedí model Vision Bridge                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`                | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`        | `uniform`, `scene_aware` alebo proporcionálne `segment_aware`; pri zlyhaní detektora sa použije `uniform`     |
| `modalityBridgeVideoMaxVideos`      | `1`                | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`           | 1000–120000 ms                                                                                                |

Staršie uložené hodnoty časového limitu pre video presahujúce 120 sekúnd sa obmedzia na
konečný termín sprostredkovateľa; nové zápisy nastavení nad týmto limitom sa odmietnu.
`GET /api/modality-bridge/video/runtime` pred overením alebo kontrolou runtime vyžaduje
dôveryhodnú potvrdenú lokálnosť spätnej slučky a následne vyžaduje oprávnenie na správu.
Vracia iba `available`, sanitizované verzie FFmpeg/ffprobe a pevne stanovený
dôvod, keď runtime nie je dostupný. Interný koncový bod extrakcie nie je
verejné API na nahrávanie: nasýtenie frontu vráti `503` spolu s `Retry-After`, odpojenie
volajúceho vráti `499` a pevne stanovený konečný termín sprostredkovateľa vráti `504`. Konvertované odpovede pridajú
`video->text;model=<visionModel>;parts=<videos>` do centrálnej hlavičky
`x-omniroute-modality-bridge` bez odstránenia segmentov Vision alebo Audio.

### Maskovanie PII (`piiMasker.ts`)

Spúšťa sa v **oboch** fázach.

- **`preCall`** klonuje dátový obsah, prechádza `system`, `messages`, `input` a
  `prompt` (vrátane položiek vo forme obyčajných reťazcov) a aplikuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) na reťazcové polia `content`/`text`. Keď je
  `PII_REDACTION_ENABLED=true`, zistené PII sa v odchádzajúcom
  dátovom obsahu redigujú. Je to nezávislé od `INPUT_SANITIZER_MODE` (ktorý riadi iba
  politiku vkladania promptov). Keď je redigovanie vypnuté, volanie zaznamená počty
  detekcií bez prepisovania obsahu.
- **`postCall`** vytvorí hĺbkový klon odpovede, spustí `sanitizePIIResponse()` spolu
  s maskovaním tvaru Responses API (`maskResponsesOutput` — pokrýva
  `output_text` a `output[].content[].text`). Ak dôjde k akejkoľvek redakcii,
  upravená odpoveď nahradí pôvodnú.

Ochranný mechanizmus nikdy neblokuje; iba pridáva anotácie (`meta.detections`,
`meta.redacted`) alebo prepisuje.

### Vkladanie promptov (`promptInjection.ts`)

Zisťuje nepriateľské štruktúry v obsahu dodanom používateľom a vynucuje
nakonfigurovanú politiku. Správanie určujú premenné prostredia a možnosti
konštruktora:

| Nastavenie      | Premenná prostredia                                                                                    | Predvolené | Účinok                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Povolené        | `INPUT_SANITIZER_ENABLED`                                                                              | `true`     | Keď je `false`, ochranný mechanizmus sa okamžite ukončí.                                                                                                                                        |
| Režim           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`     | Politika vkladania: `block`, `warn` alebo `log`. (`redact` sa akceptuje kvôli spätnej kompatibilite, ale **neodstraňuje** vložený text; prepis PII v požiadavke riadi `PII_REDACTION_ENABLED`.) |
| Prah blokovania | možnosť `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`     | Minimálna závažnosť potrebná na blokovanie. Pri predvolenom nastavení je stredná závažnosť iba sledovaná.                                                                                       |

**Priorita režimu** (`getMode`): `options.mode` volajúceho →
`INJECTION_GUARD_MODE` **prepísanie príznakom funkcie v DB** (Dashboard → Settings →
Feature Flags) → premenná prostredia `INJECTION_GUARD_MODE` → premenná prostredia `INPUT_SANITIZER_MODE` →
`warn`. Prepísanie z ovládacieho panela má preto prednosť pred premennými prostredia, takže používateľské
rozhranie Feature Flags riadi aktívny ochranný mechanizmus za behu (bez reštartu). Čítanie z DB je zabezpečené proti zlyhaniu:
ak dôjde k chybe, ochranný mechanizmus sa vráti k správaniu založenému na premenných prostredia, a keď nie je
nastavené žiadne prepísanie, správanie je totožné s vyhodnocovaním iba na základe prostredia.

Zdroje detekcie:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (zdieľaná množina detektorov
   používaná aj na iných miestach spracovateľského reťazca).
2. Vstavané `DEFAULT_GUARD_PATTERNS` (aktuálne `system_override_inline` a
   `markdown_system_block`, oba so závažnosťou `high`).
3. Voliteľné `customPatterns` odovzdané prostredníctvom možností konštruktora (reťazce, regulárne výrazy
   alebo záznamy `{ name, pattern, severity }`).

Keď `mode === "block"` **a zároveň** aspoň jedna detekcia spĺňa prahovú hodnotu
závažnosti, `preCall` vráti `{ block: true, message: "Request rejected:
suspicious content detected" }`. V režimoch `warn`/`log` ochranný mechanizmus udalosť zaznamená, ale
volanie povolí. Zdieľaná pomocná funkcia `evaluatePromptInjection()` sa tiež exportuje
pre volajúcich, ktorí potrebujú vyhodnocovať prompty bez použitia registra.

**Limit kontroly (v3.8.20):** detektor kontroluje iba **prvých 16 KB**
spojeného textu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Funkcie `detectInjection()` aj
`evaluatePromptInjection()` vykonajú `slice(0, MAX_INJECTION_SCAN_BYTES)` pred spustením
cyklu vzorov. Direktívy injekcie sa nachádzajú blízko začiatku vstupu, takže sa tým
obmedzí využitie CPU regulárnymi výrazmi a činnosť GC pri payloads s veľkosťou stoviek KB bez oslabenia detekcie (pozri
#3932, #4041).

### Maskovanie prihlasovacích údajov (`credentialMasker.ts`)

Spúšťa sa v **oboch** fázach, ako posledné v predvolenom reťazci (priorita `95`). Rediguje
známe vzory API kľúčov / tajných tokenov z odchádzajúceho payloadu (obsahu správ,
argumentov volaní nástrojov, výsledkov nástrojov) **aj** z odpovede poskytovateľa, takže
prihlasovacie údaje vložené do promptu (alebo zopakované vo výsledku nástroja) neuniknú
poskytovateľovi ani späť klientovi.

- **Iba na základe výslovného zapnutia**, rovnaká konvencia ako pri redigovaní PII (súvisiace s pevným pravidlom č. 20):
  vypnuté, pokiaľ `settings.credentialRedactionEnabled === true` **alebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Keď je vypnuté, ochranný mechanizmus nevykonáva žiadnu operáciu —
  nikdy neblokuje ani neprepisuje.
- `redactCredentials()` prechádza celý strom payloadu/odpovede (`walkValue()`,
  bezpečne voči zneužitiu prototype pollution, bezpečne voči cyklom pomocou `WeakSet`) a nahrádza zhody
  zástupným reťazcom `[REDACTED:<type>]`, pričom klonuje iba vetvy, ktoré sa skutočne
  zmenili.
- `CREDENTIAL_PATTERNS` zahŕňa kľúče poskytovateľov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platobné kľúče (Stripe, Square), cloudové
  kľúče (prístupový kľúč AWS, Twilio, SendGrid, Mailgun), súkromné kľúče / JWT,
  pripájacie reťazce obsahujúce prihlasovacie údaje (`mongodb://user:pass@...` atď.) a
  všeobecný vzor hodnoty hlavičky `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Kľúče vo formáte hlavičiek (`authorization`, `x-api-key`, `api-key`,
  `apikey`) sa redigujú štrukturálne (iba hodnota, prefix schémy, napríklad
  `Bearer `/`Basic `, sa zachová) namiesto použitia všeobecného textového regulárneho výrazu.
- Ochranný mechanizmus nikdy neblokuje; iba prepisuje (`modifiedPayload` /
  `modifiedResponse`) a pridáva anotácie (`meta.credentialsRedacted`, `meta.count`).

Ochrana proti regresii: `tests/unit/credential-masker-guardrail.test.ts`.

## Základný kontrakt (`base.ts`)

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
  block?: boolean; // hodnota true okamžite ukončí reťazec
  message?: string; // zobrazí sa pri blokovaní
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrátené metódou preCall na úpravu požiadavky
  modifiedResponse?: TValue; // vrátené metódou postCall na úpravu odpovede
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

Ochranný mechanizmus signalizuje „bez zmeny“ vrátením hodnoty `void`, `{}` alebo
`{ block: false }`. Vrátenie hodnoty `modifiedPayload`/`modifiedResponse` nahradí
hodnotu prechádzajúcu reťazcom pre nasledujúce ochranné mechanizmy.
`signal?: AbortSignal` prenáša životný cyklus volajúceho do ochranných mechanizmov. Prerušenie požiadavky je zámernou výnimkou typu fail-open: mediálne mosty zastavia prácu a vykonajú vyčistenie bez obnovenia nespracovaných médií pre cieľ, o ktorom je známe, že ich nepodporuje.

## Register (`registry.ts`)

Jediná inštancia `guardrailRegistry` poskytuje:

- `register(guardrail)` — pridá ochranný mechanizmus (alebo ho nahradí podľa normalizovaného názvu) a
  opätovne zoradí mechanizmy vzostupne podľa `priority`.
- `clear()` / `list()` — administratívne pomocné metódy.
- `runPreCallHooks(payload, context)` — prechádza aktívnymi ochrannými mechanizmami, odovzdáva
  payload prostredníctvom `modifiedPayload` a zastaví sa pri prvom výskyte `block: true`.
- `runPostCallHooks(response, context)` — rovnaký postup na strane odpovede.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a voliteľne
  znova zaregistruje predvolené mechanizmy, aby sa zabezpečila čistá izolácia testov.

Obe spúšťacie metódy vracajú `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamov `GuardrailExecutionResult`, ktoré obsahujú
polia `blocked`, `skipped`, `modified`, `error` a `meta` pre každý ochranný mechanizmus,
čo je užitočné pri trasovaní.

### Vypnutie ochranných mechanizmov pre jednotlivé požiadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` zhromažďuje
deduplikovaný zoznam názvov ochranných mechanizmov, ktoré sa majú pre aktuálnu
požiadavku preskočiť. Zdroje (všetky sú voliteľné a zlúčia sa):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v tele požiadavky (na najvyššej úrovni)
- `metadata.disabledGuardrails` v tele požiadavky
- Hlavička `x-omniroute-disabled-guardrails` (alebo staršia
  `x-disabled-guardrails`)

Hodnoty môžu byť polia reťazcov alebo reťazec oddelený čiarkami; názvy sa
normalizujú na malé písmená vo formáte kebab-case (`pii_masker` → `pii-masker`). Výsledok
sa prostredníctvom `context.disabledGuardrails` odovzdá registru, ktorý preskočí
zodpovedajúce ochranné mechanizmy (`skipped: true` v `results`).

## Poradie vykonávania

Pre každú požiadavku prechádzajúcu cez `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` zostaví zoznam vynechaných ochranných mechanizmov z kľúča API, tela požiadavky
   a hlavičiek.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné mechanizmy vo vzostupnom
   poradí priority:
   - Zakázané ochranné mechanizmy sa zaznamenajú ako `skipped`.
   - Metóda `preCall` každého ochranného mechanizmu môže prepísať dátový obsah prostredníctvom `modifiedPayload`.
   - Prvý výskyt `block: true` ukončí reťazec a obslužná rutina vráti
     odpoveď o odmietnutí ochranným mechanizmom.
3. (Potenciálne prepísaný) dátový obsah pokračuje do kombinovaného smerovania a následného
   odoslania nadradenému systému.
4. Po zostavení odpovede spustí `guardrailRegistry.runPostCallHooks(...)`
   rovnaký reťazec nad odpoveďou. Hodnota `block: true` v tomto bode zahodí odpoveď
   nadradeného systému.

Ochranné mechanizmy, ktoré vyvolajú výnimku, sa zaznamenajú s `error: <message>` a zapíšu do protokolu
prostredníctvom `logger.warn`, ale reťazec pokračuje — zámerne využíva princíp fail-open.

## Konfigurácia

Premenné prostredia čítané vstavanými ochrannými mechanizmami:

| Premenná                              | Používa ju                          | Účinok                                                                                                                                |
| ------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                  | Nastavením na `false` sa detekcia úplne zakáže.                                                                                       |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                  | Pravidlá pre injektáž: `warn`, `block` alebo `log`. Staršia hodnota `redact` text injektáže neprepisuje.                              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                  | Režim ochrany proti injektáži; zároveň ide o príznak funkcie v databáze, ktorý **má prednosť** pred premennými prostredia (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                  | Minimálna závažnosť, ktorú režim `MODE=block` odmietne: `high` (predvolené), `medium` alebo `low`.                                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                  | Starší alias pre `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                        | Ak je nastavená na `true`, osobné údaje v požiadavke sa redigujú (nezávisle od režimu injektáže).                                     |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (následné spracovanie) | Ovláda správanie maskovania na strane odpovede.                                                                                       |

Ochranné mechanizmy Modality Bridge čítajú konfiguráciu za behu z úložiska nastavení
založeného na databáze (`getSettings()`), nie z premenných prostredia. Primárne kľúče pre Vision sú
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Staršie kľúče
`visionBridge*` sa akceptujú iba ako zdokumentované záložné hodnoty na čítanie počas jedného cyklu;
zápisy z ovládacieho panela používajú primárne kľúče. Predvolené hodnoty a záložný
resolver sa nachádzajú v `src/shared/constants/modalityBridgeDefaults.ts`, pričom staršie
konštanty zostávajú zachované v `src/shared/constants/visionBridgeDefaults.ts`.

Audio používa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` spolu so zdieľanými
nastaveniami `modalityBridgeCache*`. Audio nemá záložný mechanizmus pre staršie kľúče, pretože tieto
kľúče boli zavedené spolu so schémou Modality Bridge.

Video používa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` spolu so zdieľanými nastaveniami `modalityBridgeCache*`.
V predvolenom nastavení je zakázané, pretože FFmpeg/ffprobe sú voliteľné prevádzkové
závislosti a opis snímok zvyšuje latenciu a náklady na model.

## Vlastné ochranné mechanizmy

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Denný rozpočet bol prekročený" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Postup:

1. Vytvorte `src/lib/guardrails/myGuardrail.ts`, ktorý rozširuje `BaseGuardrail`.
2. Implementujte `preCall` a/alebo `postCall`.
3. Buď ho zaregistrujte pri importe (pridaním z `registerDefaultGuardrails`), alebo
   zavolajte `guardrailRegistry.register(...)` za behu — register nahradí
   každý predchádzajúci ochranný mechanizmus s rovnakým normalizovaným názvom.
4. Pridajte testy do `tests/unit/` (existujúce príklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testovanie

Medzi testami používajte `resetGuardrailsForTests()`, aby ste začali zo známeho stavu.
Ak chcete začať s prázdnym registrom a zaregistrovať iba testované ochranné mechanizmy,
odovzdajte `{ registerDefaults: false }`. Vision Bridge podporuje vkladanie závislostí
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge poskytuje ekvivalentné
body napojenia pre nastavenia, schopnosti, výber modelu STT, kontroly prihlasovacích
údajov a transkripciu. Testy tak môžu overiť oba toky bez prístupu k databáze
alebo sieti.

## Pozrite tiež

- `src/lib/guardrails/` — implementácia
- `src/shared/utils/inputSanitizer.ts` — zdieľaný detektor, ktorý zabezpečuje
  detekciu injektovania promptov a maskovanie osobných údajov
- `src/shared/constants/visionBridgeDefaults.ts` — predvolené nastavenia Vision Bridge a
  zoznam modelov s vynúteným premostením
- `src/shared/constants/modalityBridgeDefaults.ts` — zdieľané predvolené nastavenia behu pre Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonálna vrstva (istič, doby čakania)
- `docs/reference/ENVIRONMENT.md` — úplný prehľad premenných prostredia

## Pokrytie trás ochranou pred injektovaním a red-team testovanie (Fáza 8 · Blok D)

Ochrana pred injektovaním (`createInjectionGuard` / `withInjectionGuard`) pokrýva všetky trasy,
ktoré prijímajú používateľské prompty. Rešpektuje `INJECTION_GUARD_MODE` (predvolená hodnota `warn` = iba zaznamenať;
`block` = vráti HTTP 400 `SECURITY_001`).

| Typ               | Trasy                                                                                                                                                | Predvolený režim |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Text (existujúce) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generatívne       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dáta              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Extrakcia textu (`extractMessageContents`) pokrýva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testovanie (každú noc, `nightly-llm-security.yml`):** promptfoo overuje, že každá trasa blokuje
korpus OWASP-LLM v režime `INJECTION_GUARD_MODE=block`; garak spúšťa sondy (bez tajného kľúča sa preskočí).
Trasa `moderations` je zahrnutá kvôli konzistentnosti — prevádzkovatelia ju môžu v režime blokovania vyňať
prostredníctvom `resolveDisabledGuardrails`.

Nočný pracovný postup (`.github/workflows/nightly-llm-security.yml`, cron + manuálne
spustenie) obsahuje dve úlohy:

- **`promptfoo-guard` (blokujúca)** — spúšťa `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý nepriateľský prípad (napr. „ignoruj všetky
  predchádzajúce pokyny…“, prelomenia obmedzení v štýle DAN) overuje, že odpoveď obsahuje
  `error.code === "SECURITY_001"`, t. j. ochrana požiadavku skutočne odmietla.
- **`garak` (poradná)** — spúšťa garak s `--probes promptinject,dan,leakreplay`
  voči lokálnej inštancii OmniRoute (`http://localhost:20128/v1`). Je podmienená dostupnosťou
  tajného kľúča poskytovateľa (`PROMPTFOO_PROVIDER_KEY`); ak nie je dostupný, úloha sa korektne
  preskočí a je zakončená `|| true`, takže iba hlási výsledky bez zlyhania CI.

Pokrytie pomocnej ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahŕňa každú trasu `/v1`, ktorá prijíma prompt; text promptu sa získava z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocou
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
