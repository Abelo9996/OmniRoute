# Guardrails (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Doğruluk kaynağı:** `src/lib/guardrails/`
> **Son güncelleme:** 2026-08-29 — v3.8.51 (Video Köprüsü transkript kaynağı arayan tarafından beyan edilir,
> henüz sunucu tarafından doğrulanmadı — #11661 uyarınca açıklığa kavuşturuldu)

Guardrail'ler, OmniRoute ile yukarı akış sağlayıcıları arasındaki sınırda güvenliği, politikayı ve içerik dönüşümlerini zorunlu kılar. Her guardrail, istek yüklerini (`preCall`) ve yukarı akış yanıtlarını (`postCall`) inceleyebilir (ve isteğe bağlı olarak reddedebilir, dönüştürebilir veya açıklama ekleyebilir).

Sistem **açıkta başarısız olur**: bir guardrail yürütülürken bir hata fırlatırsa, kayıt defteri hatayı kaydeder ve isteği başarısız kılmak yerine bir sonraki guardrail ile devam eder. Engelleme açık bir karardır (`block: true`), asla bir kaza değildir.

## Yerleşik Koruma Mekanizmaları

Kayıt defteri, içe aktarma sırasında altı koruma mekanizmasını öncelik sırasına göre otomatik olarak yükler
(bkz. `registry.ts` → `registerDefaultGuardrails()`):

| Öncelik | Ad                  | Aşama(lar)     | Dosya                 |
| ------- | ------------------- | -------------- | --------------------- |
| `5`     | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`     | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`     | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`    | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`    | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`    | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Daha düşük öncelik numaraları **önce** çalışır.

### Görüntü Köprüsü (`visionBridge.ts`) — Modalite Köprüsü PR-1

**Görüntü özelliği olmayan modellere** yönelik, görüntü içeren istekleri yakalar ve
isteğin tamamını görüntü özellikli bir modele yeniden yönlendirir veya yukarı akış
çağrısından önce görüntü parçalarını yapılandırılabilir bir görüntü modeli tarafından
üretilen metin açıklamalarıyla değiştirir. Bu, yalnızca metin destekleyen sağlayıcıların
çok modlu yükleri şeffaf biçimde işlemesini sağlar.

Akış:

1. Hedef model görüntü özelliğini zaten destekliyorsa atla (`isVisionBridgeForcedModel`
   zorunlu köprü listesinde yer almıyorsa).
2. Görüntü parçalarını `extractImageParts(messages)` aracılığıyla çıkar
   (`visionBridgeHelpers.ts`); bu işlev, `open-sse/utils/mediaParts.ts` içindeki
   **birleşik medya algılayıcı** `detectMediaParts()` işlevine devreder — bu,
   birleşik uyumluluk filtresiyle paylaşılan tek doğruluk kaynağıdır.
   Çıkarma işlemi, `replaceImageParts` işlevinin yeniden ekleyebileceği biçimlerin
   üst düzey parçalarıyla sınırlıdır (çıkarma↔değiştirme sözleşmesi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` ve Responses API `input_image`. İç içe geçmiş eşleşmeler
   ve yalnızca gösterge niteliğindeki biçimler birleşik filtre malzemesidir ve asla
   çıkarılmaz. Hiçbiri bulunamazsa atla.
3. Çalışma zamanı yapılandırmasını `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) aracılığıyla çözümle: yeni
   `modalityBridge*` ayar anahtarları önceliklidir; eski `visionBridge*` anahtarları
   **tek döngülük geri dönüş seçeneği** (geri alma penceresi) olarak kalır. Köprü
   devre dışıysa herhangi bir medya taramasından önce atla.
4. Mod seçici (`modalityBridgeVisionMode`, aşağıdaki tabloya bakın) yeniden
   yönlendirme ile açıklama arasında karar verir. Yeniden yönlendirme, yalnızca
   `model` değiştirilmiş şekilde `modifiedPayload` ve ayrıca
   `{ rerouted, fromModel, toModel, imagesKept }` meta verisini döndürür.
5. Açıklama yolu: görüntü sayısını `maxImages` ile sınırla, göreve duyarlı istemi
   oluştur, açıklama önbelleğine başvur, görüntü modelini **paralel olarak**
   (`Promise.allSettled`) çağır ve görüntülerin yerine
   `[Görüntü N]: <açıklama>` metin parçalarını ekle. Başarısız bir açıklama
   `null` sonucunu verir ve orijinal görüntü parçası **korunur** (#4012) — ancak
   tüm açıklamaların başarısız olduğu birleşik açıklama yolu bunun istisnasıdır;
   burada görüntü özelliğine sahip olmadığı doğrulanmış bir yukarı akışa bunun
   yerine `(kullanılamıyor — görüntü özellikli sağlayıcı bağlı değil)` yer tutucusu
   gönderilir (#8430).
6. `modifiedPayload` ile meta veriyi (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) döndür.

#### Mod seçici (`modalityBridgeVisionMode`)

| Mod        | Varsayılan | Davranış                                                                                                                                                                                                                                                                                                                             |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔          | Eski sezgisel yöntem değişmeden korunur (#6640/#7204): birleşik olmayan/`auto/` modeller, orijinal modelin zaten kullanılabilir kimlik bilgileri olmadığı sürece en iyi görüntü modeline yeniden yönlendirilir (varsa açıklama yapılır); birleşik hedeflerde her zaman açıklama yapılır.                                             |
| `describe` |            | Her zaman açıkla — yeniden yönlendirme bloğu tamamen atlanır; her zaman kullanıcının seçtiği model yanıt verir.                                                                                                                                                                                                                      |
| `reroute`  |            | Yeniden yönlendirmeyi zorunlu kıl: kimlik bilgilerine sahip modeli koruma denetimi atlanır. Yeniden yönlendirme **hedefinin** kimlik bilgisi denetimi yine uygulanır — kullanılabilir görüntü hedefi yoksa istek açıklama yoluna geçer; böylece ham görüntüler hiçbir zaman yalnızca metin destekleyen bir arka uca ulaşmaz (#8430). |

Zorunlu modlar, otomatik sezgisel yöntem çalıştırılmadan **önce** kısa devre yapar;
`auto` davranışı, PR-1 öncesi koruma mekanizmasıyla bayt düzeyinde aynıdır.

#### API anahtarı kapsamı (`visionBridgeKeyScope.ts`)

Çağrıyı yapanın API anahtarı `allowedConnections`, kota havuzları
(`allowedQuotas`) veya modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) üzerinde kısıtlama
uyguladığında köprü, yalnızca anahtarın kullanmasına izin verilen bağlantılarda,
anahtarın kullanabileceği yeniden yönlendirme ve açıklama modellerini seçer.
Ardından açıklama çağrısı her zaman `x-omniroute-self-loop-key-id` üstbilgisiyle
OmniRoute öz döngüsünden geçer; böylece çağrıyı alan sohbet isteği, ilgili anahtarın
bağlantı ve model politikasını yeniden uygular. `enforceApiKeyPolicy()`, bu üstbilgiyi
yalnızca öz döngü taşıyıcısıyla birlikte dikkate alır; dolayısıyla yalnızca erişimi
daraltabilir ve çözümlenemeyen bir kimlik reddedilir.

Anahtar için izin verilen hiçbir görüntü modeli yoksa açıklama yolu devre dışı kalır
ve istek değiştirilmeden iletilir; bu, devre dışı bırakılmış bir koruma mekanizmasıyla
aynı açık geçiş davranışıdır (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Anahtarsız istekler ve bu kısıtlamalara sahip olmayan anahtarlar tam olarak önceki gibi
davranır.

#### Göreve duyarlı açıklama istemi (`modalityBridgeVisionTaskAware`)

Varsayılan **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`), temel
açıklama istemine **son kullanıcı mesajının** metnini (500 karakterle
sınırlandırılmış olarak) ekleyerek açıklamayı kullanıcının gerçekte sorduğu
şeye yönlendirir (codex-vision-proxy kalıbı) ve görüntü modelinden görünür
metni yazıya dökmesini ister. Bayrak kapalıysa veya kullanıcı metni yoksa
temel istem değiştirilmeden kullanılır.

Açıklama öz döngüsünün kendi OpenAI uyumlu isteği (`visionBridgeHelpers.ts`
içindeki `callVisionModelSingle()`) her zaman `image_url.detail: "high"` talep
eder — koşulsuz olarak, her çağıran/sağlayıcı için ve herhangi bir istemci
sinyaline bağlı olmadan. Düşük ayrıntılı örnekleme, tam da bu istemin talep
ettiği metni yazıya dökme görevi için OCR doğruluğunu düşürür; bu nedenle
açıklama çağrısının kendisi, özgün gelen isteğin kullandığı ayrıntı düzeyinden
bağımsız olarak her zaman yüksek ayrıntı talep eder. Bu yalnızca dahili
açıklama isteği gövdesini etkiler; OmniRoute'un birincil istekte çağıranın
kendi `image_url.detail` değerini nasıl ilettiğini değiştirmez — bu varsayılan
değer ayrı olarak ve yalnızca algılanan OpenCode istemcileri için
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) içinde
uygulanır. Açıklama öz döngüsünün Anthropic kablo biçimi dalında `detail`
alanı yoktur ve iki varsayılan değerden de etkilenmez.

