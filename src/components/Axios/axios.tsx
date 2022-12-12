import axios from "axios";

export default function handleSubmit(req, res) {
  if (req.method === "POST") {
    const { zapUrl, ...body } = req.body;
    axios.post(zapUrl, body).then(
      (response) => {},
      (error) => {}
    );
  }
  console.log("handleSubmit", handleSubmit);

  res.send();
}
