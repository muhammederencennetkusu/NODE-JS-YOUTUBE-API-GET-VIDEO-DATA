<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - YouTube Video Detayları</title>
</head>
<body>

<h1>YouTube Video Detayları Çekme</h1>

<p>Bu proje, YouTube API'si kullanarak bir video ID'sine ait bilgileri (başlık, açıklama, görüntülenme sayısı, beğeni sayısı) çeker ve konsola yazdırır.</p>

<h2>Gereksinimler</h2>

<ul>
    <li>Node.js'in yüklü olması gerekmektedir.</li>
    <li>Aşağıdaki bağımlılığın yüklenmesi gerekmektedir:
        <ul>
            <li><code>axios</code> - HTTP isteklerini yapmak için kullanılır.</li>
        </ul>
    </li>
    <li>Google API Key gerekmektedir. YouTube Data API v3 için bir API anahtarı almanız gerekecek.</li>
</ul>

<h2>Kurulum</h2>

<ol>
    <li>Projenin bulunduğu dizine gidin.</li>
    <li>Gerekli bağımlılığı yüklemek için şu komutu çalıştırın:
        <pre><code>npm install axios</code></pre>
    </li>
    <li>Google API anahtarınızı edinin ve <code>API_KEY</code> değişkenine yerleştirin.</li>
    <li>Video ID'sini almak istediğiniz video ile değiştirin. Örneğin: <code>dQw4w9WgXcQ</code></li>
</ol>

<h2>Kullanım</h2>

Aşağıdaki komut ile YouTube videosunun detaylarını çekebilirsiniz:

<pre><code>
const axios = require('axios');

const API_KEY = 'API-KEY';  <!-- Buraya kendi API anahtarınızı ekleyin -->
const BASE_URL = 'https://www.googleapis.com/youtube/v3/videos';

async function getVideoDetails(videoId) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        id: videoId, 
        part: 'snippet,contentDetails,statistics',
        key: API_KEY,
      },
    });

    const videoData = response.data.items[0];

    if (!videoData) {
      console.log('Video bulunamadı.');
      return;
    }

    console.log('Başlık:', videoData.snippet.title);
    console.log('Açıklama:', videoData.snippet.description);
    console.log('Görüntüleme Sayısı:', videoData.statistics.viewCount);
    console.log('Beğeni Sayısı:', videoData.statistics.likeCount);
  } catch (error) {
    console.error('Hata:', error.message);
  }
}

const videoId = 'dQw4w9WgXcQ';  <!-- Buraya sorgulamak istediğiniz video ID'sini girin -->
getVideoDetails(videoId);
</code></pre>

<h2>Açıklamalar</h2>

<ul>
    <li><strong>videoId:</strong> YouTube video ID'sini burada belirtmelisiniz. Bu, video URL'sindeki son kısmıdır (örneğin: <code>dQw4w9WgXcQ</code>).</li>
    <li><strong>API_KEY:</strong> Google API anahtarınızı buraya ekleyin. Bu anahtar, API ile etkileşime geçebilmek için gereklidir.</li>
    <li><strong>axios:</strong> API'ye GET isteği yapmak için kullanılan kütüphane. İstek başarıyla tamamlandığında, video detayları konsola yazdırılır.</li>
</ul>

<h2>Yapılacaklar</h2>

<ul>
    <li>Video ID'lerini dinamik hale getirmek için kullanıcı girişi ekleyebilirsiniz.</li>
    <li>İstenilen video verilerini daha detaylı şekilde işlemek veya farklı formatlarda (JSON gibi) çıktı almak için kodu geliştirebilirsiniz.</li>
</ul>

</body>
</html>
