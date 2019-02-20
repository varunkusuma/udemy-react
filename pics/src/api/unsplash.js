import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 0d7c61f6075716807656d480d023aebd6abc8ab2d3fd772972bc820bd7f0d45a"
  }
});
