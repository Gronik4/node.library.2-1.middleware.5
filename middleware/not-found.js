export default function notFound(req, res) {
  res.status(404);
  res.json('404 | Книги с таким id нет в библиотеке.')
}
