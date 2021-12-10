/* eslint-disable @typescript-eslint/naming-convention */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import { siteMetadata } from "../data/siteMetaData";

export const FormMemberRegistration: NextPage = () => {
  const router = useRouter();
  const [isCheckboxState, setIsCheckboxState] = useState(false);

  const handleOnChange = () => {
    setIsCheckboxState((prevCheck) => {
      return !prevCheck;
    });
  };

  const handleRegisterUser = async (event: any) => {
    event.preventDefault();
    // const useremail = user?.email || "";

    const newsletter = isCheckboxState === true ? "要" : "不要";
    const res = await fetch("/api/send", {
      body: JSON.stringify({
        subject: "登録を承りました。",
        to: siteMetadata.email,
        text:
          "以下の内容でご登録を承りました。後ほど、ご登録完了のお知らせをメールでお送りいたします。\n完了まで１⽇程度お時間がかかる場合がございますのでご了承ください。\n\n" +
          "お名前: " +
          event.target.fullname.value +
          " 様\n" +
          "研究室: " +
          event.target.labo.value +
          "\nメールアドレス: " +
          event.target.email.value +
          "\n\nお問い合わせ内容:\n" +
          event.target.message.value +
          "\n\n\nニュースレター配信: " +
          newsletter,
        email: event.target.email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    router.push({
      pathname: "/success",
      query: result,
    });
  };

  return (
    <div className="text-gray-600">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <p className="text-lg leading-7 text-gray-500 ">
          資料ご請求、およびお問い合わせの場合は下記ご記入お願いいたします。
          <br />
          *は入力必須になります。
        </p>
      </div>
      <div className="container mt-10 font-semibold sm:p-6 sm:mt-0 lg:px-20">
        <div className="mt-5 md:mt-0">
          <form onSubmit={handleRegisterUser}>
            <div className="mb-3">
              <label htmlFor="fullname">お名前</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                placeholder="お名前"
                autoComplete="name"
                required
                minLength={3}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="labo">研究室</label>
              <input
                id="labo"
                name="labo"
                type="text"
                className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                placeholder=""
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">メールアドレス</label>
              <input
                id="email"
                name="email"
                type="email"
                className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                placeholder="送信可能な形式：name@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message">問合せ内容</label>
              <textarea
                id="message"
                name="message"
                className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                rows={3}
                required
                minLength={20}
              ></textarea>
            </div>
            <div className="flex my-6">
              <span className="mr-2">ニュースレター配信</span>
              <div className="mt-0">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="newsletter"
                    className="form-radio"
                    name="newsletter"
                    value="要"
                    onChange={handleOnChange}
                    checked={isCheckboxState}
                  />
                  <span className="ml-2">要</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    id="newsletter"
                    className="form-radio"
                    name="newsletter"
                    value="不要"
                    onChange={handleOnChange}
                    checked={isCheckboxState}
                  />
                  <span className="ml-2">不要</span>
                </label>
              </div>
            </div>
            <div className="py-3 px-4 text-right bg-gray-50 sm:px-6">
              <button
                type="submit"
                className="p-2 w-full font-medium text-gray-200 bg-gradient-to-r from-gray-400 focus:from-purple-700 to-gray-500 focus:to-yellow-400 rounded-md border border-gray-50 focus:ring-2 focus:ring-offset-2 shadow-md focus:outline-none"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
