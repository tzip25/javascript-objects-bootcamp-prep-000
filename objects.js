var playlist = {
  Sublime: "What I Got",
};

function updatePlaylist(targetObject, value) {
return Object.assign({}, obj, { [key]: value });
}


function removeFromPlaylist(obj, key) {
  delete obj.key;
  return obj;
}