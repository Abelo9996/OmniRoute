# Guardrails (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Hiteles forrás:** `src/lib/guardrails/`
> **Legutóbb frissítve:** 2026-08-29 — v3.8.51 (a Video Bridge átiratának eredetét a hívó deklarálja,
> a szerver még nem ellenőrzi — pontosítva a #11661 alapján)

A guardrailek biztonsági, szabályzati és tartalomátalakítási előírásokat érvényesítenek az OmniRoute és a külső szolgáltatók közötti határon. Minden guardrail megvizsgálhatja (és opcionálisan elutasíthatja, átalakíthatja vagy annotálhatja) a kérés hasznos adatait (`preCall`) és a külső szolgáltatók válaszait (`postCall`).

A rendszer **hiba esetén nyitott**: ha egy guardrail végrehajtás közben kivételt dob, a regisztrációs adatbázis rögzíti a hibát, és a kérés meghiúsítása helyett a következő guardraillel folytatja. A blokkolás mindig explicit döntés (`block: true`), soha nem véletlen.

## Beépített védőkorlátok

A nyilvántartás importáláskor prioritási sorrendben automatikusan betölt hat védőkorlátot
(lásd: `registry.ts` → `registerDefaultGuardrails()`):

| Prioritás | Név                 | Szakasz(ok)    | Fájl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Az alacsonyabb prioritási számok futnak le **először**.

### Képi híd (`visionBridge.ts`) — Modalitáshíd PR-1

Elfogja a **képfeldolgozásra nem képes modelleknek** szánt, képeket tartalmazó kéréseket, és vagy
átirányítja a teljes kérést egy képfeldolgozásra képes modellhez, vagy a képrészeket
egy konfigurálható képfeldolgozó modell által létrehozott szöveges leírásokra cseréli
a felsőbb szintű hívás előtt. Ez lehetővé teszi, hogy a csak szöveges szolgáltatók átlátható módon
kezeljék a multimodális hasznos adatokat.

Folyamat:

1. Kihagyás, ha a célmodell már támogatja a képfeldolgozást (kivéve, ha szerepel az
   `isVisionBridgeForcedModel` kényszerített hídlistájában).
2. A képrészek kinyerése az `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) segítségével, amely az `open-sse/utils/mediaParts.ts` fájlban található
   **egységes médiaérzékelőre**, a `detectMediaParts()` függvényre bízza a feladatot — ez a
   kombinációs kompatibilitási szűrővel közösen használt, egyetlen hiteles forrás.
   A kinyerés engedélyezési listája azokra a legfelső szintű részekre korlátozódik,
   amelyeket a `replaceImageParts` vissza tud illeszteni (a kinyerés↔csere szerződés): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` és Responses API `input_image`. A beágyazott találatok és a
   csak jelzőként szolgáló alakzatok a kombinációs szűrő hatáskörébe tartoznak, és soha nem lesznek kinyerve.
   Kihagyás, ha egy sem található.
3. A futásidejű konfiguráció feloldása a `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) segítségével: az új `modalityBridge*`
   beállításkulcsok elsőbbséget élveznek; a régi `visionBridge*` kulcsok **egy cikluson át
   tartalék megoldásként** maradnak meg (visszaállítási időablak). A híd letiltásakor a rendszer
   még a média bejárása előtt kihagyja ezt a lépést.
4. A módválasztó (`modalityBridgeVisionMode`, lásd az alábbi táblázatot) dönt az
   átirányítás és a leírás között. Az átirányítás olyan `modifiedPayload` értéket ad vissza,
   amelyben csak a `model` van lecserélve, valamint a következő metaadatokat:
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Leírási útvonal: a képek számának korlátozása `maxImages` értékre, a feladatérzékeny prompt
   összeállítása, a leírás-gyorsítótár ellenőrzése, a képfeldolgozó modell **párhuzamos**
   meghívása (`Promise.allSettled`), majd `[Image N]: <description>` szövegrészek
   beillesztése a képek helyére. A sikertelen leírás `null` értéket eredményez, és az eredeti képrész
   **megmarad** (#4012) — kivéve a kombinációs leírási útvonalon, amikor minden
   leírás sikertelen volt; ekkor egy igazoltan képfeldolgozásra nem képes felsőbb szolgáltatás egy
   `(unavailable — no vision-capable provider connected)` helyőrzőt kap helyette (#8430).
6. A `modifiedPayload` és a metaadatok (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) visszaadása.

#### Módválasztó (`modalityBridgeVisionMode`)

| Mód        | Alapértelmezett | Viselkedés                                                                                                                                                                                                                                                                                                                                         |
| ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔               | Változatlan örökölt heurisztika (#6640/#7204): a nem kombinációs/`auto/` modelleket a rendszer a legjobb képfeldolgozó modellhez irányítja át, kivéve, ha az eredeti modell már rendelkezik használható hitelesítő adatokkal (ekkor leírást készít); a kombinációs céloknál mindig leírást készít.                                                 |
| `describe` |                 | Mindig leírást készít — az átirányítási blokk teljesen kimarad; mindig a felhasználó által kiválasztott modell válaszol.                                                                                                                                                                                                                           |
| `reroute`  |                 | Kényszerített átirányítás: a hitelesítő adatokkal rendelkező modellt megtartó védelem megkerülésre kerül. Az átirányítási **cél** hitelesítőadat-védelme továbbra is érvényes — ha nincs használható képfeldolgozási cél, a kérés visszatér a leírási útvonalra, így a nyers képek soha nem jutnak el egy csak szöveges háttérrendszerhez (#8430). |

A kényszerített módok **azelőtt** rövidre zárják a folyamatot, hogy az automatikus heurisztika lefutna; az `auto` viselkedése
bájtról bájtra megegyezik a PR-1 előtti védőkorlátéval.

#### API-kulcs hatóköre (`visionBridgeKeyScope.ts`)

Ha a hívó API-kulcsa korlátozza az `allowedConnections` értékét, a kvótakészleteket
(`allowedQuotas`) vagy a modelleket (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a híd csak olyan
átirányítási és leírási modelleket választ, amelyeket a kulcs használhat, mégpedig olyan kapcsolatokon,
amelyeket a kulcs szintén használhat. A leírási hívás ezután mindig az OmniRoute önmagába
visszacsatolt útvonalán halad át az `x-omniroute-self-loop-key-id` fejléccel, így a fogadó csevegési kérés
ismét érvényesíti az adott kulcs kapcsolati és modellházirendjét. Az `enforceApiKeyPolicy()`
csak az önmagába visszacsatolt bearer tokennel együtt veszi figyelembe ezt a fejlécet, így az csak
szűkítheti a hozzáférést, és a fel nem oldható azonosítót a rendszer elutasítja.

Ha a kulcshoz egyetlen képfeldolgozó modell sem engedélyezett, a leírási útvonal félreáll, és
a kérés változatlanul halad tovább, ugyanazzal a nyitott hibakezelési viselkedéssel, mint egy letiltott
védőkorlát esetén (metaadat: `{ skipped: true, reason: "no_permitted_vision_model" }`).
A kulcs nélküli kérések és az ilyen korlátozások nélküli kulcsok pontosan ugyanúgy viselkednek, mint
korábban.

#### Feladatérzékeny leírási prompt (`modalityBridgeVisionTaskAware`)

Alapértelmezés szerint **true**. A `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hozzáfűzi az **utolsó felhasználói üzenet** szövegét (500 karakterre csonkítva) az alap leíró prompthoz, így a leírást arra irányítja, amit a felhasználó ténylegesen kért (codex-vision-proxy minta), és megkéri a látásmodellt a látható szöveg átírására. Ha a jelző ki van kapcsolva — vagy nincs felhasználói szöveg —, az alapprompt változatlanul lesz használva.

A leíró önhurok saját OpenAI-kompatibilis kérése (`callVisionModelSingle()` a `visionBridgeHelpers.ts` fájlban) mindig az `image_url.detail: "high"` értéket kéri — feltétel nélkül, minden hívóhoz/szolgáltatóhoz, bármilyen kliensjelzéstől függetlenül. Az alacsony részletességű mintavételezés éppen annál a szövegátírási feladatnál rontja az OCR pontosságát, amelyet ez a prompt kér, ezért maga a leíró hívás mindig magas részletességet kér, függetlenül attól, hogy az eredeti bejövő kérés milyen részletességi szintet használt. Ez csak a belső leíró kérés törzsét érinti; nem változtatja meg azt, ahogyan az OmniRoute továbbítja a hívó saját `image_url.detail` értékét az elsődleges kérésben — ez az alapértelmezés külön kerül alkalmazásra, és csak az észlelt OpenCode-kliensek esetében, a `defaultImageDetail()` függvényben (`open-sse/handlers/chatCore/upstreamBody.ts`). A leíró önhurok Anthropic vezetékformátumú ága nem tartalmaz `detail` mezőt, ezért egyik alapértelmezés sem érinti.

#### Leíró kimenet korlátja (`modalityBridgeVisionMaxChars`)

| Kulcs                          | Alapértelmezés | Tartomány          |
| ------------------------------ | -------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`            | `0` vagy 100–50000 |

A `0` (alapértelmezés) azt jelenti, hogy **nincs korlát** — a `callVisionModel()` által visszaadott leírás változtatás nélkül kerül továbbításra, megőrizve a meglévő működést. Bármely 100–50000 közötti érték `…` utótaggal csonkítja a leírást, mielőtt az `[Image N]: <description>` formában visszaillesztésre kerülne (`VisionBridgeGuardrail.preCall()` a `src/lib/guardrails/visionBridge.ts` fájlban). Növelje ezt a részletgazdag OCR-feladatokhoz, amelyeknél az alsóbb szintű modellnek szüksége van a teljes átírásra; csökkentse a bőbeszédű látásmodellek tokenhasználatának korlátozásához. Az irányítópult mezője a Vision lap Advanced paneljén található (`modality-bridge-max-chars` a `ModalityBridgeVisionTab.tsx` fájlban), és az 1 és 99 közötti értékeket a 100-as alsó korlátra emeli, miközben az explicit `0` értéket érintetlenül hagyja — a `0` önmagában is érvényes Zod-érték (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nem csupán a „nincs beállítva” alapértelmezése.

#### Leíró gyorsítótár (`modalityBridge/bridgeCache.ts`)

Folyamatszinten megosztott, memórián belüli LRU + TTL gyorsítótár a leíró kimenetekhez. A kulcs = `sha256(imageRef + composedPrompt + configuredBridgeModel)`, hosszelőtagos keretezéssel (nincsenek mezőhatár-ütközések). A modellkomponens a **konfigurált** hídmodell, nem pedig az a modell, amely ténylegesen válaszolt — a `callVisionModel` belsőleg tartalékmodellre válthat, és a próbálkozásonkénti kulcsképzés széttagolná a gyorsítótárat. A sikertelen leírások soha nem kerülnek gyorsítótárba. Beállítások:

| Kulcs                           | Alapértelmezés | Tartomány |
| ------------------------------- | -------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`         | —         |
| `modalityBridgeCacheTtlMinutes` | `60`           | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`          | 10–5000   |

#### Távoli képek normalizálása (önhurok-leírás/base64-lekérés)

Amikor a híd saját maga kér le egy **távoli** képet — az Anthropic leíró önhívásánál és a claude vezetékformátumú base64-konverziónál (`ensureBase64ImagesForClaudeWire`), mindkét esetben a `visionBridgeHelpers.ts` fájlban található `fetchRemoteImageAsDataUri()` használatával —, az eredményül kapott adat-URI a `normalizeDataUri()` függvényen (`open-sse/utils/imageNormalize.ts`) halad át, mielőtt beágyazásra kerülne a látásmodell kérésébe. A túlméretes képek **2048 képpontos hosszú élre** lesznek lekicsinyítve (megfelelve az OpenAI/Anthropic által már szerveroldalon alkalmazott átméretezési korlátnak), ami csökkenti a feltöltött bájtok mennyiségét és a késleltetést anélkül, hogy megváltoztatná azt, amit a látásmodell lát. Az átméretezés dinamikus importtal betöltött `sharp` használatával történik: olyan platformon, ahol a natív bináris betöltése sikertelen, a `normalizeDataUri()` **soha nem dob kivételt** — ehelyett változtatás nélkül továbbítja az eredeti bájtokat, így a leíró/base64-konverziós útvonal mindig működőképes marad. A nem kép típusú bájtok (amikor a lekérés nem dekódolható képet adott vissza) szintén változtatás nélkül kerülnek továbbításra. Ez a normalizálás azokra a képekre korlátozódik, amelyeket a híd a saját önhívásához kér le — soha nem kerül alkalmazásra a hívó nyers, változtatás nélkül továbbított hasznos adatára, összhangban a kizárólag explicit engedélyezéssel történő módosítás elvével (20. szigorú szabály).

#### Beállításséma + migráció

Az új `modalityBridge*` kulcsokat az `updateSettingsSchema` Zod használatával validálja (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, a három `modalityBridgeCache*` kulcs, valamint az Audio Bridge által használt `modalityBridgeAudio*` csoport. A `141_modality_bridge_settings.sql` migráció a meglévő örökölt `visionBridge*` értékeket a megfelelő új kulcsokba másolja (idempotens módon, és soha nem ír felül egy üzemeltető által beállított `modalityBridge*` értéket); az örökölt kulcsok egy kiadási cikluson keresztül továbbra is elfogadottak maradnak olvasási tartalékként.

#### Átláthatósági fejléc + statisztikák

A leírássá alakított válaszok a következő fejlécet tartalmazzák:
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(amelyet a `buildModalityBridgeHeader()` épít fel a `modalityBridge/bridgeStats.ts` fájlban, és a `withModalityBridgeHeader()` helyez el a `src/sse/handlers/chatHelpers.ts` fájlban). Az átirányított kérések **nem** kapnak fejlécet — a hasznos adat érintetlen maradt, és a modell cseréje már látható a válasz törzsének `model` mezőjében.

A `GET /api/modality-bridge/stats` (kezelői hitelesítés, azonos szintű a
`GET /api/settings` végponttal) visszaadja a memóriában tárolt, modalitásonkénti
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` számlálókat a `vision`, `audio` és
`video` modalitásokhoz. Az `averageLatencyMs` nevezőként a `latencySamples`
értékét használja, nem az összes próbálkozást; egy időmérés nélküli művelet nem
hoz létre mesterséges, nulla ezredmásodperces mintát. A `bridged` a sikeres
konverziók visszafelé kompatibilis álneve marad; a sikertelen próbálkozások nem
növelik az értékét.
A számlálók a folyamat újraindításakor terv szerint visszaállnak
(telemetria, nem elszámolás).

#### Irányítópult-konfiguráció

A dedikált irányítópult-oldal elérési útja:
`/dashboard/settings/modality-bridge`. Az URL-ből címezhető `Vision`, `Audio` és
`Video` lapfülek megőrzik a lekérdezési paramétereket, miközben módosítják a
`tab` értékét. A Vision lapfülön beállítható az engedélyezés, a mód, a
modellkiválasztás (beleértve az automatikus alapértelmezést), a feladattudatos
promptolás, valamint a speciális időtúllépési, kép-, leíráshossz- és
gyorsítótár-korlátok; továbbá futásidejű számlálókat és védett mintakérést is
biztosít. Az Audio lapfül szintén működőképes: beállítható rajta az engedélyezés,
egy kizárólag STT-modelleket tartalmazó modellválasztó Auto lehetőséggel, az
időtúllépési és maximális kliphosszkorlátok, valamint megjeleníti a
hangszámlálókat, és egy `input_audio` mintatesztet is biztosít. A Video lapfül
működőképes: jelzi az FFmpeg/ffprobe futásidejű állapotát — a négy explicit
felhasználóifelület-állapot egyikével (`unknown`, amíg az ellenőrzés folyamatban
van vagy nem fejezhető be; `restricted`, ha az irányítópult gazdagépe nem
loopback-cím, ezért az ellenőrzést az ügyféloldal kihagyja; `unavailable`, ha az
ellenőrzés befejeződött, és megerősítette a hiányukat; vagy `available` az
FFmpeg/ffprobe verzióival) —, tartósan menti az engedélyezési, modell-, képkocka-,
videó- és időtúllépési korlátokat, a modellválasztót a képfeldolgozásra képes
modellekre szűri, és megjeleníti a videoszámlálókat.

Az AI-beállítások alatti korábbi Vision Bridge kártya kompatibilitási
hivatkozásként az új oldalra mutat; többé nem tartalmazza az űrlap második
példányát. A Media Providers az Image-to-Text és Speech-to-Text munkafolyamatokat
is a megfelelő Modality Bridge lapfülekhez kapcsolja, a meglévő Speech-to-Text
tesztfelület eltávolítása nélkül.

**Saját hurok beléptetési megkerülése:** amikor a leíróhívás az OmniRoute saját
`/v1` önhurkán keresztül halad (nem szabványos szolgáltatói modell), az alkérés
elküldi az `x-omniroute-admission-bypass: internal` fejlécet, és a feloldott
önhurok-hitelesítő adattal hitelesíti magát — helyi módban a helyi
`sk_omniroute` jelzőértékkel, vagy az üzemeltető által konfigurált
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` környezeti kulccsal (#1350), így a
`REQUIRE_API_KEY=true` telepítések továbbra is futtathatják a leíróhívást. A
megkerülés csak pontosan ezekkel a hitelesítő adatokkal érvényes, ezért külső
ügyfelek nem használhatják a fejlécet a beléptetés kihagyására.

A korábbi alapértelmezések a
`src/shared/constants/visionBridgeDefaults.ts` fájlban találhatók; az új
mód-, feladattudatossági és gyorsítótár-alapértelmezések, valamint a
beállításfeloldó a `src/shared/constants/modalityBridgeDefaults.ts` fájlban
található. A védőkorlát egy `deps` konstruktoropciót biztosít, így a tesztek
hamis `getSettings` és `callVisionModel` implementációkat injektálhatnak.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Elfogja a hangot tartalmazó csevegési kéréseket, mielőtt azok olyan célhoz
érnének, amelyről nem ismert, hogy fogad-e hangbemenetet. A csevegési kérést
soha nem irányítja át: a hangrészeket a meglévő, OpenAI-kompatibilis többrészes
végponton keresztül írja át, a kiválasztott csevegési modell pedig a szöveges
átiratokkal folytatja a feldolgozást.

Folyamat:

1. A `supportsAudio` feloldása a `getResolvedModelCapabilities()` segítségével.
   Elsőbbséget élveznek a szolgáltatói nyilvántartás explicit metaadatai, majd a
   statikus modellmetaadatok, végül a szinkronizált `modalities_input`. Egy
   deklarált bemeneti lista `audio` nélkül `false`; képességre vonatkozó
   bizonyíték hiányában az érték `null`. Mind a `false`, mind a `null` aktiválja
   a konzervatív hidat, míg a `true` megkerüli azt.
2. A `modalityBridgeAudio*` beállítások feloldása, valamint a kivágható felső
   szintű hangrészek kinyerése minden üzenetből a megosztott
   `detectMediaParts()` érzékelővel. A támogatott adatátviteli formák az OpenAI
   `input_audio`, `audio_url` és `source.media_type: "audio/*"`. A beágyazott
   hangot az útválasztás észleli, de a kivágási útvonal nem távolítja el. A
   feldolgozható elemek számát a `modalityBridgeAudioMaxClips` korlátozza; a
   későbbi részek változatlanok maradnak.
3. Egy konfigurált `provider/model` használata, vagy annak engedélyezése, hogy a
   `selectAudioBridgeModel()` stabil katalógussorrendben végigjárja az
   `AUDIO_TRANSCRIPTION_PROVIDERS` elemeit, és kiválassza az első olyan modellt,
   amelyhez használható, aktív szolgáltatói hitelesítő adat tartozik.
4. A `callAudioTranscription()` a base64/data-URI formátumú hangot többrészes
   `file` adattá alakítja, vagy a távoli `audio_url` tartalmát a csak nyilvános
   címeket engedélyező, DNS-rögzítést és 25 MB-os korlátot alkalmazó kimenő
   védelmen keresztül tölti le. Ezután POST-kéréssel elküldi a fájlt és a
   kiválasztott modellt a helyi `/v1/audio/transcriptions` önhuroknak, a
   `resolveSelfLoopBearer()` használatával hitelesítve. A meglévő átírási
   útvonal végzi el a normál hitelesítőadat-keresést, a várakozási idő és a
   sebességkorlát kezelését, valamint a szolgáltatóhoz történő továbbítást.
5. A sikeres hívások a megfelelő részeket erre cserélik:
   `[Audio N]: <transcript>`. A hívások a `Promise.allSettled` használatával
   futnak: egy egyedi hiba megőrzi az eredeti hangrészt (#4012 szerződés). Ha
   minden hívás sikertelen, és a cél bizonyítottan `supportsAudio === false`,
   akkor a részek a következővé alakulnak:
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 szerződés).
   Ismeretlen cél (`null`) esetén, ha minden hívás sikertelen, a kérés
   változatlan marad. Egy bizonyítottan csak szöveget kezelő cél használható
   STT-hitelesítő adat hiányában ugyanezt az explicit helyőrzőt kapja hálózati
   hívás indítása nélkül.

A sikeres átiratok a teljes folyamat által megosztott Modality Bridge LRU/TTL
gyorsítótárat használják. A kulcs a hanghivatkozásból, a stabil
`audio-transcription` műveletcímkéből és a kiválasztott STT-modellből áll; a
hibák soha nem kerülnek gyorsítótárba. A hangfeldolgozási próbálkozások frissítik
a megosztott `bridged`, `cacheHits`, `failures` és `lastUsedAt` számlálókat. Az
átalakított válaszok tartalmazzák az
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` fejlécet;
a változatlan kérések nem kapnak Audio Bridge szegmenst.

A futásidejű beállítások adatbázisban tároltak, és Zod-validációt használnak:

| Kulcs                         | Alapértelmezett | Tartomány        |
| ----------------------------- | --------------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                |
| `modalityBridgeAudioModel`    | `""`            | Auto vagy STT ID |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10             |

A megosztott gyorsítótárat továbbra is a `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` és `modalityBridgeCacheMaxEntries` szabályozza.

### Videóhíd (`videoBridge.ts`, `videoBridgePipeline.ts`)

Elfogja a Chat Completions `messages` és a Responses API `input` legfelső szintű videórészeit,
mielőtt olyan cél kerülne meghívásra, amely nem rendelkezik ismert natív videótámogatással.
A támogatott formátumok az `input_video`, `video_url`, `video_source`, HTTPS URL-ek,
valamint a `data:video/*;base64,...` adat-URI-k. A szövegben szereplő egyszerű fájlneveket
nem kezeli videóként.

A `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) felelős a kérés bejárásáért, a
képesség- és házirend-ellenőrzésért, a kérésenkénti összesítésért és a válasz hasznos adattartalmáért.
A videónkénti feldolgozást — a lekérést, a teljes eredmény gyorsítótárazását, a
képkockasorozat leírását (amely egyesíti a hívó által megadott hangátiratot),
valamint a próbálkozásonkénti mérőszámokat/megszakítást/takarítást — a
`videoBridgePipeline.ts` fájlban található `processVideoPart` rejti el, amelyet
videórészenként egyszer hív meg a `preCall` ciklusa. Ez a modul határozza meg a
`VideoMediaBrokerPort` (bájtok lekérése és mintavételezett képkockák kinyerése),
a `VideoAudioTranscriptionPort` (a hívó által megadott hangátirat egyesítése a
mintavételezett feliratokkal), valamint a `VideoDrilldownPort` (a képkockák
részletes vizsgálatának perzisztenciahatára; még nincs bekötve a
`processVideoPart` folyamatába — jelenleg csak a különálló
`/api/modality-bridge/video/drilldown` útvonal ír részletes vizsgálati bejegyzéseket)
explicit port-határait is.

A nyilvános `/v1` kérési útvonal soha nem importál és nem hív meg alfolyamatot. A távoli
videók letöltése 50 MiB-os korláton belül történik; a beágyazott base64-videókra
konzervatív, videónkénti 36 MiB-os dekódolt méretkorlát vonatkozik, hogy a
modell/üzenetek/keretezés burkolója a nyilvános JSON-kérések 50 MiB-os befogadási
korlátján belül maradhasson. A beágyazott tartalom hosszát és a dekódolt méret
becslését a rendszer a memóriafoglalás előtt ellenőrzi. HTTPS szükséges mind a
kezdeti távoli URL-hez, mind minden átirányításhoz, a meglévő, kizárólag nyilvános
kimenő kapcsolatokat engedélyező, DNS-rögzítést alkalmazó védelem használatával.
A bájtok ezután átlépik a pontos belső
`POST /api/modality-bridge/video/extract` közvetítői határt. Ez az útvonal egyszerre
`LOCAL_ONLY` és `SPAWN_CAPABLE`, kizárólag folyamatonként hitelesített, megbízható
visszacsatolási címről érkező kérést fogad el, és soha nem fogad el URL-t,
fájlrendszerbeli elérési utat, végrehajtható fájlt vagy argumentumlistát. Az API
törzsméret-feldolgozási folyamata és a kezelő növekményes törzsolvasója egymástól
függetlenül érvényesíti a közvetítő bemenetére vonatkozó 50 MiB-os korlátot. A
korlátozott sora egyszerre egy kinyerést futtat, négy függőben lévő feladatot
engedélyez, és a függőben lévő bemenetet 100 MiB-ra korlátozza.

A közvetítőn belül az `ffprobe` egy privát helyi fájlt olvas; a rögzített
formátum-engedélyezési lista kizárja a lejátszási lista- és jegyzékformátumokat.
Az engedélyezett MOV-családba tartozó tárolók esetében a külső MOV-adathivatkozások
alapértelmezés szerint letiltva maradnak, és a rögzített parancs nem engedélyezi
azokat. Az `ffprobe` és az `ffmpeg` egyaránt kizárólag a `file` protokollt
engedélyező listát, egy szálat és rögzített argumentumtömböket használ, parancsértelmező
nélkül, a végrehajtható fájlokat pedig a `PATH` alapján oldja fel. A csatolt
borítóképet tartalmazó adatfolyamok nem tekinthetők lejátszható jelölteknek.
Minden lejátszható adatfolyamnak meg kell felelnie a korlátoknak, és a rendszer
az explicit alapértelmezett adatfolyamot részesíti előnyben a determinisztikus,
legalacsonyabb indexű tartalék választás előtt. A videók hossza legfeljebb 600
másodperc, méretük dimenziónként legfeljebb 8 192 képpont, forrásméretük pedig
legfeljebb 33 554 432 képpont lehet. Az FFmpeg 1–16 középponti JPEG-képkockából
vesz mintát, a hosszabbik élt legfeljebb 1 024 képpontra méretezi le a kisebb
bemenetek felnagyítása nélkül, és soha nem kap URL-t. A mintavétel alapértelmezés
szerint `uniform`. Az opcionális `scene_aware` és a kísérleti `segment_aware`
házirend egy további rögzített FFmpeg-futtatást végez a már ellenőrzött helyi
adatfolyamon, korlátozott számú `showinfo`-jelenet-időbélyeget választ ki, és
detektorhiba, időtúllépés, hibás kimenet vagy üres jelölthalmaz esetén
determinisztikusan ugyanazokra az egyenletes középpontokra tér vissza. A
szegmenstudatos mód a középponti mintákat az ellenőrzött jelenetintervallumokkal
arányosan osztja el; a szegmenstudatos bizonyítékokat és a tartalék viselkedést
alább részletezzük. A szigorú, 16 képkockás korlátot
minden házirendben a kiválasztás után alkalmazza a rendszer. Ha egy jelenettudatos
kérés csak egyetlen képkockás kerettel rendelkezik, az aktív teljes videó vagy
fókuszablak egyenletes középpontját használja, és `policyEffective: uniform`
értéket jelent: egyetlen kiválasztott jelenetképkocka nem képes megőrizni mindkét
időbeli végpontot. A hívó opcionálisan megadhat véges fókuszablakot (`start`/`end`
másodpercben); a határokat a rendszer a média időtartamához igazítja, a fordított
vagy nem véges ablakokat elutasítja, és minden mintavételi házirendet kizárólag
a normalizált intervallumon belül hajt végre. Az eredményül kapott
ablak bekerül a mintavételi metaadatokba és a nem megbízható leírási
előtagba, így az alsóbb rétegbeli modellek megkülönböztethetik a fókuszált
részletet a teljes idővonaltól.

A szemantikai feliratfókusz különálló, explicit beállítás. Az alapértelmezett
`full` elemzési mód megőrzi a meglévő képkockapromptot, és soha nem továbbítja a
kérés szövegét a feliratmodellnek. `focused` módban a híd csak az ugyanazon Chat-
vagy Responses-tárolóból származó legutóbbi, nem üres, felhasználó által létrehozott
`text`/`input_text` tartalmat olvassa be, NFC-formára normalizálja, összevonja a
vezérlőkaraktereket és az üres helyeket, majd 500 Unicode-kódpontra korlátozza.
Az üres eredmény esetén pontosan a `full` promptot használja tartalékként. A
használható tippet JSON-ként szerializálja egy külön, nem megbízható
felhasználói kontextusblokkban, és az kizárólag a megfigyelhető részletek
elsődlegességét befolyásolhatja; nem írhatja felül azt a külön figyelmeztetést,
amely tiltja a médiában látható vagy hallható utasítások követését. A szöveges
fókusz soha nem következtet `start`/`end` értékekre, és nem módosítja az időbeli
mintavételezőt.

#### FU-07 strukturális szegmensbizonyíték

A `segment_aware` egyetlen korlátozott előelemzési menetet hajt végre a már ellenőrzött helyi videófolyamon. A rögzített szűrőlánc először legfeljebb 320 képpont szélességűre méretezi a videót, észleli a jelenetváltásokat és a kimerevített időszakokat, majd másodpercenként 1 képkockából mintát vesz az elmosódás, az átlagos fénysűrűség, valamint a térbeli/időbeli információ meghatározásához. A menet legfeljebb 600 strukturális mintára, egyetlen FFmpeg-/szűrőszálra, ugyanarra a kizárólag `file` protokollt és engedélyezett konténereket használó korlátozásra, 1 MiB-os folyamatkimeneti korlátra, valamint a közvetítő megosztott megszakítási/határidő-keretén belül legfeljebb 30 másodpercre korlátozódik. A kérésből soha nem fogad el parancsot, szűrőt, elérési utat vagy URL-t.

A strukturális értékek determinisztikus mintavételi bizonyítékok, nem pedig a videó szemantikai értelmezései. Nem következtetnek alanyokra, cselekvésekre, feliratokra, beszédre vagy felhasználói szándékra. A jelenet- és kimerevítési határok szegmenseket alkotnak; a kimerevítés lefedettsége, az elmosódás, az expozíció, a térbeli részletesség és az időbeli változás csak azt befolyásolja, hogyan oszlik el a meglévő, 1–16 képkockás keret. Egy teljesen kimerevített szegmens legfeljebb egy képkockát kaphat, míg a nem kimerevített szegmensek a fennmaradó keretért versenyeznek. Ha több határ van, mint képkocka, megmarad az idővonal egyenletes lefedettsége, így a gyors korai vágások nem rejthetnek el egy hosszú záró szegmenst. A kimerevítési határ 1 másodperces elemzési felbontásán belüli jelenethatárok összevonásra kerülnek.

A hiányzó szűrők, a hibás vagy üres bizonyítékok, az érzékelő hibája, illetve a korlátozott előelemzés időtúllépése esetén a rendszer hibatűrően visszaáll a pontosan egyenletes középponti szabályzatra. A hívó általi megszakítás vagy a közvetítő határidejének lejárta esetén nincs ilyen visszaállás: a folyamatban lévő alfolyamat leáll, a későbbi képkockakinyerés nem történik meg, a privát ideiglenes könyvtárfa pedig a `finally` blokkban eltávolításra kerül.

A `scripts/perf/video-bridge-fu07-eval.ts` determinisztikus, valódi FFmpeg-tesztanyagokat hoz létre a deduplikáció utáni képaláírás-hívások megtakarításának, a sűrű mozgású tartalmak keretelosztásának, az elmosódási/expozíciós/SI-TI bizonyítékoknak, a hosszú záró szakasszal rendelkező gyors vágásoknak és a fokozatos áttűnések téves pozitív észleléseinek vizsgálatához. Rögzíti az előelemzés valós idejét, továbbá ahol a `/usr/bin/time` elérhető, a gyermekfolyamat CPU-idejét és RSS-csúcsértékét is. A minőség-ellenőrzései kizárólag strukturális orákulumok. A valódi képaláírás-modell minősége továbbra is `HOLD`, mert ehhez a tesztkörnyezethez nem tartozik engedélyezett végpont vagy rögzített bíráló. A pénzbeli megtakarítás szintén `HOLD` marad, kivéve, ha a `--caption-cost-per-call-usd` kifejezetten pozitív hívásonkénti költségbecslést ad meg; a szkript egyik eredményt sem hamisítja meg.

Minden képkocka mérete legfeljebb 4 MiB, az összes nyers képkockáé együttesen legfeljebb 23 MiB, a közvetítő szerializált válaszáé pedig legfeljebb 32 MiB lehet. A privát ideiglenes könyvtár a `finally` blokkban eltávolításra kerül. Az OmniRoute nem tartalmazza az FFmpeg-et, és nem fogad el egyéni végrehajthatófájl-elérési utat. A képaláírások létrehozása előtt a híd konzervatív vizuális deduplikációs menetet alkalmaz: minden JPEG-et egy 16×16-os szürkeárnyalatos pufferre kicsinyít, és csak az utoljára megtartott képkockával hasonlít össze. Egynél több képkockás képaláírási keret esetén a kinyerés legfeljebb a keret kétszeresének megfelelő, de soha nem több mint 16 képkockából álló, korlátozott jelölthalmazt biztosít. A kért korlát csak a deduplikáció után lép érvénybe; ha a keret legalább kettő, a végső ritkítás során az első és az utolsó kiválasztott jelölt megmarad. A verziózott `grayscale-16x16-mean-cells-v2` szabályzat az átlagos fénysűrűség-különbség és azon miniatűrcellák aránya közül a nagyobb értéket használja, amelyek normalizált eltérése legalább 0,05. A duplikációs küszöb a 0,04-es konstans, amelyet a kiszámíthatóság érdekében választottak, nem pedig futásidejű beállításként tettek elérhetővé. Ez a másodlagos, nagy kontrasztú jel megőrzi azokat a kis mozgásokat és láthatószöveg-változásokat, amelyeket a kizárólag átlagon alapuló összehasonlítás elrejthet. Az összehasonlító vagy a dekóder hibái esetén a rendszer hibatűrően megtartja a lefedettséget. A kimeneti metaadatok külön kezelik a kinyert jelölteket, a sikeresen felhasznált képkockákat és az eldobott vizuális duplikátumokat.

Egy kifejezetten videóként megjelölt rész időbélyeggel ellátott kontaktlapot kérhet. A híd legfeljebb 4 oszlopos, 16 képkockás JPEG-rácsot készít. Minden 512 képpontos cella nagy kontrasztú alsó sávba égeti a forrás időbélyegét, miközben ugyanezek az időbélyegek a szöveges metaadatokban is megmaradnak a későbbi társítás és ellenőrzés érdekében. A teljes JPEG mérete továbbra is legfeljebb 32 MiB lehet. Ha a `sharp` nem tudja dekódolni vagy összeállítani a rácsot, a híd visszaáll az egyedi JPEG-képkockák használatára; az ügyfél általi megszakítás továbbra is továbbterjed a kontaktlap-műveleten keresztül.

Az élesítéshez szükséges bizonyítékokat szándékosan elkülönítették a szintetikus kompozíciós mikroteljesítmény-teszttől. A `scripts/perf/video-bridge-contact-sheet-eval.ts` egy sémaverziózott A/B tesztkörnyezetet határoz meg valódi, OpenAI-kompatibilis vizuális modellekhez. Méri a szolgáltató által jelentett tokeneket, a teljes végpontok közötti valós késleltetést — beleértve a kontaktlap összeállítását —, a modellhívások számát és a jegyzékben meghatározott tények megőrzését. A nyers modellválaszok nem kerülnek a jelentésbe; csak az SHA-256 kivonatok és az egyező tényazonosítók maradnak meg. A tesztkörnyezet nem indít hálózati vagy fizetős modellhívást, kivéve, ha megadták a `--execute-real` kapcsolót, és konfigurálva van a `--model`, az `OMNIROUTE_BASE_URL` és az `OMNIROUTE_API_KEY`. Ilyen kifejezett valós futtatás nélkül a géppel olvasható ítélet `HOLD` marad; a szintetikus adattömeg- és hívásszám-mérések önmagukban nem szolgálnak az élesítés bizonyítékául.

A hívók opcionális `transcript.cues` tömböt csatolhatnak egy támogatott videórészhez, ha már rendelkeznek időben igazított szöveggel. Minden jelzésnek tartalmaznia kell a `text` mezőt, a bemért időtartamon belüli véges `start`/`end` intervallumot, valamint egy engedélyezett `source` értéket (`client`, `embedded` vagy `audio-bridge`); a `confidence` alapértelmezett értéke `1`, és `0` és `1` között kell maradnia. A pontosan azonos jelzések összevonásra kerülnek. Az OmniRoute soha nem indít átírást ezekből a metaadatokból: az ellenőrzött jelzéseket a forrással, a megbízhatósággal és az intervallummal együtt a leírt eredménybe másolja, és nem megbízható megfigyelésekként jeleníti meg őket a képkockák képaláírásai mellett. Az érvénytelen, tartományon kívüli vagy eredetmegjelölés nélküli szöveget elutasítja ahelyett, hogy a képaláírás-folyamba keverné. A kéréstörzs mindkét átirati csatornája `client` értékre normalizálja a megadott eredetet, beleértve a saját állítású `embedded` vagy `audio-bridge` címkéket is. Ezeket a megbízható címkéket csak egy kiszolgáló által felügyelt adapter rendelheti hozzá a kizárólag kódból elérhető `trustedSource` argumentumon keresztül; a kérés JSON-mezője nem érheti el ezt az argumentumot. Az átirat szövege az eredetétől függetlenül nem megbízható, médiából származó tartalom marad, és soha nem határozhatja meg az engedélyezést.

Egy speciális hívó megadhat egy `audioTranscript` sávot ugyanahhoz a videóhoz;
ezt a rendszer az ügyfél által biztosított szövegként kezeli, nem pedig a kiszolgáló általi átírás bizonyítékaként.
Az egyesítési pont a vizuális és hangmegfigyeléseket egyetlen
határidővel és megszakítási jellel futtatja, közös idővonalon rendezi őket, összevonja
a pontos másolatokat, és részleges eredményt jelent, ha csak az egyik oldal jár sikerrel.
Egy érvénytelen `audioTranscript` ilyen részleges eredményre degradálódik — a vizuális
leírás megmarad, a hangág pedig egy megtisztított hibakódot rögzít —,
ahelyett, hogy a teljes videó feldolgozása meghiúsulna. Az ágankénti rendelkezésre állás, a részleges jelző
és a megtisztított hibakódok megmaradnak a leírt eredményben, a
védőkorlát metaadataiban (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), az eredmény-gyorsítótár metaadataiban és a híd
egyesítési számlálóiban. Az alapértelmezett Video Bridge útvonal nem hív meg beszéd-szöveg
átalakítást, és nem tölt le egy második médiapéldányt; e kifejezetten megadott sáv nélkül
továbbra is csak videót dolgoz fel.

**Átiratok megőrzése (#12150 P1).** Ez automatikusan érvényes minden olyan esetben, amikor a
Video Bridge (amely maga is külön engedélyezendő) átiratjelzést jelenít meg — nincs külön
megőrzési jelző. Amikor egy kérés bármilyen átiratjelzést megjelenít (egy hívó által deklarált
`transcript` vagy egy egyesített `audioTranscript`), a védőkorlát
`videoBridgeObserved` jelöléssel látja el, és létrehozza a videóleírás kitakart árnyékmásolatát —
egy azonos megjelenítést, amelyben minden jelzés szabad szöveges törzsét a
`[redacted-video-transcript]` érték helyettesíti; ez a strukturált jelzésmező cseréjével készül
a karakterlánc összeállítása előtt (soha nem a kilapított szöveg elemzésével, így semmilyen
jelzéstartalom — sem ellenséges, sem szokványos, beleértve a `]` karaktert tartalmazó törzseket,
például az `[inaudible]`/`[music]` értékeket — nem maradhat meg). A tartósan tárolt hívásnapló
kéréstörzse minden videóból származó szövegrészt erre a kitakart árnyékmásolatra cserél,
tartalmi egyezés alapján; a `fullText` horgonyt a rendszer újra beolvassa a befejezett, hívás előtti
védőkorlát-adatcsomagból, így az egyezés akkor is sikeres marad, ha a lánc későbbi védőkorlátai
(a PII- és hitelesítőadat-maszkolók, 10/95-ös prioritással) helyben átírják a leírás szövegét,
valamint miután a rendszerprompt, az átadás vagy a memória befecskendezése átalakítja az
üzenettömböt. A modellnek upstream irányba küldött törzs változatlan marad. Egy megfigyelt kérés
tartós Memory-adatot sem tölt fel (a kérésből és a válaszból történő kinyerés egyaránt kimarad),
így a modell saját válasza sem másolhatja vissza az átirat szövegét a Memory területére.

**Nyers videómezők (#12430).** Ha a híd engedélyezve van, és a natív videótámogatás ismeretlen vagy hiányzik, a definiált `transcript`/`audioTranscript` mezők szintén aktiválják a `videoBridgeObserved` jelzést, még leírási hiba vagy `maxVideos` korlát után is. A `null` értékek és az üres karakterláncok számítanak; a hiányzó mezők és a nem videóhoz tartozó metaadatok nem. A megőrzött példányok kitakarják ezeket a mezőket vagy kihagyják a kérést, a gyorsítótárakat és a Memory használatát pedig megkerülik.

Ezeken a tartalék útvonalakon az érvényes, hívótól származó jelzések támogatott `text`/`input_text`
részekké válnak a nem szabványos szolgáltatói mezők helyett. Mindkét, a kérésben megadott sáv
nem megbízható `client` megfigyelés marad, kifejezett figyelmeztetéssel arra, hogy a videó
nem lett leírva, és az időbélyegek nem lettek ellenőrizve a médiához képest. A meglévő
256 jelzéses/64 KiB-os összesített és jelzésenkénti keretek a két sávra együttesen vonatkoznak;
az időbélyegeknek bele kell férniük a közvetítő 600 másodperces felső korlátjába és bármely
megadott fókuszablakba. Az érvénytelen sávokat a rendszer elveti, nem továbbítja tetszőleges
szövegként; egy érvényes társsáv továbbra is használható, kivéve, ha az együttes keretüket
túllépik. A null/üres mezők nem adnak hozzá szöveget. Ez a tartalék megoldás nem ad hozzá
médialekérést vagy átírást. Az átirat-kiterjesztési mezőket a rendszer eltávolítja a tartalék
videóhordozóból és annak `video_url`/`source` objektumaiból. Az OpenAI vezetékes engedélyezési
listája szigorú marad; az ismeretlen natív támogatású videóhordozók továbbra is elérhetők,
az ismerten csak szöveget támogató célok pedig megtartják a biztonságos jelölőket.
A strukturált kitakarási árnyékmásolatok védik a hozzáfűzött átiratszöveget, miközben a hívó
tulajdonában lévő eredeti kérés változatlan marad. A natív támogatással rendelkező célok
és a letiltott hidak megtartják meglévő megkerülési viselkedésüket.

A további megőrzött példányok ugyanazt a megfigyeltkérés-jelzést használják. A védőkorlát előtti
nyers ügyfélkérés-pillanatkép, a memóriában lévő függő kérés és a korán elutasított kérés naplója
strukturálisan lecseréli a videórészek átiratmezőit; a folyamatlépések és a kontextusátadás által
előállított karakterlánc-promptokat a rendszer a tartósan tárolt kéréstörzs kimeneti pontján
takarja ki. A tartósan tárolt `video_content_removed` jelölő miatt a `previous_response_id`
használatával történő folytatás biztonságosan meghiúsul, ahelyett, hogy rekonstruálná a
szándékosan eldobott szöveget. Ha egy megfigyelt kérés naplózás előtt elveszíti a részenkénti
kitakarási árnyékmásolatát, vagy akár csak egy is a több videós árnyékmásolat közül nem egyezik
a kérés későbbi módosításai után, a rendszer teljes egészében kihagyja a megőrzött kéréstörzset,
ahelyett, hogy részlegesen kitakart átiratot őrizne meg.

Egy megfigyelt kérés esetén a modell válasza strukturált jelzéshatár nélkül idézheti az átirat
bármely részét. Ezért a tartósan tárolt hívásnapló `responseBody` mezőjét a rendszer kihagyási
jelölőre cseréli; a részletes folyamat-műtermék (amely upstream/ügyféloldali törzseket és
adatfolyam-részleteket tartalmazhat) nem marad meg. A szemantikai, idempotencia- és
következtetés-visszajátszási gyorsítótárak megkerülik az olvasást és az írást ennél a kérésnél.
A szolgáltatói kérés és az ügyfél számára látható válasz változatlan marad. A korai életben
tartó bájtokat a rendszer kiüríti az ideiglenes pufferből, amikor a részletes műterméket kihagyja.
A Kiro hibás EventStream-figyelmeztetése csak az adatcsomag bájtjainak számát jelenti, soha nem
annak tartalmát vagy a JSON-elemző nyers hibáját.
Ez nem állítja, hogy minden egyéb, nem kapcsolódó szolgáltatói/bővítménydiagnosztika auditálva
lett; a megőrzött kimeneti pontok szélesebb körű átvizsgálását a #11658 követi nyomon.

A belső `/api/modality-bridge/video/drilldown` életciklus egy különálló,
loopback-/tokenhitelesített gyorsítótár-infrastruktúra. Minden művelethez
kanonikus, átlátszatlan elsődlegesazonosító is szükséges. Mielőtt egy éles
hívó engedélyezve lenne, ezt az azonosítót a hitelesített bérlőből kell
származtatnia, és soha nem továbbíthat kliens által kiválasztott értéket.
A gyorsítótárkulcsok ezt az elsődlegest a kanonikus munkamenet- és
videóhivatkozás-azonosítókhoz kötik, csak az SHA-256 alapján származtatott
kulcsaikat tárolják, továbbá az olvasásokat és a törlést is ugyanarra az
elsődlegesre korlátozzák. A gyorsítótár bejegyzésenként legfeljebb 16
származtatott JPEG-képkockát tárol, tíz perc után lejáratja őket, és támogatja
a korlátozott `start`/`end` olvasásokat, illetve a munkamenet explicit törlését.

Elsődlegesenként legfeljebb 16 bejegyzés és 64 MiB kanonikus JPEG-adat
engedélyezett. Ezek a korlátok függetlenek a globális, 64 bejegyzéses/256 MiB-os
felső korláttól: az elsődleges kvótájára nehezedő nyomás csak az adott
elsődleges legrégebben használt bejegyzéseit távolítja el, mielőtt sor kerülne
a globális LRU szerinti eltávolításra. A lejárt bejegyzések a gyorsítótár
aktivitásakor mind az elsődlegeshez tartozó, mind a globális elszámolásból
törlődnek, míg megszakítás vagy ellenőrzési hiba esetén a részleges csere nem
kerül véglegesítésre.

A gyorsítótár elutasítja a nem kanonikus Base64-et, a túlzott kitöltést, a nem
JPEG típusú médiát, a hibás vagy csonkolt JPEG-eket, valamint azokat a JPEG-eket,
amelyek a `sharp` korlátozott, teljes képes dekódolása során figyelmeztetést
eredményeznek. Minden elfogadott képet kanonikus JPEG-ként kódol újra, a
szélességet és a magasságot a dekódolt bájtokból származtatja a hívó által
megadott mezők elfogadása helyett, a záró poliglott bájtokat pedig nem őrzi
meg. Mindkét kvótába csak a korlátozott méretű, kanonikus tömörített puffer
számít bele. A JSON átviteli korlátja tartalmazza a 32 MiB-os dekódoltbemenet-
korláthoz tartozó Base64-többletet. Minden tárolt származtatás rögzíti az
ellenőrzött JPEG-formátumot és -felbontást, a mintavételi házirendet, a
származtatási verziót, a létrehozás idejét, a szerver által kiszámított
tartalomkivonatot, valamint a kivonatolt szülőhivatkozást és a megbízható hívó
által megadott szülő-tartalomkivonatot. A rendszer az atomi gyorsítótár-
véglegesítés előtt, az aszinkron dekódolási és kivonatképzési fázisok között
ellenőrzi a megszakítást.

Ez a fejlesztési részlet még nem kapcsol éles előállítót az útvonalhoz, és nem
biztosít többfelbontású változatkiválasztást. Az átlátszó Video Bridge
kérésútvonala ezért nem végez többletmunkát, míg a bérlőhöz kötött
elsődleges-származtatás és a teljes FU-08 többfelbontású életciklusa továbbra is
explicit utánkövetési feladat marad, nem pedig befejezett működésként
dokumentált képesség.

A képkockák egymás után kapnak képaláírást a konfigurált Video modellel. Az
üres Video-felülbírálás örökli a Vision beállítást; ha mindkettő üres, a Vision
automatikus útválasztója választja ki a tényleges, látási képességgel rendelkező
modellt. A sikeres képaláírások az eredeti részt egy stabil
`[Video description:` előtaggal helyettesítik, amely a szöveget nem megbízható,
médiából származó megfigyelésként is megjelöli, és arra utasítja a további
modelleket, hogy ne kövessék a médiában található utasításokat. A képkocka-
képaláírások gyorsítótárkulcsai tartalmazzák a JPEG bájtjait, a promptot, az
időbélyeget és a tényleges modellt; csak a sikeres képaláírások kerülnek a
gyorsítótárba. A gyorsítótár-bejegyzések megőrzik a ténylegesen sikeres
előállítómodellt, beleértve a tartalék modellt is; a híd `mixed` értéket jelent,
ha a különböző képkockákat különböző modellek állították elő. A gyorsítótár-
találat újra felhasználja ezt az előállítói identitást ahelyett, hogy a kért
útválasztási terv szerint címkézné át. A teljes videó eredmény-gyorsítótára
minden olyan bemenet alapján kap kulcsot, amely módosítja a kimenetet — prompt,
tényleges modell, mintavételi házirend, képkockaszám, szemantikai elemzési mód,
a normalizált fókusztipp SHA-256-ujjlenyomata, fókuszablak, `transcript`,
`audioTranscript` és a kontaktlapjelző —, így ezen dimenziók bármelyikének
módosítása gyorsítótár-melléfogást eredményez, nem pedig elavult eredmény
újrafelhasználását. A vizuális deduplikációs házirend verziója, küszöbértéke és
korlátozott jelöltképkocka-száma szintén explicit módon szerepel az eredmény-
gyorsítótár kulcsában és metaadataiban; egy házirend módosítása ezért nem
használhat fel elavult teljesvideó-leírást. Az eredmény-gyorsítótár v4-es
metaadatai megőrzik a módot és az ujjlenyomatot, de soha nem a nyers
felhasználói feladatot. A védőkorlát metaadatai a kért és a tényleges elemzési
módot is jelentik; a használható felhasználói szöveg nélküli, kért `focused`
mód ténylegesen `full` módként kerül jelentésre.

A védőkorlát minden támogatott videórészt kinyer, de legfeljebb
`modalityBridgeVideoMaxVideos` darabot ír le. Olyan cél esetén, amelyről
bizonyított, hogy `supportsVideo === false`, a sikertelen és a korlátot túllépő
videók explicit, biztonságos szöveges jelölőkké alakulnak, így nem marad nyers
videó. Ha a képesség ismeretlen, ezek a részek megtartják videóhordozójukat;
bármely tartalék átirat a fenti korlátozott szövegkonverziót követi. A
`supportsVideo === true` értékkel rendelkező célok megkerülik a hidat.
A klienskérés megszakítási jele továbbterjed a letöltésen, a bróker várólistáján,
az alfolyamatokon és a képaláírás-hívásokon keresztül; a megszakítások a videók
között leállítják a feldolgozást, és soha nem eredményezik a nyers médiára való
nyitott visszaesést.

A futásidejű beállítások adatbázis-alapúak és Zod által ellenőrzöttek:

| Kulcs                               | Alapértelmezett | Tartomány / viselkedés                                                                                                          |
| ----------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`         | Opcionális futtatókörnyezet, külön engedélyezendő                                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | A `full` megőrzi az általános képaláírásokat; a `focused` korlátozott, nem megbízható legutóbbi felhasználói kontextust használ |
| `modalityBridgeVideoModel`          | `""`            | A Vision Bridge modelljének öröklése                                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware` vagy arányos `segment_aware`; az érzékelő hibája esetén visszaáll `uniform` módra                      |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                                                  |

A 120 másodpercnél nagyobb, korábban tartósan tárolt Video-időtúllépési értékeket a
közvetítő határidejére korlátozza a rendszer; az ezt a korlátot meghaladó új beállítások mentését elutasítja.
A `GET /api/modality-bridge/video/runtime` a hitelesítés vagy a futtatókörnyezet vizsgálata
előtt megbízható, bélyegzett visszacsatolási lokalitást követel meg, majd felügyeleti
hitelesítést igényel. Csak az `available` értéket, az FFmpeg/ffprobe megtisztított verzióit és
egy rögzített indokot ad vissza, ha a futtatókörnyezet nem érhető el. A belső kinyerési végpont nem
nyilvános feltöltési API: a várólista telítettsége `503` értéket és `Retry-After` fejlécet ad vissza, a hívó
kapcsolatbontása `499`, a közvetítő rögzített határidejének lejárta pedig `504` választ eredményez. Az átalakított válaszok
hozzáadják a `video->text;model=<visionModel>;parts=<videos>` szegmenst a központi
`x-omniroute-modality-bridge` fejléchez, a Vision- vagy Audio-szegmensek eltávolítása nélkül.

### PII-maszkoló (`piiMasker.ts`)

**Mindkét** szakaszban fut.

- A **`preCall`** klónozza a hasznos adatot, bejárja a `system`, `messages`, `input` és
  `prompt` mezőket (beleértve az egyszerű karakterlánc-elemeket is), majd alkalmazza a
  `processPII()` függvényt (innen:
  `@/shared/utils/inputSanitizer`) a karakterlánc típusú `content`/`text` mezőkre. Ha
  `PII_REDACTION_ENABLED=true`, az észlelt személyazonosításra alkalmas adatokat kitakarja a kimenő
  hasznos adatban. Ez független az `INPUT_SANITIZER_MODE` értékétől (amely csak a
  promptinjektálási házirendet szabályozza). Ha a kitakarás ki van kapcsolva, a hívás az észlelések
  számát a tartalom átírása nélkül rögzíti.
- A **`postCall`** mély klónt készít a válaszról, majd futtatja a `sanitizePIIResponse()` függvényt és
  a Responses API-formátum maszkolóját (`maskResponsesOutput` — lefedi az
  `output_text` és az `output[].content[].text` mezőket). Ha bármilyen kitakarás történik, a
  módosított válasz lecseréli az eredetit.

A védőkorlát soha nem blokkol; csak megjegyzésekkel látja el (`meta.detections`,
`meta.redacted`) vagy átírja az adatokat.

### Promptinjektálás (`promptInjection.ts`)

Észleli a felhasználó által megadott tartalomban található ellenséges struktúrákat, és kikényszeríti a
beállított házirendet. A viselkedést környezeti változók és konstruktoropciók
határozzák meg:

| Beállítás         | Környezeti változó                                                                                   | Alapértelmezett | Hatás                                                                                                                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Engedélyezve      | `INPUT_SANITIZER_ENABLED`                                                                            | `true`          | `false` esetén a védőkorlát azonnal visszatér.                                                                                                                                                                                     |
| Mód               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`          | Injektálási házirend: `block`, `warn` vagy `log`. (A `redact` a visszamenőleges kompatibilitás érdekében elfogadott, de **nem** távolítja el az injektálási szöveget; a kérés PII-átírását a `PII_REDACTION_ENABLED` szabályozza.) |
| Blokkolási küszöb | `blockThreshold` opció / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` álnév) | `high`          | A blokkoláshoz szükséges minimális súlyosság. Az alapértelmezés szerint a közepes súlyosság csak megfigyelést eredményez.                                                                                                          |

**Módprioritás** (`getMode`): a hívó `options.mode` értéke →
az `INJECTION_GUARD_MODE` **adatbázisbeli funkciójelző-felülbírálása** (Irányítópult → Beállítások →
Funkciójelzők) → az `INJECTION_GUARD_MODE` környezeti változó → az `INPUT_SANITIZER_MODE` környezeti változó →
`warn`. Az irányítópulti felülbírálás tehát elsőbbséget élvez a környezeti változókkal szemben, így a Funkciójelzők
felhasználói felület élőben, újraindítás nélkül vezérli a futó védelmet. Az adatbázis olvasása hibabiztos:
hiba esetén a védelem visszaáll a környezeti változókon alapuló viselkedésre, és ha nincs
beállítva felülbírálás, a viselkedés megegyezik a kizárólag környezeti változókon alapuló feloldással.

Észlelési források:

1. `sanitizeRequest()` innen: `@/shared/utils/inputSanitizer` (a folyamat más részein is
   használt közös érzékelőkészlet).
2. Beépített `DEFAULT_GUARD_PATTERNS` (jelenleg `system_override_inline` és
   `markdown_system_block`, mindkettő `high` súlyosságú).
3. A konstruktoropciókon keresztül átadott opcionális `customPatterns` (karakterláncok, reguláris kifejezések
   vagy `{ name, pattern, severity }` rekordok).

Amikor `mode === "block"` **és** legalább egy észlelés eléri a súlyossági
küszöböt, a `preCall` visszatérési értéke `{ block: true, message: "Request rejected:
suspicious content detected" }`. `warn`/`log` módban a védelmi korlát naplózza az
eseményt, de engedélyezi a hívást. A megosztott `evaluatePromptInjection()` segédfüggvény
szintén exportálva van azon hívók számára, amelyeknek a regisztrációs rendszeren
kívül kell kiértékelniük a promptokat.

**Vizsgálati korlát (v3.8.20):** az észlelő az összefűzött promptszövegnek csak
az **első 16 KB-ját** vizsgálja — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bájt)
az `src/shared/utils/inputSanitizer.ts` fájlban. A `detectInjection()` és az
`evaluatePromptInjection()` egyaránt végrehajtja a `slice(0, MAX_INJECTION_SCAN_BYTES)`
műveletet a mintákon végzett ciklus futtatása előtt. Az injektálási direktívák a
bemenet elejének közelében találhatók, így ez korlátozza a reguláris kifejezések
CPU-/GC-terhelését a több száz KB-os hasznos adatok esetén anélkül, hogy gyengítené
az észlelést (vö. #3932, #4041).

### Hitelesítőadat-maszkoló (`credentialMasker.ts`)

**Mindkét** szakaszban fut, az alapértelmezett lánc utolsó elemeként (`95`-ös
prioritással). Kitakarja a jól ismert API-kulcs- és titkostoken-mintákat a kimenő
hasznos adatokból (üzenettartalom, eszközhívási argumentumok, eszközeredmények)
**és** a szolgáltató válaszából, így a promptba beillesztett (vagy egy eszközeredmény
által visszaadott) hitelesítő adat nem szivárog ki sem a felsőbb szintű
szolgáltatóhoz, sem vissza az ügyfélhez.

- **Csak külön engedélyezéssel működik**, a személyazonosításra alkalmas adatok
  kitakarásával azonos konvenció szerint (a 20. szigorú szabályhoz kapcsolódóan):
  le van tiltva, kivéve, ha `settings.credentialRedactionEnabled === true` **vagy**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kikapcsolt állapotban a védelmi korlát nem
  végez műveletet — soha nem blokkol és semmit nem ír át.
- A `redactCredentials()` bejárja a hasznos adat/válasz teljes fáját (`walkValue()`,
  prototípus-szennyezéssel szemben biztonságosan, a ciklusokat `WeakSet`
  használatával kezelve), és a találatokat `[REDACTED:<type>]` helyőrzőre
  cseréli, miközben csak a ténylegesen módosult ágakat klónozza.
- A `CREDENTIAL_PATTERNS` lefedi az LLM-szolgáltatók kulcsait (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), a VCS-/SaaS-tokeneket (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), a fizetési kulcsokat (Stripe, Square), a
  felhőszolgáltatási kulcsokat (AWS hozzáférési kulcs, Twilio, SendGrid, Mailgun),
  a privát kulcsokat/JWT-ket, a hitelesítő adatokat tartalmazó kapcsolati
  karakterláncokat (`mongodb://user:pass@...` stb.), valamint egy általános,
  `Authorization`/`x-api-key`/`api-key`/`apikey` fejlécértékekre illeszkedő
  mintát. A fejléc formájú kulcsokat (`authorization`, `x-api-key`, `api-key`,
  `apikey`) szerkezetileg takarja ki (csak az értéket; a séma előtagja, például
  a `Bearer `/`Basic ` megmarad), nem pedig az általános szöveges reguláris
  kifejezéssel.
- A védelmi korlát soha nem blokkol; csak átír (`modifiedPayload` /
  `modifiedResponse`) és megjegyzésekkel lát el (`meta.credentialsRedacted`, `meta.count`).

Regresszióvédő teszt: `tests/unit/credential-masker-guardrail.test.ts`.

## Alapszerződés (`base.ts`)

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
  block?: boolean; // true esetén megszakítja a láncot
  message?: string; // blokkoláskor jelenik meg
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // a preCall adja vissza a kérés átírásához
  modifiedResponse?: TValue; // a postCall adja vissza a válasz átírásához
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

Egy védőkorlát a „nincs változás” állapotot a `void`, a `{}` vagy a
`{ block: false }` egyikének visszaadásával jelzi. A `modifiedPayload`/`modifiedResponse`
visszaadása lecseréli a láncon továbbhaladó értéket a soron következő védőkorlátok számára.
A `signal?: AbortSignal` továbbítja a hívó életciklusát a védőkorlátoknak. A kérés megszakítása a szándékos, hibát átengedő kivétel: a médiakezelő hidak leállítják a munkát és elvégzik a takarítást anélkül, hogy visszaállítanák a nyers médiát egy olyan cél számára, amelyről ismert, hogy nem támogatja azt.

## Nyilvántartó (`registry.ts`)

A singleton `guardrailRegistry` a következőket teszi elérhetővé:

- `register(guardrail)` — hozzáad egy védőkorlátot (vagy lecseréli a normalizált név alapján), majd
  növekvő `priority` szerint újrarendezi őket.
- `clear()` / `list()` — adminisztratív segédfüggvények.
- `runPreCallHooks(payload, context)` — végiglépked az aktív védőkorlátokon, továbbfűzi a
  hasznos adatot a `modifiedPayload` segítségével, és az első `block: true` értéknél leáll.
- `runPostCallHooks(response, context)` — ugyanez a folyamat a válaszoldalon.
- `resetGuardrailsForTests({ registerDefaults })` — törli az állapotot, és opcionálisan
  újraregisztrálja az alapértelmezéseket a tesztek tiszta elkülönítése érdekében.

Mindkét futtató `{ blocked, payload|response, results, guardrail?, message? }`
értéket ad vissza, ahol a `results` `GuardrailExecutionResult` rekordok tömbje, amelyek
védőkorlátonként tartalmazzák a `blocked`, `skipped`, `modified`, `error` és `meta` mezőket,
ami hasznos a nyomkövetéshez.

### Védőkorlátok letiltása kérésenként

A `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` összegyűjti azon
védőkorlátok neveinek duplikációmentes listáját, amelyeket az aktuális
kérésnél ki kell hagyni. A források (mind opcionális, és mindegyik összevonásra kerül):

- `apiKeyInfo.disabledGuardrails`
- A kérés törzsében lévő legfelső szintű `disabledGuardrails`
- A kérés törzsében lévő `metadata.disabledGuardrails`
- Az `x-omniroute-disabled-guardrails` fejléc (vagy a korábbi
  `x-disabled-guardrails`)

Az értékek lehetnek karakterláncok tömbjei vagy vesszővel elválasztott karakterláncok; a nevek
normalizálása kisbetűs kebab-case formátumra történik (`pii_masker` → `pii-masker`). Az eredmény
a `context.disabledGuardrails` mezőn keresztül kerül a nyilvántartóhoz, amely kihagyja
az egyező védőkorlátokat (`skipped: true` a `results` tömbben).

## Végrehajtási sorrend

Minden, a `src/sse/handlers/chat.ts` és az
`open-sse/handlers/chatCore.ts` fájlon áthaladó kérés esetén:

1. A `resolveDisabledGuardrails(...)` létrehozza a kihagyási listát az API-kulcsból, a törzsből
   és a fejlécekből.
2. A `guardrailRegistry.runPreCallHooks(body, ctx)` növekvő prioritási
   sorrendben futtatja a védelmi korlátokat:
   - A letiltott védelmi korlátokat `skipped` állapottal rögzíti.
   - Az egyes védelmi korlátok `preCall` műveletei a `modifiedPayload` segítségével átírhatják az adatterhet.
   - Az első `block: true` rövidre zárja a láncot, és a kezelő
     egy, a védelmi korlát általi elutasítást jelző választ ad vissza.
3. A (potenciálisan átírt) adatteher továbbhalad a kombinált útválasztáshoz és a felsőbb rétegbe
   történő továbbításhoz.
4. A válasz összeállítása után a `guardrailRegistry.runPostCallHooks(...)`
   ugyanazt a láncot futtatja a válaszon. A `block: true` ebben az esetben elveti a felsőbb réteg
   válaszát.

A kivételt dobó védelmi korlátokat `error: <message>` értékkel rögzíti, és a
`logger.warn` segítségével naplózza a rendszer, de a lánc folytatódik — a tervezés szerint hiba esetén átengedő módon.

## Konfiguráció

A beépített védelmi korlátok által beolvasott környezeti változók:

| Változó                               | Használja                       | Hatás                                                                                                                                    |
| ------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`              | Állítsa `false` értékre az észlelés teljes letiltásához.                                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`              | Injektálási szabályzat: `warn`, `block` vagy `log`. Az örökölt `redact` érték nem írja át az injektált szöveget.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`              | Az injektálás elleni védelem módja; egyben egy adatbázisbeli funkciójelző is, amely **felülbírálja** a környezeti változókat (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`              | A `MODE=block` által elutasított minimális súlyosság: `high` (alapértelmezett), `medium` vagy `low`.                                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`              | Az `INPUT_SANITIZER_BLOCK_THRESHOLD` örökölt álneve.                                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`                    | `true` esetén a kérésben szereplő személyazonosításra alkalmas adatokat kitakarja a rendszer (az injektálási módtól függetlenül).        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (kimeneti oldalon) | A válaszoldali maszkoló viselkedését szabályozza.                                                                                        |

A Modality Bridge védelmi korlátai futásidejű konfigurációjukat az adatbázis-alapú beállítástárból
(`getSettings()`) olvassák, nem környezeti változókból. A Vision elsődleges kulcsai:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` és
`modalityBridgeCacheMaxEntries`. Az örökölt
`visionBridge*` kulcsokat kizárólag a dokumentált, egy cikluson át elérhető olvasási
tartalékmegoldásként fogadja el a rendszer; az irányítópulton végzett írások az elsődleges kulcsokat használják. Az alapértelmezések és a tartalékérték-feloldó
a `src/shared/constants/modalityBridgeDefaults.ts` fájlban találhatók, az örökölt
konstansokat pedig a `src/shared/constants/visionBridgeDefaults.ts` őrzi.

A hangfeldolgozás a `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` és `modalityBridgeAudioMaxClips` beállításokat, valamint a megosztott
`modalityBridgeCache*` beállításokat használja. A hangfeldolgozáshoz nem tartozik örökölt kulcsokra épülő tartalékmegoldás, mert ezek
a kulcsok a Modality Bridge sémával együtt jelentek meg.

A videófeldolgozás a `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` és
`modalityBridgeVideoTimeout` beállításokat, valamint a megosztott `modalityBridgeCache*` beállításokat használja.
Alapértelmezés szerint le van tiltva, mivel az FFmpeg/ffprobe opcionális üzemeltetési
függőségek, a képkockák feliratozása pedig növeli a késleltetést és a modellhasználat költségét.

## Egyéni védőkorlátok

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

Lépések:

1. Hozza létre a `src/lib/guardrails/myGuardrail.ts` fájlt a `BaseGuardrail` kiterjesztésével.
2. Implementálja a `preCall` és/vagy a `postCall` metódust.
3. Regisztrálja importáláskor (a `registerDefaultGuardrails` függvényből hozzáadva), vagy
   futásidőben hívja meg a `guardrailRegistry.register(...)` metódust — a regisztrációs jegyzék
   lecseréli az azonos normalizált nevű korábbi védőkorlátot.
4. Adjon hozzá teszteket a `tests/unit/` könyvtárban (meglévő példák:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tesztelés

A tesztek között használja a `resetGuardrailsForTests()` függvényt, hogy ismert állapotból induljon.
Üres regisztrációs jegyzékkel való indításhoz adja át a `{ registerDefaults: false }` értéket, és
csak a tesztelendő védőkorlátokat regisztrálja. A Vision Bridge támogatja a függőséginjektálást
(`deps.getSettings`, `deps.callVisionModel`); az Audio Bridge ezzel egyenértékű csatlakozási
pontokat biztosít a beállításokhoz, képességekhez, az STT-modell kiválasztásához, a hitelesítő
adatok ellenőrzéséhez és az átíráshoz. A tesztek így adatbázis- vagy hálózati hozzáférés nélkül
is ellenőrizhetik mindkét folyamatot.

## Lásd még

- `src/lib/guardrails/` — implementáció
- `src/shared/utils/inputSanitizer.ts` — a promptinjektálás és a személyazonosításra alkalmas adatok maszkolását
  működtető megosztott detektor
- `src/shared/constants/visionBridgeDefaults.ts` — a Vision Bridge alapértelmezett értékei és
  a kényszerített hídként kezelt modellek listája
- `src/shared/constants/modalityBridgeDefaults.ts` — a Vision/Audio megosztott futásidejű alapértelmezett értékei
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonális réteg (áramkör-megszakító, várakozási idők)
- `docs/reference/ENVIRONMENT.md` — a környezeti változók teljes referenciája

## Az injektálásvédő útvonal-lefedettsége és red-team tesztelése (8. fázis · D blokk)

Az injektálásvédő (`createInjectionGuard` / `withInjectionGuard`) minden olyan útvonalat lefed,
amely felhasználói promptokat fogad. Figyelembe veszi az `INJECTION_GUARD_MODE` beállítást
(alapértelmezés szerint `warn` = csak naplózás; `block` = HTTP 400 `SECURITY_001` választ ad vissza).

| Típus            | Útvonalak                                                                                                                                            | Alapértelmezett mód |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Szöveg (meglévő) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatív        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Adat             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

A szövegkinyerés (`extractMessageContents`) a `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőket kezeli.

**Red-team (éjszakánként, `nightly-llm-security.yml`):** a promptfoo ellenőrzi, hogy minden útvonal
blokkolja-e az OWASP-LLM korpuszt `INJECTION_GUARD_MODE=block` módban; a garak próbákat futtat
(titkos érték hiányában kihagyja őket). A `moderations` a konzisztencia érdekében szerepel — a
blokkoló módot használó üzemeltetők a `resolveDisabledGuardrails` segítségével mentesíthetik.

Az éjszakai munkafolyamat (`.github/workflows/nightly-llm-security.yml`, cron + kézi
indítás) két feladatot tartalmaz:

- **`promptfoo-guard` (blokkoló)** — futtatja a `promptfoo eval -c promptfooconfig.yaml`
  parancsot `INJECTION_GUARD_MODE=block` beállítással. Minden ellenséges teszteset (például „hagyj
  figyelmen kívül minden korábbi utasítást…”, DAN-stílusú jailbreak-kísérletek) ellenőrzi, hogy a válasz
  tartalmazza-e az `error.code === "SECURITY_001"` értéket, vagyis hogy a védő valóban elutasította-e a kérést.
- **`garak` (tájékoztató jellegű)** — a garak `--probes promptinject,dan,leakreplay`
  próbáit futtatja egy helyi OmniRoute-példánnyal (`http://localhost:20128/v1`) szemben. Egy
  szolgáltatói titkos érték (`PROMPTFOO_PROVIDER_KEY`) meglétéhez kötött; annak hiányában szabályosan
  kimarad, és az `|| true` utótagot kapja, így jelentést készít anélkül, hogy meghiúsítaná a CI-folyamatot.

A védő segédfüggvény (`createInjectionGuard` / `withInjectionGuard`) lefedettsége
minden promptot fogadó `/v1` útvonalra kiterjed; a prompt szövegét a
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőkből
az `extractMessageContents()` nyeri ki a `src/shared/utils/inputSanitizer.ts` fájlban.
