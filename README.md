# LVDS Academy Download Page

A Next.js app that provides a download page for the LVDS Academy mobile APK.

## Features

- 🚀 Auto-download on page load
- 📱 Manual download button
- 💫 Beautiful UI with animations
- 📋 Installation instructions
- 🌓 Dark mode support

## APK Location

The APK file should be placed in the `public` folder:
```
apps/download-app/public/lvds.apk
```

✅ **Status**: `lvds.apk` is already in place!

## Development

```bash
cd apps/download-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the download page.

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy!

Your download page will be available at: `https://your-app.vercel.app`

### Option 2: Netlify

1. Build the app: `npm run build`
2. Deploy the `out` folder to Netlify

### Option 3: Custom Server

1. Build: `npm run build`
2. Start: `npm start`

## How It Works

1. **User visits the page**: The APK download starts automatically
2. **Backup button**: If auto-download fails, users can click the "Download APK" button
3. **Instructions**: Clear installation steps are provided

## Updating the APK

To update the APK file:

1. Replace `public/lvds.apk` with your new APK
2. Commit and push to trigger deployment
3. Users will get the latest version!

## File Structure

```
download-app/
├── app/
│   ├── page.tsx          # Main download page
│   ├── layout.tsx        # App layout with metadata
│   └── globals.css       # Global styles
├── public/
│   └── lvds.apk          # ✅ Your APK file (✨ Already here!)
└── package.json
```

## Environment

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## Support

For issues or questions, contact the LVDS Academy team.
