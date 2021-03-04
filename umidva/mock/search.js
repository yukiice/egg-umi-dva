export default {
  'GET /api/getLists': {
    lists: ['1', '2', '3'],
  },
  'GET /api/getListsAsync': (req, res) => {
    setTimeout(() => {
      res.json({
        lists: Array(10).fill(req.query.value),
      });
    }, 3000);
  },
};
