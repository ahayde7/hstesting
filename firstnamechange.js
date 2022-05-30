exports.main = async (event, callback) => {
  var firstnamechange = 'testing';
  

  callback({
    outputFields: {
      firstnamechange: firstnamechange,
    }
  });
}
