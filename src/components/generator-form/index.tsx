import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { Button, InfoItem, Input } from "@src/components";
import { useAddressGenerator, useCurrentShard } from "@src/hooks";
import { Container, Form } from "./styles";

export const GeneratorForm: React.FC = () => {
  const estimatedBits = 4;
  const { control, watch } = useForm<{ address: string }>({
    defaultValues: { address: "" },
  });

  const typedAddress = watch("address");

  const { isEmpty, wantedBits } = useCurrentShard(typedAddress, estimatedBits);

  const { generateAddress, lastGenerated, isLoading } = useAddressGenerator(
    wantedBits,
    estimatedBits
  );

  return (
    <Container>
      <Typography variant="h3" p={3}>
        Generate wallet with specific shard
      </Typography>
      <Form>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Input type="text" placeholder="Enter address" {...field} />
          )}
        />
        <Button
          label="Generate Address"
          fullWidth
          disabled={!isEmpty || !typedAddress.length}
          onClick={generateAddress}
          isLoading={isLoading}
        />

        {!isEmpty ? (
          <p style={{ color: "red" }}>Address is invalid! Please try again.</p>
        ) : (
          !!wantedBits && <InfoItem title="Current shard" value={wantedBits} />
        )}

        {lastGenerated && (
          <>
            <InfoItem title="Address" value={lastGenerated.address} />
            <InfoItem title="Seed" value={lastGenerated.seed} />
          </>
        )}
      </Form>
    </Container>
  );
};
