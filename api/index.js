export default function handler(req, res) {
  const url = process.env.REDIRECT_URL;
  if (!url) {
    res.status(500).send('REDIRECT_URL environment variable is not set.');
    return;
  }
  res.redirect(301, url);
}
