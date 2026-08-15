# PROMPT CHO AGENT — BUILD WEBSITE TĨNH KOKORO

## 0. Vai trò của Agent

Bạn là **Senior Frontend Engineer + UI/UX Designer + Web Performance Engineer**.

Nhiệm vụ của bạn là thiết kế và build một **landing page tĩnh cho Kokoro**, lấy cảm hứng về bố cục và cách kể chuyện cuộn dọc của website Starlink, nhưng **không sao chép trực tiếp UI, thương hiệu, hình ảnh hoặc màu sắc của Starlink**.

Website phải mang bản sắc riêng của Kokoro:

- calm
- private
- emotional
- diary / notebook
- minimal
- nhiều khoảng thở
- nhẹ nhàng
- hiện đại
- không corporate
- không giống dashboard productivity
- không giống mạng xã hội

Website sẽ được deploy bằng **GitHub Pages** và mục tiêu chính là giúp người dùng:

1. Hiểu Kokoro là gì.
2. Cảm nhận được tinh thần thương hiệu.
3. Xem các tính năng cốt lõi.
4. Tải trực tiếp file APK.

---

# 1. Mục tiêu sản phẩm

Kokoro là một ứng dụng theo hướng:

> **Private self-reflection journal + small private group companion**

Thông điệp cốt lõi của website:

> **Ghi lại — Nhìn lại — Đồng hành**

Không định vị Kokoro là:

- ứng dụng chữa bệnh tâm lý;
- ứng dụng trị liệu;
- productivity app;
- task manager;
- social network công khai;
- app cạnh tranh bằng streak/leaderboard.

Trọng tâm truyền thông:

1. Journal cá nhân.
2. Mood check-in.
3. Calendar / memory.
4. Photo / voice như lớp lưu giữ ký ức.
5. Group riêng tư và có chọn lọc.
6. Light / Dark mode.
7. Privacy by default.

---

# 2. Mục tiêu website

Website chỉ cần là **single-page static landing page**.

Không cần backend.

Không cần database.

Không cần đăng nhập.

Không cần CMS.

Không cần API phức tạp.

Mục tiêu conversion chính:

> **Download APK**

Mọi CTA chính trên website đều phải dẫn tới cùng một URL tải APK.

URL hiện tại:

```text
https://expo.dev/artifacts/eas/-xbuwOQcpUbGZxu_1Ld7tt-2FCEc5HqxX0aTx8n8aHI.apk
```

Không hard-code URL này ở nhiều nơi.

Hãy tạo một cấu hình tập trung, ví dụ:

```js
const APK_URL =
  "https://expo.dev/artifacts/eas/-xbuwOQcpUbGZxu_1Ld7tt-2FCEc5HqxX0aTx8n8aHI.apk";
```

Tất cả nút Download phải lấy URL từ cùng một nguồn.

Mục đích là sau này chỉ cần sửa một nơi khi có bản APK mới.

---

# 3. Công nghệ ưu tiên

Ưu tiên web tĩnh đơn giản, nhẹ và dễ deploy bằng GitHub Pages.

Khuyến nghị:

```text
HTML5
CSS3
Vanilla JavaScript
```

Không dùng framework nếu không thực sự cần.

Không dùng:

- backend;
- Node server runtime;
- database;
- auth;
- API riêng;
- dependency nặng;
- UI framework lớn nếu chỉ để dựng landing page.

Nếu repository hiện tại đã có stack frontend thì có thể tiếp tục theo stack đó, nhưng vẫn phải đảm bảo:

- build ra static files;
- deploy được GitHub Pages;
- không phụ thuộc server runtime.

---

# 4. File structure đề xuất

Nếu tạo mới từ đầu:

```text
/
├── index.html
├── styles/
│   ├── main.css
│   └── responsive.css
├── scripts/
│   ├── config.js
│   └── main.js
├── assets/
│   ├── images/
│   ├── screenshots/
│   ├── icons/
│   └── logo/
├── favicon.ico
├── README.md
└── .github/
    └── workflows/
        └── pages.yml
```

