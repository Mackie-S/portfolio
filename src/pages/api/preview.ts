export const preview = async (req:any, res:any) => {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(
    `https://mackielab.microcms.io/api/v1/blog/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "" } },
  )
    .then(res => res.json())
    .catch(error => null);

  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/${content.id}` });
  res.end("Preview mode enabled");
};
