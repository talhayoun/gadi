"use client";

import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(1); // Second item open by default

    const faqs = [
        {
            question: "מה הזמינות שלכם?",
            answer: "בדרך כלל אנחנו יכולים להגיע לאיתור נזילה בהתראה של יום מראש."
        },
        {
            question: "האם אתם גם מאתרים את הבעיה וגם מתקנים?",
            answer: "כמובן, ברשותנו צוותים בעלי ניסיון רב הנותנים מענה לכל הנוגע באיתור הנזילה ובתיקון שלה."
        },
        {
            question: "כמה זה עולה?",
            answer: "טווח המחירים של איתור נזילה נע בין ₪1,500 ל-₪5,000. המחיר משתנה בהתאם לבעיה ולמורכבות העבודה. חשוב לציין כי אצלנו תקבלו הצעת מחיר מסודרת טרם ביצוע העבודה."
        },
        {
            question: "אתם צריכים לבקר בנכס לפני ביצוע איתור הנזילה?",
            answer: "ברוב המוחלט של המקרים לא נדרש להגיע לביקור טרם ביצוע האיתור. אנחנו מגיעים ישירות לעבודה ולשורש הבעיה."
        },
        {
            question: "כמה זמן זה לוקח?",
            answer: "לרוב תהליך איתור הנזילה לא עולה על שעתיים, אך במקרים מורכבים קיימים מצבים בהם אנו חוזרים לבדיקות בפריסה של מספר ימים."
        },
        {
            question: "מה קורה במצב בו לא איתרתם את הנזילה?",
            answer: "במצב בו לא הצלחנו לאתר את מקור הרטיבות, אנו מזכים את הלקוח בסכום ששילם עבור איתור הנזילה. קיימים מקרים מורכבים שבהם אנו חוזרים לנכס ופורסים את הבדיקה למשך כמה ימים, אך לעולם לא נשאיר לקוח ללא מענה."
        },
        {
            question: "האם אתם נותנים שירות גם למגזר הפרטי?",
            answer: "כמובן. אנחנו נותנים שירות, מענה ויחס אישי גם למגזר הפרטי."
        },
        {
            question: "האם אתם עובדים בכל הארץ?",
            answer: "כמובן, חברתנו מספקת מענה בכל רחבי הארץ."
        },
        {
            question: "קיבלתי התראה מתאגיד המים על צריכה מוגברת, מה עלי לעשות?",
            answer: "אם קיבלתם התראה על צריכה מוגברת, ככל הנראה יש לכם דליפת מים ממערכת האספקה של הנכס. בשלב הראשון אנו מגיעים לאתר את הנזילה בכדי לדייק ולמנוע הרס מיותר של שבירת מרצפות. בשלב השני אנו מטפלים כירורגית בבעיה."
        }

    ];

    return (
        <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "40px 40px" }}
            ></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-on-surface text-center mb-16">
                    תמיד שואלים אותנו...
                </h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index
                                ? "bg-white shadow-xl shadow-primary/5 border border-primary/20"
                                : "border border-slate-200 bg-transparent"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className={`w-full flex items-center justify-between p-6 text-right font-bold transition-colors group ${openIndex === index
                                    ? "text-primary"
                                    : "text-on-surface hover:text-primary"
                                    }`}
                            >
                                <span>{faq.question}</span>
                                <span
                                    className={`material-symbols-outlined transition-transform ${openIndex === index
                                        ? "text-primary"
                                        : "text-slate-400 group-hover:text-primary rotate-180"
                                        }`}
                                >
                                    expand_more
                                </span>
                            </button>
                            {openIndex === index && faq.answer && (
                                <div className="px-6 pb-8 text-on-surface-variant leading-relaxed">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
