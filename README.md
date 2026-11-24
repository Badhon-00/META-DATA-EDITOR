# META DATA EDITOR

A browser-first media metadata and Unicode workbench built with Next.js 14, TypeScript and React. The application uses a restrained white / charcoal interface and performs supported media edits locally in the browser.

## Features

- JPEG EXIF metadata read/write
- PNG `tEXt` metadata read/write
- WebP XMP metadata read/write
- GIF comment metadata read/write while preserving image blocks
- Animated GIF creation from selected image frames
- Sticker metadata embedding in PNG and WebP
- Unicode variation-selector message encoder and decoder
- Emoji mixing integration
- Universal metadata and carrier decoder

## Run locally

```bash
npm install
npm run dev
```

## Validate and build

```bash
npm run lint
npm test
npm run build
```

## Format support and limitations

| Format | Read / Write | Notes |
|---|---|---|
| JPEG | Selected EXIF fields | Uses piexifjs; not a full ExifTool replacement. |
| PNG | `tEXt` chunks | Existing chunks are preserved. |
| WebP | XMP chunk | Extended VP8X container required. |
| GIF | Comment extensions | Existing image/frame data is retained. |
| GIF creation | Animated GIF | Local frame encoding; palette is limited per frame. |
| Stickers | PNG/WebP metadata | Generic metadata, not a proprietary Telegram or WhatsApp pack database. |
| Emoji carrier | Variation selectors | Obfuscation, not encryption; apps may strip invisible characters. |

Metadata may be removed by social and messaging platforms during upload or recompression. Emoji mixing requires network access to fetch upstream image assets.

## Privacy

Media editing workflows run in the browser; files are not uploaded to this application's server. Emoji mixing accesses upstream image assets. Do not use variation selectors as a substitute for encryption or access control.

## Third-party notices

The emoji encoder license is retained in `LICENSE-EMOJI-ENCODER`. The emoji-mixer license is retained in `lib/emoji-mixer/LICENSE`.