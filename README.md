# Kokoro Landing Page

Landing page tĩnh giới thiệu Kokoro — một không gian nhật ký riêng tư để **ghi lại, nhìn lại và đồng hành**. Website ưu tiên trải nghiệm nhẹ, dễ đọc, responsive và có thể deploy trực tiếp bằng GitHub Pages.

## Chạy local

Website chỉ dùng HTML, CSS và JavaScript thuần. Có thể mở `index.html` trực tiếp hoặc chạy một static server:

```powershell
python -m http.server 8080
```

Sau đó truy cập `http://localhost:8080`.

## Thay URL APK

Mở `scripts/config.js` và chỉ sửa giá trị `APK_URL`:

```js
window.KOKORO_CONFIG = Object.freeze({
  APK_URL: "https://example.com/kokoro.apk",
});
```

Tất cả nút Download trên website tự động lấy URL từ cấu hình này.

## Thay screenshot ứng dụng

Hiện website dùng các mô phỏng UI bằng HTML/CSS vì workspace chưa có screenshot thật của Kokoro. Khi có asset chính thức:

1. Tối ưu ảnh sang WebP hoặc AVIF.
2. Đặt ảnh trong `assets/screenshots/`.
3. Thay khối mô phỏng tương ứng trong `index.html` bằng thẻ `<picture>` hoặc `<img>`.
4. Dùng `loading="lazy"` cho mọi ảnh dưới Hero và thêm `alt` mô tả đúng nội dung.
5. Giữ khung ảnh responsive, tránh đặt chiều cao cố định trên mobile.

## Deploy GitHub Pages

Workflow `.github/workflows/pages.yml` deploy toàn bộ static site khi có thay đổi được đẩy lên nhánh `main`.

1. Đẩy repository lên GitHub.
2. Vào **Settings → Pages**.
3. Chọn **Source: GitHub Actions**.
4. Push lên `main` hoặc chạy workflow thủ công.

Tất cả đường dẫn asset đều là đường dẫn tương đối nên website hoạt động ở URL dạng `https://username.github.io/repository-name/`.

## Cấu trúc project

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
│   └── logo/
│       └── kokoro-mark.svg
├── update_new/
│   └── KOKORO_STATIC_WEBSITE_AGENT_PROMPT.md
├── KOKORO_DEEP_PRODUCT_ANALYSIS.md
├── README.md
└── .github/
    └── workflows/
        └── pages.yml
```

## Các file quan trọng

- `index.html`: cấu trúc semantic và toàn bộ nội dung landing page.
- `styles/main.css`: design system, layout desktop và các component.
- `styles/responsive.css`: breakpoint laptop, tablet và mobile.
- `scripts/config.js`: URL APK tập trung.
- `scripts/main.js`: navbar state, reveal animation, mood interaction và năm footer.
- `.github/workflows/pages.yml`: cấu hình deploy GitHub Pages.

## Nguyên tắc bảo trì

- Không hard-code URL APK ngoài `scripts/config.js`.
- Không thêm claim y tế, điều trị hoặc bảo mật kỹ thuật chưa được xác minh.
- Journal luôn là trọng tâm; mood là cửa vào và group là lựa chọn chủ động.
- Mọi feature mới nên phục vụ ít nhất một trong ba trục: **ghi lại — nhìn lại — đồng hành**.
