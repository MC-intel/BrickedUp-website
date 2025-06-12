"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "info">("info")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const showMessage = (message: string, type: "success" | "error" | "info") => {
    setSubmitMessage(message)
    setMessageType(type)
  }

  const handleSubmit = async () => {
    const { firstName, lastName, message } = formData

    if (!firstName.trim()) {
      showMessage("Please enter your First Name.", "error")
      console.log("Validation failed: First name is empty")
      return
    }
    if (!lastName.trim()) {
      showMessage("Please enter your Last Name.", "error")
      console.log("Validation failed: Last name is empty")
      return
    }
    if (!message.trim()) {
      showMessage("Please enter a message before sending.", "error")
      console.log("Validation failed: Message is empty")
      return
    }

    setIsSubmitting(true)
    showMessage("Sending your message...", "info")
    console.log("Starting email send process...")

    const API_BASE_URL =
      "https://script.google.com/macros/s/AKfycbwE8BSAXZBSwjIn92wZ58OrCQuXhjAF7vDIElHTxf5EdCPhhDmJSvCFaq9xEFRMZbShBA/exec"

    try {
      const emailBodyString = `First Name: ${firstName}\nLast Name: ${lastName}\nMessage: ${message}`
      const encodedBody = encodeURIComponent(emailBodyString)
      const fullUrl = `${API_BASE_URL}?body=${encodedBody}`

      console.log("Sending request to:", fullUrl)
      console.log("Email body:", emailBodyString)

      const response = await fetch(fullUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      })

      console.log("Response status:", response.status)
      console.log("Response ok:", response.ok)

      const data = await response.text()
      console.log("Response data:", data)

      if (data.includes("Email sent successfully")) {
        showMessage("Email sent successfully!", "success")
        setFormData({ firstName: "", lastName: "", message: "" })
        console.log("Email sent successfully!")
      } else {
        showMessage(`Error: ${data}`, "error")
        console.error("Server returned error:", data)
      }
    } catch (error) {
      console.error("Fetch Error:", error)
      showMessage(`Network error or server issue: ${error.message}. Please try again.`, "error")
    } finally {
      setIsSubmitting(false)
      console.log("Email send process completed")
    }
  }

  const getMessageClasses = () => {
    const baseClasses = "mt-6 p-4 rounded-lg text-center"
    switch (messageType) {
      case "success":
        return `${baseClasses} bg-green-100 text-green-700`
      case "error":
        return `${baseClasses} bg-red-100 text-red-700`
      default:
        return `${baseClasses} bg-blue-100 text-blue-700`
    }
  }

  return (
    <Card className="bg-white shadow-xl border border-gray-200">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Send a Quick Message</h2>

        <div className="space-y-4">
          <div>
            <Label htmlFor="firstName" className="text-gray-700 text-sm font-semibold">
              First Name:
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name..."
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="lastName" className="text-gray-700 text-sm font-semibold">
              Last Name:
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name..."
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-700 text-sm font-semibold">
              Your Message:
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message here..."
              className="mt-1 h-32 resize-none"
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? "Sending..." : "Send Email"}
          </Button>

          {submitMessage && (
            <div className={getMessageClasses()} role="alert">
              {submitMessage}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
