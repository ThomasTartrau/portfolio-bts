# 📱 Installation de l'application Android (Tauri v2)

## ✅ Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (v18+ recommandé)
- Rust (`curl https://sh.rustup.rs -sSf | sh`)
- Tauri CLI (`cargo install tauri-cli`)
- Android Studio (avec Android SDK, NDK et outils de build)

## 🛠 Étapes d'installation

### 1. Installer les dépendances

```bash
pnpm install
```

### 2. Lancer le build Android

Pour générer un APK compatible avec toutes les architectures Android :

```bash
tauri android build --apk --split-per-abi
```

Cela générera plusieurs APKs dans :

```
src-tauri/gen/android/app/build/outputs/apk/release/
```

Exemple :
- `app-arm64-v8a-release.apk`
- `app-x86_64-release.apk`
- etc.

### 3. Installer l'APK sur un appareil

Branchez votre appareil Android en USB avec le débogage activé, puis :

```bash
adb install -r src-tauri/gen/android/app/build/outputs/apk/release/app-arm64-v8a-release.apk
```

### 4. Le lancer en mode développeur

```bash
pnpm tauri android dev
```

Et voilà, vous pouvez lancer l'application en mode développeur :)