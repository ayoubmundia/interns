const keyword = keyword => {
  return [
    {
      query_string: {
        default_field: 'title',
        query: `*${keyword}*`
      }
    },
    {
      query_string: {
        default_field: 'description',
        query: `*${keyword}*`
      }
    },
    {
      match: {
        title: {
          query: `*${keyword}*`,
          fuzziness: 'AUTO',
          boost: 5,
          operator: 'and'
        }
      }
    },
    {
      match: {
        description: {
          query: `*${keyword}*`,
          fuzziness: 'AUTO',
          boost: 3,
          operator: 'and'
        }
      }
    }
  ];
};

const smiyat = (filter, value) => {
  let objectSmia = {};

  if (filter == 'category') objectSmia = { match: { category: value } };
  if (filter == 'city') objectSmia = { match: { 'location.city': value } };

  return objectSmia;
};

module.exports = { keyword, smiyat };
