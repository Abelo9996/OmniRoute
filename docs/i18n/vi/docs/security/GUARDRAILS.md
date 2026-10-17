# Guardrails (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Nguồn chuẩn:** `src/lib/guardrails/`
> **Cập nhật lần cuối:** 2026-08-29 — v3.8.51 (nguồn gốc bản chép lời Video Bridge do bên gọi khai báo,
> chưa được máy chủ xác minh — đã làm rõ theo #11661)

Các guardrail thực thi những phép biến đổi về an toàn, chính sách và nội dung tại ranh giới
giữa OmniRoute và các nhà cung cấp thượng nguồn. Mỗi guardrail có thể kiểm tra (và
tùy chọn từ chối, biến đổi hoặc chú thích) payload yêu cầu (`preCall`) và
phản hồi thượng nguồn (`postCall`).

Hệ thống hoạt động theo cơ chế **fail-open**: nếu một guardrail phát sinh lỗi trong khi thực thi, registry
sẽ ghi lại lỗi và tiếp tục với guardrail tiếp theo thay vì làm yêu cầu
thất bại. Việc chặn là một quyết định rõ ràng (`block: true`), không bao giờ là sự cố ngoài ý muốn.

## Các cơ chế bảo vệ tích hợp sẵn

Registry tự động tải sáu cơ chế bảo vệ theo thứ tự ưu tiên khi import
(xem `registry.ts` → `registerDefaultGuardrails()`):

| Độ ưu tiên | Tên                 | Giai đoạn      | Tệp                   |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Số ưu tiên thấp hơn sẽ chạy **trước**.

### Cầu nối thị giác (`visionBridge.ts`) — Cầu nối phương thức PR-1

Chặn các yêu cầu chứa hình ảnh được gửi đến **các mô hình không hỗ trợ thị giác** và
chuyển hướng toàn bộ yêu cầu đến một mô hình có khả năng xử lý thị giác hoặc thay thế các
phần hình ảnh bằng mô tả văn bản do một mô hình thị giác có thể cấu hình tạo ra trước
lệnh gọi ngược dòng. Điều này cho phép các nhà cung cấp chỉ hỗ trợ văn bản xử lý
payload đa phương thức một cách minh bạch.

Luồng:

1. Bỏ qua nếu mô hình đích đã hỗ trợ thị giác (trừ khi mô hình đó xuất hiện trong
   danh sách buộc dùng cầu nối `isVisionBridgeForcedModel`).
2. Trích xuất các phần hình ảnh qua `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), hàm này ủy quyền cho **bộ phát hiện phương tiện hợp nhất**
   `detectMediaParts()` trong `open-sse/utils/mediaParts.ts` — nguồn sự thật duy nhất
   được dùng chung với bộ lọc tương thích tổ hợp.
   Việc trích xuất chỉ cho phép các phần cấp cao nhất có những cấu trúc mà
   `replaceImageParts` có thể chèn trở lại (hợp đồng extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` và Responses API `input_image`. Các kết quả khớp lồng nhau và
   cấu trúc chỉ mang tính chỉ báo thuộc phạm vi của bộ lọc tổ hợp và không bao giờ được trích xuất.
   Bỏ qua nếu không tìm thấy phần nào.
3. Phân giải cấu hình thời gian chạy qua `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): các khóa cài đặt
   `modalityBridge*` mới được ưu tiên; các khóa `visionBridge*` cũ vẫn là
   **phương án dự phòng trong một chu kỳ** (cửa sổ rollback). Bỏ qua trước khi duyệt
   bất kỳ phương tiện nào khi cầu nối bị tắt.
4. Bộ chọn chế độ (`modalityBridgeVisionMode`, xem bảng bên dưới) quyết định
   chuyển hướng hay mô tả. Chuyển hướng trả về `modifiedPayload` chỉ với `model`
   được thay đổi, cùng meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Nhánh mô tả: giới hạn số hình ảnh ở `maxImages`, tạo prompt nhận biết tác vụ,
   tham khảo cache mô tả, gọi mô hình thị giác **song song**
   (`Promise.allSettled`) và chèn các phần văn bản `[Image N]: <description>` vào
   vị trí tương ứng. Một lần mô tả thất bại sẽ tạo ra `null` và phần hình ảnh gốc
   được **giữ nguyên** (#4012) — ngoại trừ nhánh mô tả tổ hợp khi mọi lần
   mô tả đều thất bại, trong trường hợp đó một upstream được xác nhận không hỗ trợ thị giác sẽ nhận
   stub `(unavailable — no vision-capable provider connected)` thay thế (#8430).
6. Trả về `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Bộ chọn chế độ (`modalityBridgeVisionMode`)

| Chế độ     | Mặc định | Hành vi                                                                                                                                                                                                                                                                                            |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Heuristic cũ, không thay đổi (#6640/#7204): các mô hình không phải tổ hợp/`auto/` được chuyển hướng đến mô hình thị giác tốt nhất, trừ khi mô hình ban đầu đã có thông tin xác thực khả dụng (khi đó sẽ mô tả); các đích tổ hợp luôn sử dụng mô tả.                                                |
| `describe` |          | Luôn mô tả — khối chuyển hướng bị bỏ qua hoàn toàn; mô hình do người dùng chọn luôn trả lời.                                                                                                                                                                                                       |
| `reroute`  |          | Buộc chuyển hướng: cơ chế bảo vệ giữ lại mô hình có thông tin xác thực bị bỏ qua. Cơ chế bảo vệ thông tin xác thực của **đích** chuyển hướng vẫn áp dụng — khi không có đích thị giác khả dụng, yêu cầu sẽ chuyển sang mô tả để hình ảnh thô không bao giờ đến backend chỉ hỗ trợ văn bản (#8430). |

Các chế độ bắt buộc thực hiện đoản mạch **trước khi** heuristic tự động chạy; hành vi
`auto` giống từng byte với cơ chế bảo vệ trước PR-1.

#### Phạm vi API key (`visionBridgeKeyScope.ts`)

Khi API key của bên gọi giới hạn `allowedConnections`, các nhóm hạn ngạch
(`allowedQuotas`) hoặc các mô hình (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), cầu nối chỉ
chọn các mô hình chuyển hướng và mô tả mà key được phép sử dụng, trên các kết nối mà key
được phép sử dụng. Sau đó, lệnh gọi mô tả luôn đi qua vòng lặp nội bộ OmniRoute với
header `x-omniroute-self-loop-key-id`, để yêu cầu chat tiếp nhận
thực thi lại chính sách kết nối và mô hình của key đó. `enforceApiKeyPolicy()`
chỉ tuân theo header đó khi có kèm bearer của vòng lặp nội bộ, vì vậy nó chỉ có thể
thu hẹp quyền truy cập, và một id không thể phân giải sẽ bị từ chối.

Nếu không có mô hình thị giác nào được phép đối với key, nhánh mô tả sẽ không can thiệp và
yêu cầu được truyền qua mà không thay đổi, cùng hành vi fail-open như một
cơ chế bảo vệ đã tắt (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Các yêu cầu không có key và các key không có những hạn chế này hoạt động hoàn toàn giống
trước đây.

#### Prompt mô tả nhận biết tác vụ (`modalityBridgeVisionTaskAware`)

Mặc định là **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) nối thêm
nội dung của **tin nhắn người dùng cuối cùng** (được cắt ngắn còn 500 ký tự) vào
prompt mô tả cơ sở, định hướng phần mô tả theo đúng nội dung người dùng thực sự
yêu cầu (mẫu codex-vision-proxy) và yêu cầu mô hình thị giác phiên âm văn bản
hiển thị trong ảnh. Khi cờ này tắt — hoặc không có văn bản từ người dùng — prompt
cơ sở được sử dụng nguyên trạng.

Yêu cầu tương thích OpenAI của vòng lặp tự gọi mô tả (`callVisionModelSingle()`
trong `visionBridgeHelpers.ts`) luôn yêu cầu `image_url.detail: "high"` —
vô điều kiện, với mọi nơi gọi/nhà cung cấp, không phụ thuộc vào bất kỳ tín hiệu
nào từ máy khách. Việc lấy mẫu ở mức chi tiết thấp làm giảm độ chính xác OCR cho
chính tác vụ phiên âm văn bản mà prompt này yêu cầu, vì vậy bản thân lệnh gọi mô
tả luôn yêu cầu mức chi tiết cao, bất kể yêu cầu gửi đến ban đầu sử dụng mức chi
tiết nào. Điều này chỉ ảnh hưởng đến phần thân yêu cầu mô tả nội bộ; nó không thay
đổi cách OmniRoute chuyển tiếp `image_url.detail` của chính nơi gọi trong yêu cầu
chính — giá trị mặc định đó được áp dụng riêng và chỉ dành cho các máy khách
OpenCode được phát hiện, trong `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Nhánh định dạng truyền dẫn
Anthropic của vòng lặp tự gọi mô tả không có trường `detail` và không bị ảnh hưởng
bởi một trong hai giá trị mặc định.

#### Giới hạn đầu ra mô tả (`modalityBridgeVisionMaxChars`)

| Khóa                           | Mặc định | Phạm vi            |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` hoặc 100–50000 |

`0` (mặc định) có nghĩa là **không giới hạn** — phần mô tả do
`callVisionModel()` trả về được chuyển tiếp nguyên trạng, duy trì hành vi hiện
có. Bất kỳ giá trị nào trong phạm vi 100–50000 đều cắt ngắn phần mô tả với hậu tố
`…` trước khi phần này được chèn trở lại dưới dạng `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` trong `src/lib/guardrails/visionBridge.ts`).
Tăng giá trị này cho các tác vụ OCR nhiều chi tiết, trong đó mô hình hạ nguồn cần
toàn bộ nội dung phiên âm; giảm giá trị để giới hạn mức sử dụng token của các mô
hình thị giác có đầu ra dài. Trường trên bảng điều khiển nằm trong bảng Advanced
của tab Vision (`modality-bridge-max-chars` trong
`ModalityBridgeVisionTab.tsx`) và nâng mọi giá trị từ 1 đến 99 lên mức sàn 100,
trong khi giữ nguyên giá trị `0` được nhập rõ ràng — `0` tự thân là một giá trị
Zod hợp lệ (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
không đơn thuần là giá trị mặc định “chưa đặt”.

#### Bộ nhớ đệm mô tả (`modalityBridge/bridgeCache.ts`)

Bộ nhớ đệm LRU + TTL trong bộ nhớ, được dùng chung cho toàn bộ tiến trình.
Khóa = `sha256(imageRef + composedPrompt + configuredBridgeModel)` với cách đóng
khung bằng tiền tố độ dài (không xảy ra xung đột ranh giới trường). Thành phần mô
hình là mô hình cầu nối **được cấu hình**, không phải mô hình thực sự đã phản hồi —
`callVisionModel` có thể chuyển sang phương án dự phòng ở bên trong và việc tạo
khóa theo từng lần thử sẽ làm phân mảnh bộ nhớ đệm. Các lần mô tả thất bại không
bao giờ được lưu vào bộ nhớ đệm. Cài đặt:

| Khóa                            | Mặc định | Phạm vi |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Chuẩn hóa ảnh từ xa (tự gọi mô tả/tìm nạp base64)

Khi cầu nối tự tìm nạp một ảnh **từ xa** — lệnh tự gọi mô tả Anthropic và quá
trình chuyển đổi base64 theo định dạng truyền dẫn claude
(`ensureBase64ImagesForClaudeWire`), cả hai đều thông qua
`fetchRemoteImageAsDataUri()` trong `visionBridgeHelpers.ts` — URI dữ liệu thu
được sẽ được đưa qua `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) trước khi được nhúng vào yêu cầu gửi đến mô
hình thị giác. Ảnh quá lớn được giảm kích thước xuống **cạnh dài 2048px** (khớp
với giới hạn đổi kích thước mà OpenAI/Anthropic đã áp dụng ở phía máy chủ), giúp
giảm số byte tải lên/độ trễ mà không thay đổi nội dung mô hình thị giác nhìn thấy.
Việc đổi kích thước sử dụng `sharp`, được tải thông qua lệnh nhập động: trên nền
tảng mà tệp nhị phân gốc của nó không tải được, `normalizeDataUri()` **không bao
giờ ném lỗi** — hàm này quay về chuyển tiếp nguyên trạng các byte ban đầu, nhờ đó
luồng mô tả/chuyển đổi base64 luôn tiếp tục hoạt động. Các byte không phải ảnh
(một lần tìm nạp không trả về ảnh có thể giải mã) cũng được chuyển tiếp nguyên
trạng. Việc chuẩn hóa này chỉ áp dụng cho các ảnh mà cầu nối tìm nạp phục vụ lệnh
tự gọi của chính nó — không bao giờ áp dụng cho payload chuyển tiếp thô của nơi
gọi, phù hợp với nguyên tắc chỉ sửa đổi khi được chủ động bật (Quy tắc cứng #20).

#### Lược đồ cài đặt + di chuyển dữ liệu

Các khóa `modalityBridge*` mới được Zod xác thực trong `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, bộ ba `modalityBridgeCache*` và nhóm
`modalityBridgeAudio*` được Audio Bridge sử dụng. Bản di chuyển
`141_modality_bridge_settings.sql` sao chép các giá trị `visionBridge*` cũ hiện
có sang các khóa mới tương ứng (có tính lũy đẳng, không bao giờ ghi đè giá trị
`modalityBridge*` do người vận hành đặt); các khóa cũ vẫn được chấp nhận làm
phương án đọc dự phòng trong một chu kỳ phát hành.

#### Header minh bạch + số liệu thống kê

Các phản hồi đã được chuyển đổi bằng mô tả mang
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(được tạo bởi `buildModalityBridgeHeader()` trong
`modalityBridge/bridgeStats.ts`, được đóng dấu bởi
`withModalityBridgeHeader()` trong `src/sse/handlers/chatHelpers.ts`).
Các yêu cầu được định tuyến lại **không có** header — payload không bị thay đổi và
việc hoán đổi mô hình đã hiển thị trong trường `model` của phần thân phản hồi.

`GET /api/modality-bridge/stats` (xác thực quản trị, cùng cấp với
`GET /api/settings`) trả về các bộ đếm trong bộ nhớ theo từng phương thức
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` cho `vision`, `audio` và
`video`. `averageLatencyMs` sử dụng `latencySamples` làm mẫu số, thay vì tất cả
các lượt thử; một thao tác không có thông tin thời gian sẽ không tạo ra một mẫu
giả có giá trị 0 mili giây. `bridged` vẫn là bí danh tương thích ngược cho các
lượt chuyển đổi thành công; các lượt thử thất bại không làm tăng giá trị này.
Theo thiết kế, các bộ đếm được đặt lại khi tiến trình khởi động lại
(dữ liệu đo từ xa, không phải dữ liệu kế toán).

#### Cấu hình bảng điều khiển

Trang bảng điều khiển chuyên dụng nằm tại
`/dashboard/settings/modality-bridge`. Các tab `Vision`, `Audio` và `Video`
có thể được truy cập trực tiếp qua URL và giữ nguyên các tham số truy vấn khi
chuyển đổi giá trị `tab`.
Tab Vision cung cấp các tùy chọn bật/tắt, chế độ, lựa chọn mô hình (bao gồm giá
trị mặc định tự động), lời nhắc nhận biết tác vụ, các giới hạn nâng cao về thời
gian chờ/kích thước ảnh/độ dài mô tả/bộ nhớ đệm, các bộ đếm thời gian chạy và
một yêu cầu mẫu có cơ chế bảo vệ. Tab Audio cũng đang hoạt động: tab này cung
cấp tùy chọn bật/tắt, bộ chọn mô hình chỉ dành cho STT với tùy chọn Auto, các
giới hạn thời gian chờ/độ dài clip tối đa, các bộ đếm âm thanh và một phép thử
mẫu `input_audio`. Tab Video có đầy đủ chức năng: tab này báo cáo trạng thái
thời gian chạy của FFmpeg/ffprobe — một trong bốn trạng thái giao diện rõ ràng
(`unknown` khi quá trình thăm dò đang diễn ra hoặc không thể hoàn tất,
`restricted` trên máy chủ bảng điều khiển không phải loopback, nơi quá trình
thăm dò bị bỏ qua ở phía máy khách, `unavailable` sau khi đã thăm dò và xác
nhận không có, hoặc `available` kèm theo các phiên bản FFmpeg/ffprobe) — duy
trì các giới hạn bật/tắt, mô hình, khung hình, video và thời gian chờ, lọc bộ
chọn mô hình để chỉ hiển thị các mô hình hỗ trợ thị giác, đồng thời cung cấp
các bộ đếm video.

Thẻ Vision Bridge trước đây trong phần cài đặt AI giờ là một liên kết tương
thích đến trang mới; thẻ này không còn sở hữu một bản sao thứ hai của biểu mẫu.
Media Providers cũng liên kết các quy trình Image-to-Text và Speech-to-Text với
các tab Modality Bridge tương ứng mà không xóa khu vực thử nghiệm
Speech-to-Text hiện có.

**Bỏ qua kiểm tra tiếp nhận cho vòng lặp tự gọi:** khi lệnh gọi mô tả được định
tuyến qua vòng lặp tự gọi `/v1` của chính OmniRoute (mô hình nhà cung cấp không
tiêu chuẩn), yêu cầu con sẽ gửi `x-omniroute-admission-bypass: internal` và
được xác thực bằng thông tin xác thực vòng lặp tự gọi đã phân giải — giá trị
giữ chỗ cục bộ `sk_omniroute` trong chế độ cục bộ, hoặc khóa môi trường
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` do người vận hành cấu hình (#1350), để
các bản triển khai có `REQUIRE_API_KEY=true` vẫn có thể chạy lệnh gọi mô tả.
Cơ chế bỏ qua chỉ được chấp nhận cho chính xác các thông tin xác thực đó, vì vậy
máy khách bên ngoài không thể sử dụng tiêu đề này để bỏ qua bước tiếp nhận.

Các giá trị mặc định cũ nằm trong `src/shared/constants/visionBridgeDefaults.ts`;
các giá trị mặc định mới cho chế độ/nhận biết tác vụ/bộ nhớ đệm và trình phân
giải cài đặt nằm trong
`src/shared/constants/modalityBridgeDefaults.ts`. Cơ chế bảo vệ cung cấp tùy
chọn hàm khởi tạo `deps` để các kiểm thử có thể chèn những triển khai giả của
`getSettings` và `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Chặn các yêu cầu trò chuyện chứa âm thanh trước khi chúng đến một đích không
được xác định là có hỗ trợ đầu vào âm thanh. Cơ chế này không bao giờ định tuyến
lại yêu cầu trò chuyện: các phần âm thanh được chuyển thành văn bản thông qua
điểm cuối multipart tương thích OpenAI hiện có, và mô hình trò chuyện đã chọn
tiếp tục xử lý bằng bản chép lời dạng văn bản.

Luồng xử lý:

1. Phân giải `supportsAudio` thông qua `getResolvedModelCapabilities()`. Siêu dữ
   liệu rõ ràng trong sổ đăng ký nhà cung cấp được ưu tiên trước, tiếp theo là
   siêu dữ liệu mô hình tĩnh, rồi đến `modalities_input` đã đồng bộ. Một danh
   sách đầu vào được khai báo nhưng không chứa `audio` sẽ cho kết quả `false`;
   nếu không có bằng chứng nào về khả năng hỗ trợ thì kết quả vẫn là `null`.
   Cả `false` và `null` đều kích hoạt cầu nối bảo thủ, trong khi `true` sẽ bỏ
   qua cầu nối.
2. Phân giải các cài đặt `modalityBridgeAudio*` và trích xuất những phần âm
   thanh cấp cao nhất có thể nối ghép từ mọi thông điệp thông qua bộ dò
   `detectMediaParts()` dùng chung. Các định dạng truyền dẫn được hỗ trợ gồm
   `input_audio` của OpenAI, `audio_url` và
   `source.media_type: "audio/*"`. Âm thanh lồng nhau được phát hiện để định
   tuyến nhưng không bị xóa bởi đường dẫn nối ghép. Khối lượng công việc được
   giới hạn bởi `modalityBridgeAudioMaxClips`; các phần phía sau vẫn được giữ
   nguyên.
3. Tôn trọng `provider/model` đã cấu hình, hoặc để `selectAudioBridgeModel()`
   duyệt `AUDIO_TRANSCRIPTION_PROVIDERS` theo thứ tự danh mục ổn định và chọn
   mô hình đầu tiên có thông tin xác thực nhà cung cấp đang hoạt động và có thể
   sử dụng.
4. `callAudioTranscription()` chuyển đổi âm thanh base64/data-URI thành một
   `file` multipart, hoặc tải xuống `audio_url` từ xa thông qua cơ chế bảo vệ
   kết nối đi chỉ cho phép tài nguyên công khai, có ghim DNS và giới hạn 25 MB.
   Sau đó, hàm gửi file và mô hình đã chọn bằng POST đến vòng lặp tự gọi cục bộ
   `/v1/audio/transcriptions`, được xác thực bằng `resolveSelfLoopBearer()`.
   Tuyến chép lời hiện có thực hiện việc tra cứu thông tin xác thực, xử lý thời
   gian chờ/rate-limit và điều phối đến nhà cung cấp như bình thường.
5. Các lệnh gọi thành công thay thế phần tương ứng bằng
   `[Audio N]: <transcript>`. Các lệnh gọi chạy với `Promise.allSettled`: một
   lỗi riêng lẻ sẽ giữ nguyên phần âm thanh ban đầu đó (hợp đồng #4012). Nếu
   mọi lệnh gọi đều thất bại và đích đã được chứng minh có
   `supportsAudio === false`, các phần sẽ trở thành
   `[Audio N]: (unavailable — no STT provider connected)` (hợp đồng #8430).
   Với một đích chưa xác định (`null`), kết quả thất bại toàn bộ vẫn được giữ
   nguyên. Một đích đã được chứng minh là chỉ hỗ trợ văn bản nhưng không có
   thông tin xác thực STT khả dụng sẽ nhận cùng nội dung giữ chỗ rõ ràng mà
   không phát sinh lệnh gọi mạng.

Các bản chép lời thành công sử dụng bộ nhớ đệm LRU/TTL toàn tiến trình của
Modality Bridge. Khóa kết hợp tham chiếu âm thanh, nhãn thao tác ổn định
`audio-transcription` và mô hình STT đã chọn; các lỗi không bao giờ được lưu
vào bộ nhớ đệm. Các lượt thử xử lý âm thanh cập nhật những bộ đếm dùng chung
`bridged`, `cacheHits`, `failures` và `lastUsedAt`.
Các phản hồi đã chuyển đổi mang
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; những
yêu cầu không bị thay đổi sẽ không nhận được phân đoạn Audio Bridge.

Các cài đặt thời gian chạy được lưu trong DB và xác thực bằng Zod:

| Khóa                          | Mặc định | Phạm vi             |
| ----------------------------- | -------- | ------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                   |
| `modalityBridgeAudioModel`    | `""`     | Tự động hoặc ID STT |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000         |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                |

Bộ nhớ đệm dùng chung vẫn được kiểm soát bởi `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` và `modalityBridgeCacheMaxEntries`.

### Cầu nối video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Chặn các phần video cấp cao nhất trong `messages` của Chat Completions và `input`
của Responses API trước khi gọi một đích không được xác định là có hỗ trợ video
gốc. Các dạng được hỗ trợ là `input_video`, `video_url`, `video_source`, URL HTTPS
và URI dữ liệu `data:video/*;base64,...`. Tên tệp thuần túy trong văn bản không
được xem là video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) đảm nhiệm việc duyệt yêu cầu,
kiểm tra khả năng/chính sách, tổng hợp theo từng yêu cầu và tải trọng phản hồi.
Công việc trên từng video — thu nhận, bộ nhớ đệm toàn bộ kết quả, mô tả một chuỗi
khung hình (kết hợp mọi bản chép lời âm thanh do bên gọi khai báo), cũng như chỉ
số đo/hủy bỏ/dọn dẹp cho từng lần thử — được ẩn phía sau `processVideoPart` trong
`videoBridgePipeline.ts`, được gọi một lần cho mỗi phần video bên trong vòng lặp
của `preCall`. Mô-đun đó cũng định nghĩa các ranh giới cổng tường minh
`VideoMediaBrokerPort` (thu nhận byte và trích xuất các khung hình được lấy mẫu),
`VideoAudioTranscriptionPort` (kết hợp bản chép lời âm thanh do bên gọi khai báo
với chú thích của các khung hình được lấy mẫu) và `VideoDrilldownPort` (ranh giới
lưu trữ cho việc phân tích sâu khung hình; chưa được kết nối vào
`processVideoPart` — hiện tại chỉ có tuyến
`/api/modality-bridge/video/drilldown` riêng biệt ghi các mục phân tích sâu).

Đường dẫn yêu cầu `/v1` công khai không bao giờ nhập hoặc gọi một tiến trình con.
Video từ xa được tải xuống với giới hạn 50 MiB; video base64 nội tuyến có giới
hạn thận trọng là 36 MiB sau giải mã cho mỗi video để phần bao chứa
mô hình/thông điệp/định khung có thể nằm trong giới hạn tiếp nhận yêu cầu JSON
công khai là 50 MiB. Độ dài nội tuyến và ước tính kích thước sau giải mã được
kiểm tra trước khi cấp phát. HTTPS là bắt buộc đối với URL từ xa ban đầu và mọi
lần chuyển hướng, sử dụng cơ chế bảo vệ lưu lượng đi chỉ cho phép đích công khai
hiện có với tính năng ghim DNS. Sau đó, các byte đi qua đúng ranh giới trình môi
giới nội bộ `POST /api/modality-bridge/video/extract`. Tuyến đó vừa là
`LOCAL_ONLY` vừa là `SPAWN_CAPABLE`, chỉ chấp nhận yêu cầu loopback đáng tin cậy
được xác thực theo từng tiến trình và không bao giờ chấp nhận URL, đường dẫn hệ
thống tệp, tệp thực thi hoặc danh sách đối số. Quy trình giới hạn kích thước nội
dung của API và trình đọc nội dung tăng dần của trình xử lý áp dụng độc lập giới
hạn đầu vào 50 MiB cho trình môi giới. Hàng đợi hữu hạn của nó chạy mỗi lần một
tác vụ trích xuất, cho phép bốn tác vụ đang chờ và giới hạn tổng đầu vào đang chờ
ở 100 MiB.

Bên trong trình môi giới, `ffprobe` đọc một tệp cục bộ riêng tư; danh sách cho
phép định dạng cố định loại trừ các định dạng danh sách phát và tệp kê khai. Đối
với các vùng chứa họ MOV được cho phép, tham chiếu dữ liệu MOV bên ngoài vẫn bị
vô hiệu hóa theo mặc định và lệnh cố định không bật chúng. Cả `ffprobe` và
`ffmpeg` đều sử dụng danh sách trắng giao thức chỉ gồm `file`, một luồng, các
mảng đối số cố định, không dùng shell và các tệp thực thi được phân giải từ
`PATH`. Các luồng ảnh bìa đính kèm không phải là ứng viên có thể phát. Tất cả
luồng có thể phát phải đáp ứng các giới hạn; luồng mặc định tường minh được ưu
tiên trước phương án dự phòng xác định là luồng có chỉ mục thấp nhất. Video bị
giới hạn ở 600 giây, 8.192 pixel trên mỗi chiều và 33.554.432 pixel nguồn.
FFmpeg lấy mẫu 1–16 khung hình JPEG tại điểm giữa, thu nhỏ cạnh dài xuống tối đa
1.024 pixel mà không phóng to đầu vào nhỏ hơn và không bao giờ nhận URL. Chính
sách lấy mẫu mặc định là `uniform`. Các chính sách tùy chọn `scene_aware` và
`segment_aware` thử nghiệm thực hiện thêm một lượt FFmpeg cố định trên luồng cục
bộ đã được xác thực, chọn các dấu thời gian cảnh `showinfo` có giới hạn và dự
phòng theo cách xác định về cùng các điểm giữa đồng đều khi bộ phát hiện gặp lỗi,
hết thời gian, cho đầu ra không hợp lệ hoặc tập ứng viên rỗng. Chế độ nhận biết
phân đoạn phân bổ các mẫu điểm giữa theo tỷ lệ với những khoảng cảnh đã được xác
thực; bằng chứng và hành vi dự phòng của chế độ nhận biết phân đoạn được trình
bày chi tiết bên dưới. Giới hạn cứng 16 khung hình được áp dụng sau bước lựa chọn
trong mọi chính sách. Khi một yêu cầu nhận biết cảnh chỉ có ngân sách một khung
hình, yêu cầu đó sử dụng điểm giữa đồng đều của toàn bộ video đang hoạt động
hoặc cửa sổ lấy nét và báo cáo `policyEffective: uniform`: một khung hình cảnh
duy nhất được chọn không thể duy trì cả hai đầu thời gian. Bên gọi có thể tùy
chọn cung cấp một cửa sổ lấy nét hữu hạn (`start`/`end` tính bằng giây); các biên
được giới hạn theo thời lượng phương tiện, cửa sổ đảo ngược hoặc không hữu hạn
sẽ bị từ chối và mọi chính sách lấy mẫu chỉ được thực hiện bên trong khoảng đã
chuẩn hóa. Cửa sổ kết quả được đưa vào siêu dữ liệu lấy mẫu và tiền tố mô tả
không đáng tin cậy để các mô hình hạ nguồn có thể phân biệt một đoạn trích được
lấy nét với toàn bộ dòng thời gian.

Lấy nét chú thích theo ngữ nghĩa là một thiết lập riêng biệt và tường minh. Chế
độ phân tích `full` mặc định giữ nguyên lời nhắc khung hình hiện có và không bao
giờ chuyển tiếp văn bản yêu cầu đến mô hình chú thích. Trong chế độ `focused`,
cầu nối chỉ đọc `text`/`input_text` mới nhất, không rỗng và do người dùng tạo từ
cùng vùng chứa Chat hoặc Responses, chuẩn hóa thành NFC, thu gọn các ký tự điều
khiển và khoảng trắng, đồng thời giới hạn ở 500 điểm mã Unicode. Kết quả rỗng sẽ
quay về lời nhắc `full` chính xác. Một gợi ý có thể sử dụng được tuần tự hóa dưới
dạng JSON trong một khối ngữ cảnh người dùng không đáng tin cậy chuyên biệt và
chỉ có thể ưu tiên các chi tiết có thể quan sát; gợi ý đó không thể ghi đè cảnh
báo riêng về việc không làm theo những chỉ dẫn nhìn thấy hoặc nghe thấy trong
phương tiện. Việc lấy nét theo văn bản không bao giờ suy ra `start`/`end` hoặc
thay đổi trình lấy mẫu theo thời gian.

#### Bằng chứng phân đoạn cấu trúc FU-07

`segment_aware` sử dụng một lượt tiền phân tích có giới hạn trên luồng video cục bộ đã được xác thực. Chuỗi bộ lọc cố định trước tiên thu nhỏ chiều rộng xuống tối đa 320 pixel, phát hiện các thay đổi cảnh và khoảng thời gian bị đóng băng, sau đó lấy mẫu ở tốc độ 1 khung hình mỗi giây để đo độ mờ, độ chói trung bình và thông tin không gian/thời gian. Lượt này được giới hạn ở 600 mẫu cấu trúc, một luồng FFmpeg/bộ lọc, cùng danh sách cho phép về giao thức chỉ `file` và vùng chứa, giới hạn đầu ra tiến trình là 1 MiB và tối đa 30 giây trong cơ chế hủy/thời hạn dùng chung của broker. Nó không bao giờ chấp nhận lệnh, bộ lọc, đường dẫn hoặc URL từ yêu cầu.

Các giá trị cấu trúc là bằng chứng lấy mẫu mang tính xác định, không phải sự hiểu biết ngữ nghĩa về video. Chúng không suy luận chủ thể, hành động, phụ đề, lời nói hoặc ý định của người dùng. Các ranh giới cảnh và đóng băng tạo thành các phân đoạn; phạm vi đóng băng, độ mờ, độ phơi sáng, mức độ chi tiết không gian và biến đổi theo thời gian chỉ ảnh hưởng đến cách phân bổ ngân sách hiện có từ 1–16 khung hình. Một phân đoạn bị đóng băng hoàn toàn được giới hạn ở một khung hình, trong khi các phân đoạn không bị đóng băng cạnh tranh để nhận phần ngân sách còn lại. Khi số lượng ranh giới vượt quá số khung hình, độ bao phủ đồng đều trên dòng thời gian được duy trì để các lần cắt cảnh nhanh ở đầu video không thể che khuất một phân đoạn dài ở cuối. Các ranh giới cảnh nằm trong phạm vi độ phân giải phân tích 1 giây của một ranh giới đóng băng được hợp nhất.

Bộ lọc bị thiếu, bằng chứng sai định dạng/trống, lỗi bộ dò hoặc tiền phân tích có giới hạn bị hết thời gian sẽ chuyển sang chính sách trung điểm đồng đều chính xác. Thao tác hủy của bên gọi hoặc thời hạn của broker không chuyển sang chính sách dự phòng: nó chấm dứt tiến trình con đang chạy, ngăn việc trích xuất khung hình tiếp theo và cây tạm thời riêng tư được xóa trong `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` tạo các mẫu kiểm thử FFmpeg thực, mang tính xác định, cho mức tiết kiệm số lần gọi tạo phụ đề sau khi loại bỏ trùng lặp, phân bổ ngân sách cho chuyển động dày đặc, bằng chứng về độ mờ/độ phơi sáng/SI-TI, các lần cắt cảnh nhanh kèm phần cuối dài và các kết quả dương tính giả do chuyển cảnh mờ dần. Script ghi lại thời gian thực tế của quá trình tiền phân tích và, khi có `/usr/bin/time`, mức sử dụng CPU của tiến trình con cùng RSS cực đại. Các bước kiểm tra chất lượng của nó chỉ là các oracle cấu trúc. Chất lượng thực tế của mô hình tạo phụ đề vẫn là `HOLD` vì bộ công cụ kiểm thử này không có endpoint được ủy quyền hoặc bộ đánh giá cố định. Mức tiết kiệm chi phí cũng vẫn là `HOLD` trừ khi `--caption-cost-per-call-usd` cung cấp một ước tính dương rõ ràng về chi phí cho mỗi lần gọi; script không bao giờ ngụy tạo bất kỳ kết quả nào trong số đó.

Mỗi khung hình được giới hạn ở 4 MiB, tổng tất cả khung hình thô ở 23 MiB và phản hồi broker đã tuần tự hóa ở 32 MiB. Một thư mục tạm thời riêng tư được xóa trong `finally`. OmniRoute không đóng gói kèm FFmpeg và không chấp nhận đường dẫn tệp thực thi tùy chỉnh. Trước khi tạo phụ đề, bridge áp dụng một lượt loại bỏ trùng lặp hình ảnh thận trọng: mỗi JPEG được giảm xuống thành một bộ đệm ảnh xám 16×16 và chỉ được so sánh với khung hình được giữ lại gần nhất. Với ngân sách phụ đề được yêu cầu lớn hơn một khung hình, quá trình trích xuất cung cấp một tập ứng viên có giới hạn, tối đa gấp đôi ngân sách đó và không bao giờ quá 16 khung hình. Giới hạn được yêu cầu chỉ được áp dụng sau khi loại bỏ trùng lặp; ứng viên đầu tiên và cuối cùng đã chọn được giữ lại trong quá trình tinh giản cuối cùng khi ngân sách ít nhất là hai. Chính sách có phiên bản `grayscale-16x16-mean-cells-v2` sử dụng giá trị lớn hơn giữa độ chênh lệch độ chói trung bình và tỷ lệ các ô hình thu nhỏ có độ chênh lệch chuẩn hóa ít nhất là 0.05. Ngưỡng trùng lặp là hằng số 0.04, được chọn vì tính dễ dự đoán thay vì được cung cấp dưới dạng một thiết lập khi chạy. Tín hiệu phụ có độ tương phản cao này giữ lại các chuyển động nhỏ và thay đổi văn bản hiển thị mà phép so sánh chỉ dựa trên giá trị trung bình có thể bỏ sót. Lỗi bộ so sánh hoặc bộ giải mã sẽ chuyển sang chế độ mở và duy trì độ bao phủ. Siêu dữ liệu đầu ra phân biệt các ứng viên đã trích xuất, các khung hình được sử dụng thành công và các bản sao hình ảnh đã bị loại bỏ.

Một phần video được đánh dấu rõ ràng có thể yêu cầu một bảng ảnh liên hệ kèm dấu thời gian. Bridge tạo một lưới JPEG gồm tối đa 4 cột và 16 khung hình. Mỗi ô 512 pixel khắc dấu thời gian nguồn vào một dải có độ tương phản cao ở phía dưới, đồng thời các dấu thời gian đó vẫn được giữ trong siêu dữ liệu văn bản để phục vụ việc liên kết và kiểm tra về sau. Toàn bộ JPEG vẫn bị giới hạn ở 32 MiB. Nếu `sharp` không thể giải mã hoặc tổng hợp lưới, bridge sẽ chuyển sang sử dụng các khung hình JPEG riêng lẻ; thao tác hủy của máy khách vẫn được truyền qua thao tác tạo bảng ảnh.

Bằng chứng để đưa vào sử dụng được chủ ý tách biệt khỏi microbenchmark tổng hợp mô phỏng. `scripts/perf/video-bridge-contact-sheet-eval.ts` định nghĩa một bộ công cụ kiểm thử A/B có phiên bản lược đồ dành cho các mô hình thị giác thực tương thích với OpenAI. Nó đo số token do nhà cung cấp báo cáo, độ trễ thực tế đầu cuối (bao gồm cả việc tổng hợp bảng ảnh), số lần gọi mô hình và mức độ lưu giữ thông tin thực tế được định nghĩa trong manifest. Các phản hồi thô của mô hình không được ghi vào báo cáo; chỉ các bản tóm lược SHA-256 và ID của thông tin thực tế khớp mới được lưu giữ. Bộ công cụ kiểm thử không thực hiện cuộc gọi mạng hoặc cuộc gọi mô hình có tính phí nào trừ khi truyền `--execute-real` và cấu hình `--model`, `OMNIROUTE_BASE_URL` cùng `OMNIROUTE_API_KEY`. Nếu không có lượt chạy thực rõ ràng đó, kết luận mà máy có thể đọc vẫn là `HOLD`; riêng các phép đo tổng hợp mô phỏng về tải trọng/số lần gọi không phải là bằng chứng để đưa vào sử dụng.

Bên gọi có thể đính kèm một mảng `transcript.cues` tùy chọn vào một phần video được hỗ trợ khi họ đã có sẵn văn bản được căn chỉnh. Mỗi cue phải chứa `text`, một khoảng `start`/`end` hữu hạn nằm trong thời lượng đã thăm dò và một `source` thuộc danh sách cho phép (`client`, `embedded` hoặc `audio-bridge`); `confidence` mặc định là `1` và phải nằm trong khoảng từ `0` đến `1`. Các cue trùng khớp hoàn toàn được hợp nhất. OmniRoute không bao giờ bắt đầu quá trình phiên âm từ siêu dữ liệu này: các cue đã xác thực được sao chép vào kết quả mô tả cùng với nguồn, độ tin cậy và khoảng thời gian, đồng thời được hiển thị dưới dạng các quan sát không đáng tin cậy bên cạnh phụ đề khung hình. Văn bản không hợp lệ, nằm ngoài phạm vi hoặc không có thông tin nguồn gốc sẽ bị từ chối thay vì được trộn vào luồng phụ đề. Cả hai kênh bản chép lời trong nội dung yêu cầu đều chuẩn hóa thông tin nguồn gốc được cung cấp thành `client`, kể cả các nhãn `embedded` hoặc `audio-bridge` do chính bên gửi tự xác nhận. Chỉ một adapter do máy chủ sở hữu mới có thể gán các nhãn đáng tin cậy đó thông qua đối số chỉ dùng trong mã `trustedSource`; một trường JSON trong yêu cầu không thể truyền tới đối số đó. Văn bản bản chép lời vẫn là nội dung không đáng tin cậy được lấy từ phương tiện, bất kể nguồn gốc của nó, và tuyệt đối không được dùng để quyết định việc cấp quyền.

Một trình gọi nâng cao có thể cung cấp một rãnh `audioTranscript` cho cùng video;
rãnh này được xem là văn bản do máy khách cung cấp, không phải bằng chứng về việc máy chủ đã phiên âm.
Điểm hợp nhất chạy các quan sát hình ảnh và âm thanh trong cùng
một thời hạn và tín hiệu hủy, sắp xếp chúng trên một dòng thời gian chung, gộp
các bản trùng lặp hoàn toàn và báo cáo kết quả một phần khi chỉ một bên thành công.
Một `audioTranscript` không hợp lệ sẽ hạ cấp thành kết quả một phần đó — phần mô tả
hình ảnh được giữ lại và nhánh âm thanh ghi nhận một mã lỗi đã được làm sạch —
thay vì làm hỏng toàn bộ video. Tình trạng sẵn sàng của từng nhánh, cờ kết quả một phần
và các mã lỗi đã được làm sạch được giữ nguyên trong kết quả mô tả, trong siêu dữ liệu
của cơ chế bảo vệ (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), trong siêu dữ liệu bộ nhớ đệm kết quả và trong các bộ đếm
hợp nhất của bridge. Đường dẫn Video Bridge mặc định không gọi chức năng chuyển giọng nói thành văn bản
hoặc tải xuống bản sao phương tiện thứ hai; khi không có rãnh tường minh đó, đường dẫn này vẫn
chỉ xử lý video.

**Lưu giữ bản chép lời (#12150 P1).** Điều này tự động áp dụng bất cứ khi nào
Video Bridge (bản thân là tính năng cần chủ động bật) kết xuất một dấu mốc bản chép lời — không có
cờ lưu giữ riêng. Khi một yêu cầu kết xuất bất kỳ dấu mốc bản chép lời nào (một
`transcript` do trình gọi khai báo hoặc một `audioTranscript` đã hợp nhất), cơ chế bảo vệ đánh dấu yêu cầu đó là
`videoBridgeObserved` và tạo ra một bản bóng đã che thông tin của phần mô tả video —
một bản kết xuất giống hệt, trong đó phần nội dung văn bản tự do của mọi dấu mốc được thay thế bằng
`[redacted-video-transcript]`, được tạo bằng cách thay thế trường dấu mốc có cấu trúc
trước khi chuỗi được lắp ráp (không bao giờ bằng cách phân tích văn bản đã được làm phẳng, nhờ đó không có nội dung
dấu mốc nào — dù mang tính đối kháng hay thông thường, bao gồm cả nội dung chứa `]` như
`[inaudible]`/`[music]` — có thể còn sót lại). Phần thân yêu cầu trong nhật ký cuộc gọi được lưu trữ
thay mỗi phần văn bản bắt nguồn từ video bằng bản bóng đã che thông tin đó, được đối chiếu theo
tính bằng nhau của nội dung; neo `fullText` được đọc lại từ tải trọng hoàn chỉnh của cơ chế bảo vệ
trước cuộc gọi, vì vậy việc đối chiếu vẫn thành công sau khi các cơ chế bảo vệ tiếp theo trong chuỗi
(các bộ che PII và thông tin xác thực, mức ưu tiên 10/95) viết lại trực tiếp văn bản mô tả và
sau khi thao tác chèn lời nhắc hệ thống/bàn giao/bộ nhớ định hình lại mảng thông điệp. Phần
thân được gửi lên mô hình không thay đổi. Một yêu cầu được quan sát cũng không ghi vào
Memory bền vững (việc trích xuất từ cả yêu cầu lẫn phản hồi đều bị bỏ qua),
do đó phản hồi của chính mô hình không thể lặp lại văn bản bản chép lời vào Memory.

**Các trường video thô (#12430).** Khi bridge được bật và khả năng hỗ trợ video gốc chưa xác định hoặc không có, các trường `transcript`/`audioTranscript` đã được định nghĩa cũng kích hoạt `videoBridgeObserved`, kể cả sau khi mô tả thất bại hoặc đạt giới hạn `maxVideos`. `null` và chuỗi rỗng vẫn được tính; các trường không tồn tại và siêu dữ liệu không phải video thì không. Các bản sao được lưu giữ sẽ che các trường này hoặc bỏ qua yêu cầu, đồng thời bộ nhớ đệm/Memory bị bỏ qua.

Trên các đường dẫn dự phòng đó, dấu mốc hợp lệ do trình gọi cung cấp trở thành các phần `text`/`input_text`
được hỗ trợ thay vì các trường nhà cung cấp không chuẩn. Cả hai rãnh do yêu cầu cung cấp
vẫn là các quan sát `client` không đáng tin cậy, kèm cảnh báo rõ ràng rằng video
chưa được mô tả và dấu thời gian chưa được xác minh dựa trên phương tiện. Các giới hạn hiện có
là 256 dấu mốc/tổng cộng 64 KiB và giới hạn cho từng dấu mốc được áp dụng chung cho cả hai rãnh;
dấu thời gian phải nằm trong mức trần 600 giây của broker và bất kỳ cửa sổ tiêu điểm nào
được cung cấp. Các rãnh không hợp lệ bị loại bỏ, không được chuyển tiếp dưới dạng văn bản tùy ý; một
rãnh cùng cấp hợp lệ vẫn có thể được sử dụng trừ khi vượt quá giới hạn kết hợp của chúng. Các trường null/rỗng
không thêm văn bản. Cơ chế dự phòng này không thêm thao tác tìm nạp phương tiện hoặc phiên âm.
Các trường mở rộng của bản chép lời bị loại bỏ khỏi phần tử mang video dự phòng và các đối tượng
`video_url`/`source` của nó. Danh sách cho phép trên giao thức OpenAI vẫn nghiêm ngặt; các phần tử mang
video có hỗ trợ gốc chưa xác định vẫn khả dụng và các đích chỉ hỗ trợ văn bản đã biết vẫn giữ các dấu hiệu an toàn.
Các bản bóng che thông tin có cấu trúc bảo vệ văn bản bản chép lời được nối thêm, trong khi
yêu cầu gốc thuộc sở hữu của trình gọi vẫn không thay đổi. Các đích có hỗ trợ gốc và
bridge bị vô hiệu hóa vẫn giữ nguyên hành vi bỏ qua hiện có.

Các bản sao được lưu giữ bổ sung sử dụng cùng tín hiệu yêu cầu đã quan sát. Ảnh chụp nhanh
yêu cầu máy khách thô trước cơ chế bảo vệ, yêu cầu đang chờ trong bộ nhớ và nhật ký
yêu cầu bị từ chối sớm sẽ thay thế theo cấu trúc các trường bản chép lời trong các phần video;
các lời nhắc dạng chuỗi được tổng hợp bởi các giai đoạn của pipeline và quá trình bàn giao ngữ cảnh được che thông tin
tại đích lưu trữ phần thân yêu cầu. Dấu hiệu `video_content_removed` được lưu trữ
khiến thao tác tiếp tục bằng `previous_response_id` thất bại theo hướng đóng an toàn thay vì tái tạo
văn bản đã bị loại bỏ có chủ đích. Nếu một yêu cầu được quan sát bị mất
bản bóng che thông tin cho từng phần trước khi ghi nhật ký, hoặc thậm chí chỉ một trong số nhiều bản bóng video
không khớp sau các thay đổi yêu cầu tiếp theo, phần thân yêu cầu được lưu giữ sẽ bị
loại bỏ hoàn toàn thay vì giữ lại một bản chép lời chỉ được che thông tin một phần.

Đối với một yêu cầu được quan sát, phản hồi của mô hình có thể trích dẫn bất kỳ phần nào của
bản chép lời mà không có ranh giới dấu mốc có cấu trúc. Vì vậy, `responseBody` trong nhật ký cuộc gọi
được lưu trữ sẽ được thay thế bằng một dấu hiệu bỏ qua; hiện vật pipeline chi tiết (có thể bao gồm
phần thân từ thượng nguồn/máy khách và các đoạn luồng) không được lưu giữ. Bộ nhớ đệm ngữ nghĩa,
tính lũy đẳng và phát lại suy luận bỏ qua cả thao tác đọc lẫn ghi cho yêu cầu đó.
Yêu cầu gửi đến nhà cung cấp và phản hồi hiển thị cho máy khách vẫn không thay đổi. Các byte keepalive ban đầu
được rút khỏi bộ đệm tạm thời khi hiện vật chi tiết bị bỏ qua. Cảnh báo EventStream
không đúng định dạng của Kiro chỉ báo cáo số byte của tải trọng, tuyệt đối không báo cáo nội dung hoặc lỗi thô
của trình phân tích JSON.
Điều này không khẳng định rằng mọi thông tin chẩn đoán không liên quan của nhà cung cấp/plugin đều đã được
kiểm tra; đợt rà soát rộng hơn đối với các đích lưu giữ được theo dõi trong #11658.

Vòng đời nội bộ `/api/modality-bridge/video/drilldown` là một tầng bộ nhớ đệm riêng biệt, sử dụng loopback/xác thực bằng token. Mọi thao tác cũng yêu cầu một ID principal opaque chuẩn tắc. Trước khi một bên gọi trong môi trường production được kích hoạt, bên đó phải suy ra ID này từ tenant đã xác thực và tuyệt đối không được chuyển tiếp giá trị do client lựa chọn. Các khóa bộ nhớ đệm liên kết principal đó với các ID phiên và ID tham chiếu video chuẩn tắc, chỉ lưu các khóa được suy ra bằng SHA-256, đồng thời giới hạn cả thao tác đọc và xóa trong cùng principal. Bộ nhớ đệm lưu tối đa 16 khung hình JPEG đã suy ra cho mỗi mục, làm hết hạn chúng sau mười phút và hỗ trợ thao tác đọc `start`/`end` có giới hạn hoặc xóa phiên một cách tường minh.

Mỗi principal được giới hạn ở 16 mục và 64 MiB dữ liệu JPEG chuẩn tắc. Các giới hạn đó độc lập với mức trần toàn cục là 64 mục/256 MiB: áp lực hạn ngạch của principal chỉ loại bỏ các mục ít được sử dụng gần đây nhất của chính principal đó trước khi xem xét cơ chế loại bỏ LRU toàn cục. Các mục hết hạn được loại khỏi cả phần hạch toán theo principal lẫn toàn cục khi có hoạt động trên bộ nhớ đệm, trong khi thao tác hủy và lỗi xác thực không ghi nhận một phần thay thế chưa hoàn chỉnh.

Bộ nhớ đệm từ chối Base64 không chuẩn tắc, phần đệm dư thừa, nội dung đa phương tiện không phải JPEG, JPEG bị sai định dạng hoặc bị cắt cụt và JPEG tạo ra cảnh báo trong quá trình giải mã toàn bộ hình ảnh có giới hạn bằng `sharp`. Mỗi hình ảnh được chấp nhận sẽ được mã hóa lại thành JPEG chuẩn tắc; chiều rộng và chiều cao được suy ra từ các byte đã giải mã thay vì tin tưởng các trường do bên gọi cung cấp; đồng thời mọi byte polyglot ở cuối đều bị loại bỏ thay vì được giữ lại. Chỉ bộ đệm nén chuẩn tắc có giới hạn mới được tính vào cả hai hạn ngạch. Giới hạn truyền tải JSON bao gồm phần phụ trội của Base64 đối với mức trần đầu vào sau giải mã là 32 MiB. Mỗi
kết quả suy xuất được lưu trữ đều ghi lại định dạng/độ phân giải JPEG đã xác thực, chính sách lấy mẫu, phiên bản suy xuất, thời điểm tạo, hàm băm nội dung do máy chủ tính toán và tham chiếu cha đã băm cùng với hàm băm nội dung cha từ bên gọi đáng tin cậy. Việc hủy được kiểm tra giữa các giai đoạn giải mã/băm bất đồng bộ trước khi commit nguyên tử vào bộ nhớ đệm.

Phần triển khai này chưa kết nối producer production với route và chưa
cung cấp chức năng lựa chọn biến thể đa độ phân giải. Do đó, đường dẫn yêu cầu Video Bridge trong suốt không phát sinh thêm công việc, còn việc suy ra principal gắn với tenant và toàn bộ vòng đời đa độ phân giải FU-08 vẫn là công việc tiếp nối được nêu rõ, thay vì được ghi nhận là hành vi đã hoàn thiện.

Các khung hình được tạo chú thích tuần tự bằng mô hình Video đã cấu hình. Một
giá trị ghi đè Video trống sẽ kế thừa thiết lập Vision; nếu cả hai đều trống, trình
định tuyến tự động Vision sẽ chọn mô hình hỗ trợ thị giác có hiệu lực. Các chú thích thành công
thay thế phần ban đầu bằng tiền tố ổn định `[Video description:`; tiền tố này cũng
đánh dấu văn bản là quan sát không đáng tin cậy được suy ra từ nội dung đa phương tiện và yêu cầu các mô hình hạ nguồn
không làm theo các chỉ dẫn tìm thấy trong nội dung đa phương tiện. Khóa bộ nhớ đệm chú thích khung hình
bao gồm các byte JPEG, prompt, dấu thời gian và mô hình có hiệu lực; chỉ các
chú thích thành công mới được lưu vào bộ nhớ đệm. Các mục bộ nhớ đệm giữ lại mô hình producer thực tế đã thành công,
bao gồm cả mô hình dự phòng; bridge báo cáo `mixed` khi các khung hình khác nhau
được tạo bởi các mô hình khác nhau. Một lần truy cập trúng bộ nhớ đệm sẽ tái sử dụng danh tính producer đó
thay vì gắn nhãn lại theo kế hoạch định tuyến được yêu cầu. Bộ nhớ đệm kết quả cho toàn bộ video
được tạo khóa dựa trên mọi đầu vào làm thay đổi đầu ra — prompt, mô hình có hiệu lực,
chính sách lấy mẫu, số lượng khung hình, chế độ phân tích ngữ nghĩa, fingerprint SHA-256
của gợi ý trọng tâm đã chuẩn hóa, cửa sổ trọng tâm, `transcript`,
`audioTranscript` và cờ contact-sheet — vì vậy, thay đổi bất kỳ
chiều nào trong số đó đều dẫn đến trượt bộ nhớ đệm, không bao giờ tái sử dụng dữ liệu cũ. Phiên bản chính sách
khử trùng lặp trực quan, ngưỡng và số lượng khung hình ứng viên có giới hạn cũng được nêu rõ trong
khóa và metadata của bộ nhớ đệm kết quả; do đó, thay đổi chính sách không thể tái sử dụng
mô tả toàn bộ video đã cũ. Metadata v4 của bộ nhớ đệm kết quả giữ lại chế độ và
fingerprint, không bao giờ giữ tác vụ thô của người dùng. Metadata guardrail báo cáo cả
chế độ phân tích được yêu cầu lẫn chế độ có hiệu lực; chế độ `focused` được yêu cầu nhưng không có
văn bản người dùng khả dụng sẽ được báo cáo là có hiệu lực `full`.

Guardrail trích xuất mọi phần video được hỗ trợ nhưng không mô tả quá
`modalityBridgeVideoMaxVideos`. Với một target đã được chứng minh có
`supportsVideo === false`, các video bị lỗi và vượt giới hạn trở thành các marker văn bản an toàn tường minh
để không còn video thô nào tồn tại. Khi chưa xác định được capability, các phần đó
vẫn giữ carrier video; mọi transcript dự phòng đều tuân theo quy trình chuyển đổi văn bản có giới hạn
ở trên. Các target có `supportsVideo === true` bỏ qua bridge.
Tín hiệu hủy yêu cầu của client được truyền qua quá trình tải xuống, hàng đợi broker,
các subprocess và các lệnh gọi tạo chú thích; thao tác hủy sẽ dừng giữa các video và không bao giờ fail-open
sang nội dung đa phương tiện thô.

Các thiết lập runtime được lưu trong DB và xác thực bằng Zod:

| Khóa                                | Mặc định    | Phạm vi / hành vi                                                                                                 |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime tùy chọn, yêu cầu chủ động bật                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` giữ nguyên chú thích chung; `focused` sử dụng ngữ cảnh người dùng mới nhất có giới hạn, không đáng tin cậy |
| `modalityBridgeVideoModel`          | `""`        | Kế thừa mô hình Vision Bridge                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, hoặc `segment_aware` theo tỷ lệ; khi trình phát hiện lỗi, hệ thống quay về `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                    |

Các giá trị thời gian chờ Video cũ đã được lưu và vượt quá 120 giây sẽ bị giới hạn theo
thời hạn của broker; các lần ghi cài đặt mới vượt quá giới hạn đó sẽ bị từ chối.
`GET /api/modality-bridge/video/runtime` yêu cầu vị trí loopback
đáng tin cậy đã được đóng dấu trước khi xác thực hoặc thăm dò runtime, sau đó yêu cầu xác thực
quản trị. API này chỉ trả về `available`, các phiên bản FFmpeg/ffprobe đã được làm sạch và một
lý do cố định khi runtime không khả dụng. Endpoint trích xuất nội bộ không phải là
API tải lên công khai: khi hàng đợi bão hòa, API trả về `503` cùng `Retry-After`; khi bên gọi
ngắt kết nối, API trả về `499`; và khi đạt thời hạn broker cố định, API trả về `504`. Các phản hồi đã chuyển đổi thêm
`video->text;model=<visionModel>;parts=<videos>` vào header trung tâm
`x-omniroute-modality-bridge` mà không xóa các phân đoạn Vision hoặc Audio.

### Bộ che PII (`piiMasker.ts`)

Chạy trên **cả hai** giai đoạn.

- **`preCall`** sao chép payload, duyệt qua `system`, `messages`, `input` và
  `prompt` (bao gồm cả các mục chuỗi thuần túy), rồi áp dụng `processPII()` (từ
  `@/shared/utils/inputSanitizer`) cho các trường chuỗi `content`/`text`. Khi
  `PII_REDACTION_ENABLED=true`, PII được phát hiện sẽ bị biên tập trong payload
  gửi đi. Việc này độc lập với `INPUT_SANITIZER_MODE` (biến này chỉ kiểm soát
  chính sách chèn prompt). Khi tính năng biên tập bị tắt, lệnh gọi sẽ ghi lại số lượng
  phát hiện mà không ghi lại nội dung.
- **`postCall`** sao chép sâu phản hồi, chạy `sanitizePIIResponse()` cùng
  bộ che theo cấu trúc Responses API (`maskResponsesOutput` — bao phủ
  `output_text` và `output[].content[].text`). Nếu xảy ra bất kỳ thao tác biên tập nào,
  phản hồi đã sửa đổi sẽ thay thế phản hồi gốc.

Guardrail không bao giờ chặn; nó chỉ chú thích (`meta.detections`,
`meta.redacted`) hoặc ghi lại nội dung.

### Chèn prompt (`promptInjection.ts`)

Phát hiện các cấu trúc đối kháng trong nội dung do người dùng cung cấp và thực thi
chính sách đã cấu hình. Hành vi được điều khiển bởi các biến môi trường và tùy chọn
hàm khởi tạo:

| Cài đặt     | Biến môi trường                                                                                           | Mặc định | Tác dụng                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Đã bật      | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`   | Khi là `false`, guardrail sẽ thoát sớm.                                                                                                                                                                |
| Chế độ      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`   | Chính sách chèn: `block`, `warn` hoặc `log`. (`redact` được chấp nhận để tương thích ngược nhưng **không** loại bỏ văn bản chèn; việc ghi lại PII trong yêu cầu do `PII_REDACTION_ENABLED` kiểm soát.) |
| Ngưỡng chặn | tùy chọn `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (bí danh `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Mức độ nghiêm trọng tối thiểu cần thiết để chặn. Theo mặc định, mức Trung bình chỉ được quan sát.                                                                                                      |

**Thứ tự ưu tiên chế độ** (`getMode`): `options.mode` của bên gọi →
ghi đè bằng cờ tính năng DB `INJECTION_GUARD_MODE` (Bảng điều khiển → Cài đặt →
Cờ tính năng) → biến môi trường `INJECTION_GUARD_MODE` → biến môi trường `INPUT_SANITIZER_MODE` →
`warn`. Do đó, giá trị ghi đè từ bảng điều khiển được ưu tiên hơn các biến môi trường, vì vậy giao diện
Cờ tính năng kiểm soát trực tiếp guard đang chạy (không cần khởi động lại). Việc đọc DB có cơ chế an toàn:
nếu xảy ra lỗi, guard sẽ quay về hành vi dựa trên biến môi trường; và khi không
đặt giá trị ghi đè, hành vi sẽ giống hệt cơ chế phân giải chỉ dùng biến môi trường.

Các nguồn phát hiện:

1. `sanitizeRequest()` từ `@/shared/utils/inputSanitizer` (tập hợp trình phát hiện dùng chung
   được sử dụng ở những nơi khác trong pipeline).
2. `DEFAULT_GUARD_PATTERNS` tích hợp sẵn (hiện gồm `system_override_inline` và
   `markdown_system_block`, cả hai đều có mức độ nghiêm trọng `high`).
3. `customPatterns` tùy chọn được truyền qua các tùy chọn hàm khởi tạo (chuỗi, biểu thức chính quy
   hoặc các bản ghi `{ name, pattern, severity }`).

Khi `mode === "block"` **và** có ít nhất một phát hiện đạt ngưỡng mức độ
nghiêm trọng, `preCall` trả về `{ block: true, message: "Request rejected:
suspicious content detected" }`. Trong các chế độ `warn`/`log`, guardrail ghi log
nhưng vẫn cho phép lời gọi. Hàm trợ giúp dùng chung `evaluatePromptInjection()` cũng được xuất
cho những nơi gọi cần đánh giá prompt mà không phải thông qua registry.

**Giới hạn quét (v3.8.20):** bộ phát hiện chỉ kiểm tra **16 KB đầu tiên** của
văn bản prompt đã nối — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) trong
`src/shared/utils/inputSanitizer.ts`. Cả `detectInjection()` và
`evaluatePromptInjection()` đều gọi `slice(0, MAX_INJECTION_SCAN_BYTES)` trước khi chạy
vòng lặp mẫu. Các chỉ thị chèn mã thường nằm gần đầu dữ liệu đầu vào, vì vậy điều này
giới hạn mức sử dụng CPU/GC của regex đối với các payload có kích thước hàng trăm KB mà không làm suy yếu khả năng phát hiện (xem
#3932, #4041).

### Trình che thông tin xác thực (`credentialMasker.ts`)

Chạy ở **cả hai** giai đoạn và đứng cuối trong chuỗi mặc định (độ ưu tiên `95`). Biên tập
các mẫu khóa API / token bí mật phổ biến khỏi payload gửi đi (nội dung
tin nhắn, đối số của lời gọi công cụ, kết quả công cụ) **và** phản hồi của nhà cung cấp, để thông tin
xác thực được dán vào prompt (hoặc được kết quả công cụ trả lại) không bị rò rỉ
tới nhà cung cấp ở thượng nguồn hoặc trở lại máy khách.

- **Chỉ bật khi chủ động chọn**, theo cùng quy ước với việc biên tập PII (liên quan đến Quy tắc Cứng #20):
  bị tắt trừ khi `settings.credentialRedactionEnabled === true` **hoặc**
  `CREDENTIAL_REDACTION_ENABLED=true`. Khi bị tắt, guardrail không thực hiện thao tác nào —
  không bao giờ chặn và không bao giờ ghi lại nội dung.
- `redactCredentials()` duyệt toàn bộ cây payload/phản hồi (`walkValue()`,
  an toàn trước ô nhiễm prototype, an toàn với chu trình nhờ `WeakSet`) và thay thế các kết quả khớp bằng
  phần giữ chỗ `[REDACTED:<type>]`, chỉ sao chép những nhánh thực sự
  thay đổi.
- `CREDENTIAL_PATTERNS` bao phủ các khóa của nhà cung cấp LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), khóa thanh toán (Stripe, Square), khóa
  đám mây (khóa truy cập AWS, Twilio, SendGrid, Mailgun), khóa riêng tư / JWT,
  chuỗi kết nối chứa thông tin xác thực (`mongodb://user:pass@...`, v.v.) và
  một mẫu chung cho giá trị header `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Các khóa có dạng header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) được biên tập theo cấu trúc (chỉ giá trị; tiền tố scheme như
  `Bearer `/`Basic ` được giữ nguyên) thay vì thông qua regex văn bản chung.
- Guardrail không bao giờ chặn; nó chỉ ghi lại nội dung (`modifiedPayload` /
  `modifiedResponse`) và thêm chú thích (`meta.credentialsRedacted`, `meta.count`).

Biện pháp bảo vệ chống hồi quy: `tests/unit/credential-masker-guardrail.test.ts`.

## Hợp đồng cơ sở (`base.ts`)

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
  block?: boolean; // true sẽ dừng chuỗi ngay lập tức
  message?: string; // được hiển thị khi chặn
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // được preCall trả về để ghi lại yêu cầu
  modifiedResponse?: TValue; // được postCall trả về để ghi lại phản hồi
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

Một guardrail biểu thị "không thay đổi" bằng cách trả về `void`, `{}`, hoặc
`{ block: false }`. Việc trả về `modifiedPayload`/`modifiedResponse` sẽ thay thế
giá trị đang truyền qua chuỗi cho các guardrail phía sau.
`signal?: AbortSignal` truyền vòng đời của bên gọi vào các guardrail. Việc hủy yêu cầu là ngoại lệ fail-open có chủ đích: các cầu nối phương tiện sẽ dừng công việc và dọn dẹp mà không khôi phục dữ liệu phương tiện thô cho một đích được biết là không hỗ trợ dữ liệu đó.

## Registry (`registry.ts`)

Singleton `guardrailRegistry` cung cấp:

- `register(guardrail)` — thêm một guardrail (hoặc thay thế theo tên đã chuẩn hóa) và
  sắp xếp lại theo `priority` tăng dần.
- `clear()` / `list()` — các tiện ích quản trị.
- `runPreCallHooks(payload, context)` — lặp qua các guardrail đang hoạt động, truyền
  payload qua `modifiedPayload`, và dừng tại `block: true` đầu tiên.
- `runPostCallHooks(response, context)` — luồng tương tự ở phía phản hồi.
- `resetGuardrailsForTests({ registerDefaults })` — xóa trạng thái và tùy chọn
  đăng ký lại các giá trị mặc định để cô lập kiểm thử một cách sạch sẽ.

Cả hai trình chạy đều trả về `{ blocked, payload|response, results, guardrail?, message? }`,
trong đó `results` là một mảng các bản ghi `GuardrailExecutionResult` bao gồm
các trường `blocked`, `skipped`, `modified`, `error`, và `meta` cho từng guardrail,
hữu ích cho việc truy vết.

### Vô hiệu hóa guardrail theo từng yêu cầu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` tổng hợp một
danh sách tên guardrail đã loại bỏ trùng lặp cần được bỏ qua đối với yêu cầu
hiện tại. Các nguồn (tất cả đều không bắt buộc và đều được hợp nhất):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` trong phần thân yêu cầu (cấp cao nhất)
- `metadata.disabledGuardrails` trong phần thân yêu cầu
- Header `x-omniroute-disabled-guardrails` (hoặc dạng cũ
  `x-disabled-guardrails`)

Giá trị có thể là mảng chuỗi hoặc chuỗi phân tách bằng dấu phẩy; tên được
chuẩn hóa thành kebab-case viết thường (`pii_masker` → `pii-masker`). Kết quả
được truyền qua `context.disabledGuardrails` tới registry, nơi sẽ bỏ qua
các guardrail khớp tên (`skipped: true` trong `results`).

## Thứ tự thực thi

Đối với mỗi yêu cầu đi qua `src/sse/handlers/chat.ts` và
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` tạo danh sách bỏ qua từ khóa API, phần thân
   và các header.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` chạy các guardrail theo thứ tự
   ưu tiên tăng dần:
   - Các guardrail bị vô hiệu hóa được ghi nhận là `skipped`.
   - `preCall` của mỗi guardrail có thể ghi lại payload thông qua `modifiedPayload`.
   - Guardrail đầu tiên có `block: true` sẽ dừng ngay chuỗi xử lý và handler trả về
     phản hồi từ chối của guardrail.
3. Payload (có thể đã được ghi lại) được chuyển vào quá trình định tuyến kết hợp
   và gửi đến upstream.
4. Sau khi phản hồi được tập hợp, `guardrailRegistry.runPostCallHooks(...)`
   chạy cùng chuỗi đó trên phản hồi. `block: true` tại đây sẽ loại bỏ phản hồi
   từ upstream.

Các guardrail phát sinh ngoại lệ được ghi nhận với `error: <message>` và được ghi log qua
`logger.warn`, nhưng chuỗi vẫn tiếp tục — theo thiết kế fail-open.

## Cấu hình

Các biến môi trường được những guardrail tích hợp sẵn đọc:

| Biến                                  | Được dùng bởi             | Tác dụng                                                                                                        |
| ------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Đặt thành `false` để vô hiệu hóa hoàn toàn việc phát hiện.                                                      |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Chính sách đối với injection: `warn`, `block` hoặc `log`. Giá trị cũ `redact` không ghi lại văn bản injection.  |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Chế độ cho guard chống injection; đồng thời là cờ tính năng trong DB **ghi đè** các biến môi trường (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Mức độ nghiêm trọng tối thiểu mà `MODE=block` sẽ từ chối: `high` (mặc định), `medium` hoặc `low`.               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Bí danh cũ của `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Khi là `true`, PII trong yêu cầu được che đi (độc lập với chế độ injection).                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Kiểm soát hành vi che dữ liệu ở phía phản hồi.                                                                  |

Các guardrail Modality Bridge đọc cấu hình thời gian chạy từ kho cài đặt được
DB hỗ trợ (`getSettings()`), không phải từ các biến môi trường. Các khóa chính
của Vision là `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` và
`modalityBridgeCacheMaxEntries`. Các khóa cũ
`visionBridge*` chỉ được chấp nhận làm phương án đọc dự phòng trong một chu kỳ
như đã ghi trong tài liệu; các thao tác ghi từ dashboard sử dụng những khóa
chính. Các giá trị mặc định và trình phân giải dự phòng nằm trong
`src/shared/constants/modalityBridgeDefaults.ts`, còn các hằng số cũ được giữ
lại trong `src/shared/constants/visionBridgeDefaults.ts`.

Audio sử dụng `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` và `modalityBridgeAudioMaxClips`, cùng với các cài
đặt `modalityBridgeCache*` dùng chung. Audio không có cơ chế dự phòng bằng khóa
cũ vì các khóa này được giới thiệu cùng với schema Modality Bridge.

Video sử dụng `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` và
`modalityBridgeVideoTimeout`, cùng với các cài đặt `modalityBridgeCache*` dùng
chung. Tính năng này mặc định bị vô hiệu hóa vì FFmpeg/ffprobe là các dependency
vận hành không bắt buộc, đồng thời việc tạo chú thích cho khung hình làm tăng độ
trễ và chi phí mô hình.

## Guardrail tùy chỉnh

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

Các bước:

1. Tạo `src/lib/guardrails/myGuardrail.ts` mở rộng `BaseGuardrail`.
2. Triển khai `preCall` và/hoặc `postCall`.
3. Đăng ký ngay khi import (thêm từ `registerDefaultGuardrails`) hoặc
   gọi `guardrailRegistry.register(...)` trong thời gian chạy — registry sẽ thay thế
   mọi guardrail trước đó có cùng tên đã chuẩn hóa.
4. Thêm các bài kiểm thử trong `tests/unit/` (các ví dụ hiện có:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Kiểm thử

Sử dụng `resetGuardrailsForTests()` giữa các bài kiểm thử để bắt đầu từ một trạng thái đã biết.
Truyền `{ registerDefaults: false }` để bắt đầu với một registry trống và
chỉ đăng ký các guardrail đang được kiểm thử. Vision Bridge hỗ trợ chèn phần phụ thuộc
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge cung cấp các điểm nối
tương đương cho phần cài đặt, khả năng, lựa chọn mô hình STT, kiểm tra thông tin xác thực
và phiên âm. Do đó, các bài kiểm thử có thể thực thi cả hai luồng mà không cần truy cập
cơ sở dữ liệu hoặc mạng.

## Xem thêm

- `src/lib/guardrails/` — phần triển khai
- `src/shared/utils/inputSanitizer.ts` — bộ phát hiện dùng chung hỗ trợ
  chống chèn prompt và che thông tin nhận dạng cá nhân (PII)
- `src/shared/constants/visionBridgeDefaults.ts` — các giá trị mặc định của Vision Bridge và
  danh sách mô hình bắt buộc sử dụng bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — các giá trị mặc định khi chạy dùng chung cho Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — lớp độc lập (circuit breaker, thời gian chờ)
- `docs/reference/ENVIRONMENT.md` — tài liệu tham khảo đầy đủ về biến môi trường

## Phạm vi route và red-team của guard chống chèn (Giai đoạn 8 · Khối D)

Guard chống chèn (`createInjectionGuard` / `withInjectionGuard`) bao phủ tất cả các route
chấp nhận prompt của người dùng. Guard tuân theo `INJECTION_GUARD_MODE` (mặc định `warn` = chỉ ghi log;
`block` = trả về HTTP 400 `SECURITY_001`).

| Loại              | Route                                                                                                                                                | Chế độ mặc định |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Văn bản (hiện có) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Sinh nội dung     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Dữ liệu           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

Quá trình trích xuất văn bản (`extractMessageContents`) bao phủ `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hằng đêm, `nightly-llm-security.yml`):** promptfoo xác thực rằng mỗi route đều chặn
tập dữ liệu OWASP-LLM khi `INJECTION_GUARD_MODE=block`; garak chạy các phép thăm dò (bỏ qua khi không có secret).
`moderations` được đưa vào để đảm bảo tính nhất quán — các đơn vị vận hành ở chế độ chặn có thể miễn trừ route này thông qua
`resolveDisabledGuardrails`.

Quy trình hằng đêm (`.github/workflows/nightly-llm-security.yml`, cron + kích hoạt thủ công)
có hai job:

- **`promptfoo-guard` (bắt buộc)** — chạy `promptfoo eval -c promptfooconfig.yaml`
  với `INJECTION_GUARD_MODE=block`. Mỗi trường hợp đối kháng (ví dụ: "bỏ qua tất cả
  chỉ dẫn trước đó…", các kiểu jailbreak dạng DAN) xác nhận rằng phản hồi chứa
  `error.code === "SECURITY_001"`, tức là guard thực sự đã từ chối yêu cầu.
- **`garak` (tham khảo)** — chạy garak `--probes promptinject,dan,leakreplay`
  với một phiên bản OmniRoute cục bộ (`http://localhost:20128/v1`). Job này phụ thuộc vào
  secret của nhà cung cấp (`PROMPTFOO_PROVIDER_KEY`); sẽ bỏ qua một cách an toàn khi không có và được thêm hậu tố
  `|| true`, vì vậy job chỉ báo cáo mà không làm CI thất bại.

Phạm vi bao phủ của helper guard (`createInjectionGuard` / `withInjectionGuard`)
trải rộng trên mọi route `/v1` có chứa prompt; văn bản prompt được lấy từ
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` bởi
`extractMessageContents()` trong `src/shared/utils/inputSanitizer.ts`.
