import axios from "axios";

const { cmEmailServiceUrlConstant } = require("../../data/axisos");

export default async function emailMessageUrls(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Only POST requests are allowed" });
    return;
  }

  const {
    fromAddressID,
    fromName,
    toAddress,
    toName,
    ccEmailAddress,
    subject,
    htmlBody = "",
    textBody = "",
    attachmentUrl,
    attachmentFileName,
    customerReference,
  } = req.body?.emailData;

  let attachments = null;
  if (attachmentUrl) {
    try {
      const response = await axios.get(attachmentUrl, {
        responseType: "arraybuffer",
      });
      const attachmentContentBase64 = Buffer.from(response.data).toString(
        "base64"
      );
      attachments = [
        {
          Content: attachmentContentBase64,
          FileName: attachmentFileName,
        },
      ];
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch attachment" });
      return;
    }
  }

  const payload = {
    FromAddressID: fromAddressID,
    FromName: fromName,
    ReplyToAddressID: null,
    ReplyToAddress: null,
    ReplyToName: null,
    ToAddress: toAddress,
    ToName: toName,
    Ccs: ccEmailAddress ? [{ EmailAddress: ccEmailAddress }] : null,
    Bccs: null,
    Subject: subject,
    HtmlBody: htmlBody,
    TextBody: textBody,
    Attachments: attachments,
    CustomerReference: customerReference,
  };

  try {
    const response = await axios.post(
      cmEmailServiceUrlConstant?.baseURL,
      payload,
      {
        headers: {
          "X-CM-PRODUCTTOKEN": process.env.CM_PRODUCT_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );

    res
      .status(200)
      .json({ message: "Email sent successfully", data: response.data });
  } catch (error) {
    res.status(500).json({
      message: "Failed to send email",
      error: error.response ? error.response.data : error.message,
    });
  }
}
