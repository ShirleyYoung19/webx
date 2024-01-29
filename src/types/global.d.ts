declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare const __DEV__: boolean;
