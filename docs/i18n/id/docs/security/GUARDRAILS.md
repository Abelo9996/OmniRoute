# Guardrails (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sumber kebenaran:** `src/lib/guardrails/`
> **Terakhir diperbarui:** 2026-08-29 — v3.8.51 (provenans transkrip Video Bridge dideklarasikan oleh pemanggil,
> belum diverifikasi oleh server — diperjelas sesuai #11661)

Guardrail memberlakukan keamanan, kebijakan, dan transformasi konten pada batas
antara OmniRoute dan penyedia upstream. Setiap guardrail dapat memeriksa (dan
secara opsional menolak, mentransformasi, atau menganotasi) payload permintaan (`preCall`) dan
respons upstream (`postCall`).

Sistem ini bersifat **fail-open**: jika guardrail melemparkan error saat dijalankan, registry
mencatat error tersebut dan melanjutkan ke guardrail berikutnya alih-alih menggagalkan
permintaan. Pemblokiran merupakan keputusan eksplisit (`block: true`), bukan terjadi secara tidak sengaja.

## Guardrail Bawaan

Registry secara otomatis memuat enam guardrail berdasarkan urutan prioritas saat diimpor
(lihat `registry.ts` → `registerDefaultGuardrails()`):

| Prioritas | Nama                | Tahap          | File                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nomor prioritas yang lebih rendah dijalankan **lebih dahulu**.

### Vision Bridge (`visionBridge.ts`) — Jembatan Modalitas PR-1

Mencegat permintaan yang memuat gambar dan ditujukan ke **model non-vision**, lalu
mengalihkan seluruh permintaan ke model berkemampuan vision atau mengganti bagian
gambar dengan deskripsi teks yang dihasilkan oleh model vision yang dapat dikonfigurasi
sebelum panggilan upstream. Hal ini memungkinkan penyedia khusus teks menangani
payload multimodal secara transparan.

Alur:

1. Lewati jika model target sudah mendukung vision (kecuali jika model tersebut
   tercantum dalam daftar bridge paksa `isVisionBridgeForcedModel`).
2. Ekstrak bagian gambar melalui `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), yang mendelegasikan ke **detektor media terpadu**
   `detectMediaParts()` di `open-sse/utils/mediaParts.ts` — satu-satunya sumber
   kebenaran yang digunakan bersama dengan filter kompatibilitas combo.
   Ekstraksi dibatasi oleh daftar yang diizinkan pada bagian tingkat teratas
   dengan bentuk yang dapat disisipkan kembali oleh `replaceImageParts`
   (kontrak ekstrak↔ganti): OpenAI `image_url`, `source.type:"base64"` base64
   Anthropic, `source.type:"url"` URL Anthropic, dan Responses API
   `input_image`. Temuan bertingkat dan bentuk yang hanya berupa indikator
   merupakan material filter combo dan tidak pernah diekstrak.
   Lewati jika tidak ada yang ditemukan.
3. Selesaikan konfigurasi runtime melalui `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): key pengaturan
   `modalityBridge*` yang baru diprioritaskan; key `visionBridge*` lama tetap
   menjadi **fallback untuk satu siklus** (jendela rollback). Lewati sebelum
   traversal media apa pun ketika bridge dinonaktifkan.
