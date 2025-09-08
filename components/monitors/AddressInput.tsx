"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus, Trash2, ChevronDown, FileCode } from "lucide-react";
import { MonitorAddress } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AddressInputProps {
  addresses: MonitorAddress[];
  onChange: (addresses: MonitorAddress[]) => void;
  className?: string;
}

export function AddressInput({
  addresses,
  onChange,
  className,
}: AddressInputProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const addAddress = () => {
    onChange([...addresses, { address: "" }]);
    setExpandedIndex(addresses.length);
  };

  const removeAddress = (index: number) => {
    onChange(addresses.filter((_, i) => i !== index));
    if (expandedIndex === index) {
      setExpandedIndex(null);
    }
  };

  const updateAddress = (index: number, updates: Partial<MonitorAddress>) => {
    const newAddresses = [...addresses];
    newAddresses[index] = { ...newAddresses[index], ...updates };
    onChange(newAddresses);
  };

  const handleAbiUpload = (index: number, content: string) => {
    try {
      const abi = JSON.parse(content);
      updateAddress(index, { contract_spec: abi });
    } catch (error) {
      console.error("Invalid ABI JSON:", error);
    }
  };

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Contract Addresses</CardTitle>
        <CardDescription>
          Monitor specific contract addresses with optional ABI specifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {addresses.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <FileCode className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p className="text-sm">No addresses configured</p>
            <p className="text-xs mt-1">
              Add contract addresses to monitor specific smart contracts
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {addresses.map((address, index) => (
              <Collapsible
                key={index}
                open={expandedIndex === index}
                onOpenChange={(open) => setExpandedIndex(open ? index : null)}
              >
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <Label htmlFor={`address-${index}`} className="sr-only">
                        Contract Address
                      </Label>
                      <Input
                        id={`address-${index}`}
                        value={address.address}
                        onChange={(e) =>
                          updateAddress(index, { address: e.target.value })
                        }
                        placeholder="0x..."
                        pattern="^0x[a-fA-F0-9]{40}$"
                        className="font-mono"
                      />
                    </div>

                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            expandedIndex === index && "rotate-180",
                          )}
                        />
                      </Button>
                    </CollapsibleTrigger>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAddress(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <CollapsibleContent className="mt-4">
                    <div className="space-y-2">
                      <Label htmlFor={`abi-${index}`}>
                        Contract ABI (Optional)
                      </Label>
                      <Textarea
                        id={`abi-${index}`}
                        value={
                          address.contract_spec
                            ? JSON.stringify(address.contract_spec, null, 2)
                            : ""
                        }
                        onChange={(e) => handleAbiUpload(index, e.target.value)}
                        placeholder="Paste contract ABI JSON here..."
                        className="font-mono text-xs h-32"
                      />
                      <p className="text-xs text-muted-foreground">
                        Providing an ABI enables monitoring of decoded function
                        calls and events
                      </p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        )}

        <Button
          type="button"
          variant="outline"
          onClick={addAddress}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Address
        </Button>
      </CardContent>
    </Card>
  );
}