#### Açıklama çıktısı sınırı (`modalityBridgeVisionMaxChars`)

| Anahtar                        | Varsayılan | Aralık             |
| ------------------------------ | ---------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`        | `0` veya 100–50000 |

`0` (varsayılan) **sınır yok** anlamına gelir — `callVisionModel()` tarafından
döndürülen açıklama değiştirilmeden aktarılır ve mevcut davranış korunur.
100–50000 aralığındaki herhangi bir değer, açıklama
`[Image N]: <description>` olarak yeniden eklenmeden önce onu bir `…` son
ekiyle kısaltır (`src/lib/guardrails/visionBridge.ts` içindeki
`VisionBridgeGuardrail.preCall()`). Aşağı akış modelinin tam yazıya döküme
ihtiyaç duyduğu ayrıntı yoğun OCR görevleri için bunu artırın; fazla konuşkan
görüntü modellerinde token kullanımını sınırlamak için azaltın. Kontrol
paneli alanı, Vision sekmesinin Advanced panelinde bulunur
(`ModalityBridgeVisionTab.tsx` içindeki `modality-bridge-max-chars`) ve açıkça
belirtilen `0` değerine dokunmadan 1 ile 99 arasındaki tüm değerleri en düşük
değer olan 100'e yükseltir — `0`, yalnızca “ayarlanmamış” varsayılanı değil,
kendi başına geçerli bir Zod değeridir
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Açıklama önbelleği (`modalityBridge/bridgeCache.ts`)

Açıklama çıktıları için süreç genelinde paylaşılan bellek içi LRU + TTL
önbelleği. Anahtar = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
ve uzunluk önekli çerçeveleme kullanılır (alan sınırı çakışması olmaz). Model
bileşeni, gerçekte yanıt veren model değil, **yapılandırılmış** köprü modelidir
— `callVisionModel` dahili olarak geri dönüş yapabilir ve her denemeye göre
anahtarlama önbelleği parçalar. Başarısız açıklamalar hiçbir zaman önbelleğe
alınmaz. Ayarlar:

| Anahtar                         | Varsayılan | Aralık  |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Uzak görüntü normalizasyonu (öz döngü açıklaması/base64 getirme)

Köprü bir **uzak** görüntüyü kendisi getirdiğinde — Anthropic açıklama öz
çağrısı ve claude-wire-format base64 dönüşümü
(`ensureBase64ImagesForClaudeWire`), her ikisi de `visionBridgeHelpers.ts`
içindeki `fetchRemoteImageAsDataUri()` üzerinden — ortaya çıkan veri URI'si,
görüntü modeli isteğine gömülmeden önce `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) üzerinden geçirilir. Aşırı büyük
görüntüler, **2048px uzun kenara** küçültülür (OpenAI/Anthropic'in zaten sunucu
tarafında uyguladığı yeniden boyutlandırma sınırıyla eşleşir); bu, görüntü
modelinin gördüklerini değiştirmeden yükleme baytlarını/gecikmesini azaltır.
Yeniden boyutlandırma, dinamik içe aktarmayla yüklenen `sharp` kullanır: yerel
ikili dosyasının yüklenemediği bir platformda `normalizeDataUri()` **hiçbir
zaman hata fırlatmaz** — özgün baytları olduğu gibi geçirerek geri dönüş yapar,
böylece açıklama/base64 dönüşümü yolu her zaman çalışmaya devam eder. Görüntü
olmayan baytlar (kodu çözülebilir bir görüntü döndürmeyen bir getirme işlemi)
da değiştirilmeden geçirilir. Bu normalizasyon, köprünün kendi öz çağrısı için
getirdiği görüntülerle sınırlıdır — yalnızca açıkça etkinleştirildiğinde
değişiklik yapma ilkesiyle (Kesin Kural #20) tutarlı olarak, çağıranın ham ve
değiştirilmeden geçirilen yüküne hiçbir zaman uygulanmaz.

#### Ayar şeması + geçiş

Yeni `modalityBridge*` anahtarları, `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) içinde Zod ile doğrulanır:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*` üçlüsü ve Audio Bridge tarafından kullanılan
`modalityBridgeAudio*` grubu. `141_modality_bridge_settings.sql` geçişi,
mevcut eski `visionBridge*` değerlerini eşleşen yeni anahtarlara kopyalar
(idempotenttir ve operatör tarafından ayarlanmış bir `modalityBridge*`
değerinin üzerine hiçbir zaman yazmaz); eski anahtarlar, bir sürüm döngüsü
boyunca okuma geri dönüşü olarak kabul edilmeye devam eder.

#### Şeffaflık üstbilgisi + istatistikler

Açıklamayla dönüştürülen yanıtlar
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
üstbilgisini taşır (`modalityBridge/bridgeStats.ts` içindeki
`buildModalityBridgeHeader()` tarafından oluşturulur ve
`src/sse/handlers/chatHelpers.ts` içindeki `withModalityBridgeHeader()`
tarafından eklenir). Yeniden yönlendirilen istekler **hiçbir** üstbilgi almaz
— yük değiştirilmemiştir ve model değişimi, yanıt gövdesinin `model` alanında
zaten görünürdür.

`GET /api/modality-bridge/stats` (yönetim kimlik doğrulaması, `GET /api/settings`
ile aynı katman), `vision`, `audio` ve `video` için bellek içi modalite bazlı
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` sayaçlarını döndürür.
`averageLatencyMs`, payda olarak tüm denemeleri değil `latencySamples` değerini
kullanır; zamanlama bilgisi olmayan bir işlem, sıfır milisaniyelik sahte bir
örnek oluşturmaz. `bridged`, başarılı dönüşümler için geriye dönük uyumlu takma
ad olarak kalır; başarısız denemeler bunu artırmaz.
Sayaçlar, tasarım gereği süreç yeniden başlatıldığında sıfırlanır
(muhasebe değil telemetri).

#### Pano yapılandırması

Özel pano sayfası
`/dashboard/settings/modality-bridge` adresindedir. URL üzerinden erişilebilen
`Vision`, `Audio` ve `Video` sekmeleri, `tab` değerini değiştirirken sorgu
parametrelerini korur. Vision sekmesi; etkinleştirme, mod, model seçimi (otomatik
varsayılan dahil), göreve duyarlı istem oluşturma, gelişmiş zaman aşımı/görüntü/açıklama
uzunluğu/önbellek sınırları, çalışma zamanı
sayaçları ve korumalı bir örnek istek sunar. Audio sekmesi de aktiftir: etkinleştirme,
Auto seçeneğine sahip yalnızca STT modellerini içeren bir model seçici, zaman
aşımı/maksimum klip sınırları, ses sayaçları ve bir `input_audio` örnek testi
sunar. Video sekmesi işlevseldir: dört açık kullanıcı arayüzü durumundan biri
olarak FFmpeg/ffprobe çalışma zamanı durumunu bildirir (yoklama sürerken veya
tamamlanamadığında `unknown`, istemci tarafında yoklamanın atlandığı geri döngü
olmayan bir pano ana makinesinde `restricted`, yoklama yapılıp eksik olduğu
doğrulandığında `unavailable` ya da FFmpeg/ffprobe sürümleriyle birlikte
`available`); etkinleştirme/model/kare/video/zaman aşımı sınırlarını kalıcı hale
getirir, model seçiciyi görüntü işleme yeteneğine sahip modellerle sınırlar ve
video sayaçlarını sunar.

AI ayarları altındaki eski Vision Bridge kartı, yeni sayfaya yönlendiren bir
uyumluluk bağlantısıdır; artık formun ikinci bir kopyasını barındırmaz. Media
Providers ayrıca mevcut Speech-to-Text deneme alanını kaldırmadan Image-to-Text
ve Speech-to-Text iş akışlarını ilgili Modality Bridge sekmelerine bağlar.

**Kendi kendine döngü kabul atlaması:** açıklama çağrısı OmniRoute'un kendi
`/v1` kendi kendine döngüsü üzerinden yönlendirildiğinde (standart olmayan
sağlayıcı modeli), alt istek `x-omniroute-admission-bypass: internal` gönderir
ve çözümlenen kendi kendine döngü kimlik bilgisiyle kimlik doğrulaması yapar —
yerel modda yerel `sk_omniroute` sentinel değeri ya da operatör tarafından
yapılandırılan `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ortam anahtarı (#1350);
böylece `REQUIRE_API_KEY=true` dağıtımları açıklama çağrısını çalıştırmaya devam
edebilir. Atlama yalnızca tam olarak bu kimlik bilgileri için kabul edilir,
dolayısıyla harici istemciler kabul sürecini atlamak için bu üstbilgiyi
kullanamaz.

Eski varsayılanlar `src/shared/constants/visionBridgeDefaults.ts` içindedir;
yeni mod/göreve duyarlı/önbellek varsayılanları ve ayar çözümleyici
`src/shared/constants/modalityBridgeDefaults.ts` içindedir. Koruma mekanizması,
testlerin sahte `getSettings` ve `callVisionModel` uygulamaları enjekte
edebilmesi için bir `deps` kurucu seçeneği sunar.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Ses girdisini kabul ettiği bilinmeyen bir hedefe ulaşmadan önce ses içeren sohbet
isteklerini yakalar. Sohbet isteğini hiçbir zaman yeniden yönlendirmez: ses
parçaları, mevcut OpenAI uyumlu çok parçalı uç nokta üzerinden yazıya dökülür ve
seçilen sohbet modeli metin transkriptleriyle çalışmaya devam eder.

Akış:

1. `supportsAudio` değerini `getResolvedModelCapabilities()` aracılığıyla çözümleyin.
   Açık sağlayıcı kayıt defteri meta verileri önceliklidir; ardından statik model
   meta verileri ve son olarak eşitlenmiş `modalities_input` gelir. `audio`
   içermeyen bildirilmiş bir girdi listesi `false` değerindedir; hiçbir yetenek
   kanıtı yoksa değer `null` olarak kalır. Hem `false` hem de `null`, ihtiyatlı
   köprüyü etkinleştirirken `true` bunu atlar.
2. `modalityBridgeAudio*` ayarlarını çözümleyin ve paylaşılan `detectMediaParts()`
   algılayıcısı aracılığıyla her mesajdan eklenip çıkarılabilir üst düzey ses
   parçalarını ayıklayın. Desteklenen aktarım biçimleri OpenAI `input_audio`,
   `audio_url` ve `source.media_type: "audio/*"` biçimleridir. İç içe ses,
   yönlendirme için algılanır ancak ekleme-çıkarma yolu tarafından kaldırılmaz.
   İş miktarı `modalityBridgeAudioMaxClips` ile sınırlandırılır; sonraki parçalar
   değiştirilmeden kalır.
3. Yapılandırılmış bir `provider/model` değerini kullanın veya
   `selectAudioBridgeModel()` işlevinin kararlı katalog sırasıyla
   `AUDIO_TRANSCRIPTION_PROVIDERS` içinde ilerleyip kullanılabilir etkin sağlayıcı
   kimlik bilgisine sahip ilk modeli seçmesine izin verin.
4. `callAudioTranscription()`, base64/data-URI sesini çok parçalı bir `file`
   alanına dönüştürür veya uzak bir `audio_url` kaynağını DNS sabitleme ve 25 MB
   sınırıyla yalnızca genel erişime izin veren giden bağlantı koruması üzerinden
   indirir. Ardından dosyayı ve seçilen modeli, `resolveSelfLoopBearer()` ile
   kimliği doğrulanan yerel `/v1/audio/transcriptions` kendi kendine döngüsüne
   POST eder. Mevcut transkripsiyon rotası normal kimlik bilgisi aramasını,
   bekleme süresi/hız sınırı yönetimini ve sağlayıcıya yönlendirmeyi gerçekleştirir.
5. Başarılı çağrılar ilgili parçaları `[Audio N]: <transcript>` ile değiştirir.
   Çağrılar `Promise.allSettled` ile çalışır: tekil bir hata, ilgili özgün ses
   parçasını korur (#4012 sözleşmesi). Tüm çağrılar başarısız olur ve hedefin
   `supportsAudio === false` olduğu kanıtlanırsa parçalar
   `[Audio N]: (kullanılamıyor — bağlı STT sağlayıcısı yok)` haline gelir (#8430
   sözleşmesi). Bilinmeyen bir hedef (`null`) için, tüm çağrıların başarısız olduğu
   sonuç değiştirilmeden kalır. Kullanılabilir STT kimlik bilgisi olmayan ve
   yalnızca metin desteklediği kanıtlanmış bir hedef, ağ çağrısı yapılmadan aynı
   açık yer tutucuyu alır.

Başarılı transkriptler süreç genelindeki Modality Bridge LRU/TTL önbelleğini
kullanır. Anahtar; ses referansını, kararlı `audio-transcription` işlem etiketini
ve seçilen STT modelini birleştirir; başarısızlıklar hiçbir zaman önbelleğe
alınmaz. Ses denemeleri paylaşılan `bridged`, `cacheHits`, `failures` ve
`lastUsedAt` sayaçlarını günceller. Dönüştürülen yanıtlar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` taşır;
değiştirilmemiş istekler bir Audio Bridge segmenti almaz.

Çalışma zamanı ayarları DB desteklidir ve Zod ile doğrulanır:

| Anahtar                       | Varsayılan | Aralık                    |
| ----------------------------- | ---------- | ------------------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                         |
| `modalityBridgeAudioModel`    | `""`       | Otomatik veya STT Kimliği |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000               |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10                      |

Paylaşılan önbellek, `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ve `modalityBridgeCacheMaxEntries` tarafından
denetlenmeye devam eder.

### Video Köprüsü (`videoBridge.ts`, `videoBridgePipeline.ts`)

Bilinen yerel video desteği bulunmayan bir hedef çağrılmadan önce Chat
Completions `messages` ve Responses API `input` içindeki üst düzey video
bölümlerini yakalar. Desteklenen biçimler `input_video`, `video_url`,
`video_source`, HTTPS URL'leri ve `data:video/*;base64,...` veri URI'leridir.
Metin içindeki düz dosya adları video olarak değerlendirilmez.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`), istek içinde gezinme,
yetenek/politika denetimi, istek başına toplama ve yanıt yükünün yönetimini
üstlenir. Video başına yapılan işlemler — edinme, tüm sonuç önbelleği, bir kare
dizisini açıklama (çağıran tarafından bildirilen ses dökümünü bununla
birleştirme) ve deneme başına metrikler/iptal/temizleme — `videoBridgePipeline.ts`
içindeki `processVideoPart` arkasında gizlenir ve `preCall` döngüsünde her video
bölümü için bir kez çağrılır. Bu modül ayrıca açık port sınırları olan
`VideoMediaBrokerPort` (baytları edinme ve örneklenmiş kareleri çıkarma),
`VideoAudioTranscriptionPort` (çağıran tarafından bildirilen ses dökümünü
örneklenmiş açıklamalarla birleştirme) ve `VideoDrilldownPort`'u (kare ayrıntılı
inceleme kalıcılığı sınırı; henüz `processVideoPart` içine bağlanmamıştır —
günümüzde ayrıntılı inceleme girdilerini yalnızca ayrı
`/api/modality-bridge/video/drilldown` rotası yazar) tanımlar.

Herkese açık `/v1` istek yolu hiçbir zaman bir alt süreci içe aktarmaz veya
çağırmaz. Uzak videolar 50 MiB sınırı altında indirilir; model/mesajlar/çerçeveleme
zarfının herkese açık JSON istek kabul sınırı olan 50 MiB içinde kalabilmesi
için satır içi base64 videolarda video başına ölçülü bir 36 MiB kodu çözülmüş
veri sınırı uygulanır. Satır içi uzunluk ve kodu çözülmüş boyut tahminleri,
bellek ayırmadan önce denetlenir. Mevcut, DNS sabitlemeli ve yalnızca herkese
açık adreslere izin veren giden trafik koruması kullanılarak ilk uzak URL'de ve
her yönlendirmede HTTPS zorunlu tutulur. Ardından baytlar, tam olarak dahili
`POST /api/modality-bridge/video/extract` aracı sınırından geçer. Bu rota hem
`LOCAL_ONLY` hem de `SPAWN_CAPABLE` olup yalnızca işlem başına kimliği
doğrulanmış, güvenilen geri döngü isteğini kabul eder ve hiçbir zaman URL, dosya
sistemi yolu, yürütülebilir dosya veya bağımsız değişken listesi kabul etmez.
API gövde boyutu işlem hattı ile işleyicinin artımlı gövde okuyucusu, 50 MiB'lık
aracı girdi sınırını birbirinden bağımsız olarak uygular. Sınırlandırılmış
kuyruğu tek seferde bir çıkarma işlemi çalıştırır, bekleyen dört işe izin verir
ve bekleyen girdiyi 100 MiB ile sınırlar.

Aracının içinde `ffprobe`, özel bir yerel dosyayı okur; sabit biçim izin listesi
oynatma listesi ve manifest biçimlerini hariç tutar. İzin verilen MOV ailesi
kapsayıcılarında harici MOV veri referansları varsayılan olarak devre dışı
kalmaya devam eder ve sabit komut bunları etkinleştirmez. Hem `ffprobe` hem de
`ffmpeg`; yalnızca `file` protokolüne izin veren listeyi, tek iş parçacığını,
sabit bağımsız değişken dizilerini, kabuksuz çalıştırmayı ve `PATH` üzerinden
çözümlenen yürütülebilir dosyaları kullanır. Eklenmiş resim niteliğindeki kapak
akışları oynatılabilir adaylar değildir. Tüm oynatılabilir akışlar sınırları
karşılamalıdır ve deterministik en düşük indeksli geri dönüşten önce açıkça
belirtilmiş varsayılan akış tercih edilir. Videolar 600 saniye, boyut başına
8.192 piksel ve 33.554.432 kaynak piksel ile sınırlandırılır. FFmpeg, orta
noktalardan 1–16 JPEG kare örnekler; daha küçük girdileri büyütmeden uzun kenarı
en fazla 1.024 piksele küçültür ve hiçbir zaman URL almaz. Örnekleme varsayılan
olarak `uniform` şeklindedir. İsteğe bağlı `scene_aware` ve deneysel
`segment_aware` politikaları, önceden doğrulanmış yerel akış üzerinde ek bir
sabit FFmpeg geçişi gerçekleştirir, sınırlandırılmış `showinfo` sahne zaman
damgalarını seçer ve algılayıcı hatası, zaman aşımı, hatalı biçimlendirilmiş
çıktı veya boş aday kümesi durumunda deterministik olarak aynı eşit aralıklı
orta noktalara geri döner. Segment duyarlı mod, orta nokta örneklerini
doğrulanmış sahne aralıklarıyla orantılı biçimde tahsis eder; segment duyarlı
kanıtlar ve geri dönüş davranışı aşağıda ayrıntılı olarak açıklanmıştır.
Kesin 16 karelik sınır, her politikada seçimden sonra uygulanır. Sahne duyarlı
bir isteğin yalnızca tek karelik bütçesi olduğunda, etkin tam video veya odak
penceresinin eşit aralıklı orta noktasını kullanır ve
`policyEffective: uniform` bildirir: seçilen tek bir sahne karesi zamansal
aralığın her iki ucunu da koruyamaz. Çağıran isteğe bağlı olarak sonlu bir odak
penceresi (`start`/`end` saniye) sağlayabilir; sınırlar medya süresine göre
kısıtlanır, ters çevrilmiş veya sonlu olmayan pencereler reddedilir ve tüm
örnekleme politikaları yalnızca normalleştirilmiş aralık içinde gerçekleştirilir.
Elde edilen pencere, alt sistemdeki modellerin odaklanmış bir kesiti tam zaman
çizelgesinden ayırt edebilmesi için örnekleme meta verilerine ve güvenilmeyen
açıklama önekine dahil edilir.

Anlamsal açıklama odağı ayrı ve açık bir ayardır. Varsayılan `full` analiz modu,
mevcut kare istemini korur ve istek metnini hiçbir zaman açıklama modeline
iletmez. `focused` modunda köprü, aynı Chat veya Responses kapsayıcısındaki
yalnızca kullanıcı tarafından yazılmış en son boş olmayan `text`/`input_text`
değerini okur, bunu NFC biçiminde normalleştirir, kontrol karakterlerini ve
boşlukları daraltır ve 500 Unicode kod noktasıyla sınırlar. Boş sonuç, tam olarak
`full` istemine geri döner. Kullanılabilir bir ipucu, özel bir
güvenilmeyen-kullanıcı-bağlamı bloğunda JSON olarak serileştirilir ve yalnızca
gözlemlenebilir ayrıntıklara öncelik verebilir; medyada görünen veya duyulan
talimatları izlememeye yönelik ayrı uyarıyı geçersiz kılamaz. Metinsel odak,
hiçbir zaman `start`/`end` değerlerini çıkarmaz veya zamansal örnekleyiciyi
değiştirmez.

#### FU-07 yapısal segment kanıtı

`segment_aware`, önceden doğrulanmış yerel video akışı üzerinde sınırlandırılmış tek bir ön analiz geçişi kullanır. Sabit filtre zinciri önce genişliği en fazla 320 piksel olacak şekilde ölçeklendirir, sahne değişikliklerini ve donmuş aralıkları algılar; ardından bulanıklık, ortalama lüma ve uzamsal/zamansal bilgi için saniyede 1 kare örnekler. Geçiş; 600 yapısal örnekle, tek bir FFmpeg/filtre iş parçacığıyla, yalnızca `file` protokolüyle, aynı kapsayıcı izin listeleriyle, 1 MiB işlem çıktısı sınırıyla ve aracının paylaşılan iptal/son tarih süresi içinde en fazla 30 saniyeyle sınırlandırılmıştır. İstekten hiçbir zaman komut, filtre, yol veya URL kabul etmez.

Yapısal değerler, anlamsal video kavrayışı değil, deterministik örnekleme kanıtıdır. Özneler, eylemler, açıklamalar, konuşmalar veya kullanıcı niyeti hakkında çıkarım yapmazlar. Sahne ve donma sınırları segmentleri oluşturur; donma kapsamı, bulanıklık, pozlama, uzamsal ayrıntı ve zamansal değişim yalnızca mevcut 1–16 karelik bütçenin nasıl tahsis edileceğini etkiler. Tamamen donmuş bir segment en fazla bir kareyle sınırlandırılırken, donmamış segmentler kalan bütçe için rekabet eder. Sınırların sayısı karelerin sayısını aştığında, hızlı erken kesmelerin uzun bir sondaki segmenti gizleyememesi için zaman çizelgesinde tekdüze kapsam korunur. Bir donma sınırının 1 saniyelik analiz çözünürlüğü içinde bulunan sahne sınırları birleştirilir.

Eksik filtreler, hatalı biçimlendirilmiş/boş kanıtlar, bir algılayıcı hatası veya sınırlandırılmış ön analiz zaman aşımı, hataya açık biçimde tam olarak tekdüze orta nokta politikasına geri döner. Çağıran tarafın iptali veya aracının son tarihi ise bu geri dönüşü uygulamaz: devam eden alt süreci sonlandırır, sonraki kare çıkarma işlemlerini engeller ve özel geçici dizin ağacı `finally` içinde kaldırılır.

`scripts/perf/video-bridge-fu07-eval.ts`; yinelenenleri kaldırma sonrasındaki açıklama çağrısı tasarrufları, yoğun hareketli bütçe tahsisi, bulanıklık/pozlama/SI-TI kanıtı, uzun bir son bölümü olan hızlı kesmeler ve kademeli kararma kaynaklı yanlış pozitifler için deterministik, gerçek FFmpeg test verileri üretir. Ön analiz duvar saati süresini ve `/usr/bin/time` kullanılabildiğinde alt sürecin CPU kullanımını ve en yüksek RSS değerini kaydeder. Kalite kontrolleri yalnızca yapısal doğrulayıcılardır. Bu test düzeneğinde yetkilendirilmiş bir uç nokta veya sabitlenmiş bir değerlendirici bulunmadığından, gerçek açıklama modeli kalitesi `HOLD` olarak kalır. `--caption-cost-per-call-usd` açıkça pozitif bir çağrı başına maliyet tahmini sağlamadığı sürece parasal tasarruflar da `HOLD` olarak kalır; betik bu iki sonuçtan hiçbirini uydurmaz.

Her kare 4 MiB ile, tüm ham kareler birlikte 23 MiB ile ve serileştirilmiş aracı yanıtı 32 MiB ile sınırlandırılmıştır. Özel bir geçici dizin `finally` içinde kaldırılır. OmniRoute, FFmpeg'i paketine dahil etmez ve özel bir yürütülebilir dosya yolu kabul etmez. Açıklama oluşturmadan önce köprü, ihtiyatlı bir görsel yinelenenleri kaldırma geçişi uygular: her JPEG, 16×16 gri tonlamalı bir arabelleğe indirgenir ve yalnızca tutulan son kareyle karşılaştırılır. Bir kareden yüksek bir açıklama bütçesi istendiğinde çıkarma işlemi, bu bütçenin en fazla iki katı büyüklüğünde ve hiçbir zaman 16 kareyi aşmayan sınırlandırılmış bir aday havuzu sağlar. İstenen üst sınır yalnızca yinelenenler kaldırıldıktan sonra uygulanır; bütçe en az iki olduğunda son seyreltme sırasında seçilen ilk ve son adaylar korunur. Sürümlendirilmiş `grayscale-16x16-mean-cells-v2` politikası, ortalama lüma farkı ile normalize edilmiş farkı en az 0.05 olan küçük resim hücrelerinin oranından büyük olanı kullanır. Yinelenen eşiği, çalışma zamanı ayarı olarak sunulmak yerine öngörülebilirlik amacıyla seçilmiş 0.04 sabitidir. Bu ikincil yüksek kontrastlı sinyal, yalnızca ortalamaya dayalı bir karşılaştırmanın gizleyebileceği küçük hareketleri ve görünür metin değişikliklerini korur. Karşılaştırıcı veya kod çözücü hataları, kapsamı korumak üzere hataya açık davranır. Çıktı meta verileri; çıkarılan adayları, başarıyla kullanılan kareleri ve elenen görsel yinelenenleri birbirinden ayırır.

Açıkça işaretlenmiş bir video parçası, zaman damgalı bir kontak sayfası isteyebilir. Köprü, en fazla 4 sütunlu ve 16 kareli bir JPEG ızgarası oluşturur. 512 piksellik her hücre, kaynak zaman damgasını yüksek kontrastlı bir alt banda işlerken aynı zaman damgaları, sonraki ilişkilendirme ve denetim işlemleri için metinsel meta verilerde de tutulur. Tam JPEG, 32 MiB ile sınırlı kalır. `sharp` ızgaranın kodunu çözemez veya ızgarayı birleştiremezse köprü, ayrı JPEG karelerine geri döner; istemci iptali ise sayfa işlemi boyunca yayılmaya devam eder.

Üretime alma kanıtları, sentetik birleştirme mikro karşılaştırma testinden bilinçli olarak ayrı tutulur. `scripts/perf/video-bridge-contact-sheet-eval.ts`, gerçek OpenAI uyumlu görsel modeller için şema sürümlü bir A/B test düzeneği tanımlar. Sağlayıcı tarafından bildirilen token sayısını, uçtan uca duvar saati gecikmesini (sayfa birleştirme dahil), model çağrısı sayısını ve manifestte tanımlanan olguların korunmasını ölçer. Ham model yanıtları rapora yazılmaz; yalnızca SHA-256 özetleri ve eşleşen olgu kimlikleri tutulur. Test düzeneği, `--execute-real` geçirilmediği ve `--model`, `OMNIROUTE_BASE_URL` ile `OMNIROUTE_API_KEY` yapılandırılmadığı sürece hiçbir ağ veya ücretli model çağrısı yapmaz. Bu açık gerçek çalıştırma olmadan makinece okunabilir kararı `HOLD` olarak kalır; yalnızca sentetik yük/çağrı sayısı ölçümleri üretime alma kanıtı değildir.

Çağıranlar, önceden hizalanmış metne sahip olduklarında desteklenen bir video parçasına isteğe bağlı bir `transcript.cues` dizisi ekleyebilir. Her ipucu; `text`, incelenmiş süre içinde sonlu bir `start`/`end` aralığı ve izin listesindeki bir `source` (`client`, `embedded` veya `audio-bridge`) taşımalıdır; `confidence` varsayılan olarak `1` değerini alır ve `0` ile `1` arasında kalmalıdır. Tam olarak yinelenen ipuçları birleştirilir. OmniRoute hiçbir zaman bu meta verilerden transkripsiyon başlatmaz: doğrulanan ipuçları; kaynak, güven düzeyi ve aralık bilgileriyle birlikte açıklanan sonuca kopyalanır ve kare açıklamalarının yanında güvenilmeyen gözlemler olarak işlenir. Geçersiz, aralık dışı veya kaynağı belirtilmemiş metin, açıklama akışına karıştırılmak yerine reddedilir. Her iki istek gövdesi transkript kanalı da kendinden beyan edilen `embedded` veya `audio-bridge` etiketleri dahil olmak üzere sağlanan kaynağı `client` olarak normalleştirir. Bu güvenilir etiketleri yalnızca sunucunun sahip olduğu bir bağdaştırıcı, yalnızca kodla erişilebilen `trustedSource` bağımsız değişkeni üzerinden atayabilir; bir istek JSON alanı bu bağımsız değişkene ulaşamaz. Kaynağından bağımsız olarak transkript metni, medyadan türetilmiş güvenilmeyen içerik olarak kalır ve hiçbir zaman yetkilendirmeyi belirlememelidir.

İleri düzey bir çağıran, aynı video için bir `audioTranscript` izi sağlayabilir;
bu, sunucu transkripsiyonunun kanıtı olarak değil, istemci tarafından sağlanan metin olarak değerlendirilir.
Birleştirme bağlantı noktası, görsel ve işitsel gözlemleri
tek bir son tarih ve iptal sinyali altında çalıştırır, bunları ortak bir zaman çizelgesinde sıralar, tamamen
aynı olanları birleştirir ve yalnızca bir taraf başarılı olduğunda kısmi bir sonuç bildirir.
Geçersiz bir `audioTranscript`, videonun tamamının başarısız olmasına neden olmak yerine bu kısmi
sonuca indirgenir — görsel açıklama korunur ve ses dalı arındırılmış bir hata kodu
kaydeder. Dal bazında kullanılabilirlik, kısmi bayrağı
ve arındırılmış hata kodları; açıklanan sonuçta,
koruma mekanizması meta verilerinde (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), sonuç önbelleği meta verilerinde ve köprü
birleştirme sayaçlarında korunur. Varsayılan Video Bridge yolu, konuşmayı metne dönüştürmeyi
çalıştırmaz veya ikinci bir medya kopyası indirmez; bu açık iz olmadığında
yalnızca video olarak kalır.

**Transkript saklama (#12150 P1).** Bu, Video Bridge (kendisi isteğe bağlıdır)
bir transkript ipucu oluşturduğunda otomatik olarak uygulanır — ayrı bir
saklama bayrağı yoktur. Bir istek herhangi bir transkript ipucu (çağıran tarafından bildirilen
`transcript` veya birleştirilmiş `audioTranscript`) oluşturduğunda, koruma mekanizması bunu
`videoBridgeObserved` olarak işaretler ve video açıklamasının redakte edilmiş bir gölge kopyasını üretir —
her ipucunun serbest metin gövdesinin
`[redacted-video-transcript]` ile değiştirildiği özdeş bir oluşturma; bu, dize birleştirilmeden
önce yapılandırılmış ipucu alanı değiştirilerek oluşturulur (hiçbir zaman düzleştirilmiş metin ayrıştırılmaz; böylece
`]` içeren `[inaudible]`/`[music]` gibi gövdeler dahil, kötü niyetli veya sıradan hiçbir ipucu
içeriği varlığını sürdüremez). Kalıcı çağrı günlüğü istek gövdesi,
içerik eşitliğine göre eşleştirerek videodan türetilen her metin parçasını bu redakte edilmiş gölgeyle değiştirir;
`fullText` çapası, tamamlanmış çağrı öncesi koruma mekanizması
yükünden yeniden okunur; böylece sonraki zincir koruma mekanizmaları (10/95 önceliklerine sahip PII ve
kimlik bilgisi maskeleyicileri) açıklama metnini yerinde yeniden yazdıktan ve
sistem istemi/devir/bellek ekleme işlemleri mesaj dizisini yeniden şekillendirdikten sonra da eşleşme başarılı olur.
Modele gönderilen gövde değişmez. Gözlemlenen bir istek ayrıca
kalıcı Memory'yi doldurmaz (hem istekten hem de yanıttan türetilen çıkarım atlanır);
böylece modelin kendi yanıtı transkript metnini Memory'ye yankılayamaz.

**Ham video alanları (#12430).** Köprü etkinleştirildiğinde ve yerel video desteği bilinmediğinde veya mevcut olmadığında, tanımlanmış `transcript`/`audioTranscript` alanları, açıklama hatasından veya bir `maxVideos` sınırından sonra bile `videoBridgeObserved` özelliğini etkinleştirir. `null` ve boş dizeler hesaba katılır; bulunmayan alanlar ve video dışı meta veriler katılmaz. Saklanan kopyalarda bu alanlar redakte edilir veya istek atlanır; önbellekler/Memory devre dışı bırakılır.

Bu geri dönüş yollarında, geçerli çağıran ipuçları standart dışı sağlayıcı alanları yerine desteklenen `text`/`input_text`
parçalarına dönüşür. İstekle sağlanan her iki iz de, videonun
açıklanmadığına ve zaman damgalarının medyayla karşılaştırılarak doğrulanmadığına dair açık bir uyarıyla birlikte güvenilmeyen `client` gözlemleri
olarak kalır. Mevcut
256 ipucu/64-KiB toplam ve ipucu başına bütçeler, iki iz için birlikte geçerlidir;
zaman damgaları aracının 600 saniyelik üst sınırına ve sağlanan herhangi bir odak
penceresine uymalıdır. Geçersiz izler atılır, keyfî metin olarak iletilmez; birleşik
bütçeleri aşılmadığı sürece geçerli bir kardeş iz yine de kullanılabilir. Null/boş
alanlar metin eklemez. Bu geri dönüş herhangi bir medya getirme veya transkripsiyon işlemi eklemez.
Transkript uzantısı alanları, geri dönüş video taşıyıcısından ve onun
`video_url`/`source` nesnelerinden kaldırılır. OpenAI aktarım izin listesi katı kalır; yerel desteği bilinmeyen
video taşıyıcıları kullanılabilir olmaya devam eder ve yalnızca metin desteklediği bilinen hedefler güvenli işaretleri korur.
Yapılandırılmış redaksiyon gölgeleri eklenen transkript metnini korurken,
çağırana ait özgün istek değişmeden kalır. Yerel desteğe sahip hedefler ve
devre dışı bırakılmış köprüler mevcut atlama davranışlarını korur.

Ek saklanan kopyalar aynı gözlemlenen istek sinyalini kullanır. Ham
koruma mekanizması öncesi istemci isteği anlık görüntüsü, bellekteki bekleyen istek ve erken
reddedilen istek günlüğü, video parçalarındaki transkript alanlarını yapısal olarak değiştirir;
ardışık düzen aşamaları ve bağlam devri tarafından sentezlenen dize istemleri, kalıcı istek gövdesi alıcısında redakte edilir.
Kalıcı `video_content_removed` işareti,
`previous_response_id` devamının kasıtlı olarak atılmış metni yeniden oluşturmak yerine güvenli şekilde başarısız olmasını sağlar.
Gözlemlenen bir istek, günlüğe kaydedilmeden önce parça başına redaksiyon gölgesini kaybederse
veya birkaç video gölgesinden yalnızca biri bile sonraki istek değişikliklerinden sonra
eşleşmezse, kısmen redakte edilmiş bir transkript saklamak yerine saklanan istek gövdesinin tamamı
atlanır.

Gözlemlenen bir istek için model yanıtı, yapılandırılmış bir ipucu sınırı olmadan
transkriptin herhangi bir bölümünden alıntı yapabilir. Bu nedenle kalıcı çağrı günlüğündeki
`responseBody`, bir atlama işaretiyle değiştirilir; ayrıntılı
ardışık düzen yapıtı (üst akış/istemci gövdelerini ve akış parçalarını içerebilir)
saklanmaz. Anlamsal, eşgüçlülük ve akıl yürütme yeniden oynatma önbellekleri,
bu istek için okuma ve yazma işlemlerini atlar. Sağlayıcı isteği ve istemcinin görebildiği
yanıt değişmeden kalır. Ayrıntılı yapıt atlandığında erken keepalive baytları geçici
arabellekten boşaltılır. Kiro'nun hatalı biçimlendirilmiş EventStream
uyarısı yalnızca yükün bayt sayısını bildirir; içeriğini veya JSON
ayrıştırıcısının ham hatasını hiçbir zaman bildirmez.
Bu, ilgisiz tüm sağlayıcı/eklenti tanılamalarının
denetlendiği anlamına gelmez; daha geniş kapsamlı saklanan alıcı taraması #11658 kapsamında izlenmektedir.

Dahili `/api/modality-bridge/video/drilldown` yaşam döngüsü; ayrı,
geri döngü/token kimlik doğrulamalı bir önbellek altyapısıdır. Her işlem ayrıca
kanonik, opak bir asıl kimliği gerektirir. Bir üretim çağırıcısı etkinleştirilmeden önce,
bu kimliği kimliği doğrulanmış kiracıdan türetmeli ve istemci tarafından seçilmiş bir
değeri asla iletmemelidir. Önbellek anahtarları bu asılı kanonik oturum ve
video referansı kimliklerine bağlar, yalnızca bunların SHA-256 ile türetilmiş anahtarlarını saklar ve hem okumaları
hem de silme işlemlerini aynı asılla sınırlar. Önbellek, girdi başına en fazla 16 türetilmiş JPEG
karesi saklar, bunların süresini on dakika sonra doldurur ve sınırlandırılmış
`start`/`end` okumalarını veya açık oturum silme işlemini destekler.

Her asıl, 16 girdi ve 64 MiB kanonik JPEG verisiyle sınırlandırılmıştır. Bu
sınırlar, genel 64 girdi/256 MiB üst sınırından bağımsızdır: asıl kota
baskısı, genel LRU tahliyesi değerlendirilmeden önce yalnızca o asılın en uzun
süredir kullanılmayan girdilerini tahliye eder. Süresi dolmuş girdiler, önbellek etkinliği sırasında hem asıl
hem de genel hesaplamadan temizlenirken iptal ve doğrulama hataları
kısmi bir değiştirme işlemini kaydetmez.

Önbellek; kanonik olmayan Base64'ü, fazla dolguyu, JPEG olmayan medyayı, hatalı biçimlendirilmiş veya
kesilmiş JPEG'leri ve sınırlandırılmış tam görüntü `sharp`
kod çözümü sırasında uyarı üreten JPEG'leri reddeder. Kabul edilen her görüntüyü kanonik JPEG olarak yeniden kodlar, genişlik ve yüksekliği
çağırıcının alanlarına güvenmek yerine kodu çözülmüş baytlardan türetir ve sondaki tüm
çok biçimli dosya baytlarını tutmak yerine atar. Her iki kotaya da yalnızca sınırlandırılmış kanonik sıkıştırılmış arabellek
yansıtılır. JSON kablo sınırı, 32 MiB
kodu çözülmüş girdi üst sınırı için Base64 ek yükünü içerir. Saklanan her
türetim; doğrulanmış JPEG biçimini/çözünürlüğünü, örnekleme politikasını,
türetim sürümünü, oluşturulma zamanını, sunucu tarafından hesaplanan içerik karmasını ve karması alınmış üst
referansın yanı sıra güvenilir çağırıcının üst içerik karmasını kaydeder. İptal durumu,
atomik önbellek kaydından önce eşzamansız kod çözme/karma aşamaları arasında kontrol edilir.

Bu dilim henüz üretim amaçlı bir üreticiyi rotaya bağlamaz ve
çok çözünürlüklü varyant seçimi sağlamaz. Bu nedenle şeffaf Video Bridge istek
yolu ek bir iş yüküne maruz kalmaz; kiracıya bağlı asıl türetme ve
tam FU-08 çok çözünürlüklü yaşam döngüsü ise tamamlanmış davranış olarak belgelenmek yerine
açık takip çalışmaları olarak kalır.

Karelere, yapılandırılmış Video modeliyle sıralı olarak açıklama yazılır. Boş bir
Video geçersiz kılma değeri Vision ayarını devralır; her ikisi de boşsa Vision
otomatik yönlendiricisi, etkili ve görüntü işleme yeteneğine sahip modeli seçer. Başarılı açıklamalar,
özgün parçayı kararlı bir `[Video description:` önekiyle değiştirir; bu önek ayrıca
metni güvenilmeyen, medyadan türetilmiş bir gözlem olarak işaretler ve aşağı akış
modellerine medyada bulunan talimatları izlememelerini söyler. Kare açıklaması önbellek anahtarları
JPEG baytlarını, istemi, zaman damgasını ve etkili modeli içerir; yalnızca başarılı
açıklamalar önbelleğe alınır. Önbellek girdileri, bir yedek model de dâhil olmak üzere
gerçekte başarıyla üretim yapan modeli korur; farklı kareler
farklı modeller tarafından üretildiğinde köprü `mixed` değerini bildirir. Önbellek isabeti,
üretici kimliğini istenen yönlendirme planı olarak yeniden etiketlemek yerine yeniden kullanır. Tüm video sonucu
önbelleği, çıktıyı değiştiren her girdiye göre anahtarlanır — istem, etkili
model, örnekleme politikası, kare sayısı, anlamsal analiz modu, normalleştirilmiş odak ipucunun
SHA-256 parmak izi, odak penceresi, `transcript`,
`audioTranscript` ve kontak sayfası bayrağı — dolayısıyla bu
boyutlardan herhangi birinin değiştirilmesi, eski bir değerin yeniden kullanılması değil, önbellek ıskalamasıdır. Görsel yinelenenleri giderme politikası
sürümü, eşiği ve sınırlandırılmış aday kare sayısı da
sonuç önbelleği anahtarında ve meta verilerinde açıkça belirtilir; bu nedenle bir politika değişikliği eski bir
tüm video açıklamasını yeniden kullanamaz. Sonuç önbelleği v4 meta verileri modu ve
parmak izini korur, ham kullanıcı görevini asla korumaz. Koruma mekanizması meta verileri hem
istenen hem de etkili analiz modlarını bildirir; kullanılabilir kullanıcı metni olmadan istenen `focused` modu, etkili olarak `full` şeklinde bildirilir.

Koruma mekanizması desteklenen her video parçasını çıkarır ancak
`modalityBridgeVideoMaxVideos` değerinden fazlasını açıklamaz. Hedefin
`supportsVideo === false` özelliğine sahip olduğu kanıtlanmışsa başarısız ve sınırın üzerindeki videolar, ham videoların hiçbirinin korunmaması için açık, güvenli
metin işaretçilerine dönüştürülür. Yetenek bilinmiyorsa bu parçalar
video taşıyıcılarını korur; yedek transkriptler yukarıdaki sınırlandırılmış metin
dönüşümünü izler. `supportsVideo === true` olan hedefler köprüyü atlar.
İstemci isteğinin iptal sinyali indirme, aracı kuyruğu,
alt süreçler ve açıklama çağrıları boyunca yayılır; iptaller videolar arasında işlemi durdurur ve hiçbir zaman
ham medyaya açık biçimde başarısız olmaz.

Çalışma zamanı ayarları DB desteklidir ve Zod ile doğrulanır:

| Anahtar                             | Varsayılan  | Aralık / davranış                                                                                           |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İsteğe bağlı çalışma zamanı, açıkça etkinleştirilir                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` genel altyazıları korur; `focused` sınırlı, güvenilmeyen en son kullanıcı bağlamını kullanır         |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini devralır                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` veya orantılı `segment_aware`; algılayıcı hatasında `uniform` yöntemine geri döner |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                              |

120 saniyenin üzerindeki eski kalıcı Video zaman aşımı değerleri aracı
son tarihine sınırlandırılır; bu sınırın üzerindeki yeni ayar yazma işlemleri reddedilir.
`GET /api/modality-bridge/video/runtime`, kimlik doğrulama veya çalışma zamanı
yoklamasından önce güvenilir, damgalanmış geri döngü yerelliği gerektirir; ardından yönetim
kimlik doğrulaması ister. Yalnızca `available`, temizlenmiş FFmpeg/ffprobe sürümleri ve çalışma
zamanı kullanılamadığında sabit bir neden döndürür. Dahili çıkarma uç noktası herkese açık
bir yükleme API'si değildir: kuyruk doygunluğu `503` ile birlikte `Retry-After` döndürür, arayanın
bağlantıyı kesmesi `499` döndürür ve sabit aracı son tarihi `504` döndürür. Dönüştürülen yanıtlar,
Vision veya Audio segmentlerini kaldırmadan merkezi `x-omniroute-modality-bridge`
başlığına `video->text;model=<visionModel>;parts=<videos>` ekler.

### PII Maskeleyici (`piiMasker.ts`)

**Her iki** aşamada da çalışır.

- **`preCall`**, yükün kopyasını oluşturur; `system`, `messages`, `input` ve
  `prompt` (düz dize öğeleri dâhil) alanlarını dolaşır ve `content`/`text` dize
  alanlarına (`@/shared/utils/inputSanitizer` içindeki) `processPII()` işlevini uygular.
  `PII_REDACTION_ENABLED=true` olduğunda, algılanan PII giden yükte sansürlenir.
  Bu, yalnızca istem enjeksiyonu politikasını kontrol eden `INPUT_SANITIZER_MODE`
  ayarından bağımsızdır. Sansürleme kapalı olduğunda çağrı, içeriği yeniden yazmadan
  algılama sayılarını kaydeder.
- **`postCall`**, yanıtın derin kopyasını oluşturur ve `sanitizePIIResponse()` ile
  Responses-API-biçimi maskeleyicisini (`maskResponsesOutput` — `output_text` ve
  `output[].content[].text` alanlarını kapsar) çalıştırır. Herhangi bir sansürleme
  gerçekleşirse değiştirilmiş yanıt özgün yanıtın yerini alır.

Koruma hiçbir zaman engellemez; yalnızca açıklama ekler (`meta.detections`,
`meta.redacted`) veya içeriği yeniden yazar.

### İstem Enjeksiyonu (`promptInjection.ts`)

Kullanıcı tarafından sağlanan içerikteki kötü niyetli yapıları algılar ve
yapılandırılmış politikayı uygular. Davranış, ortam değişkenleri ve kurucu
seçenekleri tarafından belirlenir:

| Ayar            | Ortam değişkeni                                                                                             | Varsayılan | Etki                                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Etkin           | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`     | `false` olduğunda koruma kısa devre yapar.                                                                                                                                                                                 |
| Mod             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`     | Enjeksiyon politikası: `block`, `warn` veya `log`. (`redact` geriye dönük uyumluluk için kabul edilir ancak enjeksiyon metnini **kaldırmaz**; istek PII yeniden yazımı `PII_REDACTION_ENABLED` tarafından kontrol edilir.) |
| Engelleme eşiği | `blockThreshold` seçeneği / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` diğer adı) | `high`     | Engelleme için gereken asgari önem derecesi. Varsayılan olarak orta derece yalnızca gözlemlenir.                                                                                                                           |

**Mod önceliği** (`getMode`): çağıranın `options.mode` değeri →
`INJECTION_GUARD_MODE` **DB özellik bayrağı geçersiz kılması** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` ortam değişkeni → `INPUT_SANITIZER_MODE` ortam değişkeni →
`warn`. Bu nedenle Dashboard'daki geçersiz kılma ortam değişkenlerine göre önceliklidir; böylece Feature
Flags kullanıcı arayüzü çalışan korumayı canlı olarak kontrol eder (yeniden başlatma gerekmez). DB okuması
hata durumunda güvenlidir: hata oluşursa koruma, ortam değişkenlerine dayalı davranışa geri döner ve herhangi
bir geçersiz kılma ayarlanmadığında davranış yalnızca ortam değişkenlerine dayalı çözümlemeyle aynıdır.

Algılama kaynakları:

1. `@/shared/utils/inputSanitizer` içindeki `sanitizeRequest()` (işlem hattının
   başka yerlerinde kullanılan ortak algılayıcı kümesi).
2. Yerleşik `DEFAULT_GUARD_PATTERNS` (şu anda `system_override_inline` ve
   `markdown_system_block`; her ikisi de `high` önem derecesindedir).
3. Kurucu seçenekleri aracılığıyla iletilen isteğe bağlı `customPatterns` (dizeler, düzenli ifadeler
   veya `{ name, pattern, severity }` kayıtları).

`mode === "block"` **olduğunda** ve en az bir tespit önem derecesi
eşiğini karşıladığında, `preCall`, `{ block: true, message: "Request rejected:
suspicious content detected" }` döndürür. `warn`/`log` modlarında koruma katmanı günlük kaydı oluşturur ancak
çağrıya izin verir. Paylaşılan `evaluatePromptInjection()` yardımcısı da
istemleri kayıt defteri üzerinden geçmeden değerlendirmesi gereken çağıranlar için dışa aktarılır.

**Tarama sınırı (v3.8.20):** algılayıcı, birleştirilmiş istem metninin yalnızca **ilk 16 KB**'lık
kısmını inceler — `src/shared/utils/inputSanitizer.ts` içinde
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). Hem `detectInjection()` hem de
`evaluatePromptInjection()`, kalıp döngüsünü çalıştırmadan önce `slice(0, MAX_INJECTION_SCAN_BYTES)`
uygular. Enjeksiyon yönergeleri girdinin üst kısmına yakın bulunduğundan bu,
algılamayı zayıflatmadan yüzlerce KB'lık yüklerde regex CPU/GC kullanımını sınırlar (bkz.
#3932, #4041).

### Kimlik Bilgisi Maskeleyici (`credentialMasker.ts`)

Varsayılan zincirde son sırada (öncelik `95`) olmak üzere **her iki** aşamada da çalışır. Giden yükteki (mesaj
içeriği, araç çağrısı bağımsız değişkenleri, araç sonuçları) **ve** sağlayıcı yanıtındaki
yaygın API anahtarı / gizli belirteç kalıplarını sansürler; böylece bir
isteme yapıştırılan (veya bir araç sonucu tarafından geri döndürülen) kimlik bilgisi,
yukarı akış sağlayıcısına ya da istemciye geri sızdırılmaz.

- **Yalnızca etkinleştirildiğinde çalışır**; PII sansürlemeyle aynı kural geçerlidir (Kesin Kural #20 ile ilişkili):
  `settings.credentialRedactionEnabled === true` **veya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadığı sürece devre dışıdır. Kapalıyken koruma katmanı hiçbir işlem yapmaz —
  hiçbir zaman engellemez veya yeniden yazmaz.
- `redactCredentials()`, yük/yanıt ağacının tamamını dolaşır (`walkValue()`;
  prototip kirlenmesine karşı güvenli, `WeakSet` aracılığıyla döngülere karşı güvenli) ve eşleşmeleri
  bir `[REDACTED:<type>]` yer tutucusuyla değiştirerek yalnızca gerçekten
  değişen dalları klonlar.
- `CREDENTIAL_PATTERNS`; LLM sağlayıcı anahtarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS belirteçlerini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödeme anahtarlarını (Stripe, Square), bulut
  anahtarlarını (AWS erişim anahtarı, Twilio, SendGrid, Mailgun), özel anahtarları / JWT'leri,
  kimlik bilgisi içeren bağlantı dizelerini (`mongodb://user:pass@...` vb.) ve
  genel bir `Authorization`/`x-api-key`/`api-key`/`apikey` üstbilgi-değeri
  kalıbını kapsar. Üstbilgi biçimli anahtarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`), genel metin regex'i aracılığıyla değil, yapısal olarak (yalnızca değer;
  `Bearer `/`Basic ` gibi şema öneki korunarak) sansürlenir.
- Koruma katmanı hiçbir zaman engellemez; yalnızca yeniden yazar (`modifiedPayload` /
  `modifiedResponse`) ve açıklama ekler (`meta.credentialsRedacted`, `meta.count`).

Regresyon koruması: `tests/unit/credential-masker-guardrail.test.ts`.

## Temel Sözleşme (`base.ts`)

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
  block?: boolean; // true, zinciri kısa devre yapar (short-circuit)
  message?: string; // engelleme durumunda gösterilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // isteği yeniden yazmak için preCall tarafından döndürülür
  modifiedResponse?: TValue; // yanıtı yeniden yazmak için postCall tarafından döndürülür
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

Bir güvenlik koruması (guardrail), `void`, `{}` veya `{ block: false }` döndürerek "değişiklik yok" sinyali verir. Bir `modifiedPayload`/`modifiedResponse` döndürmek, sonraki güvenlik korumaları için zincir boyunca akan değerin yerini alır. `signal?: AbortSignal`, çağrıcı yaşam döngüsünü güvenlik korumalarına taşır. İstek iptali, kasıtlı bir hataya açık (fail-open) istisnadır: medya köprüleri, ham medyayı desteklemediği bilinen bir hedefe geri yüklemeden çalışmaları durdurur ve temizlik yapar.

## Kayıt Defteri (`registry.ts`)

Singleton `guardrailRegistry` şunları sunar:

- `register(guardrail)` — bir güvenlik koruması ekler (veya normalleştirilmiş ada göre değiştirir) ve artan `priority` değerine göre yeniden sıralar.
- `clear()` / `list()` — yönetimsel yardımcılar.
- `runPreCallHooks(payload, context)` — etkin güvenlik korumaları üzerinden yinelenir, yükü (`payload`) `modifiedPayload` aracılığıyla aktarır ve ilk `block: true` değerinde durur.
- `runPostCallHooks(response, context)` — yanıt tarafında aynı akış.
- `resetGuardrailsForTests({ registerDefaults })` — temiz test izolasyonu için durumu temizler ve isteğe bağlı olarak varsayılanları yeniden kaydeder.

Her iki çalıştırıcı da `results` alanının izleme için yararlı olan her güvenlik korumasına ait `blocked`, `skipped`, `modified`, `error` ve `meta` alanlarını içeren `GuardrailExecutionResult` kayıtlarından oluşan bir dizi olduğu `{ blocked, payload|response, results, guardrail?, message? }` nesnesini döndürür.

### İstek Başına Güvenlik Korumalarını Devre Dışı Bırakma

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })`, mevcut istek için atlanması gereken güvenlik koruması adlarının tekilleştirilmiş (de-duplicated) bir listesini toplar. Kaynaklar (tümü isteğe bağlı, tümü birleştirilir):

- `apiKeyInfo.disabledGuardrails`
- İstek gövdesi `disabledGuardrails` (en üst düzey)
- İstek gövdesi `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (veya eski adıyla `x-disabled-guardrails`)

Değerler dizi veya virgülle ayrılmış bir dize olabilir; adlar küçük harfli kebab-case formatına normalleştirilir (`pii_masker` → `pii-masker`). Sonuç, `context.disabledGuardrails` aracılığıyla, eşleşen güvenlik korumalarını (`results` içinde `skipped: true`) atlayan kayıt defterine iletilir.

## Yürütme Sırası

`src/sse/handlers/chat.ts` ve `open-sse/handlers/chatCore.ts` üzerinden geçen her istek için:

1.  `resolveDisabledGuardrails(...)` API anahtarı, gövde ve başlıklardan atlama listesini oluşturur.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` koruyucuları artan öncelik sırasına göre çalıştırır:
    - Devre dışı bırakılan koruyucular `skipped` olarak kaydedilir.
    - Her koruyucunun `preCall`'u, `modifiedPayload` aracılığıyla yükü yeniden yazabilir.
    - İlk `block: true` zinciri kısa devre yapar ve işleyici bir koruyucu reddetme yanıtı döndürür.
3.  (Potansiyel olarak yeniden yazılmış) yük, birleşik yönlendirme ve yukarı akış dağıtımına akar.
4.  Yanıt birleştirildikten sonra, `guardrailRegistry.runPostCallHooks(...)` aynı zinciri yanıt üzerinde çalıştırır. Buradaki `block: true` yukarı akış yanıtını düşürür.

Hata fırlatan koruyucular `error: <message>` ile kaydedilir ve `logger.warn` aracılığıyla günlüğe yazılır, ancak zincir devam eder — tasarım gereği açık kalır.

## Yapılandırma

Yerleşik koruyucular tarafından okunan ortam değişkenleri:

| Değişken                              | Kullanan                  | Etki                                                                                                                 |
| :------------------------------------ | :------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Algılamayı tamamen devre dışı bırakmak için `false` olarak ayarlayın.                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Enjeksiyon politikası: `warn`, `block` veya `log`. Eski `redact` değeri enjeksiyon metnini yeniden yazmaz.           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Enjeksiyon koruyucusu için mod; ayrıca ortam değişkenlerini **geçersiz kılan** bir DB özellik bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block`'un reddettiği minimum ciddiyet: `high` (varsayılan), `medium` veya `low`.                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` için eski takma ad.                                                                |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduğunda, istek PII'si redakte edilir (enjeksiyon modundan bağımsız olarak).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Yanıt tarafı maskeleyici davranışını kontrol eder.                                                                   |

Modality Bridge koruyucuları, çalışma zamanı yapılandırmasını ortam değişkenlerinden değil, DB destekli ayarlar deposundan (`getSettings()`) okur. Vision'ın birincil anahtarları `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ve `modalityBridgeCacheMaxEntries` şeklindedir. Eski `visionBridge*` anahtarları yalnızca belgelenmiş tek döngülü okuma geri dönüşü olarak kabul edilir; kontrol paneli yazımları birincil anahtarları kullanır. Varsayılanlar ve geri dönüş çözümleyici `src/shared/constants/modalityBridgeDefaults.ts` içinde bulunur, eski sabitler ise `src/shared/constants/visionBridgeDefaults.ts` içinde korunur.

Ses, `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` ve `modalityBridgeAudioMaxClips` ile paylaşılan `modalityBridgeCache*` ayarlarını kullanır. Sesin eski anahtar geri dönüşü yoktur çünkü bu anahtarlar Modality Bridge şemasıyla birlikte tanıtılmıştır.

Video, `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` ve `modalityBridgeVideoTimeout` ile paylaşılan `modalityBridgeCache*` ayarlarını kullanır. Varsayılan olarak devre dışıdır çünkü FFmpeg/ffprobe isteğe bağlı operasyonel bağımlılıklardır ve kare altyazılandırma gecikme ve model maliyeti ekler.

## Özel Güvenlik Kalkanları (Custom Guardrails)

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

Adımlar:

1. `BaseGuardrail` sınıfından türeyen `src/lib/guardrails/myGuardrail.ts` dosyasını oluşturun.
2. `preCall` ve/or `postCall` metodlarını implement edin.
3. Ya içe aktarma (import) zamanında kaydedin (`registerDefaultGuardrails` içinden çağırarak) ya da
   çalışma zamanında (runtime) `guardrailRegistry.register(...)` metodunu çağırın — kayıt defteri (registry), aynı normalize edilmiş isme sahip
   önceki tüm güvenlik kalkanlarının yerini alır.
4. `tests/unit/` altında testler ekleyin (mevcut örnekler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test Etme

Bilinen bir durumdan başlamak için testler arasında `resetGuardrailsForTests()` kullanın.
Boş bir kayıt defteriyle başlamak ve yalnızca test edilen güvenlik kalkanlarını kaydetmek için
`{ registerDefaults: false }` parametresini geçirin. Vision Bridge bağımlılık enjeksiyonunu
(`deps.getSettings`, `deps.callVisionModel`) kabul eder; Audio Bridge ise ayarlar, yetenekler, STT model seçimi, kimlik bilgisi kontrolleri ve transkripsiyon için
eşdeğer dikişleri (seam) sunar. Bu sayede testler, veritabanı veya ağ erişimine gerek kalmadan her iki akışı da çalıştırabilir.

## Ayrıca Bakınız

- `src/lib/guardrails/` — implementasyon
- `src/shared/utils/inputSanitizer.ts` — prompt-injection ve PII maskeleme özelliklerini sağlayan
  ortak detektör
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge varsayılanları ve
  zorunlu köprü (forced-bridge) model listesi
- `src/shared/constants/modalityBridgeDefaults.ts` — ortak Vision/Audio çalışma zamanı (runtime) varsayılanları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal katman (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — tam çevre değişkeni (env var) referansı

## Enjeksiyon Kalkanı Rota Kapsamı ve Kırmızı Takım (Red-Team) Testleri (Faz 8 · Blok D)

Enjeksiyon kalkanı (`createInjectionGuard` / `withInjectionGuard`), kullanıcı istemlerini (prompt) kabul eden tüm rotaları
kapsar. `INJECTION_GUARD_MODE` ayarına uyar (varsayılan `warn` = yalnızca loglar;
`block` = HTTP 400 `SECURITY_001` döndürür).

| Tür            | Rotalar                                                                                                                                              | Varsayılan mod |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Metin (mevcut) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Üretken        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Veri           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Metin çıkarma (`extractMessageContents`), `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` alanlarını kapsar.

**Kırmızı takım (gece çalışması, `nightly-llm-security.yml`):** promptfoo, her rotanın `INJECTION_GUARD_MODE=block` altında OWASP-LLM derlemini (corpus) engellediğini doğrular; garak taramalar çalıştırır (gizli anahtar yoksa atlanır).
`moderations` tutarlılık için dahil edilmiştir — blok modundaki operatörler `resolveDisabledGuardrails`
aracılığıyla bunu muaf tutabilir.

Gece iş akışı (`.github/workflows/nightly-llm-security.yml`, cron + manuel
tetikleme) iki işe sahiptir:

- **`promptfoo-guard` (engelleme)** — `INJECTION_GUARD_MODE=block` ile
  `promptfoo eval -c promptfooconfig.yaml` komutunu çalıştırır. Her düşmanca senaryo (ör. "önceki tüm
  talimatları yoksay…", DAN tarzı jailbreak'ler), yanıtın `error.code === "SECURITY_001"` taşıdığını, yani kalkanın isteği gerçekten reddettiğini iddia eder.
- **`garak` (tavsiye niteliğinde)** — yerel bir OmniRoute örneğine (`http://localhost:20128/v1`) karşı
  garak `--probes promptinject,dan,leakreplay` komutunu çalıştırır. Sağlayıcı gizli anahtarına (`PROMPTFOO_PROVIDER_KEY`) bağlıdır; sorunsuz bir şekilde atlanır ve sonuna `|| true` eklenmiştir, böylece CI'ı (sürekli entegrasyon) başarısız kılmadan raporlama yapar.

Kalkan yardımcısının (`createInjectionGuard` / `withInjectionGuard`) kapsamı,
istem içeren her `/v1` rotasını kapsar; istem metni, `src/shared/utils/inputSanitizer.ts` içindeki
`extractMessageContents()` tarafından `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` alanlarından çekilir.
