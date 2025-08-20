"use client";

import React, { useState } from "react";
// import { useContact, useCommon } from "@/hooks/useTranslations";
import FormField from "./FormField";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import PostalCodeInput from "./PostalCodeInput";

const ContactForm = () => {
  // const t = useContact();
  // const common = useCommon();

  const [formData, setFormData] = useState({
    name: "",
    postalCode1: "",
    postalCode2: "",
    address: "",
    phone: "",
    appointmentDates: ["", "", ""],
    items: "",
    workDate: "none",
    packages: {
      small: false,
      medium: false,
      large: false,
      xlarge: false,
      xxlarge: false,
    },
    email: "",
    other: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    postalCode: false,
    address: false,
    phone: false,
    email: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("appointmentDates")) {
      const index = parseInt(name.split("-")[1]);
      const newAppointmentDates = [...formData.appointmentDates];
      newAppointmentDates[index] = value;

      setFormData({
        ...formData,
        appointmentDates: newAppointmentDates,
      });
    } else if (name.startsWith("postalCode")) {
      const part = name.split("-")[1];
      setFormData({
        ...formData,
        [part === "1" ? "postalCode1" : "postalCode2"]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleWorkDateChange = (value: string) => {
    setFormData({
      ...formData,
      workDate: value,
    });
  };

  const handlePackageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setFormData({
      ...formData,
      packages: {
        ...formData.packages,
        [name]: checked,
      },
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      postalCode: !formData.postalCode1 || !formData.postalCode2,
      address: !formData.address,
      phone: !formData.phone,
      email: !formData.email,
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({});

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          setSubmitStatus({
            success: true,
            message: "送信が完了しました。担当者からご連絡いたします。",
          });
          setFormData({
            name: "",
            postalCode1: "",
            postalCode2: "",
            address: "",
            phone: "",
            appointmentDates: ["", "", ""],
            items: "",
            workDate: "none",
            packages: {
              small: false,
              medium: false,
              large: false,
              xlarge: false,
              xxlarge: false,
            },
            email: "",
            other: "",
          });
        } else {
          setSubmitStatus({
            success: false,
            message: "送信に失敗しました。もう一度お試しください。",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus({
          success: false,
          message: "エラーが発生しました。もう一度お試しください。",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const workDateOptions = [
    { id: "workDate-none", value: "none", label: "希望なし" },
    { id: "workDate-immediate", value: "immediate", label: "即日" },
    { id: "workDate-later", value: "later", label: "後日" },
  ];

  const packageOptions = [
    {
      id: "package-small",
      name: "small",
      label: "カゴ車（SS）",
      checked: formData.packages.small,
    },
    {
      id: "package-medium",
      name: "medium",
      label: "軽トラ（S）",
      checked: formData.packages.medium,
    },
    {
      id: "package-large",
      name: "large",
      label: "2トン車（M）",
      checked: formData.packages.large,
    },
    {
      id: "package-xlarge",
      name: "xlarge",
      label: "2トン箱車1台未満（L）",
      checked: formData.packages.xlarge,
    },
    {
      id: "package-xxlarge",
      name: "xxlarge",
      label: "2トン箱車1台以上（要相談）",
      checked: formData.packages.xxlarge,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl px-4 md:px-6 py-6"
    >
      {/* Name */}
      <FormField
        id="name"
        label="お名前"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="例) やまだたろう"
        required
        error={errors.name}
        errorMessage="お名前を入力してください。"
        subLabel="（かな）"
      />

      {/* Postal Code */}
      <PostalCodeInput
        label="郵便番号"
        value1={formData.postalCode1}
        value2={formData.postalCode2}
        onChange={handleInputChange}
        required
        error={errors.postalCode}
        errorMessage="郵便番号を入力してください。"
      />

      {/* Address */}
      <FormField
        id="address"
        label="ご住所"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="例) 東京都新宿区西新宿1-1-1 新宿マンション101"
        required
        error={errors.address}
        errorMessage="住所を入力してください。"
        subLabel="（建物名/部屋番号まで）"
      />

      {/* Phone */}
      <FormField
        id="phone"
        label="電話番号"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="例) 090-1111-2222"
        required
        error={errors.phone}
        errorMessage="電話番号を入力してください。"
      />

      {/* Appointment Dates */}
      <div className="mb-6">
        <div className="mb-2">
          <label
            htmlFor="appointmentDates-0"
            className="font-bold text-gray-700"
          >
            ご希望のお見積り日時
          </label>
          <div className="mb-1">
            <span className="text-xs text-gray-600">（候補３つ）</span>
          </div>
        </div>
        <div className="space-y-2">
          <FormField
            id="appointmentDates-0"
            label=""
            value={formData.appointmentDates[0]}
            onChange={handleInputChange}
            placeholder="例) 12/25 9~12時"
            className="mb-2"
          />
          <FormField
            id="appointmentDates-1"
            label=""
            value={formData.appointmentDates[1]}
            onChange={handleInputChange}
            placeholder="例) 12/27 9~12時"
            className="mb-2"
          />
          <FormField
            id="appointmentDates-2"
            label=""
            value={formData.appointmentDates[2]}
            onChange={handleInputChange}
            placeholder="例) 12/21 9~12時"
            className="mb-2"
          />
        </div>
      </div>

      {/* Work Date Preference */}
      <RadioGroup
        label="ご希望の作業日"
        name="workDate"
        options={workDateOptions}
        selectedValue={formData.workDate}
        onChange={handleWorkDateChange}
      />

      {/* Items */}
      <FormField
        id="items"
        label="お荷物の内容"
        value={formData.items}
        onChange={handleInputChange}
        placeholder="例) 冷蔵庫、ドラム式洗濯機、ダブルベッド等"
      />

      {/* Package Options */}
      <CheckboxGroup
        label="ご希望のパック"
        options={packageOptions}
        onChange={handlePackageChange}
      />

      {/* Email */}
      <FormField
        id="email"
        label="メールアドレス"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="例) xxx@gmail.com"
        required
        error={errors.email}
        errorMessage="メールアドレスを入力してください。"
      />

      {/* Other */}
      <FormField
        id="other"
        label="その他"
        value={formData.other}
        onChange={handleInputChange}
        placeholder="その他、何かございましたらご記載ください。"
        isTextarea
      />

      {/* Privacy Policy Agreement */}
      <div className="mb-6 text-center">
        <p className="text-lg">
          「<span className="font-bold text-[#00ADF2]">個人情報の取り扱い</span>
          」 に同意のうえ、ボタンを押してください。
        </p>
      </div>

      {/* Status Message */}
      {submitStatus.message && (
        <div
          className={`mb-6 p-4 rounded text-center ${
            submitStatus.success
              ? "bg-green-100 text-green-800 border border-green-400"
              : "bg-red-100 text-red-800 border border-red-400"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-center mb-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${
            isSubmitting ? "bg-gray-400" : "bg-[#1976D2] hover:bg-blue-700"
          } text-white font-bold py-3 px-8 rounded shadow-md uppercase tracking-wider flex items-center`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              送信中...
            </>
          ) : (
            "入力内容を確認する"
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
