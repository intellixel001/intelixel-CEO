import { SignupForm } from '@/components/sign-up-form'
import React from 'react'


export default function Signup() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
        <div className="container w-[100%] lg:w-[50%]">
       <SignupForm/>
        </div>
    </section>
  )
}
