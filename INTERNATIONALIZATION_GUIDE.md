# Hướng dẫn sử dụng hệ thống đa ngôn ngữ (Internationalization Guide)

Project này đã được thiết lập để hỗ trợ đa ngôn ngữ sử dụng **next-intl**. Hiện tại hỗ trợ tiếng Việt (vi) và tiếng Nhật (ja).

## Cấu trúc thư mục

```
src/
├── app/
│   ├── [locale]/           # Dynamic locale routing
│   │   ├── layout.tsx      # Layout cho mỗi locale
│   │   └── page.tsx        # Trang chính
│   └── layout.tsx          # Root layout (redirect to default locale)
├── components/
│   └── LanguageSwitcher/   # Component chuyển đổi ngôn ngữ
├── hooks/
│   └── useTranslations.ts  # Custom hooks cho translations
├── i18n/
│   └── request.ts          # Cấu hình i18n
├── middleware.ts           # Middleware xử lý routing
└── messages/               # Thư mục chứa file translations (ở root level)
    ├── vi.json             # Translations tiếng Việt
    └── ja.json             # Translations tiếng Nhật
```

## Cách sử dụng

### 1. Thêm translations mới

Thêm key-value vào file `messages/vi.json` và `messages/ja.json`:

```json
// messages/vi.json
{
  "welcome": "Chào mừng",
  "button": {
    "click": "Nhấp vào đây"
  }
}

// messages/ja.json
{
  "welcome": "いらっしゃいませ",
  "button": {
    "click": "ここをクリック"
  }
}
```

### 2. Sử dụng trong component

```tsx
// Client component
'use client';
import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button>{t('button.click')}</button>
    </div>
  );
}
```

```tsx
// Server component
import { getTranslations } from 'next-intl/server';

export default async function MyServerComponent() {
  const t = await getTranslations();
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
    </div>
  );
}
```

### 3. Sử dụng custom hooks

```tsx
import { useNavigation, useContact } from '@/hooks/useTranslations';

export function NavigationComponent() {
  const navT = useNavigation();
  const contactT = useContact();
  
  return (
    <nav>
      <a href="/">{navT('home')}</a>
      <a href="/contact">{contactT('title')}</a>
    </nav>
  );
}
```

### 4. Language Switcher

Component `LanguageSwitcher` đã được tích hợp sẵn và có thể sử dụng ở bất kỳ đâu:

```tsx
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export function Header() {
  return (
    <header>
      <LanguageSwitcher />
    </header>
  );
}
```

## URL Structure

- Tiếng Việt (default): `/` hoặc `/vi`
- Tiếng Nhật: `/ja`
- Với sub-pages: `/vi/about`, `/ja/about`

## Thêm ngôn ngữ mới

1. Thêm locale vào `src/i18n/request.ts`:
```ts
export const locales = ['vi', 'ja', 'en'] as const;
```

2. Cập nhật middleware pattern trong `src/middleware.ts`:
```ts
matcher: ['/', '/(vi|ja|en)/:path*']
```

3. Tạo file translation mới: `messages/en.json`

4. Thêm vào `LanguageSwitcher`:
```ts
const languages = [
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];
```

## Best Practices

1. **Namespace organization**: Tổ chức translations theo namespace
```json
{
  "navigation": {
    "home": "Trang chủ",
    "about": "Giới thiệu"
  },
  "forms": {
    "submit": "Gửi",
    "cancel": "Hủy"
  }
}
```

2. **Sử dụng namespace hooks**:
```tsx
import { useNavigation } from '@/hooks/useTranslations';
const navT = useNavigation(); // Chỉ access namespace 'navigation'
```

3. **Server components**: Sử dụng `getTranslations` từ `next-intl/server`

4. **Client components**: Sử dụng `useTranslations` từ `next-intl`

## Troubleshooting

### 1. Component không re-render khi đổi ngôn ngữ
- Đảm bảo component được wrap trong `NextIntlClientProvider`
- Sử dụng đúng hook cho client/server components

### 2. Translations không load
- Kiểm tra file JSON có đúng format không
- Đảm bảo locale path đúng trong import dynamic

### 3. Type errors
- Đảm bảo locale types được define đúng trong `i18n.ts`
- Sử dụng `typeof locales[number]` thay vì `any`

## Commands

```bash
# Chạy development server
npm run dev

# Build project
npm run build

# Type check
npm run type-check
``` 