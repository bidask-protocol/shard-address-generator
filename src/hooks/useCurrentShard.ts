import { Address } from "@ton/ton";
import { useCallback, useEffect, useState } from "react";

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

export function useCurrentShard(address: string, numBits: number) {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [wantedBits, setWantedBits] = useState<string>("");

  const validateAddress = useCallback(() => {
    const isAddressFriendly = Address.isFriendly(address);
    setIsEmpty(isAddressFriendly);

    if (isAddressFriendly) {
      const addressRaw = Address.parse(address).toRawString();
      const bits = getFirstNBits(addressRaw, numBits);
      setWantedBits(bits);
    } else {
      setWantedBits("");
    }
  }, [address, numBits]);

  useEffect(() => {
    if (address) {
      validateAddress();
    } else {
      setIsEmpty(true);
    }
  }, [address, validateAddress]);

  return { isEmpty, wantedBits };
}
