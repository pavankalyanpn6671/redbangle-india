


export default async function verifyToken(req, res) {
    try {
        const secret = process.env.RECAPTCHA_SECRET_KEY;
        const { token } = req.query;
        if (!token) {
            return res.status(400).json({ success: false, response: 'Missing token' });
        }
        const query = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                secret,
                response: token,
            }),
        })
        const apiresponse = await query.json();
        // console.log(apiresponse,"apiresponse")
        res.status(200).json({ success: apiresponse?.success, data: apiresponse });
    } catch (error) {
        console.log('Error is ', error);
        res.status(500).json({ success: false, response: error })
    }
}
