const axios = require("axios");

exports.getInfoCovid = async (req, res) => {
  axios
    .get("https://covid-19-data.p.rapidapi.com/totals", {
      headers: {
        "x-rapidapi-key": "b11bd72152mshf48d460557b1c2cp140654jsn92217a09e45b",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        useQueryString: true,
      },
    })
    .then((response) => {
      res.json(response.data);
    });
};
