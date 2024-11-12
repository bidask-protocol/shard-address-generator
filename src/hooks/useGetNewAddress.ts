import { useState, useCallback } from "react";
import { mnemonicNew, mnemonicToPrivateKey } from "@ton/crypto";
import { WalletContractV5R1 } from "@ton/ton";

interface GeneratedAddress {
  seed: string;
  address: string;
}

interface UseAddressGeneratorReturn {
  generateAddress: () => Promise<void>;
  trueAttempts: number;
  falseAttempts: number;
  lastGenerated: GeneratedAddress | null;
  isLoading: boolean;
}

function getFirstNBits(address: string, numBits: number): string {
  let hexAddress = address.split(":")[1];
  if (!hexAddress) {
    return "";
  }
  let binaryAddress = BigInt("0x" + hexAddress)
    .toString(2)
    .padStart(256, "0");
  return binaryAddress.slice(0, numBits);
}

export function useAddressGenerator(
  wantedBits: string,
  estimatedBits: number
): UseAddressGeneratorReturn {
  const [trueAttempts, setTrueAttempts] = useState(0);
  const [falseAttempts, setFalseAttempts] = useState(0);
  const [generatedAddress, setGeneratedAddress] =
    useState<GeneratedAddress | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const getNewAddress = useCallback(async (): Promise<GeneratedAddress> => {
    const mnemonics = await mnemonicNew();
    const key = await mnemonicToPrivateKey(mnemonics);
    const wallet = WalletContractV5R1.create({
      publicKey: key.publicKey,
      workchain: 0,
    });
    const address = wallet.address.toRawString();
    return { seed: mnemonics.join(" "), address };
  }, []);

  const generateAddress = useCallback(async () => {
    setIsLoading(true);
    const generated = await getNewAddress();
    if (wantedBits === getFirstNBits(generated.address, estimatedBits)) {
      setTrueAttempts((prev) => prev + 1);
      setIsLoading(false);
      setGeneratedAddress(generated);
      return;
    } else {
      setFalseAttempts((prev) => prev + 1);
      generateAddress();
    }
  }, [getNewAddress, wantedBits, estimatedBits, trueAttempts, falseAttempts]);

  return {
    generateAddress,
    trueAttempts,
    falseAttempts,
    lastGenerated: generatedAddress,
    isLoading,
  };
}
