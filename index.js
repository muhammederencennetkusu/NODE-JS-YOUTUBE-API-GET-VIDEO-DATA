const axios = require('axios');

const API_KEY = 'API-KEY';
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
const videoId = 'dQw4w9WgXcQ';
getVideoDetails(videoId);
