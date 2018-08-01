// Idea courtesy of https://blog.grossman.io/

const to = promise => promise.then(
  data => [null, data],
).catch(err => [err]);

export default to;
