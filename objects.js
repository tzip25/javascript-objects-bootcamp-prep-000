var playlist = {
  Sublime: "What I Got",
};

function updatePlaylist(obj, key, value) {
return Object.assign({}, obj, { [key]: value });
}


function removeFromPlaylist(obj, key) {
  delete obj.key;
  return obj;
}