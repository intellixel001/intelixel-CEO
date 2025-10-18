

import { SigninForm } from '@/components/sign-in-form'
import React from 'react'


export default function Signin() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
        <div className="container w-[100%] lg:w-[50%]">
       <SigninForm/>
        </div>
    </section>
  )
}
