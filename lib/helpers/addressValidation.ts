/**
 * Validates an Ethereum/EVM address
 * EVM addresses are 42 characters long (0x + 40 hex characters)
 */
export function isValidEVMAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Validates a Stellar address (account or contract)
 * Stellar addresses are 56 characters long, use Base32 encoding (A-Z, 2-7)
 * Account addresses start with 'G', contract addresses start with 'C'
 */
export function isValidStellarAddress(address: string): boolean {
  // Base32 alphabet for Stellar (excludes 0, 1, 8, 9 to avoid confusion)
  return /^[GC][A-Z2-7]{55}$/.test(address);
}

/**
 * Validates an address based on the network type
 */
export function validateAddressForNetworkType(
  address: string,
  networkType: "EVM" | "Stellar"
): boolean {
  if (networkType === "EVM") {
    return isValidEVMAddress(address);
  } else if (networkType === "Stellar") {
    return isValidStellarAddress(address);
  }
  return false;
}

/**
 * Validates an address for multiple network types
 * Returns true if the address is valid for at least one of the network types
 */
export function validateAddressForNetworkTypes(
  address: string,
  networkTypes: ("EVM" | "Stellar")[]
): boolean {
  return networkTypes.some((type) => validateAddressForNetworkType(address, type));
}

/**
 * Gets a descriptive error message for invalid addresses
 */
export function getAddressValidationError(
  address: string,
  networkTypes: ("EVM" | "Stellar")[]
): string | null {
  if (!address || address.trim() === "") {
    return "Address is required";
  }

  const hasEVM = networkTypes.includes("EVM");
  const hasStellar = networkTypes.includes("Stellar");

  if (hasEVM && hasStellar) {
    if (!validateAddressForNetworkTypes(address, networkTypes)) {
      return `Invalid address format. Expected EVM format (0x + 40 hex chars) or Stellar format (56 chars starting with G or C)`;
    }
  } else if (hasEVM) {
    if (!isValidEVMAddress(address)) {
      return `Invalid EVM address format. Expected: 0x followed by 40 hexadecimal characters`;
    }
  } else if (hasStellar) {
    if (!isValidStellarAddress(address)) {
      return `Invalid Stellar address format. Expected: 56 characters starting with G (account) or C (contract)`;
    }
  }

  return null;
}