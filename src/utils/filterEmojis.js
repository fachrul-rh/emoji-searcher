export const filterEmojis = ({ emojisData, searchText = '', maxResult = 20 }) => {
  const filteredEmojis = emojisData.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }

    if (emoji.keywords.includes(searchText.toLowerCase())) {
      return true;
    }

    return false;
  });

  return filteredEmojis.splice(0, maxResult);
};
