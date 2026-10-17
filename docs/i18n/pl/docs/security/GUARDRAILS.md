# Guardrails (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Źródło prawdy:** `src/lib/guardrails/`
> **Ostatnia aktualizacja:** 2026-08-29 — v3.8.51 (Pochodzenie transkrypcji Video Bridge jest deklarowane przez dzwoniącego,
> jeszcze nie zweryfikowane przez serwer — wyjaśniono zgodnie z #11661)

Guardrails wymuszają bezpieczeństwo, politykę i transformacje treści na granicy
między OmniRoute a dostawcami upstream. Każdy guardrail może kontrolować (i
opcjonalnie odrzucać, przekształcać lub dodawać adnotacje) ładunki żądań (`preCall`)
oraz odpowiedzi upstream (`postCall`).

System działa w trybie **fail-open**: jeśli guardrail zgłosi błąd podczas wykonywania,
rejestr zapisuje błąd i kontynuuje pracę z następnym guardrailem, zamiast przerywać
żądanie. Blokowanie jest jawną decyzją (`block: true`), nigdy przypadkiem.

## Wbudowane mechanizmy ochronne

Podczas importu rejestr automatycznie ładuje sześć mechanizmów ochronnych w kolejności priorytetów
(zobacz `registry.ts` → `registerDefaultGuardrails()`):

| Priorytet | Nazwa               | Etap(y)        | Plik                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niższe wartości priorytetu są wykonywane **jako pierwsze**.

### Most wizyjny (`visionBridge.ts`) — most modalności PR-1

Przechwytuje żądania zawierające obrazy, które są kierowane do **modeli bez obsługi obrazu**, i albo przekierowuje całe żądanie do modelu obsługującego obrazy, albo przed wywołaniem usługi nadrzędnej zastępuje części zawierające obrazy opisami tekstowymi wygenerowanymi przez konfigurowalny model wizyjny. Dzięki temu dostawcy obsługujący wyłącznie tekst mogą w sposób przezroczysty przetwarzać ładunki multimodalne.

Przebieg:

1. Pomiń, jeśli model docelowy już obsługuje obrazy (chyba że znajduje się na liście modeli z wymuszonym użyciem mostu `isVisionBridgeForcedModel`).
2. Wyodrębnij części zawierające obrazy za pomocą `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), która deleguje działanie do **ujednoliconego detektora multimediów**
   `detectMediaParts()` w `open-sse/utils/mediaParts.ts` — pojedynczego źródła prawdy współdzielonego z filtrem zgodności combo.
   Wyodrębnianie jest ograniczone listą dozwolonych części najwyższego poziomu o strukturach,
   które `replaceImageParts` może wstawić z powrotem (kontrakt wyodrębnianie↔zastępowanie): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` oraz Responses API `input_image`. Zagnieżdżone trafienia i
   struktury zawierające wyłącznie wskaźniki są materiałem dla filtra combo i nigdy nie są wyodrębniane.
   Pomiń, jeśli niczego nie znaleziono.
3. Ustal konfigurację środowiska wykonawczego za pomocą `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nowe klucze ustawień `modalityBridge*`
   mają pierwszeństwo; starsze klucze `visionBridge*` pozostają **mechanizmem rezerwowym przez jeden cykl**
   (okno wycofania zmian). Jeśli most jest wyłączony, pomiń działanie przed rozpoczęciem przeglądania multimediów.
4. Selektor trybu (`modalityBridgeVisionMode`, zobacz tabelę poniżej) decyduje między
   przekierowaniem a opisem. Przekierowanie zwraca `modifiedPayload`, w którym zmieniono tylko `model`,
   wraz z metadanymi `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ścieżka opisu: ogranicz liczbę obrazów do `maxImages`, utwórz prompt uwzględniający zadanie,
   sprawdź pamięć podręczną opisów, wywołaj model wizyjny **równolegle**
   (`Promise.allSettled`) i wstaw w miejsce obrazów części tekstowe `[Image N]: <description>`.
   Nieudane utworzenie opisu zwraca `null`, a oryginalna część zawierająca obraz zostaje
   **zachowana** (#4012) — z wyjątkiem ścieżki opisu combo, gdy wszystkie
   próby utworzenia opisu zakończyły się niepowodzeniem; wówczas dla potwierdzonej usługi nadrzędnej bez obsługi obrazu wstawiany jest tekst zastępczy
   `(unavailable — no vision-capable provider connected)` (#8430).
6. Zwróć `modifiedPayload` wraz z metadanymi (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor trybu (`modalityBridgeVisionMode`)

| Tryb       | Domyślny | Zachowanie                                                                                                                                                                                                                                                                                                                                |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Dotychczasowa heurystyka, bez zmian (#6640/#7204): modele inne niż combo/`auto/` są przekierowywane do najlepszego modelu wizyjnego, chyba że pierwotny model ma już dostępne poświadczenia (wtedy tworzony jest opis); cele combo zawsze korzystają z opisu.                                                                             |
| `describe` |          | Zawsze twórz opis — blok przekierowania jest całkowicie pomijany; zawsze odpowiada model wybrany przez użytkownika.                                                                                                                                                                                                                       |
| `reroute`  |          | Wymuś przekierowanie: zabezpieczenie zachowujące model z poświadczeniami jest pomijane. Zabezpieczenie poświadczeń **celu** przekierowania nadal obowiązuje — gdy nie istnieje dostępny cel wizyjny, żądanie przechodzi do ścieżki opisu, aby nieprzetworzone obrazy nigdy nie trafiły do zaplecza obsługującego wyłącznie tekst (#8430). |

Wymuszone tryby kończą wybór **przed** uruchomieniem automatycznej heurystyki; zachowanie `auto`
jest identyczne bajt w bajt z mechanizmem ochronnym sprzed PR-1.

#### Zakres klucza API (`visionBridgeKeyScope.ts`)

Gdy klucz API wywołującego ogranicza `allowedConnections`, pule limitów
(`allowedQuotas`) lub modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most wybiera tylko
modele do przekierowania i opisu, których dany klucz może używać, w połączeniach, z których ten klucz może korzystać.
Wywołanie opisu zawsze przechodzi następnie przez pętlę zwrotną OmniRoute z nagłówkiem
`x-omniroute-self-loop-key-id`, dzięki czemu odbierające żądanie czatu ponownie egzekwuje
zasady dotyczące połączeń i modeli dla tego klucza. `enforceApiKeyPolicy()`
uwzględnia ten nagłówek wyłącznie w połączeniu z tokenem bearer pętli zwrotnej, dlatego może on jedynie
zawężać dostęp, a identyfikator, którego nie można rozpoznać, zostaje odrzucony.

Jeśli żaden model wizyjny nie jest dozwolony dla danego klucza, ścieżka opisu nie podejmuje działania,
a żądanie jest przekazywane bez zmian — zgodnie z tym samym zachowaniem fail-open co w przypadku wyłączonego
mechanizmu ochronnego (metadane `{ skipped: true, reason: "no_permitted_vision_model" }`).
Żądania bez klucza oraz klucze bez tych ograniczeń zachowują się dokładnie tak samo jak
wcześniej.

#### Prompt opisu uwzględniający zadanie (`modalityBridgeVisionTaskAware`)

Domyślnie **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dołącza
tekst **ostatniej wiadomości użytkownika** (skrócony do 500 znaków) do bazowego
promptu opisującego, ukierunkowując opis na to, o co użytkownik faktycznie zapytał
(wzorzec codex-vision-proxy), oraz prosząc model wizyjny o transkrypcję widocznego
tekstu. Gdy flaga jest wyłączona — lub brakuje tekstu użytkownika — bazowy prompt
jest używany bez zmian.

Własne żądanie zgodne z OpenAI w samopętli opisującej (`callVisionModelSingle()`
w `visionBridgeHelpers.ts`) zawsze żąda `image_url.detail: "high"` —
bezwarunkowo, dla każdego wywołującego/dostawcy i niezależnie od jakiegokolwiek
sygnału klienta. Próbkowanie z niskim poziomem szczegółowości pogarsza dokładność
OCR właśnie w zadaniu transkrypcji tekstu, którego dotyczy ten prompt, dlatego
samo wywołanie opisujące zawsze żąda wysokiego poziomu szczegółowości, niezależnie
od poziomu szczegółowości użytego w pierwotnym żądaniu przychodzącym. Wpływa to
wyłącznie na wewnętrzną treść żądania opisującego; nie zmienia sposobu, w jaki
OmniRoute przekazuje własne `image_url.detail` wywołującego w żądaniu głównym —
ta wartość domyślna jest stosowana oddzielnie i tylko dla wykrytych klientów
OpenCode, w `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Gałąź samopętli opisującej korzystająca z formatu transmisji Anthropic nie ma pola
`detail` i żadna z tych wartości domyślnych nie ma na nią wpływu.

#### Limit wyniku opisu (`modalityBridgeVisionMaxChars`)

| Klucz                          | Wartość domyślna | Zakres            |
| ------------------------------ | ---------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`              | `0` lub 100–50000 |

`0` (wartość domyślna) oznacza **brak limitu** — opis zwrócony przez
`callVisionModel()` jest przekazywany bez modyfikacji, co zachowuje dotychczasowe
działanie. Każda wartość z zakresu 100–50000 skraca opis, dodając sufiks
`…`, zanim zostanie on wstawiony z powrotem jako `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` w `src/lib/guardrails/visionBridge.ts`).
Zwiększ tę wartość w przypadku zadań OCR wymagających dużej szczegółowości, gdy
model docelowy potrzebuje pełnej transkrypcji; zmniejsz ją, aby ograniczyć zużycie
tokenów przez gadatliwe modele wizyjne. Pole w panelu administracyjnym znajduje
się w panelu Advanced karty Vision
(`modality-bridge-max-chars` w `ModalityBridgeVisionTab.tsx`) i podnosi każdą
wartość od 1 do 99 do dolnej granicy 100, pozostawiając jawnie ustawione `0`
bez zmian — `0` jest samodzielnie prawidłową wartością Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a nie jedynie
wartością domyślną oznaczającą „nie ustawiono”.

#### Pamięć podręczna opisów (`modalityBridge/bridgeCache.ts`)

Współdzielona przez cały proces pamięć podręczna LRU + TTL przechowująca wyniki
opisów. Klucz = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z
ramkowaniem za pomocą prefiksów długości (bez kolizji granic pól). Składnikiem
klucza dotyczącym modelu jest **skonfigurowany** model mostu, a nie model, który
faktycznie odpowiedział — `callVisionModel` może wewnętrznie użyć modelu
zapasowego, a tworzenie klucza osobno dla każdej próby powodowałoby fragmentację
pamięci podręcznej. Nieudane opisy nigdy nie są zapisywane w pamięci podręcznej.
Ustawienia:

| Klucz                           | Wartość domyślna | Zakres  |
| ------------------------------- | ---------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`           | —       |
| `modalityBridgeCacheTtlMinutes` | `60`             | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`            | 10–5000 |

#### Normalizacja zdalnych obrazów (samopętla opisująca/pobieranie base64)

Gdy most samodzielnie pobiera **zdalny** obraz — na potrzeby samowywołania
opisującego Anthropic oraz konwersji do base64 w formacie transmisji Claude
(`ensureBase64ImagesForClaudeWire`), w obu przypadkach za pośrednictwem
`fetchRemoteImageAsDataUri()` w `visionBridgeHelpers.ts` — wynikowy identyfikator
URI danych jest przekazywany przez `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) przed osadzeniem w żądaniu do modelu
wizyjnego. Obrazy o zbyt dużych wymiarach są skalowane w dół do **2048px na
dłuższej krawędzi** (zgodnie z limitem zmiany rozmiaru już stosowanym po stronie
serwera przez OpenAI/Anthropic), co zmniejsza liczbę przesyłanych bajtów i
opóźnienie bez zmiany tego, co widzi model wizyjny. Zmiana rozmiaru wykorzystuje
`sharp`, ładowany przez import dynamiczny: na platformie, na której nie uda się
załadować jego natywnego pliku binarnego, `normalizeDataUri()` **nigdy nie zgłasza
wyjątku** — zamiast tego przepuszcza oryginalne bajty bez zmian, dzięki czemu
ścieżka opisu/konwersji do base64 nadal działa. Dane niebędące obrazem (wynik
pobierania, który nie zawiera obrazu możliwego do zdekodowania) również są
przepuszczane bez zmian. Ta normalizacja jest ograniczona do obrazów pobieranych
przez most na potrzeby własnego samowywołania — nigdy nie jest stosowana do
nieprzetworzonego ładunku przekazywanego przez wywołującego, zgodnie z zasadą
modyfikacji wyłącznie po wyrażeniu zgody (Twarda reguła nr 20).

#### Schemat ustawień + migracja

Nowe klucze `modalityBridge*` są walidowane przez Zod w `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trzy klucze `modalityBridgeCache*` oraz grupa
`modalityBridgeAudio*` używana przez Audio Bridge. Migracja
`141_modality_bridge_settings.sql` kopiuje istniejące starsze wartości
`visionBridge*` do odpowiadających im nowych kluczy (idempotentnie, nigdy nie
nadpisując wartości `modalityBridge*` ustawionej przez operatora); starsze klucze
pozostają akceptowane jako zapasowe źródło odczytu przez jeden cykl wydania.

#### Nagłówek przejrzystości + statystyki

Odpowiedzi przekształcone przez opis zawierają
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(tworzony przez `buildModalityBridgeHeader()` w `modalityBridge/bridgeStats.ts`,
dodawany przez `withModalityBridgeHeader()` w `src/sse/handlers/chatHelpers.ts`).
Przekierowane żądania **nie** otrzymują nagłówka — ładunek pozostał niezmieniony,
a zamiana modelu jest już widoczna w polu `model` treści odpowiedzi.

`GET /api/modality-bridge/stats` (uwierzytelnianie zarządzania, ten sam poziom co
`GET /api/settings`) zwraca przechowywane w pamięci liczniki dla poszczególnych modalności
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` dla `vision`, `audio` i
`video`. `averageLatencyMs` używa `latencySamples`, a nie wszystkich prób, jako
mianownika; operacja bez pomiaru czasu nie tworzy sztucznej próbki o czasie
zero milisekund. `bridged` pozostaje aliasem zapewniającym zgodność wsteczną dla
udanych konwersji; nieudane próby nie zwiększają jego wartości.
Liczniki są z założenia resetowane przy ponownym uruchomieniu procesu
(telemetria, a nie ewidencja).

#### Konfiguracja panelu

Dedykowana strona panelu znajduje się pod adresem
`/dashboard/settings/modality-bridge`. Jej karty `Vision`, `Audio`
i `Video`, dostępne bezpośrednio przez URL, zachowują parametry zapytania podczas
przełączania wartości `tab`.
Karta Vision udostępnia włączanie, tryb, wybór modelu (w tym automatyczny
domyślny wybór), monity uwzględniające zadanie, zaawansowane limity czasu,
obrazu, długości opisu i pamięci podręcznej, liczniki środowiska uruchomieniowego
oraz zabezpieczone żądanie przykładowe. Karta Audio jest również aktywna:
udostępnia włączanie, selektor modeli wyłącznie STT z opcją Auto, limity czasu
i maksymalnej długości klipu, liczniki audio oraz test przykładowy `input_audio`.
Karta Video jest funkcjonalna: raportuje stan środowiska uruchomieniowego
FFmpeg/ffprobe — jeden z czterech jawnych stanów interfejsu (`unknown`, gdy
sondowanie jest w toku lub nie mogło zostać ukończone, `restricted` na hoście
panelu innym niż loopback, gdzie sondowanie jest pomijane po stronie klienta,
`unavailable` po wykonaniu sondowania i potwierdzeniu braku narzędzi albo
`available` wraz z wersjami FFmpeg/ffprobe) — trwale zapisuje limity
włączenia/modelu/klatek/wideo/czasu, filtruje selektor modeli do modeli
obsługujących obraz oraz udostępnia liczniki wideo.

Dotychczasowa karta Vision Bridge w ustawieniach AI jest łączem zgodności
prowadzącym do nowej strony; nie zawiera już drugiej kopii formularza. Sekcja
Media Providers również łączy przepływy pracy Image-to-Text i Speech-to-Text
z odpowiednimi kartami Modality Bridge, nie usuwając istniejącego środowiska
testowego Speech-to-Text.

**Obejście kontroli dopuszczenia dla pętli do samego siebie:** gdy wywołanie
opisu jest kierowane przez własną pętlę `/v1` OmniRoute (niestandardowy model
dostawcy), podżądanie wysyła `x-omniroute-admission-bypass: internal` i jest
uwierzytelniane przy użyciu rozpoznanego poświadczenia pętli — lokalnego
wartownika `sk_omniroute` w trybie lokalnym albo skonfigurowanego przez operatora
klucza środowiskowego `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), dzięki
czemu wdrożenia z `REQUIRE_API_KEY=true` nadal mogą wykonywać wywołanie opisu.
Obejście jest honorowane wyłącznie dla tych dokładnych poświadczeń, dlatego
klienci zewnętrzni nie mogą użyć nagłówka do pominięcia kontroli dopuszczenia.

Starsze wartości domyślne znajdują się w
`src/shared/constants/visionBridgeDefaults.ts`; nowe wartości domyślne
trybu, obsługi zadań i pamięci podręcznej oraz mechanizm rozpoznawania ustawień
znajdują się w `src/shared/constants/modalityBridgeDefaults.ts`. Mechanizm
zabezpieczający udostępnia opcję konstruktora `deps`, dzięki której testy mogą
wstrzykiwać fikcyjne implementacje `getSettings` i `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Przechwytuje żądania czatu zawierające audio, zanim dotrą one do celu, o którym
nie wiadomo, czy akceptuje dane wejściowe audio. Nigdy nie zmienia trasy żądania
czatu: części audio są transkrybowane za pośrednictwem istniejącego,
zgodnego z OpenAI punktu końcowego multipart, a wybrany model czatu kontynuuje
pracę z transkrypcjami tekstowymi.

Przepływ:

1. Ustal `supportsAudio` za pomocą `getResolvedModelCapabilities()`. Jawne
   metadane rejestru dostawców mają pierwszeństwo, następnie statyczne metadane
   modelu, a potem zsynchronizowane `modalities_input`. Zadeklarowana lista danych
   wejściowych bez `audio` oznacza `false`; brak danych potwierdzających
   możliwości oznacza `null`. Zarówno `false`, jak i `null` aktywują
   konserwatywny most, natomiast `true` powoduje jego pominięcie.
2. Ustal ustawienia `modalityBridgeAudio*` i wyodrębnij możliwe do wycięcia
   części audio najwyższego poziomu ze wszystkich wiadomości przy użyciu
   współdzielonego detektora `detectMediaParts()`. Obsługiwane formaty przesyłania
   to OpenAI `input_audio`, `audio_url` oraz
   `source.media_type: "audio/*"`. Zagnieżdżone audio jest wykrywane na potrzeby
   routingu, ale nie jest usuwane przez ścieżkę wycinania. Ilość pracy jest
   ograniczona przez `modalityBridgeAudioMaxClips`; późniejsze części pozostają
   niezmienione.
3. Uwzględnij skonfigurowane `provider/model` albo pozwól
   `selectAudioBridgeModel()` przejść przez `AUDIO_TRANSCRIPTION_PROVIDERS`
   w stabilnej kolejności katalogowej i wybrać pierwszy model z użytecznym,
   aktywnym poświadczeniem dostawcy.
4. `callAudioTranscription()` konwertuje audio w formacie base64/data URI na
   wieloczęściowy `file` albo pobiera zdalny `audio_url` przez mechanizm ochrony
   publicznych połączeń wychodzących, z przypięciem DNS i limitem 25 MB.
   Następnie wysyła metodą POST plik oraz wybrany model do lokalnej pętli
   `/v1/audio/transcriptions`, uwierzytelnionej za pomocą
   `resolveSelfLoopBearer()`. Istniejąca trasa transkrypcji wykonuje standardowe
   wyszukiwanie poświadczeń, obsługę okresów karencji i limitów szybkości oraz
   przekazanie do dostawcy.
5. Udane wywołania zastępują odpowiednie części wartością
   `[Audio N]: <transcript>`. Wywołania są uruchamiane za pomocą
   `Promise.allSettled`: pojedynczy błąd zachowuje oryginalną część audio
   (kontrakt #4012). Jeśli wszystkie wywołania zakończą się niepowodzeniem,
   a dla celu potwierdzono `supportsAudio === false`, części przyjmują postać
   `[Audio N]: (unavailable — no STT provider connected)` (kontrakt #8430).
   W przypadku nieznanego celu (`null`) wynik, w którym wszystkie wywołania
   zakończyły się niepowodzeniem, pozostaje nietknięty. Cel o potwierdzonej
   obsłudze wyłącznie tekstu, bez użytecznego poświadczenia STT, otrzymuje ten sam
   jawny tekst zastępczy bez wykonywania wywołania sieciowego.

Udane transkrypcje korzystają z ogólnoprocesowej pamięci podręcznej LRU/TTL
Modality Bridge. Klucz łączy odwołanie do audio, stabilną etykietę operacji
`audio-transcription` oraz wybrany model STT; niepowodzenia nigdy nie są
buforowane. Próby audio aktualizują współdzielone liczniki `bridged`,
`cacheHits`, `failures` i `lastUsedAt`.
Przekształcone odpowiedzi zawierają
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nietknięte żądania nie otrzymują segmentu Audio Bridge.

Ustawienia środowiska uruchomieniowego są przechowywane w bazie danych
i walidowane przez Zod:

| Klucz                         | Wartość domyślna | Zakres                              |
| ----------------------------- | ---------------- | ----------------------------------- |
| `modalityBridgeAudioEnabled`  | `true`           | —                                   |
| `modalityBridgeAudioModel`    | `""`             | Automatycznie lub identyfikator STT |
| `modalityBridgeAudioTimeout`  | `60000`          | 1000–300000                         |
| `modalityBridgeAudioMaxClips` | `3`              | 1–10                                |

Współdzielona pamięć podręczna nadal jest kontrolowana przez `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Most wideo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Przechwytuje części wideo najwyższego poziomu w `messages` interfejsu Chat Completions oraz
w `input` interfejsu Responses API przed wywołaniem docelowego systemu bez znanej natywnej obsługi wideo.
Obsługiwane formaty to `input_video`, `video_url`, `video_source`, adresy URL HTTPS
oraz identyfikatory URI danych `data:video/*;base64,...`. Zwykłe nazwy plików w tekście nie są traktowane
jako wideo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) odpowiada za przechodzenie przez żądanie,
sprawdzanie możliwości/zasad, agregację w obrębie żądania oraz ładunek odpowiedzi.
Przetwarzanie poszczególnych materiałów wideo — pobieranie, pamięć podręczna całego wyniku,
opisywanie sekwencji klatek (obejmujące transkrypcję dźwięku zadeklarowaną przez wywołującego)
oraz metryki/przerwanie/czyszczenie dla każdej próby — jest ukryte za `processVideoPart` w
`videoBridgePipeline.ts`, wywoływanym raz dla każdej części wideo w pętli `preCall`.
Moduł ten definiuje również jawne granice portów `VideoMediaBrokerPort`
(pobieranie bajtów i wyodrębnianie próbkowanych klatek), `VideoAudioTranscriptionPort`
(łączenie transkrypcji dźwięku zadeklarowanej przez wywołującego z próbkowanymi podpisami) oraz
`VideoDrilldownPort` (granica utrwalania szczegółowej analizy klatek; nie jest jeszcze podłączona
do `processVideoPart` — obecnie tylko oddzielna trasa `/api/modality-bridge/video/drilldown`
zapisuje wpisy szczegółowej analizy).

Publiczna ścieżka żądań `/v1` nigdy nie importuje ani nie wywołuje podprocesu. Zdalne
materiały wideo są pobierane z limitem 50 MiB; osadzone materiały wideo base64 mają
konserwatywny limit 36 MiB zdekodowanych danych na materiał wideo, aby otoczka
modelu/wiadomości/ramkowania mogła pozostać w publicznym limicie przyjmowania żądań JSON wynoszącym 50 MiB. Długość danych osadzonych oraz szacowany rozmiar po zdekodowaniu są sprawdzane przed alokacją. HTTPS
jest wymagany dla początkowego zdalnego adresu URL oraz każdego przekierowania, z użyciem istniejącego
zabezpieczenia połączeń wychodzących wyłącznie do zasobów publicznych z przypinaniem DNS. Bajty przekraczają następnie dokładną wewnętrzną
granicę brokera `POST /api/modality-bridge/video/extract`. Ta trasa jest jednocześnie
`LOCAL_ONLY` i `SPAWN_CAPABLE`, przyjmuje wyłącznie uwierzytelnione dla danego procesu
żądanie z zaufanego interfejsu pętli zwrotnej i nigdy nie przyjmuje adresu URL, ścieżki systemu plików, pliku wykonywalnego
ani listy argumentów. Potok limitowania rozmiaru treści interfejsu API oraz przyrostowy czytnik treści
programu obsługi niezależnie wymuszają limit wejścia brokera wynoszący 50 MiB. Jego ograniczona kolejka przetwarza
jedno wyodrębnianie naraz, dopuszcza cztery oczekujące zadania i ogranicza oczekujące dane wejściowe do
100 MiB.

Wewnątrz brokera `ffprobe` odczytuje prywatny plik lokalny; stała lista
dozwolonych formatów wyklucza formaty list odtwarzania i manifestów. W przypadku dozwolonych kontenerów
z rodziny MOV zewnętrzne odwołania do danych MOV pozostają domyślnie wyłączone, a
stałe polecenie ich nie włącza. Zarówno `ffprobe`, jak i `ffmpeg` używają
listy dozwolonych protokołów ograniczonej wyłącznie do `file`, jednego wątku, stałych tablic argumentów, bez powłoki
oraz plików wykonywalnych rozpoznawanych na podstawie `PATH`. Strumienie okładek typu attached-picture nie są
kandydatami do odtwarzania. Wszystkie odtwarzalne strumienie muszą spełniać limity, a
jawny strumień domyślny ma pierwszeństwo przed deterministycznym wyborem strumienia o najniższym indeksie.
Materiały wideo są ograniczone do 600 sekund, 8192 pikseli na wymiar oraz
33 554 432 pikseli źródłowych. FFmpeg próbkuje od 1 do 16 środkowych klatek JPEG, zmniejsza
dłuższą krawędź do maksymalnie 1024 pikseli bez powiększania mniejszych danych wejściowych i
nigdy nie otrzymuje adresu URL. Domyślnym próbkowaniem jest `uniform`. Opcjonalne
zasady `scene_aware` i eksperymentalna `segment_aware` wykonują jeden dodatkowy
stały przebieg FFmpeg na już zweryfikowanym lokalnym strumieniu, wybierają ograniczony zbiór
znaczników czasu scen `showinfo` i deterministycznie powracają do tych samych
jednolitych punktów środkowych w przypadku awarii detektora, przekroczenia limitu czasu, nieprawidłowych danych wyjściowych lub pustego
zbioru kandydatów. Tryb uwzględniający segmenty przydziela próbki punktów środkowych proporcjonalnie do
zweryfikowanych interwałów scen; dane pomocnicze trybu uwzględniającego segmenty i zachowanie mechanizmu rezerwowego są
opisane szczegółowo poniżej. Twardy limit 16 klatek jest
stosowany po dokonaniu wyboru w każdej zasadzie. Gdy żądanie uwzględniające sceny ma budżet wynoszący tylko
jedną klatkę, używa jednolitego punktu środkowego aktywnego okna całego wideo lub okna fokusu
i zgłasza `policyEffective: uniform`: pojedyncza wybrana klatka sceny
nie może zachować obu krańców czasowych. Wywołujący może opcjonalnie podać
skończone okno fokusu (`start`/`end` w sekundach); granice są ograniczane do czasu trwania multimediów,
odwrócone lub nieskończone okna są odrzucane, a wszystkie zasady
próbkowania są wykonywane wyłącznie wewnątrz znormalizowanego interwału. Wynikowe
okno jest uwzględniane w metadanych próbkowania oraz w prefiksie niezaufanego opisu,
aby modele niższego poziomu mogły odróżnić wybrany fragment od pełnej
osi czasu.

Semantyczny fokus podpisów jest oddzielnym, jawnym ustawieniem. Domyślny tryb analizy `full`
zachowuje istniejący prompt klatek i nigdy nie przekazuje tekstu żądania
do modelu generującego podpisy. W trybie `focused` most odczytuje wyłącznie najnowszy
niepusty `text`/`input_text` utworzony przez użytkownika z tego samego kontenera Chat lub Responses,
normalizuje go do NFC, scala znaki sterujące i białe znaki
oraz ogranicza do 500 punktów kodowych Unicode. Pusty wynik powoduje powrót do
dokładnego promptu `full`. Użyteczna wskazówka jest serializowana jako JSON w dedykowanym
bloku niezaufanego kontekstu użytkownika i może jedynie nadawać priorytet obserwowalnym szczegółom; nie
może zastąpić oddzielnego ostrzeżenia przed wykonywaniem instrukcji widocznych
lub słyszalnych w multimediach. Fokus tekstowy nigdy nie wyprowadza `start`/`end` ani nie zmienia
próbnika czasowego.

#### Dowody strukturalne segmentów FU-07

`segment_aware` wykorzystuje jeden ograniczony przebieg analizy wstępnej na wcześniej zweryfikowanym lokalnym strumieniu wideo. Stały łańcuch filtrów najpierw skaluje obraz do szerokości nie większej niż 320 pikseli, wykrywa zmiany scen i przedziały zamrożenia, a następnie próbkuje z częstotliwością 1 klatki na sekundę w celu określenia rozmycia, średniej luminancji oraz informacji przestrzennych/czasowych. Przebieg jest ograniczony do 600 próbek strukturalnych, jednego wątku FFmpeg/filtra, tych samych list dozwolonych elementów dla protokołu wyłącznie `file` i kontenerów, limitu danych wyjściowych procesu wynoszącego 1 MiB oraz maksymalnie 30 sekund w ramach współdzielonego mechanizmu przerwania/terminu brokera. Nigdy nie przyjmuje z żądania polecenia, filtra, ścieżki ani adresu URL.

Wartości strukturalne stanowią deterministyczne dane z próbkowania, a nie semantyczne rozumienie wideo. Nie wywnioskowują tematów, działań, podpisów, mowy ani intencji użytkownika. Granice scen i zamrożeń tworzą segmenty; pokrycie zamrożeniem, rozmycie, ekspozycja, szczegółowość przestrzenna i zmienność czasowa wpływają wyłącznie na sposób przydzielenia istniejącego budżetu 1–16 klatek. Segment całkowicie zamrożony jest ograniczony do jednej klatki, natomiast segmenty niezamrożone konkurują o pozostały budżet. Gdy liczba granic przekracza liczbę klatek, zachowywane jest równomierne pokrycie osi czasu, dzięki czemu szybkie cięcia na początku nie mogą ukryć długiego segmentu końcowego. Granice scen znajdujące się w granicach 1-sekundowej rozdzielczości analizy od granicy zamrożenia są scalane.

Brakujące filtry, zniekształcone lub puste dane, błąd detektora albo przekroczenie limitu czasu ograniczonej analizy wstępnej powodują bezpieczne przejście do dokładnej zasady równomiernego wyboru punktów środkowych. Przerwanie przez wywołującego lub upływ terminu brokera nie powodują takiego przejścia: kończą podproces będący w toku, uniemożliwiają późniejsze wyodrębnianie klatek, a prywatne drzewo tymczasowe jest usuwane w `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministyczne, rzeczywiste materiały testowe FFmpeg do pomiaru oszczędności wywołań generowania podpisów po deduplikacji, przydziału budżetu przy intensywnym ruchu, danych dotyczących rozmycia/ekspozycji/SI-TI, szybkich cięć z długą końcówką oraz wyników fałszywie dodatnich przy stopniowym wygaszaniu. Rejestruje czas rzeczywisty analizy wstępnej, a tam, gdzie dostępne jest `/usr/bin/time`, także czas procesora procesu potomnego i szczytowe RSS. Jego kontrole jakości są wyłącznie wyroczniami strukturalnymi. Jakość rzeczywistego modelu generowania podpisów pozostaje oznaczona jako `HOLD`, ponieważ ten zestaw testowy nie ma autoryzowanego punktu końcowego ani zamrożonego mechanizmu oceny. Oszczędności pieniężne również pozostają oznaczone jako `HOLD`, chyba że `--caption-cost-per-call-usd` poda jawne dodatnie oszacowanie kosztu pojedynczego wywołania; skrypt nigdy nie fabrykuje żadnego z tych wyników.

Każda klatka jest ograniczona do 4 MiB, wszystkie nieprzetworzone klatki łącznie do 23 MiB, a zserializowana odpowiedź brokera do 32 MiB. Prywatny katalog tymczasowy jest usuwany w `finally`. OmniRoute nie zawiera FFmpeg i nie akceptuje niestandardowej ścieżki do pliku wykonywalnego. Przed generowaniem podpisów most stosuje zachowawcze przejście deduplikacji wizualnej: każdy obraz JPEG jest redukowany do bufora 16×16 w skali szarości i porównywany wyłącznie z ostatnią zachowaną klatką. Gdy żądany budżet podpisów przekracza jedną klatkę, wyodrębnianie dostarcza ograniczoną pulę kandydatów liczącą maksymalnie dwukrotność tego budżetu i nigdy więcej niż 16 klatek. Żądany limit jest stosowany dopiero po deduplikacji, przy czym podczas końcowego przerzedzania zachowywane są pierwszy i ostatni wybrany kandydat, jeśli budżet wynosi co najmniej dwa. Wersjonowana zasada
`grayscale-16x16-mean-cells-v2` wykorzystuje większą z dwóch wartości: średnią różnicę luminancji lub odsetek komórek miniatury, których znormalizowana różnica wynosi co najmniej 0,05. Próg duplikatu jest stałą równą 0,04, wybraną ze względu na przewidywalność, a nie udostępnioną jako ustawienie czasu wykonywania. Ten dodatkowy sygnał wysokiego kontrastu zachowuje niewielki ruch i zmiany widocznego tekstu, które może ukryć porównanie oparte wyłącznie na średniej. Błędy komparatora lub dekodera skutkują bezpiecznym zachowaniem pokrycia. Metadane wyjściowe rozróżniają wyodrębnionych kandydatów, klatki wykorzystane pomyślnie oraz odrzucone duplikaty wizualne.

Jawnie oznaczona część wideo może zażądać arkusza stykowego ze znacznikami czasu. Most tworzy siatkę JPEG zawierającą maksymalnie 4 kolumny i 16 klatek. Każda komórka o rozmiarze 512 pikseli ma znacznik czasu źródła trwale naniesiony na dolny pas o wysokim kontraście, a te same znaczniki czasu pozostają w metadanych tekstowych na potrzeby późniejszego powiązania i audytu. Kompletny obraz JPEG nadal podlega limitowi 32 MiB. Jeśli `sharp` nie może zdekodować lub złożyć siatki, most wraca do pojedynczych klatek JPEG; przerwanie przez klienta nadal jest propagowane przez operację tworzenia arkusza.

Dane potwierdzające gotowość do wdrożenia są celowo oddzielone od syntetycznego mikrobenchmarku kompozycji. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiuje wersjonowany schematem zestaw testów A/B dla rzeczywistych modeli wizyjnych zgodnych z OpenAI. Mierzy tokeny raportowane przez dostawcę, całkowite opóźnienie mierzone czasem rzeczywistym (w tym tworzenie arkusza), liczbę wywołań modelu oraz zachowanie faktów zdefiniowanych w manifeście. Surowe odpowiedzi modelu nie są zapisywane w raporcie; zachowywane są jedynie skróty SHA-256 i identyfikatory dopasowanych faktów. Zestaw testowy nie wykonuje żadnego wywołania sieciowego ani płatnego wywołania modelu, chyba że przekazano `--execute-real` oraz skonfigurowano `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez takiego jawnego rzeczywistego uruchomienia jego werdykt przeznaczony do odczytu maszynowego pozostaje oznaczony jako `HOLD`; same syntetyczne pomiary rozmiaru danych/liczby wywołań nie stanowią dowodu gotowości do wdrożenia.

Wywołujący mogą dołączyć opcjonalną tablicę `transcript.cues` do obsługiwanej części wideo, jeśli dysponują już zsynchronizowanym tekstem. Każda wskazówka musi zawierać `text`, skończony przedział `start`/`end` mieszczący się w sprawdzonym czasie trwania oraz znajdujące się na białej liście `source` (`client`, `embedded` lub `audio-bridge`); wartość domyślna `confidence` to `1` i musi ona pozostawać w przedziale od `0` do `1`. Dokładnie zduplikowane wskazówki są scalane. OmniRoute nigdy nie rozpoczyna transkrypcji na podstawie tych metadanych: zweryfikowane wskazówki są kopiowane do opisanego wyniku wraz ze źródłem, poziomem ufności i przedziałem oraz renderowane jako niezaufane obserwacje obok podpisów klatek. Tekst nieprawidłowy, spoza zakresu lub pozbawiony informacji o pochodzeniu jest odrzucany zamiast mieszany ze strumieniem podpisów. Oba kanały transkrypcji w treści żądania normalizują podane pochodzenie do `client`, w tym samodzielnie zadeklarowane etykiety `embedded` lub `audio-bridge`. Tylko adapter kontrolowany przez serwer może przypisać te zaufane etykiety za pośrednictwem dostępnego wyłącznie z kodu argumentu `trustedSource`; pole JSON żądania nie ma dostępu do tego argumentu. Tekst transkrypcji pozostaje niezaufaną treścią pochodzącą z multimediów, niezależnie od jego pochodzenia, i nigdy nie może decydować o autoryzacji.

Zaawansowany klient wywołujący może przekazać ścieżkę `audioTranscript` dla tego samego filmu;
jest ona traktowana jako tekst dostarczony przez klienta, a nie dowód transkrypcji wykonanej przez serwer.
Warstwa scalająca przetwarza obserwacje wizualne i dźwiękowe w ramach
jednego terminu wykonania i sygnału przerwania, porządkuje je na wspólnej osi czasu, scala
dokładne duplikaty i zwraca wynik częściowy, gdy powodzeniem kończy się tylko jedna gałąź.
Nieprawidłowy `audioTranscript` powoduje zwrócenie takiego wyniku częściowego — opis
wizualny zostaje zachowany, a gałąź dźwiękowa rejestruje oczyszczony kod błędu —
zamiast przerwania przetwarzania całego filmu. Dostępność poszczególnych gałęzi, flaga wyniku częściowego
oraz oczyszczone kody błędów są zachowywane w opisanym wyniku, w metadanych
mechanizmu ochronnego (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), w metadanych pamięci podręcznej wyników oraz w licznikach
scalania mostu. Domyślna ścieżka Video Bridge nie wywołuje zamiany mowy na tekst
ani nie pobiera drugiej kopii multimediów; bez jawnie przekazanej ścieżki nadal
przetwarza wyłącznie obraz.

**Przechowywanie transkrypcji (#12150 P1).** Ma to zastosowanie automatycznie za każdym razem, gdy
Video Bridge (który sam wymaga jawnego włączenia) renderuje wskazówkę transkrypcji — nie istnieje oddzielna
flaga przechowywania. Gdy żądanie renderuje dowolną wskazówkę transkrypcji (zadeklarowany przez wywołującego
`transcript` lub scalony `audioTranscript`), mechanizm ochronny oznacza je jako
`videoBridgeObserved` i tworzy zredagowaną kopię opisu filmu —
identyczne renderowanie, w którym treść tekstowa każdej wskazówki zostaje zastąpiona przez
`[redacted-video-transcript]`, utworzone przez podmianę pola strukturalnej wskazówki
przed złożeniem ciągu znaków (nigdy przez analizowanie spłaszczonego tekstu, dzięki czemu żadna
treść wskazówki — szkodliwa ani zwykła, w tym treści zawierające `]`, takie jak
`[inaudible]`/`[music]` — nie może zostać zachowana). Treść żądania utrwalana w dzienniku wywołań zamienia
każdą część tekstową pochodzącą z filmu na tę zredagowaną kopię, dopasowaną
na podstawie równości treści; punkt odniesienia `fullText` jest ponownie odczytywany z ukończonego ładunku
mechanizmu ochronnego poprzedzającego wywołanie, dzięki czemu dopasowanie nadal działa po tym, jak kolejne
mechanizmy ochronne w łańcuchu (maskowanie danych osobowych i poświadczeń, priorytety 10/95) zmodyfikują
tekst opisu w miejscu, a także po zmianie kształtu tablicy wiadomości wskutek wstrzyknięcia
promptu systemowego, przekazania kontekstu lub Pamięci. Treść wysyłana do modelu nadrzędnego pozostaje bez zmian.
Zaobserwowane żądanie nie wypełnia również trwałej Pamięci (pomijane jest wyodrębnianie
zarówno z żądania, jak i z odpowiedzi), dzięki czemu własna odpowiedź modelu nie może
skopiować tekstu transkrypcji do Pamięci.

**Nieprzetworzone pola filmu (#12430).** Gdy most jest włączony, a natywna obsługa filmów jest nieznana lub niedostępna, zdefiniowane pola `transcript`/`audioTranscript` również aktywują `videoBridgeObserved`, nawet po niepowodzeniu tworzenia opisu lub przekroczeniu limitu `maxVideos`. Wartość `null` i puste ciągi znaków są uwzględniane; brakujące pola i metadane niezwiązane z filmem nie są. Zachowywane kopie redagują te pola lub pomijają żądanie, a pamięci podręczne i Pamięć są omijane.

Na tych ścieżkach awaryjnych prawidłowe wskazówki wywołującego stają się obsługiwanymi
częściami `text`/`input_text`, a nie niestandardowymi polami dostawcy. Obie ścieżki
dostarczone w żądaniu pozostają niezaufanymi obserwacjami `client`, z wyraźnym ostrzeżeniem, że film
nie został opisany, a znaczniki czasu nie zostały zweryfikowane względem multimediów. Istniejące limity
256 wskazówek/64 KiB łącznie oraz limity na wskazówkę mają zastosowanie do obu ścieżek razem;
znaczniki czasu muszą mieścić się w 600-sekundowym limicie brokera i w każdym podanym
oknie zainteresowania. Nieprawidłowe ścieżki są odrzucane i nie są przekazywane jako dowolny tekst; prawidłowa
ścieżka równoległa może nadal zostać użyta, chyba że przekroczony zostanie ich wspólny limit. Pola puste lub o wartości `null`
nie dodają tekstu. Ta ścieżka awaryjna nie powoduje pobierania multimediów ani wykonywania transkrypcji.
Pola rozszerzeń transkrypcji są usuwane z awaryjnego nośnika filmu oraz jego
obiektów `video_url`/`source`. Lista dozwolonych elementów protokołu OpenAI pozostaje rygorystyczna; nośniki filmów
o nieznanej obsłudze natywnej pozostają dostępne, a znane cele obsługujące wyłącznie tekst zachowują bezpieczne znaczniki.
Strukturalne, zredagowane kopie chronią dołączony tekst transkrypcji, podczas gdy
oryginalne żądanie należące do wywołującego pozostaje niezmienione. Cele z obsługą natywną oraz
wyłączone mosty zachowują dotychczasowe zachowanie polegające na pomijaniu tego mechanizmu.

Dodatkowe zachowywane kopie korzystają z tego samego sygnału zaobserwowanego żądania. Nieprzetworzony
zrzut żądania klienta sprzed zastosowania mechanizmu ochronnego, oczekujące żądanie w pamięci oraz dziennik
wcześnie odrzuconych żądań strukturalnie zastępują pola transkrypcji w częściach filmu;
prompty tekstowe syntetyzowane przez etapy potoku i przekazywanie kontekstu są redagowane
w miejscu docelowym utrwalanej treści żądania. Utrwalony znacznik `video_content_removed`
sprawia, że kontynuacja za pomocą `previous_response_id` kończy się bezpiecznym niepowodzeniem, zamiast odtwarzać
tekst, który został celowo odrzucony. Jeśli zaobserwowane żądanie utraci
zredagowaną kopię dla danej części przed zarejestrowaniem albo choć jedna z kilku kopii filmu
nie zostanie dopasowana po późniejszych modyfikacjach żądania, zachowywana treść żądania jest
całkowicie pomijana zamiast utrwalania częściowo zredagowanej transkrypcji.

W przypadku zaobserwowanego żądania odpowiedź modelu może cytować dowolny fragment
transkrypcji bez strukturalnej granicy wskazówki. Dlatego jej pole `responseBody` utrwalane w dzienniku wywołań
jest zastępowane znacznikiem pominięcia; szczegółowy artefakt
potoku (który może obejmować treści nadrzędne/klienta oraz fragmenty strumienia)
nie jest zachowywany. Pamięci podręczne semantyczne, idempotencji i ponownego odtwarzania rozumowania
pomijają odczyty i zapisy dla tego żądania. Żądanie dostawcy i odpowiedź
widoczna dla klienta pozostają bez zmian. Wczesne bajty podtrzymujące połączenie są usuwane z tymczasowego
bufora, gdy szczegółowy artefakt zostaje pominięty. Ostrzeżenie Kiro o nieprawidłowym EventStream
podaje wyłącznie liczbę bajtów ładunku, nigdy jego zawartość ani nieprzetworzony błąd parsera JSON.
Nie oznacza to, że każdy niezwiązany komunikat diagnostyczny dostawcy/wtyczki został
sprawdzony; szerszy przegląd miejsc docelowych przechowywania jest śledzony w #11658.

Wewnętrzny cykl życia `/api/modality-bridge/video/drilldown` stanowi oddzielną,
uwierzytelnianą tokenem przez interfejs loopback warstwę pamięci podręcznej. Każda operacja wymaga również
kanonicznego, nieprzezroczystego identyfikatora podmiotu. Zanim wywołujący środowiska produkcyjnego zostanie włączony, musi
wyprowadzić ten identyfikator z uwierzytelnionego tenanta i nigdy nie może przekazywać
wartości wybranej przez klienta. Klucze pamięci podręcznej wiążą ten podmiot z kanonicznymi identyfikatorami sesji i
odwołań do wideo, przechowują wyłącznie ich klucze wyprowadzone za pomocą SHA-256 oraz ograniczają zarówno odczyty,
jak i usuwanie do tego samego podmiotu. Pamięć podręczna przechowuje maksymalnie 16 wyprowadzonych klatek JPEG
na wpis, wygasza je po dziesięciu minutach i obsługuje ograniczone odczyty
`start`/`end` lub jawne usunięcie sesji.

Każdy podmiot jest ograniczony do 16 wpisów i 64 MiB kanonicznych danych JPEG. Limity te
są niezależne od globalnego pułapu 64 wpisów/256 MiB: presja limitu
podmiotu powoduje usunięcie wyłącznie najdawniej używanych wpisów tego podmiotu, zanim zostanie
rozważone globalne usuwanie LRU. Wygasłe wpisy są usuwane zarówno z rozliczenia dla podmiotu,
jak i globalnego podczas aktywności pamięci podręcznej, natomiast anulowanie i niepowodzenie walidacji
nie zatwierdzają częściowego zastąpienia.

Pamięć podręczna odrzuca niekanoniczny Base64, nadmiarowe dopełnienie, multimedia inne niż JPEG, uszkodzone lub
ucięte pliki JPEG oraz pliki JPEG, które generują ostrzeżenie podczas ograniczonego pełnego dekodowania obrazu przez `sharp`.
Każdy zaakceptowany obraz jest ponownie kodowany jako kanoniczny JPEG, a jego szerokość i wysokość są wyprowadzane
z odkodowanych bajtów zamiast z pól przekazanych przez wywołującego; wszelkie końcowe
bajty poliglotyczne są odrzucane zamiast zachowywane. Do obu limitów wliczany jest wyłącznie ograniczony
kanoniczny bufor skompresowanych danych. Limit danych JSON przesyłanych przez interfejs uwzględnia narzut Base64 dla pułapu
32 MiB odkodowanych danych wejściowych. Każdy
zapisany wynik derywacji rejestruje zwalidowany format i rozdzielczość JPEG, zasady próbkowania,
wersję derywacji, czas utworzenia, obliczony przez serwer skrót zawartości oraz zaszyfrowane
odwołanie nadrzędne wraz ze skrótem zawartości nadrzędnej od zaufanego wywołującego. Anulowanie jest sprawdzane
między asynchronicznymi fazami dekodowania i obliczania skrótu, przed atomowym zatwierdzeniem w pamięci podręcznej.

Ta transza nie łączy jeszcze producenta środowiska produkcyjnego z trasą ani nie
zapewnia wyboru wariantu o wielu rozdzielczościach. Przezroczysta ścieżka żądania Video Bridge
nie wiąże się zatem z żadną dodatkową pracą, a wyprowadzanie podmiotu powiązanego z tenantem oraz
pełny cykl życia wielu rozdzielczości FU-08 pozostają jawnymi zadaniami uzupełniającymi,
zamiast być dokumentowane jako ukończone działanie.

Klatki otrzymują sekwencyjnie podpisy przy użyciu skonfigurowanego modelu Video. Puste
nadpisanie Video dziedziczy ustawienie Vision; jeśli oba są puste, automatyczny router Vision
wybiera efektywny model obsługujący obraz. Pomyślnie wygenerowane podpisy
zastępują oryginalną część stabilnym prefiksem `[Video description:`, który dodatkowo
oznacza tekst jako niezaufaną obserwację wyprowadzoną z multimediów i nakazuje modelom
na dalszych etapach, aby nie wykonywały instrukcji znalezionych w multimediach. Klucze pamięci podręcznej podpisów klatek
obejmują bajty JPEG, prompt, znacznik czasu i efektywny model; w pamięci podręcznej zapisywane są wyłącznie
pomyślnie wygenerowane podpisy. Wpisy pamięci podręcznej zachowują faktyczny model producenta, który pomyślnie wygenerował wynik,
w tym model zapasowy; most zgłasza `mixed`, gdy różne klatki
zostały wygenerowane przez różne modele. Trafienie w pamięci podręcznej ponownie wykorzystuje tożsamość producenta
zamiast ponownie oznaczać ją jako żądany plan routingu. Pamięć podręczna wyników dla całego wideo
jest indeksowana według wszystkich danych wejściowych zmieniających wynik — promptu, efektywnego
modelu, zasad próbkowania, liczby klatek, trybu analizy semantycznej, odcisku SHA-256
znormalizowanej wskazówki dotyczącej obszaru zainteresowania, okna obszaru zainteresowania, `transcript`,
`audioTranscript` oraz flagi arkusza kontaktowego — dlatego zmiana któregokolwiek z tych
wymiarów powoduje chybienie pamięci podręcznej, a nigdy ponowne użycie nieaktualnych danych. Wersja
zasad deduplikacji wizualnej, próg i ograniczona liczba klatek kandydujących są również jawnie uwzględnione w
kluczu oraz metadanych pamięci podręcznej wyników; zmiana zasad nie może więc spowodować ponownego użycia nieaktualnego
opisu całego wideo. Metadane v4 pamięci podręcznej wyników zachowują tryb i
odcisk, ale nigdy nieprzetworzone zadanie użytkownika. Metadane mechanizmu ochronnego zgłaszają zarówno
żądany, jak i efektywny tryb analizy; żądany tryb `focused` bez
użytecznego tekstu użytkownika jest zgłaszany jako efektywnie `full`.

Mechanizm ochronny wyodrębnia wszystkie obsługiwane części wideo, ale opisuje nie więcej niż
`modalityBridgeVideoMaxVideos`. W przypadku elementu docelowego, o którym dowiedziono, że ma
`supportsVideo === false`, wideo zakończone niepowodzeniem i przekraczające limit są zastępowane jawnymi, bezpiecznymi
znacznikami tekstowymi, dzięki czemu żadne nieprzetworzone wideo nie pozostaje w danych. Gdy możliwości są nieznane, części te
zachowują swój nośnik wideo; każda transkrypcja zapasowa podlega opisanemu wyżej ograniczonemu
przekształceniu tekstu. Elementy docelowe z `supportsVideo === true` omijają most.
Sygnał przerwania żądania klienta jest propagowany przez pobieranie, kolejkę brokera,
podprocesy i wywołania generowania podpisów; przerwania zatrzymują przetwarzanie między kolejnymi plikami wideo i nigdy nie powodują
awaryjnego przepuszczenia nieprzetworzonych multimediów.

Ustawienia środowiska wykonawczego są przechowywane w bazie danych i walidowane przez Zod:

| Klucz                               | Wartość domyślna | Zakres / zachowanie                                                                                                      |
| ----------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`          | Opcjonalne środowisko uruchomieniowe, wymagające jawnego włączenia                                                       |
| `modalityBridgeVideoAnalysisMode`   | `"full"`         | `full` zachowuje ogólne podpisy; `focused` używa ograniczonego, niezaufanego kontekstu najnowszej wiadomości użytkownika |
| `modalityBridgeVideoModel`          | `""`             | Dziedziczy model Vision Bridge                                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`              | 1–16                                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`      | `uniform`, `scene_aware` lub proporcjonalne `segment_aware`; awaria detektora powoduje powrót do `uniform`               |
| `modalityBridgeVideoMaxVideos`      | `1`              | 1–4                                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`         | 1000–120000 ms                                                                                                           |

Starsze, utrwalone wartości limitu czasu Video przekraczające 120 sekund są ograniczane do
terminu brokera; nowe zapisy ustawień przekraczające ten limit są odrzucane.
`GET /api/modality-bridge/video/runtime` wymaga zaufanej, oznaczonej lokalności
loopback przed uwierzytelnieniem lub sondowaniem środowiska uruchomieniowego, a następnie wymaga
uwierzytelnienia administracyjnego. Zwraca wyłącznie `available`, oczyszczone wersje FFmpeg/ffprobe oraz stały
powód, gdy środowisko uruchomieniowe jest niedostępne. Wewnętrzny punkt końcowy wyodrębniania nie jest
publicznym API przesyłania plików: przepełnienie kolejki zwraca `503` wraz z `Retry-After`, rozłączenie
wywołującego zwraca `499`, a stały termin brokera zwraca `504`. Przekonwertowane odpowiedzi dodają
`video->text;model=<visionModel>;parts=<videos>` do centralnego
nagłówka `x-omniroute-modality-bridge` bez usuwania segmentów Vision ani Audio.

### Maskowanie danych PII (`piiMasker.ts`)

Działa na **obu** etapach.

- **`preCall`** klonuje ładunek, przechodzi przez `system`, `messages`, `input` oraz
  `prompt` (w tym elementy będące zwykłymi ciągami znaków) i stosuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) do pól tekstowych `content`/`text`. Gdy
  `PII_REDACTION_ENABLED=true`, wykryte dane PII są redagowane w wychodzącym
  ładunku. Jest to niezależne od `INPUT_SANITIZER_MODE` (który kontroluje wyłącznie
  zasady dotyczące wstrzykiwania promptów). Gdy redagowanie jest wyłączone, wywołanie rejestruje liczbę
  wykryć bez modyfikowania treści.
- **`postCall`** głęboko klonuje odpowiedź, uruchamia `sanitizePIIResponse()` oraz
  mechanizm maskujący strukturę Responses API (`maskResponsesOutput` — obejmuje
  `output_text` i `output[].content[].text`). Jeśli nastąpi jakakolwiek redakcja,
  zmodyfikowana odpowiedź zastępuje oryginalną.

Mechanizm ochronny nigdy nie blokuje; jedynie dodaje adnotacje (`meta.detections`,
`meta.redacted`) lub modyfikuje treść.

### Wstrzykiwanie promptów (`promptInjection.ts`)

Wykrywa wrogie struktury w treści dostarczanej przez użytkownika i egzekwuje
skonfigurowane zasady. Zachowanie zależy od zmiennych środowiskowych i opcji
konstruktora:

| Ustawienie      | Zmienna środowiskowa                                                                                 | Wartość domyślna | Efekt                                                                                                                                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Włączone        | `INPUT_SANITIZER_ENABLED`                                                                            | `true`           | Gdy `false`, mechanizm ochronny natychmiast kończy działanie.                                                                                                                                                                             |
| Tryb            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`           | Zasady dotyczące wstrzyknięć: `block`, `warn` lub `log`. (`redact` jest akceptowane dla zgodności wstecznej, ale **nie** usuwa tekstu wstrzyknięcia; modyfikowanie danych PII w żądaniu jest kontrolowane przez `PII_REDACTION_ENABLED`.) |
| Próg blokowania | opcja `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`           | Minimalny poziom ważności wymagany do zablokowania. Przy ustawieniu domyślnym poziom średni podlega wyłącznie obserwacji.                                                                                                                 |

**Kolejność pierwszeństwa trybu** (`getMode`): `options.mode` wywołującego →
**nadpisanie flagi funkcji w bazie danych** dla `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → zmienna środowiskowa `INJECTION_GUARD_MODE` → zmienna środowiskowa `INPUT_SANITIZER_MODE` →
`warn`. Nadpisanie z panelu ma zatem pierwszeństwo przed zmiennymi środowiskowymi, dzięki czemu interfejs
Feature Flags steruje działającym mechanizmem ochronnym na bieżąco (bez ponownego uruchamiania). Odczyt z bazy danych jest odporny na błędy:
jeśli wystąpi błąd, mechanizm ochronny powraca do zachowania opartego na zmiennych środowiskowych, a gdy nie
ustawiono nadpisania, zachowanie jest identyczne jak przy rozstrzyganiu wyłącznie na podstawie zmiennych środowiskowych.

Źródła wykrywania:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (współdzielony zestaw detektorów
   używany w innych miejscach potoku).
2. Wbudowane `DEFAULT_GUARD_PATTERNS` (obecnie `system_override_inline` oraz
   `markdown_system_block`, oba o poziomie ważności `high`).
3. Opcjonalne `customPatterns` przekazywane za pośrednictwem opcji konstruktora (ciągi znaków, wyrażenia regularne
   lub rekordy `{ name, pattern, severity }`).

Gdy `mode === "block"` **oraz** co najmniej jedno wykrycie spełnia próg
ważności, `preCall` zwraca `{ block: true, message: "Request rejected:
suspicious content detected" }`. W trybach `warn`/`log` mechanizm ochronny rejestruje zdarzenie, ale
zezwala na wywołanie. Współdzielona funkcja pomocnicza `evaluatePromptInjection()` jest również eksportowana
dla wywołujących, którzy muszą oceniać prompty bez korzystania z rejestru.

**Limit skanowania (v3.8.20):** detektor sprawdza tylko **pierwsze 16 KB**
połączonego tekstu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajty) w
`src/shared/utils/inputSanitizer.ts`. Zarówno `detectInjection()`, jak i
`evaluatePromptInjection()` wykonują `slice(0, MAX_INJECTION_SCAN_BYTES)` przed uruchomieniem
pętli wzorców. Dyrektywy wstrzyknięcia znajdują się zwykle w górnej części danych wejściowych, więc
ogranicza to zużycie CPU/GC przez wyrażenia regularne w przypadku ładunków o rozmiarze setek KB bez osłabiania wykrywania (por.
#3932, #4041).

### Maskowanie danych uwierzytelniających (`credentialMasker.ts`)

Działa na **obu** etapach, jako ostatni element domyślnego łańcucha (priorytet `95`). Maskuje
dobrze znane wzorce kluczy API / tajnych tokenów w wychodzącym ładunku (treść
wiadomości, argumenty wywołań narzędzi, wyniki narzędzi) **oraz** w odpowiedzi dostawcy, dzięki czemu
dane uwierzytelniające wklejone do promptu (lub zwrócone przez narzędzie) nie wyciekną
do zewnętrznego dostawcy ani z powrotem do klienta.

- **Tylko po włączeniu**, zgodnie z tą samą konwencją co redagowanie danych osobowych (w nawiązaniu do Twardej reguły nr 20):
  funkcja jest wyłączona, chyba że `settings.credentialRedactionEnabled === true` **lub**
  `CREDENTIAL_REDACTION_ENABLED=true`. Gdy jest wyłączona, mechanizm ochronny nie wykonuje żadnych działań —
  nigdy nie blokuje ani nie modyfikuje danych.
- `redactCredentials()` przechodzi przez całe drzewo ładunku/odpowiedzi (`walkValue()`,
  z zabezpieczeniem przed zanieczyszczeniem prototypu i cyklami za pomocą `WeakSet`) i zastępuje dopasowania
  symbolem zastępczym `[REDACTED:<type>]`, klonując tylko te gałęzie, które faktycznie
  uległy zmianie.
- `CREDENTIAL_PATTERNS` obejmuje klucze dostawców LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), klucze płatnicze (Stripe, Square), klucze
  chmurowe (klucz dostępu AWS, Twilio, SendGrid, Mailgun), klucze prywatne / tokeny JWT,
  ciągi połączeń zawierające dane uwierzytelniające (`mongodb://user:pass@...` itd.) oraz
  ogólny wzorzec wartości nagłówków `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Klucze mające postać nagłówków (`authorization`, `x-api-key`, `api-key`,
  `apikey`) są redagowane strukturalnie (tylko wartość, z zachowaniem prefiksu schematu, takiego jak
  `Bearer `/`Basic `), a nie za pomocą ogólnego tekstowego wyrażenia regularnego.
- Mechanizm ochronny nigdy nie blokuje; jedynie modyfikuje (`modifiedPayload` /
  `modifiedResponse`) i dodaje adnotacje (`meta.credentialsRedacted`, `meta.count`).

Test zabezpieczający przed regresją: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrakt bazowy (`base.ts`)

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
  block?: boolean; // wartość true powoduje natychmiastowe przerwanie łańcucha
  message?: string; // udostępniany w przypadku zablokowania
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // zwracany przez preCall w celu zmodyfikowania żądania
  modifiedResponse?: TValue; // zwracany przez postCall w celu zmodyfikowania odpowiedzi
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

Mechanizm zabezpieczający sygnalizuje „brak zmian”, zwracając `void`, `{}` lub
`{ block: false }`. Zwrócenie `modifiedPayload`/`modifiedResponse` zastępuje
wartość przekazywaną dalej w łańcuchu do kolejnych mechanizmów zabezpieczających.
`signal?: AbortSignal` przekazuje cykl życia wywołującego do mechanizmów zabezpieczających. Przerwanie żądania stanowi celowy wyjątek od strategii fail-open: mosty multimedialne przerywają pracę i zwalniają zasoby bez przywracania nieprzetworzonych multimediów dla celu, o którym wiadomo, że ich nie obsługuje.

## Rejestr (`registry.ts`)

Singleton `guardrailRegistry` udostępnia:

- `register(guardrail)` — dodaje (lub zastępuje według znormalizowanej nazwy) zabezpieczenie i
  ponownie sortuje według rosnącego `priority`.
- `clear()` / `list()` — pomocnicze funkcje administracyjne.
- `runPreCallHooks(payload, context)` — iteruje aktywne zabezpieczenia, przekazuje
  `payload` przez `modifiedPayload` i zatrzymuje się przy pierwszym `block: true`.
- `runPostCallHooks(response, context)` — ten sam przepływ po stronie odpowiedzi.
- `resetGuardrailsForTests({ registerDefaults })` — czyści stan i opcjonalnie
  ponownie rejestruje wartości domyślne dla czystej izolacji testów.

Oba uruchamiacze zwracają `{ blocked, payload|response, results, guardrail?, message? }`,
gdzie `results` to tablica rekordów `GuardrailExecutionResult`, które zawierają
pola `blocked`, `skipped`, `modified`, `error` i `meta` dla każdego zabezpieczenia,
przydatne do śledzenia.

### Wyłączanie zabezpieczeń na żądanie

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agreguje
zdeduplikowaną listę nazw zabezpieczeń, które powinny zostać pominięte dla bieżącego
żądania. Źródła (wszystkie opcjonalne, wszystkie połączone):

- `apiKeyInfo.disabledGuardrails`
- Treść żądania `disabledGuardrails` (najwyższy poziom)
- Treść żądania `metadata.disabledGuardrails`
- Nagłówek `x-omniroute-disabled-guardrails` (lub starszy
  `x-disabled-guardrails`)

Wartości mogą być tablicami ciągów znaków lub ciągiem znaków oddzielonych przecinkami; nazwy są
normalizowane do małych liter w formacie kebab-case (`pii_masker` → `pii-masker`). Wynik
jest przekazywany przez `context.disabledGuardrails` do rejestru, który pomija
pasujące zabezpieczenia (`skipped: true` w `results`).

## Kolejność wykonania

Dla każdego żądania przechodzącego przez `src/sse/handlers/chat.ts` oraz
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` buduje listę pomijanych elementów z klucza API, treści (body)
   oraz nagłówków.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` uruchamia mechanizmy zabezpieczające (guardrails) w rosnącym
   porządku priorytetów:
   - Wyłączone zabezpieczenia są rejestrowane jako `skipped`.
   - Metoda `preCall` każdego zabezpieczenia może przepisać ładunek (payload) za pomocą `modifiedPayload`.
   - Pierwsze wystąpienie `block: true` przerywa łańcuch, a obsługa zwraca
     odpowiedź odrzucenia przez mechanizm zabezpieczający.
3. Potencjalnie przepisywany ładunek trafia do routingu hybrydowego (combo routing) oraz
   wysyłki nadrzędnej (upstream dispatch).
4. Po skompletowaniu odpowiedzi, `guardrailRegistry.runPostCallHooks(...)`
   uruchamia ten sam łańcuch dla odpowiedzi. Wystąpienie `block: true` w tym miejscu odrzuca
   odpowiedź nadrzędną.

Zabezpieczenia, które zgłaszają błędy, są rejestrowane z wpisem `error: <message>` i logowane przez
`logger.warn`, ale łańcuch jest kontynuowany — zgodnie z założeniem o otwartości na awarię (fail-open).

## Konfiguracja

Zmienne środowiskowe odczytywane przez wbudowane mechanizmy zabezpieczające:

| Zmienna                               | Używana przez             | Efekt                                                                                                                |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Ustawienie `false` wyłącza wykrywanie całkowicie.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Polityka wstrzykiwania: `warn`, `block` lub `log`. Starsza wartość `redact` nie modyfikuje tekstu wstrzyknięcia.     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tryb dla osłony wstrzyknięć; również flaga funkcji bazy danych, która **nadpisuje** zmienne środowiskowe (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimalny poziom ważności odrzucany przez `MODE=block`: `high` (domyślnie), `medium` lub `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Starszy alias dla `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Gdy `true`, dane PII w żądaniu są maskowane (niezależnie od trybu wstrzykiwania).                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Steruje zachowaniem maskera po stronie odpowiedzi.                                                                   |

Zabezpieczenia Modality Bridge odczytują konfigurację wykonawczą z magazynu ustawień
opartego na bazie danych (`getSettings()`), a nie ze zmiennych środowiskowych. Kluczami głównymi dla wizji są
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` oraz
`modalityBridgeCacheMaxEntries`. Starsze klucze
`visionBridge*` są akceptowane tylko jako udokumentowane rozwiązanie zapasowe (fallback) odczytu na jeden cykl;
zapisy z panelu sterowania (dashboard) używają kluczy głównych. Wartości domyślne oraz moduł rozstrzygający mechanizm zapasowy znajdują się w
`src/shared/constants/modalityBridgeDefaults.ts`, a starsze stałe są zachowane w
`src/shared/constants/visionBridgeDefaults.ts`.

Audio używa ustawień `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, a także współdzielonych
ustawień `modalityBridgeCache*`. Audio nie posiada mechanizmu zapasowego dla starszych kluczy, ponieważ te
klucze zostały wprowadzone wraz ze schematem Modality Bridge.

Wideo używa ustawień `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` oraz
`modalityBridgeVideoTimeout`, a także współdzielonych ustawień `modalityBridgeCache*`.
Jest domyślnie wyłączone, ponieważ pakiety FFmpeg/ffprobe są opcjonalnymi zależnościami operacyjnymi,
a tworzenie podpisów klatek (frame captioning) zwiększa opóźnienie oraz koszt modelu.

## Niestandardowe Guardraile

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

Kroki:

1.  Utwórz `src/lib/guardrails/myGuardrail.ts` rozszerzający `BaseGuardrail`.
2.  Zaimplementuj `preCall` i/lub `postCall`.
3.  Zarejestruj podczas importu (push z `registerDefaultGuardrails`) lub
    wywołaj `guardrailRegistry.register(...)` w czasie wykonania — rejestr zastępuje
    każdy poprzedni guardrail o tej samej znormalizowanej nazwie.
4.  Dodaj testy w `tests/unit/` (istniejące przykłady:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testowanie

Użyj `resetGuardrailsForTests()` między testami, aby rozpocząć od znanego stanu.
Przekaż `{ registerDefaults: false }`, aby rozpocząć z pustym rejestrem i
zarejestrować tylko testowane guardraile. Vision Bridge akceptuje wstrzykiwanie zależności
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge udostępnia
równoważne punkty dla ustawień, możliwości, wyboru modelu STT, sprawdzania poświadczeń
i transkrypcji. Testy mogą zatem ćwiczyć oba przepływy bez dostępu do bazy danych
lub sieci.

## Zobacz także

- `src/lib/guardrails/` — implementacja
- `src/shared/utils/inputSanitizer.ts` — współdzielony detektor, który zasila
  ochronę przed wstrzykiwaniem promptów i maskowanie PII
- `src/shared/constants/visionBridgeDefaults.ts` — domyślne ustawienia Vision Bridge i
  lista modeli wymuszonego mostkowania
- `src/shared/constants/modalityBridgeDefaults.ts` — współdzielone domyślne ustawienia środowiska wykonawczego Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — warstwa ortogonalna (wyłącznik obwodu, czasy odnowienia)
- `docs/reference/ENVIRONMENT.md` — pełne odniesienie do zmiennych środowiskowych

## Pokrycie tras przez injection-guard i red-team (Faza 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) obejmuje wszystkie trasy,
które akceptują prompty użytkownika. Szanuje `INJECTION_GUARD_MODE` (domyślnie `warn` = tylko logowanie;
`block` = zwraca HTTP 400 `SECURITY_001`).

| Typ                | Trasy                                                                                                                                                | Tryb domyślny |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (istniejący) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generatywny        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Dane               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Ekstrakcja tekstu (`extractMessageContents`) obejmuje `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nocne, `nightly-llm-security.yml`):** promptfoo waliduje, że każda trasa blokuje
korpus OWASP-LLM w `INJECTION_GUARD_MODE=block`; garak uruchamia sondy (pomija bez sekretu).
`moderations` jest uwzględnione dla spójności — operatorzy w trybie blokowania mogą je wyłączyć za pomocą
`resolveDisabledGuardrails`.

Nocny workflow (`.github/workflows/nightly-llm-security.yml`, cron + ręczne
uruchamianie) ma dwa zadania:

- **`promptfoo-guard` (blokujące)** — uruchamia `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Każdy przypadek adversarialny (np. "ignoruj wszystkie
  poprzednie instrukcje...", jailbreaki w stylu DAN) potwierdza, że odpowiedź zawiera
  `error.code === "SECURITY_001"`, tzn. że guard faktycznie odrzucił żądanie.
- **`garak` (doradcze)** — uruchamia garak `--probes promptinject,dan,leakreplay`
  przeciwko lokalnej instancji OmniRoute (`http://localhost:20128/v1`). Zależne od
  sekretu dostawcy (`PROMPTFOO_PROVIDER_KEY`); pomija się elegancko i jest sufiksowane
  `|| true`, więc raportuje bez powodowania błędu CI.

Pokrycie pomocnika guard (`createInjectionGuard` / `withInjectionGuard`)
obejmuje każdą trasę `/v1` zawierającą prompt; tekst promptu jest pobierany z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` przez
`extractMessageContents()` w `src/shared/utils/inputSanitizer.ts`.
