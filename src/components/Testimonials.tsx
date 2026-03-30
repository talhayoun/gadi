export default function Testimonials() {
  const testimonials = [
    {
      name: "אריאל לוי",
      initials: null,
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocL8jXmZ6r8K7p7P9m8L4zX=s96-c",
      date: "לפני שנה 1",
      text: "הידרו טכנולוגיות ביצעו עבורנו שיקום צנרת ביוב בשיטת אל הרס, והתוצאה הייתה מצויינת! אושר והצוות הפגינו מקצועיות, דיוק...",
      bgColor: null,
    },
    {
      name: "רן שדה",
      initials: "ר",
      avatar: null,
      date: "לפני שנה 1",
      text: "שירות מקצועי, אמין ואיכותי! חברת הידרו טכנולוגיות ביצעה עבורנו שיקום צנרת בשיטת אל הרס, והתוצאה פשוט מעולה. אושר...",
      bgColor: "bg-purple-500",
    },
    {
      name: "יגאל גולן",
      initials: "י",
      avatar: null,
      date: "לפני שנה 1",
      text: "צוות מקצועי וישר ❤️ תענוג לעבוד איתכם",
      bgColor: "bg-teal-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-surface-container-lowest">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-black text-on-surface text-center lg:text-right">
            מאות לקוחות <span className="text-primary">פרטיים ועסקיים שהאמינו בנו</span>
          </h2>
          <div className="flex flex-col items-center lg:items-end">
            <div className="text-3xl font-black text-on-surface mb-2">מְעוּלֶה</div>
            <div className="flex gap-0.5 text-yellow-400 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <div className="text-sm font-bold text-on-surface-variant mb-3">מבוסס על 12 ביקורות</div>
            <img
              alt="Google logo"
              className="h-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6KlnpcyNU51J_C5QXom6exnr30tRF4c0TcpfSdYXW_zmivr6hiHkMzYY4aCBE0desUa_6iHttdaNenF6OtLI24PxLkwpwfSCKajDttA8yhP0qEFlkBJw4vqrBqS0Y-aqFfTChsHrp9QFTtvoz9i7KMOQHz8ProJgWRxzoRi-8vCRIPhJp-Qo8EikHZnfNtFGGFUI3NjCvZapYiOL585OeFGGJFPNhCEB1ejKPkh3M1dXuD5MJyRB8wPLXxw8h6DV8XZbtQXE7WVI"
            />
          </div>
        </div>

        <div className="relative group">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 border border-slate-100 flex flex-col relative"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    {testimonial.avatar ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                        <img alt={testimonial.name} src={testimonial.avatar} />
                      </div>
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${testimonial.bgColor} text-white font-bold text-xl`}
                      >
                        {testimonial.initials}
                      </div>
                    )}
                    <div className="text-right">
                      <div className="font-bold text-on-surface flex items-center gap-1">
                        {testimonial.name}
                        <span
                          className="material-symbols-outlined text-blue-500 text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                      </div>
                      <div className="text-xs text-on-surface-variant">{testimonial.date}</div>
                    </div>
                  </div>
                  <img
                    alt="Google G"
                    className="w-5 h-5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHjFoShOcR6ZPtkUJtNZ8lnBrr4RAxCx4ruHC3YAm6ON2htgLt8jT98EbpA2ebW6E6miiVO4Z4bnMSfaA21wtMyzl63V27S2v2QksZcfxxe-MtzHPxEl4CTkd2fa51Hkr0x4YtZSlGMcibOwCzCyd69NWK_fNALewmieEOWZBKa4LI5-CDZoO0_aPUKooSsOqQhq6CIyexHmxtgFaBOj9G2lRYBMEfLtfIXSlGvJ2vSSR43Ux-RZqtc9qVTKoVWKsTc9dqRUn8img"
                  />
                </div>
                <div className="flex gap-0.5 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <button className="mt-auto text-primary text-xs font-bold self-start">קרא עוד</button>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Client Logos */}
        <div className="mt-24 p-12 bg-slate-100/50 rounded-3xl flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60">
          <img
            alt="Intel"
            className="h-8 grayscale hover:grayscale-0 transition-all"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvaFFpFsxPDbJ2Y7oIhVaDe7w7pfv8QJbMnycaG0BrPFS_xOeF8-TE6dpyM4eHbosrRLNp7Kdg1FI2DuK726O2XP3oAfx7Q2ezBrxsMAue-X8PXdYYq748YRf-CmE4J_XTjOlh8XzDm4UUpkeZSDV47eIoD6E7iB1DCPq7Di00nMvlCp0ZdTRnS63HmXbjhDV5iHOzuaXWIpFvAivZO-3VR9TdjEjmdstC_CTfkoxNpLKPe3N12i93KSU0JqCWU06WjKcSlD1uCB8"
          />
          <img
            alt="Rolex"
            className="h-8 grayscale hover:grayscale-0 transition-all"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpmex3KrqACbDcP_xsdENNLwgii53jNA3G9-UkERhiTqiI2gwMdMZ-i5wa6GHoFD58_7KufavMjeBj0WxLJwvXVlqO9epIsJtTwOCdgUCjyxtRtYKLmT_a1ubXN1uIzgQdwiuB2AMVWlRXpGeHTQsQHdYMA_7iEax1eLQsihkl0xqhEQkBPw-G26nQhxbzgW4cxQZx0Yd2V0rB00tL5m98mCes5L1_UD9t22NmWIxEzB8owChaWApsejCmrWEoNFr4m8btuk6tJXA"
          />
          <img
            alt="Israel Railways"
            className="h-8 grayscale hover:grayscale-0 transition-all"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYf-BMoXm2C-WdV1uRK8La7kVuhJCn9CtrelOl_BQXz-eTPUaVGRlbapJ_RmjfX-605QX3wQOa_NpJB8snmHnB_Bc0JA4VXsh-QHuvrsTn793zIYO4yzd_lRFFIQf2x-D7UA-nYQCJWJOvTNiOirDG8dUw6UDBJ_9Jbk_HnU1DNh6sgV610qu71BVhpA8hlElbOEMXnZ62XXvLLaA4g4XrH0hnJbpHtdzlq-6XaSm3RInhn4NmCXdzf8ZjfL-j5r65SrNo6dQkijs"
          />
          <img
            alt="Hot"
            className="h-8 grayscale hover:grayscale-0 transition-all"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR1zsVYUkebFKUVsada-Wtex8aG0wTR0wvBGoaBlrNLZoOtFSBuxonNSAEQZXE9Y3YZ248InMH_TKAdMRMzK-fTtpNvtgRoOeZoVVQKJrIpdNg4XZi71qbhzOtyx4iqI3fDhikhXjOeM6VWO4G2bJDrhy7dxkeLFr9VWlhCzp0vOOv6Iw-8TNCpfXkexHXQstAPYwUGMvtZ3dmlSoEHI_AuuVK9RV6lsR0-34AUW1HfgT-2XpXgt2qBTtMvUQHFs2GoaxiHkTy2to"
          />
          <img
            alt="Mamilla Hotel"
            className="h-8 grayscale hover:grayscale-0 transition-all"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxMW_kB7XJhHaWRzy0Pt1u-4p5HvaBAXkvLWSJA8MPDD169NDfDusqHm0Edljhp9a8YhlV6ZsKOo5pQVrSV6969sGsQz1ze3oWH4yM9KgX3CzsyfkzwGUKV8Xq-meuNMSccb71e4-WUzrrCvRNtSa2GvAbc4CY9pvMzw3zWAbqjniEKPhjd-7GZ0Q9zri5nh97xjdXo7pSzVIqovBD1FfSP_68WMsHj74eZb02oI8ayIRemdhZpWIoGz35uGAQ247pPXn4JJ7aZAw"
          />
          <img
            alt="Paz"
            className="h-10 grayscale hover:grayscale-0 transition-all"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE1AD4Sbznclz_TtROo9AiZsyJ4Pb92tzY-3sojTkeJk1q2G_MdeAvDEHJs2nJWpxYs28l2KI4nE862sdzVG61Mlm53ZgljiZndRBuDqnGgEmYQE0sKlyLqawgnUVxm3mdOwj8Hn-KzLsN3rX8pv1r05aOCs5_4sTVuHllpwrVzLWuI1PtIZmXISLdo4rupVvFJq7z5UjRzHxe0tm5RQyjpnRYY56tOz-isAH0fexvFXZwLGzuxJ_XgKGByJjihW3QMFKhnpuAsqk"
          />
        </div>
      </div>
    </section>
  );
}
