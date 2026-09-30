import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Lock,
  Phone,
  Mail,
  MapPin,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { enquirySchema, type EnquiryFormData } from '../lib/validation';

interface EnquiryFormProps {
  initialPlan?: string;
  initialService?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialPlan,
  initialService
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const availableSupportTypes = [
    'Regular parent wellbeing visits',
    'Healthcare / hospital coordination',
    'Emergency support',
    'Home / property assistance',
    'Errands & appointments',
    'Documents / local assistance',
    'Courier / parcel support',
    'Companionship',
    'Something else'
  ];

  const defaultSupportTypes = initialService ? [initialService] : [];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      whatsappNumber: '',
      email: '',
      currentCountry: 'United States',
      familyLocationInIndia: '',
      whoToSupport: 'Parents',
      supportTypes: defaultSupportTypes,
      selectedPlan: initialPlan || 'undecided',
      additionalNotes: '',
      preferredContact: 'WhatsApp'
    }
  });

  const selectedSupportTypes = watch('supportTypes') || [];
  const selectedPlanValue = watch('selectedPlan');

  // React to initial prop updates
  React.useEffect(() => {
    if (initialPlan) {
      setValue('selectedPlan', initialPlan);
    }
  }, [initialPlan, setValue]);

  React.useEffect(() => {
    if (initialService && !selectedSupportTypes.includes(initialService)) {
      setValue('supportTypes', [...selectedSupportTypes, initialService]);
    }
  }, [initialService, setValue, selectedSupportTypes]);

  const toggleSupportType = (type: string) => {
    if (selectedSupportTypes.includes(type)) {
      setValue(
        'supportTypes',
        selectedSupportTypes.filter((t) => t !== type),
        { shouldValidate: true }
      );
    } else {
      setValue('supportTypes', [...selectedSupportTypes, type], {
        shouldValidate: true
      });
    }
  };

  const onSubmit = async (_data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // Simulate safe processing (do not log sensitive user data to console)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1100));

      setIsSubmitted(true);
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#17352F', '#B86F55', '#D8C8B3', '#F7F4ED']
      });
    } catch {
      setSubmitError('We could not send your enquiry. Please reach us directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    reset();
    setIsSubmitted(false);
  };

  return (
    <section id="enquiry" className="py-24 md:py-32 bg-[#FBFAF6] border-b border-[#17352F]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Emotional Context & Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
                  FREE FAMILY CONSULTATION
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight mb-6"
              >
                Tell us about your family.
              </motion.h2>

              <p className="text-base text-[#17211F]/80 font-light leading-relaxed mb-8">
                Every family is different. Tell us what your family needs — from practical help to wellbeing and companionship — and we’ll understand how Vayosh can support you in India.
              </p>

              {/* Consultation Features with Micro-hover */}
              <div className="space-y-4 mb-10 pb-8 border-b border-[#17352F]/10">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#17352F]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#17352F] group-hover:bg-[#17352F] group-hover:text-[#F7F4ED] transition-colors">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#17352F] uppercase tracking-wider group-hover:text-[#B86F55] transition-colors">
                      20 Minutes · Unhurried
                    </h4>
                    <p className="text-xs text-[#68716D]">
                      A focused conversation around your family's lifestyle and parent wellbeing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#17352F]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#17352F] group-hover:bg-[#17352F] group-hover:text-[#F7F4ED] transition-colors">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#17352F] uppercase tracking-wider group-hover:text-[#B86F55] transition-colors">
                      Zero Sales Pressure
                    </h4>
                    <p className="text-xs text-[#68716D]">
                      No immediate commitments or card required. We provide honest guidance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#17352F]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#17352F] group-hover:bg-[#17352F] group-hover:text-[#F7F4ED] transition-colors">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#17352F] uppercase tracking-wider group-hover:text-[#B86F55] transition-colors">
                      WhatsApp or Zoom Call
                    </h4>
                    <p className="text-xs text-[#68716D]">
                      Scheduled to accommodate North American, UK, European and Australian timezones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Ground Coordination Contact */}
              <div className="bg-[#F7F4ED] p-6 rounded-sm border border-[#17352F]/10 space-y-3 shadow-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B86F55] font-semibold block">
                  Direct Coordination Office
                </span>
                
                <a
                  href="tel:+919789066588"
                  className="flex items-center gap-2.5 text-xs text-[#17211F] hover:text-[#B86F55] transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-[#17352F] transition-transform group-hover:scale-110" />
                  <span>+91 97890 66588</span>
                </a>

                <a
                  href="mailto:thirunav.natarajan@gmail.com"
                  className="flex items-center gap-2.5 text-xs text-[#17211F] hover:text-[#B86F55] transition-colors group break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#17352F] transition-transform group-hover:scale-110" />
                  <span>thirunav.natarajan@gmail.com</span>
                </a>

                <div className="flex items-center gap-2.5 text-xs text-[#68716D]">
                  <MapPin className="w-3.5 h-3.5 text-[#17352F]" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>

            </div>

            <div className="mt-8 flex items-center gap-2 text-[11px] text-[#68716D]">
              <Lock className="w-3 h-3 text-[#17352F]" />
              <span>We hold your family’s privacy in strict professional confidence.</span>
            </div>
          </div>

          {/* Right Column: Premium Form with Micro-animations */}
          <div className="lg:col-span-7 bg-[#F7F4ED] border border-[#17352F]/15 rounded-sm p-8 sm:p-10 shadow-sm relative">
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="py-12 text-center space-y-5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 14, stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center mx-auto shadow-md"
                  >
                    <CheckCircle2 className="w-8 h-8 text-[#D8C8B3]" />
                  </motion.div>
                  
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#17352F]">
                    Thank you for trusting Vayosh.
                  </h3>
                  
                  <p className="text-sm text-[#17211F]/80 max-w-md mx-auto leading-relaxed font-light">
                    Our family care coordinator has received your details. We will review your requirements and reach out via your preferred channel within 24 hours to schedule your consultation.
                  </p>

                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://wa.me/919789066588?text=Hi%20Vayosh%2C%20I%20just%20submitted%20my%20family%20consultation%20request%20on%20your%20website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold shadow-sm hover:opacity-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Message Us on WhatsApp Now</span>
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleResetForm}
                      className="px-6 py-3.5 rounded-sm border border-[#17352F]/20 text-xs uppercase tracking-wider font-medium text-[#17352F] hover:bg-white cursor-pointer"
                    >
                      Submit Another Request
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-sm text-xs text-red-700 flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </motion.div>
                  )}

                  {/* Pre-selected plan display (if any) */}
                  {selectedPlanValue && selectedPlanValue !== 'undecided' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-3 bg-[#FBFAF6] border border-[#17352F]/15 rounded-sm flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="text-[#68716D] mr-2">Interested Plan:</span>
                        <strong className="text-[#17352F] uppercase font-mono">
                          Vayosh {selectedPlanValue}
                        </strong>
                      </div>
                      <button
                        type="button"
                        onClick={() => setValue('selectedPlan', 'undecided')}
                        className="text-[11px] text-[#B86F55] hover:underline cursor-pointer"
                      >
                        Clear / Undecided
                      </button>
                    </motion.div>
                  )}

                  {/* Row 1: Full Name & WhatsApp/Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#17352F] uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Anand Sundaram"
                        {...register('fullName')}
                        className={`w-full px-4 py-3 bg-[#FBFAF6] border text-sm text-[#17211F] rounded-sm focus:outline-none transition-all ${
                          errors.fullName ? 'border-red-400' : 'border-[#17352F]/20 focus:border-[#17352F] focus:ring-1 focus:ring-[#17352F]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="whatsappNumber" className="block text-xs font-semibold text-[#17352F] uppercase tracking-wider mb-1.5">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        id="whatsappNumber"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 (415) 000-0000 or +44 ..."
                        {...register('whatsappNumber')}
                        className={`w-full px-4 py-3 bg-[#FBFAF6] border text-sm text-[#17211F] rounded-sm focus:outline-none transition-all ${
                          errors.whatsappNumber ? 'border-red-400' : 'border-[#17352F]/20 focus:border-[#17352F] focus:ring-1 focus:ring-[#17352F]'
                        }`}
                      />
                      {errors.whatsappNumber && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.whatsappNumber.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Current Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#17352F] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        {...register('email')}
                        className={`w-full px-4 py-3 bg-[#FBFAF6] border text-sm text-[#17211F] rounded-sm focus:outline-none transition-all ${
                          errors.email ? 'border-red-400' : 'border-[#17352F]/20 focus:border-[#17352F] focus:ring-1 focus:ring-[#17352F]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="currentCountry" className="block text-xs font-semibold text-[#17352F] uppercase tracking-wider mb-1.5">
                        Current Country of Residence *
                      </label>
                      <select
                        id="currentCountry"
                        {...register('currentCountry')}
                        className="w-full px-4 py-3 bg-[#FBFAF6] border border-[#17352F]/20 text-sm text-[#17211F] rounded-sm focus:outline-none focus:border-[#17352F] transition-colors"
                      >
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Germany">Germany</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Other Country">Other Country</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Parents / Family Location in India */}
                  <div>
                    <label htmlFor="familyLocationInIndia" className="block text-xs font-semibold text-[#17352F] uppercase tracking-wider mb-1.5">
                      Parents / Family Location in India *
                    </label>
                    <input
                      id="familyLocationInIndia"
                      type="text"
                      placeholder="e.g. Mylapore, Chennai, Tamil Nadu or Bengaluru, Karnataka"
                      {...register('familyLocationInIndia')}
                      className={`w-full px-4 py-3 bg-[#FBFAF6] border text-sm text-[#17211F] rounded-sm focus:outline-none transition-all ${
                        errors.familyLocationInIndia ? 'border-red-400' : 'border-[#17352F]/20 focus:border-[#17352F] focus:ring-1 focus:ring-[#17352F]'
                      }`}
                    />
                    {errors.familyLocationInIndia && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.familyLocationInIndia.message}</p>
                    )}
                  </div>

                  {/* Row 4: Who would you like Vayosh to support? */}
                  <div>
                    <span className="block text-xs font-semibold text-[#17352F] uppercase tracking-wider mb-2">
                      Who would you like Vayosh to support? *
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {(['Parents', 'One parent', 'Parents + other family members', 'Other'] as const).map(
                        (option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2 p-2.5 bg-[#FBFAF6] border border-[#17352F]/15 rounded-sm text-xs cursor-pointer hover:border-[#17352F] transition-all hover:bg-white"
                          >
                            <input
                              type="radio"
                              value={option}
                              {...register('whoToSupport')}
                              className="text-[#17352F] focus:ring-0"
                            />
                            <span className="text-[#17211F]">{option}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  {/* Row 5: What kind of support are you looking for? (Multi-select) */}
                  <div>
                    <span className="block text-xs font-semibold text-[#17352F] uppercase tracking-wider mb-2">
                      What kind of support are you looking for? (Select all that apply) *
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableSupportTypes.map((type) => {
                        const isChecked = selectedSupportTypes.includes(type);
                        return (
                          <motion.div
                            key={type}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => toggleSupportType(type)}
                            role="checkbox"
                            aria-checked={isChecked}
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                toggleSupportType(type);
                              }
                            }}
                            className={`p-2.5 rounded-sm border text-xs flex items-center gap-2.5 cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-[#17352F] text-[#F7F4ED] border-[#17352F] shadow-xs'
                                : 'bg-[#FBFAF6] text-[#17211F] border-[#17352F]/15 hover:border-[#17352F] hover:bg-white'
                            }`}
                          >
                            <div
                              className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${
                                isChecked ? 'bg-[#B86F55] border-[#B86F55] text-white' : 'border-[#17352F]/30'
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3 h-3" />}
                            </div>
                            <span>{type}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                    {errors.supportTypes && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.supportTypes.message}</p>
                    )}
                  </div>

                  {/* Row 6: Additional Notes */}
                  <div>
                    <label htmlFor="additionalNotes" className="block text-xs font-semibold text-[#17352F] uppercase tracking-wider mb-1.5">
                      Tell us a little more about your family’s situation (Optional)
                    </label>
                    <textarea
                      id="additionalNotes"
                      rows={3}
                      placeholder="e.g. My mother lives alone in Chennai; she manages well but needs someone to accompany her to periodic cardiologist visits and check on house repairs..."
                      {...register('additionalNotes')}
                      className="w-full px-4 py-3 bg-[#FBFAF6] border border-[#17352F]/20 text-sm text-[#17211F] rounded-sm focus:outline-none focus:border-[#17352F] transition-all"
                    />
                  </div>

                  {/* Row 7: Preferred Contact Method */}
                  <div>
                    <span className="block text-xs font-semibold text-[#17352F] uppercase tracking-wider mb-2">
                      Preferred Contact Method *
                    </span>
                    <div className="flex gap-4">
                      {(['WhatsApp', 'Phone call', 'Email'] as const).map((method) => (
                        <label
                          key={method}
                          className="flex items-center gap-2 text-xs text-[#17211F] cursor-pointer"
                        >
                          <input
                            type="radio"
                            value={method}
                            {...register('preferredContact')}
                            className="text-[#17352F]"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Action Button & Reassurance with Micro-interactions */}
                  <div className="pt-4 border-t border-[#17352F]/10 space-y-3">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="flex-1 py-4 bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>Transmitting Consultation Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Send My Enquiry</span>
                            <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                          </>
                        )}
                      </motion.button>

                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://wa.me/919789066588?text=Hi%20Vayosh%2C%20I%20found%20you%20online%20and%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20family%20in%20India."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-4 rounded-sm border border-[#17352F]/20 text-[#17352F] hover:bg-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>WhatsApp Us</span>
                      </motion.a>
                    </div>

                    <p className="text-center text-[11px] text-[#68716D]">
                      20 minutes · No obligation · Friendly family discussion
                    </p>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
