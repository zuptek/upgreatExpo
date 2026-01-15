"use client";

import { useActionState } from "react";
import { Button } from "@/components/UI/Button";
import { Mail, MapPin, Phone, MessageSquare, Loader2 } from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";
import { useEffect } from "react";

const initialState = {
    success: false,
    message: "",
};

export default function ContactPage() {
    const [state, formAction, isPending] = useActionState(sendEmail, initialState);

    useEffect(() => {
        if (state.message) {
            if (state.success) {
                // You could add a toast notification here
                alert(state.message);
                // Reset form if needed, though native form reset happens on navigation or manual reset
                const form = document.querySelector('form') as HTMLFormElement;
                if (form) form.reset();
            } else {
                alert(state.message);
            }
        }
    }, [state]);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-[#003063] text-white py-20">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                        <MessageSquare size={32} className="text-[#E6007E]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Ready to start planning? Contact us today for a consultation.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 lg:px-12 -mt-10 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 h-full">
                        <h2 className="text-2xl font-bold text-[#003063] mb-8">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-[#003063]/5 flex items-center justify-center group-hover:bg-[#003063] transition-colors duration-300">
                                    <MapPin className="w-6 h-6 text-[#003063] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[#003063] mb-1">Visit Us</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Unit No. 213-214, 2nd Floor,<br />
                                        Welldone Tech Park,<br />
                                        Gurgaon – 122018
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-[#003063]/5 flex items-center justify-center group-hover:bg-[#003063] transition-colors duration-300">
                                    <Mail className="w-6 h-6 text-[#003063] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[#003063] mb-1">Email Us</h3>
                                    <p className="text-slate-600">Info@UpGreatExpo.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-[#003063]/5 flex items-center justify-center group-hover:bg-[#003063] transition-colors duration-300">
                                    <Phone className="w-6 h-6 text-[#003063] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[#003063] mb-1">Call Us</h3>
                                    <p className="text-slate-600">+91 90886 55513</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-[#003063] mb-8">Send us a Message</h2>
                        <form action={formAction} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full p-4 rounded-lg border border-slate-200 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none resize-none transition-all"
                                    placeholder="Tell us about your event..."
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isPending}
                                className="w-full h-12 bg-[#E6007E] hover:bg-[#C5006C] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
