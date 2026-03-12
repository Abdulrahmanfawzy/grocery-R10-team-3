import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { benefits, coupons, tiers } from "@/lib/constants/loyalty/Loyalty";
import { Crown, Share2, Tag } from "lucide-react";
import React from "react";

const Loyalty = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Loyalty & Rewards
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Track your points, rewards, and membership benefits
        </p>
      </div>

      {/* Points Balance */}
      <div className="bg-primary rounded-lg p-6 my-5 text-primary-foreground border-2 border-accent">
        <p className="text-sm opacity-80">Your Points Balance</p>
        <p className="text-4xl font-bold mt-1">2,450</p>
        <p className="text-sm opacity-70 mt-1"> £ 24.50 in rewards</p>
        <Button
          variant="secondary"
          className="mt-3 border-primary-foreground/30 cursor-pointer"
        >
          Redeem Points
        </Button>
      </div>

      {/* Membership Tier */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-2">
          <Crown className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-card-foreground">
            Membership Tier: Gold
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary font-medium">
            Progress to Platinum
          </span>
          <span className="text-sm text-muted-foreground">
            2,450 / 10,000 pts
          </span>
        </div>
        <Progress
          value={50.5}
          className="h-2 mb-1 [&>div]:bg-[linear-gradient(to_right,transparent_20%,var(--color-primary))]"
        />
        <p className="text-xs text-muted-foreground mb-4">
          7,550 points to go!
        </p>
        <div className="grid grid-cols-4 gap-3">
          {tiers.map((t) => (
            <div
              key={t.label}
              className={`text-center rounded-lg p-3 ${t.active ? "bg-primary text-primary-foreground" : "bg-muted text-card-foreground"}`}
            >
              <p className="text-sm font-semibold">{t.label}</p>
              <p className="text-xs opacity-70">{t.pts}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gold Benefits */}
      <div className="bg-card rounded-lg border border-border p-6 my-5">
        <h2 className="font-semibold text-card-foreground mb-4">
          Your Gold Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="bg-muted rounded-lg p-4 flex items-start gap-3"
            >
              <b.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-primary">{b.label}</p>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coupons */}
      <div className="bg-card rounded-lg border border-border p-6 my-5">
        <h2 className="font-semibold text-card-foreground mb-4">
          Your Coupons
        </h2>
        <div className="space-y-3">
          {coupons.map((c) => (
            <div
              key={c.code}
              className="flex items-center justify-between border border-border rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Tag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {c.title}
                  </p>
                  <p className="text-sm text-card-foreground">
                    Code: <span className="font-bold">{c.code}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
              </div>
              <Button size="sm">Apply</Button>
            </div>
          ))}
        </div>
      </div>

      {/* Refer a Friend */}
      <div className="bg-primary rounded-lg p-6 text-primary-foreground">
        <h2 className="font-semibold">Refer a Friend</h2>
        <p className="text-sm opacity-80 mt-1">
          Give $20, Got $20. Share your referral code and both earn rewards!
        </p>
        <div className="flex items-center gap-4 mt-4">
          <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-2 text-sm">
            Your Code: <span className="font-bold">SARAH2024</span>
          </div>
          <Button
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Share2 className="w-4 h-4 mr-1" /> Share Code
          </Button>
        </div>
      </div>
    </>
  );
};

export default Loyalty;
