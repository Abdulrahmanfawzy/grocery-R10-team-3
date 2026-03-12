import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { AlertTriangle, Lock, ShieldCheck, Smartphone } from 'lucide-react'
import React from 'react'

const Security = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Security & Login</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your account security and login settings</p>
      </div>

      {/*  Status */}
      <div className="bg-success/10 border border-success/30 rounded-lg p-4 flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-success" />
        <div>
          <p className="text-sm font-semibold text-success">Your Account is Secure</p>
          <p className="text-xs text-muted-foreground">All security features are enabled</p>
        </div>
      </div>

      {/*  Password */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-1">
          <Lock className="w-5 h-5 text-card-foreground" />
          <h2 className="font-semibold text-card-foreground">Change Password</h2>
        </div>
        <p className="text-xs text-muted-foreground mb-4">Enter a new password to replace the old password</p>

        <div className="space-y-4 max-w-md">
          <div>
            <label className="text-sm font-medium text-card-foreground block mb-1">New Password</label>
            <Input type="password" placeholder="Enter New Password" />
          </div>
          <div>
            <label className="text-sm font-medium text-card-foreground block mb-1">Confirm New Password</label>
            <Input type="password" placeholder="Confirm New Password" />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="uppercase" />
              <label htmlFor="uppercase" className="text-xs text-muted-foreground">Include Uppercase</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="symbol" />
              <label htmlFor="symbol" className="text-xs text-muted-foreground">Include a symbol</label>
            </div>
          </div>

          <Button className="w-full max-w-[200px]">Update Password</Button>
        </div>
      </div>

      {/* Authentication */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-card-foreground">Two-Factor Authentication</h2>
            <p className="text-xs text-muted-foreground mt-1">Add an extra layer of security by requiring a confirmation code in addition to your password</p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="bg-muted rounded-lg p-4 mt-3 space-y-2">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-card-foreground" />
            <p className="text-sm text-card-foreground font-medium">Enabled</p>
          </div>
          <p className="text-xs text-muted-foreground">SMS verification to +2(0)26-072-5321</p>
          <Button variant="outline" size="sm" className="mt-2">Change Phone Number</Button>
        </div>
      </div>

      {/* Delete Account  */}
      <div className="bg-destructive/5 border border-destructive/30 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <h2 className="font-semibold text-destructive">Danger Zone</h2>
        </div>
        <p className="text-sm text-destructive/70 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <Button variant="destructive">Delete Account</Button>
      </div>
    </>
  )
}

export default Security