Có thể điều chỉnh cấu trúc nếu project hiện tại đã có convention khác.

---

# 5. Design direction

## 5.1. Tư duy lấy cảm hứng từ Starlink

Học các nguyên tắc:

- Full-screen storytelling.
- Một section chỉ truyền tải một thông điệp chính.
- Hình ảnh lớn hơn text.
- Headline ngắn.
- CTA rõ.
- Ít navigation.
- Nhiều whitespace.
- Scroll giống chuyển từ scene này sang scene khác.
- Hero mạnh.
- Sticky/fixed navigation.
- Không nhồi quá nhiều feature vào một màn hình.

Không copy:

- màu đen đặc trưng Starlink;
- typography của Starlink;
- hình ảnh vệ tinh / không gian;
- bố cục pixel-perfect;
- logo;
- asset;
- animation đặc trưng.

---

# 6. Visual identity Kokoro

## 6.1. Mood tổng thể

Website phải tạo cảm giác:

> Một cuốn nhật ký kỹ thuật số hiện đại.

Keywords:

```text
calm
private
warm
gentle
journal
paper
reflection
memory
soft
quiet
human
```

---

## 6.2. Background

Nền chính không dùng trắng lạnh hoàn toàn.

Gợi ý:

```css
--paper: #F7F4EE;
--paper-soft: #FAF8F4;
--paper-warm: #F3EFE7;
--ink: #292725;
--muted: #77716A;
```

Có thể thêm paper grain cực nhẹ bằng CSS hoặc texture nhỏ đã tối ưu.

Texture chỉ nên gần như không nhìn thấy.

Không dùng:

- background gradient neon;
- glassmorphism quá mạnh;
- màu saturation cao;
- grid kiểu dashboard;
- background sci-fi.

---

## 6.3. Typography

Ưu tiên:

- font sans-serif dễ đọc cho body;
- headline thanh lịch, mềm;
- có thể dùng một font display khác nhưng không quá “trẻ con”;
- không dùng font handwritten cho toàn bộ website.

Headline:

```text
40–72px desktop
32–48px tablet
28–40px mobile
```

Body:

```text
16–20px
line-height khoảng 1.6
```

Text width phải giới hạn, tránh kéo dài toàn màn hình.

---

# 7. Floating fixed navbar

Đây là yêu cầu bắt buộc.

Navbar phải lấy cảm hứng từ thanh nổi của Starlink trong ảnh tham chiếu.

## Desktop

Bố cục:

```text
┌────────────────────────────────────────────────────┐
│ KOKORO                           Download APK       │
└────────────────────────────────────────────────────┘
```

Có thể thêm tối đa:

```text
About
Features
```

nhưng không làm navbar rối.

Ưu tiên bản tối giản:

```text
KOKORO                                      Download APK
```

---

## 7.1. Behavior

Navbar phải:

- `position: fixed`;
- luôn hiển thị khi scroll;
- cách mép trên khoảng `16–24px`;
- căn giữa;
- max-width khoảng `1180–1240px`;
- responsive;
- có `z-index` cao;
- có transition nhẹ;
- không che nội dung.

Ví dụ logic:

```css
.site-header {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 48px);
  max-width: 1200px;
  z-index: 1000;
}
```

Navbar visual:

```text
background: rgba(247, 244, 238, 0.88)
backdrop-filter: blur(18px)
border-radius: 14px
border: 1px solid rgba(40, 35, 30, 0.08)
shadow: rất nhẹ
```

---

## 7.2. Download button trên navbar

Button chính:

```text
Download APK
```

Style:

- nền charcoal;
- chữ trắng;
- border-radius vừa phải;
- không pill quá tròn;
- hover nâng nhẹ 1–2px;
- transition 180–220ms.

Không dùng glow.

Không dùng gradient.

---

# 8. Cấu trúc website

Website gồm khoảng 8–9 section.

---

# SECTION 01 — HERO

## Mục tiêu

Trong 5 giây đầu tiên, người dùng phải hiểu:

