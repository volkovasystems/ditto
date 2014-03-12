/*
  Object.defineProperty( module, property,
    {
      "configurable": true,
      "get": function get( ){
        var currentVersionMethod;
        //[UPDATE PROCEDURES HERE]
        return currentVersionMethod;
      }
    } );
    
    Inside update procedure block:
    1. Get the current version for the function.
    2. Access the remote and ask if there are new versions for that.
    3. Remodify the function.
    
    In cases that the function is part of the object,
    1. Everytime the object is created, keep track of it.
    2. Reinsert the new version of the function if there are updates
      on the tracked object.
*/
