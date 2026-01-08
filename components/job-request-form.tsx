"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { CheckCircle, Phone, Mail } from "lucide-react"

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
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-bold text-2xl mb-3 text-charcoal">Thank You for Your Interest!</h4>
            <p className="text-steel mb-2">This form is for demonstration purposes only.</p>
            <p className="text-steel mb-6">To request a quote, please contact us directly:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:contact@elitemasonrydemo.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brick hover:bg-brick-light text-white font-semibold rounded-lg transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange hover:bg-orange-light text-white font-semibold rounded-lg transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                Call (555) 123-4567
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white shadow-lg border-2 border-gray-100">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <Label htmlFor="firstName" className="text-charcoal font-semibold">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1.5 border-2 border-gray-200 focus:border-brick focus:ring-brick/20 transition-colors"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <Label htmlFor="lastName" className="text-charcoal font-semibold">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1.5 border-2 border-gray-200 focus:border-brick focus:ring-brick/20 transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-charcoal font-semibold">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1.5 border-2 border-gray-200 focus:border-brick focus:ring-brick/20 transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-charcoal font-semibold">
                  Phone
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1.5 border-2 border-gray-200 focus:border-brick focus:ring-brick/20 transition-colors"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <Label htmlFor="address" className="text-charcoal font-semibold">
                  Project Address
                </Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1.5 border-2 border-gray-200 focus:border-brick focus:ring-brick/20 transition-colors"
                  required
                />
              </div>

              {/* Job Description */}
              <div className="md:col-span-2">
                <Label htmlFor="description" className="text-charcoal font-semibold">
                  Job Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="mt-1.5 border-2 border-gray-200 focus:border-brick focus:ring-brick/20 transition-colors"
                  placeholder="Describe the work you need done. For example: 'I need to repair a crumbling section of my brick chimney.' or 'I would like a quote for a new 12x15 foot paver patio.'"
                  required
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                type="submit"
                className="bg-brick hover:bg-brick-light text-white font-bold py-3 px-12 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
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