- đây là Kokoro;
- app dùng để ghi lại cảm xúc / nhật ký;
- có thể tải APK.

## Layout

Full viewport:

```text
min-height: 100vh
```

Hero ưu tiên:

- screenshot ứng dụng;
- mockup điện thoại;
- hình ảnh UI Kokoro thật.

Không dùng stock photo làm visual chính.

## Copy đề xuất

Headline:

> **GHI LẠI ĐIỀU TRONG LÒNG.**

Subheadline:

> Một dòng cũng được. Đây là nơi của bạn.

Mô tả ngắn:

> Một không gian riêng tư để ghi lại cảm xúc, nhìn lại những ngày đã qua và giữ lấy những điều bạn không muốn quên.

CTA:

```text
Download APK
```

Secondary text nhỏ:

```text
Android • APK
```

Không cần nhiều CTA ngang hàng.

---

# SECTION 02 — JOURNAL

## Headline

> **Không cần viết hoàn hảo.**

Subline:

> Chỉ cần thành thật với chính mình.

Mô tả:

> Ghi lại một suy nghĩ, một cảm xúc, một sự kiện — hoặc chỉ một câu bạn muốn giữ lại hôm nay.

## Visual

Dùng screenshot Journal thật của Kokoro.

Layout desktop:

```text
50% screenshot
50% text
```

Mobile:

```text
text
↓
screenshot
```

Hoặc đảo chiều nếu nhìn đẹp hơn.

---

# SECTION 03 — MOOD

## Headline

> **Hôm nay bạn cảm thấy thế nào?**

Subline:

> Không cần giải thích ngay. Chỉ cần bắt đầu bằng một cảm xúc.

## Visual

Hiển thị:

- UI mood picker;
- các biểu tượng mood của Kokoro;
- animation tap nhẹ nếu phù hợp.

Motion phải tinh tế.

Không bounce mạnh.

Không gamification.

---

# SECTION 04 — CALENDAR / MEMORY

Đây là một trong những section quan trọng nhất.

## Headline

> **Nhìn lại mình qua từng ngày.**

Subline:

> Một ngày. Một cảm xúc. Một câu chuyện.

Hoặc:

> Những ngày tưởng như bình thường rồi cũng trở thành ký ức.

## Visual

Dùng screenshot Calendar lớn.

Cho screenshot có nhiều ngày chứa:

- mood;
- ảnh;
- entry;
- preview nhẹ.

Không biến calendar thành dashboard analytics.

Không thêm:

- điểm mood tổng hợp;
- chart sức khỏe tâm lý;
- score tốt/xấu;
- leaderboard.

---

# SECTION 05 — MEMORY / PHOTO / VOICE

## Headline

> **Không phải mọi ký ức đều cần được viết.**

Mô tả:

> Giữ lại một bức ảnh, một đoạn ghi âm, hoặc một khoảnh khắc nhỏ gắn với ngày hôm đó.

## Visual

Dùng UI entry gồm:

```text
Mood
Photo
Note
Voice playback
```

Có thể dùng layout dạng floating cards nhẹ, nhưng phải giữ tone diary.

---

# SECTION 06 — GROUP

Đây là section truyền thông về điểm khác biệt của Kokoro.

## Headline chính

> **Viết cho riêng bạn.**

Sau đó:

> **Chia sẻ khi bạn sẵn sàng.**

Subline:

> Không phải mọi điều đều cần được chia sẻ. Nhưng đôi khi, một người đồng hành là đủ.

## Visual

Hiển thị UI Group.

Nếu có thể, tạo storytelling:

```text
Only Me
↓
Share to Group
```

Tạo cảm giác:

> **Private by default. Social by choice.**

Không truyền thông Group như mạng xã hội.

Không tạo public feed.

Không tạo follower/following.

Không tạo leaderboard.

---

# SECTION 07 — LIGHT / DARK MODE

## Headline

> **Không gian của bạn. Theo cách của bạn.**

Layout desktop:

