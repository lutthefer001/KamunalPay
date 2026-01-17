# Kommunal Pay - TODO

## Design & Setup
- [x] Momo Trust Display shriftini Google Fonts'dan qo'shish
- [x] CSS o'zgaruvchilari bilan Olovrang (Orange) va Ko'k (Blue) ranglarini konfiguratsiya qilish
- [x] Global stillarni index.css'da sozlash

## Database & Backend
- [x] Supabase providers jadvalini yaratish (name, account_check_api)
- [x] tRPC procedure'larini yaratish: providers.list, payments.create, payments.list
- [x] Drizzle schema'sini yaratish: providers, payments, savedAccounts jadvallar
- [x] Seed script'i yaratish va providers'ni qo'shish

## Frontend - Asosiy Interfeys
- [x] Home sahifasini yaratish: Gaz, Svet, Suv bo'limlari
- [x] Har bir utilita turi uchun forma: hisob raqami, summa, provider tanlash
- [x] Responsive dizayn (mobile va desktop)

## LocalStorage Funksiyalari
- [x] Saqlangan hisoblarni LocalStorage'da saqlash (custom hook)
- [x] Saqlangan hisoblarni o'qish va ko'rsatish
- [x] Saqlangan hisoblarni o'chirish

## Supabase Integratsiyasi
- [x] Provider ma'lumotlarini Supabase'dan olish
- [x] To'lovlarni Supabase'da saqlash
- [ ] Hisob raqamlarini tekshirish API'si bilan integratsiya (optional)

## To'lov Tasdiqlash va Chek
- [x] Tasdiqlash modali yaratish
- [x] Chek ma'lumotlarini ko'rsatish
- [x] Chek chiqarish (print) funksiyalari
- [x] Modal'ni yopish va to'lov tarixiga qo'shish

