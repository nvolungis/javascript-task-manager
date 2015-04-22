# javascript-task-manager
Helps manage javascript tasks


## Usage

Make a new manager

    var task_manager = new JavascriptTaskManager();
    
Add a task
    
    task_manager.add({
      init: function(){
        this.shared.my_fancy_object = new MyFancyObject();  
        console.log('init 1');
      },
      
      bind: function(){
        //run a method on your fancy object instance that binds to events (click, hover, scroll, etc)
        this.shared.my_fancy_object.bind();
        console.log('bind 1');
      },
      
      unbind: fucntion(){
        //unbind the events you bound to in the bind method
        this.shared.my_fancy_object.unbind();
        console.log('unbind 1');
      }
    });
    
Add a bunch more tasks if you like. They will all be treated independently (You will get a new this.shared object for each task_manager.add() call
    
    task_manager.add({
      init: function(){
        console.log('init 2');
      },
      bind: function(){
        console.log('bind 2');
      },
      unbind: function(){
        console.log('unbind 2');
      }
    });

You can omit any of the callbacks you like 
    
    task_manager.add({
      bind: function(){
        console.log('bind 3');
      }
    });
    
After you set up all your tasks, you can call any of the callbacks on your task_manager object and all the task's callbacks will run

    task_manager.init();
    // init 1
    // init 2
    
    task_manager.bind();
    // bind 1
    // bind 2
    // bind 3
    
    task_manager.unbind();
    // unbind 1
    // unbind 2
    
  That's all folks!
    
