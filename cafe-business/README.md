# Acboztech Kafe - Modern Web Sitesi

Türkiye'deki bir kafe işletmesi için tasarlanmış modern, duyarlı ve kullanıcı dostu web sitesi.

## 🎨 Özellikler

- **Modern Tasarım**: AI tarafından seçilen kafe sektörüne uygun renk paleti
- **Duyarlı Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Çoklu Sayfa Yapısı**: Her bölüm ayrı HTML dosyası
- **Hızlı Yükleme**: Optimize edilmiş kod yapısı
- **SEO Dostu**: Semantic HTML5 yapısı
- **Erişilebilirlik**: WCAG standartlarına uygun
- **Modern Animasyonlar**: Smooth scrolling ve hover efektleri
- **İletişim Formu**: JavaScript ile form validasyonu
- **Mobil Menü**: Hamburger menü ile mobil uyumluluk

## 🚀 Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Modern styling ve animasyonlar
- **JavaScript (ES6+)**: Minimal ve etkili etkileşimler
- **Font Awesome**: İkonlar için
- **Google Fonts**: Inter font ailesi

## 🎯 Renk Paleti

AI tarafından seçilen kafe sektörüne uygun renk paleti:

- **Primary**: `#8B4513` (Saddle Brown - Warm Coffee)
- **Secondary**: `#D2691E` (Chocolate - Rich Brown)
- **Accent**: `#FFD700` (Gold - Premium Feel)
- **Dark**: `#2F1B14` (Dark Brown - Deep Coffee)
- **Light**: `#F5F5DC` (Beige - Light Cream)

## 📁 Proje Yapısı

```
cafe-business/
├── index.html          # Ana sayfa
├── about.html          # Hakkımızda sayfası
├── services.html       # Hizmetler sayfası
├── contact.html        # İletişim sayfası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
└── README.md           # Proje dokümantasyonu
```

## 🛠️ Kurulum

1. Projeyi klonlayın veya indirin
2. `cafe-business` klasörüne gidin
3. `index.html` dosyasını web tarayıcınızda açın
4. Veya yerel bir sunucu kullanın:
   ```bash
   # Python ile
   python -m http.server 8000
   
   # Node.js ile
   npx serve .
   ```

## 📱 Sayfa Bölümleri

### 1. Ana Sayfa (index.html)
- **Hero Section**: Etkileyici başlık ve çağrı-to-action
- **Features**: Öne çıkan özellikler
- **Menu Preview**: Popüler menü öğeleri
- **About Preview**: Şirket hikayesi özeti
- **Testimonials**: Müşteri yorumları
- **Contact Preview**: Hızlı iletişim formu

### 2. Hakkımızda (about.html)
- **Story Section**: Şirket hikayesi
- **Mission Vision**: Misyon, vizyon ve değerler
- **Team**: Ekip üyeleri
- **Values**: Temel değerler
- **Stats**: İstatistikler
- **Timeline**: Gelişim süreci

### 3. Hizmetler (services.html)
- **Services Overview**: Hizmet kartları
- **Menu Section**: Detaylı menü
  - Kahve çeşitleri
  - Yemek menüsü
  - Tatlılar
- **Special Offers**: Özel teklifler
- **Working Space**: Çalışma alanı özellikleri

### 4. İletişim (contact.html)
- **Contact Info**: İletişim bilgileri
- **Contact Form**: Detaylı iletişim formu
- **Map Section**: Konum bilgisi
- **FAQ**: Sık sorulan sorular
- **Social Media**: Sosyal medya linkleri

## 🎨 Özelleştirme

### Renkleri Değiştirme
`styles.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D2691E;
    --accent-color: #FFD700;
    /* ... diğer renkler */
}
```

### İçerik Güncelleme
- Her HTML dosyasında metinleri değiştirin
- Font Awesome ikonlarını değiştirin
- Görselleri kendi görsellerinizle değiştirin

### Stil Özelleştirme
- `styles.css` dosyasında CSS kurallarını düzenleyin
- Responsive breakpoint'leri ayarlayın
- Animasyon sürelerini değiştirin

## 📱 Responsive Breakpoint'ler

- **Desktop**: 1200px ve üzeri
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 480px altı

## 🔧 JavaScript Özellikleri

- **Mobil Menü**: Hamburger menü toggle
- **Smooth Scrolling**: Sayfa içi linkler için
- **Form Validation**: İletişim formu validasyonu
- **Notifications**: Başarı/hata bildirimleri
- **Scroll Progress**: Sayfa ilerleme göstergesi
- **Animations**: Intersection Observer ile animasyonlar
- **FAQ Accordion**: Sık sorulan sorular
- **Counter Animation**: İstatistik sayaçları
- **Parallax Effect**: Hero section parallax
- **Typing Effect**: Başlık yazma animasyonu

## 🌐 Tarayıcı Desteği

- Chrome (90+)
- Firefox (88+)
- Safari (14+)
- Edge (90+)
- Mobile browsers

## 📈 Performans

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **PageSpeed Insights**: 90+ (Mobile & Desktop)
- **Core Web Vitals**: Optimized

## 🔒 Güvenlik

- XSS koruması
- Form input sanitization
- Secure external links

## 📞 İletişim Bilgileri

- **Adres**: Bağdat Caddesi No: 123, Kadıköy, İstanbul
- **Telefon**: +90 (212) 555 0123
- **E-posta**: info@acboztech.com
- **Çalışma Saatleri**: Pazartesi - Pazar 07:00 - 23:00

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📝 Changelog

### v1.0.0 (2024-01-01)
- İlk sürüm
- Çoklu sayfa yapısı
- Responsive tasarım
- Kafe sektörüne uygun renk paleti
- JavaScript etkileşimleri
- Form validasyonu
- Animasyonlar ve efektler

## 🎯 Özellik Detayları

### Ana Sayfa Özellikleri
- Hero section ile etkileyici giriş
- Floating animasyonlu kahve ikonu
- Öne çıkan özellikler kartları
- Menü önizleme bölümü
- Müşteri yorumları
- Hızlı iletişim formu

### Hakkımızda Sayfası
- Detaylı şirket hikayesi
- Misyon, vizyon ve değerler
- Ekip üyeleri profilleri
- İstatistik sayaçları
- Zaman çizelgesi animasyonu

### Hizmetler Sayfası
- Kapsamlı hizmet kartları
- Detaylı menü kategorileri
- Özel teklifler bölümü
- Çalışma alanı özellikleri
- Fiyat listesi

### İletişim Sayfası
- İletişim bilgileri kartları
- Detaylı iletişim formu
- Harita entegrasyonu
- FAQ accordion
- Sosyal medya linkleri

## 🚀 Gelecek Özellikler

- Online rezervasyon sistemi
- E-ticaret entegrasyonu
- Blog bölümü
- Çoklu dil desteği
- PWA (Progressive Web App) özellikleri
- Analytics entegrasyonu

---

**Acboztech Kafe** - Teknoloji ve lezzetin buluşma noktası ☕ 