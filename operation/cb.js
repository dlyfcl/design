exports.cb = function(next) {
  return function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    next(data);
  };
};