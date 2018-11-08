var playlist = {
  Sublime: "What I Got",
};

function updatePlaylist(targetObject, updatesObject) {
return Object.assign({}, targetObject, updatesObject);
}


function removeFromPlaylist(obj, key) {
  delete obj.key;
  return obj;
}