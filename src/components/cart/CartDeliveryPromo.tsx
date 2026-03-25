import { Tag, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function CartDeliveryPromo() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold">Delivery Details &amp; Promo Code</h2>
      <Card className="py-5">
        <CardContent className="space-y-5 px-5">
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Tag className="size-4" /> Promo Code
            </p>
            <div className="flex gap-2">
              <Input defaultValue="Save10" />
              <Button variant="secondary" className="rounded-md text-base">Apply Code</Button>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" /> Delivery Address
            </p>
            <div className="flex gap-2">
              <Input
                readOnly
                defaultValue="Villa 14, Street 23, District 5, New Cairo, Cairo"
                className="text-xs"
              />
              <Button variant="secondary" className="rounded-md text-base">Edit</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
