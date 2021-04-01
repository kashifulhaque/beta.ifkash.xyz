const url =
  "https://firebasestorage.googleapis.com/v0/b/kashif-resume.appspot.com/o/resume%2Fresume%20-%20updated%2019%20march%202021.pdf?alt=media&token=879da17d-3cbe-497d-909a-b99f0d530625";

module.exports = (req, res) => {
  res.json({
    cv: url,
  });
};
