const Mailjet = require ('node-mailjet')
require('dotenv').config()

const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE,
);


export default function (req, res) {

    const mailData = {
        from: req.body.email,
        name: req.body.name,
        text: req.body.message,
    }

    const request = mailjet
        .post("send", {'version': 'v3.1'})
        .request({
            "Messages":[
                {
                    "From": {
                        "Email": "bastien.chies@gmail.com",
                        "Name": "Bastien"
                    },
                    "To": [
                        {
                            "Email": "bastien.chies@gmail.com",
                            "Name": "Bastien"
                        }
                    ],
                    "Subject": "Contact Portfolio-BCH",
                    "HTMLPart":
                            "<h1>Demande de contact envoyé depuis le portfolio</h1><p>Nom: <strong>" + mailData.name + "</strong></p><p>Email: <strong>" + mailData.from + "</strong></p><p>Message: <strong>" + mailData.text + "</strong></p>",
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
}