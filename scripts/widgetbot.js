function widgetbot(action, arg1, arg2) {
  if (action == "notify" || action == 'notify' || action == 1 || action == '1' || action == "1") {
    crate.notify({ content: arg1, timeout: arg2});
  } else if (action == "toggle" || action == 'toggle' || action == 2 || action == '2' || action == "2") {
    if (arg2 == null) {
      crate.toggle();
    } else {
      crate.toggle(arg2);
    }
  } else {
    console.error("An invalid 'action' parameter was assigned a value while executing the function! - C.O.T Team");
  }
}