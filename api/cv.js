const url =
  "https://firebasestorage.googleapis.com/v0/b/kashif-resume.appspot.com/o/resume%2Fresume.pdf?alt=media&token=dcb0e87d-362a-46fa-b30f-84606a5e4b1d";

module.exports = (req, res) => {
  res.json({
    cv: url,
  });
};
