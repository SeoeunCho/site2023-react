/** 엔티티를 원래의 문자로 변환하는 함수 */
export const decodeHTMLEntities = (text) => {
  const entities = {
    "&amp;": "&",
    "&#38;": "&",
    "&#x26;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&#x3C;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&#x3E;": ">",
    "&quot;": '"',
    "&#34;": '"',
    "&#x22;": '"',
    "&#x27;": "'",
    "&#39;": "'",
  };

  return text.replace(/&(amp|lt|gt|quot|#34|#x22|#x27|#39|#38|#x26);/g, (match) => entities[match]);
};