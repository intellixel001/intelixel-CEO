"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { affiliateRegister } from "@/lib/affiliateRegister";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useActionState } from "react";

export default function AffiliateSignup() {
  const [state, formAction, isPending] = useActionState(
    affiliateRegister,
    undefined
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent opacity-40"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/30 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
              Join Our Affiliate Program
            </h1>
            <p className="text-gray-300">
              Earn commissions by promoting our products. Fill out the form to
              get started.
            </p>
          </div>

          {/* Success Message */}
          {state?.success && (
            <Alert className="mb-6 bg-green-900/30 border-green-800">
              <Terminal className="h-4 w-4" />
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {state?.message && !state?.success && (
            <Alert variant="destructive" className="mb-6">
              <Terminal className="h-4 w-4" />
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}

          {/* Registration Form */}
          <div className="bg-[#111111] p-6 sm:p-8 rounded-xl border border-gray-800/50">
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    name="firstName"
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                    required
                  />
                  {state?.errors?.firstName && (
                    <p className="text-sm text-red-500">
                      {state.errors.firstName[0]}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    name="lastName"
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                    required
                  />
                  {state?.errors?.lastName && (
                    <p className="text-sm text-red-500">
                      {state.errors.lastName[0]}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                  required
                />
                {state?.errors?.email && (
                  <p className="text-sm text-red-500">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="social">Social Media Link *</Label>
                <Input
                  name="social"
                  id="social"
                  type="url"
                  placeholder="Your social media link"
                  className="bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                  required
                />
                {state?.errors?.social && (
                  <p className="text-sm text-red-500">
                    {state.errors.social[0]}
                  </p>
                )}
                <p className="text-sm text-gray-400">
                  Please provide a link to your Facebook, Instagram, or other
                  social profile
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  name="phone"
                  id="phone"
                  type="tel"
                  placeholder="+8801XXXXXXXXX"
                  className="bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                  required
                />
                {state?.errors?.phone && (
                  <p className="text-sm text-red-500">
                    {state.errors.phone[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Payment Method *</Label>
                <select
                  name="paymentMethod"
                  id="paymentMethod"
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-[#0a0a0a] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select payment method</option>
                  <option value="bkash">Bkash</option>
                  <option value="nagad">Nagad</option>
                </select>
                {state?.errors?.paymentMethod && (
                  <p className="text-sm text-red-500">
                    {state.errors.paymentMethod[0]}
                  </p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <input
                  name="isChecked"
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 mt-1 rounded border-gray-700 bg-[#0a0a0a] text-blue-600 focus:ring-blue-500"
                  required
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms & Conditions of the affiliate program.
                </Label>
              </div>
              {state?.errors?.isChecked && (
                <p className="text-sm text-red-500">
                  {state.errors.isChecked[0]}
                </p>
              )}

              <SubmitButton isPending={isPending} />
            </form>

            {/* <div className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                href="/affiliate/login"
                className="text-blue-400 hover:underline"
              >
                Sign in
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Affiliate Program Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "High Commissions",
                description: "Earn 15% on every sale you refer",
                icon: "💰",
              },
              {
                title: "Reliable Payments",
                description: "Timely payments via your preferred method",
                icon: "⏱️",
              },
              {
                title: "Marketing Support",
                description: "Get banners, links, and promotional materials",
                icon: "📢",
              },
              // {
              //   title: "Real-time Tracking",
              //   description: "Monitor your referrals and earnings in real-time",
              //   icon: "📊",
              // },
              {
                title: "No Fees",
                description: "Join our program completely free of charge",
                icon: "🆓",
              },
              {
                title: "Dedicated Support",
                description: "Our team is here to help you succeed",
                icon: "🤝",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#111111] p-6 rounded-lg border border-gray-800/50 hover:border-blue-500/30 transition-colors"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-6 text-lg rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all"
      disabled={isPending}
    >
      {isPending ? "Processing..." : "Join Affiliate Program"}
    </Button>
  );
}