```text
┌──────────────────────┬──────────────────────┐
│                      │                      │
│     LIGHT MODE       │      DARK MODE       │
│                      │                      │
│       PHONE          │        PHONE         │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

Có thể làm effect chuyển từ light sang dark khi scroll.

Tuy nhiên:

- hiệu ứng không được gây lag;
- không làm khó accessibility;
- phải fallback tốt khi JS disabled;
- không dùng shader/WebGL chỉ để trang trí.

---

# SECTION 08 — EMOTIONAL BRANDING

Đây là section chỉ dùng typography + whitespace.

Không cần screenshot.

Background giống trang giấy.

Text xuất hiện tuần tự khi scroll:

> **Có những ngày bạn không muốn kể với ai.**

Tiếp:

> **Chỉ muốn giữ lại một dòng.**

Tiếp:

> **Một cảm xúc.**

Tiếp:

> **Rồi gập sổ lại.**

Kết:

> Không cần giải thích.  
> Không cần hoàn hảo.  
> Chỉ cần thành thật với chính mình.

Section này phải có rất nhiều khoảng thở.

Không đặt card.

Không đặt icon thừa.

Không đặt button giữa mỗi câu.

---

# SECTION 09 — FINAL DOWNLOAD

Full viewport hoặc gần full viewport.

## Nội dung

Logo / chữ:

```text
心
KOKORO
```

Headline:

> **Giữ lại hôm nay cho riêng bạn.**

Hoặc:

> **Bắt đầu trang đầu tiên cùng Kokoro.**

CTA lớn:

```text
Download APK
```

Text nhỏ:

```text
Android • APK
```

Có thể thêm QR code dẫn trực tiếp đến URL APK.

QR code nên được generate trong build hoặc tạo asset tĩnh.

Không phụ thuộc API QR bên ngoài nếu không cần.

---

# 9. Footer

Footer tối giản.

Ví dụ:

```text
KOKORO

A quiet place for your thoughts.

