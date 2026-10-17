# Guardrails (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Həqiqət mənbəyi:** `src/lib/guardrails/`
> **Son yenilənmə:** 2026-08-29 — v3.8.51 (Video Bridge transkriptinin mənşəyi çağıran tərəf tərəfindən bəyan edilir,
> hələ server tərəfindən təsdiqlənmir — #11661 əsasında dəqiqləşdirilib)

Qoruyucu mexanizmlər OmniRoute ilə yuxarı axın provayderləri arasındakı sərhəddə
təhlükəsizlik, siyasət və məzmun transformasiyalarını təmin edir. Hər bir qoruyucu mexanizm
sorğu faydalı yüklərini (`preCall`) və yuxarı axın cavablarını (`postCall`) yoxlaya
(və istəyə görə rədd edə, transformasiya edə və ya annotasiya edə) bilər.

Sistem **xəta zamanı açıqdır**: qoruyucu mexanizm icra zamanı xəta atarsa, reyestr
xətanı qeydə alır və sorğunu uğursuz etmək əvəzinə növbəti qoruyucu mexanizmlə
davam edir. Bloklama heç vaxt təsadüf deyil, açıq şəkildə verilən qərardır (`block: true`).

## Daxili qoruyucu mexanizmlər

Reyestr import zamanı altı qoruyucu mexanizmi prioritet sırasına uyğun olaraq avtomatik yükləyir
(baxın: `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Ad                  | Mərhələ(lər)   | Fayl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Daha aşağı prioritet nömrələri **əvvəl** icra olunur.

### Görüntü körpüsü (`visionBridge.ts`) — Modallıq körpüsü PR-1

**Görüntünü dəstəkləməyən modellərə** yönəldilmiş, şəkil ehtiva edən sorğuları ələ keçirir və ya bütün sorğunu görüntünü dəstəkləyən modelə yenidən yönləndirir, ya da yuxarı axın çağırışından əvvəl şəkil hissələrini konfiqurasiya edilə bilən görüntü modeli tərəfindən yaradılmış mətn təsvirləri ilə əvəz edir. Bu, yalnız mətnlə işləyən provayderlərə multimodal məlumat yüklərini şəffaf şəkildə emal etməyə imkan verir.

Axın:

1. Hədəf model artıq görüntünü dəstəkləyirsə, bu addımı keçin (model məcburi körpü siyahısında `isVisionBridgeForcedModel` görünmədiyi halda).
2. Şəkil hissələrini `extractImageParts(messages)` vasitəsilə çıxarın
   (`visionBridgeHelpers.ts`); bu funksiya `open-sse/utils/mediaParts.ts` daxilindəki **vahid media detektoruna** — `detectMediaParts()` funksiyasına müraciət edir. Bu, kombinasiya uyğunluğu filtri ilə paylaşılan yeganə etibarlı mənbədir.
   Çıxarma əməliyyatı `replaceImageParts` funksiyasının yenidən yerləşdirə bildiyi formalardakı üst səviyyəli hissələrin icazə siyahısı ilə məhdudlaşdırılır (çıxarma↔əvəzləmə müqaviləsi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` və Responses API `input_image`. İç-içə uyğunluqlar və
   yalnız indikator ehtiva edən formalar kombinasiya filtrinin materialıdır və heç vaxt çıxarılmır.
   Heç biri tapılmadıqda bu addımı keçin.
3. İcra vaxtı konfiqurasiyasını `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) vasitəsilə müəyyən edin: yeni `modalityBridge*`
   parametr açarları üstünlük təşkil edir; köhnə `visionBridge*` açarları **bir dövrlük
   ehtiyat variant** kimi qalır (geri qaytarma pəncərəsi). Körpü deaktivdirsə, hər hansı media axtarışından əvvəl bu addımı keçin.
4. Rejim seçicisi (`modalityBridgeVisionMode`, aşağıdakı cədvələ baxın)
   yenidən yönləndirmə və ya təsvir etmə arasında seçim edir. Yenidən yönləndirmə yalnız `model`
   dəyişdirilmiş `modifiedPayload`, həmçinin `{ rerouted, fromModel, toModel, imagesKept }` metadatasını qaytarır.
5. Təsvir etmə yolu: şəkillərin sayını `maxImages` ilə məhdudlaşdırır, tapşırığı nəzərə alan sorğunu tərtib edir,
   təsvir keşini yoxlayır, görüntü modelini **paralel şəkildə**
   (`Promise.allSettled`) çağırır və şəkillərin yerinə `[Image N]: <description>` mətn hissələri yerləşdirir.
   Uğursuz təsvir `null` qaytarır və orijinal şəkil hissəsi
   **qorunur** (#4012) — hər təsvir cəhdinin uğursuz olduğu kombinasiya təsvir etmə yolu istisna olmaqla; bu halda görüntünü dəstəkləmədiyi təsdiqlənmiş yuxarı axın sistemi əvəzində
   `(unavailable — no vision-capable provider connected)` yer tutucusunu alır (#8430).
6. `modifiedPayload` və metadatanı (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytarın.

#### Rejim seçicisi (`modalityBridgeVisionMode`)

| Rejim      | Standart | Davranış                                                                                                                                                                                                                                                                                                                           |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Köhnə evristika dəyişdirilmədən saxlanılır (#6640/#7204): kombinasiya olmayan/`auto/` modellər, orijinal modelin artıq istifadəyə yararlı etimadnamələri olmadığı halda, ən yaxşı görüntü modelinə yenidən yönləndirilir (etimadnamələr varsa, təsvir edilir); kombinasiya hədəfləri həmişə təsvir edilir.                         |
| `describe` |          | Həmişə təsvir edir — yenidən yönləndirmə bloku tamamilə ötürülür; cavabı həmişə istifadəçinin seçdiyi model verir.                                                                                                                                                                                                                 |
| `reroute`  |          | Məcburi yenidən yönləndirmə: etimadnamələri olan modeli saxlama yoxlaması nəzərə alınmır. Yenidən yönləndirmə **hədəfinin** etimadnamə yoxlaması yenə də tətbiq olunur — istifadəyə yararlı görüntü hədəfi olmadıqda sorğu təsvir etmə yoluna keçir ki, xam şəkillər yalnız mətnlə işləyən arxa sistemə heç vaxt çatmasın (#8430). |

Məcburi rejimlər avtomatik evristika işə düşməzdən **əvvəl** qısaqapanma yaradır; `auto` davranışı
PR-1-dən əvvəlki qoruyucu mexanizmlə bayt səviyyəsində eynidir.

#### API açarının əhatə dairəsi (`visionBridgeKeyScope.ts`)

Çağıranın API açarı `allowedConnections`, kvota hovuzlarını
(`allowedQuotas`) və ya modelləri (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) məhdudlaşdırdıqda, körpü yalnız açarın istifadə edə biləcəyi bağlantılarda açarın istifadəsinə icazə verilən yenidən yönləndirmə və təsvir modellərini seçir. Bundan sonra təsvir çağırışı həmişə
`x-omniroute-self-loop-key-id` başlığı ilə OmniRoute özünədövrəsi üzərindən həyata keçirilir ki, qəbul edən söhbət sorğusu həmin açarın bağlantı və model siyasətini yenidən tətbiq etsin. `enforceApiKeyPolicy()`
bu başlığı yalnız özünədövrə bearer-i ilə birlikdə nəzərə alır, buna görə də o, yalnız girişi məhdudlaşdıra bilər və uyğunluğu müəyyən edilə bilməyən id rədd edilir.

Açar üçün heç bir görüntü modelinə icazə verilmədikdə, təsvir etmə yolu kənara çəkilir və
sorğu dəyişdirilmədən ötürülür; bu, deaktiv edilmiş qoruyucu mexanizmdə olduğu kimi uğursuzluq zamanı açıq qalma davranışıdır (metadata: `{ skipped: true, reason: "no_permitted_vision_model" }`).
Açarsız sorğular və bu məhdudiyyətləri olmayan açarlar əvvəlki qaydada işləyir.

#### Tapşırığı nəzərə alan təsvir sorğusu (`modalityBridgeVisionTaskAware`)

Defolt dəyər **true**-dur. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) əsas təsvir sorğusuna **son istifadəçi mesajının** mətnini (500 simvoladək qısaldılmış şəkildə) əlavə edir, təsviri istifadəçinin əslində soruşduğu mövzuya yönəldir (codex-vision-proxy nümunəsi) və görmə modelindən görünən mətni transkripsiya etməsini istəyir. Bayraq deaktiv olduqda — yaxud istifadəçi mətni olmadıqda — əsas sorğu dəyişdirilmədən istifadə edilir.

Təsvir öz-dövrəsinin OpenAI ilə uyğun öz sorğusu (`visionBridgeHelpers.ts` daxilində `callVisionModelSingle()`) hər zaman `image_url.detail: "high"` tələb edir — şərtsiz olaraq, hər bir çağıran/provayder üçün və heç bir müştəri siqnalından asılı olmadan. Aşağı detallı seçmə məhz bu sorğunun tələb etdiyi mətn transkripsiyası tapşırığında OCR dəqiqliyini aşağı salır, buna görə ilkin daxil olan sorğunun istifadə etdiyi detal səviyyəsindən asılı olmayaraq, təsvir çağırışının özü hər zaman yüksək detal tələb edir. Bu, yalnız daxili təsvir sorğusunun gövdəsinə təsir edir; OmniRoute-un əsas sorğuda çağıranın öz `image_url.detail` dəyərini necə ötürdüyünü dəyişmir — həmin defolt ayrıca və yalnız aşkarlanmış OpenCode müştəriləri üçün `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) daxilində tətbiq edilir. Təsvir öz-dövrəsinin Anthropic naqil formatı budağında `detail` sahəsi yoxdur və bu defoltların heç biri ona təsir etmir.

#### Təsvir çıxışı limiti (`modalityBridgeVisionMaxChars`)

| Açar                           | Defolt | Aralıq              |
| ------------------------------ | ------ | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` və ya 100–50000 |

`0` (defolt) **limit yoxdur** deməkdir — `callVisionModel()` tərəfindən qaytarılan təsvir dəyişdirilmədən ötürülür və mövcud davranış qorunur. 100–50000 aralığındakı istənilən dəyər təsviri `[Image N]: <description>` kimi geri yerləşdirilməzdən əvvəl `…` sonluğu ilə qısaldır (`src/lib/guardrails/visionBridge.ts` daxilində `VisionBridgeGuardrail.preCall()`). Aşağı axındakı modelin tam transkripsiyaya ehtiyac duyduğu, çox detallı OCR tapşırıqları üçün bu dəyəri artırın; həddindən artıq mətn yaradan görmə modellərində token istifadəsini məhdudlaşdırmaq üçün isə azaldın. İdarəetmə panelindəki sahə Vision nişanının Advanced panelində yerləşir (`ModalityBridgeVisionTab.tsx` daxilində `modality-bridge-max-chars`) və açıq şəkildə göstərilmiş `0` dəyərinə toxunmadan 1–99 arasındakı istənilən dəyəri minimum 100 həddinə yüksəldir — `0` sadəcə “təyin edilməyib” defoltu deyil, ayrıca etibarlı Zod dəyəridir (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Təsvir keşi (`modalityBridge/bridgeCache.ts`)

Təsvir çıxışları üçün proses miqyasında paylaşılan yaddaşdaxili LRU + TTL keşi.
Açar = uzunluq prefiksli çərçivələmə ilə `sha256(imageRef + composedPrompt + configuredBridgeModel)` (sahə sərhədləri arasında toqquşma yoxdur). Model komponenti faktiki cavab verən model deyil, **konfiqurasiya edilmiş** körpü modelidir — `callVisionModel` daxildə alternativ modelə keçə bilər və hər cəhd üzrə açarlama keşi parçalayardı. Uğursuz təsvirlər heç vaxt keşlənmir. Parametrlər:

| Açar                            | Defolt | Aralıq  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Uzaq təsvirlərin normallaşdırılması (öz-dövrə təsviri/base64 əldəetməsi)

Körpü **uzaq** təsviri özü əldə etdikdə — həm Anthropic təsvir öz-çağırışı, həm də claude naqil formatlı base64 çevirməsi (`ensureBase64ImagesForClaudeWire`) zamanı, hər ikisi `visionBridgeHelpers.ts` daxilindəki `fetchRemoteImageAsDataUri()` vasitəsilə — əldə edilən data URI görmə modelinin sorğusuna yerləşdirilməzdən əvvəl `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) funksiyasından keçirilir. Həddən böyük təsvirlərin **uzun tərəfi 2048px** ölçüsünə endirilir (OpenAI/Anthropic-in artıq server tərəfində tətbiq etdiyi ölçü limitinə uyğun olaraq); bu, görmə modelinin gördüyünü dəyişdirmədən yükləmə baytlarını/gecikməsini azaldır. Ölçünün dəyişdirilməsi dinamik import vasitəsilə yüklənən `sharp` paketindən istifadə edir: onun yerli binar faylının yüklənə bilmədiyi platformada `normalizeDataUri()` **heç vaxt xəta atmır** — ilkin baytları dəyişdirmədən ötürməyə geri qayıdır, beləliklə təsvir/base64-çevirmə yolu həmişə işləməyə davam edir. Təsvir olmayan baytlar (deşifrə edilə bilən təsvir qaytarmayan əldəetmə) da toxunulmadan ötürülür. Bu normallaşdırma yalnız körpünün öz çağırışı üçün əldə etdiyi təsvirlərlə məhdudlaşır — yalnız açıq razılıq əsasında dəyişiklik prinsipinə (Sərt Qayda #20) uyğun olaraq, çağıranın dəyişdirilmədən ötürülən xam faydalı yükünə heç vaxt tətbiq edilmir.

#### Parametrlər sxemi + miqrasiya

Yeni `modalityBridge*` açarları `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) daxilində Zod ilə doğrulanır: `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` üçlüyü və Audio Bridge tərəfindən istifadə edilən `modalityBridgeAudio*` qrupu. `141_modality_bridge_settings.sql` miqrasiyası mövcud köhnə `visionBridge*` dəyərlərini uyğun yeni açarlara köçürür (idempotentdir və operator tərəfindən təyin edilmiş `modalityBridge*` dəyərinin üzərinə heç vaxt yazmır); köhnə açarlar bir buraxılış dövrü ərzində oxuma üçün ehtiyat variant kimi qəbul edilməyə davam edir.

#### Şəffaflıq başlığı + statistika

Təsvir vasitəsilə çevrilmiş cavablarda
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
başlığı olur (`modalityBridge/bridgeStats.ts` daxilində `buildModalityBridgeHeader()` tərəfindən yaradılır, `src/sse/handlers/chatHelpers.ts` daxilində `withModalityBridgeHeader()` tərəfindən əlavə edilir). Yenidən marşrutlaşdırılmış sorğular **heç bir** başlıq almır — faydalı yükə toxunulmayıb və model dəyişikliyi artıq cavab gövdəsinin `model` sahəsində görünür.

`GET /api/modality-bridge/stats` (idarəetmə autentifikasiyası, `GET /api/settings` ilə eyni səviyyə) `vision`, `audio` və `video` üçün yaddaşdakı hər modallıq üzrə
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` sayğaclarını qaytarır.
`averageLatencyMs` məxrəc kimi bütün cəhdlərdən deyil, `latencySamples` dəyərindən
istifadə edir; zaman ölçümü olmayan əməliyyat saxta sıfır millisaniyəlik nümunə
yaratmır. `bridged` uğurlu çevirmələr üçün geriyə uyğun ləqəb olaraq qalır;
uğursuz cəhdlər onu artırmır.
Sayğaclar dizayna uyğun olaraq proses yenidən başladıqda sıfırlanır
(uçot deyil, telemetriya).

#### İdarəetmə panelinin konfiqurasiyası

Xüsusi idarəetmə paneli səhifəsi
`/dashboard/settings/modality-bridge` ünvanındadır. URL vasitəsilə ünvanlana bilən `Vision`, `Audio`
və `Video` tabları `tab` dəyərini dəyişdirərkən sorğu parametrlərini qoruyur.
Vision tabı aktivləşdirmə, rejim, model seçimi (avtomatik standart seçim daxil
olmaqla), tapşırığa uyğun sorğu tərtibatı, təkmil taym-aut/şəkil/təsvir uzunluğu/keş
limitləri, icra vaxtı
sayğacları və qorunan nümunə sorğusunu təqdim edir. Audio tabı da aktivdir: o,
aktivləşdirmə, Auto seçimi olan yalnız STT model seçicisi, taym-aut/maksimum klip
limitləri, audio sayğacları və `input_audio` nümunə testini təqdim edir. Video tabı
funksionaldır: o, FFmpeg/ffprobe icra mühitinin vəziyyətini — dörd aydın UI
vəziyyətindən birini (yoxlama davam edərkən və ya tamamlana bilmədikdə `unknown`,
yoxlama müştəri tərəfində ötürüldüyü zaman loopback olmayan idarəetmə paneli
hostunda `restricted`, yoxlanıldıqdan və mövcud olmadığı təsdiqləndikdən sonra
`unavailable`, yaxud FFmpeg/ffprobe versiyaları ilə birlikdə `available`) — bildirir,
aktivləşdirmə/model/kadr/video/taym-aut limitlərini davamlı saxlayır, model seçicisini
görüntünü dəstəkləyən modellərlə məhdudlaşdırır və video sayğaclarını təqdim edir.

AI parametrləri altındakı əvvəlki Vision Bridge kartı yeni səhifəyə uyğunluq
keçididir; o, artıq formanın ikinci nüsxəsini özündə saxlamır. Media Providers
bölməsi də mövcud Speech-to-Text sınaq mühitini silmədən Image-to-Text və
Speech-to-Text iş axınlarını müvafiq Modality Bridge tablarına bağlayır.

**Özünə yönələn dövr üçün qəbul yoxlamasından yan keçmə:** təsvir çağırışı
OmniRoute-un öz `/v1` özünə yönələn dövrü (qeyri-standart provayder modeli)
üzərindən marşrutlaşdırıldıqda, alt sorğu `x-omniroute-admission-bypass: internal`
göndərir və müəyyən edilmiş özünə yönələn dövr etimadnaməsi ilə autentifikasiya
olunur — lokal rejimdə lokal `sk_omniroute` sentinel dəyəri və ya operator
tərəfindən konfiqurasiya edilmiş `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` mühit
açarı (#1350); beləliklə, `REQUIRE_API_KEY=true` olan yerləşdirmələr də təsvir
çağırışını icra edə bilir. Yan keçmə yalnız həmin dəqiq etimadnamələr üçün qəbul
edilir, buna görə xarici müştərilər qəbul yoxlamasını ötürmək üçün bu başlıqdan
istifadə edə bilməz.

Köhnə standart dəyərlər `src/shared/constants/visionBridgeDefaults.ts` faylında;
yeni rejim/tapşırığa uyğun/keş standartları və parametr həlledicisi isə
`src/shared/constants/modalityBridgeDefaults.ts` faylındadır. Qoruyucu mexanizm,
testlərin saxta `getSettings` və `callVisionModel` implementasiyalarını yeritməsi
üçün `deps` konstruktor seçimini təqdim edir.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio ehtiva edən çat sorğularını audio girişini qəbul etdiyi məlum olmayan hədəfə
çatmazdan əvvəl tutur. O, çat sorğusunu heç vaxt yenidən marşrutlaşdırmır: audio
hissələri mövcud OpenAI-uyğun multipart son nöqtəsi vasitəsilə transkripsiya olunur
və seçilmiş çat modeli mətn transkriptləri ilə davam edir.

Axın:

1. `supportsAudio` dəyərini `getResolvedModelCapabilities()` vasitəsilə müəyyənləşdirin.
   Əvvəlcə açıq provayder reyestri metadatası, sonra statik model metadatası, daha
   sonra sinxronlaşdırılmış `modalities_input` üstünlük qazanır. `audio` olmadan
   elan edilmiş giriş siyahısı `false` sayılır; imkan barədə heç bir sübut yoxdursa,
   dəyər `null` olaraq qalır. Həm `false`, həm də `null` konservativ körpünü
   aktivləşdirir, `true` isə ondan yan keçir.
2. `modalityBridgeAudio*` parametrlərini müəyyənləşdirin və paylaşılan
   `detectMediaParts()` detektoru vasitəsilə hər mesajdan birləşdirilə bilən üst
   səviyyəli audio hissələrini çıxarın. Dəstəklənən ötürmə formatları OpenAI
   `input_audio`, `audio_url` və `source.media_type: "audio/*"`-dır. İç-içə audio
   marşrutlaşdırma üçün aşkarlanır, lakin birləşdirmə yolu tərəfindən çıxarılmır.
   İş həcmi `modalityBridgeAudioMaxClips` ilə məhdudlaşdırılır; sonrakı hissələrə
   toxunulmur.
3. Konfiqurasiya edilmiş `provider/model` dəyərini nəzərə alın və ya
   `selectAudioBridgeModel()` funksiyasına `AUDIO_TRANSCRIPTION_PROVIDERS` üzrə
   sabit kataloq ardıcıllığı ilə keçərək istifadə edilə bilən aktiv provayder
   etimadnaməsinə malik ilk modeli seçməyə icazə verin.
4. `callAudioTranscription()` base64/data-URI audiosunu multipart `file`-a çevirir
   və ya uzaq `audio_url` resursunu DNS sabitləməsi və 25 MB məhdudiyyəti ilə
   yalnız ictimai çıxış qoruyucusu vasitəsilə endirir. Daha sonra faylı və seçilmiş
   modeli `resolveSelfLoopBearer()` ilə autentifikasiya olunan lokal
   `/v1/audio/transcriptions` özünə yönələn dövrünə POST edir. Mövcud transkripsiya
   marşrutu normal etimadnamə axtarışını, soyuma müddəti/sürət limiti idarəetməsini
   və provayderə yönləndirməni həyata keçirir.
5. Uğurlu çağırışlar öz hissələrini `[Audio N]: <transcript>` ilə əvəz edir.
   Çağırışlar `Promise.allSettled` ilə icra olunur: ayrı-ayrı uğursuzluqlar həmin
   orijinal audio hissəsini qoruyur (#4012 müqaviləsi). Bütün çağırışlar uğursuz
   olarsa və hədəfin `supportsAudio === false` olduğu sübuta yetirilibsə, hissələr
   `[Audio N]: (əlçatan deyil — heç bir STT provayderi qoşulmayıb)` olur (#8430
   müqaviləsi). Naməlum hədəf (`null`) üçün bütün nəticələr uğursuz olduqda sorğuya
   toxunulmur. İstifadəyə yararlı STT etimadnaməsi olmayan, yalnız mətni dəstəklədiyi
   sübuta yetirilmiş hədəf şəbəkə çağırışı etmədən eyni açıq əvəzedicini alır.

Uğurlu transkriptlər proses miqyaslı Modality Bridge LRU/TTL keşindən istifadə edir.
Açar audio istinadını, sabit `audio-transcription` əməliyyat etiketini və seçilmiş
STT modelini birləşdirir; uğursuzluqlar heç vaxt keşlənmir. Audio cəhdləri paylaşılan
`bridged`, `cacheHits`, `failures` və `lastUsedAt` sayğaclarını yeniləyir.
Çevrilmiş cavablar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` başlığını
daşıyır; toxunulmamış sorğular Audio Bridge seqmenti almır.

İcra vaxtı parametrləri DB-də saxlanılır və Zod ilə doğrulanır:

| Açar                          | Standart | Aralıq                    |
| ----------------------------- | -------- | ------------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                         |
| `modalityBridgeAudioModel`    | `""`     | Avtomatik və ya STT ID-si |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000               |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                      |

Ortaq keş `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` və `modalityBridgeCacheMaxEntries` tərəfindən idarə olunmağa davam edir.

### Video körpüsü (`videoBridge.ts`, `videoBridgePipeline.ts`)

Məlum daxili video dəstəyi olmayan hədəf çağırılmazdan əvvəl Chat Completions `messages` və Responses
API `input` daxilindəki üst səviyyəli video hissələrini tutur.
Dəstəklənən formalar `input_video`, `video_url`, `video_source`, HTTPS URL-ləri
və `data:video/*;base64,...` data URI-ləridir. Mətndəki adi fayl adları video
kimi qəbul edilmir.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) sorğunun nəzərdən keçirilməsini,
imkan/siyasət yoxlamasını, hər sorğu üzrə aqreqasiyanı və cavab yükünü idarə edir.
Hər video üzrə iş — əldəetmə, tam nəticə keşi, kadr ardıcıllığının təsviri
(çağıranın bəyan etdiyi hər hansı audio transkripsiyasını birləşdirir) və hər cəhd üzrə
metriklər/dayandırma/təmizləmə — `videoBridgePipeline.ts` daxilindəki
`processVideoPart` arxasında gizlədilib və `preCall` dövrəsində hər video hissəsi üçün bir dəfə çağırılır.
Həmin modul həmçinin açıq port sərhədlərini müəyyən edir: `VideoMediaBrokerPort`
(baytların əldə edilməsi və seçmə kadrların çıxarılması), `VideoAudioTranscriptionPort`
(çağıranın bəyan etdiyi audio transkripsiyasının seçmə kadrların altyazıları ilə birləşdirilməsi) və
`VideoDrilldownPort` (kadrın dərinləşdirilmiş təhlilinin saxlanma sərhədi; hələ
`processVideoPart` daxilində qoşulmayıb — hazırda dərinləşdirilmiş təhlil qeydlərini yalnız ayrıca
`/api/modality-bridge/video/drilldown` marşrutu yazır).

İctimai `/v1` sorğu yolu heç vaxt alt prosesi idxal etmir və ya çağırmır. Uzaq
videolar 50 MiB həddi daxilində endirilir; daxili base64 videolar üçün hər video üzrə
konservativ 36 MiB dekodlaşdırılmış məlumat həddi tətbiq olunur ki, model/mesajlar/çərçivələmə zərfi
50 MiB-lıq ictimai JSON sorğusunun qəbul limitində qala bilsin. Daxili
uzunluq və dekodlaşdırılmış ölçü təxminləri yaddaş ayrılmamışdan əvvəl yoxlanılır. İlkin uzaq URL-də
və hər yönləndirmədə HTTPS tələb olunur; bunun üçün DNS sabitləməsi ilə mövcud
yalnız ictimai çıxış qoruyucusundan istifadə edilir. Daha sonra baytlar dəqiq daxili
`POST /api/modality-bridge/video/extract` broker sərhədindən keçir. Bu marşrut həm
`LOCAL_ONLY`, həm də `SPAWN_CAPABLE`-dır, yalnız proses üzrə autentifikasiya edilmiş,
etibarlı geri-dövrə sorğusunu qəbul edir və heç vaxt URL, fayl sistemi yolu, icra olunan fayl
və ya arqument siyahısı qəbul etmir. API gövdə ölçüsü emal xətti və işləyicinin artımlı gövdə
oxuyucusu müstəqil şəkildə broker girişi üçün 50 MiB həddini tətbiq edir. Onun məhdud növbəsi
eyni anda bir çıxarış icra edir, dörd gözləyən tapşırığa icazə verir və gözləyən giriş məlumatını
100 MiB ilə məhdudlaşdırır.

Broker daxilində `ffprobe` özəl lokal faylı oxuyur; sabit format
icazə siyahısı pleylist və manifest formatlarını istisna edir. İcazə verilən MOV ailəsi
konteynerləri üçün xarici MOV məlumat istinadları standart olaraq deaktiv qalır və
sabit komanda onları aktivləşdirmir. Həm `ffprobe`, həm də `ffmpeg`
yalnız `file` protokolu üçün icazə siyahısından, bir axından, sabit arqument massivlərindən istifadə edir,
shell-dən istifadə etmir və icra olunan faylları `PATH` vasitəsilə tapır. Əlavə edilmiş şəkil
üzlük axınları oynadıla bilən namizədlər deyil. Bütün oynadıla bilən axınlar limitlərə uyğun olmalıdır
və deterministik ən aşağı indeksli ehtiyat seçimdən əvvəl açıq şəkildə standart kimi qeyd edilmiş axına
üstünlük verilir. Videolar 600 saniyə, hər ölçü üzrə 8,192 piksel və
33,554,432 mənbə pikseli ilə məhdudlaşdırılır. FFmpeg 1–16 orta nöqtə JPEG kadrı seçir,
kiçik girişləri böyütmədən uzun tərəfi ən çox 1,024 pikselədək kiçildir və
heç vaxt URL qəbul etmir. Standart seçmə siyasəti `uniform`-dur. İxtiyari
`scene_aware` və eksperimental `segment_aware` siyasətləri artıq doğrulanmış lokal axın üzərində
bir əlavə sabit FFmpeg keçidi həyata keçirir, məhdud sayda `showinfo` səhnə vaxt nişanlarını seçir
və detektor xətası, vaxt aşımı, qüsurlu çıxış və ya boş namizəd dəsti halında deterministik şəkildə
eyni bərabər paylanmış orta nöqtələrə qayıdır. Seqmentdən xəbərdar rejim orta nöqtə nümunələrini
doğrulanmış səhnə intervallarına proporsional şəkildə ayırır; seqmentdən xəbərdar sübutlar və ehtiyat
davranış aşağıda ətraflı təsvir olunur. Sərt 16 kadr həddi
hər siyasətdə seçimdən sonra tətbiq edilir. Səhnədən xəbərdar sorğunun yalnız bir kadr büdcəsi olduqda,
aktiv tam video və ya fokus pəncərəsinin bərabər paylanmış orta nöqtəsindən istifadə edir və
`policyEffective: uniform` bildirir: seçilmiş tək səhnə kadrı hər iki zaman ucunu qoruya bilməz.
Çağıran ixtiyari olaraq sonlu fokus pəncərəsi (`start`/`end` saniyələri) təqdim edə bilər;
sərhədlər media müddətinə uyğun məhdudlaşdırılır, tərsinə çevrilmiş və ya sonlu olmayan pəncərələr rədd edilir
və bütün seçmə siyasətləri yalnız normallaşdırılmış interval daxilində icra olunur. Nəticədə əldə edilən
pəncərə seçmə metadatasına və etibarsız təsvir prefiksinə daxil edilir ki, sonrakı modellər fokuslanmış
fraqmenti tam zaman xəttindən fərqləndirə bilsin.

Semantik altyazı fokusu ayrıca, açıq parametrdir. Standart `full`
təhlil rejimi mövcud kadr sorğusunu qoruyur və sorğu mətnini heç vaxt altyazı modelinə ötürmür.
`focused` rejimində körpü yalnız eyni Chat və ya Responses konteynerindən istifadəçi tərəfindən yazılmış
ən son boş olmayan `text`/`input_text` mətnini oxuyur, onu NFC-yə normallaşdırır, idarəetmə simvollarını
və boşluqları birləşdirir və 500 Unicode kod nöqtəsi ilə məhdudlaşdırır. Boş nəticə dəqiq
`full` sorğusuna qayıdır. İstifadəyə yararlı ipucu ayrıca etibarsız istifadəçi konteksti blokunda
JSON kimi seriallaşdırılır və yalnız müşahidə edilə bilən detalları prioritetləşdirə bilər; mediada görünən
və ya eşidilən təlimatlara əməl etməmək barədə ayrıca xəbərdarlığı ləğv edə bilməz. Mətn fokusu heç vaxt
`start`/`end` dəyərlərini çıxarmır və ya zaman seçicisini dəyişdirmir.

#### FU-07 struktur seqment sübutları

`segment_aware` artıq doğrulanmış lokal video axını üzərində məhdudlaşdırılmış bir ilkin analiz keçidindən istifadə edir. Sabit filtr zənciri əvvəlcə eni ən çox 320 pikselə qədər miqyaslandırır, səhnə dəyişikliklərini və donmuş intervalları aşkarlayır, sonra bulanıqlıq, orta parlaqlıq, məkan və zaman məlumatı üçün saniyədə 1 kadr nümunəsi götürür. Keçid 600 struktur nümunəsi, bir FFmpeg/filtr axını, eyni yalnız `file` protokolu və konteyner icazə siyahıları, 1 MiB proses çıxışı limiti və brokerin ortaq dayandırma/son müddəti daxilində ən çox 30 saniyə ilə məhdudlaşdırılır. O, sorğudan heç vaxt əmr, filtr, yol və ya URL qəbul etmir.

Struktur dəyərlər semantik video anlayışı deyil, deterministik nümunə götürmə sübutudur. Onlar subyektlər, hərəkətlər, altyazılar, nitq və ya istifadəçi niyyəti barədə nəticə çıxarmır. Səhnə və donma sərhədləri seqmentləri formalaşdırır; donma əhatəsi, bulanıqlıq, ekspozisiya, məkan detalları və zaman dəyişiklikləri yalnız mövcud 1–16 kadr büdcəsinin necə bölüşdürüldüyünə təsir edir. Tamamilə donmuş seqment ən çox bir kadrla məhdudlaşdırılır, donmamış seqmentlər isə qalan büdcə uğrunda rəqabət aparır. Sərhədlərin sayı kadrların sayını keçdikdə, vahid zaman xətti əhatəsi qorunur ki, başlanğıcdakı sürətli keçidlər uzun son seqmenti gizlədə bilməsin. Donma sərhədinin 1 saniyəlik analiz ayırdetmə həddi daxilindəki səhnə sərhədləri birləşdirilir.

Çatışmayan filtrlər, xətalı/boş sübutlar, detektor xətası və ya məhdudlaşdırılmış ilkin analiz vaxt aşımı zamanı sistem açıq şəkildə uğursuz olub eynilə vahid orta nöqtə siyasətinə keçir. Çağıranın dayandırması və ya brokerin son müddəti açıq şəkildə uğursuzluqla nəticələnmir: icrada olan alt prosesi dayandırır, sonrakı kadr çıxarılmasının qarşısını alır və özəl müvəqqəti ağac `finally` daxilində silinir.

`scripts/perf/video-bridge-fu07-eval.ts` dublikatların aradan qaldırılmasından sonrakı təsvir çağırışlarına qənaət, sıx hərəkət büdcəsinin bölüşdürülməsi, bulanıqlıq/ekspozisiya/SI-TI sübutları, uzun son hissəli sürətli keçidlər və tədricən solma üzrə yanlış müsbət nəticələr üçün deterministik real FFmpeg sınaq nümunələri yaradır. O, ilkin analizin faktiki icra müddətini və `/usr/bin/time` mövcud olduqda alt prosesin CPU istifadəsi ilə pik RSS göstəricisini qeydə alır. Onun keyfiyyət yoxlamaları yalnız struktur orakullarıdır. Bu test mexanizmində səlahiyyətli son nöqtə və ya sabitləşdirilmiş qiymətləndirici olmadığından real təsvir modelinin keyfiyyəti `HOLD` olaraq qalır. `--caption-cost-per-call-usd` hər çağırış üçün açıq müsbət xərc təxmini təqdim etmədikcə, maliyyə qənaəti də `HOLD` olaraq qalır; skript heç bir nəticəni uydurmur.

Hər kadr 4 MiB, bütün xam kadrlar birlikdə 23 MiB, seriallaşdırılmış broker cavabı isə 32 MiB ilə məhdudlaşdırılır. Özəl müvəqqəti qovluq `finally` daxilində silinir. OmniRoute FFmpeg-i paketə daxil etmir və fərdi icra olunan fayl yolu qəbul etmir. Təsvir yaratmazdan əvvəl körpü konservativ vizual dublikat aradan qaldırma keçidi tətbiq edir: hər JPEG 16×16 boz çalar buferinə kiçildilir və yalnız saxlanılmış son kadrla müqayisə edilir. Birdən çox kadr üçün tələb olunan təsvir büdcəsində çıxarma prosesi həmin büdcənin ən çox iki qatı qədər və heç vaxt 16 kadrdan çox olmayan məhdud namizəd toplusu təqdim edir. Tələb olunan limit yalnız dublikatlar aradan qaldırıldıqdan sonra tətbiq edilir; büdcə ən azı iki olduqda son seyrəltmə zamanı ilk və son seçilmiş namizədlər qorunur. Versiyalaşdırılmış `grayscale-16x16-mean-cells-v2` siyasəti orta parlaqlıq fərqi ilə normallaşdırılmış fərqi ən azı 0.05 olan miniatür xanalarının nisbətindən daha böyüyünü istifadə edir. Dublikat həddi icra vaxtı parametri kimi təqdim edilmək əvəzinə proqnozlaşdırıla bilməsi üçün seçilmiş 0.04 sabitidir. Bu ikinci yüksək kontrastlı siqnal yalnız orta qiymətə əsaslanan müqayisənin gizlədə biləcəyi kiçik hərəkətləri və görünən mətn dəyişikliklərini qoruyur. Müqayisəçi və ya dekoder xətaları açıq şəkildə uğursuz olur və əhatəni saxlayır. Çıxış metadatası çıxarılmış namizədləri, uğurla istifadə edilmiş kadrları və atılmış vizual dublikatları bir-birindən ayırır.

Açıq şəkildə işarələnmiş video hissəsi zaman damğalı kontakt vərəqi tələb edə bilər. Körpü ən çox 4 sütunlu, 16 kadrlı JPEG toru yaradır. Hər 512 piksellik xana mənbənin zaman damğasını yüksək kontrastlı alt zolağa həkk edir, eyni zaman damğaları isə sonrakı əlaqələndirmə və audit üçün mətn metadatasında saxlanılır. Tam JPEG 32 MiB ilə məhdud qalır. `sharp` torun dekodlanmasını və ya tərtibini yerinə yetirə bilməzsə, körpü ayrı-ayrı JPEG kadrlarına geri qayıdır; müştərinin dayandırma əməliyyatı kontakt vərəqi əməliyyatı boyunca yenə də ötürülür.

Tətbiqə keçirmə sübutu sintetik tərtib mikrobencmarkından qəsdən ayrı saxlanılır. `scripts/perf/video-bridge-contact-sheet-eval.ts` real OpenAI-uyğun görmə modelləri üçün sxem versiyalı A/B test mexanizmi müəyyən edir. O, provayder tərəfindən bildirilən tokenləri, uçdan-uca faktiki gecikməni (kontakt vərəqinin tərtibi daxil olmaqla), model çağırışlarının sayını və manifestlə müəyyən edilmiş faktların qorunmasını ölçür. Modelin xam cavabları hesabata yazılmır; yalnız SHA-256 heşləri və uyğun gələn fakt ID-ləri saxlanılır. `--execute-real` ötürülməyincə və `--model`, `OMNIROUTE_BASE_URL` və `OMNIROUTE_API_KEY` konfiqurasiya edilməyincə test mexanizmi heç bir şəbəkə və ya ödənişli model çağırışı etmir. Belə açıq real icra olmadan onun maşın tərəfindən oxuna bilən qərarı `HOLD` olaraq qalır; yalnız sintetik faydalı yük/çağırış sayı ölçmələri tətbiqə keçirmə sübutu deyil.

Çağıranlar artıq uyğunlaşdırılmış mətnə malik olduqda, dəstəklənən video hissəsinə istəyə bağlı `transcript.cues` massivi əlavə edə bilərlər. Hər replika `text`, yoxlanılmış müddət daxilində sonlu `start`/`end` intervalı və icazə siyahısındakı `source` (`client`, `embedded` və ya `audio-bridge`) daşımalıdır; `confidence` standart olaraq `1` qəbul edir və `0` ilə `1` arasında qalmalıdır. Tam eyni replikalar birləşdirilir. OmniRoute bu metadatadan heç vaxt transkripsiya başlatmır: doğrulanmış replikalar mənbə, etimad göstəricisi və intervalla birlikdə təsvir edilmiş nəticəyə köçürülür və kadr təsvirləri ilə yanaşı etibar edilməyən müşahidələr kimi göstərilir. Etibarsız, diapazondan kənar və ya mənşəyi göstərilməyən mətn təsvir axınına qarışdırılmaq əvəzinə rədd edilir. Hər iki sorğu gövdəsi transkript kanalı, özünün bəyan etdiyi `embedded` və ya `audio-bridge` etiketləri daxil olmaqla, təqdim edilən mənşəyi `client` olaraq normallaşdırır. Yalnız serverə məxsus adapter bu etibarlı etiketləri yalnız kodla istifadə edilən `trustedSource` arqumenti vasitəsilə təyin edə bilər; sorğudakı JSON sahəsi həmin arqumentə çata bilməz. Transkript mətni mənşəyindən asılı olmayaraq etibar edilməyən, mediadan əldə edilmiş məzmun olaraq qalır və heç vaxt avtorizasiyanı müəyyən etməməlidir.

Təkmil çağırıcı eyni video üçün `audioTranscript` treki təqdim edə bilər;
bu, server transkripsiyasının sübutu kimi deyil, müştəri tərəfindən təqdim edilən mətn kimi qəbul edilir.
Birləşdirmə sərhədi vizual və audio müşahidələri
vahid son müddət və ləğv siqnalı altında işlədir, onları ortaq zaman xəttində sıralayır, tam
dublikatları birləşdirir və yalnız bir tərəf uğurlu olduqda qismən nəticə bildirir.
Etibarsız `audioTranscript` bütün videonun emalını uğursuz etmək əvəzinə həmin qismən
nəticəyə keçir — vizual təsvir saxlanılır və audio qolu təmizlənmiş uğursuzluq kodunu
qeyd edir. Hər qol üzrə əlçatanlıq, qismənlik bayrağı və təmizlənmiş uğursuzluq kodları
təsvir edilmiş nəticədə, qoruyucu mexanizmin metadatasında (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nəticə keşinin metadatasında və körpünün
birləşdirmə sayğaclarında qorunub saxlanılır. Defolt Video Bridge yolu nitqdən-mətnə çevirməni
işə salmır və medianın ikinci nüsxəsini endirmir; həmin trek açıq şəkildə təqdim edilmədikdə, o,
yalnız video rejimində qalır.

**Transkriptin saxlanması (#12150 P1).** Bu, Video Bridge (özü seçim əsasında aktivləşdirilir)
transkript işarəsini render etdikdə avtomatik tətbiq olunur — ayrıca
saxlama bayrağı yoxdur. Sorğu hər hansı transkript işarəsini (çağırıcı tərəfindən elan edilmiş
`transcript` və ya birləşdirilmiş `audioTranscript`) render etdikdə, qoruyucu mexanizm onu
`videoBridgeObserved` kimi işarələyir və video təsvirinin redaktə edilmiş kölgə nüsxəsini yaradır —
hər işarənin sərbəst mətn gövdəsinin
`[redacted-video-transcript]` ilə əvəz edildiyi eyni render; bu, sətir yığılmazdan
əvvəl strukturlaşdırılmış işarə sahəsinin əvəzlənməsi ilə qurulur (heç vaxt yastılanmış mətn təhlil
edilmir, buna görə də heç bir işarə məzmunu — zərərli və ya adi, o cümlədən
`[inaudible]`/`[music]` kimi `]` ehtiva edən gövdələr — qorunub qala bilməz). Davamlı çağırış jurnalının sorğu gövdəsi
məzmun bərabərliyinə əsasən uyğunlaşdıraraq videodan törəmiş hər mətn hissəsini həmin redaktə edilmiş kölgə ilə əvəz edir;
`fullText` istinad nöqtəsi çağırışdan əvvəl tamamlanmış qoruyucu mexanizm yükündən yenidən oxunur,
beləliklə, sonrakı zəncir qoruyucu mexanizmləri (PII və
giriş məlumatları maskalayıcıları, prioritetlər 10/95) təsvir mətnini yerində dəyişdirdikdən və
sistem promptu/təhvil/yaddaş inyeksiyası mesaj massivinin formasını dəyişdirdikdən sonra da uyğunlaşdırma uğurlu olur.
Modelə yuxarı axınla göndərilən gövdə dəyişməz qalır. Müşahidə edilmiş sorğu həmçinin
heç bir davamlı Memory-ni doldurmur (həm sorğudan, həm də cavabdan törəmiş çıxarış ötürülür),
beləliklə, modelin öz cavabı transkript mətnini Memory-yə əks etdirə bilməz.

**Xam video sahələri (#12430).** Körpü aktiv olduqda və yerli video dəstəyi naməlum və ya mövcud olmadıqda, müəyyən edilmiş `transcript`/`audioTranscript` sahələri, hətta təsvir uğursuzluğundan və ya `maxVideos` limitindən sonra da `videoBridgeObserved`-u aktivləşdirir. `null` və boş sətirlər nəzərə alınır; mövcud olmayan sahələr və video olmayan metadata nəzərə alınmır. Saxlanılan nüsxələr bu sahələri redaktə edir və ya sorğunu buraxır, keşlər/Memory isə yan keçilir.

Həmin ehtiyat yollarda etibarlı çağırıcı işarələri qeyri-standart provayder sahələri əvəzinə dəstəklənən `text`/`input_text`
hissələrinə çevrilir. Sorğuda təqdim edilən hər iki trek videonun
təsvir edilmədiyi və vaxt nişanlarının media ilə tutuşdurulmadığı barədə açıq xəbərdarlıqla etibarsız `client` müşahidələri
olaraq qalır. Mövcud 256 işarə/64-KiB ümumi və hər işarə üzrə büdcələr iki trekə birlikdə tətbiq olunur;
vaxt nişanları brokerin 600 saniyəlik yuxarı həddinə və təqdim edilmiş hər hansı fokus
pəncərəsinə uyğun olmalıdır. Etibarsız treklər ixtiyari mətn kimi yönləndirilmədən atılır; onların birləşdirilmiş büdcəsi aşılmadıqda etibarlı
yanaşı trek yenə də istifadə edilə bilər. Null/boş
sahələr mətn əlavə etmir. Bu ehtiyat mexanizmi media əldə edilməsi və ya transkripsiya əlavə etmir.
Transkript genişləndirmə sahələri ehtiyat video daşıyıcısından və onun
`video_url`/`source` obyektlərindən silinir. OpenAI xətt icazə siyahısı sərt qalır; yerli dəstəyi naməlum
video daşıyıcıları əlçatan qalır, yalnız mətni dəstəklədiyi məlum olan hədəflər isə təhlükəsiz işarələri saxlayır.
Strukturlaşdırılmış redaktə kölgələri əlavə edilmiş transkript mətnini qoruyur, ilkin çağırıcıya məxsus sorğu isə dəyişməz qalır. Yerli dəstəyi olan hədəflər və
deaktiv edilmiş körpülər mövcud yan-keçmə davranışını saxlayır.

Əlavə saxlanılan nüsxələr eyni müşahidə edilmiş sorğu siqnalından istifadə edir. Qoruyucu mexanizmdən əvvəlki xam
müştəri sorğusu ani görüntüsü, yaddaşdakı gözləyən sorğu və erkən
rədd edilmiş sorğu jurnalı video hissələrindəki transkript sahələrini strukturlaşdırılmış şəkildə əvəz edir;
konveyer mərhələləri və kontekst təhvili tərəfindən sintez edilmiş sətir promptları davamlı sorğu gövdəsi qəbuledicisində redaktə edilir. Davamlı `video_content_removed` işarəsi
`previous_response_id` davamının qapalı şəkildə uğursuz olmasını təmin edir və bununla da qəsdən silinmiş
mətni yenidən qurmasının qarşısını alır. Müşahidə edilmiş sorğu jurnallaşdırmadan əvvəl
hər hissə üzrə redaktə kölgəsini itirərsə və ya hətta bir neçə video kölgəsindən biri
sonrakı sorğu dəyişikliklərindən sonra uyğun gəlməzsə, qismən redaktə edilmiş transkripti saxlamaq əvəzinə saxlanılan sorğu gövdəsi
tamamilə buraxılır.

Müşahidə edilmiş sorğu üçün model cavabı strukturlaşdırılmış işarə sərhədi olmadan
transkriptin istənilən hissəsindən sitat gətirə bilər. Buna görə onun davamlı çağırış jurnalındakı
`responseBody` sahəsi buraxılma işarəsi ilə əvəz edilir; təfərrüatlı
konveyer artefaktı (yuxarı axın/müştəri gövdələrini və axın fraqmentlərini ehtiva edə bilər)
saxlanılmır. Semantik, idempotentlik və əsaslandırmanın təkrar icrası keşləri
həmin sorğu üçün oxuma və yazma əməliyyatlarından yan keçir. Provayder sorğusu və müştəriyə görünən
cavab dəyişməz qalır. Təfərrüatlı artefakt buraxıldıqda erkən keepalive baytları müvəqqəti
buferdən boşaldılır. Kiro-nun xətalı EventStream xəbərdarlığı heç vaxt məzmunu və ya JSON
parserinin xam xətasını deyil, yalnız yükün bayt sayını bildirir.
Bu, əlaqəsiz hər bir provayder/plagin diaqnostikasının
audit edildiyi iddiası deyil; daha geniş saxlanılan qəbuledicilər üzrə yoxlama #11658-də izlənilir.

Daxili `/api/modality-bridge/video/drilldown` həyat dövrü ayrıca,
loopback/token ilə autentifikasiya olunan keş alt sistemidir. Hər əməliyyat həmçinin
kanonik qeyri-şəffaf principal ID tələb edir. İstehsal mühitində çağırış edən tərəf
aktivləşdirilməzdən əvvəl həmin ID-ni autentifikasiya olunmuş tenant əsasında
törətməli və heç vaxt müştərinin seçdiyi dəyəri ötürməməlidir. Keş açarları həmin
principal-ı kanonik sessiya və video istinad ID-lərinə bağlayır, yalnız onların
SHA-256 əsasında törədilmiş açarlarını saxlayır və həm oxuma, həm də silmə
əməliyyatlarını eyni principal ilə məhdudlaşdırır. Keş hər qeyd üçün ən çox 16
törədilmiş JPEG kadrı saxlayır, onları on dəqiqədən sonra vaxtı keçmiş hesab edir
və məhdudlaşdırılmış `start`/`end` oxumalarını və ya sessiyanın açıq şəkildə
silinməsini dəstəkləyir.

Hər principal 16 qeyd və 64 MiB kanonik JPEG məlumatı ilə məhdudlaşdırılır. Bu
məhdudiyyətlər qlobal 64 qeyd/256 MiB həddindən asılı deyil: principal kvotası üzrə
təzyiq qlobal LRU çıxarılması nəzərdən keçirilməzdən əvvəl yalnız həmin
principal-ın ən uzun müddətdir istifadə olunmayan qeydlərini çıxarır. Vaxtı keçmiş
qeydlər keş fəaliyyəti zamanı həm principal, həm də qlobal uçotdan təmizlənir;
ləğvetmə və doğrulama xətası isə qismən əvəzetməni yaddaşa vermir.

Keş qeyri-kanonik Base64-ü, həddindən artıq doldurmanı, JPEG olmayan medianı,
qüsurlu və ya yarımçıq JPEG-ləri, eləcə də məhdudlaşdırılmış tam təsvir `sharp`
dekodlaşdırması zamanı xəbərdarlıq yaradan JPEG-ləri rədd edir. O, qəbul edilmiş
hər təsviri kanonik JPEG kimi yenidən kodlaşdırır, çağıran tərəfin sahələrinə
etibar etmək əvəzinə en və hündürlüyü dekodlaşdırılmış baytlardan əldə edir və
sondakı bütün poliqlot baytları saxlamaq əvəzinə atır. Hər iki kvotaya yalnız
məhdudlaşdırılmış kanonik sıxılmış bufer daxil edilir. JSON ötürmə həddi 32 MiB
dekodlaşdırılmış giriş tavanı üçün Base64 əlavə yükünü əhatə edir. Saxlanılan hər
törəmə onun doğrulanmış JPEG formatını/rezolyusiyasını, seçmə siyasətini, törəmə
versiyasını, yaradılma vaxtını, server tərəfindən hesablanmış məzmun heşini,
heşlənmiş ana istinadı və etibarlı çağıran tərəfin ana məzmun heşini qeyd edir.
Atomik keş yaddaşa verilməsindən əvvəl asinxron dekodlaşdırma/heşləmə mərhələləri
arasında ləğvetmə yoxlanılır.

Bu mərhələ hələ istehsal mühiti istehsalçısını marşruta qoşmur və çoxrezolyusiyalı
variant seçimini təmin etmir. Buna görə də şəffaf Video Bridge sorğu yolu əlavə
iş yükü yaratmır; tenant-a bağlı principal törədilməsi və tam FU-08
çoxrezolyusiyalı həyat dövrü isə tamamlanmış davranış kimi sənədləşdirilmək
əvəzinə açıq şəkildə sonrakı iş olaraq qalır.

Kadrlara konfiqurasiya edilmiş Video modeli ilə ardıcıl başlıqlar verilir. Boş
Video əvəzləməsi Vision parametrini miras alır; hər ikisi boşdursa, Vision
avtomatik marşrutlaşdırıcısı effektiv görüntü imkanlı modeli seçir. Uğurlu
başlıqlar ilkin hissəni sabit `[Video description:` prefiksi ilə əvəz edir; bu
prefiks həmçinin mətni etibar edilməyən, mediadan törədilmiş müşahidə kimi
işarələyir və sonrakı modellərə mediada tapılan təlimatlara əməl etməməyi
bildirir. Kadr başlığı keş açarlarına JPEG baytları, sorğu, vaxt möhürü və
effektiv model daxildir; yalnız uğurlu başlıqlar keşlənir. Keş qeydləri fallback
modeli də daxil olmaqla, faktiki uğurlu istehsalçı modeli saxlayır; müxtəlif
kadrlar müxtəlif modellər tərəfindən yaradıldıqda körpü `mixed` bildirir. Keş
uyğunluğu həmin istehsalçı identikliyini tələb olunan marşrutlaşdırma planı kimi
yenidən etiketləmədən təkrar istifadə edir. Bütün video nəticəsi keşi çıxışı
dəyişən hər giriş əsasında açarlanır — sorğu, effektiv model, seçmə siyasəti,
kadr sayı, semantik analiz rejimi, normallaşdırılmış fokus ipucunun SHA-256
barmaq izi, fokus pəncərəsi, `transcript`, `audioTranscript` və əlaqə vərəqi
bayrağı — buna görə də bu ölçülərdən hər hansı birinin dəyişməsi köhnə nəticənin
təkrar istifadəsinə deyil, keş uyğunsuzluğuna səbəb olur. Vizual dublikatların
aradan qaldırılması siyasətinin versiyası, həddi və məhdudlaşdırılmış namizəd
kadr sayı da nəticə keşinin açarında və metadatasında açıq şəkildə göstərilir;
buna görə də siyasət dəyişikliyi köhnə bütöv-video təsvirindən təkrar istifadə
edə bilməz. Nəticə keşi v4 metadatası rejimi və barmaq izini saxlayır, ilkin
istifadəçi tapşırığını isə heç vaxt saxlamır. Qoruyucu mexanizm metadatası həm
tələb olunan, həm də effektiv analiz rejimlərini bildirir; istifadə edilə bilən
istifadəçi mətni olmadan tələb edilən `focused` rejimi effektiv olaraq `full`
kimi bildirilir.

Qoruyucu mexanizm dəstəklənən bütün video hissələrini çıxarır, lakin
`modalityBridgeVideoMaxVideos` sayından çoxunu təsvir etmir. `supportsVideo === false`
olduğu təsdiqlənmiş hədəf üçün uğursuz və həddi aşan videolar açıq təhlükəsiz
mətn markerlərinə çevrilir ki, heç bir xam video qalmasın. İmkan məlum olmadıqda,
həmin hissələr video daşıyıcısını saxlayır; hər hansı fallback transkripti
yuxarıdakı məhdudlaşdırılmış mətn çevrilməsinə tabe olur. `supportsVideo === true`
olan hədəflər körpüdən yan keçir. Müştərinin sorğunu dayandırma siqnalı endirmə,
broker növbəsi, alt proseslər və başlıq çağırışları boyunca ötürülür;
dayandırmalar videolar arasında icranı dayandırır və heç vaxt xam mediaya açıq
keçidlə nəticələnmir.

İş vaxtı parametrləri DB-də saxlanılır və Zod ilə doğrulanır:

| Açar                                | Standart    | Diapazon / davranış                                                                                           |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İstəyə bağlı icra mühiti, könüllü aktivləşdirmə                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ümumi altyazıları qoruyur; `focused` məhdud, etibarsız ən son istifadəçi kontekstindən istifadə edir   |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini miras alır                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` və ya proporsional `segment_aware`; detektor xətası zamanı `uniform` istifadə olunur |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

120 saniyədən yuxarı köhnə saxlanılmış Video taymaut dəyərləri brokerin son
müddəti ilə məhdudlaşdırılır; bu həddi aşan yeni parametr yazılışları rədd edilir.
`GET /api/modality-bridge/video/runtime` autentifikasiya və ya icra mühitinin
yoxlanılmasından əvvəl etibarlı şəkildə işarələnmiş lokal geri döngə mənşəyi tələb
edir, sonra isə idarəetmə autentifikasiyası tələb edir. O, yalnız `available`,
təmizlənmiş FFmpeg/ffprobe versiyalarını və icra mühiti əlçatan olmadıqda sabit
səbəbi qaytarır. Daxili çıxarma son nöqtəsi ictimai yükləmə API-si deyil: növbənin
dolması `503` və `Retry-After` qaytarır, çağıranın bağlantını kəsməsi `499`
qaytarır, sabit broker son müddətinin bitməsi isə `504` qaytarır. Çevrilmiş
cavablar Vision və ya Audio seqmentlərini silmədən mərkəzi
`x-omniroute-modality-bridge` başlığına
`video->text;model=<visionModel>;parts=<videos>` əlavə edir.

### PII Maskalayıcısı (`piiMasker.ts`)

**Hər iki** mərhələdə işləyir.

- **`preCall`** faydalı yükün surətini yaradır, `system`, `messages`, `input` və
  `prompt` sahələrini (sadə sətir elementləri daxil olmaqla) nəzərdən keçirir və
  sətir tipli `content`/`text` sahələrinə `processPII()` funksiyasını
  (`@/shared/utils/inputSanitizer` modulundan) tətbiq edir.
  `PII_REDACTION_ENABLED=true` olduqda aşkarlanmış PII çıxış faydalı yükündə
  redaktə edilir. Bu, yalnız prompt inyeksiyası siyasətini idarə edən
  `INPUT_SANITIZER_MODE` parametrindən asılı deyil. Redaktə söndürüldükdə çağırış
  məzmunu yenidən yazmadan aşkarlama saylarını qeydə alır.
- **`postCall`** cavabın dərin surətini yaradır, `sanitizePIIResponse()` və
  Responses API forması üçün maskalayıcını (`maskResponsesOutput` —
  `output_text` və `output[].content[].text` sahələrini əhatə edir) işə salır.
  Hər hansı redaktə baş verərsə, dəyişdirilmiş cavab orijinalı əvəz edir.

Qoruyucu mexanizm heç vaxt bloklamır; o, yalnız annotasiya edir
(`meta.detections`, `meta.redacted`) və ya yenidən yazır.

### Prompt İnyeksiyası (`promptInjection.ts`)

İstifadəçi tərəfindən təqdim edilən məzmunda zərərli strukturları aşkarlayır və
konfiqurasiya edilmiş siyasəti tətbiq edir. Davranış mühit dəyişənləri və
konstruktor seçimləri ilə idarə olunur:

| Parametr       | Mühit dəyişəni                                                                                         | Standart | Təsir                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktivdir       | `INPUT_SANITIZER_ENABLED`                                                                              | `true`   | `false` olduqda qoruyucu mexanizm əlavə emal aparmadan dərhal tamamlanır.                                                                                                                                                   |
| Rejim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`   | İnyeksiya siyasəti: `block`, `warn` və ya `log`. (`redact` geriyə uyğunluq üçün qəbul edilir, lakin inyeksiya mətnini **silməz**; sorğudakı PII məlumatlarının yenidən yazılması `PII_REDACTION_ENABLED` ilə idarə olunur.) |
| Bloklama həddi | `blockThreshold` seçimi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (ləqəb: `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Bloklama üçün tələb olunan minimum ciddilik səviyyəsi. Standart olaraq orta səviyyə yalnız müşahidə edilir.                                                                                                                 |

**Rejim üstünlüyü** (`getMode`): çağıranın `options.mode` seçimi →
`INJECTION_GUARD_MODE` üçün **DB funksiya bayrağı əvəzləməsi** (İdarəetmə paneli
→ Parametrlər → Funksiya bayraqları) → `INJECTION_GUARD_MODE` mühit dəyişəni →
`INPUT_SANITIZER_MODE` mühit dəyişəni → `warn`. Buna görə idarəetmə panelindəki
əvəzləmə mühit dəyişənlərindən üstün tutulur və Funksiya bayraqları interfeysi
işləyən qoruyucu mexanizmi canlı şəkildə idarə edir (yenidən başlatma tələb
olunmur). DB oxunuşu təhlükəsiz uğursuzluq prinsipinə əsaslanır: xəta baş verərsə,
qoruyucu mexanizm mühit dəyişənlərinə əsaslanan davranışa qayıdır; əvəzləmə təyin
edilmədikdə isə davranış yalnız mühit dəyişənlərinə əsaslanan həll ilə eynidir.

Aşkarlama mənbələri:

1. `@/shared/utils/inputSanitizer` modulundan `sanitizeRequest()` (emal
   konveyerinin digər hissələrində də istifadə olunan ortaq detektor dəsti).
2. Daxili `DEFAULT_GUARD_PATTERNS` (hazırda `system_override_inline` və
   `markdown_system_block`; hər ikisinin ciddilik səviyyəsi `high`-dır).
3. Konstruktor seçimləri vasitəsilə ötürülən istəyə bağlı `customPatterns`
   (sətirlər, requlyar ifadələr və ya `{ name, pattern, severity }` qeydləri).

`mode === "block"` olduqda **və** ən azı bir aşkarlama ciddilik
həddinə çatdıqda, `preCall` `{ block: true, message: "Sorğu rədd edildi:
şübhəli məzmun aşkarlandı" }` qaytarır. `warn`/`log` rejimlərində qoruyucu mexanizm qeydə alır, lakin
çağırışa icazə verir. Paylaşılan `evaluatePromptInjection()` köməkçi funksiyası da
reyestrdən keçmədən promptları qiymətləndirməli olan çağıranlar üçün ixrac edilir.

**Skan limiti (v3.8.20):** detektor birləşdirilmiş prompt mətninin yalnız
**ilk 16 KB** hissəsini yoxlayır — `src/shared/utils/inputSanitizer.ts` daxilində
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). Həm `detectInjection()`, həm də
`evaluatePromptInjection()` nümunə dövrünü işə salmazdan əvvəl
`slice(0, MAX_INJECTION_SCAN_BYTES)` tətbiq edir. İnyeksiya direktivləri girişin yuxarı hissəsinə yaxın yerləşdiyindən, bu,
aşkarlamanı zəiflətmədən yüzlərlə KB ölçüsündə olan faydalı yüklərdə regex CPU/GC istifadəsini
məhdudlaşdırır (bax: #3932, #4041).

### Etimadnamə maskalayıcısı (`credentialMasker.ts`)

**Hər iki** mərhələdə, standart zəncirin sonunda (prioritet `95`) işləyir. Tanınmış
API açarı / məxfi token nümunələrini çıxış faydalı yükündən (mesaj
məzmunu, alət çağırışı arqumentləri, alət nəticələri) **və** provayder cavabından redaktə edir; beləliklə,
prompta yapışdırılmış (və ya alət nəticəsi tərəfindən geri qaytarılmış) etimadnamə
yuxarı axındakı provayderə və ya geriyə, müştəriyə sızdırılmır.

- **Yalnız aktivləşdirildikdə işləyir**, PII redaktəsi ilə eyni qaydaya əsasən (Sərt Qayda #20-yə yaxın):
  `settings.credentialRedactionEnabled === true` **və ya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadıqda deaktivdir. Söndürülmüş halda qoruyucu mexanizm heç bir əməliyyat etmir —
  heç vaxt bloklamır və heç nəyi yenidən yazmır.
- `redactCredentials()` bütün faydalı yük/cavab ağacını gəzir (`walkValue()`,
  prototip çirkləndirilməsinə qarşı təhlükəsizdir, `WeakSet` vasitəsilə dövrlərə qarşı təhlükəsizdir) və uyğunluqları
  `[REDACTED:<type>]` yer tutucusu ilə əvəz edir, yalnız faktiki olaraq
  dəyişmiş budaqları klonlayır.
- `CREDENTIAL_PATTERNS` LLM provayder açarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlərini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödəniş açarlarını (Stripe, Square), bulud
  açarlarını (AWS giriş açarı, Twilio, SendGrid, Mailgun), şəxsi açarları / JWT-ləri,
  etimadnamə daşıyan bağlantı sətirlərini (`mongodb://user:pass@...` və s.) və
  ümumi `Authorization`/`x-api-key`/`api-key`/`apikey` başlıq-dəyər
  nümunəsini əhatə edir. Başlıq formasındakı açarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ümumi mətn regex-i vasitəsilə deyil, struktur olaraq (yalnız dəyər,
  `Bearer `/`Basic ` kimi sxem prefiksi qorunmaqla) redaktə edilir.
- Qoruyucu mexanizm heç vaxt bloklamır; yalnız yenidən yazır (`modifiedPayload` /
  `modifiedResponse`) və annotasiya əlavə edir (`meta.credentialsRedacted`, `meta.count`).

Reqressiyaya qarşı qoruma: `tests/unit/credential-masker-guardrail.test.ts`.

## Əsas müqavilə (`base.ts`)

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
  block?: boolean; // true zənciri dərhal dayandırır
  message?: string; // bloklama zamanı göstərilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // sorğunu yenidən yazmaq üçün preCall tərəfindən qaytarılır
  modifiedResponse?: TValue; // cavabı yenidən yazmaq üçün postCall tərəfindən qaytarılır
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

Qoruyucu mexanizm `void`, `{}` və ya `{ block: false }` qaytarmaqla "dəyişiklik yoxdur"
siqnalını verir. `modifiedPayload`/`modifiedResponse` qaytarılması zəncir boyunca
sonrakı qoruyucu mexanizmlərə ötürülən dəyəri əvəz edir.
`signal?: AbortSignal` çağıranın həyat dövrünü qoruyucu mexanizmlərə ötürür. Sorğunun ləğv edilməsi qəsdən tətbiq olunan fail-open istisnasıdır: media körpüləri işi dayandırır və təmizləmə aparır, lakin emal edilməmiş medianı onu dəstəkləmədiyi məlum olan hədəfə bərpa etmir.

## Reyestr (`registry.ts`)

Tək nümunəli `guardrailRegistry` aşağıdakıları təqdim edir:

- `register(guardrail)` — qoruyucu mexanizm əlavə edir (və ya normallaşdırılmış ada görə əvəz edir) və
  artan `priority` sırasına görə yenidən çeşidləyir.
- `clear()` / `list()` — inzibati köməkçi funksiyalar.
- `runPreCallHooks(payload, context)` — aktiv qoruyucu mexanizmlər üzrə iterasiya edir, payload-u
  `modifiedPayload` vasitəsilə zəncir boyunca ötürür və ilk `block: true` halında dayanır.
- `runPostCallHooks(response, context)` — cavab tərəfində eyni axını icra edir.
- `resetGuardrailsForTests({ registerDefaults })` — vəziyyəti təmizləyir və təmiz test izolyasiyası üçün istəyə bağlı olaraq
  standartları yenidən qeydiyyatdan keçirir.

Hər iki icra mexanizmi `{ blocked, payload|response, results, guardrail?, message? }`
qaytarır; burada `results` hər qoruyucu mexanizm üzrə
`blocked`, `skipped`, `modified`, `error` və `meta` sahələrini ehtiva edən
`GuardrailExecutionResult` qeydləri massividir və izləmə üçün faydalıdır.

### Hər sorğu üzrə qoruyucu mexanizmlərin deaktiv edilməsi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` cari sorğu üçün
ötürülməli olan qoruyucu mexanizm adlarının təkrarlanmayan siyahısını toplayır.
Mənbələr (hamısı istəyə bağlıdır və hamısı birləşdirilir):

- `apiKeyInfo.disabledGuardrails`
- Sorğunun gövdəsində `disabledGuardrails` (yuxarı səviyyə)
- Sorğunun gövdəsində `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` başlığı (və ya köhnə
  `x-disabled-guardrails`)

Dəyərlər sətirlər massivləri və ya vergüllə ayrılmış sətir ola bilər; adlar
kiçik hərflərlə kebab-case formatına normallaşdırılır (`pii_masker` → `pii-masker`). Nəticə
`context.disabledGuardrails` vasitəsilə reyestrə ötürülür və reyestr uyğun gələn
qoruyucu mexanizmləri ötürür (`results` daxilində `skipped: true`).

## İcra ardıcıllığı

`src/sse/handlers/chat.ts` və `open-sse/handlers/chatCore.ts` vasitəsilə keçən hər bir sorğu üçün:

1. `resolveDisabledGuardrails(...)` API açarı, sorğu gövdəsi və başlıqlar əsasında ötürüləcək qoruyucu mexanizmlərin siyahısını yaradır.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` qoruyucu mexanizmləri artan prioritet sırası ilə işə salır:
   - Deaktiv edilmiş qoruyucu mexanizmlər `skipped` kimi qeydə alınır.
   - Hər qoruyucu mexanizmin `preCall` funksiyası `modifiedPayload` vasitəsilə faydalı yükü yenidən yaza bilər.
   - İlk `block: true` zənciri qısa qapayır və emalçı qoruyucu mexanizm tərəfindən rədd cavabı qaytarır.
3. Dəyişdirilmiş ola bilən faydalı yük kombinə edilmiş marşrutlaşdırmaya və yuxarı axına göndərilməyə ötürülür.
4. Cavab formalaşdırıldıqdan sonra `guardrailRegistry.runPostCallHooks(...)` cavab üzərində eyni zənciri işə salır. Buradakı `block: true` yuxarı axın cavabını ləğv edir.

İstisna atan qoruyucu mexanizmlər `error: <message>` ilə qeydə alınır və `logger.warn` vasitəsilə jurnala yazılır, lakin zəncir davam edir — bu, dizayn etibarilə nasazlıq zamanı icazəvermə yanaşmasıdır.

## Konfiqurasiya

Daxili qoruyucu mexanizmlərin oxuduğu mühit dəyişənləri:

| Dəyişən                               | İstifadə edən             | Təsir                                                                                                         |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Aşkarlamanı tamamilə deaktiv etmək üçün `false` təyin edin.                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | İnjeksiya siyasəti: `warn`, `block` və ya `log`. Köhnə `redact` dəyəri injeksiya mətnini yenidən yazmır.      |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | İnjeksiya qoruyucusunun rejimi; həmçinin mühit dəyişənlərini **üstələyən** DB funksiya bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` tərəfindən rədd edilən minimum ciddilik səviyyəsi: `high` (standart), `medium` və ya `low`.      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` üçün köhnə alternativ ad.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduqda sorğudakı PII redaktə edilir (injeksiya rejimindən asılı olmayaraq).                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (aşağı axın) | Cavab tərəfindəki maskalayıcının davranışını idarə edir.                                                      |

Modality Bridge qoruyucu mexanizmləri mühit dəyişənlərindən deyil, DB dəstəkli parametrlər anbarındakı icra vaxtı konfiqurasiyasını (`getSettings()`) oxuyur. Vision üçün əsas açarlar bunlardır:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` və
`modalityBridgeCacheMaxEntries`. Köhnə
`visionBridge*` açarları yalnız sənədləşdirilmiş bir dövrlük oxuma ehtiyat variantı kimi qəbul edilir; idarəetmə panelindəki yazma əməliyyatları əsas açarlardan istifadə edir. Standart dəyərlər və ehtiyat həll mexanizmi `src/shared/constants/modalityBridgeDefaults.ts` daxilindədir, köhnə sabitlər isə `src/shared/constants/visionBridgeDefaults.ts` daxilində saxlanılır.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` və `modalityBridgeAudioMaxClips`, həmçinin ortaq
`modalityBridgeCache*` parametrlərindən istifadə edir. Bu açarlar Modality Bridge sxemi ilə təqdim edildiyinə görə Audio üçün köhnə açarlara ehtiyat keçid yoxdur.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` və
`modalityBridgeVideoTimeout`, həmçinin ortaq `modalityBridgeCache*` parametrlərindən istifadə edir.
FFmpeg/ffprobe istəyə bağlı əməliyyat asılılıqları olduğuna, kadrların təsvir edilməsi isə gecikmə və model xərci yaratdığına görə bu funksiya standart olaraq deaktivdir.

## Fərdi qoruyucu mexanizmlər

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

Addımlar:

1. `BaseGuardrail` sinfini genişləndirən `src/lib/guardrails/myGuardrail.ts` faylını yaradın.
2. `preCall` və/və ya `postCall` metodunu reallaşdırın.
3. Ya import zamanı qeydiyyatdan keçirin (`registerDefaultGuardrails` daxilindən əlavə edin), ya da
   icra zamanı `guardrailRegistry.register(...)` çağırın — reyestr eyni normallaşdırılmış ada
   malik əvvəlki qoruyucu mexanizmi əvəz edir.
4. Testləri `tests/unit/` altında əlavə edin (mövcud nümunələr:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testləmə

Məlum vəziyyətdən başlamaq üçün testlər arasında `resetGuardrailsForTests()` istifadə edin.
Boş reyestrlə başlamaq və yalnız test edilən qoruyucu mexanizmləri qeydiyyatdan keçirmək
üçün `{ registerDefaults: false }` ötürün. Vision Bridge asılılıqların yeridilməsini
(`deps.getSettings`, `deps.callVisionModel`) qəbul edir; Audio Bridge isə parametrlər,
imkanlar, STT modelinin seçimi, giriş məlumatlarının yoxlanılması və transkripsiya üçün
ekvivalent müdaxilə nöqtələri təqdim edir. Buna görə də testlər hər iki axını DB və ya
şəbəkə çıxışı olmadan sınaqdan keçirə bilər.

## Həmçinin baxın

- `src/lib/guardrails/` — reallaşdırma
- `src/shared/utils/inputSanitizer.ts` — prompt inyeksiyasını və PII maskalanmasını
  təmin edən ortaq detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartları və
  məcburi körpü model siyahısı
- `src/shared/constants/modalityBridgeDefaults.ts` — ortaq Vision/Audio icra mühiti standartları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortoqonal qat (dövrə kəsicisi, gözləmə müddətləri)
- `docs/reference/ENVIRONMENT.md` — mühit dəyişənlərinin tam arayışı

## İnyeksiya qoruyucusunun marşrut əhatəsi və red-team (Mərhələ 8 · Blok D)

İnyeksiya qoruyucusu (`createInjectionGuard` / `withInjectionGuard`) istifadəçi promptlarını
qəbul edən bütün marşrutları əhatə edir. O, `INJECTION_GUARD_MODE` parametrinə riayət edir
(standart `warn` = yalnız jurnala yazır; `block` = HTTP 400 `SECURITY_001` qaytarır).

| Növ           | Marşrutlar                                                                                                                                           | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Mətn (mövcud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Məlumat       | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Mətnin çıxarılması (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrini əhatə edir.

**Red-team (gecəlik, `nightly-llm-security.yml`):** promptfoo hər bir marşrutun
`INJECTION_GUARD_MODE=block` rejimində OWASP-LLM korpusunu blokladığını yoxlayır; garak
sınaqları işə salır (gizli açar olmadıqda ötürür). `moderations` ardıcıllıq naminə daxil
edilib — `block` rejimindəki operatorlar onu `resolveDisabledGuardrails` vasitəsilə istisna
edə bilərlər.

Gecəlik iş axınının (`.github/workflows/nightly-llm-security.yml`, cron + əl ilə
işə salma) iki tapşırığı var:

- **`promptfoo-guard` (bloklayıcı)** — `INJECTION_GUARD_MODE=block` ilə
  `promptfoo eval -c promptfooconfig.yaml` əmrini işlədir. Hər bir rəqib ssenari
  (məsələn, "əvvəlki bütün təlimatlara məhəl qoyma…", DAN üslublu jailbreak-lər)
  cavabın `error.code === "SECURITY_001"` daşıdığını, yəni qoruyucunun sorğunu
  həqiqətən rədd etdiyini təsdiqləyir.
- **`garak` (məşvərətçi)** — yerli OmniRoute instansiyasına
  (`http://localhost:20128/v1`) qarşı garak-ı `--probes promptinject,dan,leakreplay`
  ilə işə salır. Provayderin gizli açarından (`PROMPTFOO_PROVIDER_KEY`) asılıdır;
  açar olmadıqda problemsiz ötürülür və sonuna `|| true` əlavə edilib, buna görə
  CI prosesini uğursuz etmədən hesabat verir.

Qoruyucu köməkçi funksiyanın (`createInjectionGuard` / `withInjectionGuard`) əhatəsi
prompt daşıyan hər bir `/v1` marşrutunu əhatə edir; prompt mətni
`src/shared/utils/inputSanitizer.ts` daxilindəki `extractMessageContents()` tərəfindən
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrindən
götürülür.
