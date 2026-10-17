# Guardrails (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizováno:** 2026-08-29 — v3.8.51 (původ přepisu Video Bridge deklaruje volající,
> server jej zatím neověřuje — upřesněno dle #11661)

Guardraily prosazují bezpečnost, zásady a transformace obsahu na rozhraní
mezi OmniRoute a upstream poskytovateli. Každý guardrail může kontrolovat (a
volitelně odmítnout, transformovat nebo anotovat) datové části požadavků (`preCall`) a
upstream odpovědi (`postCall`).

Systém je **fail-open**: pokud guardrail během provádění vyvolá výjimku, registr
chybu zaznamená a pokračuje dalším guardrailem, místo aby požadavek
selhal. Blokování je výslovné rozhodnutí (`block: true`), nikdy ne nehoda.

## Vestavěné ochranné mechanismy

Registr při importu automaticky načte šest ochranných mechanismů v pořadí podle priority
(viz `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Název               | Fáze           | Soubor                |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižší hodnoty priority se spouštějí **jako první**.

### Obrazový most (`visionBridge.ts`) — most modalit PR-1

Zachytává požadavky obsahující obrázky, které směřují na **modely bez podpory obrazu**, a buď
přesměruje celý požadavek na model podporující obraz, nebo před voláním
nadřazené služby nahradí obrázkové části textovými popisy vytvořenými
konfigurovatelným obrazovým modelem. Poskytovatelé podporující pouze text tak mohou
transparentně zpracovávat multimodální datové části.

Průběh:

1. Přeskočit, pokud cílový model již podporuje obraz (pokud není uveden
   v seznamu modelů s vynuceným přemostěním `isVisionBridgeForcedModel`).
2. Extrahovat obrázkové části pomocí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), která deleguje na **sjednocený detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný zdroj pravdy
   sdílený s filtrem kombinované kompatibility. Extrakce je omezena povoleným
   seznamem částí nejvyšší úrovně ve tvarech, které může `replaceImageParts`
   vložit zpět (smlouva extrakce↔nahrazení): OpenAI `image_url`, Anthropic
   base64 `source.type:"base64"`, Anthropic URL `source.type:"url"` a Responses
   API `input_image`. Vnořené nálezy a tvary obsahující pouze indikátor jsou
   určeny pro kombinovaný filtr a nikdy se neextrahují. Pokud nejsou nalezeny
   žádné, krok se přeskočí.
3. Vyhodnotit konfiguraci za běhu pomocí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové klíče nastavení
   `modalityBridge*` mají přednost; starší klíče `visionBridge*` zůstávají jako
   **záložní možnost po dobu jednoho cyklu** (okno pro návrat zpět). Pokud je
   most zakázán, krok se přeskočí ještě před jakýmkoli průchodem médii.
4. Volič režimu (`modalityBridgeVisionMode`, viz tabulka níže) rozhodne mezi
   přesměrováním a popisem. Přesměrování vrátí `modifiedPayload`, v němž je
   změněn pouze `model`, spolu s metadaty `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta popisu: omezí počet obrázků na `maxImages`, sestaví výzvu zohledňující
   úlohu, zkontroluje mezipaměť popisů, zavolá obrazový model **paralelně**
   (`Promise.allSettled`) a na místo obrázků vloží textové části
   `[Obrázek N]: <popis>`. Neúspěšný popis vrátí `null` a původní obrázková část
   se **zachová** (#4012) — s výjimkou kombinované cesty popisu, pokud selhaly
   všechny popisy; v takovém případě je pro potvrzenou nadřazenou službu bez
   podpory obrazu místo obrázku vložen zástupný text
   `(nedostupné — není připojen žádný poskytovatel podporující obraz)` (#8430).
6. Vrátit `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Volič režimu (`modalityBridgeVisionMode`)

| Režim      | Výchozí | Chování                                                                                                                                                                                                                                                                                                                      |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Původní heuristika beze změn (#6640/#7204): modely, které nejsou kombinované, a modely `auto/` se přesměrují na nejlepší obrazový model, pokud již původní model nemá použitelné přihlašovací údaje (pak se použije popis); kombinované cíle vždy používají popis.                                                           |
| `describe` |         | Vždy použít popis — blok přesměrování je zcela přeskočen; vždy odpovídá uživatelem zvolený model.                                                                                                                                                                                                                            |
| `reroute`  |         | Vynutit přesměrování: kontrola zachování modelu s přihlašovacími údaji je obejita. Kontrola přihlašovacích údajů **cíle** přesměrování zůstává aktivní — pokud neexistuje žádný použitelný obrazový cíl, požadavek přejde na popis, aby se nezpracované obrázky nikdy nedostaly k backendu podporujícímu pouze text (#8430). |

Vynucené režimy ukončí rozhodování **předtím**, než se spustí automatická
heuristika; chování režimu `auto` je bajtově shodné s ochranným mechanismem
před PR-1.

#### Rozsah klíče API (`visionBridgeKeyScope.ts`)

Pokud klíč API volajícího omezuje `allowedConnections`, fondy kvót
(`allowedQuotas`) nebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most vybírá pouze
modely pro přesměrování a popis, které smí klíč používat, a pouze u připojení,
která smí klíč používat. Volání popisu pak vždy prochází přes vlastní smyčku
OmniRoute s hlavičkou `x-omniroute-self-loop-key-id`, takže přijímající chatový
požadavek znovu vynutí zásady připojení a modelů daného klíče.
`enforceApiKeyPolicy()` tuto hlavičku respektuje pouze společně s bearer tokenem
vlastní smyčky, takže může přístup pouze zúžit, a ID, které nelze vyhodnotit,
je odmítnuto.

Pokud pro daný klíč není povolen žádný obrazový model, cesta popisu ustoupí
stranou a požadavek projde beze změny, tedy se stejným otevřeným chováním při
selhání jako u zakázaného ochranného mechanismu (metadata
`{ skipped: true, reason: "no_permitted_vision_model" }`). Požadavky bez klíče
a klíče bez těchto omezení se chovají přesně jako dříve.

#### Výzva popisu zohledňující úlohu (`modalityBridgeVisionTaskAware`)

Výchozí hodnota je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) připojí
text **poslední zprávy uživatele** (zkrácený na 500 znaků) k základnímu
promptu pro popis, čímž zaměří popis na to, na co se uživatel skutečně ptal
(vzor codex-vision-proxy), a požádá model pro zpracování obrazu o přepis viditelného
textu. Pokud je příznak vypnutý — nebo není k dispozici žádný uživatelský text — základní prompt se použije beze změny.

Vlastní požadavek self-loopu pro popis kompatibilní s OpenAI (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vždy požaduje `image_url.detail: "high"` —
bezpodmínečně, pro každého volajícího/poskytovatele, bez závislosti na jakémkoli signálu klienta.
Vzorkování s nízkou úrovní detailů zhoršuje přesnost OCR právě u úlohy
přepisu textu, kterou tento prompt požaduje, takže samotné volání pro popis vždy vyžaduje vysokou
úroveň detailů bez ohledu na to, jakou úroveň detailů používal původní příchozí požadavek. To
ovlivňuje pouze tělo interního požadavku pro popis; nemění to způsob, jakým
OmniRoute předává vlastní `image_url.detail` volajícího v primárním požadavku —
tato výchozí hodnota se použije samostatně, a to pouze u rozpoznaných klientů OpenCode, ve
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Větev
self-loopu pro popis používající přenosový formát Anthropic nemá žádné pole `detail`
a žádná z těchto výchozích hodnot ji neovlivňuje.

#### Limit výstupu popisu (`modalityBridgeVisionMaxChars`)

| Klíč                           | Výchozí hodnota | Rozsah             |
| ------------------------------ | --------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`             | `0` nebo 100–50000 |

`0` (výchozí hodnota) znamená **bez omezení** — popis vrácený funkcí
`callVisionModel()` je předán beze změny, čímž se zachová stávající
chování. Jakákoli hodnota v rozsahu 100–50000 zkrátí popis a přidá
příponu `…` před jeho vložením zpět ve formátu `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Pro úlohy OCR s velkým množstvím detailů, kde navazující model potřebuje
úplný přepis, tuto hodnotu zvyšte; chcete-li omezit spotřebu tokenů u upovídaných modelů
pro zpracování obrazu, snižte ji. Pole na řídicím panelu se nachází v panelu Pokročilé na kartě Obraz
(`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) a každou
hodnotu mezi 1 a 99 zvýší na minimální hodnotu 100, zatímco explicitní `0`
ponechá beze změny — `0` je samostatně platná hodnota Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nikoli pouze
výchozí hodnota znamenající „nenastaveno“.

#### Mezipaměť popisů (`modalityBridge/bridgeCache.ts`)

Procesně sdílená mezipaměť LRU + TTL v paměti pro výstupy popisů.
Klíč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
rámcováním pomocí prefixů délky (bez kolizí na hranicích polí). Komponentou modelu je
**nakonfigurovaný** model bridge, nikoli model, který skutečně odpověděl —
`callVisionModel` může interně použít záložní model a vytváření klíčů pro každý pokus by
mezipaměť fragmentovalo. Neúspěšné popisy se nikdy neukládají do mezipaměti. Nastavení:

| Klíč                            | Výchozí hodnota | Rozsah  |
| ------------------------------- | --------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`          | —       |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000 |

#### Normalizace vzdálených obrázků (self-loop popisu / načítání base64)

Když bridge sám načítá **vzdálený** obrázek — pro vlastní volání popisu Anthropic
a převod do base64 pro přenosový formát claude
(`ensureBase64ImagesForClaudeWire`), obojí prostřednictvím
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledný datový
identifikátor URI je před vložením do požadavku modelu pro zpracování obrazu předán funkci `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Příliš velké obrázky jsou zmenšeny tak, aby jejich **delší hrana měla 2048 px**
(což odpovídá limitu změny velikosti, který OpenAI/Anthropic již používají na straně serveru), čímž se sníží
objem nahrávaných dat a latence, aniž by se změnilo to, co model pro zpracování obrazu vidí. Změna velikosti
používá `sharp`, načítaný dynamickým importem: na platformě, kde se jeho nativní
binární soubor nepodaří načíst, `normalizeDataUri()` **nikdy nevyvolá výjimku** — místo toho
propustí původní bajty beze změny, takže cesta popisu / převodu do base64
zůstane vždy funkční. Data, která nejsou obrázkem (načtený obsah, který neobsahuje
dekódovatelný obrázek), jsou rovněž předána beze změny. Tato normalizace
je omezena na obrázky, které bridge načítá pro své vlastní volání — nikdy
se nepoužije na nezměněný předávaný payload volajícího, což je v souladu
s principem změn pouze po explicitním přihlášení (Pevné pravidlo č. 20).

#### Schéma nastavení + migrace

Nové klíče `modalityBridge*` jsou validovány pomocí Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojice `modalityBridgeCache*` a skupina
`modalityBridgeAudio*` používaná službou Audio Bridge. Migrace
`141_modality_bridge_settings.sql` zkopíruje stávající starší hodnoty
`visionBridge*` do odpovídajících nových klíčů (idempotentně, nikdy nepřepíše
hodnotu `modalityBridge*` nastavenou operátorem); starší klíče zůstanou
po dobu jednoho cyklu vydání přijímány jako záložní možnost pro čtení.

#### Hlavička transparentnosti + statistiky

Odpovědi transformované pomocí popisu obsahují
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(vytvořeno funkcí `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
přidáno funkcí `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Přesměrované požadavky nemají **žádnou** hlavičku — payload zůstal nezměněný a změna
modelu je již viditelná v poli `model` těla odpovědi.

`GET /api/modality-bridge/stats` (ověření pro správu, stejná úroveň jako
`GET /api/settings`) vrací čítače jednotlivých modalit uložené v paměti
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pro `vision`, `audio` a
`video`. `averageLatencyMs` používá jako jmenovatel `latencySamples`, nikoli
všechny pokusy; operace bez měření času nevytváří uměle vzorek s nulovou délkou
v milisekundách. `bridged` zůstává zpětně kompatibilním aliasem pro úspěšné
převody; neúspěšné pokusy jej nezvyšují.
Čítače se záměrně resetují při restartu procesu
(telemetrie, nikoli účetnictví).

#### Konfigurace řídicího panelu

Vyhrazená stránka řídicího panelu je
`/dashboard/settings/modality-bridge`. Její záložky `Vision`, `Audio`
a `Video`, které lze adresovat pomocí URL, při přepínání hodnoty `tab`
zachovávají parametry dotazu. Záložka Vision nabízí zapnutí, režim, výběr modelu
(včetně automatické výchozí volby), zadávání pokynů zohledňující úlohu, pokročilé
limity časového limitu, obrázku, délky popisu a mezipaměti, běhové
čítače a chráněný ukázkový požadavek. Aktivní je také záložka Audio: nabízí
zapnutí, výběr pouze STT modelů s možností Auto, limity časového limitu a maximální
délky klipu, čítače zvuku a ukázkový test `input_audio`. Záložka Video je funkční:
uvádí běhový stav FFmpeg/ffprobe — jeden ze čtyř explicitních stavů uživatelského
rozhraní (`unknown`, dokud probíhá kontrola nebo ji nelze dokončit, `restricted`
na hostiteli řídicího panelu, který není loopback, kde se kontrola přeskočí na
straně klienta, `unavailable` po provedení kontroly a potvrzení, že nástroje
chybí, nebo `available` s verzemi FFmpeg/ffprobe) — ukládá limity
zapnutí/modelu/snímků/videa/časového limitu, filtruje výběr modelů pouze na modely
podporující obraz a zobrazuje čítače videa.

Dřívější karta Vision Bridge v nastavení AI je odkazem pro zajištění kompatibility
s novou stránkou; již neobsahuje druhou kopii formuláře. Media Providers také
odkazuje pracovní postupy Image-to-Text a Speech-to-Text na odpovídající záložky
Modality Bridge, aniž by odstraňovala stávající testovací prostředí
Speech-to-Text.

**Obejití řízení přístupu pro vlastní smyčku:** když je volání pro popis směrováno
přes vlastní smyčku OmniRoute `/v1` (nestandardní model poskytovatele), dílčí
požadavek odesílá `x-omniroute-admission-bypass: internal` a je ověřen pomocí
vyřešeného přihlašovacího údaje vlastní smyčky — lokálního zástupného údaje
`sk_omniroute` v lokálním režimu nebo klíče z proměnné prostředí
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` nakonfigurovaného provozovatelem (#1350),
takže nasazení s `REQUIRE_API_KEY=true` mohou volání pro popis nadále provádět.
Obejití je respektováno pouze pro tyto přesné přihlašovací údaje, takže externí
klienti nemohou pomocí této hlavičky přeskočit řízení přístupu.

Starší výchozí hodnoty se nacházejí v `src/shared/constants/visionBridgeDefaults.ts`;
nové výchozí hodnoty režimu, zohlednění úlohy a mezipaměti spolu s resolverem
nastavení se nacházejí v `src/shared/constants/modalityBridgeDefaults.ts`.
Ochranný mechanismus nabízí volbu konstruktoru `deps`, aby testy mohly podstrčit
falešné implementace `getSettings` a `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytává chatové požadavky obsahující zvuk ještě předtím, než dorazí k cíli,
o kterém není známo, že přijímá zvukový vstup. Chatový požadavek nikdy
nepřesměrovává: zvukové části se přepisují prostřednictvím stávajícího
vícedílného koncového bodu kompatibilního s OpenAI a zvolený chatový model
pokračuje s textovými přepisy.

Průběh:

1. Vyřešte `supportsAudio` prostřednictvím `getResolvedModelCapabilities()`.
   Explicitní metadata registru poskytovatelů mají přednost, následují statická
   metadata modelu a poté synchronizované `modalities_input`. Deklarovaný seznam
   vstupů bez `audio` má hodnotu `false`; pokud neexistují žádné důkazy
   o schopnostech, zůstává hodnota `null`. Hodnoty `false` i `null` aktivují
   konzervativní přemostění, zatímco `true` jej obchází.
2. Vyřešte nastavení `modalityBridgeAudio*` a ze všech zpráv pomocí sdíleného
   detektoru `detectMediaParts()` extrahujte zvukové části nejvyšší úrovně,
   které lze vyjmout a vložit. Podporovanými přenosovými formáty jsou OpenAI
   `input_audio`, `audio_url` a `source.media_type: "audio/*"`. Vnořený zvuk je
   detekován pro účely směrování, ale cesta pro vyjmutí jej neodstraňuje. Množství
   zpracování je omezeno pomocí `modalityBridgeAudioMaxClips`; pozdější části
   zůstávají beze změny.
3. Respektujte nakonfigurovaný `provider/model`, nebo nechte
   `selectAudioBridgeModel()` projít `AUDIO_TRANSCRIPTION_PROVIDERS` ve stabilním
   pořadí katalogu a vybrat první model s použitelným přihlašovacím údajem
   aktivního poskytovatele.
4. `callAudioTranscription()` převede zvuk ve formátu base64/datového URI na
   vícedílný `file`, případně stáhne vzdálené `audio_url` prostřednictvím ochrany
   odchozích přenosů povolující pouze veřejné cíle, s připnutím DNS a limitem
   25 MB. Poté odešle soubor a vybraný model metodou POST do lokální vlastní
   smyčky `/v1/audio/transcriptions`, ověřené pomocí `resolveSelfLoopBearer()`.
   Stávající trasa přepisu provede běžné vyhledání přihlašovacích údajů,
   zpracování doby zklidnění/omezení rychlosti a předání poskytovateli.
5. Úspěšná volání nahradí své části řetězcem `[Audio N]: <transcript>`. Volání
   probíhají pomocí `Promise.allSettled`: jednotlivé selhání zachová původní
   zvukovou část (smlouva #4012). Pokud všechna volání selžou a je prokázáno,
   že cíl má `supportsAudio === false`, části se změní na
   `[Audio N]: (unavailable — no STT provider connected)` (smlouva #8430).
   U neznámého cíle (`null`) zůstane při selhání všech volání vše beze změny.
   Prokazatelně pouze textový cíl bez použitelného přihlašovacího údaje STT obdrží
   stejný explicitní zástupný text bez provedení síťového volání.

Úspěšné přepisy používají procesově globální mezipaměť LRU/TTL Modality Bridge.
Klíč kombinuje odkaz na zvuk, stabilní označení operace `audio-transcription`
a vybraný model STT; selhání se nikdy neukládají do mezipaměti. Pokusy o zpracování
zvuku aktualizují sdílené čítače `bridged`, `cacheHits`, `failures`
a `lastUsedAt`. Transformované odpovědi obsahují
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nezměněné požadavky segment Audio Bridge neobdrží.

Běhová nastavení jsou uložena v databázi a validována pomocí Zod:

| Klíč                          | Výchozí hodnota | Rozsah                  |
| ----------------------------- | --------------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                       |
| `modalityBridgeAudioModel`    | `""`            | Automaticky nebo ID STT |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10                    |

Sdílená mezipaměť je nadále řízena pomocí `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Přemostění videa (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachytává části videa nejvyšší úrovně v `messages` rozhraní Chat Completions a
v `input` rozhraní Responses API před voláním cíle bez známé nativní podpory
videa. Podporované formáty jsou `input_video`, `video_url`, `video_source`,
adresy URL HTTPS a datové URI `data:video/*;base64,...`. Prosté názvy souborů
v textu nejsou považovány za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zajišťuje průchod požadavkem,
kontrolu možností a zásad, agregaci v rámci požadavku a datovou část odpovědi.
Zpracování jednotlivých videí — získání dat, mezipaměť celého výsledku, popis
sekvence snímků (který slučuje případný volajícím deklarovaný přepis zvuku)
a metriky, přerušení a úklid pro jednotlivé pokusy — je skryto za
`processVideoPart` v `videoBridgePipeline.ts`, které se volá jednou pro každou
část videa uvnitř smyčky `preCall`. Tento modul také definuje explicitní
hranice portů `VideoMediaBrokerPort` (získávání bajtů a extrakce vzorkovaných
snímků), `VideoAudioTranscriptionPort` (sloučení volajícím deklarovaného přepisu
zvuku s popisky vzorkovaných snímků) a `VideoDrilldownPort` (hranice perzistence
pro detailní analýzu snímků; dosud není zapojena do `processVideoPart` — záznamy
detailní analýzy v současnosti zapisuje pouze samostatná trasa
`/api/modality-bridge/video/drilldown`).

Veřejná cesta požadavku `/v1` nikdy neimportuje ani nespouští podproces. Vzdálená
videa se stahují s limitem 50 MiB; vložená videa v base64 mají konzervativní
limit 36 MiB dekódovaných dat na video, aby se obálka modelu, zpráv a rámcování
vešla do veřejného limitu 50 MiB pro příjem požadavků JSON. Délka vložených dat
a odhady dekódované velikosti se kontrolují před alokací. Pro počáteční vzdálenou
adresu URL i každé přesměrování je vyžadováno HTTPS, přičemž se používá stávající
ochrana odchozích spojení pouze do veřejné sítě s připnutím DNS. Bajty poté
procházejí přesnou interní hranicí zprostředkovatele
`POST /api/modality-bridge/video/extract`. Tato trasa je současně `LOCAL_ONLY`
a `SPAWN_CAPABLE`, přijímá pouze autentizovaný požadavek důvěryhodné místní
zpětné smyčky v rámci procesu a nikdy nepřijímá adresu URL, cestu k souboru,
spustitelný soubor ani seznam argumentů. Zpracování limitu velikosti těla API
a přírůstková čtečka těla obslužné rutiny nezávisle vynucují vstupní limit
zprostředkovatele 50 MiB. Jeho omezená fronta provádí vždy jednu extrakci,
umožňuje čtyři čekající úlohy a omezuje čekající vstupní data na 100 MiB.

Uvnitř zprostředkovatele čte `ffprobe` soukromý místní soubor; pevný seznam
povolených formátů vylučuje formáty playlistů a manifestů. U povolených
kontejnerů rodiny MOV zůstávají externí datové reference MOV ve výchozím
nastavení zakázané a pevně daný příkaz je nepovoluje. `ffprobe` i `ffmpeg`
používají seznam povolených protokolů omezený pouze na `file`, jedno vlákno,
pevná pole argumentů, žádný shell a spustitelné soubory vyhledané v `PATH`.
Připojené obrazové streamy obalů nejsou kandidáty pro přehrávání. Všechny
přehrávatelné streamy musí splňovat limity a před deterministickou náhradní
volbou streamu s nejnižším indexem se upřednostňuje explicitní výchozí stream.
Videa jsou omezena na 600 sekund, 8 192 pixelů v každém rozměru a 33 554 432
zdrojových pixelů. FFmpeg vzorkuje 1–16 JPEG snímků ve středech intervalů,
zmenšuje delší hranu nejvýše na 1 024 pixelů bez zvětšování menších vstupů
a nikdy neobdrží adresu URL. Výchozí metodou vzorkování je `uniform`. Volitelné
zásady `scene_aware` a experimentální `segment_aware` provedou jeden dodatečný
pevně definovaný průchod FFmpeg již ověřeným místním streamem, vyberou omezené
časové značky scén `showinfo` a při selhání detektoru, vypršení časového limitu,
chybně formátovaném výstupu nebo prázdné sadě kandidátů deterministicky použijí
stejné rovnoměrné středy intervalů. Režim zohledňující segmenty přiděluje vzorky
středů poměrně k ověřeným intervalům scén; podklady a chování náhradního postupu
v režimu zohledňujícím segmenty jsou podrobně popsány níže. Pevný limit 16
snímků se u každé zásady aplikuje po výběru. Pokud má požadavek zohledňující
scény rozpočet pouze jednoho snímku, použije rovnoměrný střed aktivního okna
celého videa nebo zaměřeného úseku a uvede `policyEffective: uniform`: jediný
vybraný snímek scény nemůže zachovat oba časové konce. Volající může volitelně
zadat konečné okno zaměření (`start`/`end` v sekundách); hranice se omezí na
délku média, obrácená nebo nekonečná okna se odmítnou a všechny zásady vzorkování
se provádějí pouze uvnitř normalizovaného intervalu. Výsledné okno je zahrnuto
do metadat vzorkování a do nedůvěryhodné předpony popisu, aby následné modely
dokázaly rozlišit zaměřený úsek od celé časové osy.

Sémantické zaměření popisků je samostatné, explicitní nastavení. Výchozí režim
analýzy `full` zachovává stávající výzvu pro snímky a nikdy nepředává text
požadavku modelu pro popis. V režimu `focused` přemostění čte pouze nejnovější
neprázdný uživatelem vytvořený obsah `text`/`input_text` ze stejného kontejneru
Chat nebo Responses, normalizuje jej do NFC, sjednotí řídicí znaky a bílé znaky
a omezí jej na 500 kódových bodů Unicode. Prázdný výsledek způsobí návrat
k přesné výzvě režimu `full`. Použitelná nápověda je serializována jako JSON
ve vyhrazeném bloku nedůvěryhodného uživatelského kontextu a smí pouze
upřednostňovat pozorovatelné detaily; nemůže potlačit samostatné varování před
následováním instrukcí viditelných nebo slyšitelných v médiu. Textové zaměření
nikdy neodvozuje `start`/`end` ani nemění časový vzorkovač.

#### Strukturální podklady segmentů FU-07

`segment_aware` používá jeden omezený průchod předběžné analýzy nad již ověřeným
lokálním videostreamem. Pevně daný řetězec filtrů nejprve změní měřítko na šířku
nejvýše 320 pixelů, detekuje změny scén a zamrzlé intervaly a poté vzorkuje
frekvencí 1 snímek za sekundu za účelem zjištění rozmazání, průměrné lumy
a prostorových/časových informací. Průchod je omezen na 600 strukturálních
vzorků, jedno vlákno FFmpeg/filtru, stejné seznamy povoleného protokolu pouze
`file` a kontejnerů, limit výstupu procesu 1 MiB a nejvýše 30 sekund v rámci
sdíleného přerušení/termínu brokera. Nikdy nepřijímá příkaz, filtr, cestu ani URL
z požadavku.

Strukturální hodnoty představují deterministické důkazy ze vzorkování, nikoli
sémantické porozumění videu. Neodvozují objekty, děje, titulky, řeč ani záměr
uživatele. Hranice scén a zamrznutí vytvářejí segmenty; pokrytí zamrznutí,
rozmazání, expozice, prostorové detaily a časové změny ovlivňují pouze způsob,
jakým je přidělen stávající rozpočet 1–16 snímků. Zcela zamrzlý segment je omezen
na jeden snímek, zatímco nezamrzlé segmenty soutěží o zbývající rozpočet. Když
je hranic více než snímků, zachová se rovnoměrné pokrytí časové osy, aby rychlé
střihy na začátku nemohly skrýt dlouhý koncový segment. Hranice scén v rámci
1sekundového rozlišení analýzy od hranice zamrznutí se slučují.

Chybějící filtry, chybně formátované/prázdné důkazy, chyba detektoru nebo
vypršení časového limitu omezené předběžné analýzy vedou k bezpečnému přechodu
na přesnou zásadu rovnoměrných středových bodů. Přerušení volajícím nebo termín
brokera k takovému přechodu nevede: ukončí probíhající podproces, zabrání
pozdější extrakci snímků a soukromý dočasný strom se odstraní v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické skutečné
testovací vstupy FFmpeg pro úsporu volání generování titulků po deduplikaci,
přidělování rozpočtu při intenzivním pohybu, důkazy o rozmazání/expozici/SI-TI,
rychlé střihy s dlouhým závěrem a falešně pozitivní výsledky u pozvolného
prolínání. Zaznamenává skutečnou dobu předběžné analýzy a tam, kde je k dispozici
`/usr/bin/time`, také čas CPU podřízeného procesu a špičkovou hodnotu RSS.
Jeho kontroly kvality jsou pouze strukturálními referenčními kritérii. Kvalita
skutečného modelu pro generování titulků zůstává ve stavu `HOLD`, protože tento
testovací nástroj nemá autorizovaný koncový bod ani zmrazený hodnoticí systém.
Peněžní úspory rovněž zůstávají ve stavu `HOLD`, pokud
`--caption-cost-per-call-usd` neposkytne explicitní kladný odhad nákladů na
jedno volání; skript žádný z těchto výsledků nikdy nevymýšlí.

Každý snímek je omezen na 4 MiB, všechny nezpracované snímky dohromady na 23 MiB
a serializovaná odpověď brokera na 32 MiB. Soukromý dočasný adresář se odstraní
v `finally`. OmniRoute neobsahuje FFmpeg a nepřijímá vlastní cestu ke
spustitelnému souboru. Před generováním titulků použije můstek konzervativní
průchod vizuální deduplikace: každý JPEG se zmenší na 16×16stupňový buffer
odstínů šedi a porovná se pouze s posledním zachovaným snímkem. Pro požadovaný
rozpočet titulků vyšší než jeden snímek poskytne extrakce omezený fond kandidátů
až do dvojnásobku tohoto rozpočtu, nikdy však více než 16 snímků. Požadovaný
limit se použije až po deduplikaci, přičemž se při závěrečném ztenčování
zachovají první a poslední vybraný kandidát, pokud je rozpočet alespoň dva.
Verzovaná zásada `grayscale-16x16-mean-cells-v2` používá větší z hodnot průměrné
změny lumy a podílu buněk miniatury, jejichž normalizovaná změna činí alespoň
0.05. Prahová hodnota duplicity je konstanta 0.04, zvolená kvůli
předvídatelnosti, nikoli zpřístupněná jako nastavení za běhu. Tento sekundární
vysoce kontrastní signál zachovává drobný pohyb a změny viditelného textu, které
může porovnání založené pouze na průměru skrýt. Chyby porovnávače nebo dekodéru
vedou k zachování pokrytí. Výstupní metadata rozlišují extrahované kandidáty,
úspěšně použité snímky a odstraněné vizuální duplicity.

Explicitně označená část videa může požadovat kontaktní náhled s časovými
značkami. Můstek vytvoří mřížku JPEG s nejvýše 4 sloupci a 16 snímky. Každá
512pixelová buňka vypálí časovou značku svého zdroje do vysoce kontrastního
spodního pruhu, zatímco stejné časové značky zůstanou v textových metadatech pro
následné přiřazení a audit. Úplný soubor JPEG zůstává omezen na 32 MiB. Pokud
`sharp` nedokáže mřížku dekódovat nebo složit, můstek se vrátí k jednotlivým
snímkům JPEG; přerušení klientem se i nadále přenese do operace s kontaktním
náhledem.

Důkazy pro povýšení jsou záměrně odděleny od syntetického mikrovýkonnostního
testu skládání. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje
A/B testovací nástroj s verzovaným schématem pro skutečné modely počítačového
vidění kompatibilní s OpenAI. Měří tokeny vykázané poskytovatelem, celkovou dobu
odezvy (včetně skládání kontaktního náhledu), počet volání modelu a zachování
faktů definovaných manifestem. Nezpracované odpovědi modelu se do sestavy
nezapisují; uchovávají se pouze otisky SHA-256 a ID odpovídajících faktů.
Testovací nástroj neprovede žádné síťové ani placené volání modelu, pokud není
předán parametr `--execute-real` a nejsou nakonfigurovány `--model`,
`OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY`. Bez takového explicitního skutečného
spuštění zůstává jeho strojově čitelný verdikt ve stavu `HOLD`; samotná
syntetická měření velikosti dat/počtu volání nejsou důkazem pro povýšení.

Volající mohou k podporované části videa připojit volitelné pole
`transcript.cues`, pokud již mají k dispozici časově zarovnaný text. Každá
časová značka musí obsahovat `text`, konečný interval `start`/`end` v rámci
zjištěné délky a povolenou hodnotu `source` (`client`, `embedded` nebo
`audio-bridge`); `confidence` má výchozí hodnotu `1` a musí zůstat mezi `0`
a `1`. Přesně duplicitní časové značky se sloučí. OmniRoute z těchto metadat
nikdy nespouští přepis: ověřené časové značky se zkopírují do popsaného výsledku
se zdrojem, mírou jistoty a intervalem a vykreslí se jako nedůvěryhodná
pozorování vedle titulků snímků. Neplatný text, text mimo rozsah nebo text bez
údaje o původu je odmítnut, namísto aby byl přimíchán do proudu titulků. Oba
kanály přepisu v těle požadavku normalizují dodaný původ na `client`, včetně
samostatně deklarovaných označení `embedded` nebo `audio-bridge`. Pouze adaptér
vlastněný serverem může tato důvěryhodná označení přiřadit prostřednictvím
argumentu `trustedSource`, který je dostupný pouze z kódu; pole JSON v požadavku
se k tomuto argumentu nemůže dostat. Text přepisu zůstává nedůvěryhodným obsahem
odvozeným z média bez ohledu na svůj původ a nikdy nesmí určovat autorizaci.

Pokročilý volající může pro stejné video poskytnout stopu `audioTranscript`;
ta je považována za text poskytnutý klientem, nikoli za důkaz přepisu na serveru.
Vrstva slučování zpracovává vizuální a zvuková pozorování v rámci
jedné lhůty a jednoho signálu přerušení, řadí je na společnou časovou osu, slučuje
zcela shodné duplicity a vrací částečný výsledek, pokud uspěje pouze jedna větev.
Neplatný `audioTranscript` vede k tomuto částečnému výsledku — vizuální
popis je zachován a zvuková větev zaznamená sanitizovaný kód selhání —
namísto selhání celého videa. Dostupnost jednotlivých větví, příznak částečného výsledku
a sanitizované kódy selhání jsou zachovány v popsaném výsledku, v metadatech
ochranných mechanismů (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metadatech mezipaměti výsledků a v čítačích
slučování přemostění. Výchozí cesta Video Bridge nevyvolává převod řeči na text
ani nestahuje druhou kopii média; bez této explicitní stopy zůstává
omezena pouze na video.

**Uchovávání přepisů (#12150 P1).** Toto se použije automaticky pokaždé, když
Video Bridge (který je sám volitelný) vykreslí položku přepisu — neexistuje žádný samostatný
příznak uchovávání. Když požadavek vykreslí libovolnou položku přepisu (volajícím deklarovaný
`transcript` nebo sloučený `audioTranscript`), ochranný mechanismus jej označí jako
`videoBridgeObserved` a vytvoří redigovanou stínovou kopii popisu videa —
identické vykreslení, v němž je volný text každé položky nahrazen řetězcem
`[redacted-video-transcript]`, sestavené nahrazením strukturovaného pole položky
před sestavením řetězce (nikdy analýzou sloučeného textu, takže žádný obsah položky
— škodlivý ani běžný, včetně těl obsahujících `]`, jako jsou
`[inaudible]`/`[music]` — nemůže zůstat zachován). Tělo požadavku v trvale uloženém protokolu volání zamění
každou textovou část odvozenou z videa za tuto redigovanou stínovou kopii, spárovanou podle shody
obsahu; ukotvení `fullText` je znovu načteno z dokončené datové části ochranného mechanismu před voláním,
takže párování stále uspěje i poté, co pozdější ochranné mechanismy v řetězci (maskovací mechanismy PII a
přihlašovacích údajů s prioritami 10/95) přepíšou text popisu na místě, a také
poté, co vložení systémové výzvy, předání a paměti změní strukturu pole zpráv. Tělo
odeslané modelu zůstává beze změny. Pozorovaný požadavek také neplní
žádnou trvalou Memory (extrakce odvozená z požadavku i odpovědi se přeskočí),
takže ani vlastní odpověď modelu nemůže zopakovat text přepisu do Memory.

**Nezpracovaná pole videa (#12430).** Když je přemostění povoleno a nativní podpora videa je neznámá nebo chybí, definovaná pole `transcript`/`audioTranscript` také aktivují `videoBridgeObserved`, a to i po selhání popisu nebo po dosažení limitu `maxVideos`. `null` a prázdné řetězce se započítávají; chybějící pole a metadata nesouvisející s videem nikoli. Uchovávané kopie tato pole redigují nebo požadavek vynechají a mezipaměti/Memory jsou obejity.

Na těchto záložních cestách se platné položky od volajícího stanou podporovanými částmi `text`/`input_text`
namísto nestandardních polí poskytovatele. Obě stopy dodané v požadavku
zůstávají nedůvěryhodnými pozorováními typu `client` s explicitním upozorněním, že video
nebylo popsáno a časová razítka nebyla ověřena vůči médiu. Stávající
limity 256 položek/64 KiB celkem a limity na jednotlivé položky se uplatňují na obě stopy dohromady;
časová razítka se musí vejít do 600sekundového stropu brokera a případně zadaného
okna zaměření. Neplatné stopy se zahodí a nepředávají se jako libovolný text; platná
souběžná stopa může být přesto použita, pokud není překročen jejich společný limit. Prázdná pole nebo pole s hodnotou `null`
nepřidávají žádný text. Tato záložní cesta nepřidává žádné načítání média ani přepis.
Rozšiřující pole přepisu jsou odstraněna ze záložního nosiče videa a jeho
objektů `video_url`/`source`. Seznam povolených položek přenosového formátu OpenAI zůstává striktní; nosiče videa
s neznámou nativní podporou zůstávají dostupné a známé cíle podporující pouze text si zachovávají bezpečné značky.
Strukturované redigované stínové kopie chrání připojený text přepisu, zatímco
původní požadavek vlastněný volajícím zůstává beze změny. Cíle s nativní podporou a
zakázaná přemostění si zachovávají své stávající chování při obcházení.

Další uchovávané kopie používají stejný signál pozorovaného požadavku. Nezpracovaný
snímek klientského požadavku před ochrannými mechanismy, čekající požadavek v paměti a protokol předčasně
zamítnutého požadavku strukturálně nahrazují pole přepisu v částech videa;
řetězcové výzvy syntetizované fázemi zpracování a předáním kontextu jsou redigovány
v cíli trvalého ukládání těla požadavku. Trvale uložená značka `video_content_removed`
způsobí, že pokračování pomocí `previous_response_id` je bezpečně zamítnuto namísto rekonstrukce
textu, který byl záměrně odstraněn. Pokud pozorovaný požadavek před zápisem do protokolu ztratí svou
redigovanou stínovou kopii pro danou část nebo pokud po pozdějších změnách požadavku selže spárování
byť jen jedné z několika stínových kopií videa, uchovávané tělo požadavku se
zcela vynechá, aby nebyl uchován pouze částečně redigovaný přepis.

U pozorovaného požadavku může odpověď modelu citovat libovolnou část
přepisu bez strukturované hranice položky. Její trvale uložené pole protokolu volání
`responseBody` je proto nahrazeno značkou vynechání; podrobný
artefakt zpracování (který může obsahovat těla upstreamu/klienta a části streamu)
se neuchovává. Mezipaměti sémantiky, idempotence a opakovaného přehrání uvažování
pro daný požadavek obcházejí čtení i zápis. Požadavek poskytovateli a odpověď
viditelná klientovi zůstávají beze změny. Počáteční bajty keepalive jsou z dočasné
vyrovnávací paměti vyprázdněny, když je podrobný artefakt vynechán. Upozornění Kiro na poškozený EventStream
uvádí pouze počet bajtů datové části, nikdy její obsah ani nezpracovanou chybu
parseru JSON.
Tím se netvrdí, že byly auditovány všechny nesouvisející diagnostické výstupy poskytovatelů/pluginů;
širší kontrola cílů uchovávání je sledována v #11658.

Interní životní cyklus `/api/modality-bridge/video/drilldown` představuje samostatnou,
zpětnou smyčkou/tokenem ověřovanou vrstvu mezipaměti. Každá operace také vyžaduje
kanonické neprůhledné ID principála. Než je produkční volající aktivován, musí
toto ID odvodit z ověřeného tenanta a nikdy nesmí předat hodnotu zvolenou
klientem. Klíče mezipaměti vážou tohoto principála na kanonická ID relace a
reference videa, ukládají pouze jejich klíče odvozené pomocí SHA-256 a omezují čtení
i odstranění na stejného principála. Mezipaměť ukládá nejvýše 16 odvozených snímků
JPEG na položku, po deseti minutách ukončuje jejich platnost a podporuje omezená
čtení `start`/`end` nebo explicitní odstranění relace.

Každý principál je omezen na 16 položek a 64 MiB kanonických dat JPEG. Tyto
limity jsou nezávislé na globálním stropu 64 položek/256 MiB: tlak na kvótu
principála nejprve odstraní pouze nejméně nedávno používané položky daného
principála a teprve poté se zvažuje globální odstranění podle LRU. Položky s
ukončenou platností jsou při aktivitě mezipaměti odstraněny z účtování principála
i globálního účtování, zatímco zrušení a selhání validace neuloží částečnou náhradu.

Mezipaměť odmítá nekanonické Base64, nadbytečné doplnění, média jiná než JPEG,
poškozené nebo zkrácené soubory JPEG a soubory JPEG, které během omezeného dekódování
celého obrazu pomocí `sharp` vyvolají varování. Každý přijatý obrázek znovu zakóduje
jako kanonický JPEG, odvodí šířku a výšku z dekódovaných bajtů namísto důvěřování
polím volajícího a zahodí veškeré koncové polyglotní bajty, místo aby je zachovala.
Do obou kvót se započítává pouze omezený kanonický komprimovaný buffer. Limit přenosu
JSON zahrnuje režii Base64 pro limit dekódovaného vstupu 32 MiB. Každé
uložené odvození zaznamenává svůj ověřený formát/rozlišení JPEG, zásady vzorkování,
verzi odvození, čas vytvoření, serverem vypočítaný hash obsahu a hashovanou nadřazenou
referenci společně s hashem nadřazeného obsahu od důvěryhodného volajícího. Zrušení se
kontroluje mezi asynchronními fázemi dekódování/hashování před atomickým uložením do
mezipaměti.

Tato etapa zatím nepřipojuje produkčního producenta k trase a neposkytuje
výběr variant s více rozlišeními. Transparentní cesta požadavku Video Bridge proto
nepřidává žádnou práci, zatímco odvození principála vázané na tenanta a celý životní
cyklus FU-08 pro více rozlišení zůstávají explicitně navazující prací, nikoli
zdokumentovaným dokončeným chováním.

Snímky jsou postupně opatřovány popisky pomocí nakonfigurovaného modelu Video. Prázdné
přepsání Video zdědí nastavení Vision; pokud jsou obě prázdná, automatický směrovač
Vision vybere efektivní model podporující obrazové vstupy. Úspěšné popisky nahradí
původní část stabilní předponou `[Video description:`, která text také označí jako
nedůvěryhodné pozorování odvozené z média a instruuje navazující modely, aby
neprováděly pokyny nalezené v médiu. Klíče mezipaměti popisků snímků zahrnují bajty
JPEG, výzvu, časové razítko a efektivní model; do mezipaměti se ukládají pouze úspěšné
popisky. Položky mezipaměti uchovávají skutečný úspěšný produkční model, včetně
záložního modelu; pokud různé snímky vytvořily různé modely, bridge hlásí `mixed`.
Zásah do mezipaměti znovu použije tuto identitu producenta, místo aby ji přeznačil
jako požadovaný plán směrování. Mezipaměť výsledků celého videa je klíčována podle
každého vstupu, který mění výstup — výzvy, efektivního modelu, zásad vzorkování,
počtu snímků, režimu sémantické analýzy, otisku SHA-256 normalizovaného vodítka
zaměření, okna zaměření, `transcript`, `audioTranscript` a příznaku kontaktního
listu — takže změna kteréhokoli z těchto rozměrů znamená nezasažení mezipaměti,
nikoli opětovné použití zastaralého výsledku. Verze zásad vizuální deduplikace,
prahová hodnota a omezený počet kandidátních snímků jsou také explicitně uvedeny
v klíči a metadatech mezipaměti výsledků; změna zásad proto nemůže znovu použít
zastaralý popis celého videa. Metadata mezipaměti výsledků v4 uchovávají režim a
otisk, nikdy nezpracovanou uživatelskou úlohu. Metadata ochranných mechanismů uvádějí
požadovaný i efektivní režim analýzy; požadovaný režim `focused` bez použitelného
uživatelského textu je vykázán jako efektivně `full`.

Ochranný mechanismus extrahuje každou podporovanou část videa, ale popíše nejvýše
`modalityBridgeVideoMaxVideos`. U cíle, u něhož je prokázáno
`supportsVideo === false`, se neúspěšná videa a videa překračující limit změní na
explicitní bezpečné textové značky, takže žádné nezpracované video nezůstane.
Pokud je schopnost neznámá, tyto části si zachovají svůj nosič videa; případný
záložní přepis se řídí výše uvedeným omezeným převodem textu. Cíle s
`supportsVideo === true` bridge obcházejí. Signál přerušení požadavku klienta se
šíří přes stahování, frontu brokeru, podprocesy a volání pro tvorbu popisků;
přerušení se zastaví mezi videi a nikdy při selhání nepovolí průchod nezpracovaného
média.

Běhová nastavení jsou uložena v DB a validována pomocí Zod:

| Klíč                                | Výchozí hodnota | Rozsah / chování                                                                                         |
| ----------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`         | Volitelný běhový modul, aktivuje se explicitně                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` zachovává obecné popisky; `focused` používá omezený, nedůvěryhodný kontext posledního uživatele   |
| `modalityBridgeVideoModel`          | `""`            | Převezme model Vision Bridge                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware` nebo proporcionální `segment_aware`; při selhání detektoru se použije `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                           |

Starší uložené hodnoty časového limitu videa vyšší než 120 sekund se omezí na
termín zprostředkovatele; nové zápisy nastavení překračující tento limit jsou odmítnuty.
`GET /api/modality-bridge/video/runtime` před ověřením nebo kontrolou běhového
prostředí vyžaduje důvěryhodnou, označenou lokálnost zpětné smyčky a následně
vyžaduje oprávnění ke správě. Vrací pouze `available`, očištěné verze FFmpeg/ffprobe
a pevně daný důvod, pokud běhové prostředí není dostupné. Interní koncový bod pro
extrakci není veřejným API pro nahrávání: při naplnění fronty vrací `503` spolu
s `Retry-After`, při odpojení volajícího vrací `499` a při dosažení pevně daného
termínu zprostředkovatele vrací `504`. Převedené odpovědi přidávají
`video->text;model=<visionModel>;parts=<videos>` do centrální hlavičky
`x-omniroute-modality-bridge`, aniž by odebraly segmenty Vision nebo Audio.

### Maskování PII (`piiMasker.ts`)

Spouští se v **obou** fázích.

- **`preCall`** naklonuje datovou část, projde `system`, `messages`, `input` a
  `prompt` (včetně položek tvořených prostým řetězcem) a na řetězcová pole
  `content`/`text` aplikuje `processPII()` (z
  `@/shared/utils/inputSanitizer`). Když je
  `PII_REDACTION_ENABLED=true`, zjištěné PII se v odchozí datové části
  začerní. Toto chování je nezávislé na `INPUT_SANITIZER_MODE` (který řídí
  pouze zásady pro vkládání instrukcí do promptu). Když je začerňování vypnuto,
  volání zaznamená počty detekcí, aniž by přepisovalo obsah.
- **`postCall`** vytvoří hloubkovou kopii odpovědi a spustí
  `sanitizePIIResponse()` spolu s maskováním struktury Responses API
  (`maskResponsesOutput` — pokrývá `output_text` a
  `output[].content[].text`). Pokud dojde k jakémukoli začernění, upravená
  odpověď nahradí původní odpověď.

Ochranné pravidlo nikdy neblokuje; pouze přidává anotace (`meta.detections`,
`meta.redacted`) nebo přepisuje obsah.

### Vkládání instrukcí do promptu (`promptInjection.ts`)

Detekuje nepřátelské struktury v obsahu poskytnutém uživatelem a vynucuje
nakonfigurované zásady. Chování se řídí proměnnými prostředí a volbami
konstruktoru:

| Nastavení      | Proměnná prostředí                                                                                   | Výchozí hodnota | Účinek                                                                                                                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Povoleno       | `INPUT_SANITIZER_ENABLED`                                                                            | `true`          | Při hodnotě `false` se ochranné pravidlo ukončí předčasně.                                                                                                                                                           |
| Režim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`          | Zásada pro vkládání instrukcí: `block`, `warn` nebo `log`. (`redact` je podporováno kvůli zpětné kompatibilitě, ale text vložených instrukcí **neodstraňuje**; přepis PII v požadavku řídí `PII_REDACTION_ENABLED`.) |
| Práh blokování | volba `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`          | Minimální závažnost potřebná k zablokování. Při výchozím nastavení se střední závažnost pouze sleduje.                                                                                                               |

**Priorita režimů** (`getMode`): `options.mode` volajícího →
**přepsání příznakem funkce v DB** pro `INJECTION_GUARD_MODE` (Řídicí panel →
Nastavení → Příznaky funkcí) → proměnná prostředí `INJECTION_GUARD_MODE` →
proměnná prostředí `INPUT_SANITIZER_MODE` → `warn`. Přepsání z řídicího panelu
má proto přednost před proměnnými prostředí, takže uživatelské rozhraní Příznaky
funkcí řídí spuštěné ochranné pravidlo živě (bez restartu). Čtení z DB je
odolné vůči selhání: pokud skončí chybou, ochranné pravidlo se vrátí k chování
založenému na proměnných prostředí, a pokud není nastaveno žádné přepsání, je
chování shodné s vyhodnocením založeným pouze na proměnných prostředí.

Zdroje detekce:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (sdílená sada
   detektorů používaná i na jiných místech zpracovatelského řetězce).
2. Vestavěné `DEFAULT_GUARD_PATTERNS` (aktuálně `system_override_inline` a
   `markdown_system_block`, obě se závažností `high`).
3. Volitelné `customPatterns` předané prostřednictvím voleb konstruktoru
   (řetězce, regulární výrazy nebo záznamy `{ name, pattern, severity }`).

Když `mode === "block"` **a zároveň** alespoň jedna detekce splňuje prahovou
hodnotu závažnosti, `preCall` vrátí `{ block: true, message: "Request rejected:
suspicious content detected" }`. V režimech `warn`/`log` ochranný mechanismus
událost zaznamená, ale volání povolí. Sdílená pomocná funkce
`evaluatePromptInjection()` je rovněž exportována pro volající, kteří potřebují
vyhodnocovat prompty bez použití registru.

**Limit skenování (v3.8.20):** detektor kontroluje pouze **prvních 16 KB**
spojeného textu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtů)
v `src/shared/utils/inputSanitizer.ts`. Funkce `detectInjection()` i
`evaluatePromptInjection()` před spuštěním smyčky vzorů používají
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Direktivy pro injekci se nacházejí poblíž
začátku vstupu, takže toto omezení snižuje zatížení CPU a GC regulárními výrazy
u payloadů o velikosti stovek KB, aniž by oslabovalo detekci (viz #3932, #4041).

### Maskování přihlašovacích údajů (`credentialMasker.ts`)

Spouští se v **obou** fázích, jako poslední ve výchozím řetězci (priorita `95`).
Rediguje známé vzory API klíčů / tajných tokenů z odchozího payloadu (obsahu
zpráv, argumentů volání nástrojů, výsledků nástrojů) **i** z odpovědi
poskytovatele, aby přihlašovací údaj vložený do promptu (nebo zopakovaný ve
výsledku nástroje) neunikl externímu poskytovateli ani zpět klientovi.

- **Pouze po výslovném povolení**, podle stejné konvence jako redakce PII
  (související s Pevným pravidlem č. 20): je zakázáno, pokud
  `settings.credentialRedactionEnabled === true` **nebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Když je vypnuté, ochranný mechanismus
  neprovádí žádnou akci — nikdy neblokuje ani nepřepisuje.
- `redactCredentials()` prochází celý strom payloadu/odpovědi (`walkValue()`,
  bezpečně vůči zneužití prototype pollution a cyklům díky `WeakSet`) a nahrazuje
  shody zástupným symbolem `[REDACTED:<type>]`, přičemž klonuje pouze větve,
  které se skutečně změnily.
- `CREDENTIAL_PATTERNS` pokrývá klíče poskytovatelů LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platební klíče (Stripe, Square),
  cloudové klíče (přístupový klíč AWS, Twilio, SendGrid, Mailgun), soukromé klíče
  / JWT, připojovací řetězce obsahující přihlašovací údaje
  (`mongodb://user:pass@...` atd.) a obecný vzor hodnot hlaviček
  `Authorization`/`x-api-key`/`api-key`/`apikey`. Klíče ve formátu hlaviček
  (`authorization`, `x-api-key`, `api-key`, `apikey`) jsou redigovány
  strukturálně (pouze hodnota; prefix schématu, jako je `Bearer `/`Basic `, je
  zachován), nikoli pomocí obecného regulárního výrazu pro text.
- Ochranný mechanismus nikdy neblokuje; pouze přepisuje (`modifiedPayload` /
  `modifiedResponse`) a přidává anotace (`meta.credentialsRedacted`,
  `meta.count`).

Ochrana proti regresím: `tests/unit/credential-masker-guardrail.test.ts`.

## Základní kontrakt (`base.ts`)

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
  block?: boolean; // true zkrátí vyhodnocování řetězce
  message?: string; // zobrazí se při zablokování
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vráceno metodou preCall pro přepsání požadavku
  modifiedResponse?: TValue; // vráceno metodou postCall pro přepsání odpovědi
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

Ochranné pravidlo signalizuje „žádnou změnu“ vrácením hodnoty `void`, `{}` nebo
`{ block: false }`. Vrácení `modifiedPayload`/`modifiedResponse` nahradí
hodnotu procházející řetězcem pro následná ochranná pravidla.
`signal?: AbortSignal` přenáší životní cyklus volajícího do ochranných pravidel. Přerušení požadavku je záměrnou výjimkou z režimu fail-open: mediální převodníky ukončí práci a provedou úklid, aniž by obnovily nezpracovaná média pro cíl, o kterém je známo, že je nepodporuje.

## Registr (`registry.ts`)

Singleton `guardrailRegistry` poskytuje:

- `register(guardrail)` — přidá ochranné pravidlo (nebo je nahradí podle normalizovaného názvu) a
  znovu seřadí pravidla vzestupně podle `priority`.
- `clear()` / `list()` — pomocné administrativní funkce.
- `runPreCallHooks(payload, context)` — prochází aktivní ochranná pravidla, předává
  payload prostřednictvím `modifiedPayload` a zastaví se při prvním `block: true`.
- `runPostCallHooks(response, context)` — stejný postup na straně odpovědi.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a volitelně
  znovu zaregistruje výchozí pravidla pro čistou izolaci testů.

Oba spouštěče vracejí `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamů `GuardrailExecutionResult`, které obsahují
pro jednotlivá ochranná pravidla pole `blocked`, `skipped`, `modified`, `error` a `meta`,
užitečná pro trasování.

### Zakázání ochranných pravidel pro jednotlivé požadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` shromažďuje
deduplikovaný seznam názvů ochranných pravidel, která mají být pro aktuální
požadavek přeskočena. Zdroje (všechny jsou volitelné a všechny se slučují):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v těle požadavku (na nejvyšší úrovni)
- `metadata.disabledGuardrails` v těle požadavku
- Hlavička `x-omniroute-disabled-guardrails` (nebo starší
  `x-disabled-guardrails`)

Hodnoty mohou být pole řetězců nebo řetězec oddělený čárkami; názvy jsou
normalizovány na malá písmena ve formátu kebab-case (`pii_masker` → `pii-masker`). Výsledek
je předán registru prostřednictvím `context.disabledGuardrails`, který přeskočí
odpovídající ochranná pravidla (`skipped: true` v `results`).

## Pořadí zpracování

Pro každý požadavek procházející přes `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sestaví seznam vynechaných ochranných mechanismů z klíče API, těla požadavku
   a hlaviček.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné mechanismy ve vzestupném
   pořadí priorit:
   - Zakázané ochranné mechanismy se zaznamenají jako `skipped`.
   - Metoda `preCall` každého ochranného mechanismu může přepsat datovou část pomocí `modifiedPayload`.
   - První výskyt `block: true` okamžitě ukončí řetězec a obslužná rutina vrátí
     odpověď o zamítnutí ochranným mechanismem.
3. (Případně přepsaná) datová část pokračuje do kombinovaného směrování a odeslání
   nadřazené službě.
4. Po sestavení odpovědi spustí `guardrailRegistry.runPostCallHooks(...)`
   stejný řetězec nad odpovědí. Hodnota `block: true` v této fázi zahodí odpověď
   nadřazené služby.

Ochranné mechanismy, které vyvolají výjimku, se zaznamenají s `error: <message>` a zaprotokolují prostřednictvím
`logger.warn`, ale řetězec pokračuje — záměrně tedy funguje v režimu fail-open.

## Konfigurace

Proměnné prostředí načítané vestavěnými ochrannými mechanismy:

| Proměnná                              | Používá ji                | Účinek                                                                                                        |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Nastavením na `false` se detekce zcela zakáže.                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Zásady pro injekce: `warn`, `block` nebo `log`. Zastaralá hodnota `redact` text injekce nepřepisuje.          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Režim ochrany proti injekcím; zároveň příznak funkce v DB, který **přepisuje** proměnné prostředí (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimální závažnost, kterou `MODE=block` odmítne: `high` (výchozí), `medium` nebo `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Zastaralý alias pro `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Je-li nastaveno na `true`, údaje PII v požadavku se začerní (nezávisle na režimu injekcí).                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (na výstupu) | Řídí chování maskování na straně odpovědi.                                                                    |

Ochranné mechanismy Modality Bridge načítají běhovou konfiguraci z úložiště nastavení
založeného na DB (`getSettings()`), nikoli z proměnných prostředí. Primární klíče pro obraz jsou
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Zastaralé klíče
`visionBridge*` jsou přijímány pouze jako zdokumentovaný záložní zdroj pro čtení během jednoho cyklu;
zápisy z řídicího panelu používají primární klíče. Výchozí hodnoty a záložní
resolver se nacházejí v `src/shared/constants/modalityBridgeDefaults.ts`, přičemž zastaralé
konstanty zůstávají zachovány v `src/shared/constants/visionBridgeDefaults.ts`.

Zvuk používá `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` společně se sdílenými
nastaveními `modalityBridgeCache*`. Zvuk nemá záložní podporu zastaralých klíčů, protože tyto
klíče byly zavedeny se schématem Modality Bridge.

Video používá `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` společně se sdílenými nastaveními `modalityBridgeCache*`.
Ve výchozím nastavení je zakázáno, protože FFmpeg/ffprobe jsou volitelné provozní
závislosti a popisování snímků zvyšuje latenci a náklady na model.

## Vlastní guardraily

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

Postup:

1. Vytvořte `src/lib/guardrails/myGuardrail.ts`, který rozšiřuje `BaseGuardrail`.
2. Implementujte `preCall` a/nebo `postCall`.
3. Buď jej zaregistrujte při importu (přidáním z `registerDefaultGuardrails`), nebo
   za běhu zavolejte `guardrailRegistry.register(...)` — registr nahradí
   jakýkoli dřívější guardrail se stejným normalizovaným názvem.
4. Přidejte testy do `tests/unit/` (existující příklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testování

Mezi testy použijte `resetGuardrailsForTests()`, abyste vždy začínali ze známého stavu.
Předejte `{ registerDefaults: false }`, chcete-li začít s prázdným registrem a
zaregistrovat pouze testované guardraily. Vision Bridge podporuje vkládání závislostí
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge zpřístupňuje ekvivalentní
rozhraní pro nastavení, schopnosti, výběr modelu STT, kontrolu přihlašovacích údajů
a přepis. Testy tak mohou ověřovat oba toky bez přístupu k databázi nebo síti.

## Viz také

- `src/lib/guardrails/` — implementace
- `src/shared/utils/inputSanitizer.ts` — sdílený detektor zajišťující
  detekci prompt injection a maskování PII
- `src/shared/constants/visionBridgeDefaults.ts` — výchozí hodnoty Vision Bridge a
  seznam modelů s vynuceným přemostěním
- `src/shared/constants/modalityBridgeDefaults.ts` — sdílené výchozí hodnoty běhového prostředí Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonální vrstva (circuit breaker, intervaly zklidnění)
- `docs/reference/ENVIRONMENT.md` — úplný přehled proměnných prostředí

## Pokrytí tras ochranou proti injection a red-team testování (Fáze 8 · Blok D)

Ochrana proti injection (`createInjectionGuard` / `withInjectionGuard`) pokrývá všechny trasy,
které přijímají uživatelské prompty. Respektuje `INJECTION_GUARD_MODE` (výchozí `warn` = pouze protokolování;
`block` = vrátí HTTP 400 `SECURITY_001`).

| Typ              | Trasy                                                                                                                                                | Výchozí režim |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (stávající) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativní      | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Extrakce textu (`extractMessageContents`) pokrývá `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testování (každou noc, `nightly-llm-security.yml`):** promptfoo ověřuje, že každá trasa blokuje
korpus OWASP-LLM v režimu `INJECTION_GUARD_MODE=block`; garak spouští sondy (bez tajného klíče se přeskočí).
`moderations` je zahrnuto kvůli konzistenci — provozovatelé jej mohou v režimu blokování vyjmout pomocí
`resolveDisabledGuardrails`.

Noční pracovní postup (`.github/workflows/nightly-llm-security.yml`, cron + ruční
spuštění) obsahuje dvě úlohy:

- **`promptfoo-guard` (blokující)** — spouští `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý nepřátelský případ (např. „ignoruj všechny
  předchozí instrukce…“, jailbreaky ve stylu DAN) ověřuje, že odpověď obsahuje
  `error.code === "SECURITY_001"`, tj. že ochrana požadavek skutečně odmítla.
- **`garak` (informativní)** — spouští garak `--probes promptinject,dan,leakreplay`
  proti lokální instanci OmniRoute (`http://localhost:20128/v1`). Je podmíněna
  tajným klíčem poskytovatele (`PROMPTFOO_PROVIDER_KEY`); pokud není k dispozici, korektně se přeskočí a je doplněna
  o `|| true`, takže podá hlášení, aniž by způsobila selhání CI.

Pokrytí pomocné funkce ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahrnuje každou trasu `/v1` přijímající prompt; text promptu se získává z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocí
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
