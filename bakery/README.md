# Acboztech Pastane Web Sitesi

Modern ve duyarlı bir pastane web sitesi. HTML5, CSS3 ve minimal JavaScript kullanılarak geliştirilmiştir.

## 🎯 Proje Özellikleri

- **Modern Tasarım**: Sıcak ve davetkar renk paleti (kahverengi, bej, altın sarısı)
- **Tam Duyarlı**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Hızlı Yükleme**: Optimize edilmiş kod yapısı
- **SEO Dostu**: Semantic HTML5 yapısı
- **Erişilebilir**: WCAG standartlarına uygun tasarım

## 📁 Dosya Yapısı

```
bakery/
├── index.html          # Ana sayfa
├── about.html          # Hakkımızda sayfası
├── services.html       # Hizmetler sayfası
├── products.html       # Ürünler sayfası
├── menu.html           # Menü sayfası
├── cart.html           # Sepet sayfası
├── contact.html        # İletişim sayfası
├── styles.css          # Ana CSS dosyası
├── script.js           # JavaScript dosyası
└── README.md           # Proje dokümantasyonu
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Ana Renk**: #8b4513 (Koyu Kahverengi)
- **İkincil Renk**: #d2691e (Altın Sarısı)
- **Arka Plan**: #fef7ed (Açık Bej)
- **Metin**: #2d3748 (Koyu Gri)

### Tipografi
- **Başlıklar**: Playfair Display (Serif)
- **Gövde Metni**: Inter (Sans-serif)

## 📱 Sayfalar ve Özellikler

### 1. Ana Sayfa (index.html)
- Hero bölümü ile etkileyici giriş
- Ürün kategorileri
- Öne çıkan özellikler
- Müşteri yorumları
- Newsletter aboneliği

### 2. Hakkımızda (about.html)
- Şirket hikayesi
- Değerler ve misyon
- Ekip bilgileri
- Zaman çizelgesi
- İstatistikler

### 3. Hizmetler (services.html)
- Detaylı hizmet açıklamaları
- Sekmeli içerik sistemi
- Hizmet süreçleri
- Ek hizmetler

### 4. Ürünler (products.html)
- Filtreleme sistemi
- Kategori bazlı görünüm
- Sayfalama
- Ürün kartları

### 5. Menü (menu.html)
- Kategori bazlı menü
- Detaylı ürün açıklamaları
- Özel teklifler
- Fiyat bilgileri

### 6. Sepet (cart.html)
- Ürün listesi
- Miktar kontrolü
- Sipariş özeti
- Teslimat seçenekleri
- Ödeme yöntemleri

### 7. İletişim (contact.html)
- İletişim bilgileri
- İletişim formu
- Harita entegrasyonu
- Sosyal medya linkleri

## 🚀 Kullanılan Teknolojiler

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling ve animasyonlar
- **JavaScript**: Etkileşimli özellikler
- **Font Awesome**: İkonlar
- **Google Fonts**: Tipografi

### Özellikler
- **CSS Grid & Flexbox**: Modern layout sistemi
- **CSS Animations**: Smooth geçişler
- **Responsive Design**: Mobil-first yaklaşım
- **Form Validation**: JavaScript ile form doğrulama
- **Local Storage**: Kullanıcı tercihleri

## 📋 Kurulum

1. Projeyi klonlayın:
```bash
git clone [repository-url]
cd bakery
```

2. Dosyaları web sunucusuna yükleyin veya local server kullanın:
```bash
# Python ile local server
python -m http.server 8000

# Node.js ile
npx serve .
```

3. Tarayıcınızda açın:
```
http://localhost:8000
```

## 🎯 Özellikler

### Responsive Tasarım
- Mobil cihazlar (320px+)
- Tablet cihazlar (768px+)
- Masaüstü (1024px+)

### Etkileşimli Özellikler
- Mobil menü
- Ürün filtreleme
- Sepet yönetimi
- Form doğrulama
- Smooth scrolling
- Loading animasyonları

### Performans
- Optimize edilmiş görseller
- Minified CSS/JS
- Lazy loading
- Caching stratejileri

## 🔧 Özelleştirme

### Renkleri Değiştirme
`styles.css` dosyasında CSS değişkenlerini güncelleyin:

```css
:root {
    --primary-color: #8b4513;
    --secondary-color: #d2691e;
    --background-color: #fef7ed;
    --text-color: #2d3748;
}
```

### İçerik Güncelleme
- HTML dosyalarında metin içeriklerini değiştirin
- Görselleri kendi görsellerinizle değiştirin
- İletişim bilgilerini güncelleyin

### Yeni Sayfa Ekleme
1. Yeni HTML dosyası oluşturun
2. Header ve footer yapısını kopyalayın
3. CSS stillerini ekleyin
4. Navigation menüsünü güncelleyin

## 📞 İletişim Bilgileri

- **Telefon**: +90 212 555 0123
- **E-posta**: info@acboztech.com
- **Adres**: İstanbul, Türkiye
- **Çalışma Saatleri**: Her Gün 06:00 - 22:00

## 🛠️ Geliştirme Notları

### CSS Yapısı
- BEM metodolojisi kullanılmıştır
- Modüler CSS yapısı
- Responsive breakpoint'ler
- CSS Grid ve Flexbox kombinasyonu

### JavaScript Özellikleri
- ES6+ syntax
- Event delegation
- DOM manipulation
- Local storage kullanımı
- Form validation

### Browser Desteği
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📈 SEO Optimizasyonu

- Semantic HTML5 yapısı
- Meta etiketleri
- Alt etiketleri
- Structured data
- Sitemap hazırlığı
- Page speed optimizasyonu

## 🔒 Güvenlik

- XSS koruması
- Form validation
- HTTPS hazırlığı
- Content Security Policy

## 📱 Mobil Optimizasyon

- Touch-friendly butonlar
- Swipe gestures
- Mobile-first design
- Fast loading
- Offline capability

## 🎨 Tasarım Sistemi

### Bileşenler
- Butonlar (Primary, Secondary, Outline)
- Kartlar (Product, Service, Team)
- Formlar (Contact, Newsletter)
- Navigation (Header, Footer)
- Modals (Search, Cart)

### Animasyonlar
- Hover effects
- Loading states
- Smooth transitions
- Scroll animations
- Micro-interactions

## 📊 Performans Metrikleri

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔄 Güncelleme Geçmişi

### v1.0.0 (2024)
- İlk sürüm
- Temel sayfalar
- Responsive tasarım
- Temel JavaScript özellikleri

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📞 Destek

Herhangi bir sorun veya öneri için:
- GitHub Issues kullanın
- E-posta gönderin: info@acboztech.com
- Telefon: +90 212 555 0123

---

**Acboztech Pastane** - 38 yıllık lezzet deneyimi 