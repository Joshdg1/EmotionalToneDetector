import { useEffect } from 'react';
import Swal from 'sweetalert2';

// Mapping of emotions images
const emotionImages = {
  sadness: require('../assets/sad.jpg'), 
  anger: require('../assets/angry.jpg'),
  no_emotion: require('../assets/noemotion.jpg'),
  joy: require('../assets/joy.jpeg'),
  surprise: require('../assets/suprised.jpeg'),
  fear: require('../assets/fear.jpeg'),
};

// Mapping of labels
const emotionDisplayNames = {
  sadness: 'Sadness',
  anger: 'Anger',
  no_emotion: 'No Emotion',
  joy: 'Joy',
  surprise: 'Surprise',
  fear: 'Fear',
};

// Mapping of emoticons
const emotionEmojis = {
  sadness: '😢',
  anger: '😡',
  no_emotion: '😐',
  joy: '😊',
  surprise: '😲',
  fear: '😱'
};

const AnalysisResult = ({ result }) => {
  const detectedEmotion = result[0];
  //useEffect to perform side effects when detectedEmotion changes
  useEffect(() => {
    if (detectedEmotion) {
      const { label } = detectedEmotion;

      //Formats the labels returned by the api removing all `_` and replacing them with a space
      const formattedLabel = emotionDisplayNames[label] || label.replace(/_/g, ' ').charAt(0).toUpperCase() + label.slice(1);
      const emoji = emotionEmojis[label];

      const alertText = `${formattedLabel} ${emoji}`

      //Alert to display type of emotion detected
      Swal.fire({
        title: `Emotion Detected:`,
        text: alertText,
        imageUrl: emotionImages[label],
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: `${label} image`,
        timer: 4000,
        confirmButtonText: 'Close',
      });
    }
  }, [detectedEmotion]); 

  return null; 
};

export default AnalysisResult;
