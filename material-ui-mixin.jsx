// Write your package code here!
// console.log('gyo',MUI)
if(Meteor.isClient){
  Object.keys(MUI).forEach(function (key) {
    window[key] = MUI[key]
  });
}
ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();



MaterialUIMixin = {
  childContextTypes: {
      muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
      return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
  },
};