## To'lov Tarixi
- [x] To'lov tarixini ko'rsatish sahifasi
- [x] Tarix filtrlash (utilita turi, holati bo'yicha)
- [x] CSV export funksiyalari
- [x] SelectItem value prop xatosini tuzatish

## Testing & Deployment
- [x] Vitest testlarini yozish
- [x] Ilovani to'liq test qilish
- [x] Responsive dizayn test qilish
- [x] Checkpoint yaratish va taqdim etish

## Bug Fixes
- [x] PaymentHistory SelectItem bo'sh string xatosini tuzatish

## Yangi Xizmatlar - Expansion
- [x] Database sxemasini kengaytirish: serviceCategory field
- [x] Uyali aloqa (Mobile) xizmati
- [x] Internet-provayderlar (ISP) xizmati
- [x] Televedeniye (TV) xizmati
- [x] Telefoniya (Landline) xizmati
- [x] Platinum Connect xizmati
- [x] Saytlar hosting xizmati
- [x] Webtv.uz xizmati
- [x] Megaskidka.uz xizmati
- [x] Do'st yordami xizmati
- [x] Kartadan kartaga pul o'tkazmalari xizmati
- [x] Frontend: yangi xizmatlarni ko'rsatish
- [x] USSD-so'rovlar: Tizimga ulanish
- [x] USSD-so'rovlar: Yangi raqamga ro'yxatdan o'tish
- [x] USSD-so'rovlar: Karta balansini tekshirish
- [x] Yangi xizmatlar uchun seed data

## Design & Animation Improvements
- [x] Global CSS animatsiyalari va gradient'larni qo'shish
- [x] Xizmat kategoriyalari uchun hover effects
- [x] Smooth transitions va spring animations
- [x] Loading spinner animatsiyalari
- [x] Modal entrance/exit animatsiyalari
- [x] Button hover va active states
- [x] Payment form smooth transitions
- [x] Table row hover effects

## User Profile & Dashboard Features
- [x] Database: User profile extension (phone, address, avatar)
- [x] Database: User cards table (cardNumber, cardHolder, expiryDate, balance)
- [x] Database: User balance tracking
- [x] Profile sahifasini yaratish
- [x] Card management (add, edit, delete)
- [x] Dashboard sahifasini yaratish - balans va kartalar
- [x] Payment validation va error handling
- [x] Card number validation (Luhn algorithm)
- [x] Expiry date validation
- [x] CVV validation
- [x] Insufficient balance check
- [x] Transaction limits
- [x] Payment history with filters
- [x] User settings page


## Click App Integration
- [x] Karta validatsiyasini 9860 bilan cheklash
- [x] Click Qarz (Loan) funksiyalari
- [x] Click Kredit (Credit) funksiyalari
- [x] Click Oson To'lov (Easy Payment) funksiyalari
- [x] Click Dashboard - statistika va analytics
- [x] Click Loan history va status
- [x] Click Kredit offers va terms
- [x] Click Payment schedule
- [ ] Click Notification system


## Default Karta va Balans
- [x] Foydalanuvchi ro'yxatlanganida default 9860 karta qo'shish
- [x] Default kartada 10 million so'm balans qo'shish
- [x] Test karta raqami: 9860 0000 0000 0001


## Dark Mode & Click Style Design
- [x] CSS o'zgaruvchilari: qora fon, gradient ranglar
- [x] ThemeProvider dark theme sozlash
- [x] Home sahifasini Click style'da qayta tayyorlash
- [x] Profile sahifasini dark mode'ga o'tkazish (qora fon, gradient kartalar)
- [x] PaymentHistory sahifasini dark mode'ga o'tkazish (qora table)
- [x] ClickDashboard sahifasini dark mode'ga o'tkazish (qora dashboard)
- [x] Modallari dark mode'ga o'tkazish
- [x] Buttonlar va input'larni dark mode'ga o'tkazish


## Bug Fixes - Auth Issues
- [x] Kirish jarayonida yana kirish oynasi ochilishi muammosi
- [x] OAuth callback'i tekshirish
- [x] Session cookie'ni tekshirish
- [x] useAuth hook'ni tekshirish

## Final Improvements
- [x] Home sahifasiga Qarz tugmasini qo'shish
- [x] LoanPayment route'ni App.tsx'ga qo'shish
- [x] Barcha sahifalarning orqa fonini qora qilish


## Dark Mode - Barcha Sahifalar
- [x] Profile sahifasining orqa fonini qora qilish
- [x] PaymentHistory sahifasining orqa fonini qora qilish (qora table)
- [x] ClickDashboard sahifasining orqa fonini qora qilish (qora dashboard)
- [x] Modallari dark mode'ga o'tkazish (Profile modal)
- [x] Buttonlar va komponentlarni dark mode'ga o'tkazish

## Qarz To'lash Funksiyalari
- [x] Qarz to'lash sahifasini yaratish (/loan-payment)
- [x] Qarz to'lash grafiki (har kuni 10 ming so'm)
- [x] Qarz to'lash kalkulyatori
- [x] Qarz holati ko'rish (qolgan qarz, to'langan qarz)
- [x] Qarz to'lash tarixi

## Haqiqiy To'lov Oynasi
- [x] To'lov formasini rasmdagi kabi yaratish (LoanPayment.tsx)
- [x] Karta tanlash dropdown
- [x] To'lov summasi kiritish
- [x] Tasdiqlash tugmasi
- [x] To'lov muvaffaqiyat xabari

## Karta Qo'shish Muammosi
- [x] Karta qo'shish funksiyasini tuzatish (Profile.tsx)
- [x] Karta validatsiyasini to'g'ri qilish (9860 bilan boshlash)
- [x] Karta balansini yangilash (default 10 million)


## Bug Fixes - Kirish va Karta Muammolari
- [ ] Kirish muammosi - yana kirish oynasi ochilishi
- [ ] Karta validatsiyasi - "Karta raqami noto'g'ri" xatosi
- [ ] 9860 bilan boshlash validatsiyasini to'g'ri qilish
- [ ] Karta qo'shish modal'da error handling

## Click Design Implementation
- [ ] Hamma sahifalarni Click ilovasiga o'xshash qilish
- [ ] Gradient va color scheme'ni Click kabi qilish
- [ ] Typography va spacing'ni Click kabi qilish
- [ ] Button styles'ni Click kabi qilish
- [ ] Card designs'ni Click kabi qilish

## Animations & Transitions
- [ ] Page transition animatsiyalari
- [ ] Button click animatsiyalari
- [ ] Modal entrance/exit animatsiyalari
- [ ] Scroll animatsiyalari
- [ ] Loading state animatsiyalari