4. Pemilih mode (`modalityBridgeVisionMode`, lihat tabel di bawah) menentukan
   antara pengalihan dan deskripsi. Pengalihan mengembalikan `modifiedPayload`
   dengan hanya `model` yang diganti, ditambah metadata
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Jalur deskripsi: batasi jumlah gambar pada `maxImages`, susun prompt yang
   mempertimbangkan tugas, periksa cache deskripsi, panggil model vision
   **secara paralel** (`Promise.allSettled`), dan sisipkan bagian teks
   `[Image N]: <description>` sebagai penggantinya. Deskripsi yang gagal
   menghasilkan `null` dan bagian gambar asli **dipertahankan** (#4012) —
   kecuali pada jalur deskripsi combo ketika semua deskripsi gagal; dalam kasus
   tersebut, upstream non-vision yang telah dikonfirmasi menerima stub
   `(unavailable — no vision-capable provider connected)` sebagai gantinya
   (#8430).
6. Kembalikan `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Pemilih mode (`modalityBridgeVisionMode`)

| Mode       | Default | Perilaku                                                                                                                                                                                                                                                                                                 |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Heuristik lama, tanpa perubahan (#6640/#7204): model non-combo/`auto/` dialihkan ke model vision terbaik, kecuali jika model asli sudah memiliki kredensial yang dapat digunakan (maka gunakan deskripsi); target combo selalu menggunakan deskripsi.                                                    |
| `describe` |         | Selalu gunakan deskripsi — blok pengalihan dilewati sepenuhnya; model yang dipilih pengguna selalu memberikan jawaban.                                                                                                                                                                                   |
| `reroute`  |         | Paksa pengalihan: pemeriksaan untuk mempertahankan model berkredensial dilewati. Pemeriksaan kredensial **target** pengalihan tetap berlaku — ketika tidak ada target vision yang dapat digunakan, permintaan beralih ke deskripsi agar gambar mentah tidak pernah mencapai backend khusus teks (#8430). |

Mode paksa melakukan short-circuit **sebelum** heuristik otomatis dijalankan;
perilaku `auto` identik secara byte dengan guardrail sebelum PR-1.

#### Cakupan API key (`visionBridgeKeyScope.ts`)

Ketika API key pemanggil membatasi `allowedConnections`, pool kuota
(`allowedQuotas`), atau model (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), bridge hanya
memilih model pengalihan dan deskripsi yang boleh digunakan oleh key tersebut,
pada koneksi yang boleh digunakan oleh key tersebut. Panggilan deskripsi
kemudian selalu melewati self-loop OmniRoute dengan header
`x-omniroute-self-loop-key-id`, sehingga permintaan chat penerima menerapkan
kembali kebijakan koneksi dan model milik key tersebut. `enforceApiKeyPolicy()`
hanya mematuhi header tersebut jika disertai bearer self-loop, sehingga header
itu hanya dapat mempersempit akses, dan ID yang tidak dapat di-resolve akan
ditolak.

Jika tidak ada model vision yang diizinkan untuk key tersebut, jalur deskripsi
tidak mengambil tindakan dan permintaan diteruskan tanpa perubahan, dengan
perilaku fail-open yang sama seperti guardrail yang dinonaktifkan (metadata
`{ skipped: true, reason: "no_permitted_vision_model" }`). Permintaan tanpa key,
dan key tanpa pembatasan ini, berperilaku persis seperti sebelumnya.

#### Prompt deskripsi yang mempertimbangkan tugas (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) menambahkan
teks dari **pesan pengguna terakhir** (dipotong hingga 500 karakter) ke prompt
deskripsi dasar, mengarahkan deskripsi agar sesuai dengan apa yang sebenarnya
diminta pengguna (pola codex-vision-proxy), dan meminta model vision untuk
mentranskripsikan teks yang terlihat. Jika flag dinonaktifkan — atau tidak ada
teks pengguna — prompt dasar digunakan tanpa perubahan.

Permintaan kompatibel OpenAI milik self-loop deskripsi itu sendiri
(`callVisionModelSingle()` dalam `visionBridgeHelpers.ts`) selalu meminta
`image_url.detail: "high"` — tanpa syarat, untuk setiap pemanggil/penyedia, dan
tidak bergantung pada sinyal apa pun dari klien. Sampling dengan detail rendah
menurunkan akurasi OCR untuk tugas transkripsi teks yang secara khusus diminta
oleh prompt ini, sehingga panggilan deskripsi itu sendiri selalu meminta detail
tinggi, terlepas dari tingkat detail yang digunakan oleh permintaan masuk asli.
Ini hanya memengaruhi body permintaan deskripsi internal; hal ini tidak mengubah
cara OmniRoute meneruskan `image_url.detail` milik pemanggil pada permintaan
utama — default tersebut diterapkan secara terpisah, dan hanya untuk klien
OpenCode yang terdeteksi, dalam `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Cabang format wire Anthropic
dari self-loop deskripsi tidak memiliki field `detail` dan tidak terpengaruh
oleh default mana pun.

#### Batas output deskripsi (`modalityBridgeVisionMaxChars`)

| Kunci                          | Default | Rentang            |
| ------------------------------ | ------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`     | `0` atau 100–50000 |

`0` (default) berarti **tanpa batas** — deskripsi yang dikembalikan oleh
`callVisionModel()` diteruskan tanpa perubahan, sehingga mempertahankan perilaku
yang ada. Nilai apa pun dalam rentang 100–50000 akan memotong deskripsi dengan
sufiks `…` sebelum disisipkan kembali sebagai `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` dalam `src/lib/guardrails/visionBridge.ts`).
Naikkan nilai ini untuk tugas OCR yang kaya detail ketika model downstream
memerlukan transkripsi lengkap; turunkan untuk membatasi penggunaan token pada
model vision yang terlalu panjang lebar. Field dashboard berada di panel
Advanced pada tab Vision (`modality-bridge-max-chars` dalam
`ModalityBridgeVisionTab.tsx`) dan menaikkan nilai antara 1 dan 99 ke batas
minimum 100, sementara nilai `0` yang diberikan secara eksplisit dibiarkan
tidak berubah — `0` merupakan nilai Zod yang valid secara mandiri
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), bukan sekadar
default "belum diatur".

#### Cache deskripsi (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL dalam memori untuk output deskripsi, yang digunakan bersama di
seluruh proses. Kunci = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
dengan framing berbasis prefiks panjang (tanpa tabrakan batas field). Komponen
model adalah model bridge yang **dikonfigurasi**, bukan model yang benar-benar
memberikan jawaban — `callVisionModel` dapat melakukan fallback secara internal,
dan penggunaan kunci per percobaan akan memecah cache. Deskripsi yang gagal
tidak pernah disimpan dalam cache. Pengaturan:

| Kunci                           | Default | Rentang |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalisasi gambar jarak jauh (deskripsi self-loop/pengambilan base64)

Ketika bridge mengambil sendiri gambar **jarak jauh** — yaitu self-call
deskripsi Anthropic dan konversi base64 format wire Claude
(`ensureBase64ImagesForClaudeWire`), keduanya melalui
`fetchRemoteImageAsDataUri()` dalam `visionBridgeHelpers.ts` — URI data yang
dihasilkan diteruskan melalui `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sebelum disematkan dalam permintaan model
vision. Gambar berukuran terlalu besar diperkecil hingga **sisi panjang 2048px**
(sesuai dengan batas pengubahan ukuran yang sudah diterapkan OpenAI/Anthropic
di sisi server), sehingga mengurangi jumlah byte unggahan/latensi tanpa
mengubah apa yang dilihat oleh model vision. Pengubahan ukuran menggunakan
`sharp`, yang dimuat melalui impor dinamis: pada platform tempat biner native
gagal dimuat, `normalizeDataUri()` **tidak pernah melempar error** — fungsi
tersebut beralih ke penerusan byte asli tanpa perubahan, sehingga jalur
deskripsi/konversi base64 selalu tetap berfungsi. Byte non-gambar (hasil
pengambilan yang tidak mengembalikan gambar yang dapat didekodekan) juga
diteruskan tanpa perubahan. Normalisasi ini dibatasi pada gambar yang diambil
bridge untuk self-call-nya sendiri — normalisasi tidak pernah diterapkan pada
payload passthrough mentah milik pemanggil, sesuai dengan prinsip mutasi khusus
opt-in (Aturan Tegas #20).

#### Skema pengaturan + migrasi

Kunci `modalityBridge*` baru divalidasi oleh Zod dalam `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, serta grup
`modalityBridgeAudio*` yang digunakan oleh Audio Bridge. Migrasi
`141_modality_bridge_settings.sql` menyalin nilai lama `visionBridge*` yang ada
ke kunci baru yang sesuai (idempoten, tidak pernah menimpa nilai
`modalityBridge*` yang ditetapkan operator); kunci lama tetap diterima sebagai
fallback pembacaan selama satu siklus rilis.

#### Header transparansi + statistik

Respons yang ditransformasi oleh deskripsi membawa
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(dibuat oleh `buildModalityBridgeHeader()` dalam
`modalityBridge/bridgeStats.ts`, ditambahkan oleh
`withModalityBridgeHeader()` dalam `src/sse/handlers/chatHelpers.ts`).
Permintaan yang dialihkan **tidak** mendapatkan header — payload tidak diubah
dan pergantian model sudah terlihat dalam field `model` pada body respons.

`GET /api/modality-bridge/stats` (autentikasi manajemen, tingkat yang sama dengan
`GET /api/settings`) mengembalikan penghitung dalam memori per modalitas
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` untuk `vision`, `audio`, dan
`video`. `averageLatencyMs` menggunakan `latencySamples`, bukan semua percobaan,
sebagai penyebutnya; operasi tanpa pengukuran waktu tidak membuat sampel nol
milidetik. `bridged` tetap menjadi alias yang kompatibel dengan versi sebelumnya
untuk konversi yang berhasil; percobaan yang gagal tidak menambah nilainya.
Penghitung direset saat proses dimulai ulang sesuai rancangan
(telemetri, bukan akuntansi).

#### Konfigurasi dasbor

Halaman dasbor khusus berada di
`/dashboard/settings/modality-bridge`. Tab `Vision`, `Audio`, dan `Video` yang
dapat diakses melalui URL mempertahankan parameter kueri saat mengganti nilai
`tab`. Tab Vision menyediakan pengaktifan, mode, pemilihan model (termasuk
default otomatis), prompt berbasis tugas, batas lanjutan untuk waktu tunggu,
gambar, panjang deskripsi, dan cache, penghitung runtime, serta permintaan sampel
yang dilindungi. Tab Audio juga aktif: tab ini menyediakan pengaktifan, pemilih
model khusus STT dengan opsi Auto, batas waktu tunggu/durasi maksimum klip,
penghitung audio, dan pengujian sampel `input_audio`. Tab Video berfungsi: tab ini
melaporkan status runtime FFmpeg/ffprobe — salah satu dari empat status UI
eksplisit (`unknown` saat pemeriksaan sedang berlangsung atau tidak dapat
diselesaikan, `restricted` pada host dasbor non-loopback ketika pemeriksaan
dilewati di sisi klien, `unavailable` setelah diperiksa dan dipastikan tidak
tersedia, atau `available` beserta versi FFmpeg/ffprobe) — mempertahankan batas
pengaktifan/model/frame/video/waktu tunggu, memfilter pemilih model agar hanya
menampilkan model yang mendukung visi, dan menyediakan penghitung video.

Kartu Vision Bridge sebelumnya di bawah pengaturan AI kini menjadi tautan
kompatibilitas ke halaman baru; kartu tersebut tidak lagi memiliki salinan kedua
formulir. Media Providers juga menautkan alur kerja Image-to-Text dan
Speech-to-Text ke tab Modality Bridge yang sesuai tanpa menghapus playground
Speech-to-Text yang sudah ada.

**Bypass penerimaan self-loop:** ketika panggilan deskripsi dirutekan melalui
self-loop `/v1` milik OmniRoute sendiri (model penyedia nonstandar),
subpermintaan mengirim `x-omniroute-admission-bypass: internal` dan
diautentikasi dengan kredensial self-loop yang telah di-resolve — sentinel lokal
`sk_omniroute` dalam mode lokal, atau kunci env `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` yang dikonfigurasi operator (#1350), sehingga deployment dengan
`REQUIRE_API_KEY=true` tetap dapat menjalankan panggilan deskripsi. Bypass hanya
diterima untuk kredensial yang persis sama tersebut, sehingga klien eksternal
tidak dapat menggunakan header itu untuk melewati penerimaan.

Default lama berada di `src/shared/constants/visionBridgeDefaults.ts`; default
baru untuk mode/berbasis tugas/cache dan resolver pengaturan berada di
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail menyediakan opsi
konstruktor `deps` sehingga pengujian dapat menyuntikkan implementasi palsu
`getSettings` dan `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Mencegat permintaan chat yang memuat audio sebelum mencapai target yang tidak
diketahui dapat menerima input audio. Fitur ini tidak pernah merutekan ulang
permintaan chat: bagian audio ditranskripsikan melalui endpoint multipart
kompatibel OpenAI yang sudah ada, lalu model chat yang dipilih melanjutkan
pemrosesan dengan transkrip teks.

Alur:

1. Resolve `supportsAudio` melalui `getResolvedModelCapabilities()`. Metadata
   registry penyedia yang eksplisit diprioritaskan, diikuti metadata model
   statis, lalu `modalities_input` yang telah disinkronkan. Daftar input yang
   dideklarasikan tanpa `audio` bernilai `false`; jika tidak ada bukti
   kapabilitas, nilainya tetap `null`. Baik `false` maupun `null` mengaktifkan
   bridge konservatif, sedangkan `true` melewatinya.
2. Resolve pengaturan `modalityBridgeAudio*` dan ekstrak bagian audio tingkat
   atas yang dapat disisipkan dari setiap pesan melalui detektor bersama
   `detectMediaParts()`. Bentuk wire yang didukung adalah `input_audio` OpenAI,
   `audio_url`, dan `source.media_type: "audio/*"`. Audio bertingkat terdeteksi
   untuk perutean, tetapi tidak dihapus oleh jalur penyisipan. Jumlah pekerjaan
   dibatasi oleh `modalityBridgeAudioMaxClips`; bagian selanjutnya dibiarkan
   tanpa perubahan.
3. Gunakan `provider/model` yang dikonfigurasi, atau biarkan
   `selectAudioBridgeModel()` menelusuri `AUDIO_TRANSCRIPTION_PROVIDERS` dalam
   urutan katalog yang stabil dan memilih model pertama dengan kredensial
   penyedia aktif yang dapat digunakan.
4. `callAudioTranscription()` mengonversi audio base64/data-URI menjadi `file`
   multipart, atau mengunduh `audio_url` jarak jauh melalui perlindungan outbound
   khusus publik dengan DNS pinning dan batas 25 MB. Fungsi ini kemudian
   melakukan POST atas file dan model yang dipilih ke self-loop lokal
   `/v1/audio/transcriptions`, yang diautentikasi dengan
   `resolveSelfLoopBearer()`. Rute transkripsi yang sudah ada melakukan pencarian
   kredensial, penanganan cooldown/batas laju, dan dispatch penyedia secara
   normal.
5. Panggilan yang berhasil mengganti bagiannya dengan
   `[Audio N]: <transcript>`. Panggilan dijalankan dengan
   `Promise.allSettled`: kegagalan individual mempertahankan bagian audio asli
   tersebut (kontrak #4012). Jika semua panggilan gagal dan target terbukti
   memiliki `supportsAudio === false`, bagian-bagian tersebut menjadi
   `[Audio N]: (unavailable — no STT provider connected)` (kontrak #8430).
   Untuk target yang tidak diketahui (`null`), hasil ketika semua panggilan
   gagal tetap tidak diubah. Target yang terbukti hanya mendukung teks dan
   tidak memiliki kredensial STT yang dapat digunakan menerima stub eksplisit
   yang sama tanpa melakukan panggilan jaringan.

Transkrip yang berhasil menggunakan cache LRU/TTL Modality Bridge untuk seluruh
proses. Kuncinya menggabungkan referensi audio, label operasi stabil
`audio-transcription`, dan model STT yang dipilih; kegagalan tidak pernah
disimpan dalam cache. Percobaan audio memperbarui penghitung bersama `bridged`,
`cacheHits`, `failures`, dan `lastUsedAt`. Respons yang ditransformasikan memuat
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
permintaan yang tidak diubah tidak menerima segmen Audio Bridge.

Pengaturan runtime didukung oleh DB dan divalidasi dengan Zod:

| Kunci                         | Default | Rentang              |
| ----------------------------- | ------- | -------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                    |
| `modalityBridgeAudioModel`    | `""`    | Otomatis atau ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000          |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                 |

Cache bersama tetap dikendalikan oleh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, dan `modalityBridgeCacheMaxEntries`.

### Jembatan Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Mengintersepsi bagian video tingkat teratas dalam `messages` Chat Completions dan
`input` Responses API sebelum target yang tidak diketahui memiliki dukungan video
native dipanggil. Bentuk yang didukung adalah `input_video`, `video_url`,
`video_source`, URL HTTPS, dan URI data `data:video/*;base64,...`. Nama file biasa
dalam teks tidak dianggap sebagai video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) menangani penelusuran permintaan,
pemeriksaan kemampuan/kebijakan, agregasi per permintaan, dan payload respons.
Pekerjaan per video — pengambilan, cache hasil keseluruhan, pendeskripsian urutan
frame (yang menggabungkan transkrip audio yang dideklarasikan pemanggil), serta
metrik/pembatalan/pembersihan per upaya — disembunyikan di balik
`processVideoPart` dalam `videoBridgePipeline.ts`, yang dipanggil satu kali untuk
setiap bagian video di dalam loop `preCall`. Modul tersebut juga mendefinisikan
batas port eksplisit `VideoMediaBrokerPort` (mengambil byte dan mengekstrak frame
yang disampel), `VideoAudioTranscriptionPort` (menggabungkan transkrip audio yang
dideklarasikan pemanggil dengan teks frame yang disampel), dan
`VideoDrilldownPort` (batas persistensi penelusuran mendalam frame; belum
dihubungkan ke `processVideoPart` — saat ini hanya rute terpisah
`/api/modality-bridge/video/drilldown` yang menulis entri penelusuran mendalam).

Jalur permintaan publik `/v1` tidak pernah mengimpor atau menjalankan subproses.
Video jarak jauh diunduh dengan batas 50 MiB; video base64 inline memiliki batas
konservatif 36 MiB setelah didekode per video agar envelope
model/pesan/framing tetap berada dalam batas penerimaan permintaan JSON publik
sebesar 50 MiB. Panjang inline dan perkiraan ukuran setelah didekode diperiksa
sebelum alokasi. HTTPS diwajibkan pada URL jarak jauh awal dan setiap
pengalihan, menggunakan perlindungan keluar khusus publik yang sudah ada dengan
penyematan DNS. Byte kemudian melewati batas broker internal yang persis,
`POST /api/modality-bridge/video/extract`. Rute tersebut bersifat `LOCAL_ONLY`
dan `SPAWN_CAPABLE`, hanya menerima permintaan loopback tepercaya yang
diautentikasi per proses, dan tidak pernah menerima URL, jalur sistem file,
executable, atau daftar argumen. Pipeline batas ukuran body API dan pembaca body
inkremental milik handler secara independen menerapkan batas input broker sebesar
50 MiB. Antrean terbatasnya menjalankan satu ekstraksi pada satu waktu,
mengizinkan empat pekerjaan tertunda, dan membatasi input tertunda hingga
100 MiB.

Di dalam broker, `ffprobe` membaca file lokal privat; daftar izin format tetap
mengecualikan format playlist dan manifes. Untuk kontainer keluarga MOV yang
diizinkan, referensi data MOV eksternal tetap dinonaktifkan secara default, dan
perintah tetap tidak mengaktifkannya. Baik `ffprobe` maupun `ffmpeg` menggunakan
daftar izin protokol khusus `file`, satu thread, array argumen tetap, tanpa shell,
dan executable yang ditemukan dari `PATH`. Stream sampul gambar terlampir bukan
kandidat yang dapat diputar. Semua stream yang dapat diputar harus memenuhi
batas, dan stream default eksplisit diprioritaskan sebelum fallback deterministik
ke indeks terendah. Video dibatasi hingga 600 detik, 8.192 piksel per dimensi,
dan 33.554.432 piksel sumber. FFmpeg mengambil sampel 1–16 frame JPEG pada titik
tengah, menurunkan skala sisi panjang hingga maksimal 1.024 piksel tanpa
menaikkan skala input yang lebih kecil, dan tidak pernah menerima URL. Kebijakan
sampling default adalah `uniform`. Kebijakan opsional `scene_aware` dan
eksperimental `segment_aware` melakukan satu pass FFmpeg tetap tambahan terhadap
stream lokal yang telah divalidasi, memilih stempel waktu adegan `showinfo` yang
dibatasi, dan melakukan fallback secara deterministik ke titik tengah uniform
yang sama jika detektor gagal, terjadi timeout, output rusak, atau kumpulan
kandidat kosong. Mode segment-aware mengalokasikan sampel titik tengah secara
proporsional terhadap interval adegan yang telah divalidasi; bukti segment-aware
dan perilaku fallback dijelaskan secara mendetail di bawah. Batas maksimum 16
frame diterapkan setelah pemilihan dalam setiap kebijakan. Ketika permintaan
scene-aware hanya memiliki anggaran satu frame, permintaan tersebut menggunakan
titik tengah uniform dari keseluruhan video aktif atau jendela fokus dan
melaporkan `policyEffective: uniform`: satu frame adegan yang dipilih tidak dapat
mempertahankan kedua ujung temporal. Pemanggil dapat secara opsional memberikan
jendela fokus terbatas (`start`/`end` dalam detik); batas dijepit ke durasi media,
jendela terbalik atau non-finite ditolak, dan semua kebijakan sampling hanya
dijalankan dalam interval yang dinormalisasi. Jendela yang dihasilkan disertakan
dalam metadata sampling dan prefiks deskripsi yang tidak tepercaya agar model
hilir dapat membedakan cuplikan yang difokuskan dari keseluruhan linimasa.

Fokus teks semantik adalah pengaturan eksplisit yang terpisah. Mode analisis
default `full` mempertahankan prompt frame yang sudah ada dan tidak pernah
meneruskan teks permintaan ke model teks. Dalam mode `focused`, bridge hanya
membaca `text`/`input_text` terbaru yang tidak kosong dan dibuat oleh pengguna
dari kontainer Chat atau Responses yang sama, menormalisasikannya ke NFC,
menyatukan karakter kontrol dan spasi putih, serta membatasinya hingga 500 titik
kode Unicode. Hasil kosong kembali ke prompt `full` yang persis sama. Petunjuk
yang dapat digunakan diserialisasi sebagai JSON dalam blok khusus konteks
pengguna yang tidak tepercaya dan hanya boleh memprioritaskan detail yang dapat
diamati; petunjuk tersebut tidak dapat mengesampingkan peringatan terpisah agar
tidak mengikuti instruksi yang terlihat atau terdengar dalam media. Fokus
tekstual tidak pernah menyimpulkan `start`/`end` atau mengubah sampler temporal.

#### Bukti segmen struktural FU-07

`segment_aware` menggunakan satu tahap praanalisis terbatas pada aliran video lokal yang telah divalidasi. Rantai filter tetap terlebih dahulu menskalakan video hingga lebar maksimum 320 piksel, mendeteksi perubahan adegan dan interval beku, lalu mengambil sampel sebanyak 1 bingkai per detik untuk mengukur keburaman, luma rata-rata, serta informasi spasial/temporal. Tahap ini dibatasi hingga 600 sampel struktural, satu thread FFmpeg/filter, daftar izin protokol khusus `file` dan kontainer yang sama, batas keluaran proses sebesar 1 MiB, serta maksimum 30 detik dalam mekanisme pembatalan/tenggat bersama milik broker. Tahap ini tidak pernah menerima perintah, filter, jalur, atau URL dari permintaan.

Nilai struktural tersebut merupakan bukti pengambilan sampel deterministik, bukan pemahaman semantik atas video. Nilai tersebut tidak menyimpulkan subjek, tindakan, teks takarir, ucapan, atau maksud pengguna. Batas adegan dan pembekuan membentuk segmen; cakupan pembekuan, keburaman, eksposur, detail spasial, dan perubahan temporal hanya memengaruhi cara anggaran 1–16 bingkai yang sudah ada dialokasikan. Segmen yang sepenuhnya beku dibatasi hingga satu bingkai, sedangkan segmen yang tidak beku bersaing untuk mendapatkan sisa anggaran. Ketika jumlah batas melebihi jumlah bingkai, cakupan lini masa yang seragam dipertahankan agar potongan cepat di bagian awal tidak dapat menyembunyikan segmen panjang di bagian akhir. Batas adegan yang berada dalam resolusi analisis 1 detik dari batas pembekuan digabungkan.

Filter yang tidak tersedia, bukti yang rusak/kosong, kesalahan detektor, atau berakhirnya waktu praanalisis terbatas akan gagal secara terbuka dengan kembali ke kebijakan titik tengah seragam yang sama persis. Pembatalan oleh pemanggil atau tenggat broker tidak gagal secara terbuka: hal tersebut menghentikan subproses yang sedang berjalan, mencegah ekstraksi bingkai berikutnya, dan menghapus struktur sementara privat dalam `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` menghasilkan fixture FFmpeg nyata yang deterministik untuk penghematan panggilan pembuatan takarir setelah deduplikasi, alokasi anggaran untuk gerakan padat, bukti keburaman/eksposur/SI-TI, potongan cepat dengan bagian akhir yang panjang, serta positif palsu akibat pemudaran bertahap. Skrip ini mencatat waktu nyata praanalisis dan, jika `/usr/bin/time` tersedia, CPU proses anak serta RSS puncak. Pemeriksaan kualitasnya hanya berupa oracle struktural. Kualitas model takarir nyata tetap berstatus `HOLD` karena harness ini tidak memiliki endpoint yang diotorisasi atau penilai tetap. Penghematan moneter juga tetap berstatus `HOLD`, kecuali `--caption-cost-per-call-usd` memberikan estimasi positif yang eksplisit untuk biaya per panggilan; skrip tersebut tidak pernah merekayasa salah satu hasil itu.

Setiap bingkai dibatasi hingga 4 MiB, seluruh bingkai mentah secara keseluruhan hingga 23 MiB, dan respons broker yang diserialisasi hingga 32 MiB. Direktori sementara privat dihapus dalam `finally`. OmniRoute tidak menyertakan FFmpeg dan tidak menerima jalur executable khusus. Sebelum membuat takarir, bridge menerapkan tahap deduplikasi visual konservatif: setiap JPEG diperkecil menjadi buffer skala abu-abu 16×16 dan hanya dibandingkan dengan bingkai terakhir yang dipertahankan. Untuk anggaran takarir yang diminta di atas satu bingkai, ekstraksi menyediakan kumpulan kandidat terbatas hingga dua kali anggaran tersebut dan tidak pernah lebih dari 16 bingkai. Batas yang diminta hanya diterapkan setelah deduplikasi, dengan kandidat pertama dan terakhir yang dipilih tetap dipertahankan selama penjarangan akhir apabila anggarannya sedikitnya dua. Kebijakan berversi
`grayscale-16x16-mean-cells-v2` menggunakan nilai yang lebih besar antara delta luma rata-rata dan rasio sel thumbnail yang delta ternormalisasinya sedikitnya 0.05. Ambang duplikat adalah konstanta 0.04, yang dipilih demi prediktabilitas alih-alih diekspos sebagai pengaturan waktu proses. Sinyal sekunder berkontras tinggi ini mempertahankan gerakan kecil dan perubahan teks yang terlihat, yang dapat tersembunyi dalam perbandingan berbasis rata-rata saja. Kesalahan pembanding atau decoder akan gagal secara terbuka dan mempertahankan cakupan. Metadata keluaran memisahkan kandidat yang diekstrak, bingkai yang berhasil digunakan, dan duplikat visual yang dibuang.

Bagian video yang ditandai secara eksplisit dapat meminta lembar kontak dengan stempel waktu. Bridge membuat kisi JPEG yang terdiri atas maksimum 4 kolom dan 16 bingkai. Setiap sel berukuran 512 piksel menanamkan stempel waktu sumbernya ke pita bawah berkontras tinggi, sementara stempel waktu yang sama tetap tersedia dalam metadata tekstual untuk pengaitan dan audit pada tahap berikutnya. JPEG lengkap tetap dibatasi hingga 32 MiB. Jika `sharp` tidak dapat mendekode atau menyusun kisi, bridge kembali menggunakan masing-masing bingkai JPEG; pembatalan oleh klien tetap diteruskan melalui operasi lembar tersebut.

Bukti promosi sengaja dipisahkan dari microbenchmark komposisi sintetis. `scripts/perf/video-bridge-contact-sheet-eval.ts` mendefinisikan harness A/B berversi skema untuk model visi nyata yang kompatibel dengan OpenAI. Harness ini mengukur token yang dilaporkan penyedia, latensi nyata ujung ke ujung (termasuk penyusunan lembar), jumlah panggilan model, dan retensi fakta yang ditentukan oleh manifes. Respons mentah model tidak ditulis ke dalam laporan; hanya digest SHA-256 dan ID fakta yang cocok yang dipertahankan. Harness tidak melakukan panggilan jaringan atau model berbayar apa pun kecuali `--execute-real` diberikan dan `--model`, `OMNIROUTE_BASE_URL`, serta `OMNIROUTE_API_KEY` dikonfigurasi. Tanpa eksekusi nyata yang eksplisit tersebut, putusan yang dapat dibaca mesin tetap berstatus `HOLD`; pengukuran payload/jumlah panggilan sintetis saja bukan merupakan bukti promosi.

Pemanggil dapat melampirkan array opsional `transcript.cues` ke bagian video yang didukung jika mereka telah memiliki teks yang selaras. Setiap cue harus memuat `text`, interval `start`/`end` bernilai terbatas yang berada di dalam durasi hasil pemeriksaan, dan `source` yang termasuk dalam daftar izin (`client`, `embedded`, atau `audio-bridge`); `confidence` secara default bernilai `1` dan harus tetap berada di antara `0` dan `1`. Cue duplikat identik digabungkan. OmniRoute tidak pernah memulai transkripsi dari metadata ini: cue yang telah divalidasi disalin ke hasil yang dideskripsikan beserta sumber, tingkat keyakinan, dan intervalnya, lalu dirender sebagai observasi yang tidak tepercaya bersama takarir bingkai. Teks yang tidak valid, berada di luar rentang, atau tidak memiliki informasi asal ditolak alih-alih dicampurkan ke dalam aliran takarir. Kedua kanal transkrip dalam badan permintaan menormalisasi informasi asal yang diberikan menjadi `client`, termasuk label `embedded` atau `audio-bridge` yang dinyatakan sendiri. Hanya adaptor milik server yang dapat menetapkan label tepercaya tersebut melalui argumen khusus kode `trustedSource`; kolom JSON dalam permintaan tidak dapat mencapai argumen tersebut. Teks transkrip tetap merupakan konten tidak tepercaya yang berasal dari media, apa pun informasi asalnya, dan tidak boleh digunakan untuk menentukan otorisasi.

Pemanggil tingkat lanjut dapat menyediakan trek `audioTranscript` untuk video yang sama;
trek tersebut diperlakukan sebagai teks yang disediakan klien, bukan bukti transkripsi server.
Lapisan fusi menjalankan observasi visual dan audio dengan
tenggat dan sinyal pembatalan yang sama, mengurutkannya pada linimasa bersama, menggabungkan
duplikat yang persis sama, dan melaporkan hasil parsial ketika hanya satu sisi yang berhasil.
`audioTranscript` yang tidak valid diturunkan menjadi hasil parsial tersebut — deskripsi
visual dipertahankan dan cabang audio mencatat kode kegagalan yang telah disanitasi —
alih-alih menggagalkan seluruh video. Ketersediaan per cabang, penanda parsial,
dan kode kegagalan yang telah disanitasi dipertahankan dalam hasil yang dideskripsikan, dalam
metadata guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), dalam metadata cache hasil, dan dalam penghitung
fusi bridge. Jalur Video Bridge default tidak menjalankan speech-to-text
atau mengunduh salinan media kedua; tanpa trek eksplisit tersebut, jalur ini tetap
hanya memproses video.

**Retensi transkrip (#12150 P1).** Ini berlaku secara otomatis setiap kali
Video Bridge (yang penggunaannya sendiri bersifat pilihan) merender cue transkrip — tidak ada
penanda retensi terpisah. Ketika suatu permintaan merender cue transkrip apa pun (`transcript`
yang dideklarasikan pemanggil atau `audioTranscript` yang difusikan), guardrail menandainya sebagai
`videoBridgeObserved` dan menghasilkan bayangan deskripsi video yang telah disunting —
rendering identik yang mengganti isi teks bebas setiap cue dengan
`[redacted-video-transcript]`, yang dibuat dengan menyubstitusi kolom cue terstruktur
sebelum string disusun (tidak pernah dengan mengurai teks yang telah diratakan, sehingga tidak ada
isi cue — baik adversarial maupun biasa, termasuk isi yang mengandung `]` seperti
`[inaudible]`/`[music]` — yang dapat lolos). Isi permintaan pada log panggilan yang dipertahankan menukar
setiap bagian teks yang berasal dari video dengan bayangan yang telah disunting tersebut, yang dicocokkan berdasarkan
kesamaan konten; jangkar `fullText` dibaca ulang dari payload guardrail prapanggilan
yang telah selesai, sehingga pencocokan tetap berhasil setelah guardrail berantai berikutnya
(penyamaran PII dan kredensial, dengan prioritas 10/95) menulis ulang teks deskripsi secara langsung dan
setelah injeksi prompt sistem/handoff/memori membentuk ulang array pesan. Isi
yang dikirim ke model upstream tidak berubah. Permintaan yang teramati juga tidak mengisi
Memory persisten (ekstraksi yang berasal dari permintaan maupun respons dilewati),
sehingga balasan model sendiri tidak dapat menggemakan teks transkrip ke dalam Memory.

**Kolom video mentah (#12430).** Ketika bridge diaktifkan dan dukungan video native tidak diketahui atau tidak tersedia, kolom `transcript`/`audioTranscript` yang didefinisikan juga mengaktifkan `videoBridgeObserved`, bahkan setelah kegagalan deskripsi atau batas `maxVideos`. `null` dan string kosong turut dihitung; kolom yang tidak ada dan metadata nonvideo tidak. Salinan yang dipertahankan menyunting kolom-kolom ini atau menghilangkan permintaan, sedangkan cache/Memory dilewati.

Pada jalur fallback tersebut, cue valid dari pemanggil menjadi bagian `text`/`input_text`
yang didukung, bukan kolom penyedia nonstandar. Kedua trek yang disediakan dalam permintaan
tetap menjadi observasi `client` yang tidak tepercaya, dengan peringatan eksplisit bahwa video
tidak dideskripsikan dan stempel waktu tidak diverifikasi terhadap media. Batas yang sudah ada,
yaitu total 256 cue/64 KiB serta batas per cue, berlaku pada gabungan kedua trek;
stempel waktu harus berada dalam batas maksimum 600 detik milik broker dan setiap jendela fokus
yang disediakan. Trek yang tidak valid dibuang, bukan diteruskan sebagai teks arbitrer; trek
pasangan yang valid tetap dapat digunakan kecuali anggaran gabungannya terlampaui. Kolom null/kosong
tidak menambahkan teks. Fallback ini tidak menambahkan pengambilan media atau transkripsi.
Kolom ekstensi transkrip dihapus dari pembawa video fallback dan objek
`video_url`/`source` miliknya. Daftar yang diizinkan pada wire OpenAI tetap ketat; pembawa video
dengan dukungan native yang tidak diketahui tetap tersedia dan target yang diketahui hanya mendukung teks mempertahankan penanda aman.
Bayangan penyuntingan terstruktur melindungi teks transkrip yang ditambahkan, sedangkan
permintaan asli milik pemanggil tetap tidak berubah. Target yang mendukung native dan
bridge yang dinonaktifkan mempertahankan perilaku bypass yang sudah ada.

Salinan tambahan yang dipertahankan menggunakan sinyal permintaan teramati yang sama. Snapshot
permintaan klien mentah sebelum guardrail, permintaan tertunda dalam memori, dan log
permintaan yang ditolak lebih awal secara struktural mengganti kolom transkrip dalam bagian video;
prompt berbentuk string yang disintesis oleh tahapan pipeline dan handoff konteks disunting
pada sink isi permintaan yang dipertahankan. Penanda `video_content_removed` yang dipertahankan
membuat kelanjutan `previous_response_id` gagal secara tertutup alih-alih merekonstruksi
teks yang sengaja dibuang. Jika permintaan teramati kehilangan
bayangan penyuntingan per bagiannya sebelum pencatatan, atau bahkan jika satu dari beberapa bayangan video
gagal cocok setelah mutasi permintaan berikutnya, isi permintaan yang dipertahankan
dihilangkan sepenuhnya alih-alih mempertahankan transkrip yang hanya disunting sebagian.

Untuk permintaan teramati, respons model mungkin mengutip bagian mana pun dari
transkrip tanpa batas cue terstruktur. Karena itu, `responseBody` pada log panggilan
yang dipertahankan diganti dengan penanda penghilangan; artefak pipeline
terperinci (yang dapat mencakup isi upstream/klien dan potongan streaming)
tidak dipertahankan. Cache semantik, idempotensi, dan pemutaran ulang penalaran melewati
operasi baca dan tulis untuk permintaan tersebut. Permintaan penyedia dan respons
yang terlihat oleh klien tetap tidak berubah. Byte keepalive awal dikuras dari buffer
sementara ketika artefak terperinci dihilangkan. Peringatan EventStream yang rusak
dari Kiro hanya melaporkan jumlah byte payload, tidak pernah isinya ataupun error mentah
dari parser JSON.
Ini tidak menyatakan bahwa setiap diagnostik penyedia/plugin yang tidak terkait telah
diaudit; pemeriksaan menyeluruh terhadap sink yang dipertahankan dilacak dalam #11658.

Siklus hidup internal `/api/modality-bridge/video/drilldown` merupakan substrat cache terpisah yang diautentikasi melalui loopback/token. Setiap operasi juga memerlukan ID prinsipal buram yang kanonis. Sebelum pemanggil produksi diaktifkan, pemanggil tersebut harus memperoleh ID itu dari tenant yang terautentikasi dan tidak boleh meneruskan nilai yang dipilih klien. Kunci cache mengikat prinsipal tersebut dengan ID sesi dan referensi video yang kanonis, hanya menyimpan kunci turunannya yang berbasis SHA-256, serta membatasi cakupan pembacaan dan penghapusan pada prinsipal yang sama. Cache menyimpan paling banyak 16 frame JPEG turunan per entri, mengakhirkan masa berlakunya setelah sepuluh menit, dan mendukung pembacaan `start`/`end` terbatas atau penghapusan sesi secara eksplisit.

Setiap prinsipal dibatasi hingga 16 entri dan 64 MiB data JPEG kanonis. Batas tersebut tidak bergantung pada batas global sebesar 64 entri/256 MiB: tekanan kuota prinsipal hanya mengeluarkan entri prinsipal tersebut yang paling lama tidak digunakan sebelum pengeluaran LRU global dipertimbangkan. Entri yang kedaluwarsa dibersihkan dari penghitungan prinsipal maupun global saat ada aktivitas cache, sedangkan pembatalan dan kegagalan validasi tidak melakukan commit atas penggantian parsial.

Cache menolak Base64 nonkanonis, padding berlebih, media non-JPEG, JPEG yang rusak atau terpotong, serta JPEG yang menghasilkan peringatan selama dekode gambar penuh terbatas menggunakan `sharp`. Cache mengenkode ulang setiap gambar yang diterima sebagai JPEG kanonis, memperoleh lebar dan tinggi dari byte yang telah didekode alih-alih memercayai bidang dari pemanggil, serta membuang byte poliglot tambahan alih-alih menyimpannya. Hanya buffer terkompresi kanonis yang terbatas yang diperhitungkan terhadap kedua kuota. Batas wire JSON mencakup overhead Base64 untuk batas input terdekode sebesar 32 MiB. Setiap derivasi yang disimpan mencatat format/resolusi JPEG yang telah divalidasi, kebijakan pengambilan sampel, versi derivasi, waktu pembuatan, hash konten yang dihitung server, serta referensi induk yang di-hash beserta hash konten induk dari pemanggil tepercaya. Pembatalan diperiksa di antara fase dekode/hash asinkron sebelum commit cache atomik.

Bagian ini belum menghubungkan produsen produksi ke rute tersebut dan belum menyediakan pemilihan varian multiresolusi. Oleh karena itu, jalur permintaan Video Bridge yang transparan tidak menimbulkan pekerjaan tambahan, sedangkan derivasi prinsipal yang terikat tenant dan keseluruhan siklus hidup multiresolusi FU-08 tetap menjadi pekerjaan tindak lanjut eksplisit, bukan didokumentasikan sebagai perilaku yang telah selesai.

Frame diberi keterangan secara berurutan menggunakan model Video yang dikonfigurasi. Override Video yang kosong mewarisi pengaturan Vision; jika keduanya kosong, auto-router Vision memilih model efektif yang mendukung visi. Keterangan yang berhasil menggantikan bagian asli dengan prefiks `[Video description:` yang stabil, yang juga menandai teks sebagai pengamatan tidak tepercaya yang berasal dari media dan memberi tahu model hilir agar tidak mengikuti instruksi yang ditemukan dalam media. Kunci cache keterangan frame mencakup byte JPEG, prompt, stempel waktu, dan model efektif; hanya keterangan yang berhasil yang disimpan dalam cache. Entri cache mempertahankan model produsen aktual yang berhasil, termasuk model fallback; bridge melaporkan `mixed` ketika frame yang berbeda dihasilkan oleh model yang berbeda. Cache hit menggunakan kembali identitas produsen tersebut alih-alih melabelinya ulang sebagai rencana perutean yang diminta. Cache hasil seluruh video dikunci berdasarkan setiap input yang mengubah output — prompt, model efektif, kebijakan pengambilan sampel, jumlah frame, mode analisis semantik, fingerprint SHA-256 dari petunjuk fokus yang dinormalisasi, jendela fokus, `transcript`, `audioTranscript`, dan flag contact-sheet — sehingga perubahan pada salah satu dimensi tersebut menghasilkan cache miss, bukan penggunaan kembali data usang. Versi kebijakan deduplikasi visual, ambang batas, dan jumlah frame kandidat yang dibatasi juga dinyatakan secara eksplisit dalam kunci dan metadata cache hasil; oleh karena itu, perubahan kebijakan tidak dapat menggunakan kembali deskripsi seluruh video yang usang. Metadata cache hasil v4 menyimpan mode dan fingerprint, bukan tugas pengguna mentah. Metadata guardrail melaporkan mode analisis yang diminta dan yang efektif; mode `focused` yang diminta tanpa teks pengguna yang dapat digunakan dilaporkan secara efektif sebagai `full`.

Guardrail mengekstrak setiap bagian video yang didukung, tetapi tidak mendeskripsikan lebih dari `modalityBridgeVideoMaxVideos`. Untuk target yang terbukti memiliki `supportsVideo === false`, video yang gagal dan melampaui batas menjadi penanda teks aman yang eksplisit sehingga tidak ada video mentah yang tersisa. Jika kapabilitas tidak diketahui, bagian tersebut mempertahankan pembawa videonya; setiap transkrip fallback mengikuti konversi teks terbatas di atas. Target dengan `supportsVideo === true` melewati bridge. Sinyal pembatalan permintaan klien diteruskan melalui pengunduhan, antrean broker, subproses, dan panggilan pembuatan keterangan; pembatalan menghentikan proses di antara video dan tidak pernah bersikap fail-open dengan meneruskan media mentah.

Pengaturan runtime didukung oleh DB dan divalidasi menggunakan Zod:

| Kunci                               | Default     | Rentang / perilaku                                                                                                         |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime opsional, harus diaktifkan secara eksplisit                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` mempertahankan keterangan generik; `focused` menggunakan konteks pengguna terbaru yang terbatas dan tidak tepercaya |
| `modalityBridgeVideoModel`          | `""`        | Mewarisi model Vision Bridge                                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, atau `segment_aware` proporsional; kegagalan detektor akan beralih ke `uniform`                  |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                             |

Nilai timeout Video lama yang tersimpan dan melebihi 120 detik dibatasi hingga
tenggat broker; penulisan pengaturan baru yang melebihi batas tersebut ditolak.
`GET /api/modality-bridge/video/runtime` memerlukan lokalitas loopback tepercaya
yang telah diberi stempel sebelum autentikasi atau pemeriksaan runtime, lalu
memerlukan autentikasi manajemen. Endpoint ini hanya mengembalikan `available`,
versi FFmpeg/ffprobe yang telah disanitasi, dan alasan tetap ketika runtime tidak
tersedia. Endpoint ekstraksi internal bukan API unggahan publik: kejenuhan antrean
mengembalikan `503` beserta `Retry-After`, pemutusan koneksi oleh pemanggil
mengembalikan `499`, dan tenggat tetap broker mengembalikan `504`. Respons yang
dikonversi menambahkan `video->text;model=<visionModel>;parts=<videos>` ke header
pusat `x-omniroute-modality-bridge` tanpa menghapus segmen Vision atau Audio.

### Penyamar PII (`piiMasker.ts`)

Berjalan pada **kedua** tahap.

- **`preCall`** mengkloning payload, menelusuri `system`, `messages`, `input`, dan
  `prompt` (termasuk item berupa string biasa), lalu menerapkan `processPII()` (dari
  `@/shared/utils/inputSanitizer`) pada bidang `content`/`text` bertipe string. Saat
  `PII_REDACTION_ENABLED=true`, PII yang terdeteksi disunting dalam payload
  keluar. Ini tidak bergantung pada `INPUT_SANITIZER_MODE` (yang hanya mengontrol
  kebijakan injeksi prompt). Saat penyuntingan dinonaktifkan, panggilan mencatat
  jumlah deteksi tanpa menulis ulang konten.
- **`postCall`** mengkloning respons secara mendalam, menjalankan
  `sanitizePIIResponse()` beserta penyamar bentuk Responses API
  (`maskResponsesOutput` — mencakup `output_text` dan
  `output[].content[].text`). Jika terjadi penyuntingan, respons yang telah
  dimodifikasi menggantikan respons asli.

Guardrail tidak pernah memblokir; guardrail hanya memberi anotasi
(`meta.detections`, `meta.redacted`) atau menulis ulang.

### Injeksi Prompt (`promptInjection.ts`)

Mendeteksi struktur adversarial dalam konten yang diberikan pengguna dan
menerapkan kebijakan yang dikonfigurasi. Perilaku ditentukan oleh variabel
lingkungan dan opsi konstruktor:

| Pengaturan    | Variabel lingkungan                                                                                 | Default | Efek                                                                                                                                                                                                             |
| ------------- | --------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Diaktifkan    | `INPUT_SANITIZER_ENABLED`                                                                           | `true`  | Saat `false`, guardrail segera dihentikan.                                                                                                                                                                       |
| Mode          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn`  | Kebijakan injeksi: `block`, `warn`, atau `log`. (`redact` diterima untuk kompatibilitas mundur, tetapi **tidak** menghapus teks injeksi; penulisan ulang PII permintaan dikontrol oleh `PII_REDACTION_ENABLED`.) |
| Ambang blokir | opsi `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Tingkat keparahan minimum yang diperlukan untuk memblokir. Secara default, tingkat Medium hanya dipantau.                                                                                                        |

**Prioritas mode** (`getMode`): `options.mode` pemanggil →
penggantian **feature flag DB** `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → env `INJECTION_GUARD_MODE` → env `INPUT_SANITIZER_MODE` →
`warn`. Dengan demikian, penggantian melalui dashboard lebih diprioritaskan
daripada variabel lingkungan, sehingga UI Feature Flags mengontrol guard yang
sedang berjalan secara langsung (tanpa memulai ulang). Pembacaan DB bersifat
fail-safe: jika terjadi kesalahan, guard kembali ke perilaku berbasis variabel
lingkungan, dan jika tidak ada penggantian yang ditetapkan, perilakunya identik
dengan resolusi yang hanya menggunakan variabel lingkungan.

Sumber deteksi:

1. `sanitizeRequest()` dari `@/shared/utils/inputSanitizer` (kumpulan detektor
   bersama yang digunakan di bagian lain pipeline).
2. `DEFAULT_GUARD_PATTERNS` bawaan (saat ini `system_override_inline` dan
   `markdown_system_block`, keduanya memiliki tingkat keparahan `high`).
3. `customPatterns` opsional yang diteruskan melalui opsi konstruktor (string,
   regex, atau rekaman `{ name, pattern, severity }`).

Ketika `mode === "block"` **dan** setidaknya satu deteksi memenuhi ambang batas tingkat keparahan, `preCall` mengembalikan `{ block: true, message: "Request rejected:
suspicious content detected" }`. Dalam mode `warn`/`log`, guardrail mencatat log tetapi
mengizinkan pemanggilan. Helper bersama `evaluatePromptInjection()` juga diekspor
untuk pemanggil yang perlu mengevaluasi prompt tanpa melalui registry.

**Batas pemindaian (v3.8.20):** detektor hanya memeriksa **16 KB pertama** dari
teks prompt yang digabungkan — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) dalam
`src/shared/utils/inputSanitizer.ts`. Baik `detectInjection()` maupun
`evaluatePromptInjection()` menjalankan `slice(0, MAX_INJECTION_SCAN_BYTES)` sebelum
menjalankan perulangan pola. Direktif injeksi berada di dekat bagian atas input, sehingga hal ini
membatasi penggunaan CPU/GC regex pada payload berukuran ratusan KB tanpa melemahkan deteksi (lihat
#3932, #4041).

### Penyamar Kredensial (`credentialMasker.ts`)

Berjalan pada **kedua** tahap, terakhir dalam rantai default (prioritas `95`). Menyamarkan
pola kunci API / token rahasia yang dikenal luas dari payload keluar (konten
pesan, argumen pemanggilan alat, hasil alat) **dan** respons penyedia, sehingga
kredensial yang ditempelkan ke dalam prompt (atau dipantulkan kembali oleh hasil alat) tidak bocor
ke penyedia upstream atau kembali ke klien.

- **Hanya aktif jika dipilih**, mengikuti konvensi yang sama dengan penyamaran PII (berdekatan dengan Hard Rule #20):
  dinonaktifkan kecuali `settings.credentialRedactionEnabled === true` **atau**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ketika dinonaktifkan, guardrail tidak melakukan apa pun —
  guardrail tidak pernah memblokir dan tidak pernah menulis ulang.
- `redactCredentials()` menelusuri seluruh struktur pohon payload/respons (`walkValue()`,
  aman dari prototype pollution, aman terhadap siklus melalui `WeakSet`) dan mengganti kecocokan dengan
  placeholder `[REDACTED:<type>]`, dengan hanya mengkloning cabang yang benar-benar
  berubah.
- `CREDENTIAL_PATTERNS` mencakup kunci penyedia LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), kunci pembayaran (Stripe, Square), kunci
  cloud (kunci akses AWS, Twilio, SendGrid, Mailgun), kunci privat / JWT,
  string koneksi yang memuat kredensial (`mongodb://user:pass@...`, dll.), serta
  pola umum nilai header `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Kunci yang berbentuk header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) disamarkan secara struktural (hanya nilainya, prefiks skema seperti
  `Bearer `/`Basic ` dipertahankan), bukan melalui regex teks generik.
- Guardrail tidak pernah memblokir; guardrail hanya menulis ulang (`modifiedPayload` /
  `modifiedResponse`) dan menambahkan anotasi (`meta.credentialsRedacted`, `meta.count`).

Pelindung regresi: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrak Dasar (`base.ts`)

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
  block?: boolean; // true menghentikan rantai secara langsung
  message?: string; // ditampilkan saat pemblokiran
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // dikembalikan oleh preCall untuk menulis ulang permintaan
  modifiedResponse?: TValue; // dikembalikan oleh postCall untuk menulis ulang respons
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

Sebuah guardrail menandakan "tidak ada perubahan" dengan mengembalikan `void`, `{}`, atau
`{ block: false }`. Mengembalikan `modifiedPayload`/`modifiedResponse` akan menggantikan
nilai yang diteruskan melalui rantai untuk guardrail berikutnya.
`signal?: AbortSignal` membawa siklus hidup pemanggil ke dalam guardrail. Pembatalan permintaan merupakan pengecualian fail-open yang disengaja: penghubung media menghentikan pekerjaan dan melakukan pembersihan tanpa memulihkan media mentah ke target yang diketahui tidak mendukungnya.

## Registri (`registry.ts`)

Singleton `guardrailRegistry` menyediakan:

- `register(guardrail)` — menambahkan (atau mengganti berdasarkan nama yang dinormalisasi) sebuah guardrail dan
  mengurutkan ulang berdasarkan `priority` secara menaik.
- `clear()` / `list()` — utilitas administratif.
- `runPreCallHooks(payload, context)` — mengiterasi guardrail aktif, meneruskan
  payload melalui `modifiedPayload`, dan berhenti pada `block: true` pertama.
- `runPostCallHooks(response, context)` — alur yang sama pada sisi respons.
- `resetGuardrailsForTests({ registerDefaults })` — menghapus status dan secara opsional
  mendaftarkan ulang guardrail default untuk isolasi pengujian yang bersih.

Kedua runner mengembalikan `{ blocked, payload|response, results, guardrail?, message? }`
dengan `results` berupa array rekaman `GuardrailExecutionResult` yang menyertakan
kolom `blocked`, `skipped`, `modified`, `error`, dan `meta` untuk setiap guardrail,
yang berguna untuk penelusuran.

### Menonaktifkan Guardrail Per Permintaan

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` mengumpulkan daftar
nama guardrail tanpa duplikat yang harus dilewati untuk permintaan saat ini.
Sumbernya (semuanya opsional dan digabungkan):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` pada isi permintaan (tingkat teratas)
- `metadata.disabledGuardrails` pada isi permintaan
- Header `x-omniroute-disabled-guardrails` (atau versi lama
  `x-disabled-guardrails`)

Nilai dapat berupa array string atau string yang dipisahkan koma; nama
dinormalisasi menjadi kebab-case huruf kecil (`pii_masker` → `pii-masker`). Hasilnya
diteruskan melalui `context.disabledGuardrails` ke registri, yang melewati
guardrail yang cocok (`skipped: true` dalam `results`).

## Urutan Eksekusi

Untuk setiap permintaan yang mengalir melalui `src/sse/handlers/chat.ts` dan
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` membuat daftar lewati berdasarkan kunci API, body,
   dan header.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` menjalankan guardrail dalam urutan
   prioritas menaik:
   - Guardrail yang dinonaktifkan dicatat sebagai `skipped`.
   - `preCall` setiap guardrail dapat menulis ulang payload melalui `modifiedPayload`.
   - `block: true` pertama menghentikan rantai lebih awal dan handler mengembalikan
     respons penolakan guardrail.
3. Payload (yang mungkin telah ditulis ulang) diteruskan ke perutean kombo dan pengiriman
   ke upstream.
4. Setelah respons disusun, `guardrailRegistry.runPostCallHooks(...)`
   menjalankan rantai yang sama pada respons. `block: true` di sini membuang respons
   upstream.

Guardrail yang melempar pengecualian dicatat dengan `error: <message>` dan dicatat dalam log melalui
`logger.warn`, tetapi rantai tetap berlanjut — secara desain tetap terbuka saat terjadi kegagalan.

## Konfigurasi

Variabel lingkungan yang dibaca oleh guardrail bawaan:

| Variabel                              | Digunakan oleh            | Efek                                                                                                         |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Atur ke `false` untuk menonaktifkan deteksi sepenuhnya.                                                      |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Kebijakan injeksi: `warn`, `block`, atau `log`. Nilai lama `redact` tidak menulis ulang teks injeksi.        |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode untuk guard injeksi; juga merupakan flag fitur DB yang **menggantikan** variabel lingkungan (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Tingkat keparahan minimum yang ditolak oleh `MODE=block`: `high` (bawaan), `medium`, atau `low`.             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias lama untuk `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                          |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Jika `true`, PII dalam permintaan disamarkan (tidak bergantung pada mode injeksi).                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Mengontrol perilaku masker pada sisi respons.                                                                |

Guardrail Modality Bridge membaca konfigurasi runtime dari penyimpanan pengaturan
berbasis DB (`getSettings()`), bukan dari variabel lingkungan. Kunci utama Vision adalah
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, dan
`modalityBridgeCacheMaxEntries`. Kunci lama
`visionBridge*` hanya diterima sebagai fallback pembacaan satu siklus yang telah didokumentasikan;
penulisan dari dasbor menggunakan kunci utama. Nilai bawaan dan resolver fallback
berada di `src/shared/constants/modalityBridgeDefaults.ts`, dengan konstanta lama
tetap dipertahankan di `src/shared/constants/visionBridgeDefaults.ts`.

Audio menggunakan `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, dan `modalityBridgeAudioMaxClips`, ditambah pengaturan
bersama `modalityBridgeCache*`. Audio tidak memiliki fallback kunci lama karena kunci-kunci
ini diperkenalkan bersama skema Modality Bridge.

Video menggunakan `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, dan
`modalityBridgeVideoTimeout`, ditambah pengaturan bersama `modalityBridgeCache*`.
Fitur ini dinonaktifkan secara bawaan karena FFmpeg/ffprobe merupakan dependensi operasional
opsional dan pemberian keterangan pada frame menambah latensi serta biaya model.

## Guardrail Kustom

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Anggaran harian terlampaui" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Langkah-langkah:

1. Buat `src/lib/guardrails/myGuardrail.ts` yang memperluas `BaseGuardrail`.
2. Implementasikan `preCall` dan/atau `postCall`.
3. Daftarkan saat impor (tambahkan dari `registerDefaultGuardrails`) atau
   panggil `guardrailRegistry.register(...)` saat runtime — registry akan mengganti
   guardrail sebelumnya yang memiliki nama ternormalisasi yang sama.
4. Tambahkan pengujian di bawah `tests/unit/` (contoh yang tersedia:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pengujian

Gunakan `resetGuardrailsForTests()` di antara pengujian agar dimulai dari keadaan yang diketahui.
Berikan `{ registerDefaults: false }` untuk memulai dengan registry kosong dan
hanya mendaftarkan guardrail yang sedang diuji. Vision Bridge menerima injeksi dependensi
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge menyediakan titik injeksi
yang setara untuk pengaturan, kapabilitas, pemilihan model STT, pemeriksaan kredensial,
dan transkripsi. Dengan demikian, pengujian dapat menjalankan kedua alur tanpa akses DB
atau jaringan.

## Lihat Juga

- `src/lib/guardrails/` — implementasi
- `src/shared/utils/inputSanitizer.ts` — detektor bersama yang mendukung
  injeksi prompt dan penyamaran PII
- `src/shared/constants/visionBridgeDefaults.ts` — nilai default Vision Bridge dan
  daftar model forced-bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — nilai default runtime bersama Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — lapisan ortogonal (circuit breaker, cooldown)
- `docs/reference/ENVIRONMENT.md` — referensi lengkap variabel lingkungan

## Cakupan rute injection-guard & red-team (Fase 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) mencakup semua rute
yang menerima prompt pengguna. Guard ini mematuhi `INJECTION_GUARD_MODE` (nilai default `warn` = hanya mencatat log;
`block` = mengembalikan HTTP 400 `SECURITY_001`).

| Jenis           | Rute                                                                                                                                                 | Mode default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Teks (tersedia) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| Generatif       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| Data            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

Ekstraksi teks (`extractMessageContents`) mencakup `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (setiap malam, `nightly-llm-security.yml`):** promptfoo memvalidasi bahwa setiap rute memblokir
korpus OWASP-LLM dalam `INJECTION_GUARD_MODE=block`; garak menjalankan probe (dilewati tanpa secret).
`moderations` disertakan untuk konsistensi — operator dalam mode blokir dapat mengecualikannya melalui
`resolveDisabledGuardrails`.

Workflow setiap malam (`.github/workflows/nightly-llm-security.yml`, cron + dispatch
manual) memiliki dua job:

- **`promptfoo-guard` (memblokir)** — menjalankan `promptfoo eval -c promptfooconfig.yaml`
  dengan `INJECTION_GUARD_MODE=block`. Setiap kasus adversarial (misalnya "abaikan semua
  instruksi sebelumnya…", jailbreak bergaya DAN) memastikan respons memuat
  `error.code === "SECURITY_001"`, yaitu guard benar-benar menolak permintaan tersebut.
- **`garak` (advisory)** — menjalankan garak `--probes promptinject,dan,leakreplay`
  terhadap instans OmniRoute lokal (`http://localhost:20128/v1`). Bergantung pada
  secret penyedia (`PROMPTFOO_PROVIDER_KEY`); dilewati dengan baik jika tidak tersedia dan diberi akhiran
  `|| true`, sehingga job ini melaporkan hasil tanpa menggagalkan CI.

Cakupan helper guard (`createInjectionGuard` / `withInjectionGuard`)
meliputi setiap rute `/v1` yang memuat prompt; teks prompt diambil dari
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` oleh
`extractMessageContents()` di `src/shared/utils/inputSanitizer.ts`.