GitHub
Privacy
Version / Beta
© 2026 Kokoro
```

Không thêm newsletter.

Không thêm form contact phức tạp nếu chưa cần.

---

# 10. Animation & interaction

Animation là supporting layer, không phải feature chính.

Được phép:

- fade in;
- translateY nhẹ;
- scale 0.98 → 1;
- parallax rất nhẹ;
- image reveal;
- section transition;
- navbar opacity change khi scroll;
- screenshot floating 4–8px.

Không dùng:

- confetti;
- particle system;
- animation liên tục gây distraction;
- bouncing CTA;
- loading animation dài;
- scroll hijacking mạnh;
- custom cursor;
- WebGL nặng;
- horizontal scroll bắt buộc trên mobile.

---

# 11. Scroll behavior

Không khóa scroll.

Không thay đổi tốc độ cuộn trình duyệt.

Không bắt user scroll theo snap cứng.

Nếu dùng `scroll-snap`, chỉ dùng dạng nhẹ và phải đảm bảo:

- mobile usable;
- trackpad usable;
- accessibility tốt.

Ưu tiên native scrolling.

---

# 12. Responsive

Website phải được thiết kế cho ít nhất:

```text
Desktop >= 1200px
Laptop 992–1199px
Tablet 768–991px
Mobile <= 767px
Small mobile <= 390px
```

## Mobile navbar

```text
KOKORO                     Download
```

Không để button quá rộng.

Navbar mobile vẫn floating/fixed.

## Mobile section

- text căn trái hoặc center tùy section;
- screenshot không tràn viewport;
- không dùng fixed height gây cắt nội dung;
- không có horizontal overflow.

---

# 13. Accessibility

Bắt buộc:

- semantic HTML;
- `alt` cho image;
- contrast đủ đọc;
- focus state cho button/link;
- keyboard navigation;
- `aria-label` khi cần;
- respect:

```css
@media (prefers-reduced-motion: reduce)
```

Khi reduced motion:

- tắt parallax;
- tắt animation scroll phức tạp;
- giữ nội dung hiển thị đầy đủ.

---

# 14. Performance

Mục tiêu:

- First load nhanh;
- không dùng asset quá lớn;
- tối ưu ảnh;
- dùng WebP/AVIF nếu phù hợp;
- lazy-load ảnh dưới fold;
- preload chỉ asset hero cần thiết;
- JavaScript càng ít càng tốt.

Không load toàn bộ screenshot full-resolution ngay từ đầu.

Dùng:

```html
loading="lazy"
```

cho ảnh dưới Hero.

Mục tiêu Lighthouse:

```text
Performance >= 90
Accessibility >= 90
Best Practices >= 90
SEO >= 90
```

Nếu không đạt, Agent phải tối ưu trước khi kết thúc.

---

# 15. SEO cơ bản

Thêm:

```html
<title>Kokoro — Ghi lại điều trong lòng</title>
```

Meta description:

> Kokoro là một không gian nhật ký riêng tư để ghi lại cảm xúc, nhìn lại những ngày đã qua và đồng hành cùng những người bạn chọn.

Thêm:

- Open Graph;
- favicon;
- canonical URL nếu biết domain;
- theme-color;
- viewport;
- structured metadata ở mức cần thiết.

Không keyword stuffing.

---

# 16. GitHub Pages

Website phải deploy được bằng GitHub Pages.

Nếu dùng HTML/CSS/JS thuần:

- có thể deploy trực tiếp từ branch;
- hoặc dùng GitHub Actions.

Nếu dùng build tool:

- phải tạo workflow GitHub Actions;
- output đúng thư mục static;
- base path phải hoạt động trong GitHub Pages project repository.

Đặc biệt kiểm tra trường hợp URL dạng:

```text
https://username.github.io/repository-name/
```

Không giả định site luôn nằm ở `/`.

---

# 17. README

Tạo README.md gồm:

1. Giới thiệu website.
2. Cách chạy local.
3. Cách đổi URL APK.
4. Cách thay screenshot.
5. Cách deploy GitHub Pages.
6. Cấu trúc project.
7. Các file quan trọng.

Ví dụ phần đổi APK:

```text
scripts/config.js
```

Chỉ sửa:

```js
APK_URL
```

Không cần tìm kiếm toàn project.

---

# 18. Nội dung chữ chính

Ưu tiên sử dụng các câu sau:

## Hero

> **Ghi lại điều trong lòng.**

> Một dòng cũng được. Đây là nơi của bạn.

## Journal

> **Không cần viết hoàn hảo.**

> Chỉ cần thành thật với chính mình.

## Mood

> **Hôm nay bạn cảm thấy thế nào?**

> Không cần giải thích ngay. Chỉ cần bắt đầu bằng một cảm xúc.

## Calendar

> **Nhìn lại mình qua từng ngày.**

> Một ngày. Một cảm xúc. Một câu chuyện.

## Group

> **Viết cho riêng bạn. Chia sẻ khi bạn sẵn sàng.**

## Brand

> **Góc nhỏ cho cảm xúc, cộng đồng cho hành trình.**

## Final CTA

> **Bắt đầu trang đầu tiên cùng Kokoro.**

---

# 19. Nguyên tắc copywriting

Copy phải:

- ngắn;
- tử tế;
- nhẹ;
- không ra lệnh;
- không gây guilt;
- không nói quá;
- không clinical;
- không dùng claim y tế.

Ưu tiên cách nói:

```text
Bạn có thể...
Khi bạn sẵn sàng...
Một dòng cũng được...
Giữ lại...
Nhìn lại...
```

Tránh:

```text
Bạn phải...
Đừng bỏ lỡ...
Bạn chưa hoàn thành...
Tăng năng suất...
Chữa lành hoàn toàn...
Điều trị...
Chẩn đoán...
```

---

# 20. Privacy message

Website phải truyền tải rõ tinh thần:

> **Private by default.**

Không cần làm legal privacy page hoàn chỉnh nếu chưa có nội dung chính thức, nhưng không được viết claim kỹ thuật mà project chưa chứng minh.

Không tự bịa:

- end-to-end encryption;
- zero knowledge;
- GDPR compliance;
- encryption-at-rest;
- anonymous storage;
- medical-grade privacy.

Chỉ dùng ngôn ngữ sản phẩm ở mức an toàn:

> Kokoro được thiết kế để trải nghiệm cá nhân là trung tâm, và việc chia sẻ chỉ xảy ra khi người dùng chủ động chọn.

---

# 21. Asset strategy

Ưu tiên asset thật của Kokoro.

Thứ tự ưu tiên:

1. Screenshot thật từ app.
2. Logo thật.
3. UI mockup tạo từ screenshot thật.
4. Illustration đơn giản nếu thiếu asset.
5. Photography chỉ dùng phụ trợ.

Không dùng mockup giả làm sai UI app.

Không redesign screenshot trong website nếu không được yêu cầu.

---

# 22. Navbar scroll state

Có thể tạo 2 trạng thái:

## Default

```text
paper background + blur
```

## Khi scroll

- shadow tăng rất nhẹ;
- background opaque hơn một chút;
- kích thước giảm 2–4px nếu cần.

Không làm navbar biến mất hoàn toàn.

CTA Download phải luôn visible.

---

# 23. Download behavior

Mọi button Download:

```text
Download APK
```

dẫn trực tiếp tới:

```text
https://expo.dev/artifacts/eas/-xbuwOQcpUbGZxu_1Ld7tt-2FCEc5HqxX0aTx8n8aHI.apk
```

Không redirect qua trang trung gian.

Không yêu cầu tài khoản.

Nếu trình duyệt tải trực tiếp được thì để trình duyệt xử lý native.

Có thể thêm event analytics hook dạng placeholder, nhưng không tích hợp analytics nếu chưa được yêu cầu.

---

# 24. Progressive enhancement

Website phải vẫn đọc được nếu JavaScript lỗi.

JS chỉ dùng cho:

- reveal animation;
- navbar scroll state;
- light/dark visual transition;
- mobile interactions.

Không dùng JS để render toàn bộ nội dung nếu không cần.

Core content phải có sẵn trong HTML.

---

# 25. Error prevention

Agent phải kiểm tra:

- không có broken link;
- không có hình 404;
- không có horizontal overflow;
- navbar không che Hero;
- button Download hoạt động;
- QR code đúng URL;
- mobile không bị text overflow;
- GitHub Pages path đúng;
- console không có error;
- favicon hoạt động;
- meta tags tồn tại;
- alt text đầy đủ.

---

# 26. Acceptance Criteria

Chỉ coi task hoàn thành khi toàn bộ điều kiện dưới đây đạt.

## Functional

- [ ] Website chạy local.
- [ ] Website build/deploy được GitHub Pages.
- [ ] Navbar fixed và luôn visible.
- [ ] Có nút Download trên navbar.
- [ ] Nút Download hoạt động.
- [ ] URL APK được quản lý tập trung.
- [ ] Có Hero.
- [ ] Có Journal section.
- [ ] Có Mood section.
- [ ] Có Calendar section.
- [ ] Có Memory/Media section.
- [ ] Có Group section.
- [ ] Có Light/Dark section.
- [ ] Có Emotional branding section.
- [ ] Có Final Download section.
- [ ] Có Footer.

## Visual

- [ ] Nền trắng ngà / paper.
- [ ] Không giống clone Starlink.
- [ ] Không giống SaaS dashboard.
- [ ] Whitespace rõ.
- [ ] Một message chính trên mỗi section.
- [ ] Screenshot app là visual trọng tâm.
- [ ] Mobile đẹp và không bị cắt UI.

## UX

- [ ] CTA Download luôn dễ tìm.
- [ ] Không có nhiều CTA ngang hàng.
- [ ] Không có scroll hijacking.
- [ ] Motion nhẹ.
- [ ] Reduced motion hoạt động.
- [ ] Keyboard navigation hoạt động.

## Technical

- [ ] Không console error.
- [ ] Không broken asset.
- [ ] Không broken link.
- [ ] Không hard-code APK URL ở nhiều file.
- [ ] Static deploy.
- [ ] README đầy đủ.
- [ ] Lighthouse mục tiêu >= 90 cho 4 nhóm chính.

---

# 27. Workflow Agent phải thực hiện

## Bước 1 — Audit

Trước khi sửa code:

1. Đọc toàn bộ project.
2. Xác định stack hiện tại.
3. Xác định asset đã có.
4. Xác định screenshot Kokoro đã có.
5. Không phá cấu trúc project nếu không cần.

## Bước 2 — Plan

Đưa ra plan ngắn:

```text
- structure
- sections
- components
- assets
- responsive strategy
- deploy strategy
```

Sau đó bắt đầu triển khai.

Không dừng chỉ để xin xác nhận nếu yêu cầu đã đủ rõ.

## Bước 3 — Build

Build từng phần:

```text
Navbar
Hero
Journal
Mood
Calendar
Memory
Group
Theme
Emotional
Download
Footer
```

## Bước 4 — Responsive

Kiểm tra:

```text
1440px
1024px
768px
430px
390px
360px
```

## Bước 5 — Test

Test:

- URL Download;
- fixed navbar;
- mobile;
- accessibility;
- console;
- build;
- GitHub Pages.

## Bước 6 — Polish

Chỉ sau khi chức năng ổn định mới thêm:

- reveal animations;
- small hover;
- subtle transitions;
- paper texture.

---

# 28. Điều kiện dừng của Agent

Không dừng khi:

- mới tạo layout skeleton;
- mới tạo Hero;
- mới viết CSS;
- chưa responsive;
- chưa test link APK;
- chưa deploy-ready;
- còn console error;
- còn placeholder không cần thiết.

Chỉ dừng khi:

1. Website hoàn chỉnh.
2. Có đầy đủ các section bắt buộc.
3. Responsive hoàn chỉnh.
4. Download APK hoạt động.
5. Navbar fixed hoạt động.
6. Build không lỗi.
7. GitHub Pages deploy-ready.
8. README hoàn chỉnh.
9. Không còn lỗi console.
10. Agent đã tự review UI/UX một lần cuối.

---

# 29. Không được tự ý thay đổi scope

Không tự thêm:

- login;
- register;
- user account;
- backend;
- newsletter;
- shop;
- pricing;
- subscription;
- blog CMS;
- public community;
- app store badges nếu app chưa có trên Play Store/App Store.

Hiện tại chỉ có:

```text
Android APK direct download
```

Vì vậy không hiển thị:

```text
Get it on Google Play
Download on the App Store
```

nếu chưa có link thật.

---

# 30. Output cuối cùng Agent phải báo cáo

Sau khi hoàn thành, trả về:

```text
1. Những file đã tạo/sửa
2. Cấu trúc website
3. Các section đã hoàn thành
4. Cách thay APK URL
5. Cách chạy local
6. Cách deploy GitHub Pages
7. Các breakpoint đã test
8. Kết quả kiểm tra lỗi
9. Các asset còn thiếu nếu có
10. Những điểm cần Product Owner bổ sung sau này
```

Không chỉ trả về:

> Done.

Phải cung cấp report ngắn nhưng đủ để tiếp tục maintain project.

---

# 31. Tóm tắt định hướng

Website Kokoro cần đạt cảm giác:

```text
Starlink-style storytelling
        ×
Japanese diary / notebook
        ×
Kokoro UI
```

Nhưng thương hiệu cuối cùng phải hoàn toàn là Kokoro:

```text
Off-white
Paper
Memory
Emotion
Privacy
Reflection
Small groups
Calm motion
Large whitespace
```

Nguyên tắc quan trọng nhất:

> **Một màn hình — một thông điệp.**

Và mục tiêu cuối cùng:

> **Người dùng hiểu Kokoro, cảm thấy muốn trải nghiệm, và luôn có thể tải APK chỉ bằng một nút rõ ràng.**
