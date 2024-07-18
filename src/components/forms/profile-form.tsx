'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"
import { EditUserProfileSchema } from "@/lib/types"

type Props = {}

const ProfileForm = (props: Props) => {
    const[isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: "onChange",
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    })
  return (
    <div>ProfileForm</div>
  )
}

export default ProfileForm