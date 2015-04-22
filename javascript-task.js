(function(){
  function JavascriptTask(options){
    this.shared = {};
    this.options = this.get_default_options(options);
  }

  JavascriptTask.prototype = {
    constructor: JavascriptTask, 

    init: function(){
      this.options.init.call(this); 
    },

    bind: function(){
      this.options.bind.call(this)
    },

    unbind: function(){
      this.options.unbind.call(this); 
    },

    get_default_options: function(options){
      var defaults = {
        init: function(){},
        bind: function(){},
        unbind: function(){}
      };

      return $.extend({}, defaults, options);
    }
  }


  function JavascriptTaskManager(){
    this._tasks = [];  
  }

  $.extend(JavascriptTaskManager.prototype, {
    init: function(){
      this._tasks.forEach(function(task){
        task.init();
      });
    },

    bind: function(){
      this._tasks.forEach(function(task){
        task.bind(); 
      });
    },

    unbind: function(){
      this._tasks.forEach(function(task){
        task.unbind();
      });
    },

    add: function(task){
      this._tasks.push(new JavascriptTask(task)); 
    }
  });

  window.JavascriptTask = JavascriptTask;
  window.JavascriptTaskManager = JavascriptTaskManager;
}());
