"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function JobRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
        <h4 className="font-bold text-xl mb-2">Thank You for Your Interest!</h4>
        <p className="mb-1">This form is for demonstration purposes only and does not actively submit your request.</p>
        <p className="mb-3">To request a quote, please contact us directly:</p>
        <p className="mb-1">
          <a href="mailto:contact@elitemasonrydemo.com" className="text-amber-600 hover:text-amber-700 font-semibold">
            Email: contact@elitemasonrydemo.com
          </a>
        </p>
        <p>
          <a href="tel:5551234567" className="text-amber-600 hover:text-amber-700 font-semibold">
            Call: (555) 123-4567
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-gray-50 shadow-md">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <Label htmlFor="firstName" className="text-gray-700 font-semibold">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <Label htmlFor="lastName" className="text-gray-700 font-semibold">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-700 font-semibold">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-semibold">
                  Phone
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <Label htmlFor="address" className="text-gray-700 font-semibold">
                  Project Address
                </Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
              </div>

              {/* Job Description */}
              <div className="md:col-span-2">
                <Label htmlFor="description" className="text-gray-700 font-semibold">
                  Job Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="mt-1"
                  placeholder="Describe the work you need done. For example: 'I need to repair a crumbling section of my brick chimney.' or 'I would like a quote for a new 12x15 foot paver patio.'"
                  required
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-12 rounded-lg transition duration-300"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
