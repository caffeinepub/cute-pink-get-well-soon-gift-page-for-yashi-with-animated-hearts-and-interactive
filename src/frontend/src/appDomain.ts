/**
 * App domain configuration and validation
 * Single source of truth for the app/domain name
 */

export const APP_DOMAIN = "Cutiepie";

/**
 * Validates domain name according to rules:
 * - Must be between 5 and 50 characters
 * - Can only contain letters, numbers, and hyphens
 * - No underscores allowed
 */
export function validateDomain(domain: string): { valid: boolean; error?: string } {
  if (domain.length < 5 || domain.length > 50) {
    return {
      valid: false,
      error: `Domain must be between 5 and 50 characters (current: ${domain.length})`,
    };
  }

  const validPattern = /^[a-zA-Z0-9-]+$/;
  if (!validPattern.test(domain)) {
    return {
      valid: false,
      error: "Domain must contain only letters, numbers, and hyphens (no underscores or special characters)",
    };
  }

  return { valid: true };
}
