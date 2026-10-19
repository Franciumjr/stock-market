'use client'

import React, { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'
import * as Flags from 'country-flag-icons/react/3x2'
import { Controller } from 'react-hook-form'
import { Label } from '../ui/label'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const CountryFlag = ({ code, className }: { code: string; className?: string }) => {
    const FlagComponent = Flags[code.toUpperCase() as keyof typeof Flags]
    if (!FlagComponent) return null
    return <FlagComponent className={cn("w-5 h-3.5 object-cover rounded-xs shrink-0 inline-block", className)} />
}

const CountrySelectField = ({
    name,
    label,
    control,
    error,
    required = false
}: CountrySelectProps) => {
    const [open, setOpen] = useState(false)
    const options = useMemo(() => countryList().getData(), [])

    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="form-label">{label}</Label>

            <Controller
                name={name}
                control={control}
                rules={{ required: required ? `${label} is required` : false }}
                render={({ field }) => {
                    const selectedCountry = options.find(
                        (c) => c.value === field.value || c.label === field.value
                    )

                    return (
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger type="button" className="country-select-trigger flex items-center justify-between">
                                <div className="flex items-center gap-2 truncate">
                                    {selectedCountry && <CountryFlag code={selectedCountry.value} />}
                                    <span className={cn("truncate", selectedCountry ? "text-white" : "text-gray-500")}>
                                        {selectedCountry ? selectedCountry.label : 'Select a country...'}
                                    </span>
                                </div>
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </PopoverTrigger>
                            <PopoverContent className="w-[--anchor-width] min-w-60 p-0 bg-gray-800 border-gray-600 text-white">
                                <Command className="bg-gray-800 text-white">
                                    <CommandInput
                                        placeholder="Enter a country:"
                                        className="country-select-input"
                                    />
                                    <CommandList className="max-h-60 overflow-y-auto">
                                        <CommandEmpty className="country-select-empty">No country found.</CommandEmpty>
                                        <CommandGroup>
                                            {options.map((country) => (
                                                <CommandItem
                                                    key={country.value}
                                                    value={country.label}
                                                    onSelect={() => {
                                                        field.onChange(country.value)
                                                        setOpen(false)
                                                    }}
                                                    className="country-select-item flex items-center justify-between data-selected:!bg-gray-700"
                                                >
                                                    <div className="flex items-center gap-2.5 truncate">
                                                        <CountryFlag code={country.value} />
                                                        <span>{country.label}</span>
                                                    </div>
                                                    <Check
                                                        className={cn(
                                                            "h-4 w-4 text-yellow-400 shrink-0",
                                                            field.value === country.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    )
                }}
            />

            {error && <p className="text-sm text-red-400">{error.message}</p>}
        </div>
    )
}

export default CountrySelectField