'use client'

import React from 'react'
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button'
import Inputfield from '@/components/forms/Inputfield'
import SelectField from '@/components/forms/SelectField'
import CountrySelectField from '@/components/forms/CountrySelectField'
import { INVESTMENT_GOALS, RISK_TOLERANCE_OPTIONS, PREFERRED_INDUSTRIES } from '@/lib/constants'


const SignUp = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'US',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology',
    },
    mode: 'onChange'
  })

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data)
    }
    catch (e) {
      console.error(e)
    }
  }

  return (
      <>
        <h1 className='form-title'>Sign Up and Personalise</h1>
        {/**noValidate to prevent browser from using default browser popups */}
        <form noValidate className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
          <Inputfield
            name="fullName"
            label="Full Name"
            placeholder="Charlie Kirk"
            register={register}
            error={errors.fullName}
            validation={{ required: 'Full Name is required', minLength: 4 }}
          />

          <Inputfield
            name="email"
            label="Email"
            placeholder="ckirk911@gmail.com"
            type="email"
            register={register}
            error={errors.email}
            validation={{ required: 'Email is required' }}
          />

          <Inputfield
            name="password"
            label="Password"
            placeholder="charliekirk123"
            register={register}
            error={errors.password}
            type='password'
            validation={{ required: 'Password is required', minLength: 8 }}
          />

          <CountrySelectField
            name='country'
            label='Country'
            control={control}
            error={errors.country}
            required
          ></CountrySelectField>

          <SelectField
            name="investmentGoals"
            label="Investment Goals"
            placeholder="Select your Investment Goals"
            options={INVESTMENT_GOALS}
            control={control}
            error={errors.investmentGoals}
          />

          <SelectField
            name="riskTolerance"
            label="Risk Tolerance"
            placeholder="Select your Risk Tolerance"
            options={RISK_TOLERANCE_OPTIONS}
            control={control}
            error={errors.riskTolerance}
          />

          <SelectField
            name="preferredIndustry"
            label="Preferred Industry"
            placeholder="Select your Preferred Industry"
            options={PREFERRED_INDUSTRIES}
            control={control}
            error={errors.preferredIndustry}
          />

          <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
            {isSubmitting ? "Creating Account" : "Create Account"}
          </Button>
        </form>
      </>
    )
}

export default SignUp