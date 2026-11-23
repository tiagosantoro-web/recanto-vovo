/** Caminho de um arquivo em /public, com o prefixo do site quando publicado em subpasta. */
export function publicPath(src: string): string {
  return src.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}` : src;
}
