# Guardrails (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Verbindliche Quelle:** `src/lib/guardrails/`
> **Zuletzt aktualisiert:** 2026-08-29 — v3.8.51 (Die Herkunft des Video-Bridge-Transkripts wird vom Aufrufer deklariert,
> aber noch nicht serverseitig verifiziert — gemäß #11661 klargestellt)

Guardrails erzwingen Sicherheitsvorgaben, Richtlinien und Inhaltstransformationen an der Grenze
zwischen OmniRoute und vorgelagerten Anbietern. Jede Guardrail kann Anfrage-Payloads (`preCall`) und
Antworten vorgelagerter Anbieter (`postCall`) prüfen (und optional ablehnen, transformieren oder
mit Anmerkungen versehen).

Das System ist **fehlertolerant (Fail-open)**: Löst eine Guardrail während der Ausführung einen Fehler aus,
zeichnet die Registry den Fehler auf und fährt mit der nächsten Guardrail fort, anstatt die
Anfrage fehlschlagen zu lassen. Das Blockieren ist stets eine explizite Entscheidung (`block: true`)
und niemals ein Versehen.

## Integrierte Schutzmechanismen

Die Registry lädt beim Import automatisch sechs Schutzmechanismen in Prioritätsreihenfolge
(siehe `registry.ts` → `registerDefaultGuardrails()`):

| Priorität | Name                | Phase(n)       | Datei                 |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niedrigere Prioritätswerte werden **zuerst** ausgeführt.

### Vision Bridge (`visionBridge.ts`) — Modalitäts-Bridge PR-1

Fängt Anfragen mit Bildern ab, die an **Modelle ohne Vision-Unterstützung** gerichtet sind, und leitet entweder
die gesamte Anfrage an ein visionsfähiges Modell um oder ersetzt die Bildbestandteile
vor dem Upstream-Aufruf durch Textbeschreibungen, die von einem konfigurierbaren Vision-Modell erzeugt wurden.
Dadurch können reine Textanbieter multimodale Payloads transparent verarbeiten.

Ablauf:

1. Überspringen, wenn das Zielmodell bereits Vision unterstützt (außer es ist in der
   Liste für erzwungenes Bridging `isVisionBridgeForcedModel` enthalten).
2. Bildbestandteile über `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) extrahieren. Diese Funktion delegiert an den **vereinheitlichten Medien-
   Detektor** `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — die
   zentrale, gemeinsam mit dem Combo-Kompatibilitätsfilter verwendete Quelle.
   Die Extraktion ist per Positivliste auf Bestandteile der obersten Ebene mit den Formen beschränkt,
   die `replaceImageParts` wieder einsetzen kann (der Extrahieren↔Ersetzen-Vertrag): OpenAI
   `image_url`, Anthropic-Base64 `source.type:"base64"`, Anthropic-URL
   `source.type:"url"` und Responses API `input_image`. Verschachtelte Treffer und
   reine Indikatorformen sind für den Combo-Filter bestimmt und werden niemals extrahiert.
   Überspringen, wenn keine gefunden wurden.
3. Laufzeitkonfiguration über `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) auflösen: Neue `modalityBridge*`-
   Einstellungsschlüssel haben Vorrang; ältere `visionBridge*`-Schlüssel bleiben für **einen Zyklus
   als Fallback** erhalten (Rollback-Fenster). Vor jeder Mediendurchsuchung überspringen, wenn die
   Bridge deaktiviert ist.
4. Der Modus-Selektor (`modalityBridgeVisionMode`, siehe Tabelle unten) entscheidet
   zwischen Umleitung und Beschreibung. Bei einer Umleitung wird `modifiedPayload` zurückgegeben, wobei nur
   `model` ausgetauscht wird, ergänzt um die Metadaten `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beschreibungspfad: Die Anzahl der Bilder auf `maxImages` begrenzen, den aufgabenspezifischen Prompt
   zusammenstellen, den Beschreibungs-Cache abfragen, das Vision-Modell **parallel**
   aufrufen (`Promise.allSettled`) und an ihrer Stelle Textbestandteile im Format
   `[Image N]: <description>` einfügen. Eine fehlgeschlagene Beschreibung ergibt `null`, und der ursprüngliche
   Bildbestandteil bleibt **erhalten** (#4012) — außer im Combo-Beschreibungspfad, wenn alle
   Beschreibungen fehlgeschlagen sind. In diesem Fall erhält ein bestätigt nicht visionsfähiger Upstream
   stattdessen einen Platzhalter `(unavailable — no vision-capable provider connected)` (#8430).
6. `modifiedPayload` und Metadaten zurückgeben (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modus-Selektor (`modalityBridgeVisionMode`)

| Modus      | Standard | Verhalten                                                                                                                                                                                                                                                                                                                                     |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Unveränderte bisherige Heuristik (#6640/#7204): Nicht-Combo-/`auto/`-Modelle werden an das beste Vision-Modell umgeleitet, sofern das ursprüngliche Modell nicht bereits über verwendbare Zugangsdaten verfügt (dann wird beschrieben); Combo-Ziele verwenden immer die Beschreibung.                                                         |
| `describe` |          | Immer beschreiben — der Umleitungsblock wird vollständig übersprungen; das vom Benutzer gewählte Modell antwortet immer.                                                                                                                                                                                                                      |
| `reroute`  |          | Umleitung erzwingen: Die Schutzprüfung zum Beibehalten eines Modells mit Zugangsdaten wird umgangen. Die Zugangsdatenprüfung für das Umleitungs-**ziel** gilt weiterhin — wenn kein verwendbares Vision-Ziel vorhanden ist, fällt die Anfrage auf die Beschreibung zurück, damit Rohbilder niemals ein reines Text-Backend erreichen (#8430). |

Erzwungene Modi beenden die Verarbeitung frühzeitig, **bevor** die automatische Heuristik ausgeführt wird; das Verhalten von `auto`
ist Byte für Byte identisch mit dem Schutzmechanismus vor PR-1.

#### API-Schlüssel-Geltungsbereich (`visionBridgeKeyScope.ts`)

Wenn der API-Schlüssel des Aufrufers `allowedConnections`, Kontingentpools
(`allowedQuotas`) oder Modelle (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) einschränkt, wählt die Bridge nur
Umleitungs- und Beschreibungsmodelle aus, die der Schlüssel verwenden darf, und zwar über Verbindungen, die der Schlüssel
verwenden darf. Der Beschreibungsaufruf erfolgt anschließend immer über die OmniRoute-Selbstschleife mit
dem Header `x-omniroute-self-loop-key-id`, sodass die empfangende Chat-Anfrage
die Verbindungs- und Modellrichtlinie dieses Schlüssels erneut durchsetzt. `enforceApiKeyPolicy()`
berücksichtigt diesen Header nur zusammen mit dem Selbstschleifen-Bearer, sodass er den Zugriff ausschließlich
einschränken kann; eine ID, die nicht aufgelöst werden kann, wird abgelehnt.

Wenn für den Schlüssel kein Vision-Modell zulässig ist, greift der Beschreibungspfad nicht ein und
die Anfrage wird unverändert weitergeleitet. Dies entspricht demselben Fail-open-Verhalten wie bei einem deaktivierten
Schutzmechanismus (Metadaten `{ skipped: true, reason: "no_permitted_vision_model" }`).
Anfragen ohne Schlüssel und Schlüssel ohne diese Einschränkungen verhalten sich genauso wie
zuvor.

#### Aufgabenspezifischer Beschreibungs-Prompt (`modalityBridgeVisionTaskAware`)

Standardwert **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hängt
den Text der **letzten Benutzernachricht** (auf 500 Zeichen gekürzt) an den
Basis-Describe-Prompt an. Dadurch wird die Beschreibung auf das ausgerichtet,
wonach der Benutzer tatsächlich gefragt hat (Codex-Vision-Proxy-Muster), und
das Vision-Modell wird aufgefordert, sichtbaren Text zu transkribieren. Bei
deaktiviertem Flag — oder wenn kein Benutzertext vorhanden ist — wird der
Basis-Prompt unverändert verwendet.

Die eigene OpenAI-kompatible Anfrage des Describe-Self-Loops (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) fordert immer `image_url.detail: "high"` an —
bedingungslos, für jeden Aufrufer/Provider und unabhängig von jeglichem
Client-Signal. Sampling mit niedriger Detailstufe verschlechtert die
OCR-Genauigkeit gerade bei der Texttranskriptionsaufgabe, die dieser Prompt
anfordert. Daher fordert der Describe-Aufruf selbst immer eine hohe
Detailstufe an, unabhängig davon, welche Detailstufe die ursprüngliche
eingehende Anfrage verwendet hat. Dies wirkt sich nur auf den internen
Anfrage-Body des Describe-Aufrufs aus; es ändert nicht, wie OmniRoute den
eigenen `image_url.detail`-Wert des Aufrufers in der primären Anfrage
weiterleitet — dieser Standardwert wird separat und nur für erkannte
OpenCode-Clients in `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`) angewendet. Der
Anthropic-Wire-Format-Zweig des Describe-Self-Loops besitzt kein `detail`-Feld
und wird von keinem der beiden Standardwerte beeinflusst.

#### Ausgabelimit für Describe (`modalityBridgeVisionMaxChars`)

| Schlüssel                      | Standardwert | Bereich            |
| ------------------------------ | ------------ | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`          | `0` oder 100–50000 |

`0` (Standardwert) bedeutet **kein Limit** — die von `callVisionModel()`
zurückgegebene Beschreibung wird unverändert weitergereicht, wodurch das
bestehende Verhalten erhalten bleibt. Jeder Wert im Bereich 100–50000 kürzt
die Beschreibung mit einem `…`-Suffix, bevor sie als
`[Image N]: <description>` wieder eingefügt wird
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Erhöhen Sie diesen Wert für detailreiche OCR-Aufgaben, bei denen das
nachgelagerte Modell die vollständige Transkription benötigt; verringern Sie
ihn, um die Token-Nutzung bei besonders ausführlichen Vision-Modellen zu
begrenzen. Das Dashboard-Feld befindet sich im Bereich „Erweitert“ des
Vision-Tabs (`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) und
hebt jeden Wert zwischen 1 und 99 auf den Mindestwert 100 an, während ein
expliziter Wert `0` unverändert bleibt — `0` ist ein eigenständiger gültiger
Zod-Wert
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`) und nicht nur
der Standardwert für „nicht festgelegt“.

#### Describe-Cache (`modalityBridge/bridgeCache.ts`)

Prozessweit gemeinsam genutzter In-Memory-LRU- und TTL-Cache für
Describe-Ausgaben. Schlüssel =
`sha256(imageRef + composedPrompt + configuredBridgeModel)` mit
längenpräfixiertem Framing (keine Kollisionen an Feldgrenzen). Die
Modellkomponente ist das **konfigurierte** Bridge-Modell, nicht das Modell, das
tatsächlich geantwortet hat — `callVisionModel` kann intern auf ein
Fallback-Modell ausweichen, und eine Schlüsselbildung pro Versuch würde den
Cache fragmentieren. Fehlgeschlagene Describe-Aufrufe werden niemals
zwischengespeichert. Einstellungen:

| Schlüssel                       | Standardwert | Bereich |
| ------------------------------- | ------------ | ------- |
| `modalityBridgeCacheEnabled`    | `true`       | —       |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000 |

#### Normalisierung entfernter Bilder (Self-Loop-Describe/Base64-Abruf)

Wenn die Bridge selbst ein **entferntes** Bild abruft — beim
Anthropic-Describe-Self-Call und bei der Base64-Konvertierung für das
Claude-Wire-Format (`ensureBase64ImagesForClaudeWire`), beide über
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — wird die daraus
resultierende Daten-URI durch `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) verarbeitet, bevor sie in die Anfrage an
das Vision-Modell eingebettet wird. Übergroße Bilder werden auf eine
**lange Kante von 2048px** herunterskaliert (entsprechend dem
Größenlimit, das OpenAI/Anthropic bereits serverseitig anwenden), wodurch
Upload-Datenmenge und Latenz reduziert werden, ohne zu ändern, was das
Vision-Modell sieht. Für die Größenänderung wird `sharp` verwendet, das per
dynamischem Import geladen wird: Auf einer Plattform, auf der dessen native
Binärdatei nicht geladen werden kann, löst `normalizeDataUri()` **niemals eine
Ausnahme aus** — stattdessen werden die ursprünglichen Bytes unverändert
durchgereicht, sodass der Describe-/Base64-Konvertierungspfad stets
funktionsfähig bleibt. Bytes, die kein Bild darstellen (wenn ein Abruf kein
dekodierbares Bild zurückgegeben hat), werden ebenfalls unverändert
durchgereicht. Diese Normalisierung ist auf Bilder beschränkt, welche die
Bridge für ihren eigenen Self-Call abruft — sie wird niemals auf die
unveränderte Passthrough-Nutzlast des Aufrufers angewendet, im Einklang mit
dem Prinzip, dass Änderungen ausschließlich nach expliziter Aktivierung
erfolgen (Harte Regel #20).

#### Einstellungsschema + Migration

Die neuen `modalityBridge*`-Schlüssel werden in `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) mit Zod validiert:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, das
`modalityBridgeCache*`-Trio und die vom Audio Bridge verwendete
`modalityBridgeAudio*`-Gruppe. Die Migration
`141_modality_bridge_settings.sql` kopiert vorhandene veraltete
`visionBridge*`-Werte in die entsprechenden neuen Schlüssel (idempotent und
ohne jemals einen vom Betreiber festgelegten `modalityBridge*`-Wert zu
überschreiben); die veralteten Schlüssel bleiben für einen Release-Zyklus als
Lese-Fallback zulässig.

#### Transparenz-Header + Statistiken

Durch Describe transformierte Antworten enthalten
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(erstellt von `buildModalityBridgeHeader()` in
`modalityBridge/bridgeStats.ts`, gesetzt von
`withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Umgeleitete Anfragen erhalten **keinen** Header — die Nutzlast wurde nicht
verändert, und der Modellwechsel ist bereits im Feld `model` des
Antwort-Bodys sichtbar.

`GET /api/modality-bridge/stats` (Management-Authentifizierung, dieselbe Stufe wie
`GET /api/settings`) gibt die speicherinternen Zähler pro Modalität
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` für `vision`, `audio` und
`video` zurück. `averageLatencyMs` verwendet `latencySamples` und nicht alle Versuche
als Nenner; ein Vorgang ohne Zeitmessung erzeugt nicht künstlich einen
Null-Millisekunden-Messwert. `bridged` bleibt der abwärtskompatible Alias für erfolgreiche
Konvertierungen; fehlgeschlagene Versuche erhöhen diesen Zähler nicht.
Die Zähler werden beim Neustart des Prozesses absichtlich zurückgesetzt
(Telemetrie, keine Abrechnung).

#### Dashboard-Konfiguration

Die dedizierte Dashboard-Seite befindet sich unter
`/dashboard/settings/modality-bridge`. Ihre über die URL adressierbaren Registerkarten `Vision`, `Audio`
und `Video` behalten beim Wechsel des `tab`-Werts die Abfrageparameter bei.
Die Registerkarte „Vision“ bietet Aktivierung, Modus, Modellauswahl (einschließlich des automatischen
Standardwerts), aufgabenbezogene Prompts, erweiterte Grenzwerte für Zeitüberschreitung, Bild,
Beschreibungslänge und Cache, Laufzeitzähler sowie eine abgesicherte Beispielanfrage.
Die Registerkarte „Audio“ ist ebenfalls aktiv: Sie bietet Aktivierung, eine ausschließlich auf STT
beschränkte Modellauswahl mit automatischer Auswahl, Grenzwerte für Zeitüberschreitung und maximale
Cliplänge, Audiozähler sowie einen `input_audio`-Beispieltest. Die Registerkarte „Video“ ist
funktionsfähig: Sie meldet den Laufzeitstatus von FFmpeg/ffprobe — einen von vier expliziten
UI-Zuständen (`unknown`, während die Prüfung läuft oder nicht abgeschlossen werden konnte,
`restricted` auf einem Nicht-Loopback-Dashboard-Host, auf dem die Prüfung clientseitig übersprungen
wird, `unavailable`, nachdem die Prüfung abgeschlossen und das Fehlen bestätigt wurde, oder
`available` mit den FFmpeg-/ffprobe-Versionen) —, speichert Grenzwerte für Aktivierung, Modell,
Frames, Video und Zeitüberschreitung, filtert die Modellauswahl auf visionsfähige Modelle und
zeigt Videozähler an.

Die frühere Vision-Bridge-Karte unter den KI-Einstellungen ist ein Kompatibilitätslink zur
neuen Seite; sie enthält keine zweite Kopie des Formulars mehr. „Media Providers“ verknüpft
außerdem die Workflows „Image-to-Text“ und „Speech-to-Text“ mit den entsprechenden
Modality-Bridge-Registerkarten, ohne den bestehenden Speech-to-Text-Playground zu entfernen.

**Umgehung der Self-Loop-Zulassungsprüfung:** Wenn der Beschreibungsaufruf über OmniRoutes
eigenen `/v1`-Self-Loop geleitet wird (Modell eines nicht standardmäßigen Providers), sendet
die Unteranfrage `x-omniroute-admission-bypass: internal` und wird mit den ermittelten
Self-Loop-Anmeldedaten authentifiziert — dem lokalen `sk_omniroute`-Sentinel im lokalen Modus
oder dem vom Betreiber konfigurierten Umgebungsschlüssel `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` (#1350), damit Bereitstellungen mit `REQUIRE_API_KEY=true` den
Beschreibungsaufruf weiterhin ausführen können. Die Umgehung wird nur für exakt diese
Anmeldedaten akzeptiert, sodass externe Clients den Header nicht zum Überspringen der
Zulassungsprüfung verwenden können.

Die veralteten Standardwerte befinden sich in `src/shared/constants/visionBridgeDefaults.ts`;
die neuen Standardwerte für Modus, Aufgabenbezug und Cache sowie der Einstellungs-Resolver
befinden sich in `src/shared/constants/modalityBridgeDefaults.ts`. Der Guardrail stellt eine
`deps`-Konstruktoroption bereit, damit Tests simulierte Implementierungen von `getSettings`
und `callVisionModel` injizieren können.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fängt Chat-Anfragen mit Audioinhalten ab, bevor sie ein Ziel erreichen, von dem nicht bekannt
ist, dass es Audioeingaben akzeptiert. Die Chat-Anfrage wird niemals umgeleitet: Audioteile
werden über den bestehenden OpenAI-kompatiblen Multipart-Endpunkt transkribiert, und das
ausgewählte Chatmodell arbeitet anschließend mit Texttranskripten weiter.

Ablauf:

1. `supportsAudio` über `getResolvedModelCapabilities()` ermitteln. Explizite
   Metadaten aus der Provider-Registry haben Vorrang, danach statische Modellmetadaten und
   anschließend synchronisierte `modalities_input`. Eine deklarierte Eingabeliste ohne
   `audio` ergibt `false`; wenn keine Hinweise auf Fähigkeiten vorhanden sind, bleibt der
   Wert `null`. Sowohl `false` als auch `null` aktivieren die konservative Bridge, während
   `true` sie umgeht.
2. Die `modalityBridgeAudio*`-Einstellungen ermitteln und mit dem gemeinsamen
   `detectMediaParts()`-Detektor ausschneidbare Audioteile der obersten Ebene aus jeder
   Nachricht extrahieren. Unterstützte Übertragungsformate sind OpenAI-`input_audio`,
   `audio_url` und `source.media_type: "audio/*"`. Verschachteltes Audio wird für das Routing
   erkannt, aber nicht über den Ausschneidepfad entfernt. Die Verarbeitung wird durch
   `modalityBridgeAudioMaxClips` begrenzt; spätere Teile bleiben unverändert.
3. Ein konfiguriertes `provider/model` berücksichtigen oder `selectAudioBridgeModel()`
   `AUDIO_TRANSCRIPTION_PROVIDERS` in stabiler Katalogreihenfolge durchlaufen und das erste
   Modell mit verwendbaren aktiven Provider-Anmeldedaten auswählen lassen.
4. `callAudioTranscription()` konvertiert Base64-/Daten-URI-Audio in eine Multipart-`file`
   oder lädt eine entfernte `audio_url` über den ausschließlich öffentliche Ziele erlaubenden
   Outbound-Guard mit DNS-Pinning und einer Begrenzung auf 25 MB herunter. Anschließend werden
   die Datei und das ausgewählte Modell per POST an den lokalen
   `/v1/audio/transcriptions`-Self-Loop gesendet und mit `resolveSelfLoopBearer()`
   authentifiziert. Die bestehende Transkriptionsroute übernimmt die normale Suche nach
   Anmeldedaten, die Behandlung von Abklingzeiten und Ratenbegrenzungen sowie die
   Provider-Weiterleitung.
5. Erfolgreiche Aufrufe ersetzen ihre Teile durch `[Audio N]: <transcript>`. Die Aufrufe
   werden mit `Promise.allSettled` ausgeführt: Ein einzelner Fehler erhält den ursprünglichen
   Audioteil (Vertrag #4012). Wenn alle Aufrufe fehlschlagen und für das Ziel nachgewiesen ist,
   dass `supportsAudio === false` gilt, werden die Teile zu
   `[Audio N]: (unavailable — no STT provider connected)` (Vertrag #8430). Bei einem
   unbekannten Ziel (`null`) bleibt das Ergebnis bei einem vollständigen Fehlschlag
   unverändert. Ein nachweislich ausschließlich textbasiertes Ziel ohne verwendbare
   STT-Anmeldedaten erhält denselben expliziten Platzhalter, ohne dass ein Netzwerkaufruf
   erfolgt.

Erfolgreiche Transkripte verwenden den prozessweiten LRU-/TTL-Cache der Modality Bridge.
Der Schlüssel kombiniert die Audioreferenz, die stabile Vorgangsbezeichnung
`audio-transcription` und das ausgewählte STT-Modell; Fehler werden niemals zwischengespeichert.
Audioversuche aktualisieren die gemeinsamen Zähler `bridged`, `cacheHits`, `failures` und
`lastUsedAt`. Transformierte Antworten enthalten
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; unveränderte
Anfragen erhalten kein Audio-Bridge-Segment.

Die Laufzeiteinstellungen sind datenbankgestützt und werden mit Zod validiert:

| Schlüssel                     | Standardwert | Bereich                 |
| ----------------------------- | ------------ | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                       |
| `modalityBridgeAudioModel`    | `""`         | Automatisch oder STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                    |

Der gemeinsame Cache wird weiterhin durch `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` und `modalityBridgeCacheMaxEntries` gesteuert.

### Video-Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fängt Videoelemente der obersten Ebene in `messages` von Chat Completions und
in `input` der Responses API ab, bevor ein Ziel aufgerufen wird, für das keine
native Videounterstützung bekannt ist. Unterstützte Formen sind `input_video`,
`video_url`, `video_source`, HTTPS-URLs und
`data:video/*;base64,...`-Daten-URIs. Einfache Dateinamen in Text werden nicht
als Video behandelt.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ist für das Durchlaufen der
Anfrage, die Funktions-/Richtlinienprüfung, die Aggregation pro Anfrage und die
Antwortnutzlast zuständig. Die Verarbeitung pro Video – Abruf, Cache für das
Gesamtergebnis, Beschreibung einer Frame-Sequenz (wobei ein vom Aufrufer
angegebenes Audiotranskript zusammengeführt wird) sowie Metriken,
Abbruchbehandlung und Bereinigung pro Versuch – ist hinter `processVideoPart`
in `videoBridgePipeline.ts` verborgen, das innerhalb der Schleife von `preCall`
einmal pro Videoelement aufgerufen wird. Dieses Modul definiert außerdem die
expliziten Portgrenzen `VideoMediaBrokerPort` (Abrufen von Bytes und Extrahieren
abgetasteter Frames), `VideoAudioTranscriptionPort` (Zusammenführen eines vom
Aufrufer angegebenen Audiotranskripts mit den abgetasteten Beschriftungen) und
`VideoDrilldownPort` (Persistenzgrenze für Frame-Drilldowns; noch nicht mit
`processVideoPart` verbunden – derzeit schreibt nur die separate Route
`/api/modality-bridge/video/drilldown` Drilldown-Einträge).

Der öffentliche `/v1`-Anfragepfad importiert oder startet niemals einen
Unterprozess. Remote-Videos werden unter Einhaltung einer Obergrenze von 50 MiB
heruntergeladen; eingebettete Base64-Videos unterliegen einer konservativen
Obergrenze von 36 MiB decodierter Daten pro Video, damit die Hülle aus
Modellnachrichten und Framing innerhalb der öffentlichen JSON-Zulassungsgrenze
von 50 MiB bleiben kann. Eingebettete Länge und Schätzungen der decodierten
Größe werden vor der Speicherzuweisung geprüft. Für die anfängliche Remote-URL
und jede Weiterleitung ist HTTPS erforderlich, wobei die vorhandene
Outbound-Schutzvorrichtung ausschließlich für öffentliche Ziele mit
DNS-Pinning verwendet wird. Anschließend überschreiten die Bytes exakt die
interne Brokergrenze `POST /api/modality-bridge/video/extract`. Diese Route ist
sowohl `LOCAL_ONLY` als auch `SPAWN_CAPABLE`, akzeptiert ausschließlich eine
prozessintern authentifizierte Anfrage über eine vertrauenswürdige
Loopback-Verbindung und akzeptiert niemals eine URL, einen Dateisystempfad,
eine ausführbare Datei oder eine Argumentliste. Die Pipeline für die
API-Bodygröße und der inkrementelle Body-Reader des Handlers erzwingen
unabhängig voneinander eine Obergrenze von 50 MiB für Broker-Eingaben. Die
begrenzte Warteschlange führt jeweils eine Extraktion aus, lässt vier
ausstehende Aufträge zu und begrenzt ausstehende Eingabedaten auf 100 MiB.

Innerhalb des Brokers liest `ffprobe` eine private lokale Datei; die feste
Format-Positivliste schließt Wiedergabelisten- und Manifestformate aus. Bei
zulässigen Containern der MOV-Familie bleiben externe MOV-Datenreferenzen
standardmäßig deaktiviert, und der feste Befehl aktiviert sie nicht. Sowohl
`ffprobe` als auch `ffmpeg` verwenden die ausschließlich auf `file` beschränkte
Protokoll-Positivliste, einen Thread, feste Argument-Arrays, keine Shell und
über `PATH` aufgelöste ausführbare Dateien. Cover-Streams mit angehängten
Bildern sind keine abspielbaren Kandidaten. Alle abspielbaren Streams müssen
die Grenzwerte einhalten, und ein expliziter Standardstream wird vor dem
deterministischen Fallback auf den niedrigsten Index bevorzugt. Videos sind
auf 600 Sekunden, 8.192 Pixel pro Dimension und 33.554.432 Quellpixel begrenzt.
FFmpeg tastet 1–16 JPEG-Frames an den Mittelpunkten ab, skaliert die lange Kante
ohne Hochskalierung kleinerer Eingaben auf höchstens 1.024 Pixel herunter und
erhält niemals eine URL. Standardmäßig erfolgt die Abtastung mit `uniform`. Die
optionalen Richtlinien `scene_aware` und das experimentelle `segment_aware`
führen einen zusätzlichen festen FFmpeg-Durchlauf über den bereits validierten
lokalen Stream aus, wählen eine begrenzte Anzahl von
`showinfo`-Szenenzeitstempeln aus und greifen bei einem Detektorfehler, einer
Zeitüberschreitung, fehlerhafter Ausgabe oder einer leeren Kandidatenmenge
deterministisch auf dieselben gleichmäßig verteilten Mittelpunkte zurück. Im
segmentbewussten Modus werden Mittelpunkt-Abtastungen proportional zu den
validierten Szenenintervallen zugewiesen; segmentbewusste Nachweise und das
Fallback-Verhalten werden weiter unten beschrieben. Die feste Obergrenze von
16 Frames wird bei jeder Richtlinie nach der Auswahl angewendet. Wenn eine
szenenbewusste Anfrage nur ein Budget von einem Frame hat, verwendet sie den
gleichmäßig verteilten Mittelpunkt des aktiven Gesamtvideo- oder Fokusfensters
und meldet `policyEffective: uniform`: Ein einzelner ausgewählter Szenen-Frame
kann nicht beide zeitlichen Endpunkte bewahren. Ein Aufrufer kann optional ein
endliches Fokusfenster (`start`/`end` in Sekunden) angeben; die Grenzen werden
auf die Mediendauer beschränkt, umgekehrte oder nicht endliche Fenster werden
abgelehnt und alle Abtastrichtlinien werden ausschließlich innerhalb des
normalisierten Intervalls ausgeführt. Das resultierende Fenster wird in die
Abtastmetadaten und in das nicht vertrauenswürdige Beschreibungspräfix
aufgenommen, damit nachgelagerte Modelle einen fokussierten Ausschnitt von der
gesamten Zeitleiste unterscheiden können.

Der semantische Beschriftungsfokus ist eine separate, explizite Einstellung.
Der standardmäßige Analysemodus `full` behält die vorhandene Frame-Eingabe bei
und leitet niemals Anfragetext an das Beschriftungsmodell weiter. Im Modus
`focused` liest die Bridge ausschließlich den neuesten nicht leeren, vom
Benutzer verfassten `text`/`input_text` aus demselben Chat- oder
Responses-Container, normalisiert ihn auf NFC, fasst Steuerzeichen und
Leerraum zusammen und begrenzt ihn auf 500 Unicode-Codepunkte. Ein leeres
Ergebnis führt zu einem Fallback auf die exakte `full`-Eingabe. Ein
verwendbarer Hinweis wird als JSON in einem dedizierten Block für nicht
vertrauenswürdigen Benutzerkontext serialisiert und darf nur beobachtbare
Details priorisieren; er kann die separate Warnung, in den Medien sichtbaren
oder hörbaren Anweisungen nicht zu folgen, nicht außer Kraft setzen. Der
textuelle Fokus leitet niemals `start`/`end` ab und ändert den zeitlichen
Sampler nicht.

#### FU-07 Strukturelle Segmentnachweise

`segment_aware` verwendet einen einzigen begrenzten Voranalysedurchlauf über den bereits validierten
lokalen Videostream. Die feste Filterkette skaliert zunächst auf eine Breite von
höchstens 320 Pixeln, erkennt Szenenwechsel und eingefrorene Intervalle und
nimmt anschließend mit 1 Bild pro Sekunde Stichproben für Unschärfe, mittlere
Luminanz sowie räumliche/zeitliche Informationen. Der Durchlauf ist auf 600
strukturelle Stichproben, einen FFmpeg-/Filter-Thread, dieselben Positivlisten
für das ausschließlich zugelassene `file`-Protokoll und Container, eine
Prozessausgabe von höchstens 1 MiB sowie maximal 30 Sekunden innerhalb des
gemeinsamen Abbruch-/Fristmechanismus des Brokers begrenzt. Er übernimmt niemals
einen Befehl, Filter, Pfad oder eine URL aus der Anfrage.

Die strukturellen Werte sind deterministische Stichprobenbelege und kein
semantisches Videoverständnis. Aus ihnen werden weder Subjekte, Handlungen,
Untertitel, Sprache noch Benutzerabsichten abgeleitet. Szenen- und
Standbildgrenzen bilden Segmente; Standbildabdeckung, Unschärfe, Belichtung,
räumliche Details und zeitliche Veränderungen beeinflussen lediglich, wie das
bestehende Budget von 1–16 Bildern zugewiesen wird. Ein vollständig eingefrorenes
Segment ist auf ein Bild begrenzt, während nicht eingefrorene Segmente um das
verbleibende Budget konkurrieren. Wenn es mehr Grenzen als Bilder gibt, wird
eine gleichmäßige Abdeckung der Zeitleiste beibehalten, sodass schnelle frühe
Schnitte ein langes abschließendes Segment nicht verbergen können. Szenengrenzen,
die innerhalb der Analyseauflösung von 1 Sekunde um eine Standbildgrenze liegen,
werden zusammengeführt.

Fehlende Filter, fehlerhafte/leere Belege, ein Detektorfehler oder das
Zeitlimit der begrenzten Voranalyse führen im Sinne von Fail-open zur exakt
gleichmäßigen Mittelpunktstrategie. Ein Abbruch durch den Aufrufer oder das
Erreichen der Broker-Frist führt nicht zu Fail-open: Der laufende Unterprozess
wird beendet, eine spätere Bildextraktion wird verhindert und der private
temporäre Verzeichnisbaum wird in `finally` entfernt.

`scripts/perf/video-bridge-fu07-eval.ts` erzeugt deterministische, reale
FFmpeg-Testdaten für Einsparungen bei Untertitelaufrufen nach der Deduplizierung,
die Budgetzuweisung bei dichter Bewegung, Unschärfe-/Belichtungs-/SI-TI-Belege,
schnelle Schnitte mit einem langen Nachlauf und Fehlalarme bei allmählichen
Überblendungen. Das Skript erfasst die verstrichene Zeit der Voranalyse und,
sofern `/usr/bin/time` verfügbar ist, die CPU-Zeit des Kindprozesses sowie den
maximalen RSS-Speicherverbrauch. Seine Qualitätsprüfungen sind ausschließlich
strukturelle Orakel. Die Qualität realer Untertitelmodelle bleibt auf `HOLD`,
da dieses Testsystem weder über einen autorisierten Endpunkt noch über einen
eingefrorenen Beurteiler verfügt. Monetäre Einsparungen bleiben ebenfalls auf
`HOLD`, sofern `--caption-cost-per-call-usd` keine explizite positive
Kostenschätzung pro Aufruf angibt; das Skript erfindet keines dieser Ergebnisse.

Jedes Bild ist auf 4 MiB, alle Rohbilder zusammen auf 23 MiB und die
serialisierte Broker-Antwort auf 32 MiB begrenzt. Ein privates temporäres
Verzeichnis wird in `finally` entfernt. OmniRoute enthält FFmpeg nicht und
akzeptiert keinen benutzerdefinierten Pfad zur ausführbaren Datei. Vor der
Untertitelung wendet die Bridge einen konservativen Durchlauf zur visuellen
Deduplizierung an: Jedes JPEG wird auf einen 16×16-Graustufenpuffer reduziert
und nur mit dem zuletzt beibehaltenen Bild verglichen. Bei einem angeforderten
Untertitelbudget von mehr als einem Bild stellt die Extraktion einen begrenzten
Kandidatenpool bereit, der höchstens doppelt so groß wie dieses Budget ist und
nie mehr als 16 Bilder umfasst. Die angeforderte Obergrenze wird erst nach der
Deduplizierung angewendet, wobei bei einem Budget von mindestens zwei der erste
und der letzte ausgewählte Kandidat während der abschließenden Ausdünnung
erhalten bleiben. Die versionierte Richtlinie
`grayscale-16x16-mean-cells-v2` verwendet den größeren Wert aus der mittleren
Luminanzdifferenz und dem Anteil der Vorschaubildzellen, deren normalisierte
Differenz mindestens 0.05 beträgt. Der Duplikatschwellenwert ist die Konstante
0.04, die zugunsten der Vorhersagbarkeit gewählt und nicht als
Laufzeiteinstellung offengelegt wird. Dieses sekundäre, kontrastreiche Signal
bewahrt kleine Bewegungen und Änderungen sichtbaren Texts, die ein ausschließlich
auf Mittelwerten beruhender Vergleich verbergen kann. Komparator- oder
Decoderfehler führen zu Fail-open und erhalten die Abdeckung. Die
Ausgabemetadaten unterscheiden zwischen extrahierten Kandidaten, erfolgreich
verwendeten Bildern und verworfenen visuellen Duplikaten.

Ein ausdrücklich als Video gekennzeichneter Teil kann einen mit Zeitstempeln
versehenen Kontaktbogen anfordern. Die Bridge erstellt ein JPEG-Raster mit
höchstens 4 Spalten und 16 Bildern. Jede 512-Pixel-Zelle brennt den Zeitstempel
ihrer Quelle in ein kontrastreiches unteres Band ein, während dieselben
Zeitstempel zur nachgelagerten Zuordnung und Prüfung in den Textmetadaten
verbleiben. Das vollständige JPEG bleibt auf 32 MiB begrenzt. Wenn `sharp` das
Raster nicht decodieren oder zusammensetzen kann, greift die Bridge auf die
einzelnen JPEG-Bilder zurück; ein Clientabbruch wird weiterhin durch die
Kontaktbogenoperation weitergegeben.

Nachweise für eine Hochstufung sind bewusst vom synthetischen
Zusammensetzungs-Mikrobenchmark getrennt. `scripts/perf/video-bridge-contact-sheet-eval.ts`
definiert ein schemaversioniertes A/B-Testsystem für reale
OpenAI-kompatible Vision-Modelle. Es misst die vom Anbieter gemeldeten Token,
die End-to-End-Latenz (einschließlich der Kontaktbogenzusammensetzung), die
Anzahl der Modellaufrufe und die Beibehaltung der im Manifest definierten
Fakten. Rohantworten des Modells werden nicht in den Bericht geschrieben;
gespeichert werden lediglich SHA-256-Digests und IDs übereinstimmender Fakten.
Das Testsystem führt weder einen Netzwerk- noch einen kostenpflichtigen
Modellaufruf aus, sofern nicht `--execute-real` übergeben wurde und `--model`,
`OMNIROUTE_BASE_URL` sowie `OMNIROUTE_API_KEY` konfiguriert sind. Ohne diesen
ausdrücklich realen Durchlauf bleibt sein maschinenlesbares Urteil auf `HOLD`;
synthetische Messungen der Nutzdaten bzw. Aufrufanzahl allein sind kein Nachweis
für eine Hochstufung.

Aufrufer können einem unterstützten Videoteil optional ein
`transcript.cues`-Array hinzufügen, wenn ihnen bereits zeitlich ausgerichteter
Text vorliegt. Jeder Cue muss `text`, ein endliches `start`-/`end`-Intervall
innerhalb der ermittelten Dauer und eine in der Positivliste enthaltene
`source` (`client`, `embedded` oder `audio-bridge`) enthalten; `confidence`
hat standardmäßig den Wert `1` und muss zwischen `0` und `1` bleiben. Exakt
identische Cues werden zusammengeführt. OmniRoute startet anhand dieser
Metadaten niemals eine Transkription: Validierte Cues werden mit Quelle,
Konfidenz und Intervall in das beschriebene Ergebnis kopiert und neben den
Bilduntertiteln als nicht vertrauenswürdige Beobachtungen dargestellt.
Ungültiger, außerhalb des zulässigen Bereichs liegender oder herkunftsloser
Text wird abgelehnt, statt mit dem Untertitelstrom vermischt zu werden. Beide
Transkriptkanäle des Anfragekörpers normalisieren die angegebene Herkunft auf
`client`, einschließlich selbst deklarierter Kennzeichnungen als `embedded`
oder `audio-bridge`. Nur ein servereigener Adapter kann diese
vertrauenswürdigen Kennzeichnungen über das ausschließlich im Code verfügbare
Argument `trustedSource` zuweisen; ein JSON-Feld der Anfrage kann dieses
Argument nicht erreichen. Transkripttext bleibt unabhängig von seiner Herkunft
nicht vertrauenswürdiger, aus Medien abgeleiteter Inhalt und darf niemals über
die Autorisierung entscheiden.

Ein fortgeschrittener Aufrufer kann für dasselbe Video eine `audioTranscript`-Spur bereitstellen;
sie wird als vom Client bereitgestellter Text behandelt, nicht als Nachweis einer serverseitigen Transkription.
Die Zusammenführung führt visuelle und akustische Beobachtungen unter
einer gemeinsamen Frist und einem gemeinsamen Abbruchsignal aus, ordnet sie auf einer gemeinsamen Zeitleiste an, fasst
exakte Duplikate zusammen und meldet ein Teilergebnis, wenn nur eine Seite erfolgreich ist.
Ein ungültiges `audioTranscript` wird zu diesem Teilergebnis herabgestuft — die visuelle
Beschreibung bleibt erhalten und der Audiozweig zeichnet einen bereinigten Fehlercode auf —
anstatt das gesamte Video fehlschlagen zu lassen. Die Verfügbarkeit pro Zweig, das Teilresultat-Flag
und die bereinigten Fehlercodes bleiben im beschriebenen Ergebnis, in den
Guardrail-Metadaten (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), in den Metadaten des Ergebniscaches und in den
Zusammenführungszählern der Bridge erhalten. Der standardmäßige Video-Bridge-Pfad ruft weder Speech-to-Text
auf noch lädt er eine zweite Medienkopie herunter; ohne diese explizite Spur bleibt er
auf Video beschränkt.

**Aufbewahrung von Transkripten (#12150 P1).** Dies gilt automatisch, wenn die
Video Bridge (die selbst Opt-in ist) einen Transkript-Hinweis rendert — es gibt kein separates
Aufbewahrungs-Flag. Wenn eine Anfrage irgendeinen Transkript-Hinweis rendert (ein vom Aufrufer deklariertes
`transcript` oder ein zusammengeführtes `audioTranscript`), markiert die Guardrail sie als
`videoBridgeObserved` und erzeugt eine redigierte Schattenkopie der Videobeschreibung —
eine identische Darstellung, in der der Freitextkörper jedes Hinweises durch
`[redacted-video-transcript]` ersetzt wird. Diese wird erzeugt, indem das strukturierte Hinweisfeld
vor dem Zusammensetzen der Zeichenfolge ersetzt wird (niemals durch Parsen des abgeflachten Textes, sodass kein
Hinweisinhalt — ob manipulativ oder gewöhnlich, einschließlich Körpern mit `]` wie
`[inaudible]`/`[music]` — erhalten bleiben kann). Im gespeicherten Anfragekörper des Aufrufprotokolls wird
jeder aus dem Video abgeleitete Textteil durch diese redigierte Schattenkopie ersetzt, wobei die Zuordnung anhand der
Inhaltsgleichheit erfolgt; der `fullText`-Anker wird erneut aus der fertigen Guardrail-Nutzlast vor dem Aufruf
gelesen, sodass die Zuordnung auch dann noch erfolgreich ist, nachdem spätere Guardrails in der Kette (die PII- und
Zugangsdatenmaskierer mit den Prioritäten 10/95) den Beschreibungstext direkt umgeschrieben haben und
nachdem System-Prompt-/Übergabe-/Memory-Injektionen das Nachrichtenarray umgeformt haben. Der
an das Modell gesendete Körper bleibt unverändert. Eine beobachtete Anfrage befüllt außerdem
keine dauerhafte Memory (sowohl die aus der Anfrage als auch die aus der Antwort abgeleitete Extraktion werden übersprungen),
sodass die eigene Antwort des Modells keinen Transkripttext in Memory wiederholen kann.

**Unverarbeitete Videofelder (#12430).** Wenn die Bridge aktiviert ist und die native Videounterstützung unbekannt ist oder fehlt, aktivieren definierte `transcript`-/`audioTranscript`-Felder ebenfalls `videoBridgeObserved`, selbst nach einem Beschreibungsfehler oder bei einem `maxVideos`-Limit. `null` und leere Zeichenfolgen zählen; fehlende Felder und Metadaten, die sich nicht auf Videos beziehen, zählen nicht. In aufbewahrten Kopien werden diese Felder redigiert oder die Anfrage wird ausgelassen, und Caches/Memory werden umgangen.

Auf diesen Fallback-Pfaden werden gültige, vom Aufrufer bereitgestellte Hinweise zu unterstützten `text`-/`input_text`-
Teilen anstelle von nicht standardisierten Anbieterfeldern. Beide von der Anfrage bereitgestellten Spuren
bleiben nicht vertrauenswürdige `client`-Beobachtungen, mit einem ausdrücklichen Hinweis, dass das Video
nicht beschrieben wurde und die Zeitstempel nicht anhand der Medien überprüft wurden. Die bestehenden
Gesamt- und Pro-Hinweis-Budgets von 256 Hinweisen/64 KiB gelten für beide Spuren zusammen;
Zeitstempel müssen innerhalb der 600-Sekunden-Obergrenze des Brokers und eines eventuell angegebenen Fokusfensters
liegen. Ungültige Spuren werden verworfen und nicht als beliebiger Text weitergeleitet; eine gültige
Geschwisterspur kann weiterhin verwendet werden, sofern ihr gemeinsames Budget nicht überschritten wird. Null-/leere
Felder fügen keinen Text hinzu. Durch diesen Fallback werden weder Medienabrufe noch Transkriptionen hinzugefügt.
Transkript-Erweiterungsfelder werden aus dem Fallback-Videoträger und dessen
`video_url`-/`source`-Objekten entfernt. Die OpenAI-Positivliste für die Übertragung bleibt strikt; Videoträger
mit unbekannter nativer Unterstützung bleiben verfügbar, und bekannte reine Textziele behalten sichere Markierungen.
Strukturierte Redaktionsschatten schützen den angehängten Transkripttext, während die
ursprüngliche, dem Aufrufer gehörende Anfrage unverändert bleibt. Ziele mit nativer Unterstützung und
deaktivierte Bridges behalten ihr bestehendes Umgehungsverhalten bei.

Zusätzliche aufbewahrte Kopien verwenden dasselbe Signal für beobachtete Anfragen. Der unverarbeitete
Client-Anfrage-Snapshot vor den Guardrails, die ausstehende Anfrage im Arbeitsspeicher und das Protokoll
frühzeitig abgelehnter Anfragen ersetzen Transkriptfelder in Videoteilen strukturell;
von Pipeline-Stufen und der Kontextübergabe synthetisierte Zeichenfolgen-Prompts werden
an der Senke des gespeicherten Anfragekörpers redigiert. Die gespeicherte Markierung `video_content_removed`
bewirkt, dass die Fortsetzung über `previous_response_id` sicher abbricht, statt Text zu rekonstruieren,
der absichtlich verworfen wurde. Wenn eine beobachtete Anfrage ihre
Redaktionsschatten pro Teil vor der Protokollierung verliert oder auch nur einer von mehreren Videoschatten
nach späteren Anfragemutationen nicht mehr zugeordnet werden kann, wird der aufbewahrte Anfragekörper
vollständig ausgelassen, anstatt ein nur teilweise redigiertes Transkript aufzubewahren.

Bei einer beobachteten Anfrage könnte eine Modellantwort einen beliebigen Teil des
Transkripts ohne strukturierte Hinweisgrenze zitieren. Ihr gespeicherter
`responseBody` im Aufrufprotokoll wird daher durch eine Auslassungsmarkierung ersetzt; das detaillierte
Pipeline-Artefakt (das Upstream-/Client-Körper und Stream-Blöcke enthalten kann)
wird nicht aufbewahrt. Semantische, Idempotenz- und Reasoning-Replay-Caches umgehen
Lese- und Schreibvorgänge für diese Anfrage. Die Anbieteranfrage und die für den Client sichtbare
Antwort bleiben unverändert. Frühe Keepalive-Bytes werden aus dem temporären
Puffer entfernt, wenn das detaillierte Artefakt ausgelassen wird. Kiros Warnung über einen fehlerhaften EventStream
meldet nur die Anzahl der Nutzlast-Bytes, niemals deren Inhalt oder den unverarbeiteten Fehler des JSON-
Parsers.
Dies erhebt nicht den Anspruch, dass jede nicht damit zusammenhängende Anbieter-/Plugin-Diagnose
geprüft wurde; die umfassendere Überprüfung der Aufbewahrungssenken wird in #11658 verfolgt.

Der interne `/api/modality-bridge/video/drilldown`-Lebenszyklus ist ein separates,
über Loopback/Token authentifiziertes Cache-Substrat. Jede Operation erfordert außerdem eine
kanonische opake Principal-ID. Bevor ein Produktionsaufrufer aktiviert wird, muss er
diese ID aus dem authentifizierten Mandanten ableiten und darf niemals einen vom
Client ausgewählten Wert weiterleiten. Cache-Schlüssel binden diesen Principal an kanonische Sitzungs- und
Videoreferenz-IDs, speichern nur deren mittels SHA-256 abgeleitete Schlüssel und beschränken sowohl Lese-
als auch Löschvorgänge auf denselben Principal. Der Cache speichert höchstens 16 abgeleitete JPEG-
Frames pro Eintrag, lässt sie nach zehn Minuten ablaufen und unterstützt begrenzte
`start`/`end`-Lesevorgänge oder die explizite Löschung einer Sitzung.

Jeder Principal ist auf 16 Einträge und 64 MiB kanonischer JPEG-Daten begrenzt. Diese
Grenzen sind unabhängig von der globalen Obergrenze von 64 Einträgen/256 MiB: Bei
Überschreitung des Principal-Kontingents werden nur die am längsten nicht verwendeten Einträge dieses Principals
entfernt, bevor eine globale LRU-Verdrängung erwogen wird. Abgelaufene Einträge werden bei Cache-Aktivität
sowohl aus der Principal- als auch aus der globalen Abrechnung entfernt, während ein Abbruch oder ein Validierungsfehler
keinen teilweisen Ersatz übernimmt.

Der Cache weist nicht kanonisches Base64, übermäßiges Padding, Medien, die keine JPEGs sind, fehlerhafte oder
abgeschnittene JPEGs sowie JPEGs zurück, die während einer begrenzten vollständigen Bilddekodierung mit `sharp`
eine Warnung erzeugen. Er kodiert jedes akzeptierte Bild erneut als kanonisches JPEG, leitet Breite und Höhe
aus den dekodierten Bytes ab, anstatt den Feldern des Aufrufers zu vertrauen, und verwirft alle angehängten
Polyglot-Bytes, statt sie beizubehalten. Nur der begrenzte kanonische komprimierte Puffer
wird auf beide Kontingente angerechnet. Das JSON-Übertragungslimit berücksichtigt den Base64-Overhead für die Obergrenze
von 32 MiB für dekodierte Eingaben. Jede
gespeicherte Ableitung zeichnet ihr validiertes JPEG-Format/ihre validierte JPEG-Auflösung, die Sampling-Richtlinie,
die Ableitungsversion, den Erstellungszeitpunkt, den serverseitig berechneten Inhalts-Hash und die gehashte übergeordnete
Referenz zusammen mit dem Hash des übergeordneten Inhalts vom vertrauenswürdigen Aufrufer auf. Zwischen asynchronen
Dekodierungs-/Hash-Phasen wird vor dem atomaren Cache-Commit auf einen Abbruch geprüft.

Diese Tranche verbindet noch keinen Produktions-Producer mit der Route und bietet
keine Auswahl von Varianten mit mehreren Auflösungen. Der transparente Anfragepfad
der Video Bridge verursacht daher keinen zusätzlichen Aufwand, während die mandantengebundene Principal-Ableitung und
der vollständige FU-08-Lebenszyklus für mehrere Auflösungen explizite Folgearbeiten bleiben,
anstatt als vollständiges Verhalten dokumentiert zu werden.

Frames werden nacheinander mit dem konfigurierten Video-Modell beschriftet. Eine leere
Video-Überschreibung übernimmt die Vision-Einstellung; wenn beide leer sind, wählt der
Vision-Auto-Router das tatsächlich verwendete visionsfähige Modell aus. Erfolgreiche Beschriftungen
ersetzen den ursprünglichen Teil durch ein stabiles `[Video description:`-Präfix, das den Text außerdem
als nicht vertrauenswürdige, aus Medien abgeleitete Beobachtung kennzeichnet und nachgelagerte
Modelle anweist, in den Medien gefundene Anweisungen nicht zu befolgen. Cache-Schlüssel für Frame-Beschriftungen
enthalten die JPEG-Bytes, den Prompt, den Zeitstempel und das tatsächlich verwendete Modell; nur erfolgreiche
Beschriftungen werden im Cache gespeichert. Cache-Einträge behalten das tatsächlich erfolgreiche Producer-Modell bei,
einschließlich eines Fallback-Modells; die Bridge meldet `mixed`, wenn verschiedene Frames
von unterschiedlichen Modellen erzeugt wurden. Ein Cache-Treffer verwendet diese Producer-Identität erneut,
anstatt sie als den angeforderten Routing-Plan neu zu kennzeichnen. Der Cache für das Ergebnis des gesamten Videos
wird anhand jeder Eingabe verschlüsselt, die die Ausgabe verändert — Prompt, tatsächlich verwendetes
Modell, Sampling-Richtlinie, Frame-Anzahl, semantischer Analysemodus, der SHA-256-
Fingerprint des normalisierten Fokus-Hinweises, Fokusfenster, `transcript`,
`audioTranscript` und das Kontaktbogen-Flag —, sodass die Änderung einer dieser
Dimensionen zu einem Cache-Miss und niemals zur Wiederverwendung veralteter Daten führt. Die Version
der visuellen Deduplizierungsrichtlinie, der Schwellenwert und die begrenzte Anzahl von Kandidaten-Frames werden ebenfalls explizit im
Ergebnis-Cache-Schlüssel und in den Metadaten angegeben; eine Richtlinienänderung kann daher keine veraltete
Beschreibung des gesamten Videos wiederverwenden. Die v4-Metadaten des Ergebnis-Caches enthalten den Modus und
den Fingerprint, niemals die unverarbeitete Benutzeraufgabe. Guardrail-Metadaten geben sowohl den
angeforderten als auch den tatsächlich verwendeten Analysemodus an; ein angeforderter `focused`-Modus ohne
verwendbaren Benutzertext wird effektiv als `full` gemeldet.

Die Guardrail extrahiert jeden unterstützten Videoteil, beschreibt jedoch nicht mehr als
`modalityBridgeVideoMaxVideos`. Bei einem Ziel, für das nachgewiesen wurde, dass
`supportsVideo === false` gilt, werden fehlgeschlagene und das Limit überschreitende Videos zu expliziten sicheren
Textmarkierungen, sodass kein Rohvideo erhalten bleibt. Wenn die Fähigkeit unbekannt ist, behalten diese Teile
ihren Video-Carrier; jedes Fallback-Transkript folgt der oben beschriebenen begrenzten Textkonvertierung.
Ziele mit `supportsVideo === true` umgehen die Bridge.
Das Abbruchsignal der Client-Anfrage wird an Download, Broker-Warteschlange,
Unterprozesse und Beschriftungsaufrufe weitergegeben; Abbrüche stoppen zwischen Videos und führen niemals
zu einem Fail-open mit Rohmedien.

Laufzeiteinstellungen werden in der DB gespeichert und mit Zod validiert:

| Schlüssel                           | Standardwert | Bereich / Verhalten                                                                                                                 |
| ----------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`      | Optionale Laufzeitkomponente, Opt-in                                                                                                |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` behält generische Beschriftungen bei; `focused` verwendet begrenzten, nicht vertrauenswürdigen Kontext des letzten Benutzers |
| `modalityBridgeVideoModel`          | `""`         | Übernimmt das Vision-Bridge-Modell                                                                                                  |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                                                |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` oder proportional `segment_aware`; bei einem Detektorfehler wird auf `uniform` zurückgegriffen             |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                                                 |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                                      |

Persistierte ältere Video-Timeout-Werte über 120 Sekunden werden auf die
Broker-Deadline begrenzt; neue Einstellungswerte oberhalb dieses Limits werden abgelehnt.
`GET /api/modality-bridge/video/runtime` erfordert vor der Authentifizierung oder Laufzeitprüfung
eine vertrauenswürdige, bestätigte Loopback-Lokalität und anschließend eine
Management-Authentifizierung. Die Antwort enthält nur `available`, bereinigte FFmpeg-/ffprobe-Versionen und einen festen
Grund, wenn die Laufzeitkomponente nicht verfügbar ist. Der interne Extraktionsendpunkt ist keine
öffentliche Upload-API: Bei einer ausgelasteten Warteschlange wird `503` zusammen mit `Retry-After` zurückgegeben, bei einem
Verbindungsabbruch durch den Aufrufer `499` und bei Erreichen der festen Broker-Deadline `504`. Konvertierte Antworten fügen
`video->text;model=<visionModel>;parts=<videos>` zum zentralen
`x-omniroute-modality-bridge`-Header hinzu, ohne Vision- oder Audio-Segmente zu entfernen.

### PII-Maskierer (`piiMasker.ts`)

Wird in **beiden** Phasen ausgeführt.

- **`preCall`** klont die Nutzdaten, durchläuft `system`, `messages`, `input` und
  `prompt` (einschließlich einfacher Zeichenfolgenelemente) und wendet `processPII()` (aus
  `@/shared/utils/inputSanitizer`) auf `content`-/`text`-Felder mit Zeichenfolgen an. Wenn
  `PII_REDACTION_ENABLED=true` gesetzt ist, werden erkannte personenbezogene Daten in den ausgehenden
  Nutzdaten geschwärzt. Dies ist unabhängig von `INPUT_SANITIZER_MODE` (das nur die
  Richtlinie für Prompt-Injection steuert). Wenn die Schwärzung deaktiviert ist, zeichnet der Aufruf die Anzahl
  der Erkennungen auf, ohne den Inhalt umzuschreiben.
- **`postCall`** erstellt einen tiefen Klon der Antwort und führt `sanitizePIIResponse()` sowie
  den Maskierer für die Responses-API-Struktur aus (`maskResponsesOutput` — deckt
  `output_text` und `output[].content[].text` ab). Wenn eine Schwärzung erfolgt, ersetzt die
  geänderte Antwort das Original.

Die Schutzmaßnahme blockiert nie; sie versieht Inhalte lediglich mit Anmerkungen (`meta.detections`,
`meta.redacted`) oder schreibt sie um.

### Prompt-Injection (`promptInjection.ts`)

Erkennt feindselige Strukturen in vom Benutzer bereitgestellten Inhalten und setzt die
konfigurierte Richtlinie durch. Das Verhalten wird durch Umgebungsvariablen und Konstruktoroptionen
gesteuert:

| Einstellung      | Umgebungsvariable                                                                                     | Standardwert | Auswirkung                                                                                                                                                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviert        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`       | Bei `false` wird die Schutzmaßnahme vorzeitig beendet.                                                                                                                                                                                                           |
| Modus            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`       | Injection-Richtlinie: `block`, `warn` oder `log`. (`redact` wird aus Gründen der Abwärtskompatibilität akzeptiert, entfernt jedoch **keinen** Injection-Text; das Umschreiben personenbezogener Daten in Anfragen wird durch `PII_REDACTION_ENABLED` gesteuert.) |
| Blockierschwelle | Option `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (Alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Mindestschweregrad, der zum Blockieren erforderlich ist. `Medium` dient standardmäßig nur der Beobachtung.                                                                                                                                                       |

**Moduspriorität** (`getMode`): `options.mode` des Aufrufers →
**DB-Feature-Flag-Überschreibung** für `INJECTION_GUARD_MODE` (Dashboard → Einstellungen →
Feature-Flags) → Umgebungsvariable `INJECTION_GUARD_MODE` → Umgebungsvariable `INPUT_SANITIZER_MODE` →
`warn`. Eine Dashboard-Überschreibung hat daher Vorrang vor den Umgebungsvariablen, sodass die
Feature-Flags-Benutzeroberfläche die laufende Schutzmaßnahme unmittelbar steuert (kein Neustart erforderlich). Der Datenbankzugriff ist ausfallsicher:
Wenn dabei ein Fehler auftritt, greift die Schutzmaßnahme auf das umgebungsvariablenbasierte Verhalten zurück; wenn keine
Überschreibung festgelegt ist, entspricht das Verhalten vollständig der ausschließlich auf Umgebungsvariablen basierenden Auflösung.

Erkennungsquellen:

1. `sanitizeRequest()` aus `@/shared/utils/inputSanitizer` (gemeinsamer Detektorsatz,
   der an anderer Stelle in der Pipeline verwendet wird).
2. Integrierte `DEFAULT_GUARD_PATTERNS` (derzeit `system_override_inline` und
   `markdown_system_block`, beide mit dem Schweregrad `high`).
3. Optionale `customPatterns`, die über Konstruktoroptionen übergeben werden (Zeichenfolgen, reguläre Ausdrücke
   oder Datensätze der Form `{ name, pattern, severity }`).

Wenn `mode === "block"` gilt **und** mindestens eine Erkennung den
Schweregrad-Schwellenwert erreicht, gibt `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` zurück. In den Modi `warn`/`log` protokolliert die Guardrail den
Vorfall, lässt den Aufruf jedoch zu. Die gemeinsam genutzte Hilfsfunktion
`evaluatePromptInjection()` wird ebenfalls exportiert, damit Aufrufer Prompts auswerten können,
ohne die Registry zu durchlaufen.

**Scanbegrenzung (v3.8.20):** Der Detektor untersucht nur die **ersten 16 KB** des
zusammengefügten Prompt-Texts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 Byte) in
`src/shared/utils/inputSanitizer.ts`. Sowohl `detectInjection()` als auch
`evaluatePromptInjection()` wenden `slice(0, MAX_INJECTION_SCAN_BYTES)` an, bevor
die Musterschleife ausgeführt wird. Injection-Anweisungen befinden sich üblicherweise am Anfang
einer Eingabe; dadurch wird die Regex-CPU-/GC-Last bei Payloads von mehreren hundert KB begrenzt,
ohne die Erkennungsleistung zu beeinträchtigen (vgl. #3932, #4041).

### Zugangsdatenmaskierer (`credentialMasker.ts`)

Wird in **beiden** Phasen ausgeführt und steht in der Standardkette an letzter Stelle (Priorität `95`).
Schwärzt bekannte Muster für API-Schlüssel und geheime Tokens im ausgehenden Payload
(Nachrichteninhalt, Tool-Aufrufargumente, Tool-Ergebnisse) **sowie** in der Provider-Antwort, sodass
Zugangsdaten, die in einen Prompt eingefügt (oder von einem Tool-Ergebnis zurückgegeben) werden,
weder an den vorgelagerten Provider noch zurück an den Client gelangen.

- **Nur per Opt-in**, gemäß derselben Konvention wie bei der Schwärzung personenbezogener Daten
  (angrenzend an Harte Regel #20): deaktiviert, sofern nicht
  `settings.credentialRedactionEnabled === true` **oder**
  `CREDENTIAL_REDACTION_ENABLED=true` gilt. Ist die Funktion deaktiviert, bewirkt die Guardrail nichts —
  sie blockiert und verändert niemals etwas.
- `redactCredentials()` durchläuft den gesamten Payload-/Antwortbaum (`walkValue()`,
  sicher gegen Prototype Pollution, durch `WeakSet` zyklussicher) und ersetzt Treffer durch
  einen `[REDACTED:<type>]`-Platzhalter, wobei nur tatsächlich geänderte Zweige
  geklont werden.
- `CREDENTIAL_PATTERNS` deckt Schlüssel von LLM-Providern (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-Tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), Zahlungsschlüssel (Stripe, Square), Cloud-
  Schlüssel (AWS-Zugriffsschlüssel, Twilio, SendGrid, Mailgun), private Schlüssel/JWTs,
  Verbindungszeichenfolgen mit Zugangsdaten (`mongodb://user:pass@...` usw.) sowie
  ein generisches Muster für `Authorization`-/`x-api-key`-/`api-key`-/`apikey`-Headerwerte
  ab. Header-artige Schlüssel (`authorization`, `x-api-key`, `api-key`,
  `apikey`) werden strukturell geschwärzt (nur der Wert; Schemapräfixe wie
  `Bearer `/`Basic ` bleiben erhalten), statt den generischen Text-Regex zu verwenden.
- Die Guardrail blockiert niemals; sie verändert ausschließlich Inhalte (`modifiedPayload` /
  `modifiedResponse`) und fügt Annotationen hinzu (`meta.credentialsRedacted`, `meta.count`).

Regressionsschutz: `tests/unit/credential-masker-guardrail.test.ts`.

## Basisvertrag (`base.ts`)

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
  block?: boolean; // true bricht die Kette vorzeitig ab
  message?: string; // wird beim Blockieren ausgegeben
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // wird von preCall zurückgegeben, um die Anfrage umzuschreiben
  modifiedResponse?: TValue; // wird von postCall zurückgegeben, um die Antwort umzuschreiben
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

Eine Schutzvorrichtung signalisiert „keine Änderung“, indem sie entweder `void`, `{}` oder
`{ block: false }` zurückgibt. Die Rückgabe eines `modifiedPayload`/`modifiedResponse` ersetzt
den Wert, der für nachgelagerte Schutzvorrichtungen durch die Kette fließt.
`signal?: AbortSignal` überträgt den Lebenszyklus des Aufrufers an die Schutzvorrichtungen. Der Abbruch einer Anfrage ist die bewusste Fail-Open-Ausnahme: Medienbrücken beenden ihre Arbeit und führen Aufräumarbeiten durch, ohne rohe Medien für ein Ziel wiederherzustellen, von dem bekannt ist, dass es diese nicht unterstützt.

## Registrierung (`registry.ts`)

Der Singleton `guardrailRegistry` stellt Folgendes bereit:

- `register(guardrail)` — fügt eine Schutzvorrichtung hinzu (oder ersetzt sie anhand ihres normalisierten Namens) und
  sortiert erneut nach aufsteigender `priority`.
- `clear()` / `list()` — administrative Hilfsfunktionen.
- `runPreCallHooks(payload, context)` — durchläuft aktive Schutzvorrichtungen, reicht die
  Nutzlast über `modifiedPayload` weiter und stoppt beim ersten `block: true`.
- `runPostCallHooks(response, context)` — derselbe Ablauf auf der Antwortseite.
- `resetGuardrailsForTests({ registerDefaults })` — löscht den Zustand und registriert optional
  die Standardwerte erneut, um eine saubere Testisolation zu gewährleisten.

Beide Ausführungsfunktionen geben `{ blocked, payload|response, results, guardrail?, message? }`
zurück, wobei `results` ein Array von `GuardrailExecutionResult`-Datensätzen ist, die
für jede Schutzvorrichtung die Felder `blocked`, `skipped`, `modified`, `error` und `meta`
enthalten, was für die Ablaufverfolgung nützlich ist.

### Schutzvorrichtungen pro Anfrage deaktivieren

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` erstellt eine
deduplizierte Liste der Namen von Schutzvorrichtungen, die für die aktuelle
Anfrage übersprungen werden sollen. Quellen (alle optional, alle zusammengeführt):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` im Anfragekörper (auf oberster Ebene)
- `metadata.disabledGuardrails` im Anfragekörper
- Header `x-omniroute-disabled-guardrails` (oder veraltet
  `x-disabled-guardrails`)

Werte können Zeichenfolgen-Arrays oder eine kommagetrennte Zeichenfolge sein; Namen werden
in kleingeschriebene Kebab-Case-Schreibweise normalisiert (`pii_masker` → `pii-masker`). Das Ergebnis
wird über `context.disabledGuardrails` an die Registrierung übergeben, die
übereinstimmende Schutzvorrichtungen überspringt (`skipped: true` in `results`).

## Ausführungsreihenfolge

Für jede Anfrage, die `src/sse/handlers/chat.ts` und
`open-sse/handlers/chatCore.ts` durchläuft:

1. `resolveDisabledGuardrails(...)` erstellt anhand von API-Schlüssel, Body
   und Headern die Liste der zu überspringenden Guardrails.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` führt Guardrails in
   aufsteigender Prioritätsreihenfolge aus:
   - Deaktivierte Guardrails werden als `skipped` erfasst.
   - `preCall` jedes Guardrails kann die Nutzdaten über `modifiedPayload`
     umschreiben.
   - Das erste `block: true` bricht die Kette vorzeitig ab, und der Handler
     gibt eine Guardrail-Ablehnungsantwort zurück.
3. Die (möglicherweise umgeschriebenen) Nutzdaten werden an das Combo-Routing
   und die Upstream-Weiterleitung übergeben.
4. Nachdem die Antwort zusammengestellt wurde, führt
   `guardrailRegistry.runPostCallHooks(...)` dieselbe Kette für die Antwort
   aus. `block: true` verwirft hier die Upstream-Antwort.

Guardrails, die eine Ausnahme auslösen, werden mit `error: <message>` erfasst
und über `logger.warn` protokolliert, die Kette wird jedoch fortgesetzt —
dies entspricht dem Fail-Open-Prinzip.

## Konfiguration

Von den integrierten Guardrails gelesene Umgebungsvariablen:

| Variable                              | Verwendet von               | Auswirkung                                                                                                            |
| ------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Auf `false` setzen, um die Erkennung vollständig zu deaktivieren.                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Injektionsrichtlinie: `warn`, `block` oder `log`. Der Legacy-Wert `redact` schreibt Injektionstext nicht um.          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Modus für den Injektions-Guard; zugleich ein DB-Feature-Flag, das die Umgebungsvariablen **überschreibt** (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mindestschweregrad, den `MODE=block` ablehnt: `high` (Standard), `medium` oder `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Legacy-Alias für `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Bei `true` werden personenbezogene Daten in Anfragen redigiert (unabhängig vom Injektionsmodus).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nachgelagert) | Steuert das Maskierungsverhalten auf der Antwortseite.                                                                |

Die Modality-Bridge-Guardrails lesen die Laufzeitkonfiguration aus dem
DB-gestützten Einstellungsspeicher (`getSettings()`), nicht aus
Umgebungsvariablen. Die primären Schlüssel für Vision sind
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` und
`modalityBridgeCacheMaxEntries`. Die Legacy-Schlüssel
`visionBridge*` werden nur als dokumentierter Lese-Fallback für einen Zyklus
akzeptiert; Schreibvorgänge über das Dashboard verwenden die primären
Schlüssel. Standardwerte und der Fallback-Resolver befinden sich in
`src/shared/constants/modalityBridgeDefaults.ts`, während Legacy-Konstanten in
`src/shared/constants/visionBridgeDefaults.ts` beibehalten werden.

Audio verwendet `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` und `modalityBridgeAudioMaxClips` sowie die
gemeinsam genutzten `modalityBridgeCache*`-Einstellungen. Für Audio gibt es
keinen Legacy-Schlüssel-Fallback, da diese Schlüssel mit dem
Modality-Bridge-Schema eingeführt wurden.

Video verwendet `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` und
`modalityBridgeVideoTimeout` sowie die gemeinsam genutzten
`modalityBridgeCache*`-Einstellungen. Es ist standardmäßig deaktiviert, da
FFmpeg/ffprobe optionale betriebliche Abhängigkeiten sind und die
Frame-Beschriftung zusätzliche Latenz und Modellkosten verursacht.

## Benutzerdefinierte Guardrails

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

Schritte:

1. Erstellen Sie `src/lib/guardrails/myGuardrail.ts` als Erweiterung von `BaseGuardrail`.
2. Implementieren Sie `preCall` und/oder `postCall`.
3. Registrieren Sie die Guardrail entweder beim Import (über `registerDefaultGuardrails`) oder
   rufen Sie zur Laufzeit `guardrailRegistry.register(...)` auf — die Registry ersetzt
   jede vorhandene Guardrail mit demselben normalisierten Namen.
4. Fügen Sie Tests unter `tests/unit/` hinzu (vorhandene Beispiele:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tests

Verwenden Sie zwischen den Tests `resetGuardrailsForTests()`, um mit einem bekannten Zustand zu beginnen.
Übergeben Sie `{ registerDefaults: false }`, um mit einer leeren Registry zu beginnen und
nur die zu testenden Guardrails zu registrieren. Vision Bridge unterstützt Dependency
Injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge stellt entsprechende
Schnittstellen für Einstellungen, Fähigkeiten, STT-Modellauswahl, Anmeldedatenprüfungen
und Transkription bereit. Tests können daher beide Abläufe ohne Datenbank- oder
Netzwerkzugriff ausführen.

## Siehe auch

- `src/lib/guardrails/` — Implementierung
- `src/shared/utils/inputSanitizer.ts` — gemeinsamer Detektor, auf dem
  Prompt-Injection-Erkennung und PII-Maskierung basieren
- `src/shared/constants/visionBridgeDefaults.ts` — Standardwerte für Vision Bridge und
  Modellliste für erzwungenes Bridging
- `src/shared/constants/modalityBridgeDefaults.ts` — gemeinsame Laufzeitstandardwerte für Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonale Schicht (Circuit Breaker, Cooldowns)
- `docs/reference/ENVIRONMENT.md` — vollständige Referenz der Umgebungsvariablen

## Routenabdeckung des Injection-Guards und Red-Teaming (Phase 8 · Block D)

Der Injection-Guard (`createInjectionGuard` / `withInjectionGuard`) deckt alle Routen ab,
die Benutzer-Prompts akzeptieren. Er berücksichtigt `INJECTION_GUARD_MODE` (Standardwert `warn` = nur protokollieren;
`block` = gibt HTTP 400 `SECURITY_001` zurück).

| Typ              | Routen                                                                                                                                               | Standardmodus |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (vorhanden) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Daten            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Die Textextraktion (`extractMessageContents`) deckt `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ab.

**Red-Teaming (nächtlich, `nightly-llm-security.yml`):** promptfoo überprüft, dass jede Route
den OWASP-LLM-Korpus bei `INJECTION_GUARD_MODE=block` blockiert; garak führt Prüfungen aus (wird ohne Secret übersprungen).
`moderations` ist aus Konsistenzgründen enthalten — Betreiber können die Route im Blockierungsmodus über
`resolveDisabledGuardrails` ausnehmen.

Der nächtliche Workflow (`.github/workflows/nightly-llm-security.yml`, Cron + manueller
Start) umfasst zwei Jobs:

- **`promptfoo-guard` (blockierend)** — führt `promptfoo eval -c promptfooconfig.yaml`
  mit `INJECTION_GUARD_MODE=block` aus. Jeder adversariale Fall (z. B. „ignore all
  previous instructions…“, Jailbreaks im DAN-Stil) stellt sicher, dass die Antwort
  `error.code === "SECURITY_001"` enthält, d. h., dass die Guardrail die Anfrage tatsächlich abgelehnt hat.
- **`garak` (informativ)** — führt garak mit `--probes promptinject,dan,leakreplay`
  gegen eine lokale OmniRoute-Instanz (`http://localhost:20128/v1`) aus. Die Ausführung hängt von einem
  Provider-Secret (`PROMPTFOO_PROVIDER_KEY`) ab; ohne dieses wird sie ordnungsgemäß übersprungen und ist mit
  `|| true` versehen, sodass Ergebnisse gemeldet werden, ohne dass CI fehlschlägt.

Die Abdeckung des Guard-Helfers (`createInjectionGuard` / `withInjectionGuard`)
erstreckt sich über jede Prompt-verarbeitende `/v1`-Route; der Prompt-Text wird durch
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts` aus
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` extrahiert.
