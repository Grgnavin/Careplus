'use client'
import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'
import { Control } from 'react-hook-form'
import { FormFieldType } from './forms/PatientForm'
import Image from 'next/image'

interface CustomProps {
    control: Control<any>,
    fieldType : FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
}

const RenderInput = ({ field, props }: { field: any, props: CustomProps}) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className='flex rounded-md border border-dark-500 bg-dark-400'>
                    {props.iconSrc && (
                        <Image 
                            src={props.iconSrc}
                        />
                    )}
                </div>
            )
            break;
    
        default:
            break;
    }
}

const CustomFromField = (props: CustomProps) => {
    const { control, fieldType, name , label } = props;
    return (
        <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem className='flex-1'>
                        {fieldType !== FormFieldType.CHECKBOX && label && (
                            <FormLabel>
                                {label}
                            </FormLabel>
                        )}
                        <RenderInput field={field} props={props}/>
                        <FormMessage className='shad-error'/>
                    </FormItem>
                )}
                />
    )
}

export default CustomFromField