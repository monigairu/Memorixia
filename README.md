# Memorixia

おでかけ記録×育成アプリ(仮称)。行った場所を「その場で撮った写真+タグ+メモ」で記録すると、キャラクターが仲間になり育っていく。

## 構成

| パス | 内容 |
|---|---|
| `docs/` | 設計書一式(要件・DB・画面・キャラ・マイルストーン) |
| `app/` | Expo(React Native)アプリ本体 |
| `supabase/` | DBマイグレーション・Edge Functions・テスト(M0で作成予定) |

設計の起点は [docs/REQUIREMENT.md](docs/REQUIREMENT.md)、開発計画は [docs/MILESTONE.md](docs/MILESTONE.md)。

## アプリの起動

react-native-maps を使うため Expo Go では動かない。dev build(expo-dev-client)前提。

```bash
cd app
npm install
npx expo run:android   # または npx expo run:ios(macOSのみ)
```
