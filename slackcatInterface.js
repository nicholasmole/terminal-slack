const blessed = require('blessed');

const keyBindings = {};

function slackCat(searchCallback) {
  const slackBoxTitle = blessed.text({
    width: '90%',
    left: '5%',
    align: 'left',
    content: '{bold}slackCat{/bold}',
    tags: true,
  });
  const slackBox = blessed.textbox({
    width: '90%',
    height: 'shrink',
    left: '5%',
    top: '5%',
    keys: true,
    vi: true,
    inputOnFocus: true,
    border: {
      fg: '#cc6666',
      type: 'line',
    },
  });
  function removeSlackBox() {
    mainWindow.remove(slackBox);
    mainWindow.remove(slackBoxTitle);
    mainWindow.append(mainWindowTitle);
    mainWindow.append(chatWindow);
    mainWindow.append(messageInput);
    screen.render();
  }
  slackBox.on('keypress', (ch, key) => {
    if (Object.keys(keyBindings).includes(key.full)) {
      searchBox.cancel();
      removeSearchBox();
      const fn = keyBindings[key.full];
      if (fn) {
        fn();
      }
    }
  });
  searchBox.on('submit', (text) => {
    removeSearchBox();
    searchCallback(text);
  });
  mainWindow.remove(mainWindowTitle);
  mainWindow.remove(chatWindow);
  mainWindow.remove(messageInput);
  mainWindow.append(searchBoxTitle);
  mainWindow.append(searchBox);
  searchBox.focus();
  screen.render();
}