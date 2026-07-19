// CSSファイルのimport(Web版コンポーネント用)をTypeScriptに認識させる
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
