import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID mUEq3g5h9eBalrWjkwmexFxfzJ7FtC-rCu4t7JNpBGc",
    },
    params: {
      query: term,
    },
  });


  return response.data.results;
};

export default searchImages;
