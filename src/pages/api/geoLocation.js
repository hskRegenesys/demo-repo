import axios from "axios";
export default function handleSubmit(req, res) {
  if (req.method === "GET") {
    axios.get("https://geolocation-db.com/json").then(function (data) {
      res.send(data.data);
    });
  }
}
