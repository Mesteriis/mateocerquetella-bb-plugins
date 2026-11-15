/** Connect accepts registered machine IDs independently of their display names. */
export function resolveSteelHost(configured: string | undefined, systemHostname: string): string {
  return configured?.trim() || systemHostname;
}
