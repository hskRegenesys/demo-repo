const { WhatsAppMessagingAPIConstants } = require("../../data/axisos");

export default async function sendWhatsAppMessage(req, res) {
  if (req.method === "POST") {
    console.log("req", req.body);
    const { Name, Phone } = req?.body?.formData;
    const PhoneNumber = Phone?.replace("+", "");

    const messageData = {
      messages: {
        authentication: {
          producttoken: "5a2cc47d-2f63-4fe9-85ef-26fcede14984",
        },
        msg: [
          {
            from: "0027733502575",
            to: [
              {
                number: `00${PhoneNumber ? PhoneNumber : "27733502575"}`,
              },
            ],
            body: {
              type: "auto",
              content: "wa_openday_zoom_link",
            },
            allowedChannels: ["WhatsApp"],
            richContent: {
              conversation: [
                {
                  template: {
                    whatsapp: {
                      namespace: "1b8c1d6e_a041_4986_9875_d1c247485578",

                      element_name: "wa_openday_zoom_link",
                      language: {
                        policy: "deterministic",
                        code: "en",
                      },
                      components: [
                        {
                          type: "header",
                          parameters: [
                            {
                              type: "image",
                              media: {
                                mediaName: "Referred_Prospect_Conventional",
                                mediaUri:
                                  "https://dr-website-marketing.s3.ap-south-1.amazonaws.com/regenesys-logo-cm.jpg",
                                mimeType: "image/jpg",
                              },
                            },
                          ],
                        },
                        {
                          type: "body",
                          parameters: [
                            {
                              type: "text",
                              text: `${Name ? Name : "User"}`,
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    };
    console.log("messageee", messageData);
    try {
      const response = await fetch("https://gw.cmtelecom.com/v1.0/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to send message" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
